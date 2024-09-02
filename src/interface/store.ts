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
    condition?: string
}

export interface ITalentsProps {
    id: string;
    name: string;
    img: string;
    genres: string[];
    instruments?: string[];
    biography: string;
    available: boolean;
    updatedAt?: string;
    createdAt?: string;
}