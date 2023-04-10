//FIZZ BUZZ en 100 numeros

//multiplos del 3 fizz 3 6 9 12 15
// multiplos del 5 buzz  5 101 15 20 25

//multiplos del 5 y 3 diran fizz buzz 5 30 45

for (let i = 1; i <= 100; i++) {
  console.log(i);

  if (i % 3 === 0 && i % 5 === 0) {
    console.log(` ${i} FIZZBUZZ`);
  } else if (i % 5 === 0) {
    console.log(`${i} BUZZ`);
  } else if (i % 3 === 0) {
    console.log(`${i} FIZZ`);
  }
}
