# Font Weight & Typography Utilities

## ✅ Dynamic Typography System Created

Sistem typography dinamis telah dibuat yang memungkinkan Anda mengatur ketebalan text, spacing, dan style dengan mudah.

---

## 🎨 Font Weight Classes

### Numeric Weight Classes:
```tsx
<p className="font-weight-100">Thin (100)</p>
<p className="font-weight-200">Extra Light (200)</p>
<p className="font-weight-300">Light (300)</p>
<p className="font-weight-400">Normal (400)</p>
<p className="font-weight-500">Medium (500)</p>
<p className="font-weight-600">Semi Bold (600)</p>
<p className="font-weight-700">Bold (700)</p>
<p className="font-weight-800">Extra Bold (800)</p>
<p className="font-weight-900">Black (900)</p>
```

### Named Weight Classes:
```tsx
<p className="font-weight-thin">Thin (100)</p>
<p className="font-weight-extralight">Extra Light (200)</p>
<p className="font-weight-light">Light (300)</p>
<p className="font-weight-normal">Normal (400)</p>
<p className="font-weight-regular">Regular (400)</p>
<p className="font-weight-medium">Medium (500)</p>
<p className="font-weight-semibold">Semi Bold (600)</p>
<p className="font-weight-bold">Bold (700)</p>
<p className="font-weight-extrabold">Extra Bold (800)</p>
<p className="font-weight-black">Black (900)</p>
```

---

## 📐 Text Transform Classes

```tsx
<p className="text-transform-uppercase">UPPERCASE TEXT</p>
<p className="text-transform-lowercase">lowercase text</p>
<p className="text-transform-capitalize">Capitalize Each Word</p>
<p className="text-transform-none">Normal Text</p>
```

---

## ✨ Letter Spacing Classes

```tsx
<p className="letter-spacing-tighter">Tighter spacing (-0.05em)</p>
<p className="letter-spacing-tight">Tight spacing (-0.025em)</p>
<p className="letter-spacing-normal">Normal spacing (0em)</p>
<p className="letter-spacing-wide">Wide spacing (0.025em)</p>
<p className="letter-spacing-wider">Wider spacing (0.05em)</p>
<p className="letter-spacing-widest">Widest spacing (0.1em)</p>
```

---

## 📏 Line Height Classes

```tsx
<p className="line-height-none">Line height 1</p>
<p className="line-height-tight">Line height 1.25</p>
<p className="line-height-snug">Line height 1.375</p>
<p className="line-height-normal">Line height 1.5</p>
<p className="line-height-relaxed">Line height 1.625</p>
<p className="line-height-loose">Line height 2</p>
```

---

## 🎭 Font Style Classes

```tsx
<p className="font-style-italic">Italic text</p>
<p className="font-style-normal">Normal text</p>
<p className="font-style-oblique">Oblique text</p>
```

---

## 🎨 Text Decoration Classes

```tsx
<p className="text-decoration-underline">Underlined text</p>
<p className="text-decoration-overline">Overlined text</p>
<p className="text-decoration-line-through">Strikethrough text</p>
<p className="text-decoration-none">No decoration</p>
```

---

## �� Usage Examples

### Wedding Invitation Examples:

#### 1. Elegant Title:
```tsx
<h1 className="font-playfair font-weight-bold text-transform-uppercase letter-spacing-wider">
  THE WEDDING OF
</h1>
```

#### 2. Romantic Names:
```tsx
<h2 className="font-dancing-script font-weight-semibold letter-spacing-normal">
  Septa & Denita
</h2>
```

#### 3. Body Text:
```tsx
<p className="font-inter font-weight-normal line-height-relaxed">
  Join us in celebrating our special day...
</p>
```

#### 4. Date Text:
```tsx
<p className="font-bodoni-moda font-weight-medium letter-spacing-wide text-transform-uppercase">
  JUMAT, 21 NOVEMBER 2025
</p>
```

#### 5. Quote Text:
```tsx
<p className="font-crimson-text font-weight-light font-style-italic line-height-loose">
  "Dan di antara tanda-tanda kekuasaan-Nya..."
</p>
```

---

## 🎯 Combining Font & Weight

### Method 1: Separate Classes
```tsx
<p className="font-inter font-weight-bold">
  Bold Inter Font
</p>
```

### Method 2: With Tailwind (if available)
```tsx
<p className="font-inter font-bold">
  Bold Inter Font (Tailwind)
</p>
```

### Method 3: Custom Combination
```tsx
<p className="font-playfair font-weight-semibold letter-spacing-wide text-transform-uppercase">
  ELEGANT HEADER
</p>
```

---

## 🧪 Complete Examples

### Example 1: Wedding Header
```tsx
<div className="text-center">
  <p className="font-bodoni-moda font-weight-medium text-transform-uppercase letter-spacing-widest text-xl">
    THE WEDDING OF
  </p>
  <h1 className="font-dancing-script font-weight-bold text-5xl letter-spacing-normal">
    Septa & Denita
  </h1>
  <p className="font-inter font-weight-normal letter-spacing-wide text-lg">
    Jumat, 21 November 2025
  </p>
</div>
```

