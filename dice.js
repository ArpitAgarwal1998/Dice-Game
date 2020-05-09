p1 = Math.floor(Math.random()*6) + 1
p2 = Math.floor(Math.random()*6) + 1
player1 = 'images/dice' + p1 + '.png'
player2 = 'images/dice' + p2 + '.png'
winner = document.querySelector('.container h1')
if (p1>p2){
  winner.textContent = 'Player 1 Wins!🚩'
}
else if(p2>p1){
  winner.textContent = '🚩Player 2 Wins!'
}
else{
  winner.textContent = 'Draw!'
}
img1 = document.querySelector('.img1')
img2 = document.querySelector('.img2')
img1.setAttribute('src',player1)
img2.setAttribute('src',player2)
