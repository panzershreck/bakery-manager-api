import { Test, TestingModule } from '@nestjs/testing';
import { MeController } from './me.controller';

describe('Me Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [MeController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: MeController = module.get<MeController>(MeController);
    expect(controller).toBeDefined();
  });
});
