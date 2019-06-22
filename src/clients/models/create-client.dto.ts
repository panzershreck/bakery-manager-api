import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { Driver } from '@app/drivers/models/driver.entity';

export class CreateClientDto {
  @IsString()
  readonly address: string;

  @IsBoolean()
  readonly cashPayment: boolean;

  @IsOptional()
  readonly driver: Driver;

  @IsString()
  readonly phone: string;

  @IsString()
  readonly title: string;
}