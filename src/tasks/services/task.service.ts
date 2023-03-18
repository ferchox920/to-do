import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/tasks.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async create(body:any) {
    const newTask = this.taskRepository.create(body);
    return await this.taskRepository.save(newTask);
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOne(id: number){
    return await this.taskRepository.findOne({where:{id}});
  }

  async update(id: number, body: any) {
    const task= await this.taskRepository.findOne({where:{id}})
    this.taskRepository.merge(task, body)
    return await this.taskRepository.save(task);
  }

  async remove(id: number): Promise<string> {
    await this.taskRepository.delete(id);
    return `Task with ID ${id} successfully deleted`;
  }
}
