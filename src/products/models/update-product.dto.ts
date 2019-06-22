import { IsNumber, IsString, MaxLength } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @MaxLength(200)
  readonly description: string;

  @IsString()
  readonly title: string;

  @IsNumber()
  readonly weight: number;

  @IsNumber()
  readonly defaultPrice: number;
}