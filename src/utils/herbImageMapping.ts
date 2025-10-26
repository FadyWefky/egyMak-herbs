// Mapping of herb IDs to local image filenames
export const herbImageMapping: { [key: number]: string } = {
  1: '/images/herbs/chamomile.jpg',
  2: '/images/herbs/peppermint.jpg',
  3: '/images/herbs/lemon-balm.jpg',
  4: '/images/herbs/rosemary.jpg',
  5: '/images/herbs/basil.jpg',
  6: '/images/herbs/thyme.jpg',
  7: '/images/herbs/lavender.jpg',
  8: '/images/herbs/sage.jpg',
  9: '/images/herbs/oregano.jpg',
  10: '/images/herbs/ginger.jpg',
  11: '/images/herbs/turmeric.jpg',
  12: '/images/herbs/cinnamon.jpg',
  13: '/images/herbs/echinacea.jpg',
  14: '/images/herbs/elderberry.jpg',
  15: '/images/herbs/marshmallow-root.jpg',
  16: '/images/herbs/nettle.jpg',
  17: '/images/herbs/dandelion-root.jpg',
  18: '/images/herbs/calendula.jpg',
  19: '/images/herbs/parsley.jpg',
  20: '/images/herbs/cilantro.jpg',
  21: '/images/herbs/dill.jpg',
  22: '/images/herbs/marjoram.jpg',
  23: '/images/herbs/tarragon.jpg',
  24: '/images/herbs/hibiscus.jpg',
  25: '/images/herbs/rooibos.jpg',
  26: '/images/herbs/lemongrass.jpg',
  27: '/images/herbs/jasmine.jpg',
  28: '/images/herbs/rose-petals.jpg',
  29: '/images/herbs/sandalwood.jpg',
  30: '/images/herbs/frankincense.jpg',
  31: '/images/herbs/chives.jpg',
  32: '/images/herbs/fennel.jpg',
  33: '/images/herbs/coriander.jpg',
  34: '/images/herbs/mint.jpg',
  35: '/images/herbs/bay-leaves.jpg',
  36: '/images/herbs/echinacea.jpg', // Duplicate
  37: '/images/herbs/astragalus.jpg',
  38: '/images/herbs/ashwagandha.jpg',
  39: '/images/herbs/milk-thistle.jpg',
  40: '/images/herbs/valerian.jpg',
  41: '/images/herbs/green-tea.jpg',
  42: '/images/herbs/white-tea.jpg',
  43: '/images/herbs/oolong-tea.jpg',
  44: '/images/herbs/pu-erh-tea.jpg',
  45: '/images/herbs/jasmine.jpg', // Duplicate
  46: '/images/herbs/ylang-ylang.jpg',
  47: '/images/herbs/patchouli.jpg',
  48: '/images/herbs/vetiver.jpg'
};

// Function to get local image for herb
export const getHerbImage = (herbId: number): string => {
  return herbImageMapping[herbId] || '/images/herbs/chamomile.jpg'; // Fallback
};
