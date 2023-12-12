import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
/** Controller */
import { AppController } from "src/app.controller";
/** Service */
import { AppService } from "src/app.service";
/** Module */
import { QtModule } from 'src/qt/qt.module';
import { PbsModule } from "src/pbs/pbs.module";
import { PostsModule } from "src/posts/posts.module";
import { UsersModule } from "src/users/users.module";
/** Entity */
import { PbsModel } from "src/pbs/entities/pbs.entity";
import { UsersModel } from "src/users/entities/users.entity";
import { PostsModel } from "src/posts/entities/posts.entity";

@Module({
  imports: [
    PostsModule,
    UsersModule,
    PbsModule,
    TypeOrmModule.forRoot({
      /** 데이터 베이스 타입 */
      type: "postgres",
      host: "127.0.0.1",
      port: 5433,
      username: "postgres",
      password: "ahslxj2429",
      database: "postgres",
      entities: [PostsModel, UsersModel, PbsModel],
      synchronize: true,
    }),
    QtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
