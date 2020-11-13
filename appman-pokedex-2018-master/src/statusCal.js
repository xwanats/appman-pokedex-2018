import happyface from './img/cute.png'
export {checkObjLen,getDmg,calculateDamage,calculateHP,calculateStr,calculateHappiness,calculateWeakness};
//Check the length of the object
const checkObjLen = (obj) => {
  var key = 0;
  var count = 0;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) count++;
  }
  return count;
};

const getDmg = (obj) => {
  var key = 0;
  var data = "";
  for (key in obj) {
    data = obj[key].damage;
  }
  return data;
};


const calculateDamage = (dmg) => {
  var dmgVal;
  //remove + x string
  if (dmg.length === 3) {
    dmgVal = dmg.toString().slice(0, -1);
  } else if (dmg === "" || isNaN(dmg)) {
    dmgVal = "0";
  } else {
    dmgVal = dmg;
  }
  dmgVal = parseInt(dmgVal);
  return dmgVal;
};
const calculateHP = (hp) => {
  if (hp > 100) {
    hp = 100;
  } else if (isNaN(hp) || hp === "") {
    hp = 0;
  }
  return hp;
};

const calculateStr = (atk) => {
  var str = atk * 50; //?
  return str;
};

const calculateWeakness = (weakness) => {
  var wk = weakness * 100;
  if (isNaN(wk) || wk === "") {
    wk = 0;
  } else if (wk >= 100) {
    wk = 100;
  }
  return wk;
};

const calculateHappiness = (hp, dmg, wk) => {
  var a = hp / 10;
  var b = dmg / 10;
  var c = wk/5
  //is there something off with the formula ? :o
  //all negative since everyitem has 1 weakness
  // ((HP / 10) + (Damage /10 ) + 10 - (Weakness)) / 5
  // var happiness = (a + b + 10 - wk) / 5;

  //i'm going to use the formula below instead just to use it as a mock to display happiness img
  var happiness = (a+b+10-c)
  if(happiness < 0){
    happiness = Math.abs(happiness)
    // console.log('<0',happiness)
  }else if(isNaN(happiness)){
    happiness = 0
    // console.log('isNaN',happiness)
  }else{
    Math.round(happiness)
    // console.log('rounded',happiness)
  }

  // loop happiness png here
  //
  //
  return happiness
};
