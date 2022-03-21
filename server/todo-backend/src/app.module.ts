import { Global, Module } from '@nestjs/common';
import { FirstModule } from './task.mod/first.module';

@Module({
  imports: [FirstModule],
})
export class TaskModule {}
