import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/tasks.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(task: Task): Promise<Task> {
    return await this.taskRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    return await this.taskRepository.findOne({where:{id}});
  }

  async update(id: number, task: Task): Promise<Task> {
    await this.taskRepository.update(id, task);
    return await this.taskRepository.findOne({where:{id}});
  }

  async remove(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
