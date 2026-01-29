

# Hero Image Carousel Implementation Plan

## Overview
Enhance the existing `HeroSlider` component with a professional, smooth carousel featuring 3 slides, auto-play functionality, and smooth transitions while maintaining pixel-perfect design consistency.

## Current State
- The `HeroSlider.tsx` component currently displays a single static hero image
- Navigation arrows exist but are non-functional (only 1 slide)
- The project already has `embla-carousel-react` installed (v8.6.0)
- Existing carousel UI components available in `src/components/ui/carousel.tsx`

## Implementation Strategy

### Approach
Use the existing Embla Carousel infrastructure with the `embla-carousel-autoplay` plugin for auto-slide functionality. This approach:
- Leverages already-installed dependencies
- Maintains consistency with existing codebase patterns
- Provides excellent performance and accessibility

---

## Changes Required

### 1. Install Auto-play Plugin
Add `embla-carousel-autoplay` package for the auto-slide feature.

### 2. Add New Hero Banner Images
Create 2 additional devotional-themed hero images for the carousel slides:
- **Slide 2**: Diya/incense/devotional items theme
- **Slide 3**: God statue/temple/pooja setup theme

### 3. Enhance HeroSlider Component
Modify `src/components/home/HeroSlider.tsx` to include:

**Slide Configuration (3 slides)**:
| Slide | Image | Subtitle | Title | Description |
|-------|-------|----------|-------|-------------|
| 1 | hero-devotional.jpg (existing) | "Welcome to" | "shri sai marketing" | "Devotional & Puja Essentials" |
| 2 | hero-diya.jpg (new) | "Illuminate Your" | "Sacred Space" | "Premium Diyas, Candles & Incense" |
| 3 | hero-statue.jpg (new) | "Divine Collection of" | "God Statues" | "Handcrafted Idols for Your Mandir" |

**Carousel Features**:
- Auto-slide every 4 seconds
- Smooth fade transition between slides
- Infinite loop navigation
- Pause on hover (desktop)
- Left/right arrow navigation (existing style preserved)
- Dot indicators at the bottom

**Preserved Design Elements**:
- Same container: `rounded-2xl overflow-hidden mx-4 md:mx-0`
- Same heights: `h-[300px] md:h-[400px] lg:h-[450px]`
- Same gradient overlay: `bg-gradient-to-r from-black/40 to-transparent`
- Same text styling with Poppins font
- Same "Shop Now" button with primary orange color
- Same arrow button styling

---

## Technical Details

### Component Structure
```text
HeroSlider
+-- Carousel (Embla wrapper with autoplay plugin)
    +-- CarouselContent (slides container)
    |   +-- CarouselItem (Slide 1)
    |   |   +-- Background image
    |   |   +-- Gradient overlay
    |   |   +-- Text content (subtitle, title, description, button)
    |   +-- CarouselItem (Slide 2)
    |   +-- CarouselItem (Slide 3)
    +-- Navigation Arrows (custom positioned)
    +-- Dot Indicators (optional, bottom center)
```

### Key Implementation Details

**Auto-play Configuration**:
- Delay: 4000ms (4 seconds)
- stopOnMouseEnter: true (pause on hover)
- stopOnInteraction: false (resume after user interaction)

**Transition Effect**:
- CSS transition on opacity for fade effect
- Duration: 500ms ease-in-out

**Dot Indicators**:
- Small circles positioned at bottom center
- Active dot: solid primary orange
- Inactive dots: white with 50% opacity
- Clickable for direct slide navigation

**Responsiveness**:
- All breakpoints maintained as current
- Text scales appropriately (existing classes)
- Touch swipe support on mobile (built into Embla)

---

## Files Modified

| File | Change Type | Description |
|------|-------------|-------------|
| `package.json` | Modified | Add `embla-carousel-autoplay` dependency |
| `src/assets/banners/hero-diya.jpg` | New | Devotional diya/incense themed image |
| `src/assets/banners/hero-statue.jpg` | New | God statue/temple themed image |
| `src/components/home/HeroSlider.tsx` | Modified | Implement full carousel with auto-play |

---

## What Stays Unchanged
- `src/pages/Index.tsx` - No changes
- Header, navigation, spacing - No changes
- All other sections (categories, products, footer) - No changes
- Font family (Poppins) - Preserved
- Primary color (#FF8C00) - Preserved
- Text alignment and button styles - Preserved

