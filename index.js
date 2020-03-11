// add solution here
var arr = [];
function theBeatlesPlay(musicians, instruments){
  for (i = 0; i < musicians.length; i++){
    let msgString = `"${musicians[i]} plays ${instruments[i]}"`;
    arr.push(msgString);
  }
  return arr;
}