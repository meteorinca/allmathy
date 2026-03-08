/**
 * Math Topics Navigator — App Logic
 */
(function () {
    'use strict';

    // ── DOM refs ──
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarNav = document.getElementById('sidebarNav');
    const hamburger = document.getElementById('hamburger');
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const hero = document.getElementById('hero');
    const gradeContent = document.getElementById('gradeContent');
    const gradeTitle = document.getElementById('gradeTitle');
    const topicsGrid = document.getElementById('topicsGrid');
    const topicCountBadge = document.getElementById('topicCountBadge');
    const searchResults = document.getElementById('searchResults');
    const searchTitle = document.getElementById('searchTitle');
    const searchGrid = document.getElementById('searchGrid');
    const searchCountBadge = document.getElementById('searchCountBadge');
    const breadcrumb = document.getElementById('breadcrumb');
    const scrollTopBtn = document.getElementById('scrollTop');
    const statGrades = document.getElementById('statGrades');
    const statTopics = document.getElementById('statTopics');

    // ── State ──
    let activeGradeId = null;
    let searchTimeout = null;

    // ── Init ──
    function init() {
        populateStats();
        buildSidebar();
        attachEvents();

        // Check URL hash on load
        if (window.location.hash) {
            const id = window.location.hash.slice(1);
            const grade = MATH_DATA.find(g => g.id === id);
            if (grade) selectGrade(grade);
        }
    }

    // ── Stats ──
    function populateStats() {
        statGrades.textContent = MATH_DATA.length;
        const total = MATH_DATA.reduce((sum, g) => sum + g.topics.length, 0);
        statTopics.textContent = total;

        // Animate numbers
        animateNumber(statGrades, MATH_DATA.length, 600);
        animateNumber(statTopics, total, 800);
    }

    function animateNumber(el, target, duration) {
        const start = performance.now();
        const update = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    }

    // ── Sidebar Categories ──
    function buildSidebar() {
        // Group grades into categories
        const categories = [
            {
                label: 'Elementary',
                filter: g => ['early-math-review', 'kindergarten-math', '1st-grade-math', '2nd-grade-math',
                    '3rd-grade-math', '4th-grade-math', '5th-grade-math'].includes(g.id)
            },
            {
                label: 'Middle School',
                filter: g => ['6th-grade-math', '7th-grade-math', '8th-grade-math'].includes(g.id)
            },
            {
                label: 'Foundations',
                filter: g => ['arithmetic', 'basic-geometry-measurement', 'pre-algebra', 'algebra-basics'].includes(g.id)
            },
            {
                label: 'High School',
                filter: g => ['algebra-1', 'hs-geometry', 'algebra-2', 'trigonometry', 'precalculus',
                    'hs-statistics', 'statistics-probability'].includes(g.id)
            },
            {
                label: 'Integrated Math',
                filter: g => ['integrated-math-1', 'integrated-math-2', 'integrated-math-3'].includes(g.id)
            },
            {
                label: 'College & AP',
                filter: g => ['college-algebra', 'ap-calculus-ab', 'ap-calculus-bc', 'ap-statistics',
                    'differential-calculus', 'integral-calculus', 'calculus-1', 'calculus-2',
                    'multivariable-calculus', 'differential-equations', 'linear-algebra'].includes(g.id)
            },
            {
                label: 'Illustrative Math',
                filter: g => g.id.includes('illustrative')
            }
        ];

        let html = '';
        categories.forEach(cat => {
            const grades = MATH_DATA.filter(cat.filter);
            if (grades.length === 0) return;
            html += `<div class="nav-category"><span class="nav-category-label">${cat.label}</span>`;
            grades.forEach(g => {
                html += `
          <div class="nav-item" data-id="${g.id}" title="${g.name}">
            <span class="nav-item-icon">${g.icon}</span>
            <span class="nav-item-text">${g.name}</span>
            <span class="nav-item-count">${g.topics.length}</span>
          </div>`;
            });
            html += '</div>';
        });

        sidebarNav.innerHTML = html;
    }

    // ── Events ──
    function attachEvents() {
        // Sidebar nav clicks
        sidebarNav.addEventListener('click', (e) => {
            const item = e.target.closest('.nav-item');
            if (!item) return;
            const id = item.dataset.id;
            const grade = MATH_DATA.find(g => g.id === id);
            if (grade) {
                selectGrade(grade);
                closeSidebar();
            }
        });

        // Hamburger
        hamburger.addEventListener('click', openSidebar);
        sidebarClose.addEventListener('click', closeSidebar);
        sidebarOverlay.addEventListener('click', closeSidebar);

        // Breadcrumb home
        breadcrumb.addEventListener('click', (e) => {
            if (e.target.classList.contains('breadcrumb-home')) {
                showHero();
            }
        });

        // Search
        searchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            const q = searchInput.value.trim();
            searchClear.classList.toggle('visible', q.length > 0);
            searchTimeout = setTimeout(() => {
                if (q.length >= 2) {
                    performSearch(q);
                } else if (q.length === 0) {
                    if (activeGradeId) {
                        const grade = MATH_DATA.find(g => g.id === activeGradeId);
                        if (grade) selectGrade(grade);
                    } else {
                        showHero();
                    }
                }
            }, 200);
        });

        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchClear.classList.remove('visible');
            if (activeGradeId) {
                const grade = MATH_DATA.find(g => g.id === activeGradeId);
                if (grade) selectGrade(grade);
            } else {
                showHero();
            }
        });

        // Scroll to top
        const mainContent = document.getElementById('mainContent');
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
        });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Keyboard shortcut: Ctrl+K to focus search
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                searchInput.focus();
            }
            if (e.key === 'Escape') {
                searchInput.blur();
                closeSidebar();
            }
        });
    }

    // ── Select Grade ──
    function selectGrade(grade) {
        activeGradeId = grade.id;
        window.location.hash = grade.id;

        // Update sidebar active state
        document.querySelectorAll('.nav-item').forEach(el => {
            el.classList.toggle('active', el.dataset.id === grade.id);
        });

        // Update breadcrumb
        breadcrumb.innerHTML = `
      <span class="breadcrumb-home">All Grades</span>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-current">${grade.name}</span>
    `;

        // Hide other sections
        hero.style.display = 'none';
        searchResults.style.display = 'none';
        gradeContent.style.display = 'block';

        // Title
        gradeTitle.innerHTML = `<span class="grade-icon">${grade.icon}</span> ${grade.name}`;
        topicCountBadge.textContent = `${grade.topics.length} topic${grade.topics.length !== 1 ? 's' : ''}`;

        // Build topic cards
        renderTopics(topicsGrid, grade.topics, grade.color);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ── Show Hero ──
    function showHero() {
        activeGradeId = null;
        window.location.hash = '';

        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

        breadcrumb.innerHTML = '<span class="breadcrumb-home">All Grades</span>';

        hero.style.display = 'block';
        gradeContent.style.display = 'none';
        searchResults.style.display = 'none';
    }

    // ── Search ──
    function performSearch(query) {
        const q = query.toLowerCase();
        const results = [];

        MATH_DATA.forEach(grade => {
            grade.topics.forEach((topic, idx) => {
                if (topic.name.toLowerCase().includes(q) || grade.name.toLowerCase().includes(q)) {
                    results.push({
                        ...topic,
                        gradeName: grade.name,
                        gradeIcon: grade.icon,
                        gradeColor: grade.color,
                        index: idx
                    });
                }
            });
        });

        hero.style.display = 'none';
        gradeContent.style.display = 'none';
        searchResults.style.display = 'block';

        searchTitle.textContent = `Search results for "${query}"`;
        searchCountBadge.textContent = `${results.length} result${results.length !== 1 ? 's' : ''}`;

        breadcrumb.innerHTML = `
      <span class="breadcrumb-home">All Grades</span>
      <span class="breadcrumb-sep">›</span>
      <span class="breadcrumb-current">Search: "${query}"</span>
    `;

        if (results.length === 0) {
            searchGrid.innerHTML = `
        <div class="no-results" style="grid-column: 1 / -1;">
          <div class="no-results-icon">🔍</div>
          <div class="no-results-text">No topics found for "${query}"</div>
          <div class="no-results-hint">Try a different search term</div>
        </div>`;
            return;
        }

        searchGrid.innerHTML = results.map((r, i) => {
            const hasLink = r.link && r.link.length > 0;
            const delay = Math.min(i * 30, 600);
            return `
        <div class="topic-card ${hasLink ? 'has-link' : ''}"
             style="--card-accent: ${r.gradeColor}; animation-delay: ${delay}ms;"
             ${hasLink ? `onclick="window.open('${r.link}', '_blank')"` : ''}>
          <span class="topic-number">${r.index + 1}</span>
          <span class="topic-name">${highlightMatch(r.name, query)}</span>
          <span class="topic-grade-label">${r.gradeIcon} ${r.gradeName}</span>
          ${hasLink ? linkIconSVG() : ''}
        </div>`;
        }).join('');
    }

    function highlightMatch(text, query) {
        const idx = text.toLowerCase().indexOf(query.toLowerCase());
        if (idx === -1) return text;
        const before = text.slice(0, idx);
        const match = text.slice(idx, idx + query.length);
        const after = text.slice(idx + query.length);
        return `${before}<mark style="background:var(--accent-glow);color:var(--accent);border-radius:3px;padding:0 2px;">${match}</mark>${after}`;
    }

    // ── Render topic cards ──
    function renderTopics(container, topics, accentColor) {
        container.innerHTML = topics.map((topic, i) => {
            const hasLink = topic.link && topic.link.length > 0;
            const delay = Math.min(i * 30, 500);
            return `
        <div class="topic-card ${hasLink ? 'has-link' : ''}"
             style="--card-accent: ${accentColor}; animation-delay: ${delay}ms;"
             ${hasLink ? `onclick="window.open('${topic.link}', '_blank')"` : ''}>
          <span class="topic-number">${i + 1}</span>
          <span class="topic-name">${topic.name}</span>
          ${hasLink ? linkIconSVG() : ''}
        </div>`;
        }).join('');
    }

    function linkIconSVG() {
        return `<svg class="topic-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>`;
    }

    // ── Mobile sidebar ──
    function openSidebar() {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ── Go ──
    init();
})();
