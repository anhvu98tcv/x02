//Cac moc cua nong do CO
const CO_THAP = 5;
const CO_BT = 15;
const CO_CAO = 25;
const CO_RAT_CAO = 35;

//Cac moc cua tieng on
const N_BT = 50;
const N_ON = 60;
const N_RAT_ON = 70;

var conoise  = ( COinput, Ninput , callback) => {
  var nuyCO_thap = 0;
  var nuyCO_bt = 0;
  var nuyCO_cao = 0;
  var nuyCO_rat_cao = 0;
  var nuyN_bt = 0;
  var nuyN_on = 0;
  var nuyN_rat_on = 0;

  if (COinput <= 5){
    nuyCO_thap = 1;
  } else if (COinput > 5 && COinput <= 15){
    nuyCO_thap = (CO_BT - COinput)/(CO_BT - CO_THAP);
    nuyCO_bt = 1 - nuyCO_thap;
  } else if (COinput > 15 && COinput <= 25){
    nuyCO_bt = (CO_CAO - COinput)/(CO_CAO - CO_BT);
    nuyCO_cao = 1 - nuyCO_bt;
  } else if (COinput > 25 && COinput <= 35){
    nuyCO_cao = ((CO_RAT_CAO - COinput)/(CO_RAT_CAO - CO_CAO));
    nuyCO_rat_cao = 1 - nuyCO_cao;
  } else {
    nuyCO_rat_cao = 1;
  }

  if (Ninput <= 50){
    nuyN_bt = 1;
  } else if (Ninput > 50 && Ninput <= 60){
    nuyN_bt = (N_ON - Ninput)/(N_ON- N_BT);
    nuyN_on = 1 - nuyN_bt;
  } else if (Ninput > 60 && Ninput <= 70){
    nuyN_on = (N_RAT_ON -  Ninput)/(N_RAT_ON- N_ON);
    nuyN_rat_on = 1 - nuyN_on;
  } else {
    nuyN_rat_on = 1;
  }

  callback(undefined,{
    nuyCO_thap,
    nuyCO_bt,
    nuyCO_cao,
    nuyCO_rat_cao,
    nuyN_bt,
    nuyN_on,
    nuyN_rat_on
    });
};

module.exports.conoise = conoise;
