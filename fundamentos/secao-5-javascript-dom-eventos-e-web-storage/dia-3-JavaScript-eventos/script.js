function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let ul = document.getElementById('days');
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let li = document.createElement('li');
    let day = decemberDaysList[index];
    li.innerHTML = day;
    li.className = 'day';
    ul.appendChild(li);
    if (day === 24 || day === 31) {
      li.className = 'day holiday';
    }
    if (day === 4 || day === 11 || day === 18) {
      li.className = 'day friday';
    }
    if (day === 25) {
      li.className = 'day holiday friday';
    }
  }
}

createDaysOfTheMonth();

function creatButton (param) {
  let buttonContainer = document.getElementsByClassName('buttons-container');
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerHTML = param;
  buttonContainer[0].appendChild(button);
}

creatButton('Feriados');

function changeBackground () {
  let button = document.getElementById('btn-holiday');
  let holiday = document.getElementsByClassName('holiday');
  let inicialColor = 'rgb(238,238,238)';
  let newColor = 'lightgrey';

  button.addEventListener('click', function(){
    for (let index = 0; index < holiday.length; index += 1) {
      if (holiday[index].style.backgroundColor === newColor) {
        holiday[index].style.backgroundColor = inicialColor;
      }
      else {
        holiday[index].style.backgroundColor = newColor;
      }
    }
  });
}

changeBackground();