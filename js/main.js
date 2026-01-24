// Global content data
let contentData = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    await loadContent();
    initializeNavigation();
    updateFooter();
    initializeCountdown();

    // Page-specific initialization
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    if (page === 'index.html' || page === '' || page === '/') {
        initializeHomePage();
    } else if (page === 'about.html') {
        initializeAboutPage();
    } else if (page === 'fees.html') {
        initializeFeesPage();
    }
});

// Load content from JSON file
async function loadContent() {
    try {
        const response = await fetch('data/content.json');
        contentData = await response.json();
        populateGlobalContent();
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

// Populate content that appears on all pages
function populateGlobalContent() {
    if (!contentData) return;

    // Update site title in nav
    const siteTitleNav = document.getElementById('siteTitleNav');
    if (siteTitleNav) {
        siteTitleNav.textContent = contentData.siteTitle;
    }

    // Update navigation menu
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.innerHTML = '';
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        contentData.navigation.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = item.name;

            // Add active class if current page
            if (item.url === currentPage ||
                (currentPage === '' && item.url === 'index.html')) {
                a.classList.add('active');
            }

            if (item.external) {
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
            }
            li.appendChild(a);
            navMenu.appendChild(li);
        });
    }
}

// Initialize home page specific content
function initializeHomePage() {
    if (!contentData) return;

    // Hero content
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const heroCTA = document.getElementById('heroCTA');

    if (heroTitle) heroTitle.textContent = contentData.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = contentData.hero.subtitle;
    if (heroCTA) {
        heroCTA.textContent = contentData.hero.cta.text;
        heroCTA.href = contentData.hero.cta.link;
    }

    // About section
    populateAboutContent();

    // Records section
    populateRecordsPreview();
}

// Initialize about page
function initializeAboutPage() {
    populateAboutContent();
    populatePurpose();
    populateServices();
    populateEquipment();
    populateFAQ();
    populateRulesDocument();
    populateAbbreviations();
    populateCommittee();
}

// Initialize fees page
function initializeFeesPage() {
    populateFeesContent();
}

// Populate about content (used on home and about pages)
function populateAboutContent() {
    if (!contentData) return;

    const aboutTitle = document.getElementById('aboutTitle');
    const aboutIntro = document.getElementById('aboutIntro');
    const aboutDescription = document.getElementById('aboutDescription');
    const aboutMission = document.getElementById('aboutMission');
    const featuresGrid = document.getElementById('featuresGrid');

    if (aboutTitle) aboutTitle.textContent = contentData.about.title;
    if (aboutIntro) aboutIntro.textContent = contentData.about.intro;
    if (aboutDescription) aboutDescription.textContent = contentData.about.description;
    if (aboutMission) aboutMission.textContent = contentData.about.mission;

    if (featuresGrid && contentData.about.features) {
        featuresGrid.innerHTML = '';
        contentData.about.features.forEach(feature => {
            const card = document.createElement('div');
            card.className = 'card feature-card fade-in';
            card.innerHTML = `
                <span class="card-icon">${feature.icon}</span>
                <h3 class="card-title">${feature.title}</h3>
                <p class="card-description">${feature.description}</p>
            `;
            featuresGrid.appendChild(card);
        });
    }
}

// Populate committee members on about page
function populateCommittee() {
    if (!contentData || !contentData.about || !contentData.about.committee) return;

    const committeeGrid = document.getElementById('committeeGrid');
    if (!committeeGrid) return;

    committeeGrid.innerHTML = '';
    contentData.about.committee.forEach(member => {
        const card = document.createElement('div');
        card.className = 'card fade-in';
        card.style.overflow = 'hidden';
        card.style.textAlign = 'center';

        card.innerHTML = `
            <div style="width: 100%; height: 250px; overflow: hidden; margin-bottom: 1.5rem; border-radius: var(--radius-lg); background: var(--bg-secondary);">
                <img src="${member.image}" alt="${member.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <h3 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">${member.name}</h3>
            <p style="color: var(--secondary); font-weight: 600; font-size: 0.9375rem;">${member.role}</p>
        `;
        committeeGrid.appendChild(card);
    });
}

