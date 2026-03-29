import { RestaurantCardResponseType } from "../../restaurant/restaurant_type/restaurant_card_type";
export interface Brand {
    id: string;
    name: string;
    phone_contact?: string;
    email_contact?: string;
    link?: string;
    description?: string;
    images: string[];
    logo?: string; // VD: "AS", "LA", "VI" trong vòng tròn
    restaurants: RestaurantCardResponseType[];
    isFeatured:boolean
}
