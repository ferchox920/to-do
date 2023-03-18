import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('api/tasks')
export class TasksController {
  @Get()
  getAllTasks() {
    // lógica para obtener todas las tareas
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    // lógica para obtener la tarea con el ID especificado
  }

  @Post()
  createTask(@Body() taskData: any) {
    // lógica para crear una nueva tarea con los datos proporcionados en taskData
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() taskData: any) {
    // lógica para actualizar la tarea con el ID especificado con los datos proporcionados en taskData
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    // lógica para eliminar la tarea con el ID especificado
  }
}
