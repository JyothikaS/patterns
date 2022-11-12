var height = 20;
var width = 6;

for(let i =1; i <= height; i++){
    if(i == 1 || i == height) {
        console.log(text.repeat(width))
    }
    else{
        process.stdout.write('*');
        process.stdout.write(space.repeat(width-2));
        process.stdout.write('*');
        console.log()
    }
}