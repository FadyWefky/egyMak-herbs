import type { TestimonialItem } from "./localeTypes";

export const en = {
  common: {
    close: "Close",
    loading: "Loading…",
    exploreAllHerbs: "Explore All Herbs",
    exploreProducts: "Explore Products",
    learnMore: "Learn More",
    viewDetails: "View Details",
    viewAllProducts: "View All Products",
    exploreAllCategories: "Explore All Categories",
    backToHome: "Back to Home",
    copyright: "© 2026 EGYMAK. All rights reserved.",
  },
  hero: {
    badge: "100% Natural & Organic",
    brandLine: "Premium Egyptian Herbs",
    imageAlt: "Premium Egyptian herbs — EGYMAK",
    statPremiumHerbs: "Premium Herbs",
    statCategories: "Main Categories",
    statNatural: "Natural",
  },
  featured: {
    subtitle:
      "Handpicked premium herbs for your culinary and wellness journey",
  },
  newsletter: {
    title: "Stay Updated",
    subtitle:
      "Subscribe to our newsletter and get the latest news and special offers on natural herbs",
    emailPlaceholder: "Enter your email",
    subscribe: "Subscribe",
    success: "Successfully subscribed!",
    benefitOffers: "Exclusive Offers",
    benefitTips: "Health Tips",
    benefitNew: "New Products",
  },
  footer: {
    faq: "FAQ",
    shippingInfo: "Shipping Info",
    returns: "Returns",
    support: "Support",
    paymentMethods: "Payment Methods",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    locationShort: "Cairo, Egypt",
    logoAlt: "EGYMAK — Premium Egyptian Herbs logo",
  },
  contactForm: {
    heading: "Get In Touch",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your message…",
    send: "Send",
    sending: "Sending…",
    fallbackHint: "Or contact us directly: egymak@gmail.com",
    errorName: "Name is required",
    errorEmailRequired: "Email is required",
    errorEmailInvalid: "Invalid email format",
    errorMessage: "Message is required",
    successMessage:
      "Your email client has opened! Please send the message from there.",
    errorSend:
      "Failed to send message. Please try again or contact us directly.",
  },
  herbModal: {
    description: "Description",
    benefits: "Benefits",
    commonUses: "Common Uses",
    reviewsLabel: "reviews",
  },
  products: {
    title: "All Products",
    subtitle:
      "Discover our complete collection of premium natural herbs",
    searchPlaceholder: "Search herbs…",
    sortLabel: "Sort by",
    categoryLabel: "Category",
    productsFound: "products found",
    productSingular: "product",
    noResultsTitle: "No products found",
    noResultsHint:
      "Try searching with different keywords or browse other categories",
    results: "{{count}} products found",
    cat: {
      all: "All",
      culinary: "Culinary",
      medicinal: "Medicinal",
      aromatic: "Aromatic",
      tea: "Tea",
    },
    sortName: "Name",
    sortRating: "Rating",
    sortReviews: "Reviews",
  },
  categoriesPage: {
    title: "Herb Categories",
    subtitle:
      "Explore our wide collection of natural herbs categorized by usage",
    products: "products",
    listing: "{{count}} products",
    back: "Back to Home",
  },
  healthBenefitsPage: {
    title: "Health Benefits",
    back: "Back to Home",
    subtitle: "Learn how our herbs support your wellness",
  },
  testimonials: {
    title: "Customer Reviews",
    subtitle:
      "Discover what our customers say about their experience with Egymak herbs",
    statHappyCustomers: "Happy Customers",
    statHerbVarieties: "Herb Varieties",
    statCustomerRating: "Customer Rating",
    statYearsExperience: "Years Experience",
    items: [
      {
        name: "Fatima Ahmed",
        location: "Cairo, Egypt",
        text: "Herbs from Egymak have completely transformed my life. Excellent quality and amazing results for overall health.",
        herb: "Chamomile & Ginger",
      },
      {
        name: "Mohamed Ali",
        location: "Alexandria, Egypt",
        text: "I've been using Egymak herbs for two years. Amazing taste and clear health benefits. Highly recommended.",
        herb: "Peppermint & Lavender",
      },
      {
        name: "Sara Mahmoud",
        location: "Luxor, Egypt",
        text: "Turmeric and Basil from Egymak have helped me greatly in improving digestion and strengthening immunity.",
        herb: "Turmeric & Basil",
      },
      {
        name: "Ahmed Hassan",
        location: "Hurghada, Egypt",
        text: "Very high quality and excellent customer service. The herbs are fresh and very beneficial.",
        herb: "Sage & Thyme",
      },
      {
        name: "Nour El-Din",
        location: "Aswan, Egypt",
        text: "100% natural herbs from Egypt. I recommend them to anyone looking for natural health.",
        herb: "Cinnamon & Lemon Balm",
      },
      {
        name: "Mariam Saad",
        location: "Minya, Egypt",
        text: "Amazing experience with Egymak herbs. They helped me relax and improve sleep.",
        herb: "Chamomile & Lavender",
      },
    ] as TestimonialItem[],
  },
  healthBenefits: {
    title: "Health Benefits",
    subtitle:
      "Discover how natural herbs can enhance your health and wellness",
    ctaTitle: "Start Your Natural Health Journey",
    ctaSubtitle:
      "Join thousands of people who have chosen natural herbs to enhance their lives",
    cards: {
      "heart-health": {
        title: "Heart Health",
        description:
          "Natural herbs support heart health and circulation",
      },
      "brain-boost": {
        title: "Brain Boost",
        description: "Enhance memory and cognitive functions",
      },
      "immune-support": {
        title: "Immune Support",
        description:
          "Strengthen immune system and disease resistance",
      },
      "natural-energy": {
        title: "Natural Energy",
        description: "Boost energy and vitality naturally",
      },
      antioxidants: {
        title: "Antioxidants",
        description: "Fight free radicals and aging",
      },
      "overall-wellness": {
        title: "Overall Wellness",
        description: "Improve overall health and wellness",
      },
    },
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What types of herbs are available?",
        answer:
          "We offer over 50 types of fresh and dried natural herbs, including medicinal, culinary, and aromatic herbs.",
      },
      {
        question: "How are products shipped?",
        answer:
          "We use safe and fast shipping methods with special packaging to preserve herb quality.",
      },
      {
        question: "Are the herbs organic?",
        answer:
          "Yes, all our herbs are 100% natural and grown without harmful chemicals.",
      },
    ],
  },
  legal: {
    terms: {
      pageTitle: "Terms of Service",
      sectionTitle: "Terms and Conditions",
      p1: "By using our website, you agree to these terms and conditions.",
      p2: "We reserve the right to modify these terms at any time.",
    },
    privacy: {
      pageTitle: "Privacy Policy",
      sectionTitle: "Data Protection",
      p1: "We respect your privacy and protect your personal data in line with applicable laws.",
      p2: "We only collect information needed to process orders and improve your experience.",
    },
    cookies: {
      pageTitle: "Cookie Policy",
      sectionTitle: "Cookie Usage",
      p1: "We use cookies to remember preferences and measure site performance.",
      p2: "You can control cookies through your browser settings.",
    },
    shipping: {
      pageTitle: "Shipping Information",
      sectionTitle: "Available Shipping Methods",
      p1: "We ship domestically and internationally with trusted carriers.",
      p2: "Delivery times depend on your location and selected service.",
    },
    returns: {
      pageTitle: "Returns Policy",
      sectionTitle: "Return Conditions",
      p1: "You may request a return within the period stated at purchase, if products meet our conditions.",
      p2: "Contact support with your order number to start a return.",
    },
    support: {
      pageTitle: "Customer Support",
      sectionTitle: "Contact Us",
      p1: "Our team is available to help with orders, products, and general questions.",
      p2: "Reach us by email or phone listed in the footer.",
      p3: "We aim to respond as quickly as possible during business hours.",
    },
  },
  notFound: {
    title: "404",
    message: "Oops! Page not found",
    homeLink: "Return to Home",
  },
  healthBenefitsDetail: {
    notFound: "Health Benefit Not Found",
    backHome: "Back to Home",
    noHerbs: "No herbs available",
    noHerbsHint: "More herbs are being added to this category.",
    intro: "Herbs that may support this wellness area:",
    discoverCount: "Discover {{count}} natural herbs that support this wellness area.",
  },
  herbStats: {
    title: "Herb Statistics",
    subtitle:
      "Discover the amazing numbers behind our diverse collection of premium natural herbs",
    labels: {
      varieties: "Herb Varieties",
      categories: "Main Categories",
      rating: "Average Rating",
      reviews: "Customer Reviews",
      premium: "Premium Herbs",
      egyptian: "Egyptian Herbs",
    },
    descriptions: {
      varieties:
        "Comprehensive collection of natural herbs",
      categories: "Diverse categories for different uses",
      rating: "High quality endorsed by customers",
      reviews: "Satisfied customer opinions worldwide",
      premium: "Herbs with quality certifications",
      egyptian: "Cultivated in fertile Egyptian lands",
    },
    whyTitle: "Why Choose Egymak Herbs?",
    why1: "Authentic Egyptian Quality",
    why2: "Accurate Scientific Information",
  },
  // Navigation
  home: "Home",
  categories: "Categories",
  about: "About",
  contact: "Contact",
  cart: "Cart",
  heroTitle: "Premium Natural Herbs",
  heroSubtitle:
    "Discover the finest collection of organic herbs for cooking, healing, and wellness",
  shopNow: "Shop Now",
  learnMore: "Learn More",
  categoriesTitle: "Herb Categories",
  culinary: "Culinary Herbs",
  culinaryDesc: "Fresh herbs for cooking and seasoning",
  medicinal: "Medicinal Herbs",
  medicinalDesc: "Traditional herbs for health and wellness",
  aromatic: "Aromatic Herbs",
  aromaticDesc: "Fragrant herbs for teas and aromatherapy",
  tea: "Tea Herbs",
  teaDesc: "Specially selected herbs for brewing",
  featuredProducts: "Featured Products",
  addToCart: "Add to Cart",
  viewDetails: "View Details",
  footerAbout: "About EGYMAK",
  footerDesc:
    "Your trusted source for premium quality herbs and natural products.",
  quickLinks: "Quick Links",
  customerCare: "Customer Care",
  followUs: "Follow Us",
  aboutTitle: "About Egymak",
  aboutParagraph1:
    "Egymak is a leading company in the field of aromatic and medicinal plants, dedicated to providing high-quality natural products sourced from Egypt’s rich agricultural lands. With a commitment to sustainability and innovation, Egymak partners with local farmers to ensure the finest herbs and botanicals reach global markets.",
  aboutParagraph2:
    "Our mission is to promote wellness and support healthy lifestyles by delivering pure, organic, and ethically harvested products. Egymak’s portfolio includes dried herbs, essential oils, and herbal teas, all processed with state-of-the-art technology to preserve their natural benefits.",
  aboutParagraph3:
    "We believe in transparency, quality, and customer satisfaction. Join us on our journey to bring the best of Egypt’s nature to the world.",
  aboutImageAlt: "Egymak aromatic herbs",
  getintouch: {
    title: "Get in Touch",
    subtitle:
      "We'd love to hear from you. Reach out to us via any method below.",
    subtitleMail:
      "Have questions or ideas? We'd love to hear from you! Reach out to us via email and our team will get back to you promptly.",
    subtitleLocation:
      "Visit us today! See our products in person and experience exceptional service at our location. We can't wait to welcome you!",
    subtitlePhone:
      "Ready to order? Call us now for a quick and easy purchase! Our team is standing by to assist you.",
    location: "Location",
    address: "123 Herbal St, Cairo, Egypt",
    phone: "Phone",
    phoneNumber: "+201032013000",
    email: "Email",
    emailAddress: "egymak@gmail.com",
    facebook: "Facebook",
    instagram: "Instagram",
    twitter: "Twitter",
    linkedin: "LinkedIn",
    socialMedia: "Social Media",
  },
};
