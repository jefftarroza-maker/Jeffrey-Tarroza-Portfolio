/**
 * Teacher Web Portfolio - Main Application Script
 * Customized for Jeffrey D. Tarroza, LPT
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Data Initialization & Storage Override Handling
    let activeData = getStoredData() || portfolioData;
    let activeTimelineTab = 'work';

    // 2. DOM Elements Selection
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const timelineContainer = document.getElementById('timelineContainer');
    const philosophyGrid = document.getElementById('philosophyPillarsGrid');
    const showcaseGrid = document.getElementById('showcaseGrid');
    const tabButtons = document.querySelectorAll('.timeline-tabs .tab-btn');
    const contactForm = document.getElementById('contactForm');
    const formSuccessAlert = document.getElementById('formSuccessAlert');

    // Modal Elements
    const openEditModalBtn = document.getElementById('openEditModalBtn');
    const closeEditModalBtn = document.getElementById('closeEditModalBtn');
    const editModalBackdrop = document.getElementById('editModalBackdrop');
    const editPortfolioForm = document.getElementById('editPortfolioForm');
    const resetModalBtn = document.getElementById('resetModalBtn');

    // 3. Render Portfolio Data
    renderAll(activeData);

    function renderAll(data) {
        renderPersonalDetails(data.personal);
        renderPhilosophy(data.philosophy);
        renderTimeline(data, activeTimelineTab);
        renderShowcase(data.showcase);
    }

    function renderPersonalDetails(personal) {
        const brand = document.getElementById('navBrand');
        if (brand) {
            brand.childNodes[0].textContent = `${personal.name} `;
        }
        document.getElementById('cardName').textContent = personal.name;
        document.getElementById('cardTitle').textContent = personal.title;
        document.getElementById('heroBadgeText').textContent = personal.title;
        document.getElementById('heroBioDescription').textContent = personal.bio;

        document.getElementById('contactEmail').textContent = personal.email;
        document.getElementById('contactLocation').textContent = personal.location;
        if (document.getElementById('contactPhone')) {
            document.getElementById('contactPhone').textContent = personal.phone;
        }

        document.getElementById('footerName').textContent = personal.name;
        document.getElementById('footerTitle').textContent = personal.title;
        document.getElementById('footerCopyName').textContent = personal.name;

        if (personal.stats && personal.stats.length >= 3) {
            document.getElementById('statYears').textContent = personal.stats[0].value;
            document.getElementById('statCert').textContent = personal.stats[1].value;
            document.getElementById('statStudents').textContent = personal.stats[2].value;
        }

        if (personal.profilePhoto) {
            const profileImg = document.getElementById('profileImage');
            if (profileImg) profileImg.src = personal.profilePhoto;
        }
    }

    function renderPhilosophy(philosophy) {
        if (document.getElementById('philosophySummary')) {
            document.getElementById('philosophySummary').textContent = philosophy.summary;
        }

        if (philosophyGrid && philosophy.pillars) {
            philosophyGrid.innerHTML = philosophy.pillars.map(pillar => `
                <article class="philosophy-card">
                    <div class="philosophy-icon">${pillar.icon}</div>
                    <h3>${pillar.title}</h3>
                    <p>${pillar.description}</p>
                </article>
            `).join('');
        }
    }

    function renderTimeline(data, tab) {
        if (!timelineContainer) return;

        if (tab === 'work') {
            timelineContainer.innerHTML = data.experience.map(item => `
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-header">
                            <div>
                                <h3 class="timeline-role">${item.role}</h3>
                                <p class="timeline-org">${item.organization} • ${item.period}</p>
                            </div>
                            <span class="timeline-badge">${item.badge}</span>
                        </div>
                        <div class="timeline-body">
                            <ul>
                                ${item.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="timeline-skills">
                            ${item.skills.map(skill => `<span class="tag">${skill}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        } else if (tab === 'education') {
            timelineContainer.innerHTML = data.education.map(item => `
                <div class="timeline-item">
                    <div class="timeline-dot" style="border-color: var(--sage);"></div>
                    <div class="timeline-content">
                        <div class="timeline-header">
                            <div>
                                <h3 class="timeline-role">${item.degree}</h3>
                                <p class="timeline-org">${item.institution} • ${item.year}</p>
                            </div>
                            <span class="timeline-badge" style="background-color: var(--sage-light); color: var(--sage);">${item.honors}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        } else if (tab === 'dev' && data.professionalDevelopment) {
            timelineContainer.innerHTML = data.professionalDevelopment.map(item => `
                <div class="timeline-item">
                    <div class="timeline-dot" style="border-color: var(--amber);"></div>
                    <div class="timeline-content">
                        <div class="timeline-header">
                            <div>
                                <h3 class="timeline-role">${item.title}</h3>
                                <p class="timeline-org">${item.provider} • ${item.date}</p>
                            </div>
                            <span class="timeline-badge" style="background-color: var(--amber-light); color: var(--amber);">PD Certificate</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    function renderShowcase(showcaseItems) {
        if (!showcaseGrid || !showcaseItems) return;
        showcaseGrid.innerHTML = showcaseItems.map(item => `
            <article class="showcase-card">
                <div>
                    <span class="showcase-grade">${item.grade}</span>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
                <div class="showcase-tags">
                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </article>
        `).join('');
    }

    // 4. Timeline Tab Switcher
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeTimelineTab = btn.getAttribute('data-tab');
            renderTimeline(activeData, activeTimelineTab);
        });
    });

    // 5. Theme Toggle Logic
    const savedTheme = localStorage.getItem('teacher_portfolio_theme') || 'light';
    setTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('teacher_portfolio_theme', theme);
        if (themeToggleBtn) {
            themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    // 6. Contact Form Logic
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formSuccessAlert.style.display = 'block';
            contactForm.reset();
            setTimeout(() => {
                formSuccessAlert.style.display = 'none';
            }, 5000);
        });
    }

    // 7. Quick Editor Modal Logic
    if (openEditModalBtn && editModalBackdrop) {
        openEditModalBtn.addEventListener('click', () => {
            document.getElementById('editName').value = activeData.personal.name;
            document.getElementById('editTitle').value = activeData.personal.title;
            document.getElementById('editBio').value = activeData.personal.bio;
            document.getElementById('editEmail').value = activeData.personal.email;
            document.getElementById('editLocation').value = activeData.personal.location;
            editModalBackdrop.classList.add('open');
        });
    }

    if (closeEditModalBtn) {
        closeEditModalBtn.addEventListener('click', () => {
            editModalBackdrop.classList.remove('open');
        });
    }

    if (editPortfolioForm) {
        editPortfolioForm.addEventListener('submit', (e) => {
            e.preventDefault();
            activeData.personal.name = document.getElementById('editName').value;
            activeData.personal.title = document.getElementById('editTitle').value;
            activeData.personal.bio = document.getElementById('editBio').value;
            activeData.personal.email = document.getElementById('editEmail').value;
            activeData.personal.location = document.getElementById('editLocation').value;

            localStorage.setItem('teacher_portfolio_custom_data', JSON.stringify(activeData));
            renderAll(activeData);
            editModalBackdrop.classList.remove('open');
        });
    }

    if (resetModalBtn) {
        resetModalBtn.addEventListener('click', () => {
            localStorage.removeItem('teacher_portfolio_custom_data');
            activeData = JSON.parse(JSON.stringify(portfolioData));
            renderAll(activeData);
            editModalBackdrop.classList.remove('open');
        });
    }

    function getStoredData() {
        try {
            const raw = localStorage.getItem('teacher_portfolio_custom_data');
            return raw ? JSON.parse(raw) : null;
        } catch (err) {
            return null;
        }
    }

    // 8. Active Link Scroll Spy
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
