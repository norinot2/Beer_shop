import { Ingredient } from "./ingredients";
import { Method } from "./method";

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  method: Method;
  ingredients: Ingredient;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;

}
