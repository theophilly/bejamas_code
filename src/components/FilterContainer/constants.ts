export interface IINITIAL_PRICES {
  zero_to_twenty: boolean;
  twenty_to_hun: boolean;
  hun_to_twoHun: boolean;
  twoHun_to_thou: boolean;
}
export const INITIAL_PRICES = {
  zero_to_twenty: false,
  twenty_to_hun: false,
  hun_to_twoHun: false,
  twoHun_to_thou: false,
};

export interface IINITIAL_CATEGORIES {
  people: boolean;
  premium: boolean;
  pets: boolean;
  food: boolean;
  landmarks: boolean;
  cities: boolean;
  nature: boolean;
}

export const ACTION_GENERATOR: { [key: string]: Object } = {
  zero_to_twenty: {
    min: 0,
    max: 20,
  },
  twenty_to_hun: {
    min: 20,
    max: 100,
  },
  hun_to_twoHun: {
    min: 100,
    max: 200,
  },
  twoHun_to_thou: {
    min: 200,
    max: 1000,
  },
};

export const INITIAL_CATEGORIES = {
  people: false,
  premium: false,
  pets: false,
  food: false,
  landmarks: false,
  cities: false,
  nature: false,
};
