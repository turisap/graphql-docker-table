import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, createQueryBuilder } from "typeorm";
import { CreateTodoDTO } from "./todo.dto";
import { TodoModel } from "./todo.model";

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoModel)
    private todoRepository: Repository<TodoModel>
  ) {}

  async create(todo: CreateTodoDTO): Promise<TodoModel> {
    return this.todoRepository.save({
      ...todo,
    } as any);
  }

  async delete(id: string): Promise<string> {
    await this.todoRepository.delete(id);

    return id;
  }

  async findAll(): Promise<TodoModel[]> {
    // return this.todoRepository.find();
    const allTodos = await createQueryBuilder(TodoModel, "todo")
      .leftJoinAndSelect("todo.filter", "filter")
      .leftJoinAndSelect("todo.initiator", "initiator")
      .getMany();

    return allTodos;
  }

  async findOne(id: string): Promise<TodoModel> {
    const todoWithFilter = await createQueryBuilder(TodoModel, "todo")
      .leftJoinAndSelect("todo.filter", "filter")
      .leftJoinAndSelect("todo.initiator", "initiator")
      .where("todo.todo_id = :id", { id })
      .getOne();

    return todoWithFilter;
  }
}
