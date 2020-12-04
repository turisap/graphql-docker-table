import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { TodoResolver } from "./todo.resolver";
import { TodoModel } from "./todo.model";

@Module({
  imports: [TypeOrmModule.forFeature([TodoModel])],
  providers: [TodoService, TodoResolver],
  exports: [TodoService],
})
export class TodoModule {}
