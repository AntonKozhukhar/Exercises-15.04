"use strict";

/* let form = document.forms.form;
let label = document.querySelector('.label')
let element = form.elements.element;

element.addEventListener('focus', function() {
    label.classList.add('active');
})
element.addEventListener('blur', function() {
    if (element.value === '') {
        label.classList.remove('active');
    }
}) */

/* 2. Сгенерировать форму. */
const formObj = [
    {
        elem: "input",
        type: "text",
        value: "12",
        label: "Age",
        required: true,
    },
    {
        elem: "input",
        type: "text",
        value: "Ivan",
        label: "Name",
        required: true,
    },
    {
        elem: "select",
        value: "male",
        required: true,
        label: "Gender",
        options: ["male", "female"],
    },
];

let form = document.createElement("form");

for (let i = 0; i < formObj.length; i++) {
    let element = document.createElement(formObj[i].elem);
    if (formObj[i].elem === "input") {
        element.setAttribute("type", formObj[i].type);
    }
    if (formObj[i].elem === "select") {
        for (let j = 0; j < formObj[i].options.length; j++) {
            let option = document.createElement('option');
            option.innerText = formObj[i].options[j];
            element.append(option);
        }
    }
    element.value = formObj[i].value;
    element.setAttribute("required", formObj[i].required);
    form.append(element);
    let label = document.createElement('label');
    label.innerText = formObj[i].label;
    form.append(label);
}
document.body.append(form);

let button = document.createElement('button');
button.setAttribute('type', 'submit');
button.innerText = 'Click ME';
document.body.append(button);
