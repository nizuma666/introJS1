//Data Referensi
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

//Spread Operator
let dataMine = {
  ...data,
  name: "Syaifulloh Ismail",
  username: "Syaiful",
  email: "syaifullohismail123@gmail.com",
  hobby: ["gaming, reading comic"],
};

//Destructuring Object dan memasukan ke variabel baru
const {
  address: { street: alamat, city: kota },
} = dataMine;

//menampilkan contoh data hasil destructure
console.log(dataMine);
