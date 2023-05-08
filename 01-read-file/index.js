const fs = require('fs'); // импортируем fs для работы с файлами и папками
const path = require('path'); // импортируем path для работы с путями
const source = path.join(__dirname, '.\\text.txt'); // путь для файла
const stream = fs.createReadStream(source, 'utf-8');  // создание потока чтения 
let data = '';
stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log(data)); // При наступлении события 'end' выведем в консоль данные  
stream.on('error', error => console.log('Error', error.message)); // При возникновении ошибки будет сгенерировано событие error
