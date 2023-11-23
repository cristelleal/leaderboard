import informationsLine from '../components/informations';

function containsNumber(string) {
  return /\d/.test(string);
}

export default function inputErrors() {
  const inputs = document.querySelectorAll('input');
  const head = document.querySelector('header');
  const firstNameInput = document.querySelector('#firstname');
  const lastNameInput = document.querySelector('#lastname');
  const countryInput = document.querySelector('#country');
  const scoreInput = document.querySelector('#score');
  const emptyField = ['', ' ', 'none'];
  const errorElement = document.getElementById('error-message');

  if (errorElement) {
    head.removeChild(errorElement);
  }

  inputs.forEach((input) => {
    const inputValue = input.value;

    if (emptyField.includes(inputValue)) {
      const errorMessage = 'All fields are required';
      informationsLine(errorMessage);
      throw new Error();
    }
  });

  if (containsNumber(firstNameInput.value)) {
    const errorMessage = 'Firstname must contain only letters';
    informationsLine(errorMessage);
    throw new Error();
  }

  if (containsNumber(lastNameInput.value)) {
    const errorMessage = 'Lastname must contain only letters';
    informationsLine(errorMessage);
    throw new Error();
  }

  if (containsNumber(countryInput.value)) {
    const errorMessage = 'The country must contain only letters';
    informationsLine(errorMessage);
    throw new Error();
  }

  if (Number.isNaN(scoreInput)) {
    const errorMessage = 'The score must contain only numbers';
    informationsLine(errorMessage);
    throw new Error();
  }
}
