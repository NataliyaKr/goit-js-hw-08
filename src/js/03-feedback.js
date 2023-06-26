import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector("[name='email']");
const message = document.querySelector("[name='message']");

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

function onFormInput() {
    const params = {
        email: email.value,
        message: message.value
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(params));
};

const data = localStorage.getItem(STORAGE_KEY);
const parseData = JSON.parse(data);

if (parseData) {
    email.value = parseData.email;
    message.value = parseData.message;
}

function onFormSubmit(e) {
    e.preventDefault();
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
}