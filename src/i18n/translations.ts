export interface ProjectItem {
  title: string
  tag: string
  problem: string
  solution: string
  approach: string
  result: string
  tech: string[]
  status: string
  image?: string
}

export interface TranslationShape {
  meta: { title: string }
  nav: {
    links: { why: string; services: string; projects: string; about: string; process: string; faq: string }
    cta: string
  }
  loading: { line1: string; line2: string }
  hero: {
    eyebrow: string
    titleLines: string[]
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    scrollHint: string
  }
  why: {
    eyebrow: string
    title: string
    subtitle: string
    cards: { icon: string; title: string; desc: string }[]
  }
  services: {
    eyebrow: string
    title: string
    subtitle: string
    items: { icon: string; title: string; desc: string; features: string[] }[]
  }
  projects: {
    eyebrow: string
    title: string
    subtitle: string
    labels: { problem: string; solution: string; approach: string; result: string; stack: string }
    items: ProjectItem[]
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    philosophyTitle: string
    philosophy: { label: string; value: string }[]
  }
  process: {
    eyebrow: string
    title: string
    subtitle: string
    steps: { title: string; desc: string }[]
  }
  stats: {
    eyebrow: string
    title: string
    items: { value: string; label: string }[]
  }
  faq: {
    eyebrow: string
    title: string
    items: { q: string; a: string }[]
  }
  contactCta: { eyebrow: string; title: string; subtitle: string; cta: string }
  contactForm: {
    title: string
    subtitle: string
    fields: { name: string; email: string; budget: string; budgetPlaceholder: string; message: string }
    submit: string
    submitting: string
    success: string
    error: string
    orDivider: string
    quickContact: { whatsapp: string; telegram: string; email: string }
  }
  footer: {
    tagline: string
    nav: string
    connect: string
    rights: string
  }
}

