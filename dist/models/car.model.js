"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Car = class Car extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Car.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Car.prototype, "brand", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Car.prototype, "model", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: 'https://jamaicaautoauctions.com/wp-content/uploads/2019/11/default-car.jpg',
    }),
    tslib_1.__metadata("design:type", String)
], Car.prototype, "image", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: 'Brak opisu',
    }),
    tslib_1.__metadata("design:type", String)
], Car.prototype, "info", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Car.prototype, "engineCapacity", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Car.prototype, "enginePower", void 0);
Car = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Car);
exports.Car = Car;
//# sourceMappingURL=car.model.js.map