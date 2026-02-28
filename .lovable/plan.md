

## Plan

### 1. Remove admin/editor functionality everywhere
- **Events.tsx**: Remove admin imports, state, handlers (`handleLogin`, `handleFileChange`, `handleAdd`, `handleDelete`), admin login UI block, add-form modal, and delete buttons on cards
- **Gallery.tsx**: Same removal of admin imports, state, handlers, admin login UI, add-photo modal, and delete buttons
- **App.tsx**: Remove `AdminProvider` wrapper and import
- **AdminContext.tsx**: Delete the file entirely
- **eventStore.ts**: Remove `saveCustomEvents`, `saveCustomPhotos`, `uid` exports (no longer needed)

### 2. Remove "DDMotors Disco Night" from tags
- **eventStore.ts**: Remove `"DDMotors Disco Night"` from `EVENT_TAGS` array, keeping only `"DDMOTORS NIGHT"` and `"DDMOTORS RADUNI"`

### 3. Keep only last two events (ev4, ev5) and remove ev1, ev2, ev3
- **eventStore.ts**: Remove ev1, ev2, ev3 from `defaultEvents`; remove corresponding photos (ph1, ph2, ph3, ph5) from `defaultPhotos`, keeping only ph4 (linked to ev5) and ph2 (linked to ev4)

### 4. Sort events: "Prossimo" (upcoming) first, then "Passato", most recent first within each group
- **Events.tsx**: After filtering by tag, sort the events so "Prossimo" status comes before "Passato"
- Since only ev4 (Passato) and ev5 (Passato) remain, both are "Passato" — ev5 (Feb 2026) is more recent than ev4 (Dec 2025), so ev5 should appear first. Reorder the array in `defaultEvents` accordingly.

### Files to modify
1. `src/lib/eventStore.ts` — remove disco night tag, keep only ev4+ev5 (ev5 first), remove unused exports
2. `src/pages/Events.tsx` — strip all admin code, add sorting logic
3. `src/pages/Gallery.tsx` — strip all admin code
4. `src/App.tsx` — remove AdminProvider
5. `src/contexts/AdminContext.tsx` — delete file

