import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Car, CarRelations } from '../models';
export declare class CarRepository extends DefaultCrudRepository<Car, typeof Car.prototype.id, CarRelations> {
    constructor(dataSource: DbDataSource);
}
