const form = document.getElementById('form');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const value = document.getElementById('value');
const description = document.getElementById('description');
const infos = document.getElementById('infos');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let weight = weightInput.value.replace(',', '.');
    let height = heightInput.value.replace(',', '.');

    weight = parseFloat(weight);
    height = parseFloat(height);

    if (isNaN(weight) || isNaN(height)) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    value.textContent = bmi;

    let desc = '';
    if (bmi < 18.5) {
        desc = 'Abaixo do peso';
        value.className = '';
        value.classList.add('attention');
    } else if (bmi < 24.9) {
        desc = 'Peso normal';
        value.className = '';
        value.classList.add('normal');
    } else if (bmi < 29.9) {
        desc = 'Sobrepeso';
        value.className = '';
        value.classList.add('attention');
    } else if (bmi < 34.9) {
        desc = 'Obesidade grau I';
        value.className = '';
        value.classList.add('attention');
    } else if (bmi < 39.9) {
        desc = 'Obesidade grau II';
        value.className = '';
        value.classList.add('alert');
    } else {
        desc = 'Obesidade morbida';
        value.className = '';
        value.classList.add('alert');
    }

    description.children[0].textContent = desc;
    infos.classList.remove('hidden');
});
