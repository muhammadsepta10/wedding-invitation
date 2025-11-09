# Background Image Update

## ✅ Background Image Ditambahkan ke Semua Sections

Setelah open invitation, semua sections sekarang memiliki background image yang konsisten.

---

## 🎨 Implementation

### Global Background (.section class):
```css
.section {
  background-image: url('/image/background.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;  /* Parallax effect */
}

.section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.92);  /* White overlay untuk readability */
  z-index: 0;
}
```

---

## 📋 Sections dengan Background

### 1. **Opening** ✅
- Background: Full background.webp dengan gradient overlay
- Opacity: Penuh dengan dark overlay
- Style: Dramatic, eye-catching

### 2. **Quotes** ✅
- Background: background.webp (via .section)
- Overlay: Light gradient (0.95 opacity)
- Effect: Subtle, elegant

### 3. **Couple** ✅
- Background: background.webp (via .section)
- Overlay: White (0.92 opacity)
- Effect: Clean, readable

### 4. **Akad** ✅
- Background: background.webp (via .section)
- Overlay: Light blue gradient (0.95 opacity)
- Effect: Soft, peaceful

### 5. **Resepsi** ✅
- Background: background.webp (via .section)
- Overlay: White (0.92 opacity)
- Effect: Clean, formal

### 6. **Maps** ✅
- Background: background.webp (via .section)
- Overlay: Light blue gradient (0.95 opacity)
- Effect: Calm, informative

### 7. **RSVP** ✅
- Background: background.webp (via .section)
- Overlay: White (0.92 opacity)
- Effect: Clean, functional

### 8. **Gift** ✅
- Background: background.webp (via .section)
- Overlay: Light blue gradient (0.95 opacity)
- Effect: Elegant, sophisticated

### 9. **Thanks** ✅
- Background: background.webp (via .section)
- Overlay: Blue gradient (darker untuk kontras with white text)
- Effect: Dramatic, memorable

---

## 🎯 Key Features

### 1. **Parallax Effect**
```css
background-attachment: fixed;
```
- Background tetap saat scroll
- Creates depth & modern look
- Smooth user experience

### 2. **Consistent Design**
- Semua sections menggunakan background yang sama
- Overlay berbeda untuk variasi
- Visual coherence throughout

### 3. **Readability**
- White/light overlay (92-95% opacity)
- Content tetap mudah dibaca
- Tidak mengganggu text/images

### 4. **Z-Index Layering**
```
z-index: 0  → Background overlay
z-index: 10 → Decorative ornaments
z-index: 10 → Content (text, cards, etc)
```

---

## 🔧 Technical Details

### CSS Structure:
```css
.section {
  /* Background image */
  background-image: url('/image/background.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.section::before {
  /* Overlay untuk readability */
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.92);
  z-index: 0;
}
```

### Component Structure:
```tsx
<section className="section relative">
  {/* Decorations - z-10 */}
  <Image src="..." className="absolute z-10" />
  
  {/* Content - z-10 */}
  <div className="relative z-10">
    {/* Main content here */}
  </div>
</section>
```

---

## 📱 Responsive Behavior

### Desktop:
- Parallax effect works smoothly
- Background visible throughout scroll
- Fixed attachment creates depth

### Mobile:
- Background might switch to `scroll` (some browsers)
- Still maintains visual consistency
- Performance optimized

---

## 🎨 Overlay Variations

### White Sections (bg-white):
```css
.section::before {
  background: rgba(255, 255, 255, 0.92);
}
```

### Light Blue Sections (bg-gradient-light):
```css
.bg-gradient-light::before {
  background: rgba(240, 249, 255, 0.3);
}
```

### Blue Section (Thanks - bg-gradient-blue):
```css
/* Custom dark overlay */
.bg-gradient-to-b from-blue-900/60 via-purple-900/50 to-blue-900/70
```

---

## ✨ Benefits

1. **Visual Consistency**
   - Same background throughout
   - Professional look
   - Cohesive design

2. **Depth & Dimension**
   - Parallax creates 3D effect
   - Layers add visual interest
   - Modern & engaging

3. **Readability**
   - Content remains clear
   - Text easy to read
   - No visual clutter

4. **Performance**
   - Single background image
   - CSS-based (fast)
   - Optimized with Next.js

---

## 🧪 Testing

- [x] Background visible on all sections
- [x] Parallax effect works on scroll
- [x] Content remains readable
- [x] Decorative elements visible
- [x] No z-index conflicts
- [x] Mobile responsive
- [x] Performance good

---

## 💡 Customization Tips

### Adjust Overlay Opacity:
```css
.section::before {
  background: rgba(255, 255, 255, 0.85); /* Less overlay = more background visible */
}
```

### Change Overlay Color:
```css
.section::before {
  background: rgba(240, 249, 255, 0.92); /* Light blue tint */
}
```

### Disable Parallax:
```css
.section {
  background-attachment: scroll; /* Instead of fixed */
}
```

---

## 📊 Performance Impact

- Background image: 1.7MB (already loaded in Opening)
- CSS background: No additional HTTP request
- Parallax: Minimal performance impact
- Mobile: Optimized with media queries

---

**Status**: ✅ Complete
**Last Updated**: October 12, 2025
**Effect**: Background visible on all sections after open invitation
**Performance**: Optimized ✓
