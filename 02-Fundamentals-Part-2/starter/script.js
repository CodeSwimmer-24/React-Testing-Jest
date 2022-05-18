

const calvag = () => {
  const avgVal = (val1,val2,val3) => (val1+val2+val3)/3;
  const dolphin = avgVal(85,54,41);
  const koalas = avgVal(23,34,27);
  console.log(dolphin,koalas);
}
calvag();

const checkWinner = (dolphin,koalas) => {
  if(dolphin > koalas && dolphin > (koalas*2)){
    console.log('Winner is dolphin')
  }
  else if(koalas > dolphin && koalas > (dolphin*2)) {
    console.log('Winner is koalas')
  }
  else {
    console.log('No team wins');
  }
}

checkWinner(60,28)
