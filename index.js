// add solution here

function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (i = 0; i < musicians.length; i++){
    let msgString = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(msgString);
  }
  return arr;
}

/*function johnLennonFacts(facts){
  while ()
}
*/
