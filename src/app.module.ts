import { Module } from '@nestjs/common';
/** Controller */
import { AppController } from 'app.controller';
/** Service */
import { AppService } from 'app.service';
/** Module */
import { TypeOrmModule } from '@nestjs/typeorm';
/** Config */
import { typeORMConfig } from 'config/typeorm.database.config';
import { UserModule } from './user/user.module';
import { PbsModule } from './pbs/pbs.module';
import { QtModule } from './qt/qt.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    UserModule,
    PbsModule,
    QtModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
