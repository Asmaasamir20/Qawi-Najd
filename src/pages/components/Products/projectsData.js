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
  'Other design': {
    id: 'Other design',
    title: 'تصميمات أخرى',
    description: 'تصاميم متنوعة ومميزة',
  },
};

// Import images using a more production-friendly approach
const getImageUrl = (path) => {
  if (!path) {
    console.error('Missing image path');
    // Return a default placeholder image path
    return '/images/placeholder.png';
  }

  try {
    // First check if we're in development and use the source path
    if (import.meta.env.DEV) {
      return `/src/assets/images/projects/${path}?v=${Date.now()}`;
    }
    // Use the public URL pattern for assets in production
    return `/assets/images/projects/${path}?v=${Date.now()}`;
  } catch (error) {
    console.error(`Error processing image path: ${path}`, error);
    return '/images/placeholder.png';
  }
};

const projects = [
  // Exterior Design Projects
  {
    id: 'facade-mousa',
    title: 'واجهة موسى',
    src: getImageUrl('Exterior design/1.webp'),
    type: 'Exterior design',
    category: projectCategories['Exterior design'],
  },
  {
    id: 'estraha-1',
    title: 'استراحة',
    src: getImageUrl('Exterior design/2.webp'),
    type: 'Exterior design',
    category: projectCategories['Exterior design'],
  },
  {
    id: 'estraha-2',
    title: 'استراحة',
    src: getImageUrl('Exterior design/3.webp'),
    type: 'Exterior design',
    category: projectCategories['Exterior design'],
  },
  {
    id: 'harbi',
    title: 'تصميم حربي',
    src: getImageUrl('Exterior design/4.webp'),
    type: 'Exterior design',
    category: projectCategories['Exterior design'],
  },
  {
    id: 'saad-alharthy',
    title: 'تصميم سعد الحارثي',
    src: getImageUrl('Exterior design/5.webp'),
    type: 'Exterior design',
    category: projectCategories['Exterior design'],
  },
  // إضافة جميع صور WhatsApp للتصميم الخارجي
  ...[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((index) => ({
    id: `exterior-whatsapp-${index - 5}`,
    title: 'تصميم خارجي',
    src: getImageUrl(`Exterior design/${index}.webp`),
    type: 'Exterior design',
    category: projectCategories['Exterior design'],
  })),

  // Interior Design Projects
  // مجموعة LUXURY MODERN RECEPTION
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((index) => ({
    id: `luxury-modern-reception-${index}`,
    title: 'استقبال عصري فاخر',
    src: getImageUrl(`Interior design/${index}.webp`),
    type: 'Interior design',
    category: projectCategories['Interior design'],
    group: 'luxury-modern-reception',
  })),

  // مجموعة CONTEMPORARY RECEPTION DESIGN
  ...[16, 17, 18, 19, 20].map((index) => ({
    id: `contemporary-reception-${index - 15}`,
    title: 'استقبال معاصر',
    src: getImageUrl(`Interior design/${index}.webp`),
    type: 'Interior design',
    category: projectCategories['Interior design'],
    group: 'contemporary-reception',
  })),

  // مجموعة EGY LUXURY BATHROOM
  ...[21, 22, 23, 24].map((index) => ({
    id: `egy-luxury-bathroom-${index - 20}`,
    title: 'حمام فاخر  ',
    src: getImageUrl(`Interior design/${index}.webp`),
    type: 'Interior design',
    category: projectCategories['Interior design'],
    group: 'egy-luxury-bathroom',
  })),

  // مجموعة LUXURY MODERN INDOOR POOL
  ...[25, 26, 27, 28, 29].map((index) => ({
    id: `luxury-indoor-pool-${index - 24}`,
    title: 'مسبح داخلي فاخر',
    src: getImageUrl(`Interior design/${index}.webp`),
    type: 'Interior design',
    category: projectCategories['Interior design'],
    group: 'luxury-indoor-pool',
  })),

  // مجموعة Beauty Salon Qblash - Kuwait
  ...[30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41].map((index) => ({
    id: `beauty-salon-kuwait-${index - 29}`,
    title: 'صالون تجميل ',
    src: getImageUrl(`Interior design/${index}.webp`),
    type: 'Interior design',
    category: projectCategories['Interior design'],
    group: 'beauty-salon-kuwait',
  })),

  // Other Design Projects
  {
    id: 'other-design-1',
    title: 'تصميم فيلا سكنية',
    src: getImageUrl('Other design/1.webp'),
    type: 'Other design',
    category: projectCategories['Other design'],
    group: 'other-design',
  },
  {
    id: 'other-design-2',
    title: 'تصميم فيلا سكنية',
    src: getImageUrl('Other design/2.webp'),
    type: 'Other design',
    category: projectCategories['Other design'],
    group: 'other-design',
  },
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
