import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './services/task.service';
import { TasksController } from './controllers/tasks.controller';
import { Task } from './entities/tasks.entity';


@Module({
  imports:[
    TypeOrmModule.forFeature([Task])
  ],
  providers: [ TaskService],
  controllers: [TasksController]
})
export class TasksModule {}
