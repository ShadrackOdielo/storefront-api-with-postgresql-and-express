import client from "../database"

export type Product = {
    id?: number;
    name: string;
    price: number;
    category: string;
};

export class ProductStore {
    async index(): Promise<Product[]> {
        try{
            const conn = await client.connect();
            const sql = 'SELECT * FROM products';

        }
        catch(err){
            throw new Error(`Could not get products. Error: ${err}`);
        }
    }
}