import { TodoService } from "./todo.service";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { ID } from "@nestjs/graphql";
import { Inject } from "@nestjs/common";
import { TodoModel } from "./todo.model";
import { CreateTodoDTO } from "./todo.dto";

@Resolver((of) => TodoModel)
export class TodoResolver {
  constructor(@Inject(TodoService) private todoService: TodoService) {}

  @Query((returns) => TodoModel)
  async todo(@Args("todo_id") id: string): Promise<TodoModel> {
    return await this.todoService.findOne(id);
  }

  @Query((returns) => [TodoModel])
  async todos(): Promise<TodoModel[]> {
    return await this.todoService.findAll();
  }

  @Mutation((returns) => TodoModel)
  async createTodo(@Args("todo") Todo: CreateTodoDTO): Promise<TodoModel> {
    return await this.todoService.create(Todo);
  }

  @Mutation((returns) => ID)
  async deleteTodo(@Args("todo_id") id: string): Promise<string> {
    return await this.todoService.delete(id);
  }
}
