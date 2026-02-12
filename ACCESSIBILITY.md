# Accessibility Guide

This landing page is built with accessibility (a11y) as a core principle. Here's how to maintain and improve it.

## ✅ Currently Implemented

### WCAG 2.1 Level AA Compliance

The site meets WCAG 2.1 Level AA standards:

1. **Perceivable** - Content must be perceivable to users
   - ✅ Images have alt text (when not decorative)
   - ✅ Color contrast meets AA standards
   - ✅ Text is resizable
   - ✅ Content doesn't rely on color alone

2. **Operable** - Content must be navigable and operable
   - ✅ Keyboard navigation support
   - ✅ No keyboard traps
   - ✅ Skip links ready
   - ✅ Touch-friendly buttons (min 44x44px)

3. **Understandable** - Content must be understandable
   - ✅ Clear language
   - ✅ Logical heading hierarchy
   - ✅ Form labels and error messages
   - ✅ Consistent navigation

4. **Robust** - Content must be robust
   - ✅ Valid HTML structure
   - ✅ Semantic HTML elements
   - ✅ ARIA labels where needed
   - ✅ Proper focus management

## 🎨 Color Contrast

### Current Color Scheme
- Primary text: `var(--foreground)` (15% darkness) on white background
- Links: `var(--primary)` (blue) with sufficient contrast
- Accent: `var(--accent)` (orange) for important elements

### Testing Contrast Ratios
- Normal text: 4.5:1 ratio (AA standard)
- Large text: 3:1 ratio (AA standard)
- Graphics: 3:1 ratio (AA standard)

