
export const translations = {
  en: {
    dir: 'ltr',
    nav: {
      home: 'Home',
      navProjects: 'Our Work',
      howWeBuild: 'Methodology',
      aboutUs: 'The Agency',
      contact: 'Diagnose My Business',
      demo: 'Book Session'
    },
    hero: {
      title: 'Stop Losing Revenue to Manual Tasks',
      desc: 'We architect industrial-grade AI workflows that function as your silent digital workforce. Scalable, secure, and integrated with your local Saudi ecosystem.',
      ctaPrimary: 'Start Improving Your Workflow',
      ctaSecondary: 'View Success Stories'
    },
    projectsPage: {
      badge: 'CASE STUDIES',
      title: 'Our AI Solutions In Action',
      desc: 'Explore how we transform complex manual operations into automated competitive advantages for regional leaders.',
      projects: [
        {
          id: 'murasala',
          featured: true,
          shortName: 'MURASALA',
          image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop', 
          category: 'E-commerce / AI Email Automation',
          name: 'Murasala AI Response Engine',
          description: 'AI that drafts and sends email responses aligned with your brand voice using your team\'s previous conversations. Integrated with Gmail and Zoho, supporting authentic Arabic & English.',
          tech: ['LLM Orchestration', 'Gmail API', 'Zoho Auth'],
          url: 'https://morasla.vercel.app/',
          metrics: [
            { label: 'Setup Time', value: '5 Mins' },
            { label: 'Response Speed', value: 'Instant' },
            { label: 'Draft Accuracy', value: '98%' },
            { label: 'Native Support', value: 'Ar/En' }
          ]
        },
        {
          id: 'travel',
          featured: false,
          shortName: 'AL-TAIRAN',
          image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop', 
          bgColor: 'from-blue-600/30 to-black',
          category: 'Travel & Tourism / AI Platform',
          name: 'Al-Tairan Smart Booking Engine',
          description: 'A comprehensive platform for travel agencies featuring an AI-powered "Smart Assistant" that designs itineraries and manages bookings 24/7.',
          tech: ['Gemini AI', 'Node.js', 'React'],
          url: 'https://service-693041094858.us-west1.run.app/',
          metrics: [
            { label: 'Booking Speed', value: '< 2 Mins' },
            { label: 'User Retention', value: '+45%' },
            { label: 'Ops Reduction', value: '70%' },
            { label: 'API Health', value: '99.9%' }
          ]
        },
        {
          id: 'realestate',
          featured: false,
          shortName: 'RE-BOT',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', 
          category: 'Real Estate / CRM Automation',
          name: 'AI Lead Qualification Bot',
          description: 'WhatsApp-based agent that qualifies real estate leads, provides project details, and schedules site visits 24/7.',
          tech: ['GPT-4o', 'WATI', 'Make'],
          metrics: [
            { label: 'Response Time', value: 'Instant' },
            { label: 'Conversion', value: '3x' },
            { label: 'Active Leads', value: '12k+' },
            { label: 'Bot Accuracy', value: '94%' }
          ]
        }
      ]
    },
    trust: {
      title: 'Engineered for Reliability',
      subtitle: 'Why top firms trust Trigger',
      items: [
        { title: 'Control is Yours', desc: 'We design systems to serve your team, not replace them. You stay the decision maker.' },
        { title: 'Start Small, Scale Big', desc: 'We solve one problem first, then expand step-by-step without complex changes.' },
        { title: 'Data Ownership', desc: 'Your data stays in your environment. We work according to local standards from day one.' }
      ]
    },
    projects: {
      subtitle: 'What we do best',
      title: 'Real Impact, Real Results',
      footer: '30+ companies successfully automated their operations last year.',
      items: [
        {
          id: '01',
          tag: 'E-commerce / Email',
          title: 'Murasala AI Emailer',
          image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600',
          desc: 'Automated email response system that learns from your style and replies to customers instantly in Arabic and English.',
          value: 'Reduced customer support response time by 90% while maintaining brand tone.',
          tech: ['AI Agents', 'Gmail']
        },
        {
          id: '02',
          tag: 'Sales & Service',
          title: '24/7 AI Sales Agent',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600',
          desc: 'An AI that lives on WhatsApp, answers customer questions instantly, and books meetings for you while you sleep.',
          value: 'Replied to 100% of leads instantly, increasing booked meetings by 3x.',
          tech: ['GPT-4', 'WATI']
        },
        {
          id: '03',
          tag: 'Operations',
          title: 'Instant Contracts',
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600',
          desc: 'The moment a client pays, the contract is generated, signed, and filed automatically. No human intervention needed.',
          value: 'Reduced contract turnaround from 2 days to 2 minutes.',
          tech: ['Make', 'DocuSign']
        }
      ]
    },
    contact: {
      title: 'Ready for a Professional Audit?',
      desc: 'Don\'t just "contact" us. Let\'s diagnose your operational leaks. Our engineers will review your manual tasks and provide a feasibility report within 24 hours.',
      name: 'Full Name',
      email: 'Work Email',
      company: 'Company / Brand',
      message: 'Describe your current manual bottlenecks',
      submit: 'Request Diagnostic',
      success: 'Diagnostic Request Received. We will reach out shortly.'
    },
    howWeBuild: {
      title: 'How we work step-by-step',
      subtitle: 'Our Methodology',
      desc: 'We don\'t use templates. We understand your business, solve its core issues, and build a system that truly serves you.',
      sections: [
        {
          id: '01',
          title: 'Understand your work first',
          desc: 'We review your current processes to identify where time is wasted, where errors happen, and what can be removed.',
          details: ['Process Review', 'Waste Audit', 'Time Analysis']
        },
        {
          id: '02',
          title: 'Design the right solution',
          desc: 'We map out a new, simpler workflow that works with your existing tools without disrupting your team\'s style.',
          details: ['Workflow Mapping', 'Tool Integration', 'Logic Design']
        },
        {
          id: '03',
          title: 'Build and test before use',
          desc: 'We implement the solution in a test environment with real scenarios to ensure stability before final adoption.',
          details: ['Live Testing', 'Edge Cases', 'Error Handling']
        },
        {
          id: '04',
          title: 'Evolve as you grow',
          desc: 'Business changes? The system changes with you. We update and scale without starting from scratch.',
          details: ['Managed Scaling', 'Active Updates', 'Performance Tuning']
        }
      ],
      footer: 'Every custom workflow is designed, tested, and optimized for your specific needs.'
    },
    aboutUs: {
      title: 'Stop wasting team time on manual work',
      subtitle: 'Why we exist',
      desc: 'Too much of your team\'s time is wasted on data entry, manual follow-ups, and moving info between systems. We help you turn this repetitive work into automated systems so your team can focus on what matters.',
      mission: {
        title: 'What we achieve for you',
        text: 'Reduce manual tasks, eliminate errors, and increase speed with systems that fit your daily workflow.'
      },
      vision: {
        title: 'What we believe in',
        text: 'The best system makes work easier without complicating life or forcing sudden changes on your team.'
      },
      values: [
        { title: 'Stable from day one', text: 'We don\'t just set up a system and leave. We test it on real cases to ensure it runs stably from the start.' },
        { title: 'We measure by results', text: 'If a system doesn\'t save time or reduce costs, it has no value. We focus on clear, tangible outcomes.' },
        { title: 'We know the market', text: 'We understand the systems and payment gateways that matter in the local Saudi and GCC markets.' }
      ],
      whyTitle: 'Why is Trigger different?',
      points: [
        'Saudi Engineering Standards',
        'Direct n8n & Make Platinum Expertise',
        'Specialized in GCC E-commerce & CRM'
      ]
    },
    roi: {
      badge: 'PROFIT AUDIT',
      title: 'What is your "Manual Tax"?',
      desc: 'Calculate the hidden cost of human labor on repetitive digital tasks.',
      labelLeads: 'Team Members',
      labelRate: 'Manual Hours / Day',
      labelValue: 'Hourly Cost ($)',
      disclaimer: '* Conservative estimates based on GCC operational benchmarks.',
      lostMonth: 'Recoverable Hours / Month',
      lostYear: 'Monthly Operational Waste',
      ctaPrimary: 'Start My Free Audit',
      ctaSecondary: 'Download Case Studies'
    },
    faq: {
      title: 'Expert Q&A',
      items: [
        { q: "Is your AI secure for sensitive data?", a: "Absolutely. We build with security-first principles, using enterprise-grade encryption and ensuring data residency compliance where required. We don't use 'black-box' solutions." },
        { q: "Can you automate localized tools like Salla or Zid?", a: "This is our specialty. We have deep experience with the APIs of local Saudi platforms and shipping providers, ensuring seamless sync with international tools like HubSpot or Google." },
        { q: "How do you handle system errors?", a: "Every Trigger workflow includes built-in 'Auto-Heal' logic and instant notification alerts. If a sync fails, the system knows how to retry or notify our team immediately." },
        { q: "How fast is the ROI?", a: "Most of our clients see their automation investment pay for itself within 30 to 60 days through labor reallocation and error reduction." }
      ],
      ctaTitle: 'Stop the Waste Today',
      ctaDesc: 'Our diagnostic is free. The cost of doing nothing is not.',
      ctaBtn: 'Book Diagnostic'
    },
    footer: {
      title: 'Trigger — Building the Silent Workforce',
      copyright: '© 2025 All rights reserved to Trigger Automation.',
      socials: {
        linkedin: 'https://www.linkedin.com/in/trigger-sa-36a3803a3/',
        x: 'https://x.com/Trigger_ksa',
        instagram: 'https://www.instagram.com/trigger_ksa/'
      },
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookies',
      support: '24/7 Support'
    }
  },
  ar: {
    dir: 'rtl',
    nav: {
      home: 'الرئيسية',
      navProjects: 'أعمالنا',
      howWeBuild: 'منهجيتنا',
      aboutUs: 'الوكالة',
      contact: 'شخّص عملك الآن',
      demo: 'احجز جلسة'
    },
    hero: {
      title: 'خلّي الشغل يمشي لوحده، وفريقك يشتغل بذكاء',
      desc: 'نحوّل الأعمال المتكررة والمُرهِقة إلى أنظمة ذكية تعمل تلقائيًا، عشان تقلّ الأخطاء، توفّر وقت فريقك، وتزيد إنتاجيتك — بدون تغيير أدواتك الحالية.',
      ctaPrimary: 'ابدأ بتحسين شغلك',
      ctaSecondary: 'شوف أمثلة حقيقية'
    },
    projectsPage: {
      badge: 'دراسات الحالة',
      title: 'حلولنا في أرض الواقع',
      desc: 'اكتشف كيف نحول العمليات اليدوية المعقدة إلى مزايا تنافسية مؤتمتة لقادة السوق في المنطقة.',
      projects: [
        {
          id: 'murasala',
          featured: true,
          shortName: 'مُراسلة',
          image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop',
          category: 'تجارة إلكترونية / أتمتة البريد بالذكاء الاصطناعي',
          name: 'نظام مُراسلة للردود الذكية',
          description: 'نظام ذكاء اصطناعي يصيغ ويرسل ردود البريد الإلكتروني بما يتوافق مع هوية علامتك التجارية، مستفيداً من محادثات فريقك السابقة. جاهز للعمل في ٥ دقائق مع Gmail و Zoho ودعم عربي أصيل.',
          tech: ['LLM Orchestration', 'Gmail API', 'Zoho'],
          url: 'https://morasla.vercel.app/',
          metrics: [
            { label: 'وقت الإعداد', value: '٥ دقائق' },
            { label: 'سرعة الرد', value: 'فوري' },
            { label: 'دقة المسودات', value: '٩٨٪' },
            { label: 'دعم اللغات', value: 'عربي/إنجليزي' }
          ]
        },
        {
          id: 'travel',
          featured: false,
          shortName: 'الطيران للسفر',
          image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop',
          bgColor: 'from-blue-600/30 to-black',
          category: 'سياحة وسفر / منصة ذكاء اصطناعي',
          name: 'منصة الطيران للسفر الذكية',
          description: 'منصة متكاملة لوكالات السفر تعتمد على "مساعد أجنحة النيل الذكي". يتيح النظام تخطيط مسارات رحلات مخصصة بالذكاء الاصطناعي، وإدارة الحجوزات الفورية للفنادق والطيران، مع دعم فني مؤتمت على مدار الساعة.',
          tech: ['Gemini AI', 'Node.js', 'React', 'Live APIs'],
          url: 'https://service-693041094858.us-west1.run.app/',
          metrics: [
            { label: 'سرعة الحجز', value: 'أقل من دقيقتين' },
            { label: 'رضا العملاء', value: '٩٥٪' },
            { label: 'كفاءة التشغيل', value: '٧٠٪+' },
            { label: 'صحة الـ API', value: '٩٩.٩٪' }
          ]
        },
        {
          id: 'realestate',
          featured: false,
          shortName: 'عقار-بوت',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
          category: 'عقارات / أتمتة CRM',
          name: 'بوت تأهيل العملاء العقاري',
          description: 'عميل ذكي على الواتساب يقوم بتأهيل العملاء، شرح تفاصيل المشاريع، وجدولة زيارات المواقع آلياً.',
          tech: ['GPT-4o', 'WATI', 'Make'],
          metrics: [
            { label: 'وقت الرد', value: 'فوري' },
            { label: 'زيادة المبيعات', value: '٣ أضعاف' },
            { label: 'عملاء نشطين', value: '١٢ألف+' },
            { label: 'دقة الردود', value: '٩٤٪' }
          ]
        }
      ]
    },
    trust: {
      title: 'هندسة صُممت لتدوم',
      subtitle: 'لماذا تختار الشركات الكبرى "تريجر"؟',
      items: [
        { 
          title: 'السيطرة بيدك، مو النظام', 
          desc: 'نصمّم الأنظمة عشان تخدم فريقك، مو تستبدله. كل شيء واضح، قابل للتعديل، وأنت دايم صاحب القرار.' 
        },
        { 
          title: 'نبدأ صغير… ونكبر معك', 
          desc: 'نحل مشكلة وحدة أولاً، وبعدها نوّسع الحل خطوة بخطوة بدون تعقيد أو تغييرات مفاجئة في طريقة شغلك.' 
        },
        { 
          title: 'بياناتك ملكك', 
          desc: 'بياناتك ما تطلع من بيئتك، ونشتغل وفق الأنظمة المحلية بأعلى مستوى أمان من أول يوم.' 
        }
      ]
    },
    projects: {
      subtitle: 'أعمالنا باختصار',
      title: 'مشاريع حوّلناها للأفضل',
      footer: 'أكثر من ٣٠ شركة وفّرنا عليها آلاف الساعات اليدوية السنة الماضية.',
      items: [
        {
          id: '٠١',
          tag: 'متاجر / بريد إلكتروني',
          title: 'نظام مُراسلة الذكي',
          image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600',
          desc: 'رد أسرع، وحافظ على هويتك. نظام يصيغ ردود البريد الإلكتروني بدقة وسرعة لخدمة عملاء المتاجر آلياً.',
          value: 'توفير ٧٠٪ من وقت فريق الدعم وتحسين سرعة الرد لثوانٍ معدودة.',
          tech: ['AI Agents', 'Gmail']
        },
        {
          id: '٠٢',
          tag: 'مبيعات / واتساب',
          title: 'بائع ذكي 24/7',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600',
          desc: 'بنينا عميل ذكي على الواتساب يرد على الزبائن، يشرح لهم الخدمة، ويحجز المواعيد في غيابك.',
          value: 'سرعة رد فورية لكل العملاء، وزادت المواعيد المحجوزة ٣ أضعاف.',
          tech: ['GPT-4', 'WATI']
        },
        {
          id: '٠٣',
          tag: 'عمليات / عقود',
          title: 'أتمتة العقود والدفع',
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600',
          desc: 'مجرد ما يدفع العميل، النظام يولد العقد ويرسله للتوقيع ويؤرشفه. لا يحتاج موظف ولا متابعة.',
          value: 'العقد اللي كان ياخذ يومين، صار يخلص في دقيقتين وبدون تدخل بشري.',
          tech: ['Make', 'DocuSign']
        }
      ]
    },
    contact: {
      title: 'جاهز لتشخيص هندسي احترافي؟',
      desc: 'لا تكتفِ بـ "التواصل". دعنا نشخص ثغراتك التشغيلية. سيقوم مهندسونا بمراجعة مهامك اليدوية وتقديم تقرير جدوى خلال ٢٤ ساعة.',
      name: 'الاسم الكامل',
      email: 'البريد الرسمي',
      company: 'اسم الشركة / العلامة التجارية',
      message: 'صف لنا المهام اليدوية التي تعيق نموك',
      submit: 'طلب تشخيص تشغيلي',
      success: 'تم استلام طلب التشخيص. سيتواصل معك أحد مهندسينا قريباً.'
    },
    howWeBuild: {
      title: 'كيف نشتغل معك خطوة بخطوة',
      subtitle: 'وش هذا القسم؟',
      desc: 'ما نركّب حلول جاهزة. نفهم شغلك، نحل مشاكله، ونبني نظام يخدمك فعليًا.',
      sections: [
        {
          id: '٠١',
          title: 'نفهم شغلك أولاً',
          desc: 'نراجع طريقة عملك الحالية، نحدد وين يضيع الوقت، وين تصير الأخطاء، وأي خطوة ممكن تتبسط أو تتشال بالكامل.',
          details: ['مراجعة العمليات', 'تحديد الهدر', 'تحليل الوقت']
        },
        {
          id: '٠٢',
          title: 'نصمّم الحل المناسب لك',
          desc: 'بعد ما نفهم شغلك، نرسم طريقة جديدة أبسط وأسرع تشتغل مع أدواتك الحالية بدون ما نغيّر أسلوب فريقك.',
          details: ['رسم التدفقات', 'تكامل الأدوات', 'تصميم المنطق']
        },
        {
          id: '٠٣',
          title: 'نبني ونختبر قبل التطبيق',
          desc: 'نطبّق الحل بشكل تجريبي، نختبره في سيناريوهات حقيقية، ونتأكد إنه ثابت قبل ما يعتمد رسميًا في شغلك.',
          details: ['اختبار حي', 'حالات نادرة', 'معالجة الأخطاء']
        },
        {
          id: '٠٤',
          title: 'نطوّره مع نمو شغلك',
          desc: 'شغلك يتغير؟ النظام يتغير معك. نعدّل، نوسّع، ونحسّن بدون ما نعيد البناء من الصفر.',
          details: ['توسيع الأنظمة', 'تحديثات نشطة', 'تحسين الأداء']
        }
      ],
      footer: 'كل تدفق عمل يُبنى خصيصاً، يُراجع برمجياً، ويُختبر تحت الضغط.'
    },
    aboutUs: {
      title: 'أوقف هدر وقت فريقك في الشغل اليدوي',
      subtitle: 'لماذا نحن هنا؟',
      desc: 'كثير من وقت فريقك يضيع في إدخال بيانات، متابعة يدوية، ونقل معلومات بين الأنظمة. نحن نساعدك تحوّل هالشغل المتكرر إلى أنظمة تشتغل تلقائيًا وتخلّي فريقك يركّز على المهم.',
      mission: {
        title: 'وش نحقق لك',
        text: 'نقلّل الشغل اليدوي، نقل الأخطاء، ونزيد سرعة الإنجاز بأنظمة تناسب شغلك اليومي.'
      },
      vision: {
        title: 'وش نؤمن فيه',
        text: 'إن أفضل نظام هو اللي يسهّل الشغل بدون ما يعقّد حياة الفريق أو يفرض تغييرات مفاجئة.'
      },
      values: [
        { title: 'حل ثابت من أول مرة', text: 'ما نركّب نظام ويمشي وخلاص. نختبره على حالات حقيقية عشان يشتغل بثبات من أول يوم.' },
        { title: 'نقيس الشغل بالأرقام', text: 'إذا النظام ما وفّر وقت أو قلّل تكلفة فهو ما له قيمة. نركّز على نتيجة واضحة تقدر تشوفها وتحسّ فيها.' },
        { title: 'فاهمين السوق السعودي', text: 'نعرف الأنظمة، نعرف بوابات الدفع، ونشتغل بحلول تناسب واقع السوق المحلي.' }
      ],
      whyTitle: 'ليش Trigger مختلفة؟',
      points: [
        'معايير هندسية سعودية',
        'خبرة بلاتينية في n8n و Make',
        'تخصص دقيق في التجارة الإلكترونية الخليجية'
      ]
    },
    roi: {
      badge: 'تدقيق الأرباح',
      title: 'كم تبلغ "ضريبتك اليدوية"؟',
      lostMonth: 'ساعات قابلة للاستعادة / شهر',
      lostYear: 'الهدر التشغيلي الشهري',
      labelLeads: 'عدد أفراد الفريق',
      labelRate: 'ساعات العمل اليدوي / يومياً',
      labelValue: 'تكلفة الساعة ($)',
      disclaimer: '* تقديرات متحفظة بناءً على مؤشرات السوق الخليجي.',
      ctaPrimary: 'ابدأ تدقيقي المجاني',
      ctaSecondary: 'تحميل دراسات الحالة'
    },
    faq: {
      title: 'أسئلة الخبراء',
      items: [
        { q: "هل حلولكم آمنة للبيانات الحساسة؟", a: "بالتأكيد. نبني بـمبدأ 'الأمان أولاً'، باستخدام تشفير مؤسسي وضمان توافق البيانات مع القوانين المحلية. لا نستخدم حلولاً غامضة." },
        { q: "هل تدعمون أدوات محلية مثل سلة وزد؟", a: "هذا هو تخصصنا. لدينا خبرة عميقة مع APIs المنصات السعودية وشركات الشحن لضمان مزامنة مثالية مع الأدوات العالمية." },
        { q: "كيف تتعاملون مع أخطاء النظام؟", a: "كل حل من تريجر يحتوي على منطق 'الإصلاح الذاتي' وتنبيهات فورية. في حال فشل أي مزامنة، يعرف النظام كيف يحاول مرة أخرى أو ينبه فريقنا فوراً." },
        { q: "ما سرعة عائد الاستثمار؟", a: "معظم عملائنا يستردون قيمة استثمارهم في الأتمتة خلال ٣٠ إلى ٦٠ يوماً من خلال توفير ساعات العمل وتقليل الأخطاء." }
      ],
      ctaTitle: 'أوقف الهدر اليوم',
      ctaDesc: 'التشخيص الذي نقدمه مجاني. تكلفة عدم فعل شيء ليست كذلك.',
      ctaBtn: 'احجز جلسة تشخيص'
    },
    footer: {
      title: 'تريجر — بناء القوة العاملة الصامتة',
      copyright: '© 2025 جميع الحقوق محفوظة لشركة تريجر .',
      socials: {
        linkedin: 'https://www.linkedin.com/in/trigger-sa-36a3803a3/',
        x: 'https://x.com/Trigger_ksa',
        instagram: 'https://www.instagram.com/trigger_ksa/'
      },
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      cookies: 'الكوكيز',
      support: 'دعم فني ٢٤/٧'
    }
  }
};
