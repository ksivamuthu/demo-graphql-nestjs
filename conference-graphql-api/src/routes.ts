import { AppModule } from './app.module';
import { ConferenceModule } from './conference/conference.module';
import { SessionModule } from './session/session.module';
import { SpeakerModule } from './speaker/speaker.module';
import { Routes } from 'nest-router';

export const ApiRoutes: Routes = [
    {
      path: '/api/v1',
      module: AppModule,
      children: [
        {
          path: '/conferences',
          module: ConferenceModule,
        },
        {
          path: '/sessions',
          module: SessionModule,
        },
        {
            path: '/speakers',
            module: SpeakerModule,
        },
      ],
    },
  ];
