let num = 100;

for (let num = 100; num <= 200; num++) {
  if (num % 3 === 0) {
    console.log("Loopy");
  }
  else if (num % 4 === 0) {
    console.log("Lighthouse");
  }
  else if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
  }
  else {
    console.log(num);
  }
}



for (let i = 100; i <= 200; i++) {
  let output = '';

  if (i % 3 === 0) {
    output += 'Loopy'
  } 
  if (i % 4 === 0) {
    output += 'Lighthouse';
  }

  console.log(output || i);
}