export interface IProduct {
    _id?: number | string;
    name: string;
    code?: string;
    createdAt?: string;
    price: number | string;
    imageUrl?: string;
    description?: string
}