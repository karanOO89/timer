// let inpTim;
let numbers = process.argv.slice(2);
// console.log(numbers);

let dur = 0;
for (let ele of numbers) {
  let delay = Number(ele);
  if (!isNaN(delay) && delay >= 0) {
    setTimeout(() => process.stdout.write("\x07."), (dur = ele * 1000));
  }
}
setTimeout(() => process.stdout.write("\n"), dur);