export const translations: Record<'ar' | 'en', TranslationShape> = {
  ar: {
    meta: { title: 'AL-MO — حلول برمجية مبنية على فهم مشكلتك أولاً' },
    nav: {
      links: {
        why: 'لماذا أنا',
        services: 'الخدمات',
        projects: 'المشاريع',
        about: 'عني',
        process: 'طريقة العمل',
        faq: 'أسئلة شائعة',
      },
      cta: 'ابدأ مشروعك',
    },
    loading: { line1: 'AL-MO', line2: 'جارٍ ترتيب الأفكار…' },
    hero: {
      eyebrow: 'مطوّر برمجيات مستقل',
      titleLines: ['قبل أن أكتب سطر كود واحد،', 'أفهم مشكلتك أولاً.'],
      subtitle:
        'أصمم وأبني مواقع ومتاجر إلكترونية وأنظمة ويب مخصصة لأصحاب الأعمال الصغيرة والمتوسطة — بتفكير هادئ، وتنفيذ دقيق، ونتيجة تستحق ثقتك.',
      ctaPrimary: 'استعرض المشاريع',
      ctaSecondary: 'ابدأ مشروعًا جديدًا',
      scrollHint: 'انزل للأسفل',
    },
    why: {
      eyebrow: 'لماذا تعمل معي',
      title: 'أسئلة تدور في ذهنك، وإجاباتها هنا',
      subtitle: 'لا أحاول إقناعك بشيء. فقط أجيب على ما تفكر فيه فعلًا قبل أن تتواصل معي.',
      cards: [
        {
          icon: 'ShieldCheck',
          title: 'الجودة قبل السرعة',
          desc: 'كل ميزة تُختبر قبل أن تصل إليك. لا أسلّم كودًا لم أثق فيه بنفسي.',
        },
        {
          icon: 'MessageCircle',
          title: 'تواصل واضح من أول يوم',
          desc: 'تعرف أين وصل مشروعك في كل مرحلة، بدون رسائل غامضة أو انتظار طويل.',
        },
        {
          icon: 'Gauge',
          title: 'الأداء ليس تفصيلًا',
          desc: 'موقع بطيء يفقدك عملاء. أبني كل شيء ليكون سريعًا من أول تحميل.',
        },
        {
          icon: 'PenTool',
          title: 'تصميم يخدم هدفك',
          desc: 'كل عنصر في الواجهة له سبب لوجوده، وإلا لن أضيفه.',
        },
      ],
    },
    services: {
      eyebrow: 'الخدمات',
      title: 'ماذا أقدّم بالضبط',
      subtitle: 'حلول ويب كاملة، من الفكرة إلى التشغيل الفعلي.',
      items: [
        {
          icon: 'Globe',
          title: 'مواقع ومتاجر إلكترونية',
          desc: 'مواقع تعريفية ومتاجر بيع مصممة لتحويل الزائر إلى عميل فعلي.',
          features: ['تصميم مخصص بالكامل', 'ربط بوسائل الدفع والتواصل', 'لوحة تحكم لإدارة المحتوى'],
        },
        {
          icon: 'Database',
          title: 'أنظمة إدارة ولوحات تحكم',
          desc: 'أنظمة داخلية تنظم عملك — عملاء، فواتير، مخزون — بدل ملفات إكسل المتناثرة.',
          features: ['قواعد بيانات منظمة وآمنة', 'صلاحيات دقيقة لكل مستخدم', 'تقارير وإحصائيات لحظية'],
        },
        {
          icon: 'AppWindow',
          title: 'تطبيقات ويب تقدمية (PWA)',
          desc: 'أنظمة تُثبّت على الجهاز وتعمل كتطبيق حقيقي، مباشرة من المتصفح دون متاجر تطبيقات.',
          features: ['تثبيت على الموبايل وسطح المكتب', 'عمل سلس حتى مع ضعف الاتصال', 'تحديثات فورية بدون إصدارات'],
        },
        {
          icon: 'Sparkles',
          title: 'منصات وتجارب ويب تفاعلية',
          desc: 'منتجات ويب أعقد من موقع تعريفي — حسابات مستخدمين، محتوى ديناميكي، تفاعل حقيقي.',
          features: ['بنية قابلة للتوسع مستقبلًا', 'تجربة استخدام مدروسة خطوة بخطوة', 'أداء سريع رغم التعقيد'],
        },
      ],
    },
    projects: {
      eyebrow: 'أعمال منفذة',
      title: 'مشاريع حقيقية، بمشاكل حقيقية',
      subtitle: 'كل مشروع هنا حل مشكلة فعلية لصاحبه، وليس مجرد تصميم على الورق.',
      labels: { problem: 'المشكلة', solution: 'الحل', approach: 'طريقة التفكير', result: 'النتيجة', stack: 'التقنيات' },
      items: [
        {
          title: 'ATHR — متجر عطور فاخرة',
          tag: 'تجارة إلكترونية',
          problem: 'صاحب علامة عطور فاخرة يحتاج متجرًا يعكس فخامة المنتج، مع تتبّع فعلي للطلبات دون تعقيد تقني.',
          solution:
            'متجر إلكتروني كامل يربط تجربة تصفح أنيقة بنظام طلبات مباشر يصل تنبيهه فورًا عبر واتساب لصاحب المتجر.',
          approach:
            'ركّزت أولًا على رحلة العميل من اختيار المنتج حتى تأكيد الطلب، ثم بنيت خلفية بيانات تدعم هذه الرحلة دون أن تُبطئها.',
          result: 'صاحب المتجر يستقبل كل طلب لحظيًا، ويتابع موقع العميل ومراحل الشحن من مكان واحد.',
          tech: ['JavaScript', 'Supabase', 'Vercel', 'WhatsApp API'],
          status: 'قيد التشغيل الفعلي',
          image: '/projects/athr.webp',
        },
        {
          title: 'Antika Gallery — متجر أزياء حريمي',
          tag: 'تجارة إلكترونية',
          problem: 'صاحبة متجر أزياء حريمي وهوم وير تبيع عبر السوشيال ميديا فقط، وتفقد طلبات كثيرة بسبب فوضى الرسائل والتعليقات.',
          solution:
            'متجر إلكتروني منظم بالكامل — تصنيفات واضحة، قائمة مفضلة، وطلب مباشر يصل فورًا عبر واتساب، مع دردشة حية لأي استفسار سريع.',
          approach:
            'صممت الواجهة حول طريقة تسوق العميلة الفعلية: تصفح سريع، حفظ المنتج المفضّل، ثم قرار شراء بضغطة واحدة، دون حساب معقد أو خطوات زائدة.',
          result: 'تجربة تسوق منظمة تحوّل متابعة صفحة سوشيال ميديا إلى عميلة تعرف بالضبط ماذا طلبت ومتى.',
          tech: ['JavaScript', 'Supabase', 'Vercel', 'WhatsApp API'],
          status: 'قيد التشغيل الفعلي',
          image: '/projects/antika-gallery.webp',
        },
        {
          title: 'قصتك على طريقتك — منصة قصص تفاعلية',
          tag: 'منصة ويب',
          problem: 'قراء ومحبّو الكتابة يبحثون عن تجربة قراءة تتفاعل مع قراراتهم لا تُملي عليهم نهاية واحدة، وكتّاب يحتاجون أداة لبناء قصص متفرعة دون تعقيد برمجي.',
          solution:
            'منصة ويب يقرأ فيها المستخدم قصة يتخذ فيها قرارات تغيّر مسارها ونهايتها، ويكتب فيها المؤلفون قصصهم المتفرعة وينشرونها لمجتمع من القراء.',
          approach:
            'بنيت النظام حول فكرة أن كل اختيار له وزن حقيقي، فصممت بنية بيانات تدعم تفرّع القصة لعدة نهايات دون أن تتحول لصيانة كود معقدة كل مرة يُضاف فيها فرع جديد.',
          result: 'منصة تجمع القراءة والكتابة التفاعلية في مكان واحد، بواجهة هادئة لا تُشتت القارئ عن القصة نفسها.',
          tech: ['React', 'Supabase', 'Tailwind CSS'],
          status: 'قيد التشغيل الفعلي',
          image: '/projects/qissatak.webp',
        },
        {
          title: 'جملة أبو علي — نظام إدارة تجاري',
          tag: 'نظام إدارة PWA',
          problem: 'تاجر جملة يدير عملاءه وفواتيره وديونه على الورق أو إكسل متناثر، ويكتشف تأخر تحصيل دين أو نفاد صنف بعد فوات الأوان.',
          solution:
            'نظام إدارة يعمل كتطبيق PWA يُثبّت على الجهاز مباشرة، يتابع منه صاحب العمل عملاءه وفواتيره ومبيعاته اليومية وديون عملائه من شاشة واحدة.',
          approach:
            'بدأت من سؤال بسيط: أي معلومة يحتاجها التاجر أول ما يفتح شاشته صباحًا؟ فبنيت لوحة رئيسية تُظهر هذه الأرقام مباشرة، ثم فصّلت الشاشات الأعمق خلفها.',
          result: 'صاحب العمل يعرف حالة تجارته — مبيعات، ديون، منتجات شارفت على النفاد — في نظرة واحدة، بدل البحث في دفاتر متفرقة.',
          tech: ['React', 'PWA', 'Supabase'],
          status: 'قيد التشغيل الفعلي',
          image: '/projects/jomla-abu-ali.webp',
        },
        {
          title: 'نظام إدارة مخزون قطع غيار',
          tag: 'نظام إدارة PWA',
          problem: 'محل قطع غيار بمخازن متعددة يحتاج معرفة مكان كل صنف وكميته لحظيًا، دون الاعتماد على ذاكرة الموظفين أو جرد يدوي متكرر.',
          solution:
            'نظام PWA يدير عدة مخازن وتصنيفات وأصناف من مكان واحد، مع فواتير بيع وطلبات شراء وتتبّع لحركة كل صنف والعملاء الأكثر تعاملًا.',
          approach:
            'ركّزت على أن يعكس النظام واقع المحل الفعلي: مخازن متعددة، أصناف مرتبطة بتصنيفات، وحركة يومية يجب أن تكون قابلة للرجوع إليها لاحقًا عند أي خلاف.',
          result: 'صاحب المحل يتابع الأصناف الأكثر طلبًا والعملاء الأهم وحركة كل مخزن دون فتح دفتر واحد.',
          tech: ['React', 'PWA', 'Supabase'],
          status: 'قيد التشغيل الفعلي',
          image: '/projects/spare-parts-warehouse.webp',
        },
      ],
    },
    about: {
      eyebrow: 'عني',
      title: 'كيف بدأت، ولماذا ما زلت مستمرًا',
      paragraphs: [
        'بدأت التعلم من الصفر، بدون خلفية أكاديمية في البرمجة، فقط فضول لفهم كيف تعمل الأشياء من الداخل.',
        'مع الوقت، أدركت أن الكود الجيد ليس الهدف، بل وسيلة لحل مشكلة حقيقية لشخص حقيقي.',
        'ما يميزني ليس أنني أعرف كل تقنية جديدة، بل أنني أفكر في مشروعك قبل أن أفتح المحرر، وأبنيه وكأنه مشروعي أنا.',
      ],
      philosophyTitle: 'فلسفة العمل',
      philosophy: [
        { label: 'الأولوية', value: 'فهم المشكلة قبل كتابة أي كود' },
        { label: 'الجودة', value: 'اختبار كل ميزة قبل التسليم' },
        { label: 'البساطة', value: 'لا تعقيد بلا سبب واضح' },
      ],
    },
    process: {
      eyebrow: 'طريقة العمل',
      title: 'من أول مكالمة حتى التسليم',
      subtitle: 'كل خطوة هنا مصممة لتقليل قلقك، لا لزيادته.',
      steps: [
        { title: 'جلسة فهم', desc: 'نتحدث عن مشكلتك الفعلية، لا عن التقنيات. أفهم عملك قبل أن أقترح أي حل.' },
        { title: 'خطة واضحة', desc: 'تحصل على مخطط مكتوب لما سيُبنى، بالمدة والتكلفة، قبل أي التزام.' },
        { title: 'تنفيذ متابَع', desc: 'تطوير على مراحل، مع تحديثات منتظمة تراها بنفسك أولًا بأول.' },
        { title: 'اختبار وتدقيق', desc: 'كل ميزة تُختبر على أكثر من جهاز وحالة استخدام قبل اعتمادها.' },
        { title: 'تسليم ودعم', desc: 'تسليم كامل مع شرح كيفية الاستخدام، ودعم بعد التسليم مباشرة.' },
      ],
    },
    stats: {
      eyebrow: 'بالأرقام',
      title: 'نظرة سريعة',
      items: [
        { value: '5+', label: 'مشاريع ويب فعلية قيد التشغيل' },
        { value: '5', label: 'تقنيات أساسية أعمل بها يوميًا' },
        { value: '100%', label: 'من المشاريع بتصميم مخصص بالكامل' },
      ],
    },
    faq: {
      eyebrow: 'أسئلة شائعة',
      title: 'أسئلة يطرحها عملاء قبل التواصل',
      items: [
        {
          q: 'كم تستغرق مدة تنفيذ المشروع؟',
          a: 'تختلف حسب حجم المشروع. بعد جلسة الفهم الأولى، تحصل على مدة زمنية واضحة قبل البدء الفعلي.',
        },
        {
          q: 'هل أحتاج معرفة تقنية للتعامل معك؟',
          a: 'لا إطلاقًا. أشرح كل شيء بلغة بسيطة، وأتابع معك خطوة بخطوة دون مصطلحات معقدة.',
        },
        {
          q: 'ماذا لو احتجت تعديلات بعد التسليم؟',
          a: 'كل مشروع يشمل فترة دعم بعد التسليم لمعالجة أي تعديل أو استفسار.',
        },
        {
          q: 'هل تعمل على مشاريع صغيرة الحجم؟',
          a: 'نعم. الحجم ليس المعيار، المهم أن يكون هناك مشكلة حقيقية أستطيع حلها.',
        },
      ],
    },
    contactCta: {
      eyebrow: 'لنبدأ',
      title: 'عندك فكرة مشروع؟ لنتحدث عنها',
      subtitle: 'لا التزام في أول مكالمة، فقط فهم واضح لما تحتاجه فعلًا.',
      cta: 'تواصل الآن',
    },
    contactForm: {
      title: 'أرسل تفاصيل مشروعك',
      subtitle: 'املأ البيانات وهيتفتحلك واتساب برسالتك جاهزة، تضغط إرسال وخلاص.',
      fields: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        budget: 'الميزانية التقريبية',
        budgetPlaceholder: 'مثال: 5000–10000 جنيه',
        message: 'تفاصيل المشروع',
      },
      submit: 'إرسال عبر واتساب',
      submitting: 'جارٍ التجهيز…',
      success: 'فتحنالك واتساب برسالتك جاهزة — اضغط إرسال هناك وهتوصلني فورًا.',
      error: 'حدث خطأ ما، جرّب تاني أو تواصل مباشرة من الأزرار تحت.',
      orDivider: 'أو تواصل مباشرة',
      quickContact: { whatsapp: 'واتساب', telegram: 'تليجرام', email: 'إيميل' },
    },
    footer: {
      tagline: 'حلول برمجية تبدأ من فهم مشكلتك، لا من التقنية.',
      nav: 'روابط سريعة',
      connect: 'تواصل',
      rights: 'جميع الحقوق محفوظة',
    },
  },
  en: {
    meta: { title: 'AL-MO — Software solutions that start with your problem' },
    nav: {
      links: {
        why: 'Why Me',
        services: 'Services',
        projects: 'Projects',
        about: 'About',
        process: 'Process',
        faq: 'FAQ',
      },
      cta: 'Start a Project',
    },
    loading: { line1: 'AL-MO', line2: 'Organizing the thinking…' },
    hero: {
      eyebrow: 'Independent Software Developer',
      titleLines: ['Before I write a single line of code,', 'I understand your problem first.'],
      subtitle:
        'I design and build websites, online stores, and custom web systems for small and mid-sized businesses — calm thinking, precise execution, and a result worth your trust.',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Start a New Project',
      scrollHint: 'Scroll down',
    },
    why: {
      eyebrow: 'Why Work With Me',
      title: 'Questions on your mind, answered here',
      subtitle: "I'm not trying to convince you of anything — just answering what you're already asking yourself.",
      cards: [
        {
          icon: 'ShieldCheck',
          title: 'Quality over speed',
          desc: "Every feature is tested before it reaches you. I don't ship code I don't trust myself.",
        },
        {
          icon: 'MessageCircle',
          title: 'Clear communication from day one',
          desc: 'You know exactly where your project stands at every stage — no vague updates, no long silences.',
        },
        {
          icon: 'Gauge',
          title: 'Performance is not an afterthought',
          desc: 'A slow site loses you customers. Everything is built to feel fast from the first load.',
        },
        {
          icon: 'PenTool',
          title: 'Design that serves a purpose',
          desc: "Every interface element earns its place, or it doesn't make it in.",
        },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'What I actually deliver',
      subtitle: 'Complete web solutions, from idea to real-world operation.',
      items: [
        {
          icon: 'Globe',
          title: 'Websites & Online Stores',
          desc: 'Business sites and stores designed to turn a visitor into an actual customer.',
          features: ['Fully custom design', 'Payment & messaging integrations', 'Content management dashboard'],
        },
        {
          icon: 'Database',
          title: 'Management Systems & Dashboards',
          desc: 'Internal systems that organize your business — customers, invoices, stock — instead of scattered spreadsheets.',
          features: ['Structured, secure databases', 'Fine-grained user permissions', 'Live reports & analytics'],
        },
        {
          icon: 'AppWindow',
          title: 'Progressive Web Apps (PWA)',
          desc: 'Systems that install on the device and feel like a real app, straight from the browser, no app store needed.',
          features: ['Installs on mobile & desktop', 'Smooth even on weak connections', 'Instant updates, no releases'],
        },
        {
          icon: 'Sparkles',
          title: 'Interactive Web Platforms',
          desc: 'Web products beyond a business site — user accounts, dynamic content, real interaction.',
          features: ['Architecture built to scale', 'Deliberate, step-by-step UX', 'Fast performance despite complexity'],
        },
      ],
    },
    projects: {
      eyebrow: 'Selected Work',
      title: 'Real projects, real problems',
      subtitle: 'Every project here solved an actual problem for its owner — not just a design on paper.',
      labels: { problem: 'Problem', solution: 'Solution', approach: 'Approach', result: 'Result', stack: 'Stack' },
      items: [
        {
          title: 'ATHR — Luxury Perfume Store',
          tag: 'E-commerce',
          problem: 'A luxury perfume brand needed a store that reflects the product\u2019s quality, with real order tracking and no technical overhead.',
          solution:
            'A complete online store pairing an elegant browsing experience with a direct order system that instantly notifies the owner via WhatsApp.',
          approach:
            'I focused first on the customer journey from product choice to order confirmation, then built a data layer that supports it without slowing it down.',
          result: 'The owner receives every order instantly and tracks customer location and shipping stages from one place.',
          tech: ['JavaScript', 'Supabase', 'Vercel', 'WhatsApp API'],
          status: 'Live in production',
          image: '/projects/athr.webp',
        },
        {
          title: 'Antika Gallery — Women\u2019s Fashion Store',
          tag: 'E-commerce',
          problem: 'A women\u2019s fashion and homeware store sold only through social media, losing orders in a flood of comments and DMs.',
          solution:
            'A fully organized online store — clear categories, a wishlist, and direct WhatsApp ordering, with live chat for quick questions.',
          approach:
            'I designed the interface around how she actually shops: quick browsing, saving a favorite, then a one-tap order — no complex account, no extra steps.',
          result: 'A structured shopping experience that turns a social media follower into a customer who knows exactly what she ordered and when.',
          tech: ['JavaScript', 'Supabase', 'Vercel', 'WhatsApp API'],
          status: 'Live in production',
          image: '/projects/antika-gallery.webp',
        },
        {
          title: 'Your Story Your Way — Interactive Fiction Platform',
          tag: 'Web Platform',
          problem: 'Readers wanted a reading experience that reacts to their choices instead of a single fixed ending, and writers needed a tool to build branching stories without writing code.',
          solution:
            'A web platform where readers make decisions that change a story\u2019s path and ending, and authors write and publish their own branching stories for a community of readers.',
          approach:
            'I built the system around the idea that every choice carries real weight, designing a data structure that supports branching into multiple endings without turning into a maintenance nightmare every time a new branch is added.',
          result: 'A platform that brings interactive reading and writing together in one place, with a calm interface that keeps the focus on the story itself.',
          tech: ['React', 'Supabase', 'Tailwind CSS'],
          status: 'Live in production',
          image: '/projects/qissatak.webp',
        },
        {
          title: 'Jomla Abu Ali — Business Management System',
          tag: 'PWA Management System',
          problem: 'A wholesale trader managed customers, invoices, and debts on paper or scattered spreadsheets, discovering a late payment or an out-of-stock item too late.',
          solution:
            'A PWA management system installed directly on the device, giving the owner a single screen to track customers, invoices, daily sales, and outstanding debts.',
          approach:
            'I started from one question: what does a trader need to see the moment he opens his screen in the morning? I built the home dashboard around that, then layered the deeper screens behind it.',
          result: 'The owner sees his business at a glance — sales, debts, low-stock items — instead of digging through separate notebooks.',
          tech: ['React', 'PWA', 'Supabase'],
          status: 'Live in production',
          image: '/projects/jomla-abu-ali.webp',
        },
        {
          title: 'Auto Parts Warehouse System',
          tag: 'PWA Management System',
          problem: 'A multi-warehouse auto parts store needed to know the location and quantity of every item in real time, instead of relying on staff memory or repeated manual counts.',
          solution:
            'A PWA that manages multiple warehouses, categories, and items from one place, with sales invoices, purchase orders, and full tracking of every item\u2019s movement and top customers.',
          approach:
            'I focused on mirroring the store\u2019s real structure — multiple warehouses, items tied to categories, and daily movement that stays traceable for whenever a dispute comes up.',
          result: 'The owner tracks best-selling items, top customers, and warehouse activity without opening a single notebook.',
          tech: ['React', 'PWA', 'Supabase'],
          status: 'Live in production',
          image: '/projects/spare-parts-warehouse.webp',
        },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'How I started, and why I kept going',
      paragraphs: [
        'I started learning from zero, with no academic background in programming — just curiosity about how things work underneath.',
        'Over time I realized good code isn\u2019t the goal, it\u2019s a means to solve a real problem for a real person.',
        'What sets me apart isn\u2019t knowing every new framework — it\u2019s that I think through your project before opening the editor, and build it as if it were my own.',
      ],
      philosophyTitle: 'Working Philosophy',
      philosophy: [
        { label: 'Priority', value: 'Understand the problem before writing any code' },
        { label: 'Quality', value: 'Every feature tested before delivery' },
        { label: 'Simplicity', value: 'No complexity without a clear reason' },
      ],
    },
    process: {
      eyebrow: 'How I Work',
      title: 'From the first call to delivery',
      subtitle: 'Every step here is designed to lower your anxiety, not raise it.',
      steps: [
        { title: 'Discovery session', desc: 'We talk about your actual problem, not technology. I understand your business before proposing any solution.' },
        { title: 'Clear plan', desc: 'You get a written outline of what will be built, with timeline and cost, before any commitment.' },
        { title: 'Tracked execution', desc: 'Development happens in stages, with regular updates you see as they happen.' },
        { title: 'Testing & review', desc: 'Every feature is tested across devices and use cases before it\u2019s approved.' },
        { title: 'Delivery & support', desc: 'Full handover with usage guidance, and support immediately after delivery.' },
      ],
    },
    stats: {
      eyebrow: 'By the Numbers',
      title: 'A quick look',
      items: [
        { value: '5+', label: 'Live web projects' },
        { value: '5', label: 'Core technologies used daily' },
        { value: '100%', label: 'Fully custom-designed projects' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions clients ask before reaching out',
      items: [
        {
          q: 'How long does a project take?',
          a: 'It depends on scope. After the discovery session, you get a clear timeline before any actual work begins.',
        },
        {
          q: 'Do I need technical knowledge to work with you?',
          a: 'Not at all. I explain everything in plain language and walk with you step by step, no jargon.',
        },
        {
          q: 'What if I need changes after delivery?',
          a: 'Every project includes a post-delivery support period for fixes and questions.',
        },
        {
          q: 'Do you take on small projects?',
          a: 'Yes. Size isn\u2019t the criteria — what matters is a real problem I can actually solve.',
        },
      ],
    },
    contactCta: {
      eyebrow: "Let's Start",
      title: 'Got a project idea? Let\u2019s talk about it',
      subtitle: 'No commitment on the first call — just a clear understanding of what you actually need.',
      cta: 'Get in Touch',
    },
    contactForm: {
      title: 'Send your project details',
      subtitle: "Fill this in and WhatsApp opens with your message ready — just hit send.",
      fields: {
        name: 'Name',
        email: 'Email',
        budget: 'Approximate budget',
        budgetPlaceholder: 'e.g. $300–$1000',
        message: 'Project details',
      },
      submit: 'Send via WhatsApp',
      submitting: 'Preparing…',
      success: "WhatsApp opened with your message ready — hit send there and I'll get it instantly.",
      error: 'Something went wrong, try again or use one of the direct options below.',
      orDivider: 'Or reach out directly',
      quickContact: { whatsapp: 'WhatsApp', telegram: 'Telegram', email: 'Email' },
    },
    footer: {
      tagline: 'Software solutions that start with your problem, not the technology.',
      nav: 'Quick Links',
      connect: 'Connect',
      rights: 'All rights reserved',
    },
  },
}
