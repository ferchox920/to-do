import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Task } from '../entities/tasks.entity';
import { TaskService } from '../services/task.service';
import { Entity } from 'typeorm';

@Entity()
@Controller('api/tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  create(@Body() body: any) {
    return this.taskService.create(body);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    return this.taskService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: any): Promise<Task> {
    return this.taskService.update(+id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
