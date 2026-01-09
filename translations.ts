
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
      ctaPrimary: 'Audit My Workflow',
      ctaSecondary: 'View Success Stories'
    },
    projectsPage: {
      badge: 'CASE STUDIES',
      title: 'Our AI Solutions In Action',
      desc: 'Explore how we transform complex manual operations into automated competitive advantages for regional leaders.',
      projects: [
        {
          id: 'travel',
          featured: true,
          shortName: 'AL-TAIRAN',
          image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop', 
          bgColor: 'from-blue-600/30 to-black',
          category: 'Travel & Tourism / AI Platform',
          name: 'Al-Tairan Smart Booking Engine',
          description: 'A comprehensive white-label platform for travel agencies. It features an AI-powered "Smart Assistant" that designs full itineraries, manages hotel/flight bookings, and integrates 24/7 automated customer support.',
          tech: ['Gemini AI', 'Node.js', 'React', 'Live Booking APIs'],
          url: 'https://al-tairan-travel-693041094858.us-west1.run.app/',
          metrics: [
            { label: 'Booking Speed', value: '< 2 Mins' },
            { label: 'User Retention', value: '+45%' },
            { label: 'Ops Reduction', value: '70%' },
            { label: 'API Health', value: '99.9%' }
          ]
        },
        {
          id: 'murasala',
          featured: false,
          shortName: 'MURASALA',
          image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop', 
          category: 'E-commerce / AI Email Automation',
          name: 'Murasala AI Response Engine',
          description: 'AI that drafts and sends email responses aligned with your brand voice using your team\'s previous conversations. Integrated with Gmail and Zoho, supporting authentic Arabic & English.',
          tech: ['LLM Orchestration', 'Gmail API', 'Zoho Auth'],
          metrics: [
            { label: 'Setup Time', value: '5 Mins' },
            { label: 'Response Speed', value: 'Instant' },
            { label: 'Draft Accuracy', value: '98%' },
            { label: 'Native Support', value: 'Ar/En' }
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
        { title: 'Data Sovereignty', desc: 'We prioritize local data handling and encryption standards compatible with regional regulations.' },
        { title: 'Scalable Logic', desc: 'Our solutions aren\'t "quick fixes". We build infrastructure that grows from 10 to 10,000 tasks/day.' },
        { title: 'Human-in-the-Loop', desc: 'We design systems where AI handles the drudgery while your team maintains final oversight.' }
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
      title: 'The Trigger Engineering Protocol',
      subtitle: 'How we build high-availability solutions',
      desc: 'We don\'t use templates. We use a rigorous 4-stage engineering protocol to ensure your automation never fails.',
      sections: [
        {
          id: '01',
          title: 'Operational Diagnostic',
          desc: 'We map every manual click and data movement in your company to find the "Leakage Points" where time and money are lost.',
          details: ['Process Mapping', 'ROI Calculation', 'Leakage Audit']
        },
        {
          id: '02',
          title: 'Workflow Architecture',
          desc: 'We design a technical blueprint that integrates with your existing tech stack (SAP, Oracle, Salla, HubSpot) without friction.',
          details: ['ERD Diagrams', 'API Logic', 'Security Protocol']
        },
        {
          id: '03',
          title: 'Stress-Tested Build',
          desc: 'Our bots are built to handle edge cases and errors gracefully. We test them against real-world traffic before go-live.',
          details: ['Edge-case Testing', 'Error Handling', 'Live Sync']
        },
        {
          id: '04',
          title: 'Managed Evolution',
          desc: 'Business changes, and so should your bots. We provide ongoing monitoring and iterative scaling for all deployed systems.',
          details: ['Active Monitoring', 'System Scaling', 'Feature Sprints']
        }
      ],
      footer: 'Every workflow is custom-built, code-reviewed, and stress-tested.'
    },
    aboutUs: {
      title: 'Eliminating the "Manual" Tax',
      subtitle: 'Why we exist',
      desc: 'Trigger was founded on a single premise: manual data entry is a tax on human potential. We are a Saudi agency of automation architects dedicated to returning that potential to your business.',
      mission: {
        title: 'Our Purpose',
        text: 'To convert disorganized manual operations into high-speed digital assets.'
      },
      vision: {
        title: 'Our Horizon',
        text: 'To be the standard-setter for AI operational excellence in the MENA region.'
      },
      values: [
        { title: 'Local Integration', text: 'Specialized in the nuances of the Saudi market, from Salla/Zid to localized payment gateways.' },
        { title: 'Zero Fluff', text: 'We talk ROI, not hype. If automation doesn\'t pay for itself in 3 months, we don\'t build it.' },
        { title: 'Technical Rigor', text: 'Hybrid approach combining the speed of low-code with the power of custom Python/AI.' }
      ],
      whyTitle: 'The Trigger Advantage',
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
      title: 'توقف عن إهدار أرباحك في مهام يدوية',
      desc: 'نحن نصمم تدفقات عمل بالذكاء الاصطناعي تعمل كقوة عاملة رقمية صامتة. حلولنا قابلة للتوسع، آمنة، ومتكاملة مع النظام التقني السعودي المحلي.',
      ctaPrimary: 'دقق في سير عملي',
      ctaSecondary: 'شاهد قصص النجاح'
    },
    projectsPage: {
      badge: 'دراسات الحالة',
      title: 'حلولنا في أرض الواقع',
      desc: 'اكتشف كيف نحول العمليات اليدوية المعقدة إلى مزايا تنافسية مؤتمتة لقادة السوق في المنطقة.',
      projects: [
        {
          id: 'travel',
          featured: true,
          shortName: 'الطيران للسفر',
          image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop',
          bgColor: 'from-blue-600/30 to-black',
          category: 'سياحة وسفر / منصة ذكاء اصطناعي',
          name: 'منصة الطيران للسفر الذكية',
          description: 'منصة متكاملة لوكالات السفر تعتمد على "مساعد أجنحة النيل الذكي". يتيح النظام تخطيط مسارات رحلات مخصصة بالذكاء الاصطناعي، وإدارة الحجوزات الفورية للفنادق والطيران، مع دعم فني مؤتمت على مدار الساعة.',
          tech: ['Gemini AI', 'Node.js', 'React', 'Live APIs'],
          url: 'https://al-tairan-travel-693041094858.us-west1.run.app/',
          metrics: [
            { label: 'سرعة الحجز', value: 'أقل من دقيقتين' },
            { label: 'رضا العملاء', value: '٩٥٪' },
            { label: 'كفاءة التشغيل', value: '٧٠٪+' },
            { label: 'صحة الـ API', value: '٩٩.٩٪' }
          ]
        },
        {
          id: 'murasala',
          featured: false,
          shortName: 'مُراسلة',
          image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop',
          category: 'تجارة إلكترونية / أتمتة البريد بالذكاء الاصطناعي',
          name: 'نظام مُراسلة للردود الذكية',
          description: 'نظام ذكاء اصطناعي يصيغ ويرسل ردود البريد الإلكتروني بما يتوافق مع هوية علامتك التجارية، مستفيداً من محادثات فريقك السابقة. جاهز للعمل في ٥ دقائق مع Gmail و Zoho ودعم عربي أصيل.',
          tech: ['LLM Orchestration', 'Gmail API', 'Zoho'],
          metrics: [
            { label: 'وقت الإعداد', value: '٥ دقائق' },
            { label: 'سرعة الرد', value: 'فوري' },
            { label: 'دقة المسودات', value: '٩٨٪' },
            { label: 'دعم اللغات', value: 'عربي/إنجليزي' }
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
        { title: 'سيادة البيانات', desc: 'نلتزم بأعلى معايير تشفير البيانات والتعامل معها وفقاً للأنظمة واللوائح المحلية.' },
        { title: 'منطق قابل للتوسع', desc: 'حلولنا ليست "ترقيعات مؤقتة"، بل بنية تحتية تنمو من ١٠ مهام إلى ١٠,٠٠٠ مهمة يومياً.' },
        { title: 'البشر في القيادة', desc: 'نصمم أنظمة يتولى فيها الذكاء الاصطناعي الأعباء، بينما يحتفظ فريقك بالإشراف النهائي.' }
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
      title: 'بروتوكول تريجر الهندسي',
      subtitle: 'كيف نبني حلولاً عالية التوافر؟',
      desc: 'نحن لا نستخدم قوالب جاهزة. نتبع بروتوكولاً هندسياً صارماً من ٤ مراحل لضمان عدم توقف الأتمتة أبداً.',
      sections: [
        {
          id: '٠١',
          title: 'التشخيص التشغيلي',
          desc: 'نرسم خريطة لكل نقرة وحركة بيانات في شركتك لتحديد "نقاط التسريب" حيث يضيع الوقت والمال.',
          details: ['رسم العمليات', 'حساب العائد ROI', 'تدقيق الهدر']
        },
        {
          id: '٠٢',
          title: 'هندسة التدفق',
          desc: 'نصمم مخططاً تقنياً يتكامل مع أدواتك الحالية (SAP, سلة, HubSpot) بدون أي احتكاك أو تعقيد.',
          details: ['مخططات ERD', 'منطق الـ API', 'بروتوكول الأمان']
        },
        {
          id: '٠٣',
          title: 'البناء تحت الضغط',
          desc: 'تُبنى أنظمتنا لتتعامل مع الأخطاء بذكاء. نختبر الحلول ببيانات حقيقية قبل الاعتماد النهائي.',
          details: ['اختبار الحالات النادرة', 'معالجة الأخطاء الذكية', 'مزامنة حية']
        },
        {
          id: '٠٤',
          title: 'التطور المدار',
          desc: 'العمل يتغير، لذا يجب أن تتغير الروبوتات أيضاً. نوفر مراقبة مستمرة وتوسيعاً دورياً لكل الأنظمة.',
          details: ['مراقبة نشطة', 'توسيع الأنظمة', 'تحديثات دورية']
        }
      ],
      footer: 'كل تدفق عمل يُبنى خصيصاً، يُراجع برمجياً، ويُختبر تحت الضغط.'
    },
    aboutUs: {
      title: 'إلغاء "ضريبة العمل اليدوي"',
      subtitle: 'لماذا نحن هنا؟',
      desc: 'تأسست تريجر على مبدأ واحد: إدخال البيانات يدوياً هو ضريبة على الإمكانات بشرية. نحن وكالة سعودية من مهندسي الأتمتة مكرسون لاستعادة تلك الإمكانات لشركتك.',
      mission: {
        title: 'هدفنا',
        text: 'تحويل العمليات اليدوية المشتتة إلى أصول رقمية فائقة السرعة.'
      },
      vision: {
        title: 'رؤيتنا',
        text: 'أن نكون المعيار الأول للتميز التشغيلي بالذكاء الاصطناعي في المنطقة.'
      },
      values: [
        { title: 'تكامل محلي', text: 'متخصصون في تفاصيل السوق السعودي، من سلة وزد إلى بوابات الدفع المحلية.' },
        { title: 'تركيز على النتائج', text: 'نتحدث بلغة الأرقام. إذا لم تكن الأتمتة ستغطي تكلفتها خلال ٣ أشهر، فلن نبنيها.' },
        { title: 'صرامة تقنية', text: 'نهج هجين يجمع بين سرعة الأدوات المنخفضة البرمجة وقوة الـ Python والذكاء الاصطناعي.' }
      ],
      whyTitle: 'امتياز تريجر',
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
      copyright: '© 2025 جميع الحقوق محفوظة لشركة مُراسلة .',
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
