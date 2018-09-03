import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from './session.model';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepo: Repository<Session>,
  ) {}

  public async create(sessionDto: Session): Promise<Session> {
    const session = { ...new Session(), ...sessionDto };
    return this.sessionRepo.save(session);
  }

  public async findAll(): Promise<Session[]> {
    return this.sessionRepo.find();
  }

  public async findById(id: number): Promise<Session> {
    return this.sessionRepo.findOneOrFail({ where: { id } });
  }

  public async update(id: number, session: Session) {
    const existing = await this.sessionRepo.findOneOrFail({ where: { id } });
    if (existing) {
      await this.sessionRepo.save({ ...existing, ...Session });
    }
  }

  public async delete(id: number) {
    const existing = await this.sessionRepo.findOneOrFail({ where: { id } });
    if (existing) {
      await this.sessionRepo.remove(existing);
    }
  }
}
