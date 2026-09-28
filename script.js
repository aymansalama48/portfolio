// Ayman Salama Helbawy Portfolio - Vanilla JavaScript & Multi-Language Support

// Project Modal Data with Translations
const projectDataTrans = {
    en: {
        skillloop: {
            title: 'Skill-Loop',
            subtitle: 'Peer-to-Peer Skill-Sharing Platform (Graduation Project, Team of 4)',
            status: 'Completed',
            date: 'Aug 2026 - Sep 2026',
            github: 'https://github.com/aymansalama48/Skill-Loop-Backend',
            description: 'Graduation project of my CodePlus backend internship, built in a team of 4 (I was a core contributor). A peer-to-peer skill-sharing platform with a virtual-credit economy where users teach and learn using credits.<br><br><strong>Architecture:</strong> Clean Architecture (Domain, Application, Infrastructure, API), DDD, CQRS with a MediatR pipeline (logging, performance, authorization, validation, caching, transaction)',
            features: [
                'Virtual-credit wallet with atomic deductions using optimistic concurrency (RowVersion)',
                'Live-session booking with capacity/duplicate guards, a status lifecycle, and automated credit refunds',
                'Instructor payouts on session completion via domain events',
                'Outbox Pattern with Hangfire for reliable event processing',
                'Redis Cache-Aside with event-driven invalidation',
                'Real-time 1-to-1 chat with SignalR (read receipts)',
                'JWT + Google OAuth, OTP email verification, permission-based RBAC, staff invitations',
                'Unit tests with xUnit and Moq'
            ],
            tech: ['.NET 10', 'C# 13', 'EF Core 10', 'SQL Server', 'Redis', 'Hangfire', 'SignalR', 'FluentValidation', 'MailKit', 'Serilog', 'xUnit', 'Moq']
        },
        clinicos: {
            title: 'ClinicOS',
            subtitle: 'Clinic Management & Appointment API',
            status: 'Completed',
            date: 'Jul 2026 - Sep 2026',
            github: 'https://github.com/aymansalama48/ClinicOS',
            description: 'A single-tenant clinic management API built with Clean Architecture, CQRS and DDD.',
            features: [
                'Multi-strategy authentication (email/password, OTP, Google OAuth) with JWT and refresh tokens',
                'Role- and permission-based authorization enforced in the MediatR pipeline',
                'Staff management (doctors, receptionists) with invitation-based onboarding',
                'Dual-path patient registration (self-registration via OTP/Google, or reception-assisted)',
                'Specializations and doctor schedules with cached queries and automatic invalidation',
                'Hangfire background jobs and Outbox Pattern for emails/notifications',
                'Dockerized with Docker Compose'
            ],
            tech: ['.NET 10', 'ASP.NET Core', 'EF Core 10', 'SQL Server', 'MediatR', 'FluentValidation', 'Hangfire', 'MailKit', 'Serilog', 'Scalar', 'Docker']
        },
        commerceos: {
            title: 'CommerceOs',
            subtitle: 'Multi-Tenant E-Commerce Platform',
            status: 'Completed',
            date: 'Jan 2026 - May 2026',
            github: 'https://github.com/aymansalama48/CommerceOs',
            description: 'A full-featured e-commerce platform built with multi-tenant architecture. Features a sophisticated order lifecycle management system and a modern React storefront with dynamic pricing capabilities.',
            features: [
                'Eliminated cross-tenant data leaks across 35+ tables using EF Core Global Query Filters',
                'Engineered a 10-state order lifecycle with RBAC-gated transitions, supported by dual JWT sessions across 7 roles and silent token refresh',
                'Delivered a React storefront with dynamic pricing, coupon logic, and real-time shipping calculation',
                'Comprehensive logging and monitoring with Serilog for production observability'
            ],
            tech: ['ASP.NET Core', 'EF Core', 'SQL Server', 'ASP.NET Core Identity', 'JWT', 'React 19', 'TypeScript', 'Serilog']
        }
    },
    ar: {
        skillloop: {
            title: 'Skill-Loop',
            subtitle: 'منصة تبادل المهارات من نظير إلى نظير (مشروع تخرج، فريق من 4)',
            status: 'مكتمل',
            date: 'أغسطس 2026 - سبتمبر 2026',
            github: 'https://github.com/aymansalama48/Skill-Loop-Backend',
            description: 'مشروع تخرج لتدريبي كـ Backend Developer في CodePlus، تم بناؤه ضمن فريق من 4 أفراد (كنت مساهمًا أساسيًا). منصة تبادل مهارات من نظير إلى نظير تعتمد على اقتصاد الرصيد الافتراضي حيث يمكن للمستخدمين التعليم والتعلم باستخدام الأرصدة.<br><br><strong>البنية الهندسية (Architecture):</strong> Clean Architecture (Domain, Application, Infrastructure, API), DDD, CQRS مع MediatR pipeline (تسجيل، أداء، صلاحيات، تحقق، تخزين مؤقت، عمليات مالية).',
            features: [
                'محفظة رصيد افتراضية مع خصم ذري باستخدام التزامن التفاؤلي (RowVersion)',
                'حجز جلسات مباشرة مع حماية السعة/التكرار، دورة حياة للحالة، واسترداد تلقائي للأرصدة',
                'دفع المستحقات للمدربين عند إكمال الجلسة عبر أحداث النطاق (Domain Events)',
                'نمط Outbox مع Hangfire لمعالجة الأحداث بشكل موثوق',
                'استراتيجية Redis Cache-Aside مع إبطال التخزين المؤقت المبني على الأحداث',
                'محادثة فورية 1 لـ 1 مع SignalR (إيصالات القراءة)',
                'توثيق JWT + Google OAuth، تفعيل البريد بكلمة مرور لمرة واحدة (OTP)، صلاحيات مبنية على الأدوار (RBAC)، ودعوات للموظفين',
                'اختبارات الوحدة (Unit Tests) باستخدام xUnit و Moq'
            ],
            tech: ['.NET 10', 'C# 13', 'EF Core 10', 'SQL Server', 'Redis', 'Hangfire', 'SignalR', 'FluentValidation', 'MailKit', 'Serilog', 'xUnit', 'Moq']
        },
        clinicos: {
            title: 'ClinicOS',
            subtitle: 'واجهة برمجة تطبيقات إدارة العيادات والمواعيد',
            status: 'مكتمل',
            date: 'يوليو 2026 - سبتمبر 2026',
            github: 'https://github.com/aymansalama48/ClinicOS',
            description: 'واجهة برمجة تطبيقات لإدارة العيادات تم بناؤها للمستأجر الفردي (Single-Tenant) باستخدام Clean Architecture، CQRS، و DDD.',
            features: [
                'استراتيجيات توثيق متعددة (بريد/كلمة مرور، OTP، Google OAuth) مع JWT و Refresh Tokens',
                'صلاحيات مبنية على الأدوار يتم تطبيقها عبر الـ MediatR pipeline',
                'إدارة الموظفين (أطباء وموظفي استقبال) مع إمكانية دعوة المستخدمين الجدد',
                'نظام تسجيل مرضى مزدوج (تسجيل ذاتي عبر OTP/Google، أو تسجيل عبر موظف الاستقبال)',
                'تخصصات طبية وجداول للأطباء مع استعلامات مخزنة مؤقتًا (Cached Queries) وإبطال تلقائي',
                'مهام خلفية عبر Hangfire ونمط Outbox لرسائل البريد/الإشعارات',
                'دعم تشغيل بيئة العمل عبر حاويات Docker و Docker Compose'
            ],
            tech: ['.NET 10', 'ASP.NET Core', 'EF Core 10', 'SQL Server', 'MediatR', 'FluentValidation', 'Hangfire', 'MailKit', 'Serilog', 'Scalar', 'Docker']
        },
        commerceos: {
            title: 'CommerceOs',
            subtitle: 'منصة التجارة الإلكترونية متعددة المستأجرين',
            status: 'مكتمل',
            date: 'يناير 2026 - مايو 2026',
            github: 'https://github.com/aymansalama48/CommerceOs',
            description: 'منصة تجارة إلكترونية متكاملة مبنية بهندسة معمارية متعددة المستأجرين. وتتميز بنظام إدارة دورة حياة الطلبات بدقة ومتجر تفاعلي React يدعم التسعير الديناميكي.',
            features: [
                'عزل كامل لبيانات المستأجرين ومنع التسريب في أكثر من 35 جدولاً باستخدام فلاتر الاستعلام العالمية (Global Query Filters) في EF Core',
                'تصميم دورة حياة للطلبات مكونة من 10 حالات مع انتقال محمي بالصلاحيات وجلسات توثيق JWT ثنائية عبر 7 أدوار وتحديث تلقائي للتوثيق',
                'إنشاء متجر واجهة مستخدم React مع تسعير ديناميكي، ومنطق كوبونات الخصم، وحساب تكاليف الشحن الفوري',
                'تسجيل ومراقبة كاملة للأخطاء والأداء باستخدام أداة Serilog للمتابعة المباشرة في خوادم الإنتاج'
            ],
            tech: ['ASP.NET Core', 'EF Core', 'SQL Server', 'ASP.NET Core Identity', 'JWT', 'React 19', 'TypeScript', 'Serilog']
        }
    }
};

