function shout(smallString){
    return smallString.toUpperCase();
}
console.log(shout('hello'));

function whisper(upperString){
    return upperString.toLowerCase();
}
console.log(whisper('Hello'));

function logShout(smallString){
    console.log(smallString.toUpperCase());
}

function logWhisper(upperString){
    console.log(upperString.toLowerCase());
}

function sayHiToHeadphonedRoommate(data){
    switch(data){
        case 'hello':
            return "I can't hear you!";
        case 'HELLO':
            return "YES INDEED!";
        case "Let's have dinner together!":
            return "I would love to!";
        default:
        return 'wrong';
    }
}

sayHiToHeadphonedRoommate('hello');
sayHiToHeadphonedRoommate('HELLO');
sayHiToHeadphonedRoommate("Let's have dinner together!");