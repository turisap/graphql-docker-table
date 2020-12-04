import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateFilterDTO {
  @Field()
  title: string;
}
