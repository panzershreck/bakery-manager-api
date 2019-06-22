import { Test, TestingModule } from '@nestjs/testing';
import { DriversController } from './drivers.controller';

describe('Drivers Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [DriversController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: DriversController = module.get<DriversController>(DriversController);
    expect(controller).toBeDefined();
  });
});
