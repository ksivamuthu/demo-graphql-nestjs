"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_module_1 = require("./app.module");
const conference_module_1 = require("./conference/conference.module");
const session_module_1 = require("./session/session.module");
const speaker_module_1 = require("./speaker/speaker.module");
exports.ApiRoutes = [
    {
        path: '/api/v1',
        module: app_module_1.AppModule,
        children: [
            {
                path: '/conferences',
                module: conference_module_1.ConferenceModule,
            },
            {
                path: '/sessions',
                module: session_module_1.SessionModule,
            },
            {
                path: '/speakers',
                module: speaker_module_1.SpeakerModule,
            },
        ],
    },
];
//# sourceMappingURL=routes.js.map