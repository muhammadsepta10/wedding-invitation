# Dynamic Font Utilities - CSS Font Classes

## ✅ Dynamic Font System Created

Sistem font dinamis telah dibuat yang memungkinkan Anda menggunakan `font-jenis-font` di className untuk mengatur font secara langsung.

---

## 🎨 Usage Examples

### Basic Font Classes:
```tsx
// Sans-serif fonts
<p className="font-inter">Text dengan Inter</p>
<p className="font-roboto">Text dengan Roboto</p>
<p className="font-open-sans">Text dengan Open Sans</p>
<p className="font-lato">Text dengan Lato</p>
<p className="font-raleway">Text dengan Raleway</p>
<p className="font-poppins">Text dengan Poppins</p>
<p className="font-nunito">Text dengan Nunito</p>
<p className="font-montserrat">Text dengan Montserrat</p>
<p className="font-ubuntu">Text dengan Ubuntu</p>

// Serif fonts
<p className="font-playfair">Text dengan Playfair Display</p>
<p className="font-lora">Text dengan Lora</p>
<p className="font-crimson-text">Text dengan Crimson Text</p>
<p className="font-libre-baskerville">Text dengan Libre Baskerville</p>
<p className="font-merriweather">Text dengan Merriweather</p>
<p className="font-source-serif">Text dengan Source Serif</p>
<p className="font-pt-serif">Text dengan PT Serif</p>
<p className="font-eb-garamond">Text dengan EB Garamond</p>

// Script/Cursive fonts
<p className="font-dancing-script">Text dengan Dancing Script</p>
<p className="font-great-vibes">Text dengan Great Vibes</p>
<p className="font-pacifico">Text dengan Pacifico</p>
<p className="font-satisfy">Text dengan Satisfy</p>
<p className="font-alex-brush">Text dengan Alex Brush</p>
<p className="font-allura">Text dengan Allura</p>
<p className="font-caveat">Text dengan Caveat</p>
<p className="font-lobster">Text dengan Lobster</p>
```

---

## �� Available Font Classes

### Sans-Serif Fonts:
- `.font-sans-serif` - System sans-serif
- `.font-inter` - Inter
- `.font-roboto` - Roboto
- `.font-open-sans` - Open Sans
- `.font-lato` - Lato
- `.font-raleway` - Raleway
- `.font-poppins` - Poppins
- `.font-nunito` - Nunito
- `.font-montserrat` - Montserrat
- `.font-ubuntu` - Ubuntu
- `.font-oswald` - Oswald
- `.font-source-sans` - Source Sans Pro
- `.font-pt-sans` - PT Sans
- `.font-quicksand` - Quicksand

### Serif Fonts:
- `.font-serif` - System serif
- `.font-bodoni-moda` - Bodoni Moda
- `.font-playfair` - Playfair Display
- `.font-lora` - Lora
- `.font-crimson-text` - Crimson Text
- `.font-libre-baskerville` - Libre Baskerville
- `.font-merriweather` - Merriweather
- `.font-source-serif` - Source Serif Pro
- `.font-pt-serif` - PT Serif
- `.font-crimson-pro` - Crimson Pro
- `.font-spectral` - Spectral
- `.font-eb-garamond` - EB Garamond
- `.font-libre-caslon` - Libre Caslon Text
- `.font-cormorant` - Cormorant
- `.font-cinzel` - Cinzel
- `.font-roboto-slab` - Roboto Slab

### Script/Cursive Fonts:
- `.font-dancing-script` - Dancing Script
- `.font-great-vibes` - Great Vibes
- `.font-pacifico` - Pacifico
- `.font-satisfy` - Satisfy
- `.font-alex-brush` - Alex Brush
- `.font-allura` - Allura
- `.font-amatic` - Amatic SC
- `.font-bad-script` - Bad Script
- `.font-bilbo` - Bilbo
- `.font-bilbo-swash` - Bilbo Swash Caps
- `.font-caveat` - Caveat
- `.font-comforter` - Comforter
- `.font-courgette` - Courgette
- `.font-damion` - Damion
- `.font-kaushan-script` - Kaushan Script
- `.font-lobster` - Lobster
- `.font-lobster-two` - Lobster Two

### Monospace Fonts:
- `.font-mono` - System monospace

### Weight Variations:
- `.font-raleway-thin` - Raleway 100
- `.font-raleway-light` - Raleway 300
- `.font-raleway-regular` - Raleway 400
- `.font-raleway-medium` - Raleway 500
- `.font-raleway-semibold` - Raleway 600
- `.font-raleway-bold` - Raleway 700
- `.font-raleway-extrabold` - Raleway 800
- `.font-raleway-black` - Raleway 900
- `.font-dancing-script-bold` - Dancing Script Bold

---

## 📐 Implementation

### CSS Structure:
```css
@layer utilities {
  .font-inter {
    font-family: "Inter", sans-serif;
  }
  
  .font-roboto {
    font-family: "Roboto", sans-serif;
  }
  
  .font-playfair {
    font-family: "Playfair Display", serif;
  }
  
  /* ... dan seterusnya */
}
```

### Google Fonts Integration:
```typescript
// app/layout.tsx
import { Inter, Roboto, Playfair_Display, ... } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Applied to body
<body className={`... ${inter.variable} ...`}>
```

---

## 🎯 Usage Patterns

### Wedding Invitation Example:
```tsx
<h1 className="font-playfair text-4xl">Wedding Title</h1>
<h2 className="font-dancing-script text-3xl">Couple Names</h2>
<p className="font-lora text-lg">Wedding Details</p>
<p className="font-raleway text-base">Additional Info</p>
```

