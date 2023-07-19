const arr = ['1','2','3','4'];

function inArr() {
  let num = prompt("bir eded daxil edin");
  if (arr.includes(num) === true) {
    return true;
  } else {
    return false;
  }
}
console.log(inArr());