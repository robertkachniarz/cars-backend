import { Entity } from '@loopback/repository';
export declare class Car extends Entity {
    id?: string;
    brand: string;
    model: string;
    image?: string;
    info?: string;
    engineCapacity: number;
    enginePower: number;
    constructor(data?: Partial<Car>);
}
export interface CarRelations {
}
export declare type CarWithRelations = Car & CarRelations;
