
// let scoretext = document.getElementById("score")
let scoretext = document.querySelector("#score")
let sumtext = document.querySelector("#sum")
let resulttext = document.getElementById("result")
let cashtext = document.getElementById("cash")
let player = {hasblackjack: false, isalive : true, cashamt: 100}

function startgame(){
    cashtext.innerText = "Cash: $100"
    let card1 = getrandomcard()
    let card2 = getrandomcard()
    let cards = [card1,card2]
    scoretext.innerText = "Card:"
    for (i in cards) {
        scoretext.innerText +=  "  "+ cards[i] 
    }
    sum = card1 + card2
    // let hasblackjack= false
    // let isalive = true
    // scoretext.innerText = "Card:" + cards[0] + " "+cards[1]
    
    blackjack()
}

function newcard(){
    if (player.hasblackjack === false && player.isalive ===true){
        let cardnew = getrandomcard()
        sum += cardnew
        scoretext.innerText += " "+cardnew
        blackjack()
    }else{
        alert("no new card")
    }
    // cards.push(cardnew)
    
}

function blackjack(){
    sumtext.innerText = "Sum:" + sum
    if (sum<21){
        resulttext.innerText = "do you want to draw a new card?"
    } else if (sum===21){
        resulttext.innerText = "Congratulation! You won!"
        player.cashamt +=20
        cashtext.innerText = "Cash: $" + player.cashamt
        player.hasblackjack = true
    } else{
        resulttext.innerText = "larger than 21, games end😖"
        player.isalive = false
        player.cashamt -=20
        cashtext.innerText = "Cash: $" + player.cashamt
    }
}

function getrandomcard(){
    
    var x = Math.floor(Math.random() * 13 +1)
    if (x===1){
        x=11
    }else if (x > 10){
        x=10
    }else{
        x=x
    }
    return x
}
