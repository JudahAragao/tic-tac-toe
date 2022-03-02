var rules = {
    turn: 0,
    player1: 'x',
    player2: 'o',
    position: '',
    positionsX: [],
    positionsO: [],
    scoreX: 0,
    scoreO: 0,
    round: 1
}

const style = (player, position) => {
    if (player === 'x') {
        document.querySelector(`.${position}`).style.color = '#da6715'
    }else{
        document.querySelector(`.${position}`).style.color = '#72e401'
    }
}

const positions = position => {
    rules.position = position
    gameDynamics()
}

const gameDynamics = () => {
    if (rules.turn == 0) {
        document.querySelector(`.${rules.position}`).innerHTML = rules.player1
        style(rules.player1, rules.position)
        whosTurn(rules.player1, rules.position)

        rules.turn = 1
    }else{
        document.querySelector(`.${rules.position}`).innerHTML = rules.player2
        style(rules.player2, rules.position)
        whosTurn(rules.player2, rules.position)

        rules.turn = 0
    }
}

const winner = (msg) => {
    document.querySelector('.block').style.zIndex=1
    document.querySelector('.winner').innerHTML = msg
}

const resetField = () => {
    let squares = document.querySelectorAll('.square')
        squares.forEach(square => {
            square.innerHTML = ''
            rules.positionsO = []
            rules.positionsX = []
        })
}

const round = () => {
    if (rules.round < 2) {
        rules.round += 1
        resetField()
    }else if (rules.round === 2){
        if (rules.scoreX > rules.scoreO) {
            winner('Player X Win')
        }else if (rules.scoreX < rules.scoreO) {
            winner('Player O Win')
        }else if (rules.scoreX === rules.scoreO) {
            rules.round += 1
            resetField()
        }
    }else if (rules.round === 3) {
        if (rules.scoreX > rules.scoreO) {
            winner('Player X Win')
        }else if (rules.scoreX < rules.scoreO) {
            winner('Player O Win')
        }
    }
}

const setScore = (player) => {
    if (player === 'x') {
        rules.scoreX += 1
        document.querySelector('#scoreX').innerHTML = rules.scoreX
    }else{
        rules.scoreO += 1
        document.querySelector('#scoreO').innerHTML = rules.scoreO
    }
} 

const whoWonRound = (position, player) => {
    if (position[position.indexOf('a1')] && position[position.indexOf('a2')] && position[position.indexOf('a3')]) {
        setScore(player)
        round()
    }else if (position[position.indexOf('b1')] && position[position.indexOf('b2')] && position[position.indexOf('b3')]){
        setScore(player)
        round()
    }else if (position[position.indexOf('c1')] && position[position.indexOf('c2')] && position[position.indexOf('c3')]){
        setScore(player)
        round()
    }else if (position[position.indexOf('a1')] && position[position.indexOf('b2')] && position[position.indexOf('c3')]){
        setScore(player)
        round()
    }else if (position[position.indexOf('a3')] && position[position.indexOf('b2')] && position[position.indexOf('c1')]){
        setScore(player)
        round()
    }else if (position[position.indexOf('a1')] && position[position.indexOf('b1')] && position[position.indexOf('c1')]){
        setScore(player)
        round()
    }else if (position[position.indexOf('a2')] && position[position.indexOf('b2')] && position[position.indexOf('c2')]){
        setScore(player)
        round()
    }else if (position[position.indexOf('a3')] && position[position.indexOf('b3')] && position[position.indexOf('c3')]){
        setScore(player)
        round()
    }
}

const whosTurn = (player, position) => {
    if (player === 'x') {
        rules.positionsX.push(position)
        whoWonRound(rules.positionsX, player)
    }else{
        rules.positionsO.push(position)
        whoWonRound(rules.positionsO, player)
    }
}

const refresh = () => {
    location.reload()
}