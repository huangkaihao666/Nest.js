/*
  create-cat.dto.ts
*/
import { IsString, IsInt, IsNotEmpty } from 'class-validator';
export class CreateCatDto {
  @IsNotEmpty() //验证是否为空
  @IsInt() //验证是否为整数
  readonly id: number;
  @IsString() // 验证是否为字符串
  readonly name: string;
  @IsInt()
  readonly age: number;
}

export class UpdateCatDto {
  readonly id: number;
  readonly name: string;
  readonly age: number;
}

export class ListAllEntities {
  readonly id: number;
  readonly name: string;
  readonly age: number;
}
