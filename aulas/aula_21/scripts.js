const d1 = new Date();
console.log(d1);

const d2 = new Date('May 20 1993 15:30');
console.log(d2);

const d3 = new Date(2017,07,03,14,30);
console.log(d3);

d2.setFullYear(2022);
console.log(d2);

d4 = d2.toDateString();
console.log(d4);

d5 = d3.toTimeString();
console.log(d5);

d6 = d1.toISOString();
console.log(d6);