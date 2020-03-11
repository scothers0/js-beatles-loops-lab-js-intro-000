// add solution here

function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (var i = 0; i < musicians.length; i++){
    var msgString = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(msgString);
  }
  return arr;
}

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    facts[i] = `${facts[i]}!!!`;

    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var loveArray = [];
  var i = 0;
  do {
    loveArray.push("I love the Beatles!");
    i++;
  }
  while (i < 15);
  return loveArray;
}
