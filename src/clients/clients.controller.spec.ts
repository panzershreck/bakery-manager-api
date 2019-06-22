import { Test, TestingModule } from '@nestjs/testing';
import { ClientsController } from './clients.controller';

describe('Clients Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ClientsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ClientsController = module.get<ClientsController>(ClientsController);
    expect(controller).toBeDefined();
  });
});
