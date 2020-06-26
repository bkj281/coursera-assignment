var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var i;
function print() {
    var a;
    for (i = 0; i < names.length; i++) {
        a = names[i].slice(0, 1);
        if (a === "J") {
                byeSpeaker(i);
        }
        else {
            helloSpeaker(i);
        }
    }
}
function byeSpeaker (i) {
    console.log("Good Bye "+ names[i]);
}
function helloSpeaker (i) {
    console.log("Hello "+ names[i]);
}
print();