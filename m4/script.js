var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var i;
function print() {
    var i, a;
    for (i = 0; i < names.length; i++) {
        a = names[i].slice(0, 1);
        console.log(a);
        if (a === "J") {
                gb(i);
        }
        else {
            h(i);
        }
    }
}
function gb (i) {
    console.log("Good Bye "+ names[i]);
}
function h (i) {
    console.log("Hello "+ names[i]);
}
print();
