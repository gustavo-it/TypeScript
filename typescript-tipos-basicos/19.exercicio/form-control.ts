const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    hideErrorMessages(this); // Esta recebendo um formulário
});

function hideErrorMessages(form: HTMLFormElement): void {

}

function showErrorMessage(input: HTMLInputElement, message: string): void {
    const formFields = input.parentElement as HTMLDivElement; // Pegando o elemento pai do input
    const errorMessage = formFields.querySelector('.error-mesage') as HTMLSpanElement;
    errorMessage.innerText = message;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
}

showErrorMessage(email, 'texto qualquer');
hideErrorMessages(form);