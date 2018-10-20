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
const session_service_1 = require("./session.service");
const session_model_1 = require("./session.model");
const graphql_1 = require("@nestjs/graphql");
const speaker_service_1 = require("../speaker/speaker.service");
const create_session_dto_1 = require("./dto/create-session-dto");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const DataLoader = require("dataloader");
const pubSub = new graphql_subscriptions_1.PubSub();
let SessionResolver = class SessionResolver {
    constructor(sessionService, speakerService) {
        this.sessionService = sessionService;
        this.speakerService = speakerService;
    }
    findAll(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.dataloader = new DataLoader(keys => this.speakerService.findByIds(keys));
            return this.sessionService.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sessionService.findById(id);
        });
    }
    findSessionsByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sessionService.findByCategory(category);
        });
    }
    sessions(ctx, session) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Retrieving speaker with id: ${session.speakerId}`);
            return this.speakerService.findById(session.speakerId);
        });
    }
    starSession(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = yield this.sessionService.incrementStars(id);
            pubSub.publish('sessionStarred', { sessionStarred: result });
            return result;
        });
    }
    createSession(session) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sessionService.create(session);
        });
    }
    sessionStarred() {
        return {
            subscribe: () => pubSub.asyncIterator('sessionStarred')
        };
    }
};
__decorate([
    graphql_1.Query('sessions'),
    __param(0, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SessionResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query('session'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SessionResolver.prototype, "findById", null);
__decorate([
    graphql_1.Query('sessionsByCategory'),
    __param(0, graphql_1.Args('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SessionResolver.prototype, "findSessionsByCategory", null);
__decorate([
    graphql_1.ResolveProperty('speaker'),
    __param(0, graphql_1.Context()), __param(1, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, session_model_1.Session]),
    __metadata("design:returntype", Promise)
], SessionResolver.prototype, "sessions", null);
__decorate([
    graphql_1.Mutation('starSession'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SessionResolver.prototype, "starSession", null);
__decorate([
    graphql_1.Mutation('createSession'),
    __param(0, graphql_1.Args('session')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_session_dto_1.SessionDTO]),
    __metadata("design:returntype", Promise)
], SessionResolver.prototype, "createSession", null);
__decorate([
    graphql_1.Subscription('sessionStarred'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SessionResolver.prototype, "sessionStarred", null);
SessionResolver = __decorate([
    graphql_1.Resolver('Session'),
    __metadata("design:paramtypes", [session_service_1.SessionService,
        speaker_service_1.SpeakerService])
], SessionResolver);
exports.SessionResolver = SessionResolver;
//# sourceMappingURL=session.resolver.js.map