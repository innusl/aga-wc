# Committee Members Information

## Overview

The AGA Western Cape Committee is displayed on the **About page** with photos, names, and roles.

## Current Committee Members (13 Total)

### Leadership
1. **Ms Antoinette Swanepoel** - Chairperson
2. **Mr Stefan Minne** - Vice Chairperson
3. **Ms Maria Jansen van Heerden** - Treasurer
4. **Ms Natasja Hoffmeester** - Secretary

### Coordination
5. **Mr Kirstein Pretorius** - Outreach Coordinator
6. **Ms Carlette van Nugteren** - Outreach Support
7. **Ms Sandra van Eck** - Head of Training
8. **Ms Nadia van Nugteren** - Multimedia

### Operations
9. **Mr Dawid Swanepoel** - Competitions & Championships, Maintenance
10. **Mr Hilgard Strydom** - Competitions & Championships, Records Officer, Marketing, IT Support
11. **Mr Gerhard van Heerden** - Marketing, Communications, Website

### Ad Hoc
12. **Ms Faz Grammer** - Ad hoc
13. **Mr Luther de Koker** - Ad hoc

## Where It's Displayed

**Location:** About page (`about.html`)
**Section:** "Committee Members" - appears after Mission & Vision
**Layout:** Responsive grid (4 columns on desktop, adapts to 1 column on mobile)

## How to Update Committee

### Adding a New Member

1. Add their photo to `images/committee/` folder
2. Open `data/content.json`
3. Find the `"about"` section, then `"committee"` array
4. Add a new member:

```json
{
  "name": "New Member Name",
  "role": "Their Position/Role",
  "image": "images/committee/newmember.jpg"
}
```

### Updating a Member

Find the member in the committee array and update their info:

```json
{
  "name": "Ms Antoinette Swanepoel",
  "role": "Chairperson",
  "image": "images/committee/chairperson_2024.jpg"
}
```

### Removing a Member

Simply delete their entire object from the committee array.

### Changing Photo

1. Replace the image file in `images/committee/` folder (keep same filename)
   OR
2. Add new image and update the `image` path in JSON

## Photo Guidelines

**Current Photos:**
- chairperson_2024.jpg
- vicechairperson_2024.jpg
- treasurer_2024.jpg
- secretary_2024.jpg
- outreach_2024.jpg
- outreach_2_2024.jpg
- training_2024.jpg
- multimedia_2024.jpg
- maintenance_2024.jpg
- itsupport.jpg
- website.jpg
- adhoc_1_2024.jpg
- adhoc_2_2024.jpg

**Recommendations:**
- Photo size: Minimum 400x400px, preferably square
- File format: JPG or PNG
- File size: Keep under 200KB for fast loading
- Naming: Use descriptive names with year suffix (e.g., `chairperson_2025.jpg`)

## Display Features

- **Responsive Grid**: Shows 4 columns on desktop, 3 on tablet, 1 on mobile
- **Photo Display**: Square photos with consistent sizing (250px height)
- **Hover Effect**: Cards lift slightly on hover
- **Clean Layout**: Name and role clearly displayed below photo

## Note on Contact vs Committee

**Committee Page (About):** Shows who runs the organization (names, roles, photos)
**Contact Page:** Shows how to reach staff (email, phone)

Some committee members may also appear on the contact page if they have contact information available.

## Difference from Original Site

The original site had a separate committee.html page. We've integrated this into the About page because:
1. More intuitive - "About Us" naturally includes team information
2. Better user experience - one less page to navigate
3. Industry standard - most organizations show team on About page
4. Easier to maintain - all "about" content in one place
