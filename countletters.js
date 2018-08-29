var total = {};
function countLetters(string) {
    for (var index =0; index < string.length; index++) {
        if (string[index] === ' ') {
            continue;
        } 
        if (total[string[index]] === undefined) {
            total[string[index]] = 1;
        } else {
            total[string[index]]++;
        }
    }
    console.log(total);
}

countLetters("lighthouse in the house");