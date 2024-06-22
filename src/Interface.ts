export interface CardItem {
  listing_id: number;
  url?: string;
  MainImage?: {
    url_570xN: string;
  };
  title?: string;
  currency_code?: string;
  price?: string;
  quantity?: number;
  state: string;
}
export interface ListingProps {
  items: CardItem[];
}