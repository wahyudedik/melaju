const player = document.querySelector('.player');
const flag = document.querySelector('.flag');
const obstacle = document.querySelector('.obstacle');
let level = 1;

function checkCollision(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();
  return !(
    rect1.top > rect2.bottom ||
    rect1.bottom < rect2.top ||
    rect1.left > rect2.right ||
    rect1.right < rect2.left
  );
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    const playerLeft = parseInt(getComputedStyle(player).left);
    if (playerLeft > 0) {
      player.style.left = playerLeft - 10 + 'px';
    }
  } else if (event.key === 'ArrowRight') {
    const playerLeft = parseInt(getComputedStyle(player).left);
    if (playerLeft < 260) {
      player.style.left = playerLeft + 10 + 'px';
    }
  }
});

function checkWin() {
  if (checkCollision(player, flag)) {
    alert(`Selamat! Anda berhasil menyelesaikan level ${level}`);
    level++;
    player.style.left = '50px';
    if (level === 4) {
      alert('Anda telah menyelesaikan semua level! Permainan selesai.');
      level = 1;
    }
  }
}

function checkObstacleCollision() {
  if (checkCollision(player, obstacle)) {
    alert(`Anda terkena rintangan! Coba lagi.`);
    player.style.left = '50px';
  }
}

function gameLoop() {
  checkWin();
  checkObstacleCollision();
  requestAnimationFrame(gameLoop);
}

gameLoop();
