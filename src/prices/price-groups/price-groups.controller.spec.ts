import { Test, TestingModule } from '@nestjs/testing';
import { PriceGroupsController } from './price-groups.controller';

describe('PriceGroups Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [PriceGroupsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: PriceGroupsController = module.get<PriceGroupsController>(PriceGroupsController);
    expect(controller).toBeDefined();
  });
});
