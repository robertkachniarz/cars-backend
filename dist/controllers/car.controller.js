"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CarController = class CarController {
    constructor(carRepository) {
        this.carRepository = carRepository;
    }
    async create(car) {
        return this.carRepository.create(car);
    }
    async count(where) {
        return this.carRepository.count(where);
    }
    async find(filter) {
        return this.carRepository.find(filter);
    }
    async updateAll(car, where) {
        return this.carRepository.updateAll(car, where);
    }
    async findById(id, filter) {
        return this.carRepository.findById(id, filter);
    }
    async updateById(id, car) {
        await this.carRepository.updateById(id, car);
    }
    async replaceById(id, car) {
        await this.carRepository.replaceById(id, car);
    }
    async deleteById(id) {
        await this.carRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/cars'),
    (0, rest_1.response)(200, {
        description: 'Car model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Car) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Car, {
                    title: 'NewCar',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cars/count'),
    (0, rest_1.response)(200, {
        description: 'Car model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Car)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cars'),
    (0, rest_1.response)(200, {
        description: 'Array of Car model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Car, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Car)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cars'),
    (0, rest_1.response)(200, {
        description: 'Car PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Car, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Car)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Car, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cars/{id}'),
    (0, rest_1.response)(200, {
        description: 'Car model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Car, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Car, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CarController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cars/{id}'),
    (0, rest_1.response)(204, {
        description: 'Car PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Car, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Car]),
    tslib_1.__metadata("design:returntype", Promise)
], CarController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/cars/{id}'),
    (0, rest_1.response)(204, {
        description: 'Car PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Car]),
    tslib_1.__metadata("design:returntype", Promise)
], CarController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/cars/{id}'),
    (0, rest_1.response)(204, {
        description: 'Car DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CarController.prototype, "deleteById", null);
CarController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CarRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CarRepository])
], CarController);
exports.CarController = CarController;
//# sourceMappingURL=car.controller.js.map