function changeText () {
  document.getElementsByTagName('p')[1].innerText = 'Em dois anos espero ja estar trabalhando com o que gosto e de preferencia ganhando muito dinheiro.';
}
changeText();

function changeColor () {
  document.getElementsByClassName("main-content")[0].style.backgroundColor = 'rgb(76,164,109)';
}
changeColor();

function changeWhite () {
  document.getElementsByClassName('center-content')[0].style.background = 'white';
}
changeWhite();

function fixText () {
  document.getElementsByClassName('title')[0].innerText = 'Exercício - JavaScript';
}
fixText();

function capitalText () {
  document.getElementsByTagName('p')[0].innerText = document.getElementsByTagName('p')[0].innerText.toUpperCase();
}
capitalText();

function allPs () {
  let ps = document.getElementsByTagName('p');
  for (let index = 0; index < ps.length; index += 1) {
    console.log(ps[index].innerHTML);
  }
}
allPs();