import inputErrors from '../script/utils';

export default function addPlayer() {
  const button = document.querySelector('button');

  button.addEventListener('click', () => {
    inputErrors();
  });
}
