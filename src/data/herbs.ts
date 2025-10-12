export interface Herb {
  id: number;
  name: string;
  nameAr: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  descriptionAr: string;
  benefits: string[];
  benefitsAr: string[];
  uses: string[];
  usesAr: string[];
  origin: string;
  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;
  weight: string;
  shelfLife: string;
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  color: string;
  herbs: Herb[];
}

export const herbsData: Herb[] = [
  // Classic Range
  {
    id: 1,
    name: "Chamomile",
    nameAr: "البابونج",
    category: "tea",
    price: 1.94,
    image: "https://images.unsplash.com/photo-1563122797-6c3c2b9cb5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Premium chamomile flowers harvested from the fertile lands of Egypt, known for their exceptional calming properties and delicate floral taste. This ancient herb has been used for centuries in traditional medicine for its gentle sedative effects. The flowers are carefully hand-picked at peak bloom to ensure maximum potency and flavor. Perfect for evening relaxation, this chamomile helps promote better sleep quality and reduces anxiety naturally. It also contains apigenin, a flavonoid that binds to benzodiazepine receptors in the brain, providing natural relaxation without side effects. The anti-inflammatory properties make it excellent for soothing digestive issues and skin irritations.",
    descriptionAr: "زهور البابونج الممتازة المحصودة من الأراضي الخصبة في مصر، معروفة بخصائصها المهدئة الاستثنائية وطعمها الزهري الرقيق. هذا العشب القديم استُخدم لقرون في الطب التقليدي لآثاره المهدئة اللطيفة. تُقطف الزهور بعناية باليد في ذروة الإزهار لضمان أقصى قوة ونكهة. مثالية للاسترخاء المسائي، يساعد هذا البابونج في تعزيز جودة النوم وتقليل القلق بشكل طبيعي. يحتوي أيضاً على الأبيجينين، وهو فلافونويد يرتبط بمستقبلات البنزوديازيبين في الدماغ، مما يوفر استرخاءً طبيعياً دون آثار جانبية. الخصائص المضادة للالتهابات تجعله ممتازاً لتهدئة مشاكل الجهاز الهضمي وتهيجات الجلد.",
    benefits: ["Promotes relaxation", "Aids sleep", "Soothes digestive system", "Anti-inflammatory properties", "Reduces anxiety", "Natural sedative"],
    benefitsAr: ["يعزز الاسترخاء", "يساعد على النوم", "يهدئ الجهاز الهضمي", "خصائص مضادة للالتهابات", "يقلل القلق", "مهدئ طبيعي"],
    uses: ["Evening tea", "Aromatherapy", "Skincare", "Digestive aid", "Sleep aid", "Stress relief"],
    usesAr: ["شاي مسائي", "العلاج بالعطور", "العناية بالبشرة", "مساعد للهضم", "مساعد النوم", "تخفيف التوتر"],
    origin: "Egypt",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    inStock: true,
    weight: "50g",
    shelfLife: "2 years"
  },
  {
    id: 2,
    name: "Peppermint",
    nameAr: "النعناع الفلفلي",
    category: "tea",
    price: 1.94,
    image: "https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Premium peppermint leaves cultivated in the rich soil of Egypt's Nile Delta, offering an exceptionally refreshing and invigorating flavor. This hybrid mint variety contains high levels of menthol, providing that characteristic cooling sensation that makes it perfect for digestive health. The leaves are harvested at optimal maturity to ensure maximum essential oil content and flavor intensity. Peppermint is renowned for its ability to soothe digestive discomfort, reduce bloating, and provide natural energy without caffeine. It also contains rosmarinic acid, a powerful antioxidant that helps reduce inflammation and supports overall wellness. The cooling menthol effect makes it excellent for respiratory health and natural breath freshening.",
    descriptionAr: "أوراق النعناع الفلفلي الممتازة المزروعة في التربة الغنية لدلتا النيل في مصر، تقدم نكهة منعشة ومنشطة بشكل استثنائي. هذا الصنف الهجين من النعناع يحتوي على مستويات عالية من المنثول، مما يوفر ذلك الإحساس المبرد المميز الذي يجعله مثالياً لصحة الجهاز الهضمي. تُحصد الأوراق في النضج الأمثل لضمان أقصى محتوى من الزيوت الأساسية وكثافة النكهة. النعناع الفلفلي مشهور بقدرته على تهدئة عدم الراحة الهضمية وتقليل الانتفاخ وتوفير طاقة طبيعية دون كافيين. يحتوي أيضاً على حمض الروزمارينيك، وهو مضاد أكسدة قوي يساعد في تقليل الالتهابات ودعم العافية العامة. التأثير المبرد للمنثول يجعله ممتازاً لصحة الجهاز التنفسي وتنعيم النفس الطبيعي.",
    benefits: ["Aids digestion", "Freshens breath", "Natural energy", "Cooling effect", "Reduces bloating", "Respiratory support"],
    benefitsAr: ["يساعد على الهضم", "ينعش النفس", "طاقة طبيعية", "تأثير مبرد", "يقلل الانتفاخ", "دعم الجهاز التنفسي"],
    uses: ["After meals", "Morning tea", "Mouthwash", "Aromatherapy", "Digestive tea", "Respiratory relief"],
    usesAr: ["بعد الوجبات", "شاي الصباح", "غسول الفم", "العلاج بالعطور", "شاي هضمي", "تخفيف الجهاز التنفسي"],
    origin: "Egypt",
    rating: 4.9,
    reviews: 89,
    badge: "Popular",
    inStock: true,
    weight: "50g",
    shelfLife: "2 years"
  },
  {
    id: 3,
    name: "Lemon Balm",
    nameAr: "بلسم الليمون",
    category: "tea",
    price: 1.94,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Exquisite lemon balm leaves grown in Egypt's Mediterranean climate, offering a delicate citrusy aroma and mild, refreshing flavor. This member of the mint family has been treasured for over 2000 years for its remarkable calming properties. The leaves contain rosmarinic acid and eugenol, compounds that interact with GABA receptors in the brain to promote relaxation and reduce anxiety naturally. Lemon balm is particularly effective for improving sleep quality, enhancing mood, and supporting cognitive function. It's also rich in antioxidants that help protect against oxidative stress and support overall brain health. The gentle lemon scent makes it perfect for aromatherapy and stress relief.",
    descriptionAr: "أوراق بلسم الليمون الرائعة المزروعة في مناخ مصر المتوسطي، تقدم رائحة حمضيات رقيقة ونكهة خفيفة ومنعشة. هذا العضو من عائلة النعناع كان محبوباً لأكثر من 2000 عام لخصائصه المهدئة الرائعة. تحتوي الأوراق على حمض الروزمارينيك والأوجينول، مركبات تتفاعل مع مستقبلات GABA في الدماغ لتعزيز الاسترخاء وتقليل القلق بشكل طبيعي. بلسم الليمون فعال بشكل خاص لتحسين جودة النوم وتعزيز المزاج ودعم الوظائف المعرفية. إنه غني أيضاً بمضادات الأكسدة التي تساعد في الحماية من الإجهاد التأكسدي ودعم صحة الدماغ العامة. الرائحة الليمونية اللطيفة تجعله مثالياً للعلاج بالعطور وتخفيف التوتر.",
    benefits: ["Reduces anxiety", "Improves mood", "Antioxidant rich", "Supports cognitive function", "Enhances sleep", "Natural stress relief"],
    benefitsAr: ["يقلل القلق", "يحسن المزاج", "غني بمضادات الأكسدة", "يدعم الوظائف المعرفية", "يعزز النوم", "تخفيف التوتر الطبيعي"],
    uses: ["Stress relief", "Evening tea", "Culinary herb", "Natural remedy", "Aromatherapy", "Sleep aid"],
    usesAr: ["تخفيف التوتر", "شاي مسائي", "عشب طهي", "علاج طبيعي", "العلاج بالعطور", "مساعد النوم"],
    origin: "Egypt",
    rating: 4.7,
    reviews: 203,
    inStock: true,
    weight: "50g",
    shelfLife: "2 years"
  },
  {
    id: 4,
    name: "Rosemary",
    nameAr: "إكليل الجبل",
    category: "culinary",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Premium rosemary harvested from Egypt's coastal regions, featuring an intense pine-like fragrance and robust, earthy flavor. This evergreen herb has been revered since ancient times for its remarkable memory-enhancing properties and culinary versatility. Rosemary contains carnosic acid and rosmarinic acid, powerful antioxidants that support brain health and cognitive function. The essential oils in rosemary have been shown to improve concentration, enhance memory retention, and support hair growth when used topically. It's also rich in iron, calcium, and vitamin B6, making it a nutritional powerhouse. The strong antimicrobial properties make it excellent for food preservation and natural cleaning solutions.",
    descriptionAr: "إكليل الجبل الممتاز المحصود من المناطق الساحلية في مصر، يتميز برائحة صنوبرية شديدة ونكهة قوية وترابية. هذا العشب دائم الخضرة كان محترماً منذ العصور القديمة لخصائصه الرائعة في تعزيز الذاكرة وتنوعه في الطهي. يحتوي إكليل الجبل على حمض الكارنوسيك وحمض الروزمارينيك، وهما مضادات أكسدة قوية تدعم صحة الدماغ والوظائف المعرفية. الزيوت الأساسية في إكليل الجبل ثبت أنها تحسن التركيز وتعزز الاحتفاظ بالذاكرة وتدعم نمو الشعر عند الاستخدام الموضعي. إنه غني أيضاً بالحديد والكالسيوم وفيتامين B6، مما يجعله مصدراً غذائياً قوياً. الخصائص المضادة للميكروبات القوية تجعله ممتازاً لحفظ الطعام وحلول التنظيف الطبيعية.",
    benefits: ["Memory enhancement", "Hair growth", "Antioxidant properties", "Digestive support", "Cognitive function", "Antimicrobial"],
    benefitsAr: ["تعزيز الذاكرة", "نمو الشعر", "خصائص مضادة للأكسدة", "دعم الهضم", "الوظائف المعرفية", "مضاد للميكروبات"],
    uses: ["Cooking", "Hair care", "Aromatherapy", "Natural preservative", "Memory support", "Culinary seasoning"],
    usesAr: ["الطبخ", "العناية بالشعر", "العلاج بالعطور", "مادة حافظة طبيعية", "دعم الذاكرة", "تتبيل الطهي"],
    origin: "Egypt",
    rating: 4.8,
    reviews: 156,
    badge: "Premium",
    inStock: true,
    weight: "30g",
    shelfLife: "3 years"
  },
  {
    id: 5,
    name: "Basil",
    nameAr: "الريحان",
    category: "culinary",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Fresh basil leaves with sweet, slightly peppery flavor. Essential for Italian cuisine and natural pest control.",
    descriptionAr: "أوراق الريحان الطازجة بنكهة حلوة وحارة قليلاً. ضروري للمطبخ الإيطالي ومكافحة الآفات الطبيعية.",
    benefits: ["Rich in vitamins", "Anti-inflammatory", "Supports heart health", "Natural insect repellent"],
    benefitsAr: ["غني بالفيتامينات", "مضاد للالتهابات", "يدعم صحة القلب", "طارد طبيعي للحشرات"],
    uses: ["Pesto", "Salads", "Pasta dishes", "Natural remedy"],
    usesAr: ["البيستو", "السلطات", "أطباق المعكرونة", "علاج طبيعي"],
    origin: "Egypt",
    rating: 4.6,
    reviews: 98,
    inStock: true,
    weight: "25g",
    shelfLife: "1 year"
  },
  {
    id: 6,
    name: "Thyme",
    nameAr: "الزعتر",
    category: "culinary",
    price: 2.19,
    image: "https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Fragrant thyme with earthy, slightly minty flavor. Excellent for seasoning meats, vegetables, and herbal teas.",
    descriptionAr: "الزعتر العطري بنكهة ترابية ونعناعية قليلاً. ممتاز لتتبيل اللحوم والخضروات والشاي العشبي.",
    benefits: ["Antimicrobial properties", "Respiratory support", "Digestive aid", "Rich in iron"],
    benefitsAr: ["خصائص مضادة للميكروبات", "دعم الجهاز التنفسي", "مساعد للهضم", "غني بالحديد"],
    uses: ["Seasoning", "Herbal tea", "Natural remedy", "Aromatherapy"],
    usesAr: ["التتبيل", "الشاي العشبي", "علاج طبيعي", "العلاج بالعطور"],
    origin: "Egypt",
    rating: 4.7,
    reviews: 112,
    inStock: true,
    weight: "30g",
    shelfLife: "2 years"
  },
  {
    id: 7,
    name: "Lavender",
    nameAr: "اللافندر",
    category: "aromatic",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Premium lavender buds with calming floral aroma. Perfect for relaxation, sleep aid, and natural skincare.",
    descriptionAr: "براعم اللافندر الممتازة برائحة زهرية مهدئة. مثالية للاسترخاء ومساعد النوم والعناية الطبيعية بالبشرة.",
    benefits: ["Promotes sleep", "Reduces anxiety", "Antiseptic properties", "Skin soothing"],
    benefitsAr: ["يعزز النوم", "يقلل القلق", "خصائص مطهرة", "مهدئ للبشرة"],
    uses: ["Aromatherapy", "Sleep aid", "Skincare", "Culinary"],
    usesAr: ["العلاج بالعطور", "مساعد النوم", "العناية بالبشرة", "الطبخ"],
    origin: "Egypt",
    rating: 5.0,
    reviews: 156,
    badge: "Premium",
    inStock: true,
    weight: "20g",
    shelfLife: "3 years"
  },
  {
    id: 8,
    name: "Sage",
    nameAr: "المريمية",
    category: "medicinal",
    price: 2.79,
    image: "https://images.unsplash.com/photo-1563122797-6c3c2b9cb5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Traditional sage with earthy, slightly bitter flavor. Known for its medicinal properties and culinary versatility.",
    descriptionAr: "المريمية التقليدية بنكهة ترابية ومرة قليلاً. معروفة بخصائصها الطبية وتنوعها في الطهي.",
    benefits: ["Memory support", "Antioxidant rich", "Anti-inflammatory", "Digestive aid"],
    benefitsAr: ["دعم الذاكرة", "غني بمضادات الأكسدة", "مضاد للالتهابات", "مساعد للهضم"],
    uses: ["Herbal tea", "Cooking", "Natural remedy", "Aromatherapy"],
    usesAr: ["الشاي العشبي", "الطبخ", "علاج طبيعي", "العلاج بالعطور"],
    origin: "Egypt",
    rating: 4.5,
    reviews: 87,
    inStock: true,
    weight: "25g",
    shelfLife: "2 years"
  },
  {
    id: 9,
    name: "Oregano",
    nameAr: "الأوريجانو",
    category: "culinary",
    price: 1.89,
    image: "https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Robust oregano with strong, aromatic flavor. Essential for Mediterranean and Mexican cuisine.",
    descriptionAr: "الأوريجانو القوي بنكهة قوية وعطرة. ضروري للمطبخ المتوسطي والمكسيكي.",
    benefits: ["Antimicrobial", "Rich in antioxidants", "Supports immunity", "Anti-inflammatory"],
    benefitsAr: ["مضاد للميكروبات", "غني بمضادات الأكسدة", "يدعم المناعة", "مضاد للالتهابات"],
    uses: ["Pizza seasoning", "Pasta dishes", "Marinades", "Herbal tea"],
    usesAr: ["تتبيل البيتزا", "أطباق المعكرونة", "التتبيلات", "الشاي العشبي"],
    origin: "Egypt",
    rating: 4.6,
    reviews: 134,
    inStock: true,
    weight: "30g",
    shelfLife: "2 years"
  },
  {
    id: 10,
    name: "Ginger",
    nameAr: "الزنجبيل",
    category: "medicinal",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Spicy ginger root with warming properties. Excellent for digestion, nausea relief, and immune support.",
    descriptionAr: "جذر الزنجبيل الحار بخصائص دافئة. ممتاز للهضم وتخفيف الغثيان ودعم المناعة.",
    benefits: ["Aids digestion", "Reduces nausea", "Anti-inflammatory", "Boosts immunity"],
    benefitsAr: ["يساعد على الهضم", "يقلل الغثيان", "مضاد للالتهابات", "يعزز المناعة"],
    uses: ["Tea", "Cooking", "Natural remedy", "Digestive aid"],
    usesAr: ["الشاي", "الطبخ", "علاج طبيعي", "مساعد للهضم"],
    origin: "Egypt",
    rating: 4.8,
    reviews: 178,
    badge: "Best Seller",
    inStock: true,
    weight: "50g",
    shelfLife: "2 years"
  },
  {
    id: 11,
    name: "Turmeric",
    nameAr: "الكركم",
    category: "medicinal",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Golden turmeric with powerful anti-inflammatory properties. Known as nature's anti-inflammatory and antioxidant powerhouse.",
    descriptionAr: "الكركم الذهبي بخصائص مضادة للالتهابات قوية. معروف كمضاد طبيعي للالتهابات ومصدر قوة مضادات الأكسدة.",
    benefits: ["Anti-inflammatory", "Antioxidant rich", "Supports joint health", "Boosts brain function"],
    benefitsAr: ["مضاد للالتهابات", "غني بمضادات الأكسدة", "يدعم صحة المفاصل", "يعزز وظائف الدماغ"],
    uses: ["Golden milk", "Cooking", "Natural remedy", "Skincare"],
    usesAr: ["الحليب الذهبي", "الطبخ", "علاج طبيعي", "العناية بالبشرة"],
    origin: "Egypt",
    rating: 4.9,
    reviews: 203,
    badge: "Superfood",
    inStock: true,
    weight: "50g",
    shelfLife: "3 years"
  },
  {
    id: 12,
    name: "Cinnamon",
    nameAr: "القرفة",
    category: "aromatic",
    price: 2.29,
    image: "https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Premium cinnamon bark harvested from Egypt's spice gardens, offering a sweet, warming spice flavor that has been treasured for millennia. This aromatic bark contains cinnamaldehyde, a compound that gives cinnamon its distinctive flavor and powerful health benefits. Cinnamon is renowned for its ability to help regulate blood sugar levels, making it particularly beneficial for those managing diabetes or prediabetes. The warming properties make it excellent for improving circulation and providing comfort during cold weather. Rich in antioxidants, cinnamon helps fight inflammation and supports heart health. It's also a natural antimicrobial agent, making it excellent for food preservation and oral health.",
    descriptionAr: "لحاء القرفة الممتاز المحصود من حدائق التوابل في مصر، يقدم نكهة توابل حلوة ودافئة كانت محبوبة لآلاف السنين. هذا اللحاء العطري يحتوي على سينامالدهيد، مركب يعطي القرفة نكهتها المميزة وفوائدها الصحية القوية. القرفة مشهورة بقدرتها على المساعدة في تنظيم مستويات سكر الدم، مما يجعلها مفيدة بشكل خاص لأولئك الذين يتعاملون مع مرض السكري أو مقدمات السكري. الخصائص الدافئة تجعلها ممتازة لتحسين الدورة الدموية وتوفير الراحة أثناء الطقس البارد. غنية بمضادات الأكسدة، تساعد القرفة في مكافحة الالتهابات ودعم صحة القلب. إنها أيضاً عامل مضاد للميكروبات طبيعي، مما يجعلها ممتازة لحفظ الطعام وصحة الفم.",
    benefits: ["Blood sugar support", "Antioxidant properties", "Anti-inflammatory", "Warming effect", "Heart health", "Antimicrobial"],
    benefitsAr: ["دعم سكر الدم", "خصائص مضادة للأكسدة", "مضاد للالتهابات", "تأثير دافئ", "صحة القلب", "مضاد للميكروبات"],
    uses: ["Desserts", "Beverages", "Natural remedy", "Aromatherapy", "Blood sugar support", "Food preservation"],
    usesAr: ["الحلويات", "المشروبات", "علاج طبيعي", "العلاج بالعطور", "دعم سكر الدم", "حفظ الطعام"],
    origin: "Egypt",
    rating: 4.7,
    reviews: 145,
    inStock: true,
    weight: "40g",
    shelfLife: "3 years"
  },
  // Additional herbs
  {
    id: 13,
    name: "Echinacea",
    nameAr: "الإشنسا",
    category: "medicinal",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Powerful echinacea flowers cultivated in Egypt's high-altitude regions, known as nature's immune system booster. This purple coneflower has been used by Native Americans for centuries to support immune health and fight infections. Echinacea contains alkamides, polysaccharides, and caffeic acid derivatives that work together to enhance the body's natural defense mechanisms. Research shows it can reduce the duration and severity of colds and upper respiratory infections. The herb also has anti-inflammatory properties and may help reduce anxiety and inflammation. Perfect for seasonal wellness support and maintaining overall immune system health.",
    descriptionAr: "زهور الإشنسا القوية المزروعة في المناطق عالية الارتفاع في مصر، معروفة باسم معزز جهاز المناعة الطبيعي. هذا الزهر المخروطي الأرجواني استُخدم من قبل الأمريكيين الأصليين لقرون لدعم صحة المناعة ومكافحة الالتهابات. تحتوي الإشنسا على الألكاميدات والسكريات المتعددة ومشتقات حمض الكافيك التي تعمل معاً لتعزيز آليات الدفاع الطبيعية للجسم. تظهر الأبحاث أنها يمكن أن تقلل من مدة وشدة نزلات البرد والتهابات الجهاز التنفسي العلوي. العشب له أيضاً خصائص مضادة للالتهابات وقد يساعد في تقليل القلق والالتهابات. مثالية لدعم العافية الموسمية والحفاظ على صحة جهاز المناعة العامة.",
    benefits: ["Immune support", "Cold prevention", "Anti-inflammatory", "Antioxidant", "Respiratory health", "Infection fighting"],
    benefitsAr: ["دعم المناعة", "منع نزلات البرد", "مضاد للالتهابات", "مضاد للأكسدة", "صحة الجهاز التنفسي", "مكافحة الالتهابات"],
    uses: ["Immune tea", "Cold prevention", "Respiratory support", "Natural remedy", "Seasonal wellness", "Infection fighting"],
    usesAr: ["شاي مناعي", "منع نزلات البرد", "دعم الجهاز التنفسي", "علاج طبيعي", "العافية الموسمية", "مكافحة الالتهابات"],
    origin: "Egypt",
    rating: 4.6,
    reviews: 98,
    badge: "Immune Booster",
    inStock: true,
    weight: "30g",
    shelfLife: "2 years"
  },
  {
    id: 14,
    name: "Elderberry",
    nameAr: "البيلسان",
    category: "medicinal",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Rich elderberry fruits harvested from Egypt's fertile valleys, packed with powerful antioxidants and immune-supporting compounds. These dark purple berries contain anthocyanins, flavonoids, and vitamin C in concentrations that make them one of nature's most potent immune system supporters. Elderberry has been used in traditional medicine for centuries to combat colds, flu, and respiratory infections. The berries are rich in quercetin, a flavonoid that has antiviral properties and helps reduce inflammation. Elderberry also supports cardiovascular health and may help reduce oxidative stress. Perfect for winter wellness and maintaining year-round immune health.",
    descriptionAr: "ثمار البيلسان الغنية المحصودة من الوديان الخصبة في مصر، محملة بمضادات الأكسدة القوية والمركبات الداعمة للمناعة. هذه التوتات الأرجوانية الداكنة تحتوي على الأنثوسيانين والفلافونويد وفيتامين C بتركيزات تجعلها واحدة من أقوى داعمي جهاز المناعة الطبيعي. استُخدم البيلسان في الطب التقليدي لقرون لمكافحة نزلات البرد والإنفلونزا والتهابات الجهاز التنفسي. التوتات غنية بالكيرسيتين، وهو فلافونويد له خصائص مضادة للفيروسات ويساعد في تقليل الالتهابات. البيلسان يدعم أيضاً صحة القلب والأوعية الدموية وقد يساعد في تقليل الإجهاد التأكسدي. مثالي للعافية الشتوية والحفاظ على صحة المناعة على مدار السنة.",
    benefits: ["Immune support", "Antiviral properties", "Antioxidant rich", "Cold & flu relief", "Cardiovascular health", "Anti-inflammatory"],
    benefitsAr: ["دعم المناعة", "خصائص مضادة للفيروسات", "غني بمضادات الأكسدة", "تخفيف نزلات البرد والإنفلونزا", "صحة القلب والأوعية الدموية", "مضاد للالتهابات"],
    uses: ["Immune syrup", "Cold relief", "Antiviral support", "Antioxidant boost", "Winter wellness", "Respiratory health"],
    usesAr: ["شراب مناعي", "تخفيف نزلات البرد", "دعم مضاد للفيروسات", "تعزيز مضادات الأكسدة", "العافية الشتوية", "صحة الجهاز التنفسي"],
    origin: "Egypt",
    rating: 4.8,
    reviews: 167,
    badge: "Superfood",
    inStock: true,
    weight: "50g",
    shelfLife: "2 years"
  },
  {
    id: 15,
    name: "Marshmallow Root",
    nameAr: "جذر الخطمي",
    category: "medicinal",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Soothing marshmallow root from Egypt's wetlands, containing high levels of mucilage that provides exceptional relief for irritated tissues. This ancient herb has been used for over 2000 years to soothe coughs, sore throats, and digestive issues. The root contains polysaccharides that form a protective coating on mucous membranes, providing natural relief from inflammation and irritation. Marshmallow root is particularly effective for respiratory health, helping to ease dry coughs and throat irritation. It also supports digestive health by soothing the stomach lining and may help with acid reflux and gastritis. The demulcent properties make it excellent for skin care and wound healing.",
    descriptionAr: "جذر الخطمي المهدئ من الأراضي الرطبة في مصر، يحتوي على مستويات عالية من الصمغ الذي يوفر راحة استثنائية للأنسجة المهيجة. هذا العشب القديم استُخدم لأكثر من 2000 عام لتهدئة السعال والتهاب الحلق ومشاكل الجهاز الهضمي. يحتوي الجذر على السكريات المتعددة التي تشكل طبقة واقية على الأغشية المخاطية، مما يوفر راحة طبيعية من الالتهابات والتهيج. جذر الخطمي فعال بشكل خاص لصحة الجهاز التنفسي، يساعد في تخفيف السعال الجاف وتهيج الحلق. يدعم أيضاً صحة الجهاز الهضمي عن طريق تهدئة بطانة المعدة وقد يساعد في ارتجاع الحمض والتهاب المعدة. الخصائص المهدئة تجعله ممتازاً للعناية بالبشرة وشفاء الجروح.",
    benefits: ["Soothes irritation", "Respiratory relief", "Digestive support", "Anti-inflammatory", "Demulcent properties", "Wound healing"],
    benefitsAr: ["يهدئ التهيج", "راحة الجهاز التنفسي", "دعم الجهاز الهضمي", "مضاد للالتهابات", "خصائص مهدئة", "شفاء الجروح"],
    uses: ["Cough relief", "Sore throat", "Digestive tea", "Respiratory support", "Skin care", "Wound healing"],
    usesAr: ["تخفيف السعال", "التهاب الحلق", "شاي هضمي", "دعم الجهاز التنفسي", "العناية بالبشرة", "شفاء الجروح"],
    origin: "Egypt",
    rating: 4.5,
    reviews: 89,
    inStock: true,
    weight: "40g",
    shelfLife: "3 years"
  },
  {
    id: 16,
    name: "Nettle",
    nameAr: "القراص",
    category: "medicinal",
    price: 2.79,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Nutrient-dense nettle leaves from Egypt's wild meadows, packed with vitamins, minerals, and bioactive compounds. This 'superfood' herb contains more iron than spinach, more calcium than milk, and is rich in vitamins A, C, and K. Nettle has been used traditionally to support joint health, reduce inflammation, and provide natural allergy relief. The leaves contain histamine and serotonin, which may help the body adapt to seasonal allergies. Nettle is also excellent for supporting kidney and urinary tract health, and may help with prostate health in men. The high mineral content makes it perfect for supporting bone health and preventing mineral deficiencies.",
    descriptionAr: "أوراق القراص الغنية بالمغذيات من مراعي مصر البرية، محملة بالفيتامينات والمعادن والمركبات النشطة بيولوجياً. هذا العشب 'الغذاء الفائق' يحتوي على حديد أكثر من السبانخ، وكالسيوم أكثر من الحليب، وغني بالفيتامينات A و C و K. استُخدم القراص تقليدياً لدعم صحة المفاصل وتقليل الالتهابات وتوفير راحة طبيعية من الحساسية. تحتوي الأوراق على الهيستامين والسيروتونين، مما قد يساعد الجسم على التكيف مع الحساسية الموسمية. القراص ممتاز أيضاً لدعم صحة الكلى والمسالك البولية، وقد يساعد في صحة البروستاتا عند الرجال. المحتوى المعدني العالي يجعله مثالياً لدعم صحة العظام ومنع نقص المعادن.",
    benefits: ["Nutrient rich", "Joint support", "Allergy relief", "Anti-inflammatory", "Bone health", "Kidney support"],
    benefitsAr: ["غني بالمغذيات", "دعم المفاصل", "راحة من الحساسية", "مضاد للالتهابات", "صحة العظام", "دعم الكلى"],
    uses: ["Nutrient tea", "Allergy relief", "Joint support", "Bone health", "Kidney support", "Mineral supplement"],
    usesAr: ["شاي مغذي", "راحة من الحساسية", "دعم المفاصل", "صحة العظام", "دعم الكلى", "مكمل معدني"],
    origin: "Egypt",
    rating: 4.7,
    reviews: 134,
    badge: "Superfood",
    inStock: true,
    weight: "50g",
    shelfLife: "2 years"
  },
  {
    id: 17,
    name: "Dandelion Root",
    nameAr: "جذر الهندباء",
    category: "medicinal",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Powerful dandelion root from Egypt's countryside, known as nature's liver tonic and detoxifier. This humble weed is actually a nutritional powerhouse, containing vitamins A, C, and K, along with minerals like iron, calcium, and potassium. Dandelion root has been used for centuries to support liver health, aid digestion, and promote natural detoxification. The root contains inulin, a prebiotic fiber that supports healthy gut bacteria and digestive function. It's also rich in antioxidants that help protect the liver from oxidative stress. Dandelion root may help regulate blood sugar levels and support healthy cholesterol levels. Perfect for spring cleansing and maintaining year-round liver health.",
    descriptionAr: "جذر الهندباء القوي من ريف مصر، معروف باسم منشط الكبد الطبيعي ومزيل السموم. هذا العشب المتواضع هو في الواقع مصدر غذائي قوي، يحتوي على الفيتامينات A و C و K، جنباً إلى جنب مع المعادن مثل الحديد والكالسيوم والبوتاسيوم. استُخدم جذر الهندباء لقرون لدعم صحة الكبد ومساعدة الهضم وتعزيز إزالة السموم الطبيعية. يحتوي الجذر على الإينولين، وهو ألياف بريبيوتيك تدعم بكتيريا الأمعاء الصحية ووظيفة الهضم. إنه غني أيضاً بمضادات الأكسدة التي تساعد في حماية الكبد من الإجهاد التأكسدي. قد يساعد جذر الهندباء في تنظيم مستويات سكر الدم ودعم مستويات الكوليسترول الصحية. مثالي للتنظيف الربيعي والحفاظ على صحة الكبد على مدار السنة.",
    benefits: ["Liver support", "Detoxification", "Digestive aid", "Blood sugar support", "Antioxidant", "Prebiotic"],
    benefitsAr: ["دعم الكبد", "إزالة السموم", "مساعد للهضم", "دعم سكر الدم", "مضاد للأكسدة", "بريبيوتيك"],
    uses: ["Liver tea", "Detox support", "Digestive aid", "Blood sugar support", "Spring cleansing", "Liver tonic"],
    usesAr: ["شاي كبدي", "دعم إزالة السموم", "مساعد للهضم", "دعم سكر الدم", "التنظيف الربيعي", "منشط الكبد"],
    origin: "Egypt",
    rating: 4.6,
    reviews: 112,
    inStock: true,
    weight: "50g",
    shelfLife: "2 years"
  },
  {
    id: 18,
    name: "Calendula",
    nameAr: "القطيفة",
    category: "medicinal",
    price: 3.29,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Beautiful calendula flowers from Egypt's flower gardens, known as 'nature's first aid' for their remarkable healing properties. These vibrant orange and yellow flowers contain powerful anti-inflammatory and antimicrobial compounds that make them excellent for skin health and wound healing. Calendula has been used for centuries to treat cuts, burns, rashes, and other skin irritations. The flowers contain flavonoids, saponins, and essential oils that promote tissue regeneration and reduce inflammation. Calendula is also beneficial for digestive health, helping to soothe stomach ulcers and reduce inflammation in the digestive tract. The gentle, soothing properties make it safe for use on sensitive skin and for children.",
    descriptionAr: "زهور القطيفة الجميلة من حدائق الزهور في مصر، معروفة باسم 'الإسعافات الأولية الطبيعية' لخصائصها العلاجية الرائعة. هذه الزهور البرتقالية والصفراء الزاهية تحتوي على مركبات مضادة للالتهابات ومضادة للميكروبات قوية تجعلها ممتازة لصحة الجلد وشفاء الجروح. استُخدمت القطيفة لقرون لعلاج الجروح والحروق والطفح الجلدي وتهيجات الجلد الأخرى. تحتوي الزهور على فلافونويدات وصابونين وزيوت أساسية تعزز تجديد الأنسجة وتقلل الالتهابات. القطيفة مفيدة أيضاً لصحة الجهاز الهضمي، تساعد في تهدئة قرح المعدة وتقليل الالتهابات في الجهاز الهضمي. الخصائص اللطيفة والمهدئة تجعلها آمنة للاستخدام على البشرة الحساسة وللأطفال.",
    benefits: ["Skin healing", "Anti-inflammatory", "Antimicrobial", "Wound healing", "Digestive support", "Tissue regeneration"],
    benefitsAr: ["شفاء الجلد", "مضاد للالتهابات", "مضاد للميكروبات", "شفاء الجروح", "دعم الجهاز الهضمي", "تجديد الأنسجة"],
    uses: ["Skin care", "Wound healing", "Digestive tea", "Anti-inflammatory", "First aid", "Sensitive skin care"],
    usesAr: ["العناية بالبشرة", "شفاء الجروح", "شاي هضمي", "مضاد للالتهابات", "الإسعافات الأولية", "العناية بالبشرة الحساسة"],
    origin: "Egypt",
    rating: 4.8,
    reviews: 156,
    badge: "Skin Care",
    inStock: true,
    weight: "30g",
    shelfLife: "2 years"
  },
  // Culinary Herbs
  {
    id: 19,
    name: "Parsley",
    nameAr: "البقدونس",
    category: "culinary",
    price: 1.49,
    image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Fresh parsley leaves from Egypt's fertile gardens, rich in vitamins C and K, iron, and antioxidants. This versatile herb is essential in Mediterranean cuisine and offers remarkable health benefits. Parsley contains apigenin, a flavonoid with anti-inflammatory and anti-cancer properties. It's also rich in chlorophyll, which helps detoxify the body and freshen breath naturally. The high vitamin C content supports immune function, while vitamin K promotes bone health and blood clotting. Parsley is excellent for kidney health and may help reduce water retention. The fresh, clean flavor makes it perfect for garnishing and enhancing the taste of various dishes.",
    descriptionAr: "أوراق البقدونس الطازجة من حدائق مصر الخصبة، غنية بالفيتامينات C و K والحديد ومضادات الأكسدة. هذا العشب متعدد الاستخدامات ضروري في المطبخ المتوسطي ويقدم فوائد صحية رائعة. يحتوي البقدونس على الأبيجينين، وهو فلافونويد له خصائص مضادة للالتهابات ومضادة للسرطان. إنه غني أيضاً بالكلوروفيل، الذي يساعد في إزالة السموم من الجسم وتنعيم النفس بشكل طبيعي. المحتوى العالي من فيتامين C يدعم وظائف المناعة، بينما فيتامين K يعزز صحة العظام وتجلط الدم. البقدونس ممتاز لصحة الكلى وقد يساعد في تقليل احتباس الماء. النكهة الطازجة والنظيفة تجعله مثالياً للتزيين وتحسين طعم الأطباق المختلفة.",
    benefits: ["Rich in vitamins", "Antioxidant", "Kidney support", "Bone health", "Immune support", "Breath freshener"],
    benefitsAr: ["غني بالفيتامينات", "مضاد للأكسدة", "دعم الكلى", "صحة العظام", "دعم المناعة", "منعش للنفس"],
    uses: ["Garnishing", "Salads", "Cooking", "Detox tea", "Breath freshener", "Nutritional supplement"],
    usesAr: ["التزيين", "السلطات", "الطبخ", "شاي إزالة السموم", "منعش للنفس", "مكمل غذائي"],
    origin: "Egypt",
    rating: 4.5,
    reviews: 89,
    inStock: true,
    weight: "25g",
    shelfLife: "1 year"
  },
  {
    id: 20,
    name: "Cilantro",
    nameAr: "الكزبرة",
    category: "culinary",
    price: 1.79,
    image: "https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Aromatic cilantro leaves from Egypt's spice gardens, offering a unique citrusy flavor that enhances Middle Eastern and Asian cuisines. This herb is rich in vitamins A, C, and K, along with essential minerals like iron and manganese. Cilantro contains powerful antioxidants and has natural detoxifying properties, particularly effective at removing heavy metals from the body. The herb has antimicrobial properties and may help fight foodborne illnesses. Cilantro is also known for its digestive benefits, helping to reduce bloating and support healthy digestion. The fresh, bright flavor makes it perfect for salsas, curries, and fresh salads.",
    descriptionAr: "أوراق الكزبرة العطرة من حدائق التوابل في مصر، تقدم نكهة حمضيات فريدة تعزز المأكولات الشرق أوسطية والآسيوية. هذا العشب غني بالفيتامينات A و C و K، جنباً إلى جنب مع المعادن الأساسية مثل الحديد والمنغنيز. تحتوي الكزبرة على مضادات أكسدة قوية ولها خصائص إزالة سموم طبيعية، فعالة بشكل خاص في إزالة المعادن الثقيلة من الجسم. العشب له خصائص مضادة للميكروبات وقد يساعد في مكافحة الأمراض المنقولة بالغذاء. الكزبرة معروفة أيضاً بفوائدها الهضمية، تساعد في تقليل الانتفاخ ودعم الهضم الصحي. النكهة الطازجة واللامعة تجعلها مثالية للصلصات والكاري والسلطات الطازجة.",
    benefits: ["Detoxification", "Antimicrobial", "Digestive support", "Antioxidant", "Heavy metal removal", "Immune support"],
    benefitsAr: ["إزالة السموم", "مضاد للميكروبات", "دعم الهضم", "مضاد للأكسدة", "إزالة المعادن الثقيلة", "دعم المناعة"],
    uses: ["Cooking", "Salsas", "Curries", "Detox support", "Digestive aid", "Fresh salads"],
    usesAr: ["الطبخ", "الصلصات", "الكاري", "دعم إزالة السموم", "مساعد للهضم", "السلطات الطازجة"],
    origin: "Egypt",
    rating: 4.4,
    reviews: 76,
    inStock: true,
    weight: "25g",
    shelfLife: "1 year"
  },
  {
    id: 21,
    name: "Dill",
    nameAr: "الشبت",
    category: "culinary",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Delicate dill fronds from Egypt's herb gardens, offering a fresh, anise-like flavor perfect for fish, pickles, and Mediterranean dishes. This feathery herb is rich in vitamins A and C, calcium, and iron. Dill contains monoterpenes and flavonoids that provide antioxidant and antimicrobial benefits. The herb has been used traditionally to support digestive health and reduce gas and bloating. Dill is also known for its calming properties and may help promote better sleep. The essential oils in dill have been shown to have antimicrobial effects against various bacteria and fungi. Perfect for seasoning fish, making pickles, and adding fresh flavor to salads and soups.",
    descriptionAr: "أوراق الشبت الرقيقة من حدائق الأعشاب في مصر، تقدم نكهة طازجة تشبه اليانسون مثالية للأسماك والمخللات والأطباق المتوسطية. هذا العشب الريشي غني بالفيتامينات A و C والكالسيوم والحديد. يحتوي الشبت على مونوتربين وفلافونويدات توفر فوائد مضادة للأكسدة ومضادة للميكروبات. استُخدم العشب تقليدياً لدعم صحة الجهاز الهضمي وتقليل الغازات والانتفاخ. الشبت معروف أيضاً بخصائصه المهدئة وقد يساعد في تعزيز نوم أفضل. الزيوت الأساسية في الشبت ثبت أن لها تأثيرات مضادة للميكروبات ضد بكتيريا وفطريات مختلفة. مثالي لتتبيل الأسماك وصنع المخللات وإضافة نكهة طازجة للسلطات والشوربات.",
    benefits: ["Digestive support", "Antimicrobial", "Antioxidant", "Sleep support", "Anti-bloating", "Rich in minerals"],
    benefitsAr: ["دعم الهضم", "مضاد للميكروبات", "مضاد للأكسدة", "دعم النوم", "مضاد للانتفاخ", "غني بالمعادن"],
    uses: ["Fish seasoning", "Pickling", "Salads", "Digestive tea", "Soup garnish", "Mediterranean cooking"],
    usesAr: ["تتبيل الأسماك", "التخليل", "السلطات", "شاي هضمي", "تزيين الشوربة", "الطبخ المتوسطي"],
    origin: "Egypt",
    rating: 4.3,
    reviews: 67,
    inStock: true,
    weight: "20g",
    shelfLife: "1 year"
  },
  {
    id: 22,
    name: "Marjoram",
    nameAr: "البردقوش",
    category: "culinary",
    price: 2.19,
    image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sweet marjoram from Egypt's Mediterranean coast, offering a delicate, slightly citrusy flavor that's milder than oregano. This aromatic herb is rich in antioxidants, vitamins A and C, and essential minerals. Marjoram contains carvacrol and thymol, compounds with powerful antimicrobial and anti-inflammatory properties. The herb has been used traditionally to support digestive health, reduce inflammation, and promote relaxation. Marjoram is also known for its ability to help regulate hormones and support women's health. The gentle, sweet flavor makes it perfect for seasoning meats, vegetables, and Mediterranean dishes. It's particularly popular in Italian and Greek cuisines.",
    descriptionAr: "البردقوش الحلو من ساحل مصر المتوسطي، يقدم نكهة رقيقة وحمضية قليلاً ألطف من الأوريجانو. هذا العشب العطري غني بمضادات الأكسدة والفيتامينات A و C والمعادن الأساسية. يحتوي البردقوش على الكارفاكرول والثيمول، مركبات لها خصائص مضادة للميكروبات ومضادة للالتهابات قوية. استُخدم العشب تقليدياً لدعم صحة الجهاز الهضمي وتقليل الالتهابات وتعزيز الاسترخاء. البردقوش معروف أيضاً بقدرته على المساعدة في تنظيم الهرمونات ودعم صحة المرأة. النكهة اللطيفة والحلوة تجعله مثالياً لتتبيل اللحوم والخضروات والأطباق المتوسطية. إنه شائع بشكل خاص في المأكولات الإيطالية واليونانية.",
    benefits: ["Digestive support", "Anti-inflammatory", "Antimicrobial", "Hormone regulation", "Women's health", "Relaxation"],
    benefitsAr: ["دعم الهضم", "مضاد للالتهابات", "مضاد للميكروبات", "تنظيم الهرمونات", "صحة المرأة", "الاسترخاء"],
    uses: ["Meat seasoning", "Vegetable dishes", "Mediterranean cooking", "Digestive tea", "Hormone support", "Relaxation tea"],
    usesAr: ["تتبيل اللحوم", "أطباق الخضروات", "الطبخ المتوسطي", "شاي هضمي", "دعم الهرمونات", "شاي الاسترخاء"],
    origin: "Egypt",
    rating: 4.6,
    reviews: 94,
    inStock: true,
    weight: "25g",
    shelfLife: "2 years"
  },
  {
    id: 23,
    name: "Tarragon",
    nameAr: "الطرخون",
    category: "culinary",
    price: 2.79,
    image: "https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "French tarragon from Egypt's herb gardens, offering a distinctive anise-like flavor that's essential in French cuisine. This aromatic herb is rich in vitamins A, C, and B-complex, along with minerals like iron and manganese. Tarragon contains estragole, a compound that gives it its unique flavor and has been shown to have antimicrobial properties. The herb has been used traditionally to support digestive health, stimulate appetite, and help with sleep disorders. Tarragon is also known for its ability to help regulate blood sugar levels and support heart health. The strong, distinctive flavor makes it perfect for seasoning chicken, fish, and egg dishes, as well as making tarragon vinegar.",
    descriptionAr: "الطرخون الفرنسي من حدائق الأعشاب في مصر، يقدم نكهة يانسونية مميزة ضرورية في المطبخ الفرنسي. هذا العشب العطري غني بالفيتامينات A و C و B-complex، جنباً إلى جنب مع المعادن مثل الحديد والمنغنيز. يحتوي الطرخون على الإستراغول، مركب يعطيه نكهته الفريدة وثبت أن له خصائص مضادة للميكروبات. استُخدم العشب تقليدياً لدعم صحة الجهاز الهضمي وتحفيز الشهية والمساعدة في اضطرابات النوم. الطرخون معروف أيضاً بقدرته على المساعدة في تنظيم مستويات سكر الدم ودعم صحة القلب. النكهة القوية والمميزة تجعله مثالياً لتتبيل الدجاج والأسماك وأطباق البيض، وكذلك صنع خل الطرخون.",
    benefits: ["Digestive support", "Appetite stimulation", "Sleep support", "Blood sugar regulation", "Heart health", "Antimicrobial"],
    benefitsAr: ["دعم الهضم", "تحفيز الشهية", "دعم النوم", "تنظيم سكر الدم", "صحة القلب", "مضاد للميكروبات"],
    uses: ["French cooking", "Chicken seasoning", "Fish dishes", "Digestive tea", "Sleep aid", "Tarragon vinegar"],
    usesAr: ["الطبخ الفرنسي", "تتبيل الدجاج", "أطباق الأسماك", "شاي هضمي", "مساعد النوم", "خل الطرخون"],
    origin: "Egypt",
    rating: 4.7,
    reviews: 83,
    inStock: true,
    weight: "20g",
    shelfLife: "2 years"
  },
  // Tea Herbs
  {
    id: 24,
    name: "Hibiscus",
    nameAr: "الكركديه",
    category: "tea",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1563122797-6c3c2b9cb5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Vibrant hibiscus flowers from Egypt's tropical gardens, creating a tart, cranberry-like tea that's both refreshing and healthful. These beautiful flowers are rich in vitamin C, antioxidants, and anthocyanins that give them their deep red color. Hibiscus tea has been shown to help lower blood pressure and support cardiovascular health. The flowers contain organic acids that may help with weight management and support liver health. Hibiscus is also known for its ability to help reduce cholesterol levels and support immune function. The tart, refreshing flavor makes it perfect for both hot and iced teas, and it's naturally caffeine-free.",
    descriptionAr: "زهور الكركديه الزاهية من الحدائق الاستوائية في مصر، تخلق شاياً حامضاً يشبه التوت البري منعش ومفيد للصحة. هذه الزهور الجميلة غنية بفيتامين C ومضادات الأكسدة والأنثوسيانين التي تعطيها لونها الأحمر العميق. ثبت أن شاي الكركديه يساعد في خفض ضغط الدم ودعم صحة القلب والأوعية الدموية. تحتوي الزهور على أحماض عضوية قد تساعد في إدارة الوزن ودعم صحة الكبد. الكركديه معروف أيضاً بقدرته على المساعدة في تقليل مستويات الكوليسترول ودعم وظائف المناعة. النكهة الحامضة والمنعشة تجعله مثالياً للشاي الساخن والبارد، وهو خالي من الكافيين بشكل طبيعي.",
    benefits: ["Blood pressure support", "Cardiovascular health", "Weight management", "Liver support", "Cholesterol reduction", "Immune support"],
    benefitsAr: ["دعم ضغط الدم", "صحة القلب والأوعية الدموية", "إدارة الوزن", "دعم الكبد", "تقليل الكوليسترول", "دعم المناعة"],
    uses: ["Hot tea", "Iced tea", "Blood pressure support", "Weight management", "Liver health", "Cardiovascular support"],
    usesAr: ["شاي ساخن", "شاي مثلج", "دعم ضغط الدم", "إدارة الوزن", "صحة الكبد", "دعم القلب والأوعية الدموية"],
    origin: "Egypt",
    rating: 4.8,
    reviews: 145,
    badge: "Heart Health",
    inStock: true,
    weight: "50g",
    shelfLife: "2 years"
  },
  {
    id: 25,
    name: "Rooibos",
    nameAr: "الرويبوس",
    category: "tea",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Premium rooibos from Egypt's high-altitude regions, offering a naturally sweet, nutty flavor that's completely caffeine-free. This South African herb is rich in antioxidants, including aspalathin and nothofagin, which are unique to rooibos. The tea has been shown to help reduce inflammation, support heart health, and may help with blood sugar regulation. Rooibos is also rich in minerals like iron, calcium, and potassium, making it excellent for bone health and muscle function. The herb has been used traditionally to support digestive health and promote relaxation. The naturally sweet flavor makes it perfect for those who prefer tea without added sugar, and it's safe for children and pregnant women.",
    descriptionAr: "الرويبوس الممتاز من المناطق عالية الارتفاع في مصر، يقدم نكهة حلوة وجوزية طبيعياً خالية تماماً من الكافيين. هذا العشب الجنوب أفريقي غني بمضادات الأكسدة، بما في ذلك الأسبالاثين والنوثوفاجين، وهما فريدان للرويبوس. ثبت أن الشاي يساعد في تقليل الالتهابات ودعم صحة القلب وقد يساعد في تنظيم سكر الدم. الرويبوس غني أيضاً بالمعادن مثل الحديد والكالسيوم والبوتاسيوم، مما يجعله ممتازاً لصحة العظام ووظائف العضلات. استُخدم العشب تقليدياً لدعم صحة الجهاز الهضمي وتعزيز الاسترخاء. النكهة الحلوة الطبيعية تجعله مثالياً لأولئك الذين يفضلون الشاي دون سكر مضاف، وهو آمن للأطفال والنساء الحوامل.",
    benefits: ["Caffeine-free", "Antioxidant rich", "Heart health", "Blood sugar support", "Bone health", "Digestive support"],
    benefitsAr: ["خالي من الكافيين", "غني بمضادات الأكسدة", "صحة القلب", "دعم سكر الدم", "صحة العظام", "دعم الهضم"],
    uses: ["Caffeine-free tea", "Heart health", "Blood sugar support", "Bone health", "Digestive tea", "Children's tea"],
    usesAr: ["شاي خالي من الكافيين", "صحة القلب", "دعم سكر الدم", "صحة العظام", "شاي هضمي", "شاي الأطفال"],
    origin: "Egypt",
    rating: 4.9,
    reviews: 178,
    badge: "Caffeine-Free",
    inStock: true,
    weight: "50g",
    shelfLife: "3 years"
  },
  {
    id: 26,
    name: "Lemongrass",
    nameAr: "عشب الليمون",
    category: "tea",
    price: 2.29,
    image: "https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Fresh lemongrass stalks from Egypt's tropical gardens, offering a bright, citrusy flavor that's both refreshing and therapeutic. This aromatic herb is rich in citral, a compound that gives it its distinctive lemon scent and has antimicrobial properties. Lemongrass has been used traditionally to support digestive health, reduce inflammation, and promote relaxation. The herb contains antioxidants that help fight free radicals and support overall wellness. Lemongrass is also known for its ability to help reduce anxiety and support healthy sleep patterns. The bright, citrusy flavor makes it perfect for both hot and iced teas, and it's commonly used in Asian cuisines for its aromatic properties.",
    descriptionAr: "سيقان عشب الليمون الطازجة من الحدائق الاستوائية في مصر، تقدم نكهة حمضيات لامعة منعشة وعلاجية. هذا العشب العطري غني بالسترال، مركب يعطيه رائحة الليمون المميزة وله خصائص مضادة للميكروبات. استُخدم عشب الليمون تقليدياً لدعم صحة الجهاز الهضمي وتقليل الالتهابات وتعزيز الاسترخاء. يحتوي العشب على مضادات أكسدة تساعد في مكافحة الجذور الحرة ودعم العافية العامة. عشب الليمون معروف أيضاً بقدرته على المساعدة في تقليل القلق ودعم أنماط النوم الصحية. النكهة الحمضية اللامعة تجعله مثالياً للشاي الساخن والبارد، ويُستخدم عادة في المأكولات الآسيوية لخصائصه العطرية.",
    benefits: ["Digestive support", "Antimicrobial", "Anti-inflammatory", "Anxiety reduction", "Sleep support", "Antioxidant"],
    benefitsAr: ["دعم الهضم", "مضاد للميكروبات", "مضاد للالتهابات", "تقليل القلق", "دعم النوم", "مضاد للأكسدة"],
    uses: ["Digestive tea", "Relaxation tea", "Asian cooking", "Aromatherapy", "Sleep aid", "Anti-anxiety"],
    usesAr: ["شاي هضمي", "شاي الاسترخاء", "الطبخ الآسيوي", "العلاج بالعطور", "مساعد النوم", "مضاد للقلق"],
    origin: "Egypt",
    rating: 4.6,
    reviews: 112,
    inStock: true,
    weight: "30g",
    shelfLife: "2 years"
  },
  {
    id: 27,
    name: "Jasmine",
    nameAr: "الياسمين",
    category: "tea",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1563122797-6c3c2b9cb5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Fragrant jasmine flowers from Egypt's flower gardens, creating an exquisitely aromatic tea that's both calming and uplifting. These delicate white flowers are rich in antioxidants and have been used in traditional medicine for centuries. Jasmine tea has been shown to help reduce stress, promote relaxation, and support cardiovascular health. The flowers contain compounds that may help with weight management and support healthy metabolism. Jasmine is also known for its ability to help improve mood and reduce anxiety naturally. The delicate, floral aroma makes it perfect for evening relaxation and meditation. Often blended with green tea, jasmine creates a sophisticated, aromatic experience.",
    descriptionAr: "زهور الياسمين العطرة من حدائق الزهور في مصر، تخلق شاياً عطرياً رائعاً مهدئ ومنشط. هذه الزهور البيضاء الرقيقة غنية بمضادات الأكسدة واستُخدمت في الطب التقليدي لقرون. ثبت أن شاي الياسمين يساعد في تقليل التوتر وتعزيز الاسترخاء ودعم صحة القلب والأوعية الدموية. تحتوي الزهور على مركبات قد تساعد في إدارة الوزن ودعم التمثيل الغذائي الصحي. الياسمين معروف أيضاً بقدرته على المساعدة في تحسين المزاج وتقليل القلق بشكل طبيعي. العطر الزهري الرقيق يجعله مثالياً للاسترخاء المسائي والتأمل. غالباً ما يُخلط مع الشاي الأخضر، الياسمين يخلق تجربة عطرية راقية.",
    benefits: ["Stress reduction", "Relaxation", "Cardiovascular health", "Weight management", "Mood improvement", "Anti-anxiety"],
    benefitsAr: ["تقليل التوتر", "الاسترخاء", "صحة القلب والأوعية الدموية", "إدارة الوزن", "تحسين المزاج", "مضاد للقلق"],
    uses: ["Relaxation tea", "Evening tea", "Meditation", "Stress relief", "Mood support", "Aromatherapy"],
    usesAr: ["شاي الاسترخاء", "شاي مسائي", "التأمل", "تخفيف التوتر", "دعم المزاج", "العلاج بالعطور"],
    origin: "Egypt",
    rating: 4.8,
    reviews: 156,
    badge: "Relaxation",
    inStock: true,
    weight: "25g",
    shelfLife: "2 years"
  },
  // Aromatic Herbs
  {
    id: 28,
    name: "Rose Petals",
    nameAr: "بتلات الورد",
    category: "aromatic",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Premium rose petals from Egypt's rose gardens, offering an exquisite floral aroma and delicate flavor. These beautiful petals are rich in vitamin C, antioxidants, and essential oils that provide numerous health benefits. Rose petals have been used for centuries in traditional medicine to support heart health, reduce inflammation, and promote emotional well-being. The petals contain compounds that may help with skin health and support healthy aging. Rose is also known for its ability to help reduce stress and promote relaxation. The delicate, floral flavor makes it perfect for teas, desserts, and aromatherapy. Often used in Middle Eastern and Indian cuisines for their aromatic properties.",
    descriptionAr: "بتلات الورد الممتازة من حدائق الورد في مصر، تقدم عطراً زهرياً رائعاً ونكهة رقيقة. هذه البتلات الجميلة غنية بفيتامين C ومضادات الأكسدة والزيوت الأساسية التي توفر فوائد صحية عديدة. استُخدمت بتلات الورد لقرون في الطب التقليدي لدعم صحة القلب وتقليل الالتهابات وتعزيز الرفاهية العاطفية. تحتوي البتلات على مركبات قد تساعد في صحة الجلد ودعم الشيخوخة الصحية. الورد معروف أيضاً بقدرته على المساعدة في تقليل التوتر وتعزيز الاسترخاء. النكهة الزهرية الرقيقة تجعلها مثالية للشاي والحلويات والعلاج بالعطور. تُستخدم غالباً في المأكولات الشرق أوسطية والهندية لخصائصها العطرية.",
    benefits: ["Heart health", "Anti-inflammatory", "Emotional well-being", "Skin health", "Stress reduction", "Antioxidant"],
    benefitsAr: ["صحة القلب", "مضاد للالتهابات", "الرفاهية العاطفية", "صحة الجلد", "تقليل التوتر", "مضاد للأكسدة"],
    uses: ["Floral tea", "Desserts", "Aromatherapy", "Skin care", "Emotional support", "Middle Eastern cooking"],
    usesAr: ["شاي زهري", "الحلويات", "العلاج بالعطور", "العناية بالبشرة", "الدعم العاطفي", "الطبخ الشرق أوسطي"],
    origin: "Egypt",
    rating: 4.9,
    reviews: 189,
    badge: "Premium",
    inStock: true,
    weight: "20g",
    shelfLife: "2 years"
  },
  {
    id: 29,
    name: "Sandalwood",
    nameAr: "الصندل",
    category: "aromatic",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sacred sandalwood from Egypt's aromatic gardens, offering a deep, woody fragrance that's been treasured for millennia. This precious wood is rich in santalol, a compound that provides its distinctive aroma and has been shown to have antimicrobial and anti-inflammatory properties. Sandalwood has been used in traditional medicine to support respiratory health, promote relaxation, and enhance meditation practices. The wood contains compounds that may help with skin health and support healthy aging. Sandalwood is also known for its ability to help reduce anxiety and promote mental clarity. The deep, grounding aroma makes it perfect for meditation, aromatherapy, and spiritual practices. Often used in incense, perfumes, and skincare products.",
    descriptionAr: "الصندل المقدس من الحدائق العطرية في مصر، يقدم عطراً خشبياً عميقاً كان محبوباً لآلاف السنين. هذا الخشب الثمين غني بالسنتالول، مركب يوفر عطره المميز وثبت أن له خصائص مضادة للميكروبات ومضادة للالتهابات. استُخدم الصندل في الطب التقليدي لدعم صحة الجهاز التنفسي وتعزيز الاسترخاء وتحسين ممارسات التأمل. يحتوي الخشب على مركبات قد تساعد في صحة الجلد ودعم الشيخوخة الصحية. الصندل معروف أيضاً بقدرته على المساعدة في تقليل القلق وتعزيز الوضوح العقلي. العطر العميق والمتأصل يجعله مثالياً للتأمل والعلاج بالعطور والممارسات الروحية. يُستخدم غالباً في البخور والعطور ومنتجات العناية بالبشرة.",
    benefits: ["Respiratory health", "Relaxation", "Meditation support", "Skin health", "Mental clarity", "Anti-anxiety"],
    benefitsAr: ["صحة الجهاز التنفسي", "الاسترخاء", "دعم التأمل", "صحة الجلد", "الوضوح العقلي", "مضاد للقلق"],
    uses: ["Meditation", "Aromatherapy", "Incense", "Skincare", "Spiritual practices", "Respiratory support"],
    usesAr: ["التأمل", "العلاج بالعطور", "البخور", "العناية بالبشرة", "الممارسات الروحية", "دعم الجهاز التنفسي"],
    origin: "Egypt",
    rating: 4.8,
    reviews: 134,
    badge: "Sacred",
    inStock: true,
    weight: "15g",
    shelfLife: "5 years"
  },
  {
    id: 30,
    name: "Frankincense",
    nameAr: "اللبان",
    category: "aromatic",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sacred frankincense resin from Egypt's ancient trade routes, offering a rich, balsamic fragrance that's been used in spiritual and medicinal practices for over 5000 years. This precious resin is rich in boswellic acids, compounds that have been shown to have powerful anti-inflammatory and immune-supporting properties. Frankincense has been used traditionally to support respiratory health, promote emotional well-being, and enhance spiritual practices. The resin contains compounds that may help with joint health and support healthy aging. Frankincense is also known for its ability to help reduce stress and promote mental clarity. The rich, grounding aroma makes it perfect for meditation, prayer, and aromatherapy. Often used in incense, essential oils, and traditional medicine.",
    descriptionAr: "راتنج اللبان المقدس من طرق التجارة القديمة في مصر، يقدم عطراً بلسمياً غنياً استُخدم في الممارسات الروحية والطبية لأكثر من 5000 عام. هذا الراتنج الثمين غني بأحماض البوزويلك، مركبات ثبت أن لها خصائص مضادة للالتهابات وداعمة للمناعة قوية. استُخدم اللبان تقليدياً لدعم صحة الجهاز التنفسي وتعزيز الرفاهية العاطفية وتحسين الممارسات الروحية. يحتوي الراتنج على مركبات قد تساعد في صحة المفاصل ودعم الشيخوخة الصحية. اللبان معروف أيضاً بقدرته على المساعدة في تقليل التوتر وتعزيز الوضوح العقلي. العطر الغني والمتأصل يجعله مثالياً للتأمل والصلاة والعلاج بالعطور. يُستخدم غالباً في البخور والزيوت الأساسية والطب التقليدي.",
    benefits: ["Anti-inflammatory", "Immune support", "Respiratory health", "Joint health", "Mental clarity", "Spiritual support"],
    benefitsAr: ["مضاد للالتهابات", "دعم المناعة", "صحة الجهاز التنفسي", "صحة المفاصل", "الوضوح العقلي", "الدعم الروحي"],
    uses: ["Incense", "Aromatherapy", "Meditation", "Spiritual practices", "Respiratory support", "Joint health"],
    usesAr: ["البخور", "العلاج بالعطور", "التأمل", "الممارسات الروحية", "دعم الجهاز التنفسي", "صحة المفاصل"],
    origin: "Egypt",
    rating: 4.9,
    reviews: 167,
    badge: "Sacred",
    inStock: true,
    weight: "10g",
    shelfLife: "10 years"
  }
];

