"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const conference_model_1 = require("./conference.model");
const conference_controller_1 = require("./conference.controller");
const conference_service_1 = require("./conference.service");
const session_model_1 = require("../session/session.model");
let ConferenceModule = class ConferenceModule {
};
ConferenceModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([conference_model_1.Conference, session_model_1.Session])],
        controllers: [conference_controller_1.ConferenceController],
        providers: [conference_service_1.ConferenceService],
    })
], ConferenceModule);
exports.ConferenceModule = ConferenceModule;
//# sourceMappingURL=conference.module.js.map