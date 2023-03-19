import { Injectable } from '@nestjs/common';
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

  async create(createTaskDto: CreateTaskDto, userId: number) {
    const user = await this.userService.findOne(userId);

    const task = new Task();
    task.name = createTaskDto.name;
    task.description = createTaskDto.description;
    task.user = user;

    return await this.taskRepository.save(task);
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOne(id: number){
    return await this.taskRepository.findOne({where:{id}});
  }

  async update(id: number, body: any) {
    const task = await this.taskRepository.findOne({where:{id}})
    this.taskRepository.merge(task, body)
    return await this.taskRepository.save(task);
  }

  async remove(id: number): Promise<string> {
    await this.taskRepository.delete(id);
    return `Task with ID ${id} successfully deleted`;
  }
}
