function kata1(){
let paragraph = "Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali";
let word = /aku/ig; 
let result = paragraph.match(word);

console.log(result);
var resultCount=0;

if(Array.isArray(result)){
for(var i=0;i<result.length;i++){
   resultCount++;
}
console.log("result count aku = "+resultCount);
}




let word2 = /ingin/ig; 
let result2 = paragraph.match(word2);
var resultCount2=0;
if(Array.isArray(result)){
for(var i=0;i<result2.length;i++){
    resultCount2++;
}
console.log("result count ingin = "+resultCount2);
}



let word3 = /Dapat/ig; 
let result3 = paragraph.match(word3);
var resultCount3=0;
if(Array.isArray(result)){
for(var i=0;i<result3.length;i++){
    resultCount3++;
}
console.log("result count Dapat = "+resultCount3);
}


return paragraph;
}

module.exports={
    kata1
}