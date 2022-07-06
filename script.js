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

let randomNumberButton = document.createElement('button');
let wrapper = document.querySelector('.wrapper');
wrapper.appendChild(randomNumberButton);

randomNumberButton.addEventListener('click', () => {
    number()
    let num = document.createElement('p');
    wrapper.appendChild(num);
    num.innerHTML = cards;
});