// Populate purpose section on about page
function populatePurpose() {
    if (!contentData || !contentData.about || !contentData.about.purpose) return;

    const purposeTitle = document.getElementById('purposeTitle');
    const purposeDescription = document.getElementById('purposeDescription');
    const benefitsGrid = document.getElementById('benefitsGrid');

    if (purposeTitle) purposeTitle.textContent = contentData.about.purpose.title;
    if (purposeDescription) purposeDescription.textContent = contentData.about.purpose.description;

    if (benefitsGrid && contentData.about.purpose.benefits) {
        benefitsGrid.innerHTML = '';
        contentData.about.purpose.benefits.forEach(benefit => {
            const card = document.createElement('div');
            card.className = 'card fade-in';
            card.innerHTML = `
                <div style="display: flex; align-items: start; gap: 1rem;">
                    <span style="color: var(--secondary); font-size: 1.5rem; flex-shrink: 0;">✓</span>
                    <p style="color: var(--text-secondary); line-height: 1.6;">${benefit}</p>
                </div>
            `;
            benefitsGrid.appendChild(card);
        });
    }
}

// Populate services section on about page
function populateServices() {
    if (!contentData || !contentData.about || !contentData.about.services) return;

    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;

    servicesGrid.innerHTML = '';
    contentData.about.services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'card fade-in';
        card.innerHTML = `
            <div style="display: flex; align-items: start; gap: 1rem;">
                <span style="color: var(--secondary); font-size: 1.5rem; flex-shrink: 0;">→</span>
                <p style="color: var(--text-secondary); line-height: 1.6;">${service}</p>
            </div>
        `;
        servicesGrid.appendChild(card);
    });
}

// Populate equipment section
function populateEquipment() {
    if (!contentData || !contentData.about || !contentData.about.equipment) return;

    const equipmentDescription = document.getElementById('equipmentDescription');
    const equipmentList = document.getElementById('equipmentList');

    if (equipmentDescription) {
        equipmentDescription.textContent = contentData.about.equipment.description;
    }

    if (equipmentList && contentData.about.equipment.items) {
        equipmentList.innerHTML = '';
        contentData.about.equipment.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.style.cssText = 'display: flex; align-items: center; gap: 1rem; padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius); margin-bottom: 0.75rem;';
            itemDiv.innerHTML = `
                <span style="color: var(--secondary); font-size: 1.5rem;">🎯</span>
                <span style="color: var(--text-primary); font-size: 1rem;">${item}</span>
            `;
            equipmentList.appendChild(itemDiv);
        });
    }
}

