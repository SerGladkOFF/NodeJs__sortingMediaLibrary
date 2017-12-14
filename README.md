Есть сложная структура папок (обязательна вложенность папок) с музыкальными файлами (можно заменить файлами изображений). Необходимо разобрать нашу музыкальную коллекцию, расположив всех файлы по новым папкам в алфавитном порядке, т.е. все файлы начинающиеся на “a” должны быть в папке “A” и т.д. (для изображений можно отсортировать по расширениям)

Старая папка должна быть удалена.
Реализовать все callback функциями.
Дополнительно: реализовать передачу параметров - имя исходной папки, имя новой папки и параметр удаления старой, через командную строку.

Легкий вариант. Можно пользоваться вспомогательными модулями.

Сложный: сделать нативными методами Node.js



Использовать линтер:
https://github.com/standard/eslint-config-standard
Файл .eslintrc должен быть следующим:
{
 "extends": "standard",
 "rules": {
   "no-extra-semi": "error",
   "semi": [2, "always"]
 }
}

