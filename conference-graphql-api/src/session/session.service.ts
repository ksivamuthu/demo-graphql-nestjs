import { Injectable, UseGuards } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Session, Category } from './session.model';
import { SessionDTO } from './dto/create-session-dto';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepo: Repository<Session>,
  ) {}

  public async create(sessionDto: SessionDTO): Promise<Session> {
    const session = { ...new Session(), ...sessionDto };
    return this.sessionRepo.save(session);
  }

  public async findAll(): Promise<Session[]> {
    return this.sessionRepo.find();
  }

  public async findById(id: number): Promise<Session> {
    return this.sessionRepo.findOneOrFail({ where: { id } });
  }

  public async findByCategory(category: Category): Promise<Session[]> {
    return this.sessionRepo.find({ where: { category: category } });
  }

  public async update(id: number, session: SessionDTO) {
    const existing = await this.sessionRepo.findOneOrFail({ where: { id } });
    if (existing) {
      return await this.sessionRepo.save({ ...existing, ...session });
    }
  }

  public async incrementStars(id: number) {
    const existing = await this.sessionRepo.findOneOrFail({ where: { id } });
    if(existing) {
       const objToSave = {...existing, ...{ stars: existing.stars + 1 }};
       return await this.sessionRepo.save(objToSave);
    }
  }

  public async delete(id: number) {
    const existing = await this.sessionRepo.findOneOrFail({ where: { id } });
    if (existing) {
      await this.sessionRepo.remove(existing);
    }
  }
}
