/**
 * Teacher Web Portfolio - Main Application Script
 * Customized for Jeffrey D. Tarroza, LPT
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Data Initialization
    let activeData = portfolioData;
    let activeTimelineTab = 'work';

    // 2. DOM Elements Selection
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const timelineContainer = document.getElementById('timelineContainer');
    const philosophyGrid = document.getElementById('philosophyPillarsGrid');
    const showcaseGrid = document.getElementById('showcaseGrid');
    const tabButtons = document.querySelectorAll('.timeline-tabs .tab-btn');
    const contactForm = document.getElementById('contactForm');
    const formSuccessAlert = document.getElementById('formSuccessAlert');
    const formErrorAlert = document.getElementById('formErrorAlert');
    const submitBtn = document.getElementById('submitBtn');

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

    // 6. Working Contact Form Submission (FormSubmit Backend Integration)
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (formErrorAlert) formErrorAlert.style.display = 'none';
            if (formSuccessAlert) formSuccessAlert.style.display = 'none';

            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '⏳ Sending message...';

            const formData = new FormData(contactForm);

            try {
                const response = await fetch('https://formsubmit.co/ajax/jeffreytarroza.educator@gmail.com', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    if (formSuccessAlert) formSuccessAlert.style.display = 'block';
                    contactForm.reset();
                } else {
                    // Fallback to standard form submit if AJAX is blocked
                    contactForm.submit();
                }
            } catch (err) {
                // If network error, attempt direct submit
                try {
                    contactForm.submit();
                } catch (fallbackErr) {
                    if (formErrorAlert) formErrorAlert.style.display = 'block';
                }
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        });
    }

    // 7. Active Link Scroll Spy
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
