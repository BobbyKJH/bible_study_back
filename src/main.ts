import { NestFactory } from "@nestjs/core";
/** Module */
import { AppModule } from "src/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000);
}
bootstrap();
