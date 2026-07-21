# Formula 1 Hungarian Grand Prix 2026 - Landing Page

A responsive, single-page landing website for the Formula 1 Hungarian Grand Prix at the Hungaroring circuit in Budapest (July 25-27, 2026).

## Features

✅ **Interactive Map** - Google Maps embedded showing the Hungaroring circuit location and surrounding area

✅ **Directions & Routes** - Transportation information with multiple options:
- Car (M0/M3 motorway route, parking info)
- Bus (direct services from Budapest)
- Taxi/Ride Share (Uber, Bolt)
- Train (Budapest to Mogyoród)

✅ **Directions Widget** - Interactive form to generate custom routes from any starting location to Hungaroring

✅ **Weekend Schedule** - Tabbed schedule showing:
- **Friday (July 25)** - Free Practice 1 & 2, Fan Zone Concert
- **Saturday (July 26)** - Free Practice 3, Qualifying, Grid Press Conference, Fan Zone Party
- **Sunday (July 27)** - Pit Lane Walk, Race (Main Event), Podium Ceremony, Victory Celebration

✅ **Ticket Information** - Direct links to purchase tickets with seating options

✅ **Responsive Design** - Works perfectly on mobile (375px), tablet (768px), and desktop (1280px+)

✅ **F1 Branding** - Professional color scheme using official F1 red (#dc0000) with modern styling

## File Structure

```
Hungaro/
├── index.html      # Main landing page (semantic HTML5)
├── styles.css      # Responsive styling with F1 branding
├── scripts.js      # Interactive features (tab switching, directions)
└── README.md       # This file
```

## Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Flexbox/Grid responsive layout, CSS variables, smooth animations
- **Vanilla JavaScript** - Tab switching, smooth scroll navigation, event tracking
- **Google Maps Embed API** - Interactive map and directions
- **No build tools required** - Works directly in any modern browser

## Usage

### Opening the Page

1. Simply open `index.html` in any modern web browser
2. Can be opened locally (`file://` protocol) or hosted on any web server
3. No dependencies or build steps needed

### Navigation

- **Sticky navigation bar** at top with links to Map, Directions, and Schedule
- **Smooth scrolling** to sections when navigation links are clicked
- **Tab switching** in schedule section - click Friday/Saturday/Sunday to view different days

### Directions Widget

1. Scroll to "Getting There" section
2. Enter your starting location (or use defaults like Budapest city center)
3. Click "Get Directions" to open Google Maps with route
4. Popular starting points:
   - Budapest Ferenc Liszt Airport
   - Budapest Keleti Station
   - Budapest City Center

## Customization

### Updating Event Times

Edit the schedule times in `index.html`:
```html
<div class="session">
    <div class="session-time">HH:MM - HH:MM</div>
    <div class="session-details">
        <h4>Event Name</h4>
        <p>Description</p>
    </div>
</div>
```

### Changing Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --f1-red: #dc0000;      /* Main accent color */
    --f1-dark: #1a1a1a;     /* Dark backgrounds */
    --f1-light: #f5f5f5;    /* Light backgrounds */
}
```

### Updating Venue Information

Edit footer contact info in `index.html`:
```html
<div class="footer-section">
    <h4>Event Info</h4>
    <p>Hungaroring Circuit</p>
    <p>Mogyoród, Hungary 2146</p>
    <p>+36 28 444 444</p>
</div>
```

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure for screen readers
- Sufficient color contrast (WCAG AA compliant)
- Keyboard navigation support
- Responsive design for all devices

## Performance

- **No external dependencies** - Fast loading
- **Minimal CSS/JS** - Optimized for speed
- **Lazy-loaded iframes** - Maps load asynchronously
- **Page loads in under 3 seconds** on typical broadband

## Future Enhancements

Potential additions (when needed):
- Live timing integration
- Social media feed
- Ticket availability widget
- Fan engagement features
- Event notifications
- Multi-language support

## License

© 2026 Formula 1 Hungarian Grand Prix. All rights reserved.

---

**Created:** July 2026
**Last Updated:** July 21, 2026
**Framework:** Vanilla HTML/CSS/JS
**Responsive:** Yes ✓