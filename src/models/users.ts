import client from "../database";

export type User = {
    id?: number;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
};

export class UserStore {
    async index(): Promise<User[]> {
        try{
            const conn = await client.connect();
            const sql = 'SELECT * FROM users';

            co

        }
        catch(err){
            throw new Error(`Could not get users. Error: ${err}`);
        }
    }
}