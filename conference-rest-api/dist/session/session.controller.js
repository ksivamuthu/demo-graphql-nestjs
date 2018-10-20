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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const session_service_1 = require("./session.service");
const swagger_1 = require("@nestjs/swagger");
const create_session_dto_1 = require("./dto/create-session-dto");
const logging_interceptor_1 = require("../common/interceptors/logging.interceptor");
const role_guard_1 = require("../common/guards/role.guard");
let SessionController = class SessionController {
    constructor(sessionService) {
        this.sessionService = sessionService;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sessionService.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sessionService.findById(id);
        });
    }
    create(sessionDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sessionService.create(sessionDto);
        });
    }
    update(id, sessionDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sessionService.update(id, sessionDto);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sessionService.delete(id);
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(role_guard_1.RoleGuard),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_session_dto_1.SessionDTO]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseGuards(role_guard_1.RoleGuard),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_session_dto_1.SessionDTO]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(role_guard_1.RoleGuard),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "remove", null);
SessionController = __decorate([
    common_1.Controller(),
    swagger_1.ApiUseTags('sessions'),
    common_1.UseInterceptors(logging_interceptor_1.LoggingInterceptor),
    __metadata("design:paramtypes", [session_service_1.SessionService])
], SessionController);
exports.SessionController = SessionController;
//# sourceMappingURL=session.controller.js.map