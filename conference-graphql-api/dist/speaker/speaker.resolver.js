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
const speaker_service_1 = require("./speaker.service");
const graphql_1 = require("@nestjs/graphql");
const speaker_model_1 = require("./speaker.model");
const create_speaker_dto_1 = require("./dto/create-speaker-dto");
let SpeakerResolver = class SpeakerResolver {
    constructor(speakerService) {
        this.speakerService = speakerService;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.speakerService.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.speakerService.findById(id);
        });
    }
    imageUrl(speaker) {
        return `https://api.adorable.io/avatars/285/${speaker.id}.png`;
    }
    createSpeaker(speaker) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.speakerService.create(speaker);
        });
    }
};
__decorate([
    graphql_1.Query('speakers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpeakerResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query('speaker'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SpeakerResolver.prototype, "findById", null);
__decorate([
    graphql_1.ResolveProperty('imageUrl'),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [speaker_model_1.Speaker]),
    __metadata("design:returntype", String)
], SpeakerResolver.prototype, "imageUrl", null);
__decorate([
    graphql_1.Mutation('createSpeaker'),
    __param(0, graphql_1.Args('speaker')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_speaker_dto_1.SpeakerDTO]),
    __metadata("design:returntype", Promise)
], SpeakerResolver.prototype, "createSpeaker", null);
SpeakerResolver = __decorate([
    graphql_1.Resolver('Speaker'),
    __metadata("design:paramtypes", [speaker_service_1.SpeakerService])
], SpeakerResolver);
exports.SpeakerResolver = SpeakerResolver;
//# sourceMappingURL=speaker.resolver.js.map