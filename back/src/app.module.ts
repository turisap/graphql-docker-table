import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoModule } from "./todo/todo.module";
import { FilterModule } from "./filter/filter.module";

@Module({
  imports: [
    TodoModule,
    FilterModule,
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
    }),

    TypeOrmModule.forRoot({
      type: "postgres",
      host: "db",
      port: 5432,
      username: "turisap",
      password: "example",
      database: "graphql_back",
      entities: ["dist/**/*.model.js"],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
