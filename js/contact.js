// Contact page specific JavaScript

// Wait for content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for main.js to load content
    setTimeout(loadContactInfo, 100);
});

function loadContactInfo() {
    if (!contentData || !contentData.contact) {
        console.error('Contact data not loaded');
        return;
    }

    const contactTitle = document.getElementById('contactTitle');
    const contactDescription = document.getElementById('contactDescription');
    const staffGrid = document.getElementById('staffGrid');
    const facebookLinkMain = document.getElementById('facebookLinkMain');

    if (contactTitle) contactTitle.textContent = contentData.contact.title;
    if (contactDescription) contactDescription.textContent = contentData.contact.description;

    // Populate staff contacts
    if (staffGrid && contentData.contact.staff) {
        staffGrid.innerHTML = '';

        contentData.contact.staff.forEach(staff => {
            const card = document.createElement('div');
            card.className = 'card feature-card fade-in';

            let cardContent = `
                <div style="text-align: center;">
                    <div style="width: 80px; height: 80px; margin: 0 auto 1rem; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <h3 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">${staff.name}</h3>
                    <p style="color: var(--secondary); font-weight: 600; margin-bottom: 1.5rem; font-size: 0.9375rem;">${staff.role}</p>
            `;

            // Add contact details if they exist
            if (staff.email || staff.phone) {
                cardContent += '<div style="border-top: 2px solid var(--border); padding-top: 1rem; text-align: left;">';

                if (staff.email) {
                    cardContent += `
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0;">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:${staff.email}" style="color: var(--text-secondary); text-decoration: none; word-break: break-all; font-size: 0.875rem;">${staff.email}</a>
                        </div>
                    `;
                }

                if (staff.phone) {
                    cardContent += `
                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0;">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <a href="tel:${staff.phone}" style="color: var(--text-secondary); text-decoration: none; font-size: 0.875rem;">${staff.phone}</a>
                        </div>
                    `;
                }

                cardContent += '</div>';
            }

            cardContent += '</div>';
            card.innerHTML = cardContent;
            staffGrid.appendChild(card);
        });
    }

    // Update Facebook link
    if (facebookLinkMain && contentData.contact.social.facebook) {
        facebookLinkMain.href = contentData.contact.social.facebook;
    }
}
