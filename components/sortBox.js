export default function sortBoxes() {
  const wrap = document.querySelector('.wrapper');
  const boxes = Array.from(document.querySelectorAll('.box'));
  boxes.sort((a, b) => {
    const scoreA = parseInt(a.querySelector('.score').textContent, 10);
    const scoreB = parseInt(b.querySelector('.score').textContent, 10);
    return scoreB - scoreA;
  });
  boxes.forEach((box) => wrap.appendChild(box));
}
