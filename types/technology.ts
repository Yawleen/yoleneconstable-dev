import { TECHNOLOGY_CATEGORIES } from "@/constants/technologies";

export type TechnologyCategory = (typeof TECHNOLOGY_CATEGORIES)[number];

export interface Technology {
  category: TechnologyCategory;
  name: string;
}
