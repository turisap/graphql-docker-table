import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, registerEnumType } from "@nestjs/graphql";

export enum Initiator {
  turisap = "turisap",
  dad = "dad",
  mom = "mom",
  work = "work",
}

export enum Filter {
  untouched = "untouched",
  progress = "progress",
  done = "done",
  aside = "set aside",
  cancelled = "cancelled",
}

registerEnumType(Initiator, { name: "Initiator" });
registerEnumType(Filter, { name: "Filter" });

@ObjectType()
@Entity()
export class FilterModel {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => Filter)
  @Column({
    type: "enum",
    enum: Filter,
    default: Filter.untouched,
  })
  title: Filter;
}

@ObjectType()
@Entity()
export class InitiatorModel {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => Initiator)
  @Column({
    type: "enum",
    enum: Initiator,
    default: Initiator.turisap,
  })
  title: Initiator;
}
