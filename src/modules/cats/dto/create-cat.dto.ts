/*
  create-cat.dto.ts
*/
export class CreateCatDto {
  readonly name: string;
  readonly age: number;
}

export class UpdateCatDto {
  readonly name: string;
  readonly age: number;
}

export class ListAllEntities {
  readonly name: string;
  readonly age: number;
}
