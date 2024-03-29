import { Address } from "./address";
import { ContactPoint } from "./contactPoint";
import { Product } from "./product";
import { SocialMedia } from "./socialMedia";

export interface WebsiteData {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  favicon: string;
  address: Address;
  contactPoint: ContactPoint;
  description?: string;
  foundingDate?: string;
  founders?: string[];
  employees?: number;
  industry?: string;
  socialMedia?: SocialMedia;
  products?: Product[];
}
