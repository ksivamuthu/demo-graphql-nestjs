"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let AnyExceptionFilter = class AnyExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = 500;
        if (exception.name === 'EntityNotFound') {
            status = 404;
        }
        response
            .status(status)
            .json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            message: exception.message,
            path: request.url,
        });
    }
};
AnyExceptionFilter = __decorate([
    common_1.Catch()
], AnyExceptionFilter);
exports.AnyExceptionFilter = AnyExceptionFilter;
//# sourceMappingURL=any-exception.filter.js.map