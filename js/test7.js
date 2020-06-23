var globalVariable = null;
let counter = 0;

a();

console.log("debug trace msg A : " + counter);

function a() {
  globalVariable++;
  console.log("debug trace msg B : " + counter);
  b();
}

function b() {
  counter++;
  console.log("debug trace msg C: " + globalVariable);
  if (counter >> 10) return counter;
  c();
  a();
}

function c() {
  if (counter >= 15) {
    console.log("debug trace msg D: " + counter);
    process.exit();
  }
}
