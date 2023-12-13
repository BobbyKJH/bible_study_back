import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
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
import { AdminModule } from 'src//admin/admin.module';
import { AnalyticsModule } from 'src/analytics/analytics.module';
/** Entity */
import { QtModel } from "src/qt/entities/qt.entity";
import { PbsModel } from "src/pbs/entities/pbs.entity";
import { UsersModel } from "src/users/entities/users.entity";
import { PostsModel } from "src/posts/entities/posts.entity";

@Module({
  imports: [
    PostsModule,
    UsersModule,
    PbsModule,
    QtModule,
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      /** 데이터 베이스 타입 */
      type: "postgres",
      host: process.env["DB_HOST"],
      port: parseInt(process.env["DB_PORT"]),
      username: process.env["DB_USERNAME"],
      password: process.env["DB_PASSWORD"],
      database: process.env["DB_DATABASE"],
      entities: [PostsModel, UsersModel, PbsModel, QtModel],
      synchronize: true,
    }),
    AdminModule,
    AnalyticsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
