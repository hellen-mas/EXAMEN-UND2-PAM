export interface Product {
    id:          number;
    name:       string;
    price:       number;
    image:       string;
}

export interface ProductDetail extends Product {
    category: string,
    description: string,
}