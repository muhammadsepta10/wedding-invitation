# Monogram Overlapping Style - SD

## ✅ Perubahan Monogram

Tulisan "S & D" telah diubah menjadi "SD" dengan style **overlapping/tumpang tindih**.

---

## 🎨 Visual Effect

### Sebelum:
```
S  &  D
```
Tiga elemen terpisah dengan ampersand di tengah.

### Sesudah:
```
SD
```
Dua huruf yang saling tumpang tindih dengan warna berbeda.

---

## 🔧 CSS Implementation

```css
.monogram-overlap {
  position: relative;
  display: inline-block;
  letter-spacing: -2rem;  /* Negative spacing untuk overlap */
}

.monogram-overlap .letter-s {
  position: relative;
  z-index: 2;              /* S di atas */
  color: var(--primary-color);  /* Blue */
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
}

.monogram-overlap .letter-d {
  position: relative;
  z-index: 1;              /* D di bawah */
  margin-left: -1.5rem;    /* Overlap dengan S */
  color: var(--accent-color);   /* Gold */
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
}
```

---

## 📋 Locations Updated

### 1. Opening.tsx ✅
```tsx
<h1 className="font-script text-8xl md:text-9xl monogram-overlap">
  <span className="letter-s">S</span>
  <span className="letter-d">D</span>
</h1>
```

### 2. Quotes.tsx ✅
```tsx
<div className="font-script text-9xl monogram-overlap">
  <span className="letter-s">S</span>
  <span className="letter-d">D</span>
</div>
```

### 3. Couple.tsx ✅
```tsx
<div className="font-script text-8xl monogram-overlap">
  <span className="letter-s">S</span>
  <span className="letter-d">D</span>
</div>
```

### 4. Thanks.tsx ✅
```tsx
<div className="font-script text-9xl monogram-overlap">
  <span className="letter-s text-white">S</span>
  <span className="letter-d text-white/90">D</span>
</div>
```

---

## 🎨 Color Scheme

### Letter S:
- Color: `var(--primary-color)` (#1e3a8a - Blue)
- Z-index: 2 (di depan)
- Shadow: Subtle drop shadow

### Letter D:
- Color: `var(--accent-color)` (#f59e0b - Gold)
- Z-index: 1 (di belakang)
- Shadow: Subtle drop shadow

### Special Case (Thanks section):
- Letter S: White
- Letter D: White with 90% opacity (untuk depth effect)

---

## 📐 Typography Details

### Font:
- Family: Dancing Script (cursive)
- Weight: Default (from font-script class)
- Size: 8xl - 9xl (responsive)

### Spacing:
- Letter spacing: -2rem (very tight, creates overlap)
- Margin left (D): -1.5rem (additional overlap)
- Total overlap: ~3.5rem (~56px)

### Effects:
- Text shadow: 3px 3px 6px for depth
- Z-index layering for overlap
- Responsive sizing (smaller on mobile)

---

## ✨ Visual Effect Breakdown

```
      S D
      ↓ ↓
    [S][D]
      ↓
    [SD]  ← Letters overlap by ~60%
    
S (Blue) is in front (z-index: 2)
D (Gold) peeks from behind (z-index: 1)
```

---

## 🎯 Design Benefits

1. **Unique Monogram**
   - More elegant than "S & D"
   - Professional wedding style
   - Modern typography

2. **Visual Interest**
   - Overlapping creates depth
   - Two-tone color adds dimension
   - Eye-catching design

3. **Compact**
   - Takes less space
   - More impactful
   - Better for mobile

4. **Sophisticated**
   - Mimics luxury wedding invitations
   - Professional monogram style
   - Memorable branding

---

## �� Responsive Sizes

### Mobile:
- Opening: `text-8xl` (6rem, 96px)
- Quotes: `text-9xl` (8rem, 128px)
- Couple: `text-8xl` (6rem, 96px)
- Thanks: `text-9xl` (8rem, 128px)

### Desktop:
- Opening: `text-9xl` (8rem, 128px)
- Quotes: `text-9xl` (8rem, 128px)
- Couple: `text-8xl` (6rem, 96px)
- Thanks: `text-9xl` (8rem, 128px)

---

## 💡 Alternative Styles (Optional)

### Option 1: Equal Colors
```css
.letter-s, .letter-d {
  color: var(--primary-color);
}
```

### Option 2: Different Overlap
```css
.monogram-overlap {
  letter-spacing: -1rem;  /* Less overlap */
}
```

### Option 3: Vertical Stack
```css
.monogram-overlap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.letter-d {
  margin-top: -3rem;  /* Vertical overlap */
}
```

### Option 4: Add Border/Stroke
```css
.letter-s {
  -webkit-text-stroke: 2px var(--primary-color);
  color: transparent;
}
```

---

## �� Testing Checklist

- [x] "SD" appears instead of "S & D"
- [x] Letters overlap correctly
- [x] S is in front (blue)
- [x] D peeks from behind (gold)
- [x] Text shadows visible
- [x] Responsive sizing works
- [x] Looks good on all sections

---

## 🎨 Visual Hierarchy

```
Z-Index Stack for Monogram:
- Letter S: z-2 (front, blue, primary color)
- Letter D: z-1 (back, gold, accent color)
```

---

## 🔧 Customization

To adjust overlap amount:

```css
/* In app/globals.css */
.monogram-overlap {
  letter-spacing: -2rem;  /* Adjust this (-1rem to -3rem) */
}

.letter-d {
  margin-left: -1.5rem;   /* Adjust this (-1rem to -2rem) */
}
```

To change colors:

```css
.letter-s {
  color: #1e3a8a;  /* Change S color */
}

.letter-d {
  color: #f59e0b;  /* Change D color */
}
```

---

**Status**: ✅ Complete
**Effect**: Overlapping monogram "SD" di 4 locations
**Style**: Sophisticated, modern, elegant
**Last Updated**: October 12, 2025
