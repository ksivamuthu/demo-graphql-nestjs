import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConferenceModule } from './conference/conference.module';
import { SessionModule } from './session/session.module';
import { SpeakerModule } from './speaker/speaker.module';
import { ApiRoutes } from './routes';
import { RouterModule } from 'nest-router';

@Module({
  imports: [
    RouterModule.forRoutes(ApiRoutes), 
    TypeOrmModule.forRoot(), 
    ConferenceModule,
    SessionModule,
    SpeakerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
