const tasks = ["Limpar a casa", "Estudar inglês", "Malhar", "Programar"];

const newTask = process.argv[2];

tasks.push(newTask);

console.log(tasks);
