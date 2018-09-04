import { Test, TestingModule } from '@nestjs/testing';
import { SessionController } from './session.controller';

describe('Session Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SessionController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: SessionController = module.get<SessionController>(SessionController);
    expect(controller).toBeDefined();
  });
});
