const res = document.getElementById("result");
isNewCalculation = true

function addScreen(value){
  if(!isNewCalculation){
    res.value=''
    res.value += value
    isNewCalculation=true
  }else{
    res.value += value
  }
}

function calculate(result) {
  const calculated = new Function('return ' + result)();
  res.value=calculated;
  isNewCalculation = false
}

function clearScreen() {
  res.value=''
}

function toggleTheme() {
  document.body.classList.toggle('light-theme');
}