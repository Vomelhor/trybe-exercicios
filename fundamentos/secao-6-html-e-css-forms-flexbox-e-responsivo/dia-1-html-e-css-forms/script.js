window.onload = function () {
  const submit = document.getElementById('submit');
  submit.addEventListener('click', function handleSubmit(event) {
    event.preventDefault();
  });
  const clear = document.getElementById('clear');
  clear.addEventListener('click', function clear() {
    const input = document.getElementsByTagName('input');
    const textArea = document.getElementById('why');
    textArea.value = '';
    for (let index = 0; index < input.length; index += 1) {
      input[index].value = '';
      input[index].checked = false;
    }
  });
}
