//Cac moc cua su luu thong
const TN_THONG_THOANG = 30;
const TN_LUU_THONG = 50;
const TN_LUU_THONG_CHAM = 70;
const TN_TAC_NGHEN = 90;

var giaiMo  = (doThuocRa) => {
  var mauSo = 0;
  var tuSo = 0;
  if  (doThuocRa.nuyTN_thong_thoang  > 0 ){
    tuSo =  tuSo + doThuocRa.nuyTN_thong_thoang*TN_THONG_THOANG;
    mauSo = mauSo + doThuocRa.nuyTN_thong_thoang;
  }
  if  (doThuocRa.nuyTN_luu_thong  > 0 ){
    tuSo =  tuSo + doThuocRa.nuyTN_luu_thong*TN_LUU_THONG;
    mauSo = mauSo + doThuocRa.nuyTN_luu_thong;
  }
  if  (doThuocRa.nuyTN_luu_thong_cham  > 0 ){
    tuSo =  tuSo + doThuocRa.nuyTN_luu_thong_cham*TN_LUU_THONG_CHAM;
    mauSo = mauSo + doThuocRa.nuyTN_luu_thong_cham;
  }
  if  (doThuocRa.nuyTN_tac_nghen  > 0 ){
    tuSo =  tuSo + doThuocRa.nuyTN_tac_nghen*TN_TAC_NGHEN;
    mauSo = mauSo + doThuocRa.nuyTN_tac_nghen;
  }

  return tuSo/mauSo;
}

module.exports.giaiMo = giaiMo;
