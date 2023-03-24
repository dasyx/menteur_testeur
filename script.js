let btn = document.querySelector('button');
let paragraph = document.getElementById('text');

let nameInput = document.getElementById('user_name');
let ageInput = document.getElementById('user_age');

const mates = [{ name: "David", age: 40 }, { name: "Marco", age: 62 }];

btn.onclick = function () {
  let name = nameInput.value.trim();
  let age = parseInt(ageInput.value);
  let mate = mates.find(mate => mate.name === name);
  
  if (isNaN(age)) {
    paragraph.innerHTML = "Invalid age";
  } else if (age >= 130 || age <= 0) {
    paragraph.innerHTML = "Ceci n'est pas un âge humain";
  } else if (!mate) {
    paragraph.innerHTML = "Utilisateur non reconnu";
  } else if (mate.age !== age) {
    paragraph.innerHTML = "Mytho !";
  } else {
    paragraph.innerHTML = `My name is ${name} and I am ${age} years old`;
  }
};