# AGA Western Cape Website

A modern, fully responsive multi-page website for AGA Western Cape (Archery in Schools) designed for GitHub Pages.

## Features

- **Modern Design**: Beautiful gradient backgrounds, card-based layouts, smooth animations
- **Fully Responsive**: Perfect display on mobile, tablet, and desktop
- **Multi-Page Structure**: Home, About, Events, Records, and Contact pages
- **Easy Content Management**: Simple JSON file for updating all content
- **Dynamic Content Loading**: All content loaded from JSON for easy maintenance
- **Live Countdown Timer**: Automatic countdown to next event
- **Clean Navigation**: Fixed header with smooth scrolling
- **Professional Footer**: Complete with quick links and social media

## Project Structure

```
aga-wc/
├── index.html          # Home page
├── about.html          # About page
├── events.html         # Events page
├── records.html        # Records page
├── contact.html        # Contact page
├── css/
│   └── style.css       # Modern styling with gradients
├── js/
│   ├── main.js         # Core functionality
│   ├── events.js       # Events page logic
│   ├── results.js      # Results page logic
│   └── contact.js      # Contact page logic
├── data/
│   └── content.json    # ALL CONTENT (edit this file!)
├── images/             # (Optional) Add your images here
└── README.md           # This file
```

## Local Development

### Starting the Server

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

### Stopping the Server

Press `Ctrl+C` in the terminal where the server is running.

### Available Pages

- http://localhost:8000 (Home)
- http://localhost:8000/about.html
- http://localhost:8000/events.html
- http://localhost:8000/records.html (Records)
- http://localhost:8000/contact.html

## How to Update Content

**ALL** website content is managed through `data/content.json`. You never need to touch HTML, CSS, or JavaScript files!

### Updating Site Title and Tagline

```json
{
  "siteTitle": "AGA Western Cape",
  "tagline": "Empowering Youth Through Archery"
}
```

### Updating Hero Section

```json
{
  "hero": {
    "title": "AGA Western Cape",
    "subtitle": "Building Character, Focus, and Excellence Through Archery",
    "cta": {
      "text": "Learn More",
      "link": "#about"
    }
  }
}
```

### Updating Navigation Menu

```json
{
  "navigation": [
    {
      "name": "Home",
      "url": "index.html"
    },
    {
      "name": "External Link",
      "url": "https://example.com",
      "external": true
    }
  ]
}
```

### Updating About Content

```json
{
  "about": {
    "title": "What is AGA?",
    "intro": "Short introduction...",
    "description": "Longer description...",
    "features": [
      {
        "icon": "🎯",
        "title": "Feature Title",
        "description": "Feature description"
      }
    ],
    "committee": [
      {
        "name": "Member Name",
        "role": "Their Position",
        "image": "images/committee/photo.jpg"
      }
    ]
  }
}
```

**Committee Members:**
- Displayed on the About page in a grid layout
- Each member shows: photo, name, and role
- Photos stored in `images/committee/` folder
- Add/remove/update by editing the `committee` array

### Adding Events

```json
{
  "events": {
    "upcoming": [
      {
        "title": "Championship Name",
        "date": "2026-10-05",
        "time": "09:00 AM",
        "location": "Location Name",
        "description": "Event description"
      }
    ],
    "countdown": {
      "enabled": true,
      "eventName": "Next Event",
      "eventDate": "2026-10-05T09:00:00"
    }
  }
}
```

### Adding/Updating Records

Records are organized by **Event Type** (BullsEye, 3D) and **Category** (Junior High Girls/Boys, Primary Girls/Boys, AAG Women/Men).

**Structure:**

```json
{
  "results": {
    "title": "Results & Records",
    "description": "Competition records from 2015 to present",
    "recordsByEvent": [
      {
        "eventType": "BullsEye",
        "categories": [
          {
            "category": "Junior High - Girls",
            "score": "293",
            "holders": [
              {
                "name": "Micka Lerm",
                "grade": "Grade 8",
                "school": "Bloemhof Girls High School",
                "year": "2015"
              }
            ],
            "image": "images/records/bullseyejuniorhighgirls2024.png"
          }
        ]
      },
      {
        "eventType": "3D",
        "categories": [
          {
            "category": "Junior High - Boys",
            "score": "294",
            "holders": [
              {
                "name": "Gerdus Visser",
                "grade": "Grade 11",
                "school": "Labori High School",
                "year": "2015"
              }
            ],
            "image": "images/records/3Djuniorhighboys.png"
          }
        ]
      }
    ]
  }
}
```

