import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConferenceModule } from './conference/conference.module';
import { SessionModule } from './session/session.module';
import { SpeakerModule } from './speaker/speaker.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ConferenceModule, SessionModule, SpeakerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
