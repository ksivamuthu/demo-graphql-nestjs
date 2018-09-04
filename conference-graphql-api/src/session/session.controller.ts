import { Controller, Get, Param, ParseIntPipe, Post, Body, Put, Delete } from '@nestjs/common';
import { SessionService } from './session.service';
import { Session } from './session.model';

@Controller()
export class SessionController {
    constructor(private readonly sessionService: SessionService) {}

    @Get()
    public async findAll() {
        return this.sessionService.findAll();
    }

    @Get(':id')
    public async findById(@Param('id', new ParseIntPipe())id: number) {
        return this.sessionService.findById(id);
    }

    @Post()
    public async create(@Body() sessionDto: Session) {
        return this.sessionService.create(sessionDto);
    }

    @Put(':id')
    public async update(@Param('id', new ParseIntPipe())id: number, @Body() sessionDto: Session) {
        return this.sessionService.update(id, sessionDto);
    }

    @Delete(':id')
    public async remove(@Param('id', new ParseIntPipe())id: number) {
        return this.sessionService.delete(id);
    }
}
