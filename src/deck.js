const Deck = [
    //the index is initially set so high so that the card.map() function in the Player.js
    //component will be certain to have a unique index.
    //the index is updated in the Blackjack.js component, but is always one element behind.

    //Clubs
    {
        _id: 1,
        card: 'Two of Clubs',
        value: 2,
        img: './cards/2C.png',
        index: 0
    }, {
        _id: 2,
        card: 'Three of Clubs',
        value: 3,
        img: './cards/3C.png',
        index: 0
    }, {
        _id: 3,
        card: 'Four of Clubs',
        value: 4,
        img: './cards/4C.png',
        index: 0
    }, {
        _id: 4,
        card: 'Five of Clubs',
        value: 5,
        img: './cards/5C.png',
        index: 0
    }, {
        _id: 5,
        card: 'Six of Clubs',
        value: 6,
        img: './cards/6C.png',
        index: 0
    }, {
        _id: 6,
        card: 'Seven of Clubs',
        value: 7,
        img: './cards/7C.png',
        index: 0
    }, {
        _id: 7,
        card: 'Eight of Clubs',
        value: 8,
        img: './cards/8C.png',
        index: 0
    }, {
        _id: 8,
        card: 'Nine of Clubs',
        value: 9,
        img: './cards/9C.png',
        index: 0
    }, {
        _id: 9,
        card: 'Ten of Clubs',
        value: 10,
        img: './cards/10C.png',
        index: 0
    }, {
        _id: 10,
        card: 'Jack of Clubs',
        value: 10,
        img: './cards/JC.png',
        index: 0
    }, {
        _id: 11,
        card: 'Queen of Clubs',
        value: 10,
        img: './cards/QC.png',
        index: 0
    }, {
        _id: 12,
        card: 'King of Clubs',
        value: 10,
        img: './cards/KC.png',
        index: 0
    }, {
        _id: 13,
        card: 'Ace of Clubs',
        value: 11,
        img: './cards/AC.png',
        index: 0
    }, 
    



    //Spades
    {
        _id: 14,
        card: 'Two of Spades',
        value: 2,
        img: './cards/2S.png',
        index: 0
    }, {
        _id: 15,
        card: 'Three of Spades',
        value: 3,
        img: './cards/3S.png',
        index: 0
    }, {
        _id: 16,
        card: 'Four of Spades',
        value: 4,
        img: './cards/4S.png',
        index: 0
    }, {
        _id: 17,
        card: 'Five of Spades',
        value: 5,
        img: './cards/5S.png',
        index: 0
    }, {
        _id: 18,
        card: 'Six of Spades',
        value: 6,
        img: './cards/6S.png',
        index: 0
    }, {
        _id: 19,
        card: 'Seven of Spades',
        value: 7,
        img: './cards/7S.png',
        index: 0
    }, {
        _id: 20,
        card: 'Eight of Spades',
        value: 8,
        img: './cards/8S.png',
        index: 0
    }, {
        _id: 21,
        card: 'Nine of Spades',
        value: 9,
        img: './cards/9S.png',
        index: 0
    }, {
        _id: 22,
        card: 'Ten of Spades',
        value: 10,
        img: './cards/10S.png',
        index: 0
    }, {
        _id: 23,
        card: 'Jack of Spades',
        value: 10,
        img: './cards/JS.png',
        index: 0
    }, {
        _id: 24,
        card: 'Queen of Spades',
        value: 10,
        img: './cards/QS.png',
        index: 0
    }, {
        _id: 25,
        card: 'King of Spades',
        value: 10,
        img: './cards/KS.png',
        index: 0
    }, {
        _id: 26,
        card: 'Ace of Spades',
        value: 11,
        img: './cards/AS.png',
        index: 0
    }, 



    //Diamonds
    {
        _id: 27,
        card: 'Two of Diamonds',
        value: 2,
        img: './cards/2D.png',
        index: 0
    }, {
        _id: 28,
        card: 'Three of Diamonds',
        value: 3,
        img: './cards/3D.png',
        index: 0
    }, {
        _id: 29,
        card: 'Four of Diamonds',
        value: 4,
        img: './cards/4D.png',
        index: 0
    }, {
        _id: 30,
        card: 'Five of Diamonds',
        value: 5,
        img: './cards/5D.png',
        index: 0
    }, {
        _id: 31,
        card: 'Six of Diamonds',
        value: 6,
        img: './cards/6D.png',
        index: 0
    }, {
        _id: 32,
        card: 'Seven of Diamonds',
        value: 7,
        img: './cards/7D.png',
        index: 0
    }, {
        _id: 33,
        card: 'Eight of Diamonds',
        value: 8,
        img: './cards/8D.png',
        index: 0
    }, {
        _id: 34,
        card: 'Nine of Diamonds',
        value: 9,
        img: './cards/9D.png',
        index: 0
    }, {
        _id: 35,
        card: 'Ten of Diamonds',
        value: 10,
        img: './cards/10D.png',
        index: 0
    }, {
        _id: 36,
        card: 'Jack of Diamonds',
        value: 10,
        img: './cards/JD.png',
        index: 0
    }, {
        _id: 37,
        card: 'Queen of Diamonds',
        value: 10,
        img: './cards/QD.png',
        index: 0
    }, {
        _id: 38,
        card: 'King of Diamonds',
        value: 10,
        img: './cards/KD.png',
        index: 0
    }, {
        _id: 39,
        card: 'Ace of Diamonds',
        value: 11,
        img: './cards/AD.png',
        index: 0
    }, 





    //Hearts
    {
        _id: 40,
        card: 'Two of Hearts',
        value: 2,
        img: './cards/2H.png',
        index: 0
    }, {
        _id: 41,
        card: 'Three of Hearts',
        value: 3,
        img: './cards/3H.png',
        index: 0
    }, {
        _id: 42,
        card: 'Four of Hearts',
        value: 4,
        img: './cards/4H.png',
        index: 0
    }, {
        _id: 43,
        card: 'Five of Hearts',
        value: 5,
        img: './cards/5H.png',
        index: 0
    }, {
        _id: 44,
        card: 'Six of Hearts',
        value: 6,
        img: './cards/6H.png',
        index: 0
    }, {
        _id: 45,
        card: 'Seven of Hearts',
        value: 7,
        img: './cards/7H.png',
        index: 0
    }, {
        _id: 46,
        card: 'Eight of Hearts',
        value: 8,
        img: './cards/8H.png',
        index: 0
    }, {
        _id: 47,
        card: 'Nine of Hearts',
        value: 9,
        img: './cards/9H.png',
        index: 0
    }, {
        _id: 48,
        card: 'Ten of Hearts',
        value: 10,
        img: './cards/10H.png',
        index: 0
    }, {
        _id: 49,
        card: 'Jack of Hearts',
        value: 10,
        img: './cards/JH.png',
        index: 0
    }, {
        _id: 50,
        card: 'Queen of Hearts',
        value: 10,
        img: './cards/QH.png',
        index: 0
    }, {
        _id: 51,
        card: 'King of Hearts',
        value: 10,
        img: './cards/KH.png',
        index: 0
    }, {
        _id: 52,
        card: 'Ace of Hearts',
        value: 11,
        img: './cards/AH.png',
        index: 0
    }, 

]

export default Deck;