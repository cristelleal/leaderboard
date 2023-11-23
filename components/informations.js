export default function informationsLine(errorMessage) {
  const head = document.querySelector('header');
  const informations = document.createElement('p');
  informations.id = 'error-message';
  informations.classList.add('error');
  informations.textContent = errorMessage;
  head.appendChild(informations);
}
