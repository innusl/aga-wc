# Contact Page Information

This document explains the contact information structure and how to update it.

## Current Staff Contacts

All contact information is pulled from the original AGA Western Cape contact page.

### Leadership
- **Ms Antoinette Swanepoel** - AGA WC Chairperson
  - Email: chairman@aga-wc.co.za

- **Ms Carla Venter** - AGA WC Vice Chairperson
  - (No contact details provided)

### Administration
- **Ms Jo-Anne Eygelaar** - Secretary
  - Email: secretary@aga-wc.co.za

- **Ms Marika Strydom** - Secretary
  - Email: secretary@aga-wc.co.za

- **Ms Georgenia Stam** - Treasurer
  - Email: finance@aga-wc.co.za

### Training & Support
- **Mr Luther de Koker** - Training and Development
  - Email: training@aga-wc.co.za
  - Phone: 0844824979

- **Mr Hilgard Strydom** - Scoring & IT Support
  - Email: scoring@aga-wc.co.za
  - Phone: 0823593196

### Social Media
- Facebook: https://www.facebook.com/groups/NASPWP/

## How to Update Contact Information

### Adding a New Staff Member

1. Open `data/content.json`
2. Find the `"contact"` section
3. Add a new object to the `"staff"` array:

```json
{
  "name": "New Person Name",
  "role": "Their Role",
  "email": "their.email@aga-wc.co.za",
  "phone": "0821234567"
}
```

### Updating Existing Staff

Find the staff member in the array and update their information:

```json
{
  "name": "Ms Antoinette Swanepoel",
  "role": "AGA WC Chairperson",
  "email": "chairman@aga-wc.co.za",
  "phone": "0821234567"  // Add phone if available
}
```

### Removing Staff

Simply delete the entire staff object from the array.

### Important Notes

- If email or phone is not available, use empty string `""`
- The contact page will automatically hide empty contact details
- Staff cards are displayed in a responsive grid (3 columns on desktop, 1 on mobile)
- Each staff member gets their own card with avatar icon

## Contact Page Features

- **Staff Cards**: Each staff member displayed in a modern card with avatar
- **Clickable Contacts**: Email addresses and phone numbers are clickable links
- **Social Media Section**: Prominent Facebook link at bottom of page
- **Responsive Design**: Works perfectly on mobile and desktop
- **Icons**: Email and phone icons for visual clarity

## Display Example

The contact page shows staff in this format:

```
┌─────────────────────┐
│    [Avatar Icon]    │
│                     │
│  Person Name        │
│  Their Role         │
│  ──────────────     │
│  📧 email@aga.co.za │
│  📱 082 123 4567    │
└─────────────────────┘
```

Only email and phone are shown if they exist in the data.