### Example 2: Quote Section
```tsx
<blockquote className="font-crimson-text font-weight-light font-style-italic line-height-loose text-lg">
  "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu 
  istri-istri dari jenismu sendiri..."
</blockquote>
<p className="font-inter font-weight-semibold text-transform-uppercase letter-spacing-wider text-sm">
  (QS. Ar-Rum: 21)
</p>
```

### Example 3: Event Details
```tsx
<div className="space-y-2">
  <h3 className="font-playfair font-weight-bold text-transform-uppercase letter-spacing-wide text-2xl">
    AKAD NIKAH
  </h3>
  <p className="font-inter font-weight-medium line-height-relaxed text-lg">
    Jumat, 21 November 2025
  </p>
  <p className="font-inter font-weight-normal line-height-normal text-base">
    Pukul 07:00 WIB
  </p>
</div>
```

### Example 4: Button Text
```tsx
<button className="font-raleway font-weight-semibold text-transform-uppercase letter-spacing-wider">
  BUKA UNDANGAN
</button>
```

---

## 📊 All Available Classes

### Font Weight (19 classes):
- Numeric: `font-weight-100` to `font-weight-900`
- Named: `font-weight-thin`, `font-weight-light`, `font-weight-bold`, etc.

### Text Transform (4 classes):
- `text-transform-uppercase`
- `text-transform-lowercase`
- `text-transform-capitalize`
- `text-transform-none`

### Letter Spacing (6 classes):
- `letter-spacing-tighter` to `letter-spacing-widest`

### Line Height (6 classes):
- `line-height-none` to `line-height-loose`

### Font Style (3 classes):
- `font-style-italic`
- `font-style-normal`
- `font-style-oblique`

### Text Decoration (4 classes):
- `text-decoration-underline`
- `text-decoration-overline`
- `text-decoration-line-through`
- `text-decoration-none`

**Total: 42 new typography utility classes!**

---

## 🎨 Design Patterns

### Pattern 1: Elegant Headers
```tsx
className="font-playfair font-weight-bold text-transform-uppercase letter-spacing-wider"
```

### Pattern 2: Romantic Script
```tsx
className="font-dancing-script font-weight-semibold letter-spacing-normal"
```

### Pattern 3: Clean Body Text
```tsx
className="font-inter font-weight-normal line-height-relaxed"
```

### Pattern 4: Emphasized Text
```tsx
className="font-weight-bold font-style-italic text-decoration-underline"
```

### Pattern 5: Formal Titles
```tsx
className="font-bodoni-moda font-weight-medium text-transform-uppercase letter-spacing-widest"
```

---

## 🚀 Quick Reference

### Ketebalan Text:
```tsx
// Tipis
<p className="font-weight-thin">Thin</p>
<p className="font-weight-light">Light</p>

// Normal
<p className="font-weight-normal">Normal</p>
<p className="font-weight-medium">Medium</p>

// Tebal
<p className="font-weight-semibold">Semi Bold</p>
<p className="font-weight-bold">Bold</p>
<p className="font-weight-extrabold">Extra Bold</p>
<p className="font-weight-black">Black</p>
```

### Spacing:
```tsx
// Letter spacing
<p className="letter-spacing-tight">Tight</p>
<p className="letter-spacing-wide">Wide</p>
<p className="letter-spacing-widest">Widest</p>

// Line height
<p className="line-height-tight">Tight</p>
<p className="line-height-normal">Normal</p>
<p className="line-height-loose">Loose</p>
```

### Transform:
```tsx
<p className="text-transform-uppercase">UPPERCASE</p>
<p className="text-transform-capitalize">Capitalize</p>
```

---

## 💡 Best Practices

### 1. Consistency:
- Use same weight for similar elements
- Maintain hierarchy with weight
- Don't mix too many weights

### 2. Readability:
- Body text: 400-500 weight
- Headers: 600-700 weight
- Emphasis: 700-900 weight

### 3. Performance:
- Limit font weights loaded
- Use only necessary weights
- Combine classes efficiently

### 4. Accessibility:
- Ensure sufficient contrast
- Don't rely only on weight
- Test with screen readers

---

## 🧪 Test Now

```bash
npm run dev
```

Try different combinations:
```tsx
<div className="space-y-4">
  <p className="font-inter font-weight-thin">Thin Text</p>
  <p className="font-inter font-weight-normal">Normal Text</p>
  <p className="font-inter font-weight-bold">Bold Text</p>
  <p className="font-inter font-weight-black">Black Text</p>
</div>
```

---

**Status**: ✅ Complete
**Classes**: 42 new typography utility classes
**Usage**: Easy dynamic text styling
**Performance**: Optimized CSS utilities
**Last Updated**: October 12, 2025