// Populate FAQ section
function populateFAQ() {
    if (!contentData || !contentData.about || !contentData.about.faq) return;

    const faqContainer = document.getElementById('faqContainer');
    if (!faqContainer) return;

    faqContainer.innerHTML = '';
    contentData.about.faq.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'card fade-in';
        faqItem.style.marginBottom = '1rem';
        faqItem.style.cursor = 'pointer';

        faqItem.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; gap: 1rem;">
                <div style="flex: 1;">
                    <h3 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem;">${item.question}</h3>
                    <p style="color: var(--text-secondary); line-height: 1.6; display: none;" class="faq-answer">${item.answer}</p>
                </div>
                <span style="color: var(--secondary); font-size: 1.5rem; transition: transform 0.3s;" class="faq-toggle">+</span>
            </div>
        `;

        faqItem.addEventListener('click', () => {
            const answer = faqItem.querySelector('.faq-answer');
            const toggle = faqItem.querySelector('.faq-toggle');
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                toggle.textContent = '−';
                toggle.style.transform = 'rotate(180deg)';
            } else {
                answer.style.display = 'none';
                toggle.textContent = '+';
                toggle.style.transform = 'rotate(0deg)';
            }
        });

        faqContainer.appendChild(faqItem);
    });
}

// Populate rules document section
function populateRulesDocument() {
    if (!contentData || !contentData.about || !contentData.about.rulesDocument) return;

    const rulesTitle = document.getElementById('rulesTitle');
    const rulesDescription = document.getElementById('rulesDescription');
    const rulesDownload = document.getElementById('rulesDownload');

    if (rulesTitle) rulesTitle.textContent = contentData.about.rulesDocument.title;
    if (rulesDescription) rulesDescription.textContent = contentData.about.rulesDocument.description;
    if (rulesDownload && contentData.about.rulesDocument.file) {
        rulesDownload.href = contentData.about.rulesDocument.file;
    }
}

// Populate abbreviations section
function populateAbbreviations() {
    if (!contentData || !contentData.about || !contentData.about.abbreviations) return;

    const abbreviationsGrid = document.getElementById('abbreviationsGrid');
    if (!abbreviationsGrid) return;

    abbreviationsGrid.innerHTML = '';
    contentData.about.abbreviations.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card fade-in';
        card.style.textAlign = 'center';
        card.innerHTML = `
            <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--secondary); margin-bottom: 0.5rem;">${item.term}</h3>
            <p style="color: var(--text-secondary); line-height: 1.6; font-size: 0.9375rem;">${item.definition}</p>
        `;
        abbreviationsGrid.appendChild(card);
    });
}

// Populate records preview on home page
function populateRecordsPreview() {
    if (!contentData || !contentData.results || !contentData.results.recordsByEvent) return;

    const recordsGrid = document.getElementById('recordsGrid');
    if (!recordsGrid) return;

    // Get first 3 records across all event types for preview
    const featuredRecords = [];
    contentData.results.recordsByEvent.forEach(eventGroup => {
        eventGroup.categories.forEach(catData => {
            if (featuredRecords.length < 3) {
                featuredRecords.push({
                    eventType: eventGroup.eventType,
                    category: catData.category,
                    score: catData.score,
                    holder: catData.holders[0], // Show first holder
                    image: catData.image
                });
            }
        });
    });

    if (featuredRecords.length === 0) {
        recordsGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No records available yet.</p>';
        return;
    }

    recordsGrid.innerHTML = '';
    featuredRecords.forEach(record => {
        const card = document.createElement('div');
        card.className = 'card fade-in';
        card.style.overflow = 'hidden';

        let cardHTML = '';

        // Add image if available
        if (record.image) {
            cardHTML += `
                <div style="width: 100%; height: 200px; overflow: hidden; margin-bottom: 1.5rem; border-radius: var(--radius-lg); background: var(--bg-secondary); display: flex; align-items: center; justify-content: center;">
                    <img src="${record.image}" alt="${record.category} Record" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                </div>
            `;
        }

        cardHTML += `
            <div style="text-align: center;">
                <span style="display: inline-block; padding: 0.25rem 0.75rem; background: var(--gradient-primary); color: white; border-radius: var(--radius); font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.75rem;">${record.eventType}</span>
                <h4 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem;">${record.category}</h4>
                <p style="font-size: 2.5rem; font-weight: 800; color: var(--secondary); margin: 1rem 0; line-height: 1;">${record.score}</p>
                <p style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.25rem; font-size: 1rem;">${record.holder.name}</p>
                <p style="color: var(--text-secondary); font-size: 0.9rem;">${record.holder.school}</p>
                <p style="color: var(--text-light); font-size: 0.875rem; margin-top: 0.5rem;">${record.holder.year}</p>
            </div>
        `;

        card.innerHTML = cardHTML;
        recordsGrid.appendChild(card);
    });
}

// Navigation menu toggle
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (link.getAttribute('href').startsWith('#')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    // Add scrolled class to navbar on scroll
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// Countdown timer
function initializeCountdown() {
    if (!contentData || !contentData.events || !contentData.events.countdown.enabled) return;

    const countdownBanner = document.getElementById('countdownBanner');
    const countdownTitle = document.getElementById('countdownTitle');

    if (countdownBanner && countdownTitle) {
        countdownBanner.style.display = 'block';
        countdownTitle.textContent = contentData.events.countdown.eventName;

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
}

function updateCountdown() {
    if (!contentData || !contentData.events || !contentData.events.countdown.enabled) return;

    const eventDate = new Date(contentData.events.countdown.eventDate);
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
        const countdownBanner = document.getElementById('countdownBanner');
        if (countdownBanner) countdownBanner.style.display = 'none';
        return;
    }

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const monthsEl = document.getElementById('months');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (monthsEl) monthsEl.textContent = months;
    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = hours;
    if (minutesEl) minutesEl.textContent = minutes;
    if (secondsEl) secondsEl.textContent = seconds;
}

// Update footer
function updateFooter() {
    if (!contentData) return;

    const footerTitle = document.getElementById('footerTitle');
    const footerDescription = document.getElementById('footerDescription');
    const footerFacebook = document.getElementById('footerFacebook');
    const currentYear = document.getElementById('currentYear');

    if (footerTitle) footerTitle.textContent = contentData.siteTitle;
    if (footerDescription) footerDescription.textContent = contentData.footer.description;
    if (footerFacebook && contentData.contact.social.facebook) {
        footerFacebook.href = contentData.contact.social.facebook;
    }
    if (currentYear) currentYear.textContent = new Date().getFullYear();

    // Footer navigation
    const footerNav = document.getElementById('footerNav');
    if (footerNav) {
        footerNav.innerHTML = '';
        contentData.navigation.filter(item => !item.external).forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = item.name;
            li.appendChild(a);
            footerNav.appendChild(li);
        });
    }

    // Footer external links
    const footerExternal = document.getElementById('footerExternal');
    if (footerExternal) {
        footerExternal.innerHTML = '';

        // Add external nav items
        contentData.navigation.filter(item => item.external).forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = item.name;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            li.appendChild(a);
            footerExternal.appendChild(li);
        });

        // Add quick links
        if (contentData.footer.quickLinks) {
            contentData.footer.quickLinks.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = item.url;
                a.textContent = item.name;
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                li.appendChild(a);
                footerExternal.appendChild(li);
            });
        }
    }
}

// Populate fees page content
function populateFeesContent() {
    if (!contentData || !contentData.about || !contentData.about.programInfo) return;

    const programInfo = contentData.about.programInfo;

    // Populate fees section
    if (programInfo.fees) {
        const feesTitle = document.getElementById('feesTitle');
        const feesDueDate = document.getElementById('feesDueDate');
        const feesContainer = document.getElementById('feesContainer');

        if (feesTitle) feesTitle.textContent = programInfo.fees.title;
        if (feesDueDate) {
            feesDueDate.textContent = programInfo.fees.dueDate;
            feesDueDate.style.color = 'var(--accent)';
            feesDueDate.style.fontWeight = '700';
        }

        if (feesContainer && programInfo.fees.categories) {
            feesContainer.innerHTML = '';
            programInfo.fees.categories.forEach(category => {
                const categoryDiv = document.createElement('div');
                categoryDiv.style.marginBottom = '2.5rem';

                let itemsHTML = '';
                category.items.forEach(item => {
                    itemsHTML += `
                        <div style="display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid var(--border); background: white; padding: 1rem 1.5rem; margin-bottom: 0.5rem; border-radius: var(--radius);">
                            <span style="color: var(--text-secondary); font-weight: 600;">${item.item}</span>
                            <span style="color: var(--accent); font-weight: 700; font-size: 1.125rem;">${item.price}</span>
                        </div>
                    `;
                });

                categoryDiv.innerHTML = `
                    <h3 style="font-family: 'Montserrat', sans-serif; font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1rem; padding-left: 0.5rem; border-left: 4px solid var(--accent);">${category.category}</h3>
                    ${itemsHTML}
                `;
                feesContainer.appendChild(categoryDiv);
            });
        }
    }

    // Populate banking details
    const bankingContainer = document.getElementById('bankingDetailsContainer');
    if (bankingContainer && programInfo.banking) {
        const banking = programInfo.banking;
        bankingContainer.innerHTML = `
            <div style="text-align: center; margin-bottom: 2rem;">
                <h3 style="font-family: 'Montserrat', sans-serif; font-size: 1.75rem; font-weight: 900; color: var(--text-primary); margin-bottom: 0.5rem;">${banking.accountName}</h3>
            </div>

            <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
                <div style="display: flex; justify-content: space-between; padding: 1rem 1.5rem; background: var(--bg-secondary); border-radius: var(--radius); border-left: 4px solid var(--accent);">
                    <span style="font-family: 'Montserrat', sans-serif; font-weight: 700; color: var(--text-primary);">Bank:</span>
                    <span style="color: var(--text-secondary); font-weight: 600;">${banking.bank}</span>
                </div>

                <div style="display: flex; justify-content: space-between; padding: 1rem 1.5rem; background: var(--bg-secondary); border-radius: var(--radius); border-left: 4px solid var(--accent);">
                    <span style="font-family: 'Montserrat', sans-serif; font-weight: 700; color: var(--text-primary);">Branch:</span>
                    <span style="color: var(--text-secondary); font-weight: 600;">${banking.branch}</span>
                </div>

                <div style="display: flex; justify-content: space-between; padding: 1rem 1.5rem; background: var(--bg-secondary); border-radius: var(--radius); border-left: 4px solid var(--accent);">
                    <span style="font-family: 'Montserrat', sans-serif; font-weight: 700; color: var(--text-primary);">Account Type:</span>
                    <span style="color: var(--text-secondary); font-weight: 600;">${banking.accountType}</span>
                </div>

                <div style="display: flex; justify-content: space-between; padding: 1rem 1.5rem; background: var(--accent); border-radius: var(--radius); box-shadow: var(--shadow-sm);">
                    <span style="font-family: 'Montserrat', sans-serif; font-weight: 700; color: white;">Account Number:</span>
                    <span style="color: white; font-weight: 700; font-size: 1.125rem; font-family: 'Montserrat', sans-serif;">${banking.accountNumber}</span>
                </div>

                <div style="display: flex; justify-content: space-between; padding: 1rem 1.5rem; background: var(--bg-secondary); border-radius: var(--radius); border-left: 4px solid var(--accent);">
                    <span style="font-family: 'Montserrat', sans-serif; font-weight: 700; color: var(--text-primary);">Branch Code:</span>
                    <span style="color: var(--text-secondary); font-weight: 600;">${banking.branchCode}</span>
                </div>
            </div>

            <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius); margin-bottom: 1rem; border: 2px dashed var(--accent);">
                <p style="font-family: 'Montserrat', sans-serif; font-weight: 700; color: var(--accent); margin-bottom: 0.5rem; text-align: center;">Payment Reference:</p>
                <p style="color: var(--text-primary); text-align: center; font-weight: 600;">${banking.reference}</p>
            </div>

            <div style="text-align: center; padding: 1.5rem; background: var(--bg-light); border-radius: var(--radius);">
                <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">Please send proof of payment to:</p>
                <a href="mailto:${banking.proofEmail}" style="font-family: 'Montserrat', sans-serif; font-weight: 700; color: var(--accent); text-decoration: none; font-size: 1.125rem;">${banking.proofEmail}</a>
            </div>
        `;
    }

    // Populate WhatsApp QR code
    const whatsappQR = document.getElementById('whatsappQR');
    if (whatsappQR && programInfo.whatsappQR) {
        whatsappQR.src = programInfo.whatsappQR;
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
