import client from "../database";
import { User } from "./users";

export type Order = {
    id?: number;
    user_id: number;
    status: string;
};


export class OrderStore {
    async index(): Promise<Order[]> {
        try{
            const conn = await client.connect();
            const sql = 'SELECT * FROM orders';

        }
        catch(err){
            throw new Error(`Could not get orders. Error: ${err}`);
        }
    }
}

export type OrderProduct = {
    id?: number;
    order_id: number;
    product_id: number;
    quantity: number;
};

export class OrderProductStore {
    async index(): Promise<OrderProduct[]> {
        try{
            const conn = await client.connect();
            const sql = 'SELECT * FROM order_products';

        }
        catch(err){
            throw new Error(`Could not get order_products. Error: ${err}`);
        }
    }
}