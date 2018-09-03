import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from './session.model';

@Module({
    imports: [TypeOrmModule.forFeature([Session])],
    controllers: [SessionController],
    providers: [SessionService],
})
export class SessionModule {}
