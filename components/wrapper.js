import Player from '../class/Player';
import { createDate, capitalizeFirstLetter } from '../script/utils';
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

  if (
    !emptyField.includes(firstNameInput.value.trim())
    && !emptyField.includes(lastNameInput.value.trim())
    && !emptyField.includes(countryInput.value.trim())
    && !emptyField.includes(scoreInput.value.trim())
  ) {
    const player = new Player(
      capitalizeFirstLetter(firstNameInput.value.trim()),
      capitalizeFirstLetter(lastNameInput.value.trim()),
      capitalizeFirstLetter(countryInput.value.trim()),
      scoreInput.value.trim(),
    );

    const isPlayerExists = existingPlayers.some(
      (existingPlayer) => existingPlayer.getFullName() === player.getFullName(),
    );

    if (isPlayerExists) {
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

    name.textContent = `${player.firstName} ${player.lastName}`;
    date.textContent = createDate().toUpperCase();
    country.textContent = player.country;
    score.textContent = player.score;
    addFive.textContent = '+5';
    removeFive.textContent = '-5';

    existingPlayers.push(player);

    deletePlayer.addEventListener('click', () => {
      boxDiv.remove();

      const playerIndex = existingPlayers.indexOf(player);

      if (playerIndex !== -1) {
        existingPlayers.splice(playerIndex, 1);
      }
    });

    addFive.addEventListener('click', () => {
      player.increaseScore();
      score.textContent = player.score;
      sortBoxes();
    });

    removeFive.addEventListener('click', () => {
      player.decreaseScore();
      score.textContent = player.score;
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
