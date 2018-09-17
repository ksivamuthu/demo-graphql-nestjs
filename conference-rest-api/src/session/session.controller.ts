import { Controller, Get, Param, ParseIntPipe, Post, Body, Put, Delete, UseInterceptors, UseGuards } from '@nestjs/common';
import { SessionService } from './session.service';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SessionDTO } from './dto/create-session-dto';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { AuthGuard } from '../common/guards/auth.guard';
import { RoleGuard } from '../common/guards/role.guard';

@Controller()
@ApiUseTags('sessions')
@UseInterceptors(LoggingInterceptor)
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
    @UseGuards(RoleGuard)
    public async create(@Body() sessionDto: SessionDTO) {
        return this.sessionService.create(sessionDto);
    }

    @Put(':id')
    @UseGuards(RoleGuard)
    public async update(@Param('id', new ParseIntPipe())id: number, @Body() sessionDto: SessionDTO) {
        return this.sessionService.update(id, sessionDto);
    }

    @Delete(':id')
    @UseGuards(RoleGuard)
    public async remove(@Param('id', new ParseIntPipe())id: number) {
        return this.sessionService.delete(id);
    }
}
