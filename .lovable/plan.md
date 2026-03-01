

## Plan: Use uploaded flyer as cover for "1ST DDMOTORS NIGHT" event

### What changes

1. **Copy the uploaded image** to `src/assets/locandina-ddmotors-night.jpeg`

2. **`src/lib/eventStore.ts`** — Import the new image and use it as `img` for event `ev5` (1ST "DDMOTORS NIGHT"). Also update the gallery photo `ph4` to use the same image.

3. **`src/pages/Index.tsx`** — Import the new image and use it for the first event card (1ST "DDMOTORS NIGHT") instead of `event1`.

4. **Adapt card layout for vertical/portrait images** — Since all covers will be portrait (like this flyer), adjust:
   - **Events.tsx**: Change the event cards from landscape `h-[50vh]/h-[60vh]` to a portrait aspect ratio (`aspect-[3/4]`) with `object-contain` or constrained sizing so images don't get cropped/pixelated.
   - **Index.tsx**: The homepage event cards already use `aspect-[3/4]` which suits portrait images — no change needed there.
   - Use `object-cover` with `object-top` or switch to `object-contain` with a dark background to avoid grainy stretching on the events page.

### Technical details

- The event cards on `/raduni` are currently full-width banners (`h-[50vh]`). A portrait image stretched to fill a wide banner will look terrible. Switch to a centered card layout with max-width constraint and portrait aspect ratio, or use `object-contain` with dark bg so the image stays sharp.
- Preferred approach: make each event card on `/raduni` a contained portrait card (e.g., `max-w-2xl mx-auto aspect-[3/4]`) instead of full-width, matching the portrait flyer format.

