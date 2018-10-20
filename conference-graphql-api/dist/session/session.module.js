"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const session_service_1 = require("./session.service");
const typeorm_1 = require("@nestjs/typeorm");
const session_model_1 = require("./session.model");
const session_resolver_1 = require("./session.resolver");
const speaker_service_1 = require("../speaker/speaker.service");
const speaker_model_1 = require("../speaker/speaker.model");
let SessionModule = class SessionModule {
};
SessionModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([session_model_1.Session, speaker_model_1.Speaker])],
        providers: [session_service_1.SessionService, speaker_service_1.SpeakerService, session_resolver_1.SessionResolver]
    })
], SessionModule);
exports.SessionModule = SessionModule;
//# sourceMappingURL=session.module.js.map