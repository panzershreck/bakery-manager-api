import { IsArray, IsString, MaxLength } from 'class-validator';

import { Price } from './price.entity';

export class CreatePriceGroupDto {
  @IsArray()
  readonly prices: Price[];

  @IsString()
  @MaxLength(20)
  readonly title: string;
}