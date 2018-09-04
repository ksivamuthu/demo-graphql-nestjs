import { Test, TestingModule } from '@nestjs/testing';
import { ConferenceController } from './conference.controller';

describe('Conference Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ConferenceController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ConferenceController = module.get<ConferenceController>(ConferenceController);
    expect(controller).toBeDefined();
  });
});
