import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { TaskController } from './controllers/tasks.controller';
import { Task } from './entities/tasks.entity';
import { TaskService } from './services/task.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task]),UserModule],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