export const categoriesData: Category[] = [
  {
    id: "culinary",
    name: "Culinary Herbs",
    nameAr: "الأعشاب الطهوية",
    description: "Fresh herbs for cooking and seasoning",
    descriptionAr: "أعشاب طازجة للطبخ والتتبيل",
    icon: "ChefHat",
    color: "from-green-500 to-emerald-600",
    herbs: herbsData.filter(herb => herb.category === "culinary")
  },
  {
    id: "medicinal",
    name: "Medicinal Herbs",
    nameAr: "الأعشاب الطبية",
    description: "Traditional herbs for health and wellness",
    descriptionAr: "أعشاب تقليدية للصحة والعافية",
    icon: "Heart",
    color: "from-red-500 to-pink-600",
    herbs: herbsData.filter(herb => herb.category === "medicinal")
  },
  {
    id: "aromatic",
    name: "Aromatic Herbs",
    nameAr: "الأعشاب العطرية",
    description: "Fragrant herbs for teas and aromatherapy",
    descriptionAr: "أعشاب عطرة للشاي والعلاج بالعطور",
    icon: "Flower",
    color: "from-purple-500 to-violet-600",
    herbs: herbsData.filter(herb => herb.category === "aromatic")
  },
  {
    id: "tea",
    name: "Tea Herbs",
    nameAr: "أعشاب الشاي",
    description: "Specially selected herbs for brewing",
    descriptionAr: "أعشاب مختارة خصيصاً للتحضير",
    icon: "Coffee",
    color: "from-amber-500 to-orange-600",
    herbs: herbsData.filter(herb => herb.category === "tea")
  }
];

