import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { TaskService, TaskService2 } from './app.service';
const Todo = require('../models/todo.js');

class todo {
  readonly idNum: number;
  readonly text: string;
  readonly done: boolean;
}

@Controller('/tasks')
export class TasksController {
  private test1;
  constructor(private taskService: TaskService) {
    this.test1 = new TaskService2();
  }
  @Get()
  @HttpCode(200)
  @Header('x-custom-header', 'customHeaderVal')
  async retrieveAllTasks(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    try {
      // Трудоёмкая операция
      const todos = await Todo.find({ paramToFind: 'EXPLICIT_FINDER' });
      todos.forEach((item) => {
        this.taskService.create(item);
      });
      //

      return res.status(200).send(todos);
    } catch (err) {
      return res.status(404).json({ error: err.message });
    }
  }

  // @desc update task
  // @access public
  @Post(':id')
  async updateTask(
    @Param('id') myTask,
    @Body() myBody,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const { idNum, text, done } = myBody;
      const todo = await Todo.findOneAndUpdate(
        { idNum: myTask },
        { text, done },
      );
      console.log(todo);
      res.status(200).send(todo);
    } catch (err) {
      return res.status(404).json({ error: err.message });
    }
  }

  // @desc add task
  // @access public
  @Post()
  async addTask(@Body() myBody: todo, @Res() res: Response) {
    const { idNum, text, done } = myBody;
    try {
      const task = await new Todo({
        idNum,
        text,
        done,
        paramToFind: 'EXPLICIT_FINDER',
      });
      await task.save();
      res.status(201).send(task);
    } catch (err) {
      console.log(err.message);
    }
  }
}

// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
