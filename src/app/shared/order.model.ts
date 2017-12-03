import { Customer } from './customer.model';

export class Order {
    id: number;
    customer: Customer;
    total: number;
    placed: Date;
    fullfilled: Date;
    status: string;
}