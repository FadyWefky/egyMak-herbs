export type TestimonialItem = {
  name: string;
  location: string;
  text: string;
  herb: string;
  /** Star display 1–5; omit for default. */
  rating?: number;
};

export type HealthBenefitCardCopy = {
  title: string;
  description: string;
};
