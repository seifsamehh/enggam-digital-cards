import { SubCategory } from "./subCategory";

export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories?: SubCategory[];
}
