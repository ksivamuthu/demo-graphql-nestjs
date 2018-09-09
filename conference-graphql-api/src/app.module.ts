import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConferenceModule } from './conference/conference.module';
import { SessionModule } from './session/session.module';
import { SpeakerModule } from './speaker/speaker.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true      
    }),
    TypeOrmModule.forRoot(),
    ConferenceModule,
    SessionModule,
    SpeakerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
