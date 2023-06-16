const userName= "Kingsman";

function CallMe(){
    const userId = '1738';
    console.log('CallMe','Calling ${userName}');
    console.log('CallMe','Calling,${userName} with id ${userId}');
}

CallMe();
console.log('global','userName is ${userName}');