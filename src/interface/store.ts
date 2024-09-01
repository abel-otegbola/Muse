export interface IProductProps {
    id: string;
    title: string;
    img: string;
    price: number;
    discount?: number;
    categories: string[];
    tags: string[];
    description: string;
    updatedAt?: string;
    createdAt?: string;
    stock?: number;
    starRating?: string;
    brand?: string;
    model?: string;
    color?: string;
    features?: string[]
}