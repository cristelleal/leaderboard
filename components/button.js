import inputErrors from './inputErrors';
import wrapperPlayer from './wrapper';

export default function addPlayer() {
  const button = document.querySelector('button');

  button.addEventListener('click', () => {
    inputErrors();
    wrapperPlayer();
  });
}
