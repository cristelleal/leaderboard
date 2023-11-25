import Player from '../class/Player';
import { createDate } from '../script/utils';
import informationsLine from './informations';
import sortBoxes from './sortBox';

const existingPlayers = [];

export default function wrapperPlayer() {
  const wrap = document.querySelector('.wrapper');
  const emptyField = ['', ' ', 'none', null, undefined, false];

  const firstNameInput = document.querySelector('#firstname');
  const lastNameInput = document.querySelector('#lastname');
  const countryInput = document.querySelector('#country');
  const scoreInput = document.querySelector('#score');

  const entireName = `${firstNameInput.value.trim()} ${lastNameInput.value.trim()}`;

  if (
    !emptyField.includes(firstNameInput.value.trim())
    && !emptyField.includes(lastNameInput.value.trim())
    && !emptyField.includes(countryInput.value.trim())
    && !emptyField.includes(scoreInput.value.trim())
  ) {
    const player = new Player(
      firstNameInput.value.trim(),
      lastNameInput.value.trim(),
      countryInput.value.trim(),
      scoreInput.value.trim(),
    );

    if (existingPlayers.includes(player.getFullName())) {
      const errorMessage = 'This player already exists';
      informationsLine(errorMessage);
      throw new Error();
    }

    const boxDiv = document.createElement('div');
    boxDiv.classList.add('box');
    const nameAndDate = document.createElement('div');
    nameAndDate.classList.add('player');
    const name = document.createElement('div');
    const date = document.createElement('div');
    date.classList.add('date');
    const country = document.createElement('div');
    country.classList.add('country');
    const score = document.createElement('div');
    score.classList.add('score');
    const scoreButtons = document.createElement('div');
    scoreButtons.classList.add('score-buttons');
    const deletePlayer = document.createElement('div');
    deletePlayer.classList.add('delete');
    const removeLogo = document.createElement('img');
    removeLogo.src = 'https://i.goopics.net/gkorcr.png';
    removeLogo.classList.add('remove-logo');
    const addFive = document.createElement('div');
    addFive.classList.add('addfive');
    const removeFive = document.createElement('div');
    removeFive.classList.add('removefive');

    name.textContent = `${firstNameInput.value.trim()} ${lastNameInput.value.trim()}`;
    date.textContent = createDate().toUpperCase();
    country.textContent = countryInput.value;
    score.textContent = scoreInput.value;
    addFive.textContent = '+5';
    removeFive.textContent = '-5';

    existingPlayers.push(player);

    deletePlayer.addEventListener('click', () => {
      boxDiv.remove();
      // const index = existingPlayers.indexOf(entireName);
      const oldPayerIndex = existingPlayers.findIndex(
        (existingPlayer) => existingPlayer.getFullName() === player.getFullName(),
      );

      if (oldPayerIndex !== -1) {
        existingPlayers.splice(oldPayerIndex, 1);
      }
    });

    addFive.addEventListener('click', () => {
      const scoreValue = parseInt(score.textContent, 10);
      const newScore = scoreValue + 5;

      if (newScore >= 100) {
        score.textContent = Math.min(newScore, 100);
      } else {
        score.textContent = newScore;
      }

      sortBoxes();
    });

    removeFive.addEventListener('click', () => {
      const scoreValue = parseInt(score.textContent, 10);
      const newScore = scoreValue - 5;

      if (newScore <= 0) {
        score.textContent = Math.max(newScore, 0);
      } else {
        score.textContent = newScore;
      }
      sortBoxes();
    });

    wrap.appendChild(boxDiv);
    nameAndDate.appendChild(name);
    nameAndDate.appendChild(date);
    boxDiv.appendChild(nameAndDate);
    boxDiv.appendChild(country);
    boxDiv.appendChild(score);
    deletePlayer.appendChild(removeLogo);
    scoreButtons.appendChild(deletePlayer);
    scoreButtons.appendChild(addFive);
    scoreButtons.appendChild(removeFive);
    boxDiv.appendChild(scoreButtons);
  }

  sortBoxes();
}
