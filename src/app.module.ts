import { Module } from '@nestjs/common';
/** Controller */
import { AppController } from 'app.controller';
/** Service */
import { AppService } from 'app.service';
/** Module */
import { TypeOrmModule } from '@nestjs/typeorm';
/** Config */
import { typeORMConfig } from 'config/typeorm.database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
