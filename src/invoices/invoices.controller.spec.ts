import { Test, TestingModule } from '@nestjs/testing';
import { InvoicesController } from './invoices.controller';

describe('Invoices Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [InvoicesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: InvoicesController = module.get<InvoicesController>(InvoicesController);
    expect(controller).toBeDefined();
  });
});
