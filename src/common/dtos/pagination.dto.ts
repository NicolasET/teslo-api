import { Type } from 'class-transformer';
import { IsOptional, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  //   @IsPositive()
  @Min(0)
  //   Transformar
  @Type(() => Number)
  limit?: number;

  @IsOptional()
  //   @IsPositive()
  @Min(0)
  @Type(() => Number)
  offset?: number;
}
