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
const conference_model_1 = require("./conference.model");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const session_model_1 = require("../session/session.model");
let ConferenceService = class ConferenceService {
    constructor(conferenceRepo, sessionRepo) {
        this.conferenceRepo = conferenceRepo;
        this.sessionRepo = sessionRepo;
    }
    create(confDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const conference = Object.assign({}, new conference_model_1.Conference(), confDto);
            return this.conferenceRepo.save(conference);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conferenceRepo.find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conferenceRepo.findOneOrFail({ where: { id } });
        });
    }
    update(id, conference) {
        return __awaiter(this, void 0, void 0, function* () {
            const existing = yield this.conferenceRepo.findOneOrFail({ where: { id } });
            if (existing) {
                yield this.conferenceRepo.save(Object.assign({}, existing, conference));
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const existing = yield this.conferenceRepo.findOneOrFail({ where: { id } });
            if (existing) {
                yield this.conferenceRepo.remove(existing);
            }
        });
    }
    sessions(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sessionRepo.find({ where: { conference: id } });
        });
    }
};
ConferenceService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(conference_model_1.Conference)),
    __param(1, typeorm_2.InjectRepository(session_model_1.Session)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], ConferenceService);
exports.ConferenceService = ConferenceService;
//# sourceMappingURL=conference.service.js.map