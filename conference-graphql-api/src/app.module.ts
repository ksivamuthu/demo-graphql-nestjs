import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConferenceModule } from './conference/conference.module';
import { SessionModule } from './session/session.module';
import { SpeakerModule } from './speaker/speaker.module';
import { ApiRoutes } from './routes';
import { RouterModule } from 'nest-router';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      engine: {
        apiKey: "service:conference-service:oKVmAPezK_DvGTO1vyvD-w"
      }
    }),
    RouterModule.forRoutes(ApiRoutes),
    TypeOrmModule.forRoot(),
    ConferenceModule,
    SessionModule,
    SpeakerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
