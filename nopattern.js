   // for ( let i = 1; i < 6; i++){
    //     for( let j =1; j <= i; j++)
    //     {
    //         process.stdout.write(j+' ')
    //     }
    //     process.stdout.write('\n')
    // }   
   
   
   var output = '';
    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }


 