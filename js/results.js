// Results page specific JavaScript

// Wait for content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for main.js to load content
    setTimeout(loadResults, 100);
});

function loadResults() {
    if (!contentData || !contentData.results) {
        console.error('Results data not loaded');
        return;
    }

    const resultsContainer = document.getElementById('resultsContainer');
    const noResults = document.getElementById('noResults');
    const resultsTitle = document.getElementById('resultsTitle');

    if (!resultsContainer) return;

    if (resultsTitle) resultsTitle.textContent = contentData.results.title;

    const recordsByEvent = contentData.results.recordsByEvent || [];

    if (recordsByEvent.length === 0) {
        if (noResults) noResults.style.display = 'block';
        return;
    }

    resultsContainer.innerHTML = '';

    // Add description if available
    if (contentData.results.description) {
        const descEl = document.createElement('p');
        descEl.textContent = contentData.results.description;
        descEl.style.textAlign = 'center';
        descEl.style.color = 'var(--text-secondary)';
        descEl.style.fontSize = '1.125rem';
        descEl.style.marginBottom = '3rem';
        resultsContainer.appendChild(descEl);
    }

    // Display records by event type
    recordsByEvent.forEach(eventGroup => {
        const eventSection = document.createElement('div');
        eventSection.style.marginBottom = '4rem';

        // Event type title
        const eventTitle = document.createElement('h3');
        eventTitle.textContent = `${eventGroup.eventType} Records`;
        eventTitle.style.fontSize = '2rem';
        eventTitle.style.fontWeight = '700';
        eventTitle.style.marginBottom = '2rem';
        eventTitle.style.color = 'var(--text-primary)';
        eventTitle.style.textAlign = 'center';
        eventSection.appendChild(eventTitle);

        // Categories grid
        const categoriesGrid = document.createElement('div');
        categoriesGrid.style.display = 'grid';
        categoriesGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(350px, 1fr))';
        categoriesGrid.style.gap = '2rem';
        categoriesGrid.style.marginBottom = '2rem';

        eventGroup.categories.forEach(catData => {
            const recordCard = document.createElement('div');
            recordCard.className = 'card fade-in';
            recordCard.style.overflow = 'hidden';

            // Image
            const imgContainer = document.createElement('div');
            imgContainer.style.width = '100%';
            imgContainer.style.height = '200px';
            imgContainer.style.overflow = 'hidden';
            imgContainer.style.marginBottom = '1.5rem';
            imgContainer.style.borderRadius = 'var(--radius-lg)';
            imgContainer.style.background = 'var(--bg-secondary)';

            if (catData.image) {
                const img = document.createElement('img');
                img.src = catData.image;
                img.alt = `${catData.category} Record Holder`;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                imgContainer.appendChild(img);
            }
            recordCard.appendChild(imgContainer);

            // Category title
            const catTitle = document.createElement('h4');
            catTitle.textContent = catData.category;
            catTitle.style.fontSize = '1.25rem';
            catTitle.style.fontWeight = '700';
            catTitle.style.color = 'var(--text-primary)';
            catTitle.style.marginBottom = '1rem';
            catTitle.style.textAlign = 'center';
            recordCard.appendChild(catTitle);

            // Score
            const scoreEl = document.createElement('div');
            scoreEl.style.textAlign = 'center';
            scoreEl.style.marginBottom = '1.5rem';
            const scoreValue = document.createElement('span');
            scoreValue.textContent = catData.score;
            scoreValue.style.fontSize = '3rem';
            scoreValue.style.fontWeight = '800';
            scoreValue.style.color = 'var(--secondary)';
            scoreValue.style.lineHeight = '1';
            const scoreLabel = document.createElement('span');
            scoreLabel.textContent = ' points';
            scoreLabel.style.fontSize = '1rem';
            scoreLabel.style.color = 'var(--text-secondary)';
            scoreEl.appendChild(scoreValue);
            scoreEl.appendChild(scoreLabel);
            recordCard.appendChild(scoreEl);

            // Record holders
            catData.holders.forEach((holder, index) => {
                const holderDiv = document.createElement('div');
                holderDiv.style.borderTop = index === 0 ? '2px solid var(--border)' : '1px solid var(--border)';
                holderDiv.style.paddingTop = '1rem';
                holderDiv.style.marginTop = index === 0 ? '0' : '0.75rem';

                const holderName = document.createElement('p');
                holderName.textContent = holder.name;
                holderName.style.fontWeight = '600';
                holderName.style.fontSize = '1.125rem';
                holderName.style.color = 'var(--text-primary)';
                holderName.style.marginBottom = '0.25rem';
                holderDiv.appendChild(holderName);

                const holderDetails = document.createElement('p');
                const details = [];
                if (holder.grade) details.push(holder.grade);
                details.push(holder.school);
                details.push(holder.year);
                holderDetails.textContent = details.join(' • ');
                holderDetails.style.color = 'var(--text-secondary)';
                holderDetails.style.fontSize = '0.9375rem';
                holderDiv.appendChild(holderDetails);

                recordCard.appendChild(holderDiv);
            });

            categoriesGrid.appendChild(recordCard);
        });

        eventSection.appendChild(categoriesGrid);
        resultsContainer.appendChild(eventSection);
    });
}
