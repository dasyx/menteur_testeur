let btn = document.querySelector('button');
let paragraph = document.getElementById('text');

let nameInput = document.getElementById('user_name');
let ageInput = document.getElementById('user_age');

const mates = [{ name: "David", age: 40 }, { name: "Marco", age: 62 }];

btn.onclick = function () {
  let name = nameInput.value.trim();
  let age = parseInt(ageInput.value);
  let match = mates.find(mate => mate.name === name && mate.age === age);
  
  if (isNaN(age) || age === null) {
    paragraph.innerHTML = "Age invalide, veuillez saisir un nombre";
  } else if (age >= 130 || age <= 0) {
    paragraph.innerHTML = "Ceci n'est pas un âge humain";
  } else if (!match) {
    paragraph.innerHTML = "Mytho !";
  } else {
    paragraph.innerHTML = `Votre nom est ${name} et vous avez ${age} ans`;
  }
};

