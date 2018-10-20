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
const conference_model_1 = require("../conference/conference.model");
const speaker_model_1 = require("../speaker/speaker.model");
var Category;
(function (Category) {
    Category[Category["GeneralDiscussion"] = 0] = "GeneralDiscussion";
    Category[Category["ClientDevelopment"] = 1] = "ClientDevelopment";
    Category[Category["WebDevelopment"] = 2] = "WebDevelopment";
    Category[Category["DatabaseDevelopment"] = 3] = "DatabaseDevelopment";
    Category[Category["CloudDevelopment"] = 4] = "CloudDevelopment";
    Category[Category["Design"] = 5] = "Design";
    Category[Category["ProfessionalDevelopment"] = 6] = "ProfessionalDevelopment";
    Category[Category["CareerAdvancement"] = 7] = "CareerAdvancement";
    Category[Category["ITTopics"] = 8] = "ITTopics";
})(Category = exports.Category || (exports.Category = {}));
var TalkLevel;
(function (TalkLevel) {
    TalkLevel[TalkLevel["Beginner"] = 0] = "Beginner";
    TalkLevel[TalkLevel["Intermediate"] = 1] = "Intermediate";
    TalkLevel[TalkLevel["Advanced"] = 2] = "Advanced";
    TalkLevel[TalkLevel["Expert"] = 3] = "Expert";
})(TalkLevel = exports.TalkLevel || (exports.TalkLevel = {}));
let Session = class Session {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Session.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Session.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ length: 5000 }),
    __metadata("design:type", String)
], Session.prototype, "abstract", void 0);
__decorate([
    typeorm_1.Column('enum', { enum: TalkLevel }),
    __metadata("design:type", Number)
], Session.prototype, "level", void 0);
__decorate([
    typeorm_1.Column('enum', { enum: Category }),
    __metadata("design:type", Number)
], Session.prototype, "category", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Session.prototype, "keywords", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], Session.prototype, "stars", void 0);
__decorate([
    typeorm_1.ManyToOne(() => conference_model_1.Conference, conference => conference.sessions),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Object)
], Session.prototype, "conference", void 0);
__decorate([
    typeorm_1.ManyToOne(() => speaker_model_1.Speaker, speaker => speaker.session),
    __metadata("design:type", Object)
], Session.prototype, "speaker", void 0);
__decorate([
    typeorm_1.RelationId((session) => session.speaker),
    __metadata("design:type", Number)
], Session.prototype, "speakerId", void 0);
__decorate([
    typeorm_1.RelationId((session) => session.conference),
    __metadata("design:type", Number)
], Session.prototype, "conferenceId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Session.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Session.prototype, "updatedAt", void 0);
Session = __decorate([
    typeorm_1.Entity()
], Session);
exports.Session = Session;
//# sourceMappingURL=session.model.js.map