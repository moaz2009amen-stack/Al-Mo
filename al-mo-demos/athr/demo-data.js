// ===== ATHR DEMO DATA =====
// No real backend here — this is a self-contained demo for portfolio visitors.
// Products live in localStorage (per-visitor, per-browser) and reset anytime
// via the "إعادة ضبط البيانات" button in the demo admin panel.

const ATHR_DEMO_SEED = {
  whatsapp: '201000000000', // demo number only — not a real store
  products: [
    {
      id: 1,
      name: 'عود الليل',
      name_en: 'Oud Al-Layl',
      price: 850,
      stock: 12,
      description: 'مزيج شرقي دافئ من العود والعنبر، يفتح بلمسة زعفران ويستقر على قاعدة خشبية غنية.',
      image: '',
      badge: 'الأكثر مبيعاً',
      visible: true,
    },
    {
      id: 2,
      name: 'ياسمين الفجر',
      name_en: 'Yasmine Al-Fajr',
      price: 690,
      stock: 5,
      description: 'رائحة زهرية نقية تجمع الياسمين والمسك الأبيض، مثالية للإطلالة الصباحية.',
      image: '',
      badge: 'جديد',
      visible: true,
    },
    {
      id: 3,
      name: 'عنبر الملوك',
      name_en: 'Amber Malik',
      price: 1200,
      stock: 0,
      description: 'عطر فاخر بقوام كثيف من العنبر والفانيليا، لمحبي الحضور القوي.',
      image: '',
      badge: '',
      visible: true,
    },
    {
      id: 4,
      name: 'ورد دمشقي',
      name_en: 'Damask Rose',
      price: 760,
      stock: 20,
      description: 'قلب من الورد الدمشقي الأصيل ممزوج بلمسة توابل خفيفة.',
      image: '',
      badge: '',
      visible: true,
    },
  ],
}

const ATHR_DEMO_DB = {
  key: 'athr_demo_products_v1',

  read() {
    try {
      const raw = localStorage.getItem(this.key)
      if (raw) return JSON.parse(raw)
    } catch (e) {}
    const seed = JSON.parse(JSON.stringify(ATHR_DEMO_SEED.products))
    this.write(seed)
    return seed
  },

  write(products) {
    localStorage.setItem(this.key, JSON.stringify(products))
  },

  reset() {
    localStorage.removeItem(this.key)
    return this.read()
  },
}
