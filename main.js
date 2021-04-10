const player1 = {
    name: 'Kitana',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Shotgun', 'foot_hit'],
    attack:function(){
        console.log(player1.name + 'Fight...')
    }
}

const player2 = {
    name: 'Sub-zero',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Ice', 'hand_hit'],
    attack:function(){
        console.log(player2.name + 'Fight...')
    }
}


function createPlayer(class_name , player){
    const player1 = document.createElement('div');
        player1.classList.add(class_name);
    
    const progressbar = document.createElement('div');
        progressbar.classList.add('progressbar');
        player1.appendChild(progressbar);


    const character = document.createElement('div');
        character.classList.add('character');
        player1.appendChild(progressbar);
        

    const life = document.createElement('div')
        life.classList.add('life');
        life.style.width = '100%';
        life.style.width = player.hp + '%';
    progressbar.appendChild(life);

    const name = document.createElement('div');
        name.classList.add('name');
        name.innerHTML = player.name;
        progressbar.appendChild(name);

    const img = document.createElement('img')
         img.setAttribute('src',player.img);
         character.appendChild(img);
         player1.appendChild(character);
    const arenas = document.querySelector('.arenas');
        arenas.appendChild(player1);
}
createPlayer('player1',player1)
createPlayer('player2',player2)