### Business Website Example:
```tsx
<h1 className="font-montserrat text-4xl">Company Name</h1>
<h2 className="font-roboto text-2xl">Service Title</h2>
<p className="font-open-sans text-base">Description</p>
```

### Creative Portfolio Example:
```tsx
<h1 className="font-cinzel text-5xl">Portfolio Title</h1>
<h2 className="font-alex-brush text-3xl">Creative Name</h2>
<p className="font-lato text-lg">Project Description</p>
```

---

## 🎨 Font Categories

### Elegant/Formal:
- `font-playfair` - Classic serif elegance
- `font-bodoni-moda` - Traditional serif
- `font-crimson-text` - Readable serif
- `font-libre-baskerville` - Classic book font

### Modern/Clean:
- `font-inter` - Modern sans-serif
- `font-roboto` - Google's clean font
- `font-poppins` - Geometric sans-serif
- `font-nunito` - Friendly sans-serif

### Romantic/Script:
- `font-dancing-script` - Wedding classic
- `font-great-vibes` - Elegant script
- `font-alex-brush` - Handwritten style
- `font-allura` - Flowing script

### Display/Headers:
- `font-oswald` - Condensed sans-serif
- `font-montserrat` - Modern display
- `font-raleway` - Clean headers
- `font-cinzel` - Roman-inspired

### Body Text:
- `font-open-sans` - Highly readable
- `font-lato` - Friendly body text
- `font-source-sans` - Professional
- `font-pt-sans` - Clean body text

---

## 🧪 Testing Examples

### Quick Test:
```tsx
<div className="space-y-4">
  <p className="font-inter text-xl">Inter Font</p>
  <p className="font-roboto text-xl">Roboto Font</p>
  <p className="font-playfair text-xl">Playfair Display</p>
  <p className="font-dancing-script text-xl">Dancing Script</p>
  <p className="font-montserrat text-xl">Montserrat</p>
  <p className="font-lobster text-xl">Lobster</p>
</div>
```

### Responsive Font Test:
```tsx
<p className="font-raleway text-sm md:text-base lg:text-lg xl:text-xl">
  Responsive Raleway Font
</p>
```

### Weight Variation Test:
```tsx
<div className="space-y-2">
  <p className="font-raleway-thin text-xl">Thin (100)</p>
  <p className="font-raleway-light text-xl">Light (300)</p>
  <p className="font-raleway-regular text-xl">Regular (400)</p>
  <p className="font-raleway-medium text-xl">Medium (500)</p>
  <p className="font-raleway-semibold text-xl">Semibold (600)</p>
  <p className="font-raleway-bold text-xl">Bold (700)</p>
  <p className="font-raleway-extrabold text-xl">Extrabold (800)</p>
  <p className="font-raleway-black text-xl">Black (900)</p>
</div>
```

---

## 🔧 Customization

### Adding New Fonts:
1. Import font in `app/layout.tsx`
2. Create variable and add to body className
3. Add CSS class in `app/globals.css`
4. Use in components

### Font Weight Customization:
```tsx
// Combine with Tailwind weight classes
<p className="font-inter font-light">Light Inter</p>
<p className="font-roboto font-bold">Bold Roboto</p>
<p className="font-playfair font-black">Black Playfair</p>
```

### Font Size Combination:
```tsx
<p className="font-dancing-script text-2xl md:text-3xl lg:text-4xl">
  Responsive Dancing Script
</p>
```

---

## 📊 Performance Impact

### Font Loading:
- **Google Fonts**: Optimized delivery
- **Next.js integration**: Automatic optimization
- **Variable fonts**: Efficient loading
- **Subset loading**: Latin subset only

### Bundle Size:
- **Individual fonts**: ~20-50KB each
- **Total impact**: Minimal with optimization
- **Caching**: Browser font caching
- **Preload**: Critical fonts preloaded

---

## 🎯 Best Practices

### Font Selection:
- **Headers**: Display fonts (Oswald, Montserrat)
- **Body text**: Readable fonts (Inter, Open Sans)
- **Scripts**: Wedding/creative fonts (Dancing Script, Great Vibes)
- **Serifs**: Formal fonts (Playfair, Crimson Text)

### Performance:
- **Limit fonts**: Use 2-3 fonts max per page
- **Preload**: Critical fonts only
- **Fallbacks**: Always include fallback fonts
- **Testing**: Test on various devices

### Accessibility:
- **Readability**: Choose readable fonts for body text
- **Contrast**: Ensure good contrast ratios
- **Size**: Use appropriate font sizes
- **Fallbacks**: Include system font fallbacks

---

## 🚀 Next Steps

1. **Test fonts**: `npm run dev`
2. **Try different combinations**: Mix and match
3. **Performance check**: Monitor loading times
4. **Mobile testing**: Test on various devices
5. **Accessibility**: Check readability

---

## 💡 Tips & Tricks

### Quick Font Switching:
```tsx
// Easy font changes
<p className="font-inter">Default</p>
<p className="font-roboto">Roboto</p>
<p className="font-playfair">Playfair</p>
```

### Responsive Fonts:
```tsx
<p className="font-raleway text-sm md:text-base lg:text-lg">
  Responsive text
</p>
```

### Font Combinations:
```tsx
// Header + Body combination
<h1 className="font-playfair text-4xl">Elegant Header</h1>
<p className="font-inter text-base">Clean body text</p>
```

---

**Status**: ✅ Complete
**Fonts**: 50+ dynamic font classes available
**Usage**: Simply add `font-nama-font` to className
**Performance**: Optimized Google Fonts integration
**Last Updated**: October 12, 2025
