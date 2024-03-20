const mtk = 0;
const bahasaIndonesia = 80;
const bahasaInggris = 77;
const ipa = 90;

// if (!mtk || !bahasaIndonesia || !bahasaInggris || !ipa) {
//   console.log("nilainya ada yang kosong ges");
// }
if (
  mtk !== undefined &&
  bahasaIndonesia !== undefined &&
  bahasaInggris !== undefined &&
  ipa !== undefined
) {
  if (isNaN(mtk, bahasaIndonesia, bahasaInggris, ipa)){
    console.log("nilai harus bentuk number");
  }
  if (
    mtk < 0 ||
    mtk > 100 ||
    bahasaIndonesia < 0 ||
    bahasaIndonesia > 100 ||
    bahasaInggris < 0 ||
    bahasaInggris > 100 ||
    ipa < 0 ||
    ipa > 100
  ) {
    console.log("nilai harus dalam skala 100");
  }
}

//menghitung rata-rata dari ke-4 nilai
let rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
//membuat percabangan untuk menyesuaikan kondisi yang dibutuhkan

if (rataRata >= 90 && rataRata <= 100) {
  console.log("Rata-Rata : " + rataRata + "\nGrade : " + "A");
} else if (rataRata >= 80 && rataRata <= 89) {
  console.log("Rata-Rata : " + rataRata + "\nGrade : " + "B");
} else if (rataRata >= 70 && rataRata <= 79) {
  console.log("Rata-Rata : " + rataRata + "\nGrade : " + "C");
} else if (rataRata >= 60 && rataRata <= 69) {
  console.log("Rata-Rata : " + rataRata + "\nGrade : " + "D");
} else if (rataRata >= 0 && rataRata <= 59) {
  console.log("Rata-Rata : " + rataRata + "\nGrade : " + "E");
}
