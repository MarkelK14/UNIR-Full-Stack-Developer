export interface IProduct {
    name: string,
    description: string,
    price: number,
    stock: number,
    department: string,
    available: boolean,
    owner: string,
    createdAt: Date,
    updatedAt: Date,
}
