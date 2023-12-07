import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostsModel } from "./posts/entities/posts.entity";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostsModule } from "./posts/posts.module";
import { PbsModule } from "./pbs/pbs.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      /** 데이터 베이스 타입 */
      type: "postgres",
      host: "127.0.0.1",
      port: 5432,
      username: "postgres",
      password: "ahslxj2429",
      database: "bible",
      entities: [PostsModel],
      synchronize: true,
    }),
    PostsModule,
    PbsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
