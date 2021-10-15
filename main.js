const player1 = {
    name: 'Player 1',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapons: ['Bazooka'],
    attack: () => {
        console.log(this.name + ' Fight...')
    }
}

const player2 = {
    name: 'Player 2',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapons: ['Gun'],
    attack: () => {
        console.log(this.name + ' Fight...')
    }
}

function createPlayer(playerClassName, playerClass) {
    // Создаем игрока
    const $player = document.createElement('div');
    $player.classList.add(playerClassName);
    
    // Добавляем игроку прогресс бар
    $progress = document.createElement('div');
    $progress.classList.add('progressbar');
    // Жизнь
    $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = `${playerClass.hp}%`;
    $progress.appendChild($life);
    // Имя игрока
    $name = document.createElement('div');
    $name.classList.add('name');
    $name.textContent = playerClass.name.toUpperCase();
    $progress.appendChild($name);
    $player.appendChild($progress);
    
    // Добавляем игроку изображение персонажа
    $character = document.createElement('div');
    $character.classList.add('character');
    $img = document.createElement('img');
    $img.src = playerClass.img;
    $character.appendChild($img);
    $player.appendChild($character);

    // Добавим игрока в арену
    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);