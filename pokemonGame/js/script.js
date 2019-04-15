// function p(params) {
//  // var i = document.getElementById('name').value;
//  alert ('Hello ' + document.getElementById('f').value);
// }

document.getElementById('r').onkeypress = function (event) {
 if (event.keyCode < 48 || event.keyCode > 57) {
  console.log('Не цифра');
  return false;
 }
}