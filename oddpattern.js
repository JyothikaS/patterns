function oddPattern() {
   
    var output = '';
    for (var i = 1; i <= 10; i+=2) {
        for (var j = 1; j <= i; j+=2) {
            output += i + '  ';
        }
        console.log(output);
        output = '';
    }
}

oddPattern();