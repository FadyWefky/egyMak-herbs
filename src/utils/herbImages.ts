// Script to download herb images locally
// This will help improve loading performance by serving images from local storage

const herbImages = [
  // Featured herbs
  'https://images.unsplash.com/photo-1563122797-6c3c2b9cb5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Chamomile
  'https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Peppermint
  'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Lemon Balm
  'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Rosemary
  'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // Basil
  'https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // Thyme
  'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // Lavender
  'https://images.unsplash.com/photo-1563122797-6c3c2b9cb5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // Sage
  'https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // Oregano
  'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // Ginger
  'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', // Turmeric
  'https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Cinnamon
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Echinacea
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Elderberry
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Marshmallow Root
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Nettle
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Dandelion Root
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Calendula
  'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Parsley
  'https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Cilantro
  'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Dill
  'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Marjoram
  'https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Tarragon
  'https://images.unsplash.com/photo-1563122797-6c3c2b9cb5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Hibiscus
  'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Rooibos
  'https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Lemongrass
  'https://images.unsplash.com/photo-1563122797-6c3c2b9cb5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Jasmine
  'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Rose Petals
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Sandalwood
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Frankincense
  'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Chives
  'https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Fennel
  'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Coriander
  'https://images.unsplash.com/photo-1509987738-57c02b5c6cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Mint
  'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Bay Leaves
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Echinacea (duplicate)
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Astragalus
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Ashwagandha
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Milk Thistle
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Valerian
  'https://images.unsplash.com/photo-1563122797-6c3c2b9cb5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Green Tea
  'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // White Tea
  'https://images.unsplash.com/photo-1563122797-6c3c2b9cb5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Oolong Tea
  'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Pu-erh Tea
  'https://images.unsplash.com/photo-1563122797-6c3c2b9cb5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Jasmine (duplicate)
  'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Ylang Ylang
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Patchouli
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Vetiver
];

export default herbImages;
