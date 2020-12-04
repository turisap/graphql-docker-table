import { FilterService } from "./filter.service";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { Inject } from "@nestjs/common";
import { FilterModel } from "./filter.model";
import { CreateFilterDTO } from "./filter.dto";
import { DeleteResult } from "typeorm";

@Resolver((of) => FilterModel)
export class FilterResolver {
  constructor(@Inject(FilterService) private filterService: FilterService) {}

  @Query((returns) => [FilterModel])
  async Filters(): Promise<FilterModel[]> {
    return await this.filterService.findAll();
  }

  @Mutation((returns) => FilterModel)
  async createFilter(
    @Args("Filter") Filter: CreateFilterDTO
  ): Promise<FilterModel> {
    return await this.filterService.create(Filter);
  }

  @Mutation((returns) => FilterModel)
  async deleteFilter(@Args("id") id: string): Promise<DeleteResult> {
    return await this.filterService.delete(id);
  }
}
