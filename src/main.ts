import { NestFactory } from '@nestjs/core';
/** Module */
import { AppModule } from 'app.module';
/** 환경 변수 */
import { config } from "dotenv";

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
