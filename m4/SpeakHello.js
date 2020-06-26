var helloSpeaker = {};
( function (window) {
    var speakWord = "Hello";
    helloSpeaker.speak = function (name) {
        console.log (speakWord + " " + name);
    }
    function speak(name) {
        console.log(speakWord + " " + name);
    }
})(window);