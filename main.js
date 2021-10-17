const $arenas = document.querySelector('.arenas');
const $button = document.querySelector('.button');
let winner = null;

// Классы игроков
const player1 = {
    player: 1,
    name: 'Player 1',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapons: ['Bazooka'],
    attack: () => {
        console.log(this.name + ' Fight...')
    }
}

const player2 = {
    player: 2,
    name: 'Player 2',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapons: ['Gun'],
    attack: () => {
        console.log(this.name + ' Fight...')
    }
}

// Функция создания HTML элемента с указанным классом
function createTag(tagParent, tagName, tagClass) {
    // Создаем элемент
    $tag = document.createElement(tagName);
    // Добавляем класс, если он передан
    if (tagClass) {
        $tag.classList.add(tagClass);
    }
    // Присоединяем к родительскому элементу, если он указан
    if (tagParent) {
        tagParent.appendChild($tag);
    }
    return $tag;
}

// Создание игрока
function createPlayer(playerClass) {
    // Создаем игрока
    const $player = createTag(null, 'div', `player${playerClass.player}`);
    
    // Добавляем игроку прогресс бар
    $progress = createTag($player, 'div', 'progressbar');
    // Жизнь
    $life = createTag($progress, 'div', 'life');
    $life.style.width = `${playerClass.hp}%`;
    // Имя игрока
    $name = createTag($progress, 'div', 'name');
    $name.textContent = playerClass.name.toUpperCase();
    
    // Добавляем игроку изображение персонажа
    $character = createTag($player, 'div', 'character');
    $img = createTag($character, 'img', null);
    $img.src = playerClass.img;

    return $player;
}

/*
function playerLose(name) {
    const $loseTitle = createTag($arenas, 'div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';
    return $loseTitle;
}
*/

// Вывод сообщения о победе
function playerWins(name) {
    const $winsTitle = createTag($arenas, 'div', 'winsTitle');
    $winsTitle.innerText = name + ' wins';
    $button.disabled = true;
}

// Получаем случайное число от 1 до 20
function getRandomNumber() {
    return Math.ceil(Math.random() * 20);
}

// Меняем жизнь игрока
function changeHP(player) {
    // Если есть победитель, не будем уменьшать жизнь
    if (!winner) { 
        const $playerLife = document.querySelector('.player' + player.player + ' .life');
        player.hp -= getRandomNumber();
        if (player.hp < 0) {
            player.hp = 0;
        }
        $playerLife.style.width = player.hp +'%'
    }
    return player.hp;
}

$button.addEventListener('click', () => {
    changeHP(player1);
    if (player1.hp === 0) {
        winner = player2;
    }
    changeHP(player2);
    if (player2.hp === 0) {
        winner = player1;
    }
    if (winner) {
        playerWins(winner.name)
    }
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));