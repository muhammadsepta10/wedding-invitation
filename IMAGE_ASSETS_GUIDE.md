# Image Assets Implementation Guide

## 📁 Asset Files Used

Semua gambar telah diintegrasikan dari folder `public/image/`:

### Main Assets:
1. **background.webp** (1.7MB) - Main background untuk Opening dan Thanks section
2. **flower.webp** (47KB) - Decorative flower element

### Top Decorations:
3. **top-1.webp** (51KB) - Top ornament 1
4. **top-2.webp** (62KB) - Top ornament 2
5. **top-3.webp** (61KB) - Top ornament 3
6. **top-4.webp** (24KB) - Top ornament 4

### Bottom Decorations:
7. **bottom-0.webp** (138KB) - Bottom ornament 0
8. **bottom-1.webp** (44KB) - Bottom ornament 1
9. **bottom-2.webp** (36KB) - Bottom ornament 2
10. **bottom-3.webp** (102KB) - Bottom ornament 3

---

## 🎨 Implementation per Section

### 1. Opening (components/Opening.tsx)
```tsx
✅ Background: background.webp (full cover with gradient overlay)
✅ Decorations:
   - top-1.webp (top-left)
   - top-2.webp (top-right)
   - bottom-1.webp (bottom-left)
   - bottom-2.webp (bottom-right)
```

### 2. Quotes (components/Quotes.tsx)
```tsx
✅ Background: background.webp (subtle, opacity 5%)
✅ Decorations:
   - flower.webp (top-left & top-right)
   - top-3.webp (bottom-left)
```

### 3. Couple (components/Couple.tsx)
```tsx
✅ Decorations:
   - top-4.webp (top-left)
   - flower.webp (top-right)
   - bottom-3.webp (bottom-right)
```

### 4. Akad Section (components/Events.tsx)
```tsx
✅ Decorations:
   - flower.webp (top-left)
   - bottom-0.webp (bottom-right)
```

### 5. Reception Section (components/Events.tsx)
```tsx
✅ Decorations:
   - top-1.webp (top-right)
   - flower.webp (bottom-left)
```

### 6. Maps (components/Maps.tsx)
```tsx
✅ Decorations:
   - top-2.webp (top-left)
   - flower.webp (bottom-right)
```

### 7. RSVP (components/RSVP.tsx)
```tsx
✅ Decorations:
   - flower.webp (top-left & top-right)
   - bottom-1.webp (bottom-left)
```

### 8. Gift (components/Gift.tsx)
```tsx
✅ Decorations:
   - top-3.webp (top-left)
   - flower.webp (top-right)
   - bottom-2.webp (bottom-right)
```

### 9. Thanks (components/Thanks.tsx)
```tsx
✅ Background: background.webp (subtle, opacity 10%)
✅ Decorations:
   - flower.webp (top-left & top-right)
   - bottom-0.webp (bottom-left)
   - bottom-3.webp (bottom-right)
```

---

## 🔧 Technical Details

### Image Optimization:
- Using Next.js `Image` component for automatic optimization
- WebP format for smaller file sizes
- Lazy loading for better performance
- Responsive sizing

### Positioning:
```css
Position: absolute
Opacity: 0.20 - 0.40 (untuk blending dengan background)
Width/Height: 120px - 200px
Z-index: Decorations behind content
```

### Performance:
- Total image assets: ~2.8MB
- WebP format: ~600KB for decorations
- Next.js optimization: Further compression
- Priority loading: Only for Opening background

---

## 🎨 Visual Hierarchy

### Layer Stack (bottom to top):
1. Background image (lowest z-index)
2. Gradient overlays
3. Decorative ornaments
4. Content (cards, text)
5. Navigation (highest z-index)
6. Music player (absolute highest)

---

## 📱 Responsive Behavior

### Desktop (≥768px):
- Full decorations visible
- Background cover full viewport
- Ornaments positioned at corners

### Mobile (<768px):
- Decorations scaled down slightly
- Background adjusted for mobile view
- Some decorations may be hidden on very small screens

---

## 🔄 Changes Made

### Removed:
- ❌ Emoji-based decorations (🌸)
- ❌ Old .flower-decoration CSS classes
- ❌ Text-based ornaments

### Added:
- ✅ Real image assets via Next Image
- ✅ background.webp integration
- ✅ WebP decorative elements
- ✅ Proper image optimization
- ✅ Gradient overlays for readability

---

## 🧪 Testing Checklist

- [ ] Opening page loads with background
- [ ] All decorations visible on each section
- [ ] Images load properly (no 404)
- [ ] Mobile responsiveness works
- [ ] Performance is good (check Network tab)
- [ ] Images don't overlap with text
- [ ] Opacity levels are appropriate

---

## 💡 Customization Tips

### To adjust decoration opacity:
```tsx
<Image 
  src="/image/flower.webp" 
  className="opacity-20" // Change this value (10-40)
/>
```

### To change decoration size:
```tsx
<Image 
  width={150}  // Adjust width
  height={150} // Adjust height
/>
```

### To change position:
```tsx
className="absolute top-4 left-4" // Change top/bottom/left/right values
```

---

## 📊 File Structure

```
public/
└── image/
    ├── background.webp      (Main background)
    ├── flower.webp        (Most used decoration)
    ├── top-1.webp         (Top ornaments)
    ├── top-2.webp
    ├── top-3.webp
    ├── top-4.webp
    ├── bottom-0.webp      (Bottom ornaments)
    ├── bottom-1.webp
    ├── bottom-2.webp
    └── bottom-3.webp
```

---

## ✨ Benefits

1. **Professional Look**
   - Real artistic assets instead of emojis
   - Consistent design language
   - Better visual hierarchy

2. **Performance**
   - WebP format for smaller sizes
   - Next.js optimization
   - Lazy loading

3. **Flexibility**
   - Easy to swap images
   - Adjustable opacity & size
   - Repositionable

---

**Status**: ✅ Complete
**Last Updated**: October 12, 2025
**Images Used**: 10 files
**Total Size**: ~2.8MB raw, ~1MB optimized