// Site Content Translations
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_experience: "Experience",
        nav_skills: "Skills",
        nav_education: "Education",
        nav_contact: "Contact",
        badge_available: "Available for opportunities",
        hero_greeting: "Hi, I'm",
        hero_name: "Ayman Salama Helbawy",
        hero_subtitle: "Junior .NET Backend Developer | ASP.NET Core | Web APIs | EF Core | SQL Server",
        hero_description: "Building robust, scalable backend systems with clean architecture and modern design patterns. Passionate about secure API development and multi-tenant solutions.",
        btn_download_cv: "Download CV",
        btn_contact_me: "Contact Me",
        scroll_down: "Scroll Down",
        about_tag: "About Me",
        about_title: "Professional Summary",
        about_heading: "Junior .NET Backend Developer with a passion for clean, scalable architecture.",
        about_text: "Junior .NET Backend Developer proficient in ASP.NET Core, Clean Architecture, CQRS, EF Core, and SQL Server. Built three backend systems (multi-tenant e-commerce, clinic booking, peer-to-peer credit platform) with secure authentication, RBAC, and data-integrity practices, including a team project delivered in a team of 4.",
        stats_projects: "Backend Projects",
        stats_team: "Graduation Team Size",
        stats_tables: "Tables Designed",
        info_name: "<strong>Name:</strong> Ayman Salama Helbawy",
        info_role: "<strong>Role:</strong> Junior .NET Backend Developer",
        info_location: "<strong>Location:</strong> Cairo, Egypt",
        info_email: "<strong>Email:</strong> Ayman.Backend@Gmail.com",
        info_phone: "<strong>Phone:</strong> +20 150 143 5003",
        projects_tag: "Portfolio",
        projects_title: "Featured Projects",
        project_skillloop_title: "Skill-Loop",
        project_skillloop_subtitle: "Peer-to-Peer Skill-Sharing Platform (Graduation Project, Team of 4)",
        project_skillloop_desc: "Virtual-credit wallet with atomic deductions, live-session booking with automated refunds, Outbox Pattern with Hangfire, Redis Cache-Aside, and real-time chat.",
        project_skillloop_date: "Aug 2026 - Sep 2026",
        project_clinicos_title: "ClinicOS",
        project_clinicos_subtitle: "Clinic Management & Appointment API",
        project_clinicos_desc: "A clinic management and appointment booking API with secure authentication, role-based access control, and robust data-integrity practices.",
        project_clinicos_date: "Jul 2026 - Sep 2026",
        project_commerceos_title: "CommerceOs",
        project_commerceos_subtitle: "Multi-Tenant E-Commerce Platform",
        project_commerceos_desc: "Full-featured e-commerce platform with multi-tenant data isolation, 10-state order lifecycle, and a React storefront with dynamic pricing.",
        project_commerceos_date: "Jan 2026 - May 2026",
        btn_github: "View on GitHub",
        btn_details: "Details",
        exp_tag: "Career",
        exp_title: "Work Experience",
        exp_role_1: "Backend Development Intern",
        exp_company_1: "CodePlus",
        exp_date_1: "Aug 2026 - Sep 2026 | Cairo, Egypt",
        exp_desc_1_li1: "Completed an 8-session Advanced .NET Backend program (CQRS/MediatR, caching, Hangfire, Docker, CI/CD) and delivered Skill-Loop as its graduation project.",
        skills_tag: "Expertise",
        skills_title: "Technical Skills",
        skill_title_backend: "Backend",
        skill_title_architecture: "Architecture & Patterns",
        skill_title_database: "Database",
        skill_title_testing: "Testing & Quality",
        skill_title_devops: "DevOps & Tools",
        skill_title_frontend: "Frontend",
        edu_tag: "Academic",
        edu_title: "Education",
        edu_degree_1: ".NET Web Development Diploma",
        edu_school_1: "IT Legend",
        edu_date_1: "Aug 2024 - Dec 2025 | Cairo, Egypt",
        edu_coursework_1: "<strong>Coursework:</strong> OOP, Advanced C#, Data Structures & Algorithms, SQL Server, ASP.NET Core",
        edu_degree_2: "Bachelor's Degree in Management Sciences",
        edu_school_2: "Higher Institute for Computer and Administrative Information Systems",
        edu_date_2: "Oct 2020 - May 2024 | Cairo, Egypt",
        edu_grade_2: "<strong>Grade:</strong> Very Good",
        languages_tag: "Communication",
        languages_title: "Languages",
        lang_ar: "Arabic",
        lang_ar_level: "Native",
        lang_en: "English",
        lang_en_level: "Working Proficiency",
        contact_tag: "Get in Touch",
        contact_title: "Contact Me",
        contact_heading: "Let's work together",
        contact_text: "I'm open to new opportunities, collaborations, and interesting projects. Feel free to reach out through any of the channels below.",
        contact_label_email: "Email",
        contact_label_phone: "Phone / WhatsApp / Telegram",
        contact_label_location: "Location",
        contact_value_location: "Cairo, Egypt",
        footer_tagline: "Building robust backend systems with clean architecture.",
        footer_rights: "Ayman Salama Helbawy. All rights reserved.",
        btn_close: "Close"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من أنا",
        nav_projects: "المشاريع",
        nav_experience: "الخبرات",
        nav_skills: "المهارات",
        nav_education: "التعليم",
        nav_contact: "اتصل بي",
        badge_available: "متاح لفرص العمل الجديدة",
        hero_greeting: "مرحباً، أنا",
        hero_name: "أيمن سلامة الهلباوي",
        hero_subtitle: "مطوّر دوت نت خلفي مبتدئ | ASP.NET Core | Web APIs | EF Core | SQL Server",
        hero_description: "بناء أنظمة خلفية قوية وقابلة للتوسع باستخدام بنية برمجية نظيفة (Clean Architecture) وأنماط تصميم حديثة. شغوف بتطوير واجهات برمجة تطبيقات آمنة وحلول متعددة المستأجرين (Multi-tenant).",
        btn_download_cv: "تحميل السيرة الذاتية",
        btn_contact_me: "تواصل معي",
        scroll_down: "انزل لأسفل",
        about_tag: "من أنا",
        about_title: "الملخص المهني",
        about_heading: "مطور دوت نت خلفي مبتدئ مع شغف بالهندسة النظيفة والقابلة للتوسع.",
        about_text: "مطور دوت نت خلفي مبتدئ متمكن من ASP.NET Core و Clean Architecture و CQRS و EF Core و SQL Server. قام ببناء ثلاثة أنظمة خلفية (تجارة إلكترونية متعددة المستأجرين، حجز عيادات، منصة ائتمان من نظير إلى نظير) مع توثيق آمن وتحكم بالوصول وممارسات سلامة البيانات، بما في ذلك مشروع فريق تم تسليمه ضمن فريق من 4 أفراد.",
        stats_projects: "مشاريع خلفية",
        stats_team: "حجم فريق التخرج",
        stats_tables: "جداول مصممة",
        info_name: "<strong>الاسم:</strong> أيمن سلامة الهلباوي",
        info_role: "<strong>الوظيفة:</strong> مطور دوت نت خلفي مبتدئ",
        info_location: "<strong>الموقع:</strong> القاهرة، مصر",
        info_email: "<strong>البريد الإلكتروني:</strong> Ayman.Backend@Gmail.com",
        info_phone: "<strong>الهاتف:</strong> +20 150 143 5003",
        projects_tag: "معرض الأعمال",
        projects_title: "المشاريع المميزة",
        status_completed: "مكتمل",
        project_skillloop_title: "Skill-Loop",
        project_skillloop_subtitle: "منصة تبادل المهارات من نظير إلى نظير (مشروع تخرج، فريق من 4)",
        project_skillloop_desc: "محفظة رصيد افتراضية مع خصم ذري، حجز جلسات مباشرة مع استرداد تلقائي، نمط Outbox مع Hangfire، Redis Cache-Aside، ومحادثة فورية.",
        project_skillloop_date: "أغسطس 2026 - سبتمبر 2026",
        project_clinicos_title: "ClinicOS",
        project_clinicos_subtitle: "واجهة برمجة تطبيقات إدارة العيادات والمواعيد",
        project_clinicos_desc: "واجهة برمجة تطبيقات لإدارة العيادات وحجز المواعيد مع توثيق آمن وتحكم بالوصول المبني على الأدوار وممارسات قوية لسلامة البيانات.",
        project_clinicos_date: "يوليو 2026 - سبتمبر 2026",
        project_commerceos_title: "CommerceOs",
        project_commerceos_subtitle: "منصة التجارة الإلكترونية متعددة المستأجرين",
        project_commerceos_desc: "منصة تجارة إلكترونية متكاملة مبنية بهندسة معمارية متعددة المستأجرين. وتتميز بنظام إدارة دورة حياة الطلبات بدقة ومتجر تفاعلي React يدعم التسعير الديناميكي.",
        project_commerceos_date: "يناير 2026 - مايو 2026",
        btn_github: "عرض على GitHub",
        btn_details: "التفاصيل",
        exp_tag: "المسار المهني",
        exp_title: "الخبرة المهنية",
        exp_role_1: "متدرب تطوير خلفي (Backend Development Intern)",
        exp_company_1: "CodePlus",
        exp_date_1: "أغسطس 2026 - سبتمبر 2026 | القاهرة، مصر",
        exp_desc_1_li1: "أكملت برنامج .NET Backend المتقدم المكوّن من 8 جلسات (CQRS/MediatR، التخزين المؤقت، Hangfire، Docker، CI/CD) وسلّمت مشروع Skill-Loop كمشروع تخرج.",
        skills_tag: "الخبرات والمهارات",
        skills_title: "المهارات التقنية",
        skill_title_backend: "تطوير الواجهات الخلفية (Backend)",
        skill_title_architecture: "الهندسة المعمارية والأنماط",
        skill_title_database: "قواعد البيانات (Database)",
        skill_title_testing: "الاختبار والجودة",
        skill_title_devops: "الـ DevOps والأدوات",
        skill_title_frontend: "الواجهات الأمامية (Frontend)",
        edu_tag: "التعليم",
        edu_title: "المؤهلات الدراسية",
        edu_degree_1: "دبلومة تطوير الويب باستخدام تقنيات .NET",
        edu_school_1: "IT Legend",
        edu_date_1: "أغسطس 2024 - ديسمبر 2025 | القاهرة، مصر",
        edu_coursework_1: "<strong>المقررات الدراسية:</strong> OOP، السي شارب المتقدم، هياكل البيانات والخوارزميات، SQL Server، و ASP.NET Core",
        edu_degree_2: "درجة البكالوريوس في العلوم الإدارية",
        edu_school_2: "المعهد العالي لعلوم الحاسب ونظم المعلومات الإدارية",
        edu_date_2: "أكتوبر 2020 - مايو 2024 | القاهرة، مصر",
        edu_grade_2: "<strong>التقدير:</strong> جيد جداً",
        languages_tag: "التواصل",
        languages_title: "اللغات",
        lang_ar: "العربية",
        lang_ar_level: "اللغة الأم",
        lang_en: "الإنجليزية",
        lang_en_level: "مستوى عملي ممتاز",
        contact_tag: "تواصل معي",
        contact_title: "اتصل بي",
        contact_heading: "لنعمل معاً",
        contact_text: "أنا منفتح على الفرص الجديدة، التعاون، والمشاريع البرمجية المميزة. لا تتردد في التواصل معي عبر أي من القنوات المتاحة أدناه.",
        contact_label_email: "البريد الإلكتروني",
        contact_label_phone: "الهاتف / واتساب / تليجرام",
        contact_label_location: "الموقع",
        contact_value_location: "القاهرة، مصر",
        footer_tagline: "بناء أنظمة خلفية قوية وتطبيقات قابلة للتوسع باستخدام بنية نظيفة.",
        footer_rights: "أيمن سلامة الهلباوي. جميع الحقوق محفوظة.",
        btn_close: "إغلاق"
    }
};

