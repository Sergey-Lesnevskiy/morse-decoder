const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
 

  let r=expr.match(/.{1,10}/g)
  let a=10
  let b=11
  let morz=''
  
  for (let i = 0; i < r.length; i++){
     
   var letter=r[i].match(/.{1,2}/g)
   morz=morz+' '
   
  for (let i = 0; i < letter.length; i++){
    
  if(letter[i]==a){
    morz=morz+'.'
    
  }else if(letter[i]==b){
    morz=morz+'-'
    
  }else if(letter[i]=='**'){
    
    morz=morz+'1'
  }
  }
  }  
  let res = morz.split(' ')
    // let test =result
  
    var obj = {}
  var value=''
       res.splice(0, 1)
  
          for (var j = 0; j < res.length; j++) {
         if(MORSE_TABLE[res[j]]!==undefined) {
           value=value+MORSE_TABLE[res[j]]
         }else
         //   console.log(res[j])
          value=value+' ' 
      //console.log(MORSE_TABLE[res[j]])
          }
    return  value
  }
  
    

module.exports = {
    decode
}