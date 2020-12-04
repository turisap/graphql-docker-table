import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateTodoDTO {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  filter: string;

  @Field()
  initiator: string;
}
