# Interlacing Monogram Style - SD

## ✅ Updated Monogram Design

Monogram "SD" telah diupdate dengan style **interlacing** yang meniru contoh gambar yang diberikan.

---

## 🎨 Visual Effect

### Sebelum (Simple Overlap):
```
SD
⟋⟍
S D
```

### Sesudah (Interlacing):
```
SD
⟋⟍
S D
  ↕
  ✕  ← Interlacing lines
```

---

## 🔧 CSS Implementation

### Main Structure:
```css
.monogram-interlace {
  position: relative;
  display: inline-block;
  letter-spacing: -1.8rem;  /* Tighter spacing */
  font-weight: 300;         /* Lighter weight */
}

.monogram-interlace .letter-s {
  position: relative;
  z-index: 2;
  transform: translateY(-0.1em);  /* S slightly higher */
}

.monogram-interlace .letter-d {
  position: relative;
  z-index: 1;
  margin-left: -1.2rem;     /* Less overlap than before */
  transform: translateY(0.1em);  /* D slightly lower */
}
```

### Interlacing Lines (Pseudo-elements):
```css
/* S horizontal line */
.monogram-interlace .letter-s::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.8em;
  height: 0.15em;
  background: currentColor;
  transform: translate(-50%, -50%) rotate(-15deg);
  z-index: 3;
  opacity: 0.7;
}

/* D horizontal line */
.monogram-interlace .letter-d::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.6em;
  height: 0.15em;
  background: currentColor;
  transform: translate(-50%, -50%) rotate(15deg);
  z-index: 3;
  opacity: 0.7;
}
```

---

## 📋 Updated Locations

### 1. Opening.tsx ✅
```tsx
<h1 className="font-script text-8xl md:text-9xl mb-4 monogram-interlace">
  <span className="letter-s text-white">S</span>
  <span className="letter-d text-amber-300">D</span>
</h1>
```

### 2. Quotes.tsx ✅
```tsx
<div className="font-script text-9xl monogram-interlace">
  <span className="letter-s">S</span>
  <span className="letter-d">D</span>
</div>
```

### 3. Couple.tsx ✅
```tsx
<div className="font-script text-8xl monogram-interlace">
  <span className="letter-s">S</span>
  <span className="letter-d">D</span>
</div>
```

### 4. Thanks.tsx ✅
```tsx
<div className="font-script text-9xl monogram-interlace">
  <span className="letter-s text-white">S</span>
  <span className="letter-d text-white/90">D</span>
</div>
```

---

## 🎨 Design Features

### 1. **Interlacing Lines**
- Horizontal lines that cross through both letters
- S line: Rotated -15 degrees, width 0.8em
- D line: Rotated +15 degrees, width 0.6em
- Opacity: 0.7 for subtle effect

### 2. **Vertical Positioning**
- S: `translateY(-0.1em)` - Slightly higher
- D: `translateY(0.1em)` - Slightly lower
- Creates natural interlacing effect

### 3. **Spacing & Overlap**
- Letter spacing: -1.8rem (tighter than before)
- D margin-left: -1.2rem (less aggressive overlap)
- More balanced positioning

### 4. **Typography**
- Font weight: 300 (lighter, more elegant)
- Text shadow: 2px 2px 4px (subtle depth)
- Maintains Dancing Script font family

---

## ✨ Visual Breakdown

```
    S     D
    ↓     ↓
   [S]   [D]
    ↓     ↓
   [S] ✕ [D]  ← Interlacing lines
    ↓     ↓
   [S]   [D]
```

**Key Elements:**
- S and D overlap by ~40% (less than before)
- Horizontal lines create "X" pattern in center
- S sits slightly higher than D
- Lines are semi-transparent (70% opacity)

---

## 🎯 Color Scheme

### Opening Section (Dark Background):
- S: White (#ffffff)
- D: Amber-300 (#fbbf24)
- Lines: Match letter colors

### Other Sections (Light Background):
- S: Primary Blue (#1e3a8a)
- D: Accent Gold (#f59e0b)
- Lines: Match letter colors

### Thanks Section (Blue Background):
- S: White (#ffffff)
- D: White 90% (rgba(255,255,255,0.9))
- Lines: Match letter colors

---

## 📐 Technical Details

### Positioning:
```css
/* S positioning */
.letter-s {
  z-index: 2;                    /* In front */
  transform: translateY(-0.1em); /* Slightly higher */
}

/* D positioning */
.letter-d {
  z-index: 1;                    /* Behind S */
  margin-left: -1.2rem;         /* Overlap with S */
  transform: translateY(0.1em);  /* Slightly lower */
}
```

### Interlacing Lines:
```css
/* S line (top-left to bottom-right) */
.letter-s::before {
  width: 0.8em;                  /* Longer line */
  transform: rotate(-15deg);     /* Angled down-right */
}

/* D line (top-right to bottom-left) */
.letter-d::before {
  width: 0.6em;                  /* Shorter line */
  transform: rotate(15deg);      /* Angled down-left */
}
```

---

## 🎨 Visual Hierarchy

```
Z-Index Stack:
- S letter: z-2 (front)
- D letter: z-1 (back)
- Interlacing lines: z-3 (top layer)
```

---

## 💡 Design Benefits

1. **More Sophisticated**
   - Interlacing creates depth
   - Mimics luxury monogram style
   - Professional wedding aesthetic

2. **Better Balance**
   - Less aggressive overlap
   - More readable
   - Elegant positioning

3. **Visual Interest**
   - Crossed lines add complexity
   - Creates focal point
   - Memorable design

4. **Authentic Look**
   - Matches example image style
   - Hand-drawn appearance
   - Organic feel

---

## 🧪 Testing Checklist

- [x] "SD" displays with interlacing
- [x] S and D positioned correctly
- [x] Interlacing lines visible
- [x] Colors match design
- [x] Responsive sizing works
- [x] All 4 sections updated
- [x] Text shadows visible
- [x] Z-index layering correct

---

## 🔧 Customization Options

### Adjust Interlacing Intensity:
```css
/* More prominent lines */
.letter-s::before, .letter-d::before {
  opacity: 1.0;  /* Instead of 0.7 */
}

/* Thicker lines */
.letter-s::before, .letter-d::before {
  height: 0.2em;  /* Instead of 0.15em */
}
```

### Change Overlap Amount:
```css
.monogram-interlace {
  letter-spacing: -2rem;  /* More overlap */
}

.letter-d {
  margin-left: -1.5rem;   /* More overlap */
}
```

### Adjust Line Angles:
```css
.letter-s::before {
  transform: rotate(-20deg);  /* Steeper angle */
}

.letter-d::before {
  transform: rotate(20deg);   /* Steeper angle */
}
```

---

## 📊 Comparison

| Feature | Old Style | New Style |
|---------|-----------|-----------|
| Overlap | 60% | 40% |
| Lines | None | Interlacing |
| Weight | Normal | 300 (lighter) |
| Spacing | -2rem | -1.8rem |
| Positioning | Static | Vertical offset |
| Complexity | Simple | Sophisticated |

---

**Status**: ✅ Complete
**Style**: Interlacing monogram like example image
**Effect**: More sophisticated, professional look
**Last Updated**: October 12, 2025
