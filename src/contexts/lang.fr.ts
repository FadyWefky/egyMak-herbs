import type { TestimonialItem } from "./localeTypes";

export const fr = {
  common: {
    close: "Fermer",
    loading: "Chargement…",
    exploreAllHerbs: "Explorer toutes les herbes",
    exploreProducts: "Explorer les produits",
    learnMore: "En savoir plus",
    viewDetails: "Voir les détails",
    viewAllProducts: "Voir tous les produits",
    exploreAllCategories: "Explorer toutes les catégories",
    backToHome: "Retour à l’accueil",
    copyright: "© 2026 EGYMAK. Tous droits réservés.",
  },
  hero: {
    badge: "100 % naturel et biologique",
    brandLine: "Herbes égyptiennes premium",
    imageAlt: "Herbes égyptiennes premium — EGYMAK",
    statPremiumHerbs: "Herbes premium",
    statCategories: "Catégories principales",
    statNatural: "Naturel",
  },
  featured: {
    subtitle:
      "Herbes premium sélectionnées pour votre cuisine et votre bien-être",
  },
  newsletter: {
    title: "Restez informé",
    subtitle:
      "Abonnez-vous à notre newsletter pour les actualités et offres sur les herbes naturelles",
    emailPlaceholder: "Votre e-mail",
    subscribe: "S’abonner",
    success: "Inscription réussie !",
    benefitOffers: "Offres exclusives",
    benefitTips: "Conseils santé",
    benefitNew: "Nouveaux produits",
  },
  footer: {
    faq: "FAQ",
    shippingInfo: "Livraison",
    returns: "Retours",
    support: "Assistance",
    paymentMethods: "Moyens de paiement",
    privacyPolicy: "Politique de confidentialité",
    termsOfService: "Conditions d’utilisation",
    cookiePolicy: "Politique des cookies",
    locationShort: "Le Caire, Égypte",
    logoAlt: "Logo EGYMAK — Herbes égyptiennes premium",
  },
  contactForm: {
    heading: "Contactez-nous",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "Votre e-mail",
    messagePlaceholder: "Votre message…",
    send: "Envoyer",
    sending: "Envoi en cours…",
    fallbackHint: "Ou contactez-nous directement : egymak@gmail.com",
    errorName: "Le nom est requis",
    errorEmailRequired: "L’e-mail est requis",
    errorEmailInvalid: "Format d’e-mail invalide",
    errorMessage: "Le message est requis",
    successMessage:
      "Votre client mail s’est ouvert ! Veuillez envoyer le message depuis celui-ci.",
    errorSend:
      "Échec de l’envoi. Réessayez ou contactez-nous directement.",
  },
  herbModal: {
    description: "Description",
    benefits: "Bienfaits",
    commonUses: "Usages courants",
    reviewsLabel: "avis",
  },
  products: {
    title: "Tous les produits",
    subtitle:
      "Découvrez notre collection complète d’herbes naturelles premium",
    searchPlaceholder: "Rechercher des herbes…",
    sortLabel: "Trier par",
    categoryLabel: "Catégorie",
    productsFound: "produits trouvés",
    productSingular: "produit",
    noResultsTitle: "Aucun produit trouvé",
    noResultsHint:
      "Essayez d’autres mots-clés ou parcourez d’autres catégories",
    results: "{{count}} produits trouvés",
    cat: {
      all: "Tout",
      culinary: "Culinaire",
      medicinal: "Médicinal",
      aromatic: "Aromatique",
      tea: "Thé",
    },
    sortName: "Nom",
    sortRating: "Note",
    sortReviews: "Avis",
  },
  categoriesPage: {
    title: "Catégories d’herbes",
    subtitle:
      "Explorez notre large gamme d’herbes naturelles classées par usage",
    products: "produits",
    listing: "{{count}} produits",
    back: "Retour à l’accueil",
  },
  healthBenefitsPage: {
    title: "Bienfaits pour la santé",
    back: "Retour à l’accueil",
    subtitle: "Découvrez comment nos herbes soutiennent votre bien-être",
  },
  testimonials: {
    title: "Avis clients",
    subtitle:
      "Découvrez ce que nos clients disent de leur expérience avec EGYMAK",
    statHappyCustomers: "Clients satisfaits",
    statHerbVarieties: "Variétés d’herbes",
    statCustomerRating: "Note clients",
    statYearsExperience: "Années d’expérience",
    items: [
      {
        name: "Fatima Ahmed",
        location: "Le Caire, Égypte",
        text: "Les herbes EGYMAK ont transformé mon quotidien. Excellente qualité et bienfaits remarquables.",
        herb: "Camomille et gingembre",
      },
      {
        name: "Mohamed Ali",
        location: "Alexandrie, Égypte",
        text: "J’utilise les herbes EGYMAK depuis deux ans. Goût exceptionnel et effets positifs sur la santé.",
        herb: "Menthe et lavande",
      },
      {
        name: "Sara Mahmoud",
        location: "Louxor, Égypte",
        text: "Le curcuma et le basilic EGYMAK m’ont beaucoup aidée pour la digestion et l’immunité.",
        herb: "Curcuma et basilic",
      },
      {
        name: "Ahmed Hassan",
        location: "Hurghada, Égypte",
        text: "Qualité irréprochable et service client au top. Herbes fraîches et bénéfiques.",
        herb: "Sauge et thym",
      },
      {
        name: "Nour El-Din",
        location: "Assouan, Égypte",
        text: "Herbes 100 % naturelles d’Égypte. Je recommande à tous ceux qui visent une santé naturelle.",
        herb: "Cannelle et mélisse",
      },
      {
        name: "Mariam Saad",
        location: "Minya, Égypte",
        text: "Excellente expérience avec EGYMAK : détente et meilleur sommeil.",
        herb: "Camomille et lavande",
      },
    ] as TestimonialItem[],
  },
  healthBenefits: {
    title: "Bienfaits pour la santé",
    subtitle:
      "Découvrez comment les herbes naturelles peuvent améliorer votre santé",
    ctaTitle: "Commencez votre parcours bien-être naturel",
    ctaSubtitle:
      "Rejoignez des milliers de personnes qui ont choisi les herbes naturelles",
    cards: {
      "heart-health": {
        title: "Santé cardiaque",
        description:
          "Les herbes naturelles soutiennent le cœur et la circulation",
      },
      "brain-boost": {
        title: "Boost cérébral",
        description: "Améliorez mémoire et fonctions cognitives",
      },
      "immune-support": {
        title: "Immunité",
        description:
          "Renforcez le système immunitaire et la résistance",
      },
      "natural-energy": {
        title: "Énergie naturelle",
        description: "Plus d’énergie et de vitalité naturellement",
      },
      antioxidants: {
        title: "Antioxydants",
        description: "Lutte contre les radicaux libres et le vieillissement",
      },
      "overall-wellness": {
        title: "Bien-être global",
        description: "Améliorez votre santé et votre qualité de vie",
      },
    },
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "Quels types d’herbes proposez-vous ?",
        answer:
          "Plus de 50 variétés d’herbes naturelles fraîches et séchées : médicinales, culinaires et aromatiques.",
      },
      {
        question: "Comment les produits sont-ils expédiés ?",
        answer:
          "Expédition sécurisée et rapide avec emballage adapté pour préserver la qualité.",
      },
      {
        question: "Les herbes sont-elles biologiques ?",
        answer:
          "Oui, nos herbes sont 100 % naturelles et cultivées sans produits chimiques nocifs.",
      },
    ],
  },
  legal: {
    terms: {
      pageTitle: "Conditions d’utilisation",
      sectionTitle: "Conditions générales",
      p1: "En utilisant notre site, vous acceptez ces conditions.",
      p2: "Nous pouvons modifier ces conditions à tout moment.",
    },
    privacy: {
      pageTitle: "Politique de confidentialité",
      sectionTitle: "Protection des données",
      p1: "Nous respectons votre vie privée et traitons vos données conformément à la loi.",
      p2: "Nous collectons uniquement les informations nécessaires aux commandes et à l’expérience utilisateur.",
    },
    cookies: {
      pageTitle: "Politique des cookies",
      sectionTitle: "Utilisation des cookies",
      p1: "Les cookies nous aident à mémoriser vos préférences et à mesurer l’audience.",
      p2: "Vous pouvez les gérer dans les paramètres de votre navigateur.",
    },
    shipping: {
      pageTitle: "Informations de livraison",
      sectionTitle: "Modes d’expédition",
      p1: "Nous livrons en local et à l’international via des transporteurs fiables.",
      p2: "Les délais dépendent de votre adresse et du service choisi.",
    },
    returns: {
      pageTitle: "Politique de retour",
      sectionTitle: "Conditions de retour",
      p1: "Un retour peut être demandé dans le délai indiqué si les conditions sont remplies.",
      p2: "Contactez le support avec votre numéro de commande pour lancer un retour.",
    },
    support: {
      pageTitle: "Service client",
      sectionTitle: "Contactez-nous",
      p1: "Notre équipe aide pour les commandes, produits et questions générales.",
      p2: "Écrivez-nous ou appelez via les coordonnées en pied de page.",
      p3: "Nous répondons dès que possible aux heures ouvrables.",
    },
  },
  notFound: {
    title: "404",
    message: "Oups ! Page introuvable",
    homeLink: "Retour à l’accueil",
  },
  healthBenefitsDetail: {
    notFound: "Bienfaits introuvables",
    backHome: "Retour à l’accueil",
    noHerbs: "Aucune herbe disponible",
    noHerbsHint: "D’autres herbes seront bientôt ajoutées à cette catégorie.",
    intro: "Herbes pouvant soutenir ce volet du bien-être :",
    discoverCount: "Découvrez {{count}} herbes naturelles pour ce volet du bien-être.",
  },
  herbStats: {
    title: "Statistiques",
    subtitle:
      "Les chiffres clés de notre collection d’herbes naturelles premium",
    labels: {
      varieties: "Variétés d’herbes",
      categories: "Catégories principales",
      rating: "Note moyenne",
      reviews: "Avis clients",
      premium: "Herbes premium",
      egyptian: "Herbes d’Égypte",
    },
    descriptions: {
      varieties: "Une collection complète d’herbes naturelles",
      categories: "Des catégories pour chaque usage",
      rating: "Une qualité plébiscitée par nos clients",
      reviews: "Des avis clients du monde entier",
      premium: "Herbes certifiées et sélectionnées",
      egyptian: "Cultivées sur les terres fertiles d’Égypte",
    },
    whyTitle: "Pourquoi choisir EGYMAK ?",
    why1: "Qualité égyptienne authentique",
    why2: "Informations scientifiques fiables",
  },
  home: "Accueil",
  categories: "Catégories",
  about: "À propos",
  contact: "Contact",
  cart: "Panier",
  heroTitle: "Herbes Naturelles Premium",
  heroSubtitle:
    "Découvrez la plus belle collection d'herbes biologiques pour la cuisine, la guérison et le bien-être",
  shopNow: "Acheter",
  learnMore: "En savoir plus",
  categoriesTitle: "Catégories d'Herbes",
  culinary: "Herbes Culinaires",
  culinaryDesc: "Herbes fraîches pour la cuisine et l'assaisonnement",
  medicinal: "Herbes Médicinales",
  medicinalDesc: "Herbes traditionnelles pour la santé et le bien-être",
  aromatic: "Herbes Aromatiques",
  aromaticDesc: "Herbes parfumées pour les thés et l'aromathérapie",
  tea: "Herbes à Thé",
  teaDesc: "Herbes spécialement sélectionnées pour l'infusion",
  featuredProducts: "Produits Vedettes",
  addToCart: "Ajouter au Panier",
  viewDetails: "Voir Détails",
  footerAbout: "À propos EGYMAK",
  footerDesc:
    "Votre source de confiance pour des herbes de qualité premium et des produits naturels.",
  quickLinks: "Liens Rapides",
  customerCare: "Service Client",
  followUs: "Suivez-nous",
  aboutTitle: "À propos d'Egymak",
  aboutParagraph1:
    "Egymak est une entreprise leader dans le domaine des plantes aromatiques et médicinales, dédiée à fournir des produits naturels de haute qualité issus des riches terres agricoles d'Égypte. Engagée pour la durabilité et l'innovation, Egymak collabore avec des agriculteurs locaux pour garantir que les meilleures herbes et plantes atteignent les marchés mondiaux.",
  aboutParagraph2:
    "Notre mission est de promouvoir le bien-être et de soutenir des modes de vie sains en offrant des produits purs, biologiques et récoltés de manière éthique. Le portefeuille d'Egymak comprend des herbes séchées, des huiles essentielles et des tisanes, tous traités avec une technologie de pointe pour préserver leurs bienfaits naturels.",
  aboutParagraph3:
    "Nous croyons en la transparence, la qualité et la satisfaction du client. Rejoignez-nous dans notre voyage pour apporter le meilleur de la nature égyptienne au monde.",
  aboutImageAlt: "Herbes aromatiques Egymak",
  getintouch: {
    title: "Contactez-nous",
    subtitle:
      "Nous serions ravis d'avoir de vos nouvelles. Contactez-nous par l'un des moyens ci-dessous.",
    subtitleMail:
      "Des questions ou des idées ? Nous serions ravis d'avoir de vos nouvelles ! Contactez-nous par e-mail et notre équipe vous répondra rapidement.",
    subtitleLocation:
      "Venez nous voir !  Découvrez nos produits en personne et profitez d'un service exceptionnel sur place. Nous avons hâte de vous accueillir!",
    subtitlePhone:
      "Prêt à commander ? Appelez-nous dès maintenant pour un achat rapide et facile ! Notre équipe est à votre disposition.",
    location: "Emplacement",
    address: "123 rue des Herbes, Le Caire, Égypte",
    phone: "Téléphone",
    phoneNumber: "+201032013000",
    email: "E-mail",
    emailAddress: "egymak@gmail.com",
    facebook: "Facebook",
    instagram: "Instagram",
    twitter: "Twitter",
    linkedin: "LinkedIn",
    socialMedia: "Réseaux sociaux",
  },
};
