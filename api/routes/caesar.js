const caesar = function(word, num) {
    let solved = ""
    num = (num%26 + 26) % 26;
    for (let i = 0; i < word.length ; i++) {
        let ascii = word[i].charCodeAt();
        if ((ascii >= 65 && ascii <= 90)) {
            solved += String.fromCharCode((ascii - 'A'.charCodeAt(0) + num)%26 
            + 'A'.charCodeAt(0)) ;
        } else if(ascii >= 97 && ascii <= 122){
            solved += String.fromCharCode((ascii-'a'.charCodeAt(0) + num) % 26 
            + 'a'.charCodeAt(0));
        } else {
            solved += word[i]
        }
    }
    return solved;
}

module.exports = caesar