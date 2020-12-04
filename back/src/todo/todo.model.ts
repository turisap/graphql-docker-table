import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { ObjectType, Field } from "@nestjs/graphql";

import { FilterModel, InitiatorModel } from "../filter/filter.model";

@ObjectType()
@Entity()
export class TodoModel {
  @Field()
  @PrimaryGeneratedColumn()
  todo_id: string;

  @Field()
  @Column({ length: 100, unique: true })
  title: string;

  @Field()
  @Column({ length: 500 })
  description: string;

  @Field(() => FilterModel, { nullable: true })
  @OneToOne((type) => FilterModel)
  @JoinColumn({
    name: "filter",
    referencedColumnName: "id",
  })
  filter: FilterModel;

  @Field(() => InitiatorModel, { nullable: true })
  @OneToOne((type) => InitiatorModel)
  @JoinColumn({
    name: "initiator",
    referencedColumnName: "id",
  })
  initiator: InitiatorModel;
}
