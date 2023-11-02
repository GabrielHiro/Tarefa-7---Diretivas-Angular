import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks = [
    { descricao: 'Tarefa 1', concluida: true },
    { descricao: 'Tarefa 2', concluida: false },
    { descricao: 'Tarefa 3', concluida: false },
    { descricao: 'Tarefa 4', concluida: true },
    { descricao: 'Tarefa 5', concluida: false },
  ];

  nomeBotao = 'Concluir';

  constructor() {}

  ngOnInit(): void {}

  toggleConclusao(task: any): void {
    task.concluida = !task.concluida;
    // nome do botão
    this.nomeBotao = task.concluida ? 'Desconcluir' : 'Concluir';
  }
}
