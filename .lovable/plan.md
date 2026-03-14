

## Plan: Redesign Gallery as event covers with photo sub-gallery and download

### Current state
- Gallery page shows a flat grid of individual photos with a filter dropdown and lightbox
- Events page shows event cards in portrait `aspect-[3/4]` format with `max-w-lg`

### New design

**1. Replace flat photo grid with event cover cards (same format as Events page)**

The gallery page will show one card per event using the same portrait `aspect-[3/4] max-w-lg` card style from Events.tsx. Each card shows the event cover image, title, and date. No more flat photo grid on the main gallery view.

**2. Click on a cover → open a photo sub-gallery modal**

Clicking an event cover opens a full-screen overlay/modal showing all photos belonging to that event in a grid. Users can browse the photos within that event.

**3. Click on a photo in the sub-gallery → lightbox with download button**

Clicking a single photo opens the existing lightbox (prev/next navigation) but with an added **download button** (using `<a href={src} download>` or programmatic blob download for cross-origin).

**4. Remove the filter dropdown** — no longer needed since each event is its own entry point.

### Files to modify

1. **`src/pages/Gallery.tsx`** — Complete rewrite:
   - Show event covers in a grid (`grid-cols-1 md:grid-cols-2`, portrait cards matching Events.tsx style)
   - State: `selectedEventId` — when set, show a modal/overlay with that event's photos in a grid
   - Lightbox: keep existing prev/next logic, add a download button (Download icon from lucide)
   - Remove the filter dropdown

2. **`src/lib/eventStore.ts`** — No changes needed (photos already have `eventId` linking them to events)

### Technical details
- Download button: `<a>` tag with `download` attribute pointing to photo `src`
- Sub-gallery modal: full-screen overlay similar to lightbox but showing a grid of thumbnails
- Lightbox download icon: lucide `Download` icon positioned next to the close `X` button

