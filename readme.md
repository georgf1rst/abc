# Как работать с этим сайтом?

### Клонируем репозиторий:

`git clone https://gitlab.com/college-dinara-georg/GEM-lms/`

### Переходим в репозиторий:
`cd .\GEM-lms\`

### Устанавливаем dependencies:

`npm install`

### Запускаем сайт:

`npm run dev`

# Инструкция для git

### Обновить главную ветку

######
        git pull origin main

### Создать новую ветку, перейти в неё и проверить где ты

######
        git checkout -b <branch-name>
        git branch

## Вноси изменения в проект

###### ...после изменений...

### Добавь изменения в ветку

######
        git add.

######
        git commit -m "description of changes"

### Залей ветку с изменениями в git репозиторий

######
        git push --set-upstream <branch-name>

## Тебе выдадут ссылку, скопируй её и вставь в браузер. <br> Там будет кнопка merge request. Нажми на неё и ожидай модерации от меня.