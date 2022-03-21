import { Module } from '@nestjs/common';
import { TasksController } from '../app.controller';
import { TaskService, TaskService2 } from '../app.service';

@Module({
  controllers: [TasksController],
  providers: [TaskService, TaskService2],
  // exports: [TaskService2],
})
export class FirstModule {}
