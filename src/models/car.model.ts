import {Entity, model, property} from '@loopback/repository';

@model()
export class Car extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  brand: string;

  @property({
    type: 'string',
    required: true,
  })
  model: string;

  @property({
    type: 'string',
    default:
      'https://jamaicaautoauctions.com/wp-content/uploads/2019/11/default-car.jpg',
  })
  image?: string;

  @property({
    type: 'string',
    default: 'Brak opisu',
  })
  info?: string;

  @property({
    type: 'number',
    required: true,
  })
  engineCapacity: number;

  @property({
    type: 'number',
    required: true,
  })
  enginePower: number;

  constructor(data?: Partial<Car>) {
    super(data);
  }
}

export interface CarRelations {
  // describe navigational properties here
}

export type CarWithRelations = Car & CarRelations;
