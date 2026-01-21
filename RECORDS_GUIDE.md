# Records Management Guide

This guide explains how to update the archery records on the website.

## Quick Start

All records are managed in **one file**: `data/content.json`

Look for the `"results"` section, then `"recordsByEvent"`.

## Record Structure

Records are organized by:
1. **Event Type**: BullsEye or 3D
2. **Category**: Junior High Girls/Boys, Primary Girls/Boys, AAG Women/Men

## How to Update a Record

### Scenario 1: New Record Score (beats existing record)

If someone sets a new record score:

1. Open `data/content.json`
2. Find the event type and category
3. Update the `score`
4. Replace or update the `holders` array with the new record holder(s)
5. Optionally update the `image` with a new photo

Example - Update Primary Boys BullsEye record:
```json
{
  "category": "Primary - Boys",
  "score": "299",  // Changed from 298
  "holders": [
    {
      "name": "New Archer Name",
      "grade": "Grade 7",
      "school": "New School Name",
      "year": "2025"
    }
  ],
  "image": "images/records/bullseyeprimaryboys.png"
}
```

### Scenario 2: Tie - Multiple Record Holders

If someone ties an existing record:

1. Keep the same `score`
2. Add the new person to the `holders` array

Example - Two people share the record:
```json
{
  "category": "Junior High - Girls",
  "score": "293",
  "holders": [
    {
      "name": "Micka Lerm",
      "grade": "Grade 8",
      "school": "Bloemhof Girls High School",
      "year": "2015"
    },
    {
      "name": "Janke van Niekerk",
      "grade": "Grade 8",
      "school": "DF Malan High School",
      "year": "2021"
    }
  ],
  "image": "images/records/bullseyejuniorhighgirls2024.png"
}
```

### Scenario 3: Update Photo

To add or update a record holder's photo:

1. Save the photo in `images/records/` folder
2. Name it descriptively (e.g., `bullseyeprimarygirls.png`)
3. Update the `image` path in the JSON

```json
{
  "category": "Primary - Girls",
  "score": "291",
  "holders": [...],
  "image": "images/records/bullseyeprimarygirls.png"  // Updated path
}
```

## Available Categories

### BullsEye Event
- Junior High - Girls
- Junior High - Boys
- Primary - Girls
- Primary - Boys
- AAG - Women (Adult Amateur Group)
- AAG - Men (Adult Amateur Group)

### 3D Event
- Junior High - Girls
- Junior High - Boys
- Primary - Girls
- Primary - Boys
- AAG - Women
- AAG - Men

## Photo Naming Convention

Current photo names:
- `bullseyejuniorhighgirls2024.png`
- `bullseyejuniorhighboys.png`
- `bullseyeprimarygirls.png`
- `bullseyeprimaryboys.png`
- `bullseyeaagwomen.png`
- `bullseyeaagmen.png`
- `3Djuniorhighgirls2024.png`
- `3Djuniorhighboys.png`
- `3Dprimarygirls.png`
- `3Dprimaryboys.png`
- `3Daagwomen2024.png`
- `3Daagmen2024.png`

**Tip**: You can add years to filenames (like `2024`) to keep track of updates.

## Adding a New Category

If you need to add a new category:

1. Find the appropriate `eventType` in the JSON
2. Add a new object to the `categories` array:

```json
{
  "category": "New Category Name",
  "score": "XXX",
  "holders": [
    {
      "name": "Archer Name",
      "grade": "Grade X",
      "school": "School Name",
      "year": "2025"
    }
  ],
  "image": "images/records/newcategory.png"
}
```

## Adding a New Event Type

To add a completely new event type (e.g., "Indoor"):

```json
{
  "eventType": "Indoor",
  "categories": [
    {
      "category": "Junior High - Girls",
      "score": "XXX",
      "holders": [...],
      "image": "images/records/indoorjuniorhighgirls.png"
    }
  ]
}
```

## Where Records Appear

- **Home Page** (`index.html`): Shows 3 featured records with photos
- **Results Page** (`results.html`): Shows ALL records organized by event type

## Testing Your Changes

1. Save `data/content.json`
2. Refresh the website in your browser
3. Check:
   - Home page - Record Holders section
   - Results page - All records display correctly
   - Photos load properly
   - Names, schools, and scores are correct

## Common Issues

**Problem**: Photo doesn't show
- **Solution**: Check the image path is correct and file exists in `images/records/`

**Problem**: JSON file won't save
- **Solution**: Validate your JSON at jsonlint.com - you might have a missing comma or bracket

**Problem**: Records don't update
- **Solution**: Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

## Example: Complete Update

Let's say Michael van der Merwe just beat his own record with 299 points:

1. Open `data/content.json`
2. Find "BullsEye" event type
3. Find "Primary - Boys" category
4. Update:

```json
{
  "category": "Primary - Boys",
  "score": "299",  // Changed from 298
  "holders": [
    {
      "name": "Michael van der Merwe",
      "grade": "Grade 7",
      "school": "Gene Louw Primary School",
      "year": "2025"  // Updated year
    }
  ],
  "image": "images/records/bullseyeprimaryboys.png"
}
```

5. Save the file
6. Refresh website

Done! The new record now appears on both the home page and results page.
