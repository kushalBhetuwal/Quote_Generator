function toCamelCase(str){

    word = /[-_]+/g;

    newword = str.split(word);
    console.log(newword);
    let array =[newword[0]];
    for(let i=1; i<newword.length; i++){
          let item = newword[i].charAt(0).toUpperCase() + newword[i].slice(1);
          array.push(item);
    }

    return array.join('')

}

console.log(toCamelCase("the-stealth-warriorr"));
