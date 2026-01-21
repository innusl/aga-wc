// Events page specific JavaScript

// Wait for content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for main.js to load content
    setTimeout(loadEvents, 100);
});

function loadEvents() {
    if (!contentData || !contentData.events) {
        console.error('Events data not loaded');
        return;
    }

    const eventsContainer = document.getElementById('eventsContainer');
    const noEvents = document.getElementById('noEvents');

    if (!eventsContainer) return;

    const upcomingEvents = contentData.events.upcoming || [];

    if (upcomingEvents.length === 0) {
        if (noEvents) noEvents.style.display = 'block';
        return;
    }

    eventsContainer.innerHTML = '';

    upcomingEvents.forEach(event => {
        const eventDate = new Date(event.date);
        const day = eventDate.getDate();
        const month = eventDate.toLocaleString('default', { month: 'short' });

        const eventCard = document.createElement('div');
        eventCard.className = 'event-card fade-in';
        eventCard.innerHTML = `
            <div class="event-date">
                <div class="event-date-day">${day}</div>
                <div class="event-date-month">${month}</div>
            </div>
            <div class="event-details">
                <h3 class="event-title">${event.title}</h3>
                <div class="event-meta">
                    <div class="event-meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>${event.time}</span>
                    </div>
                    <div class="event-meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>${event.location}</span>
                    </div>
                </div>
                <p class="event-description">${event.description}</p>
            </div>
        `;
        eventsContainer.appendChild(eventCard);
    });
}
