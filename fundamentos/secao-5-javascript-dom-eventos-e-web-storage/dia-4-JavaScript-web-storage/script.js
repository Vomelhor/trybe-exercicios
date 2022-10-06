window.onload = function(){
  let select = document.getElementById('select');
  select.addEventListener('change', function(){
    let selectColor = select.selectedOptions[0];
    document.body.style.backgroundColor = selectColor.value;
  });

  let selectText = document.getElementById('selectText');
  selectText.addEventListener('change', function(){
    let selectTextColor = selectText.selectedOptions[0];
    document.body.style.color = selectTextColor.value;
  });

  let fontSize = document.getElementById('font-size');
  fontSize.addEventListener('change', function(){
    let p = document.getElementsByTagName('p')[0];
    p.style.fontSize = `${fontSize.value}px`;
  });
  
}