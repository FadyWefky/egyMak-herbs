import { herbsData } from '../data/herbs';

export const herbImageMapping: { [key: number]: string } = herbsData.reduce(
  (acc, herb) => {
    acc[herb.id] = herb.image;
    return acc;
  },
  {} as { [key: number]: string }
);

export const getHerbImage = (herbId: number): string => {
  return herbImageMapping[herbId] || '/images/herbs/Chamomile.jpg';
};
