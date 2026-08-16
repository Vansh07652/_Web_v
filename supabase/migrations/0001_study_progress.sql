-- MedMosa — study progress ownership
--
-- Run with:  supabase db push
-- or paste into the Supabase dashboard SQL editor and run once.
--
-- One row per user holding the same JSON shape the browser already stores, so
-- the account is a synchronised copy of local progress rather than a second,
-- differently-shaped source of truth that could disagree with it.
--
-- Authorisation lives here, not in the client. The anon key that ships in the
-- browser bundle can reach this table, and these policies are what make that
-- safe: every statement is constrained to rows whose user_id equals the user
-- id in the verified JWT. A tampered client cannot read or write anyone else's
-- row, because the check runs inside Postgres.

create table if not exists public.study_progress (
  user_id     uuid primary key references auth.users (id) on delete cascade,
  state       jsonb not null default '{"version":1,"days":{},"topics":{},"courses":{}}'::jsonb,
  updated_at  timestamptz not null default now(),
  -- Cheap structural guard: the client merges on these three keys, so a row
  -- missing them would break the merge rather than merely be empty.
  constraint study_progress_state_shape check (
    jsonb_typeof(state -> 'days') = 'object'
    and jsonb_typeof(state -> 'topics') = 'object'
    and jsonb_typeof(state -> 'courses') = 'object'
  )
);

comment on table public.study_progress is
  'Per-user study progress. Mirrors the browser-local store; merged on sign-in.';

alter table public.study_progress enable row level security;

-- Recreated idempotently so the migration can be re-run safely.
drop policy if exists "read own progress"   on public.study_progress;
drop policy if exists "insert own progress" on public.study_progress;
drop policy if exists "update own progress" on public.study_progress;
drop policy if exists "delete own progress" on public.study_progress;

create policy "read own progress"
  on public.study_progress for select
  using (auth.uid() = user_id);

create policy "insert own progress"
  on public.study_progress for insert
  with check (auth.uid() = user_id);

create policy "update own progress"
  on public.study_progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Deleting your own data is a right, not an admin action.
create policy "delete own progress"
  on public.study_progress for delete
  using (auth.uid() = user_id);

-- Keep updated_at honest even if a client forgets to send it.
create or replace function public.touch_study_progress()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists study_progress_touch on public.study_progress;
create trigger study_progress_touch
  before insert or update on public.study_progress
  for each row execute function public.touch_study_progress();

-- No grants to `anon`: an unauthenticated visitor has no row and needs none.
grant select, insert, update, delete on public.study_progress to authenticated;
