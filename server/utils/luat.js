var thucHien = (params) => {

  var nuyTN_thong_thoang = 0;
  var nuyTN_luu_thong = 0;
  var nuyTN_luu_thong_cham = 0;
  var nuyTN_tac_nghen = 0;

  if (params.nuyCO_thap > 0 && params.nuyN_bt > 0) {
    nuyTN_thong_thoang =  Math.max(nuyTN_thong_thoang, Math.min(params.nuyCO_thap,params.nuyN_bt));
  }
  if (params.nuyCO_thap > 0 && params.nuyN_on > 0 ){
    nuyTN_thong_thoang = Math.max(nuyTN_thong_thoang, Math.min(params.nuyCO_thap, params.nuyN_on));
  }
  if (params.nuyCO_thap > 0 && params.nuyN_rat_on) {
    nuyTN_thong_thoang = Math.max(nuyTN_thong_thoang, Math.min(params.nuyCO_thap,params.nuyN_rat_on));
  }
  if (params.nuyCO_bt > 0 && params.nuyN_bt > 0 ) {
    nuyTN_luu_thong = Math.max(nuyTN_luu_thong, Math.min(params.nuyCO_bt,params.nuyN_bt));
  }
  if (params.nuyCO_bt > 0  && params.nuyN_on > 0 ){
    nuyTN_luu_thong = Math.max(nuyTN_luu_thong, Math.min(params.nuyCO_bt,params.nuyN_on));
  }
  if (params.nuyCO_bt > 0  && params.nuyN_rat_on > 0 ){
    nuyTN_luu_thong = Math.max(nuyTN_luu_thong, Math.min(params.nuyCO_bt,params.nuyN_rat_on));
  }
  if (params.nuyCO_cao > 0 && params.nuyN_bt > 0) {
    nuyTN_luu_thong_cham = Math.max(nuyTN_luu_thong_cham, Math.min(params.nuyCO_cao,params.nuyN_bt));
  }
  if (params.nuyCO_cao > 0 && params.nuyN_on > 0) {
    nuyTN_luu_thong_cham = Math.max(nuyTN_luu_thong_cham, Math.min(params.nuyCO_cao,params.nuyN_on));
  }
  if (params.nuyCO_cao > 0 && params.nuyN_rat_on > 0){
    nuyTN_luu_thong_cham = Math.max(nuyTN_luu_thong_cham, Math.min(params.nuyCO_cao,params.nuyN_rat_on));
  }
  if (params.nuyCO_rat_cao > 0 && params.nuyN_bt) {
    nuyTN_luu_thong_cham = Math.max(nuyTN_luu_thong_cham, Math.min(params.nuyCO_rat_cao,params.nuyN_bt));
  }
  if (params.nuyCO_rat_cao > 0 && params.nuyN_on){
    nuyTN_tac_nghen = Math.max(nuyTN_tac_nghen , Math.min(params.nuyCO_rat_cao , params.nuyN_on));
  }
  if (params.nuyCO_rat_cao > 0 && params.nuyN_rat_on){
    nuyTN_tac_nghen = Math.max(nuyTN_tac_nghen , Math.min(params.nuyCO_rat_cao , params.nuyN_rat_on));
  }

  return {
    nuyTN_thong_thoang,
    nuyTN_luu_thong,
    nuyTN_luu_thong_cham,
    nuyTN_tac_nghen
  }
};

module.exports.thucHien = thucHien;
