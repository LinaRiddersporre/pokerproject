let cards = [];

function number(){
    let randomNumber = Math.ceil(Math.random()*53)
    console.log(randomNumber);
    test(randomNumber);

}

function test(randomNumber){
    
    if(cards.includes(randomNumber)){
        number();
    } else {
        cards.push(randomNumber);
    } 
}

for(let i=0; i<5; i++){
    number();
}


console.log(cards);