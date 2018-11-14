import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConferenceModule } from './conference/conference.module';
import { SessionModule } from './session/session.module';
import { SpeakerModule } from './speaker/speaker.module';
import * as dotenv from 'dotenv';
dotenv.config();

console.log(process.env.ENGINE_API_KEY);
@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      engine: {
        apiKey: process.env.ENGINE_API_KEY
      },
      context: ({ req }) => ({ req })      
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
