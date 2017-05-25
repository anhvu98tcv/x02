//Cac moc cua nong do CO
const CO_THAP = 5;
const CO_THAP_PHAI = 11;

const CO_BT_TRAI = 7;
const CO_BT = 15;
const CO_BT_PHAI = 22;

const CO_CAO_TRAI = 17;
const CO_CAO = 25;
const CO_CAO_PHAI = 32;

const CO_RAT_CAO_TRAI = 29;
const CO_RAT_CAO = 35;


//Cac moc cua tieng on

const N_BT = 50;
const N_BT_PHAI = 58;

const N_ON_TRAI = 53;
const N_ON = 60;
const N_ON_PHAI = 66;

const N_RAT_ON_TRAI = 61;
const N_RAT_ON = 70;


var conoise  = ( COinput, Ninput , callback) => {
  var nuyCO_thap = 0;
  var nuyCO_bt = 0;
  var nuyCO_cao = 0;
  var nuyCO_rat_cao = 0;
  var nuyN_bt = 0;
  var nuyN_on = 0;
  var nuyN_rat_on = 0;

  if (COinput < CO_THAP){
    nuyCO_thap = 1;
  }
  if (COinput >= CO_THAP && COinput < CO_THAP_PHAI){
    nuyCO_thap = (CO_THAP_PHAI - COinput)/(CO_THAP_PHAI - CO_THAP);
  }
  if (COinput >= CO_BT_TRAI && COinput < CO_BT){
    nuyCO_bt = (CO_BT - COinput)/(CO_BT - CO_BT_TRAI);
  }
  if (COinput >= CO_BT && COinput < CO_BT_PHAI){
    nuyCO_bt = (CO_BT_PHAI - COinput)/(CO_BT_PHAI - CO_BT);
  }
  if (COinput >= CO_CAO_TRAI && COinput < CO_CAO){
    nuyCO_cao = (CO_CAO - COinput)/(CO_CAO - CO_CAO_TRAI);
  }
  if (COinput >= CO_CAO && COinput < CO_CAO_PHAI){
    nuyCO_cao = (CO_CAO_PHAI - COinput)/(CO_CAO_PHAI - CO_CAO);
  }
  if (COinput >= CO_RAT_CAO_TRAI && COinput < CO_RAT_CAO){
    nuyCO_rat_cao = (CO_RAT_CAO - COinput)/(CO_RAT_CAO - CO_RAT_CAO_TRAI);
  }
  if (COinput >= CO_RAT_CAO ){
    nuyCO_rat_cao = 1;
  }

  if (Ninput < N_BT){
    nuyN_bt = 1;
  }
  if (Ninput >= N_BT && Ninput < N_BT_PHAI){
    nuyN_bt = (N_BT_PHAI - Ninput)/(N_BT_PHAI- N_BT);
  }
  if (Ninput >= N_ON_TRAI && Ninput < N_ON){
    nuyN_on = (N_ON - Ninput)/(N_ON- N_ON_TRAI);
  }
  if (Ninput >= N_ON && Ninput < N_ON_PHAI){
    nuyN_on = (N_ON_PHAI - Ninput)/(N_ON_PHAI- N_ON);
  }
  if (Ninput >= N_RAT_ON_TRAI && Ninput < N_RAT_ON){
    nuyN_rat_on = (N_RAT_ON -  Ninput)/(N_RAT_ON- N_RAT_ON_TRAI);
  }
  if (Ninput >= N_RAT_ON){
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