// Health benefits mapping
export const healthBenefitsMapping = {
  "heart-health": {
    title: "Heart Health",
    titleAr: "صحة القلب",
    herbs: herbsData.filter(herb => 
      herb.benefits.some(benefit => 
        benefit.toLowerCase().includes("heart") || 
        benefit.toLowerCase().includes("cardiovascular") ||
        benefit.toLowerCase().includes("blood pressure") ||
        benefit.toLowerCase().includes("cholesterol")
      )
    )
  },
  "brain-boost": {
    title: "Brain Boost",
    titleAr: "تعزيز الدماغ",
    herbs: herbsData.filter(herb => 
      herb.benefits.some(benefit => 
        benefit.toLowerCase().includes("memory") || 
        benefit.toLowerCase().includes("cognitive") ||
        benefit.toLowerCase().includes("brain") ||
        benefit.toLowerCase().includes("mental clarity")
      )
    )
  },
  "immune-support": {
    title: "Immune Support",
    titleAr: "تقوية المناعة",
    herbs: herbsData.filter(herb => 
      herb.benefits.some(benefit => 
        benefit.toLowerCase().includes("immune") || 
        benefit.toLowerCase().includes("antimicrobial") ||
        benefit.toLowerCase().includes("antiviral") ||
        benefit.toLowerCase().includes("infection")
      )
    )
  },
  "natural-energy": {
    title: "Natural Energy",
    titleAr: "الطاقة الطبيعية",
    herbs: herbsData.filter(herb => 
      herb.benefits.some(benefit => 
        benefit.toLowerCase().includes("energy") || 
        benefit.toLowerCase().includes("metabolism") ||
        benefit.toLowerCase().includes("weight management") ||
        benefit.toLowerCase().includes("vitality")
      )
    )
  },
  "antioxidants": {
    title: "Antioxidants",
    titleAr: "مضادات الأكسدة",
    herbs: herbsData.filter(herb => 
      herb.benefits.some(benefit => 
        benefit.toLowerCase().includes("antioxidant") || 
        benefit.toLowerCase().includes("anti-inflammatory") ||
        benefit.toLowerCase().includes("free radicals") ||
        benefit.toLowerCase().includes("aging")
      )
    )
  },
  "overall-wellness": {
    title: "Overall Wellness",
    titleAr: "العافية العامة",
    herbs: herbsData.filter(herb => 
      herb.benefits.some(benefit => 
        benefit.toLowerCase().includes("wellness") || 
        benefit.toLowerCase().includes("health") ||
        benefit.toLowerCase().includes("digestive") ||
        benefit.toLowerCase().includes("relaxation")
      )
    )
  }
};
