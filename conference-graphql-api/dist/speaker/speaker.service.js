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
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const speaker_model_1 = require("./speaker.model");
let SpeakerService = class SpeakerService {
    constructor(speakerRepo) {
        this.speakerRepo = speakerRepo;
    }
    create(speakerDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const speaker = Object.assign({}, new speaker_model_1.Speaker(), speakerDto);
            return this.speakerRepo.save(speaker);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.speakerRepo.find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Finding Speaker with ${id}`);
            return this.speakerRepo.findOneOrFail({ where: { id } });
        });
    }
    findByIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Finding Speaker with ${ids}`);
            return this.speakerRepo.findByIds(ids);
        });
    }
    update(id, speaker) {
        return __awaiter(this, void 0, void 0, function* () {
            const existing = yield this.speakerRepo.findOneOrFail({ where: { id } });
            if (existing) {
                yield this.speakerRepo.save(Object.assign({}, existing, speaker_model_1.Speaker));
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const existing = yield this.speakerRepo.findOneOrFail({ where: { id } });
            if (existing) {
                yield this.speakerRepo.remove(existing);
            }
        });
    }
};
SpeakerService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(speaker_model_1.Speaker)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SpeakerService);
exports.SpeakerService = SpeakerService;
//# sourceMappingURL=speaker.service.js.map