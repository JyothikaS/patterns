
//var output = '';
for(let i = 1; i <=5; i++){
    for (let j = 0; j <5-i; j++){
      //  output += ' ';
      process.stdout.write(' ')
    }
        for (let k = 0; k<i;k++){
            //output += i + ' ';
            process.stdout.write(`${i} `)
        }
       
//    process.stdout.write(' '+i+' ')
    console.log();
}

 
