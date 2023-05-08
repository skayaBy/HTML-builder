const fs = require('fs'); 
const path = require('path'); 
const { stdin, stdout } = process;

// Создание файла для записи
fs.writeFile(
  path.join(__dirname, '.\\text.txt'),
  '',
  (err) => {
      if (err) throw err;
  }
);

stdout.write('Введите текст для записи в файл. Для выхода напишите exit или нажмите комбинацию клавиш ctrl + c:\n');
//Ожидание ввода текста пользователем, с дальнейшей проверкой ввода на наличие ключевого слова exit
stdin.on('data', data => {
  if(data.toString().trim() === 'exit') {
    stdout.write('До свидания!');
    process.exit();
  }
  // Запись текста в файл
  fs.appendFile(
    path.join(__dirname, '.\\text.txt'),
    data.toString(),
    err => {
      if (err) throw err;
    }
  );
});

process.on('SIGINT', () => {
  stdout.write('До свидания!');
  process.exit();
});