import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, DeleteResult } from "typeorm";
import { CreateFilterDTO } from "./filter.dto";
import { FilterModel } from "./filter.model";

@Injectable()
export class FilterService {
  constructor(
    @InjectRepository(FilterModel)
    private filterRepository: Repository<FilterModel>
  ) {}

  async create(Filter: CreateFilterDTO): Promise<FilterModel> {
    return this.filterRepository.save({
      ...Filter,
    } as any);
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.filterRepository.delete(id);
  }

  findAll(): Promise<FilterModel[]> {
    return this.filterRepository.find();
  }
}
