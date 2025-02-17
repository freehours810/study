// 播放按钮交互
const video = document.getElementById('mainVideo');
const overlay = document.querySelector('.video-overlay');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
  video.play();
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 500); // 等待透明度过渡完成
});

// 点击屏幕添加粒子特效
document.body.addEventListener('click', (e) => {
  createParticle(e.clientX, e.clientY);
});

function createParticle(x, y) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  document.body.appendChild(particle);

  // 随机颜色
  const colors = ['#ff4757', '#2ed573', '#1e90ff', '#ffa502'];
  particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  // 初始位置
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  // 随机大小
  const size = Math.random() * 20 + 5;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  // 动画
  const animation = particle.animate(
    [
      { transform: 'scale(1)', opacity: 1 },
      { transform: 'scale(2)', opacity: 0 }
    ],
    {
      duration: Math.random() * 1000 + 500, // 随机时长
      easing: 'ease-out'
    }
  );

  // 动画结束后移除粒子
  animation.onfinish = () => {
    particle.remove();
  };
}