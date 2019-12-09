
function kata1(){
    var kata1 = ['Behind', 'every', 'great', 'man'];
    var kata2 = ['is', 'a', 'woman'];
    var kata3 =  ['rolling', 'her', 'eyes'];
    kata2.push(kata3);
    kata1.push(kata2);
    let x = kata1.join(' ').toString();
    let y = kata2.join(' ').toString();
    let z = kata3.join(' ').toString();
    return x;
}

module.exports={
    kata1
}