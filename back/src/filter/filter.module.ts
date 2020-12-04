import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { FilterService } from "./filter.service";
import { FilterResolver } from "./filter.resolver";
import { FilterModel } from "./filter.model";

@Module({
  imports: [TypeOrmModule.forFeature([FilterModel])],
  providers: [FilterService, FilterResolver],
  exports: [FilterService],
})
export class FilterModule {}
