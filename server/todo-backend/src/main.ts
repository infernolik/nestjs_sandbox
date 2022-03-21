import { NestFactory } from '@nestjs/core';
import { TaskModule } from './app.module';
const connectDB = require('../db/db.js');

connectDB();

async function bootstrap() {
  const app = await NestFactory.create(TaskModule);
  await app.listen(5000);
}

bootstrap();
