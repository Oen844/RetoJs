const result = document.querySelector(".result");

function validarNum() {
  const num = document.querySelector("input#num").value;
  const resultado = binarySearch(num);
  result.innerHTML = `El numero ${num} es el numero ${resultado}`;
  console.log(resultado);
}

function binarySearch(num, max = 10000000000, l = 1, r = 10000000000) {
  if (l > r) {
    return -1;
  }
  let mid = Math.floor((l + r) / 2);
  console.log(mid);
  if (num == mid) {
    return mid;
  }
  if (num > mid) {
    return binarySearch(num, max, mid + 1, r);
  }
  if (num < mid) {
    return binarySearch(num, max, l, mid - 1);
  }
}

