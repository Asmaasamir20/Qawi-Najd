const projectCategories = {
  'Exterior design': {
    id: 'Exterior design',
    title: 'تصميم خارجي',
    description: 'تصاميم خارجية مميزة للفلل والقصور',
  },
  'Interior design': {
    id: 'Interior design',
    title: 'تصميم داخلي',
    description: 'تصاميم داخلية عصرية وفاخرة',
  },
};

const projects = [
  // Exterior Design Projects
  {
    id: 'facade-mousa',
    title: 'واجهة موسى',
    src: 'واجهه موسي_Page2_Image1.webp',
    type: 'Exterior design',
    category: projectCategories['Exterior design'],
  },
  {
    id: 'estraha-1',
    title: 'استراحة',
    src: 'استراحة_Page4_Image1.webp',
    type: 'Exterior design',
    category: projectCategories['Exterior design'],
  },
  {
    id: 'estraha-2',
    title: 'استراحة',
    src: 'استراحة_Page3_Image1.webp',
    type: 'Exterior design',
    category: projectCategories['Exterior design'],
  },
  {
    id: 'harbi',
    title: 'تصميم حربي',
    src: 'حربي_Page1_Image1.webp',
    type: 'Exterior design',
    category: projectCategories['Exterior design'],
  },
  {
    id: 'saad-alharthy',
    title: 'تصميم سعد الحارثي',
    src: 'سعد الحارثي_Page1_Image1.webp',
    type: 'Exterior design',
    category: projectCategories['Exterior design'],
  },
  // إضافة جميع صور WhatsApp للتصميم الخارجي
  ...[
    'WhatsApp Image 2025-05-12 at 5.55.44 PM.webp',
    'WhatsApp Image 2025-05-12 at 5.55.42 PM.webp',
    'WhatsApp Image 2025-05-12 at 5.55.41 PM (1).webp',
    'WhatsApp Image 2025-05-12 at 5.55.41 PM.webp',
    'WhatsApp Image 2025-05-12 at 5.55.40 PM (1).webp',
    'WhatsApp Image 2025-05-12 at 5.55.40 PM.webp',
    'WhatsApp Image 2025-05-12 at 5.55.39 PM (1).webp',
    'WhatsApp Image 2025-05-12 at 5.55.39 PM.webp',
    'WhatsApp Image 2025-05-12 at 5.55.37 PM.webp',
    'WhatsApp Image 2025-05-12 at 5.55.33 PM.webp',
    'WhatsApp Image 2025-05-12 at 5.55.36 PM.webp',
  ].map((src, index) => ({
    id: `exterior-whatsapp-${index + 1}`,
    title: 'تصميم خارجي',
    src,
    type: 'Exterior design',
    category: projectCategories['Exterior design'],
  })),
  // إضافة مجموعة NEO CLASSIC VILLA
  ...[
    'NEO CLASSIC VILLA_1744719179653.webp',
    'NEO CLASSIC VILLA_1744719176944.webp',
    'NEO CLASSIC VILLA_1744719174456.webp',
  ].map((src, index) => ({
    id: `neo-classic-villa-${index + 1}`,
    title: 'فيلا نيو كلاسيك',
    src,
    type: 'Exterior design',
    category: projectCategories['Exterior design'],
    group: 'neo-classic-villa',
  })),

  // Interior Design Projects
  // مجموعة LUXURY MODERN RECEPTION
  ...[
    'LUXURY MODERN RECEPTION_1726775343617.webp',
    'LUXURY MODERN RECEPTION_1726775342402.webp',
    'LUXURY MODERN RECEPTION_1726775338751.webp',
    'LUXURY MODERN RECEPTION_1726775335402.webp',
    'LUXURY MODERN RECEPTION_1726775333390.webp',
    'LUXURY MODERN RECEPTION_1726775330946.webp',
    'LUXURY MODERN RECEPTION_1726775323343.webp',
    'LUXURY MODERN RECEPTION_1726773540971.webp',
    'LUXURY MODERN RECEPTION_1726773538888.webp',
    'LUXURY MODERN RECEPTION_1726773535214.webp',
    'LUXURY MODERN RECEPTION_1726773537234.webp',
    'LUXURY MODERN RECEPTION_1726773525338.webp',
    'LUXURY MODERN RECEPTION_1726773522193.webp',
    'LUXURY MODERN RECEPTION_1726773517276.webp',
    'LUXURY MODERN RECEPTION_1726773513513.webp',
    'LUXURY MODERN RECEPTION_1726773511804.webp',
    'LUXURY MODERN RECEPTION_1726773510409.webp',
    'LUXURY MODERN RECEPTION_1726773504383.webp',
    'LUXURY MODERN RECEPTION_1726773159506.webp',
    'LUXURY MODERN RECEPTION_1726773157382.webp',
    'LUXURY MODERN RECEPTION_1726773155492.webp',
    'LUXURY MODERN RECEPTION_1726773153080.webp',
    'LUXURY MODERN RECEPTION_1726773151199.webp',
    'LUXURY MODERN RECEPTION_1726773149565.webp',
    'LUXURY MODERN RECEPTION_1726773146699.webp',
  ].map((src, index) => ({
    id: `luxury-modern-reception-${index + 1}`,
    title: 'استقبال عصري فاخر',
    src,
    type: 'Interior design',
    category: projectCategories['Interior design'],
    group: 'luxury-modern-reception',
  })),

  // مجموعة CONTEMPORARY RECEPTION DESIGN
  ...[
    'CONTEMPORARY RECEPTION DESIGN_1726773804983.webp',
    'CONTEMPORARY RECEPTION DESIGN_1726773803655.webp',
    'CONTEMPORARY RECEPTION DESIGN_1726773800728.webp',
    'CONTEMPORARY RECEPTION DESIGN_1726773798443.webp',
    'CONTEMPORARY RECEPTION DESIGN_1726773796118.webp',
  ].map((src, index) => ({
    id: `contemporary-reception-${index + 1}`,
    title: 'استقبال معاصر',
    src,
    type: 'Interior design',
    category: projectCategories['Interior design'],
    group: 'contemporary-reception',
  })),

  // مجموعة EGY LUXURY BATHROOM
  ...[
    'EGY l LUXURY BATHROOM_1726772734411.webp',
    'EGY l LUXURY BATHROOM_1726772732096.webp',
    'EGY l LUXURY BATHROOM_1726772729823.webp',
    'EGY l LUXURY BATHROOM_1726772727096.webp',
  ].map((src, index) => ({
    id: `egy-luxury-bathroom-${index + 1}`,
    title: 'حمام فاخر  ',
    src,
    type: 'Interior design',
    category: projectCategories['Interior design'],
    group: 'egy-luxury-bathroom',
  })),

  // مجموعة LUXURY MODERN INDOOR POOL
  ...[
    'LUXURY MODERN INDOOR POOL_1726772616960.webp',
    'LUXURY MODERN INDOOR POOL_1726772614187.webp',
    'LUXURY MODERN INDOOR POOL_1726772612210.webp',
    'LUXURY MODERN INDOOR POOL_1726772609014.webp',
    'LUXURY MODERN INDOOR POOL_1726772601106.webp',
  ].map((src, index) => ({
    id: `luxury-indoor-pool-${index + 1}`,
    title: 'مسبح داخلي فاخر',
    src,
    type: 'Interior design',
    category: projectCategories['Interior design'],
    group: 'luxury-indoor-pool',
  })),

  // مجموعة Beauty Salon Qblash - Kuwait
  ...[
    'Beauty Salon Qblash - Kuwait_1728740851742.webp',
    'Beauty Salon Qblash - Kuwait_1728740848865.webp',
    'Beauty Salon Qblash - Kuwait_1728740844996.webp',
    'Beauty Salon Qblash - Kuwait_1728740842040.webp',
    'Beauty Salon Qblash - Kuwait_1728740837529.webp',
    'Beauty Salon Qblash - Kuwait_1728740835143.webp',
    'Beauty Salon Qblash - Kuwait_1728740828650.webp',
    'Beauty Salon Qblash - Kuwait_1728740824596.webp',
    'Beauty Salon Qblash - Kuwait_1728740817971.webp',
    'Beauty Salon Qblash - Kuwait_1728740814180.webp',
    'Beauty Salon Qblash - Kuwait_1728740792646.webp',
    'Beauty Salon Qblash - Kuwait_1728740777704.webp',
  ].map((src, index) => ({
    id: `beauty-salon-kuwait-${index + 1}`,
    title: 'صالون تجميل ',
    src,
    type: 'Interior design',
    category: projectCategories['Interior design'],
    group: 'beauty-salon-kuwait',
  })),
];

// تجميع المشاريع حسب المجموعات
const groupedProjects = projects.reduce((acc, project) => {
  if (project.group) {
    if (!acc[project.group]) {
      acc[project.group] = [];
    }
    acc[project.group].push(project);
  }
  return acc;
}, {});

export { projects, projectCategories, groupedProjects };
