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
const conference_service_1 = require("./conference.service");
const graphql_1 = require("@nestjs/graphql");
const conference_model_1 = require("./conference.model");
const create_conference_dto_1 = require("./dto/create-conference-dto");
let ConferenceResolver = class ConferenceResolver {
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
    sessions(conference) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conferenceService.sessions(conference.id);
        });
    }
    createConference(conference) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conferenceService.create(conference);
        });
    }
};
__decorate([
    graphql_1.Query('conferences'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConferenceResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query('conference'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConferenceResolver.prototype, "findById", null);
__decorate([
    graphql_1.ResolveProperty('sessions'),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [conference_model_1.Conference]),
    __metadata("design:returntype", Promise)
], ConferenceResolver.prototype, "sessions", null);
__decorate([
    graphql_1.Mutation('createConference'),
    __param(0, graphql_1.Args('conference')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_conference_dto_1.ConferenceDTO]),
    __metadata("design:returntype", Promise)
], ConferenceResolver.prototype, "createConference", null);
ConferenceResolver = __decorate([
    graphql_1.Resolver('Conference'),
    __metadata("design:paramtypes", [conference_service_1.ConferenceService])
], ConferenceResolver);
exports.ConferenceResolver = ConferenceResolver;
//# sourceMappingURL=conference.resolver.js.map