**Tips for Updating Records:**

1. **Adding a New Record Holder**:
   - Update the `score` if it's higher
   - Add to or replace the `holders` array
   - Update the `image` if you have a new photo

2. **Adding Photos**:
   - Place photos in `images/records/` folder
   - Use descriptive names (e.g., `bullseyeprimarygirls.png`)
   - Reference the path in the `image` field

3. **Multiple Record Holders**:
   - If multiple people share the same record, add them all to the `holders` array
   - All will be displayed together

4. **Categories Available**:
   - Junior High - Girls
   - Junior High - Boys
   - Primary - Girls
   - Primary - Boys
   - AAG - Women (Adult Amateur Group)
   - AAG - Men (Adult Amateur Group)

**Display Locations:**
- **Home Page**: Shows 3 featured records with photos
- **Records Page**: Shows ALL records organized by event type with photos

**Note:** Current competition results are viewed externally via the "Live Scores" and "Results" links in the navigation, which direct to https://naspwpscoring.co.za

### Updating Contact Information

The contact page displays staff members with their roles and contact details.

**Adding/Updating Staff:**

```json
{
  "contact": {
    "title": "Contact Us",
    "description": "Get in touch with our team for inquiries",
    "staff": [
      {
        "name": "Ms Antoinette Swanepoel",
        "role": "AGA WC Chairperson",
        "email": "chairman@aga-wc.co.za",
        "phone": ""
      },
      {
        "name": "Mr Luther de Koker",
        "role": "Training and Development",
        "email": "training@aga-wc.co.za",
        "phone": "0844824979"
      }
    ],
    "social": {
      "facebook": "https://www.facebook.com/groups/NASPWP/"
    }
  }
}
```

**Tips:**
- Leave `email` or `phone` as empty string `""` if not available
- Staff cards will only show contact details that are provided
- Add new staff by adding objects to the `staff` array
- Remove staff by removing their object from the array

### Updating Footer

```json
{
  "footer": {
    "description": "Footer description text",
    "quickLinks": [
      {
        "name": "Link Name",
        "url": "https://example.com"
      }
    ]
  }
}
```

## Design Customization

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary: #0f172a;
    --secondary: #1e40af;
    --accent: #f59e0b;

    /* Gradients */
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

### Changing Fonts

The site uses Inter font from Google Fonts. To change:
1. Update the Google Fonts link in all HTML files
2. Update `font-family` in `css/style.css`

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `aga-wc`)
3. Don't initialize with README

### Step 2: Push Your Code

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Modern AGA Western Cape website"

# Add your GitHub repository
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** in the left sidebar
4. Under **Source**, select **main** branch
5. Click **Save**

Your site will be live at: `https://YOUR-USERNAME.github.io/REPO-NAME/`

## Modern Design Features

- **Gradient Backgrounds**: Beautiful purple-to-pink gradients
- **Glassmorphism**: Frosted glass effects on cards
- **Smooth Animations**: Fade-ins and hover effects
- **Card-Based Layout**: Clean, modern card designs
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Professional Typography**: Inter font for clean readability
- **Shadow System**: Multiple shadow levels for depth
- **Hover Effects**: Interactive elements with smooth transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tech Stack

- Pure HTML5
- CSS3 (with CSS Variables and Grid/Flexbox)
- Vanilla JavaScript (no frameworks)
- Google Fonts (Inter)
- JSON for content management

## Tips for Content Management

1. **Always validate your JSON** after editing (use jsonlint.com)
2. **Dates format**: Use `YYYY-MM-DD` for dates
3. **Event countdown**: Set `enabled: false` to hide countdown
4. **Empty arrays**: Use `[]` for empty records or events
5. **External links**: Set `external: true` for external URLs

## Support

For issues or questions, please refer to the GitHub repository.

## License

This project is open source and available for use by AGA Western Cape.
