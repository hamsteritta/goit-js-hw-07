const hear = document.querySelector('input#name-input');
const userName = document.querySelector('span#name-output');

hear.addEventListener("input", event => {
    let name = hear.value.trim();
    if (name == '') {
        name = 'Anonymous';
    }
    userName.innerHTML = name;
});

