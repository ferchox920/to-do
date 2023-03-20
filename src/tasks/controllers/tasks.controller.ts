import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common/pipes';
import { CreateTaskDto } from '../dto/create-tasks.dto';
import { Task } from '../entities/tasks.entity';
import { TaskService } from '../services/task.service';


@Controller('api/tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post(":userId")
  create(@Body(ValidationPipe) createTaskDto: CreateTaskDto ,@Param("userId")userId:number) {
    return this.taskService.create(createTaskDto, Number(userId));
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Task> {
    return this.taskService.findOne(Number(id));
  }

  @Patch(':taskId')
  async update(@Param('taskId') taskId: number) {
    return this.taskService.update(Number(taskId));
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.taskService.remove(Number(id));
  }

  @Get(':userId/tasks/not-completed')
  async findAllTaskByUserNotCompleted(@Param('userId') userId: number): Promise<Task[]> {
    return this.taskService.findAllTaskByUserNotCompleted(Number(userId));
  }

  @Get(':userId/tasks/completed')
  async findAllTaskByUserCompleted(@Param('userId') userId: number): Promise<Task[]> {
    return this.taskService.findAllTaskByUserCompleted(Number(userId));
  }
}
