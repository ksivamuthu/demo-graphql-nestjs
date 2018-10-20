"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const session_model_1 = require("../session/session.model");
let Speaker = class Speaker {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Speaker.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Speaker.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ length: 1000 }),
    __metadata("design:type", String)
], Speaker.prototype, "bio", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Speaker.prototype, "phonenumber", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Speaker.prototype, "companyname", void 0);
__decorate([
    typeorm_1.Column({ default: "" }),
    __metadata("design:type", String)
], Speaker.prototype, "companytitle", void 0);
__decorate([
    typeorm_1.Column({ default: "" }),
    __metadata("design:type", String)
], Speaker.prototype, "companywebsite", void 0);
__decorate([
    typeorm_1.Column({ default: "" }),
    __metadata("design:type", String)
], Speaker.prototype, "blog", void 0);
__decorate([
    typeorm_1.Column({ default: "" }),
    __metadata("design:type", String)
], Speaker.prototype, "website", void 0);
__decorate([
    typeorm_1.Column({ default: "" }),
    __metadata("design:type", String)
], Speaker.prototype, "twitter", void 0);
__decorate([
    typeorm_1.OneToMany(() => session_model_1.Session, session => session.speaker),
    __metadata("design:type", Array)
], Speaker.prototype, "session", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Speaker.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Speaker.prototype, "updatedAt", void 0);
Speaker = __decorate([
    typeorm_1.Entity()
], Speaker);
exports.Speaker = Speaker;
//# sourceMappingURL=speaker.model.js.map