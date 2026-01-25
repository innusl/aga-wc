// Events page specific JavaScript

// Wait for content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for main.js to load content
    setTimeout(loadEvents, 100);
});

function parseEventDate(dateString) {
    // Check if this is a date range (contains " to ")
    if (dateString.includes(' to ')) {
        const [startStr, endStr] = dateString.split(' to ');
        const startDate = new Date(startStr);
        const endDate = new Date(endStr);
        return { isRange: true, startDate, endDate };
    }
    return { isRange: false, startDate: new Date(dateString), endDate: null };
}

function formatEventDate(dateInfo) {
    const { isRange, startDate, endDate } = dateInfo;

    if (!isRange) {
        return {
            day: startDate.getDate().toString(),
            month: startDate.toLocaleString('default', { month: 'short' })
        };
    }

    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const startMonth = startDate.toLocaleString('default', { month: 'short' });
    const endMonth = endDate.toLocaleString('default', { month: 'short' });

    if (startMonth === endMonth) {
        // Same month: "19-22" with single month
        return {
            day: `${startDay}-${endDay}`,
            month: startMonth
        };
    } else {
        // Different months: "19 Aug" / "2 Oct" style
        return {
            day: `${startDay}-${endDay}`,
            month: `${startMonth}-${endMonth}`
        };
    }
}

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
        const dateInfo = parseEventDate(event.date);
        const { day, month } = formatEventDate(dateInfo);

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
