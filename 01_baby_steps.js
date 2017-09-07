

/*  const numbers = process.argv.slice(2);

 const result = numbers.reduce((acc, num) => {
   return acc +  + num;
 }, 0);

 console.log(result);
 */


 var result = 0;

 for (i = 2; i <= process.argv.length; i++){
   reult += Number(process.argv[i])
 }

 console.log(result);