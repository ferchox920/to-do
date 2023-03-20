import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/services/user.service';
import { Repository } from 'typeorm';
import { CreateTaskDto } from '../dto/create-tasks.dto';
import { Task } from '../entities/tasks.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    private userService: UserService,
  ) {}

  async create(createTaskDto: CreateTaskDto, id: number) {
  
    const user = await this.userService.findOne(id);
    
    const task = new Task();
    task.name = createTaskDto.name;
    task.description = createTaskDto.description;
    task.user = user;
  
    return await this.taskRepository.save(task);
  }
  

  async findAll() {
    return await this.taskRepository.find();
  }

  async findAllTaskByUserNotCompleted(userId: number) {
    return await this.taskRepository.find({
      relations: ['user'],
      where: { user: { id: userId }, completed: false },
    });
  }

  async findAllTaskByUserCompleted(userId: number) {
    return await this.taskRepository.find({
      relations: ['user'],
      where: { user: { id: userId }, completed: true },
    });
  }

  async findOne(id: number) {
    return await this.taskRepository.findOne({ where: { id } });
  }

  async update(taskId: number) {
    return await this.taskRepository.update(taskId,{completed:true})
  }

  async remove(taskId: number): Promise<string> {
    await this.taskRepository.delete(taskId);
    return `Task with ID ${taskId} successfully deleted`;
  }
}
