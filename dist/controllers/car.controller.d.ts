import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Car } from '../models';
import { CarRepository } from '../repositories';
export declare class CarController {
    carRepository: CarRepository;
    constructor(carRepository: CarRepository);
    create(car: Omit<Car, 'id'>): Promise<Car>;
    count(where?: Where<Car>): Promise<Count>;
    find(filter?: Filter<Car>): Promise<Car[]>;
    updateAll(car: Car, where?: Where<Car>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Car>): Promise<Car>;
    updateById(id: string, car: Car): Promise<void>;
    replaceById(id: string, car: Car): Promise<void>;
    deleteById(id: string): Promise<void>;
}
