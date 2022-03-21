import { Injectable } from '@nestjs/common';

interface taskModel {
  readonly _id?: any;
  readonly idNum: number;
  readonly text: string;
  readonly done: boolean;
  readonly paramToFind?: string;
}

@Injectable()
export class TaskService {
  private readonly tasks: taskModel[] = [];
  create(task: taskModel) {
    this.tasks.push(task);
  }

  sendBack(): taskModel[] {
    return this.tasks;
  }
}

export class TaskService2 extends TaskService {
  private readonly tasks2: taskModel[] = [];

  create2(task: taskModel) {
    this.tasks2.push(task);
  }

  sendBack2(): taskModel[] {
    return this.tasks2;
  }
}
