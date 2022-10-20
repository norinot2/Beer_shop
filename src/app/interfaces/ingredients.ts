//make ingredient iterface
export interface Ingredient {
  malt: {
    name: string;
    amount: {
      value: number;
      unit: string;
    };
  }[];
  hops: {
    name: string;
    amount: {
      value: number;
      unit: string;
    };
    add: string;
    attribute: string;
  }[];
  yeast: string;
}
