export type category = "electronics" | "jewelery" | "men's clothing" | "women's clothing"

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating
}

export interface Basket {
    count: number,
    products: Product[]
}

interface Rating {
    rate: number;
    count: number
}

export interface JWT {
    access_token: string
}