// Global Current Language
let currentLang = localStorage.getItem('lang') || 'en';

// Set language function
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Set document attributes for layout direction
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update language toggle button text
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? 'AR' : 'EN';
        langToggle.setAttribute('aria-label', lang === 'en' ? 'Switch to Arabic' : 'Switch to English');
    }
    
    // Translate elements with [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if translation has HTML content (like strong tags)
            if (translations[lang][key].includes('<strong') || translations[lang][key].includes('<li')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Modal functions in global scope for inline onclick handlers
function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const data = projectDataTrans[currentLang][projectId];
    
    if (!data) return;
    
    // Status color mapping helper
    const statusClass = 'completed';
    const statusText = currentLang === 'ar' ? 'مكتمل' : 'Completed';
    
    modalBody.innerHTML = `
        <h2 class="modal-title" id="modalTitle">${data.title}</h2>
        <p class="modal-subtitle">${data.subtitle}</p>
        <div class="modal-meta">
            <span class="project-status ${statusClass}">${statusText}</span>
            <span class="project-date">${data.date}</span>
        </div>
        <p class="modal-description">${data.description}</p>
        <div class="modal-features">
            <h4>${currentLang === 'ar' ? 'الميزات الرئيسية' : 'Key Features'}</h4>
            <ul>
                ${data.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
        <div class="modal-tech">
            <h4>${currentLang === 'ar' ? 'بيئة العمل' : 'Tech Stack'}</h4>
            <div class="project-tech">
                ${data.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>
        </div>
        <div class="modal-actions">
            <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                <i class="fab fa-github"></i> ${currentLang === 'ar' ? 'عرض على GitHub' : 'View on GitHub'}
            </a>
            <button class="btn btn-secondary" onclick="closeModal()">${currentLang === 'ar' ? 'إغلاق' : 'Close'}</button>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
    }
    document.body.style.overflow = '';
}

// Expose to window object explicitly
window.openModal = openModal;
window.closeModal = closeModal;

document.addEventListener('DOMContentLoaded', function() {
    // Apply saved language on load
    setLanguage(currentLang);

    // Bind language toggle action
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const nextLang = currentLang === 'en' ? 'ar' : 'en';
            setLanguage(nextLang);
        });
    }

    // Current Year
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                if (themeIcon) {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if (themeIcon) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                }
            }
        });
    }

    // Mobile Navigation
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Scroll to top button
    const scrollTop = document.getElementById('scrollTop');
    window.addEventListener('scroll', function() {
        if (scrollTop) {
            if (window.scrollY > 500) {
                scrollTop.classList.add('visible');
            } else {
                scrollTop.classList.remove('visible');
            }
        }
    });
    
    if (scrollTop) {
        scrollTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.section');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Add revealed class styling via JS for elements in view on load
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('revealed');
            }
        });
    }, 100);

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});