Check your colors:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessible Colors](https://accessible-colors.com/)

## ⌨️ Keyboard Navigation

### Current Support
The site is fully keyboard navigable:

1. **Tab Navigation**: Tab through interactive elements in logical order
2. **Enter/Space**: Activate buttons and links
3. **Arrow Keys**: Navigate within form fields and select dropdowns
4. **Escape**: Close modals or interactive elements
5. **Focus Indicators**: Clear visual focus rings (2px blue outline)

### Testing Keyboard Navigation
```bash
# Navigate without mouse
1. Tab - Move forward through interactive elements
2. Shift+Tab - Move backward
3. Enter - Activate buttons/links
4. Space - Activate buttons/toggle switches
5. Arrow Keys - Navigate lists/menus
6. Escape - Close modals
```

## 📝 Semantic HTML

### Current Structure
```html
<main>
  <header>Header with navigation</header>
  <section id="hero">Hero section</section>
  <section id="services">Services</section>
  <section id="testimonials">Testimonials</section>
  <section id="appointment">Appointment form</section>
  <section id="location">Location info</section>
  <footer>Footer with links</footer>
</main>
```

### Heading Hierarchy
```
H1: Main page title (used in hero)
H2: Section titles (services, testimonials, appointment)
H3: Subsection titles (service cards, testimonial cards)
```

Never skip heading levels: H1 → H2 → H3 (not H1 → H3)

## 🔍 ARIA Labels & Attributes

### Current Implementation

**Form Fields**:
```tsx
<Label htmlFor="name" className="font-semibold">
  Full Name
</Label>
<Input
  id="name"
  aria-describedby={errors.name ? 'name-error' : undefined}
  aria-invalid={!!errors.name}
/>
{errors.name && <p id="name-error">{errors.name.message}</p>}
```

**Screen Reader Only Text**:
```tsx
<span className="sr-only">Read more about our services</span>
```

**Icon Buttons**:
```tsx
<button aria-label="Close menu">×</button>
```

### Adding New ARIA Labels

Use when:
1. **Icon-only buttons**: `<button aria-label="Close">X</button>`
2. **Form fields**: `<input aria-label="Search" />`
3. **Decorative elements**: `<span aria-hidden="true">→</span>`
4. **Regions**: `<nav aria-label="Main">`

Never use when:
1. Visible text already describes purpose
2. Element is purely decorative

## 🖼️ Images & Alt Text

### Current Practice
- ✅ Decorative images: `alt=""` (empty)
- ✅ Content images: Descriptive alt text
- ✅ Icons: Hidden from screen readers with `aria-hidden="true"`
- ✅ Charts: Data description in alt text

### Adding Images
```tsx
// DO: Descriptive alt text
<img
  src="/team.jpg"
  alt="Dr. Sarah Johnson and Dr. Michael Chen in the dental office"
/>

// DON'T: Vague or missing alt text
<img src="/team.jpg" alt="team" />

// DO: Empty alt for purely decorative
<img src="/decorative-shape.svg" alt="" aria-hidden="true" />
```

### Testing Images
- Disable images in browser
- Use screen reader to verify description makes sense
- Check Chrome DevTools accessibility audit

## 📱 Mobile Accessibility

### Touch Targets
- Minimum 44x44px (iOS) / 48x48dp (Android)
- At least 8px spacing between touch targets
- Current buttons: All meet or exceed minimum

### Responsive Text
- Base font size: 16px
- Readable without zooming
- Text can be enlarged to 200% without loss
- No horizontal scrolling on zoom

### Mobile Form Input
```tsx
// Use appropriate input types for mobile keyboards
<input type="email" />      {/* Shows @ symbol */}
<input type="tel" />        {/* Shows number pad */}
<input type="date" />       {/* Shows date picker */}
<textarea />                {/* Shows full keyboard */}
```

## 🧪 Testing Accessibility

### Automated Testing
```bash
# Run Lighthouse audit
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Check "Accessibility"
4. Run audit
```

### Manual Testing
```bash
# Keyboard only
1. Unplug mouse (or use keyboard-only mode)
2. Navigate entire site using Tab/Shift+Tab
3. Verify all functions work

# Screen reader testing
macOS Safari: VoiceOver (Cmd+F5)
Windows: NVDA (free), JAWS (paid)
Linux: Orca

# Color contrast
Use WebAIM Contrast Checker on all text
```

### Browser Tools
- **Chrome**: Lighthouse, DevTools Accessibility panel
- **Firefox**: Accessibility Inspector
- **Safari**: Accessibility Inspector

## 🔄 Prefers Reduced Motion

### Current Implementation
```css
@media (prefers-reduce-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Testing
1. macOS: System Preferences → Accessibility → Display → Reduce motion
2. Windows: Settings → Ease of Access → Display → Show animations
3. DevTools: More Tools → Rendering → Emulate CSS media feature

## 🌐 Language & Readability

### Current Standards
- Plain language (no jargon)
- Short sentences
- Active voice
- Clear structure
- Readability level: Grade 8

### Improving Content
- Use lists for multiple items
- Break text into short paragraphs
- Use headings to organize
- Define technical terms
- Avoid abbreviations (or explain first use)

## ♿ Screen Reader Testing

### Common Screen Readers
- **NVDA**: Free, Windows
- **JAWS**: Industry standard, Windows/Mac
- **VoiceOver**: Built-in, macOS/iOS
- **TalkBack**: Built-in, Android

### What to Test
1. Page title announces correctly
2. Headings read in order
3. Links are descriptive
4. Form labels are associated
5. Buttons have clear purpose
6. Images have alt text
7. Error messages are clear

## 📋 Accessibility Checklist

### Before Deployment
- [ ] Run Lighthouse accessibility audit
- [ ] Test with keyboard only
- [ ] Test with screen reader (at least one)
- [ ] Check color contrast (WebAIM)
- [ ] Verify heading hierarchy
- [ ] Test form validation
- [ ] Check form labels/aria-labels
- [ ] Verify alt text on images
- [ ] Test on mobile (touch targets)
- [ ] Test prefers-reduce-motion

### For New Features
- [ ] Add semantic HTML
- [ ] Add ARIA labels if needed
- [ ] Ensure keyboard accessible
- [ ] Test with screen reader
- [ ] Verify color contrast
- [ ] Add focus states
- [ ] Document accessibility considerations

## 🚀 Making Your Site Accessible

### When Adding Components
```tsx
// Include necessary accessibility features:
<button
  aria-label="Toggle navigation"
  aria-expanded={isOpen}
  onClick={() => setIsOpen(!isOpen)}
>
  Menu
</button>

<nav aria-label="Main navigation">
  <ul>
    <li><a href="#services">Services</a></li>
  </ul>
</nav>

<form>
  <label htmlFor="email">Email</label>
  <input id="email" type="email" aria-required="true" />
</form>
```

### Documentation
- Comment accessibility decisions
- Note aria-labels usage
- Document keyboard interactions
- Explain focus management

## 🔗 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [a11y Project](https://www.a11yproject.com/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

## 💡 Key Takeaways

1. **Keyboard support** - All interactive elements
2. **Semantic HTML** - Use proper elements
3. **Color contrast** - 4.5:1 for normal text
4. **Alt text** - Descriptive for content images
5. **ARIA labels** - When needed for clarity
6. **Focus management** - Clear, visible focus states
7. **Error messages** - Clear and helpful
8. **Mobile friendly** - Touch targets 44x44px+

---

Accessibility is not a feature, it's a requirement. 🙌
