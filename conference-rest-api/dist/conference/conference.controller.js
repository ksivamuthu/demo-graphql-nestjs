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
const conference_service_1 = require("./conference.service");
const create_conference_dto_1 = require("./dto/create-conference-dto");
const swagger_1 = require("@nestjs/swagger");
let ConferenceController = class ConferenceController {
    constructor(conferenceService) {
        this.conferenceService = conferenceService;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conferenceService.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conferenceService.findById(id);
        });
    }
    create(confDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conferenceService.create(confDto);
        });
    }
    update(id, confDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conferenceService.update(id, confDto);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conferenceService.delete(id);
        });
    }
    findSessionsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conferenceService.sessions(id);
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConferenceController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConferenceController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_conference_dto_1.ConferenceDTO]),
    __metadata("design:returntype", Promise)
], ConferenceController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_conference_dto_1.ConferenceDTO]),
    __metadata("design:returntype", Promise)
], ConferenceController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConferenceController.prototype, "remove", null);
__decorate([
    common_1.Get(':id/sessions'),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConferenceController.prototype, "findSessionsById", null);
ConferenceController = __decorate([
    common_1.Controller(),
    swagger_1.ApiUseTags('conferences'),
    __metadata("design:paramtypes", [conference_service_1.ConferenceService])
], ConferenceController);
exports.ConferenceController = ConferenceController;
//# sourceMappingURL=conference.controller.js.map