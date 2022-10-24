const input = document.querySelector('input');
const button = document.querySelector('button');
const personaContainer = document.querySelector('.persona-container');

button.addEventListener('click', (e) => {
    e.preventDefault();
    traerPersona(input.value);
})

function traerPersona(users) {
    fetch(`https://reqres.in/api/users/${users}`)
    .then((res) => res.json())
    .then((datos) => {
        crearPersona(datos);
    });
}

function crearPersona(users) {
    const h2 = document.createElement('h2')
    h2.textContent = users.data.id;

    const img = document.createElement('img');
    img.src = users.data.avatar;

    const h3 = document.createElement('h3');
    h3.textContent = users.data.first_name;

    const h4 = document.createElement('h4');
    h4.textContent = users.data.last_name;
    
    const h5 = document.createElement('h5');
    h5.textContent = users.data.email;

    const div = document.createElement('div');
    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);

    personaContainer.appendChild(div);
}

//traerPersona();