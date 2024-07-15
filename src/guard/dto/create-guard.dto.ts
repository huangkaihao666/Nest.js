import { ApiProperty } from '@nestjs/swagger';

export class CreateGuardDto {
  @ApiProperty({ description: '姓名', example: 'hkh' })
  name: string;
  @ApiProperty({ description: '年龄', example: 20 })
  age: number;
}
