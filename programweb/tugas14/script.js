//
function sapa (nama) {
    console.log("Hallo, Nama saya" + nama);
}


//panggil fungcion
sapa (" Joko");
sapa(" Juli");

//ex function 2
function perkenalan (nama,usia,alamat){
    console.log("Nama : " + nama);
    console.log("Usia : " + usia);
    console.log("Alamat : " + alamat);
}


//panggilan fungcion 2
perkenalan ("Alice","24","Paris");


//ex function with return
function hitungLuas(panjang,lebar){
    return panjang * lebar ;
}
let hasil = hitungLuas(10,5);
console.log("Luas :" + hasil);


// ex function with expression
const tambah = function(a,b) {
    return a + b ;
};
console.log (tambah(10,6));


//object
let mhs = {
    Nama : "Selly", 
    Nim : "241091700727",
    Kelas : "05SISE004",
};
mhs.Semester ="5"; //add data
mhs.Nama = "Riana"; //change data
console.log(mhs);
console.log(mhs.Nama);


//METHOD fungsi yang dimiliki oleh object
let mobil = {
    merek : "Honda",
    model : "Civic",
    warna : "Hitam",
    tahun : "2026",

    tampilkanInfo : function (){
        console.log ("Merek : " + this.merek);
        console.log ("Model : " + this.model);
        console.log ("Warna : " + this.warna);
    },
};

//panggil data
mobil.tampilkanInfo();


//Method 2
let kalkulator = {
    tambah : function(a,b){
        return a + b;
    },
    kurang : function(a,b){
        return a - b;
    },
};
console.log(kalkulator.tambah(10,9));
console.log(kalkulator.kurang(40,8));


//STUDI KASUS MENGHITUNG HASIL AKHIR DAN MENENTUKAN GRADE
let mahasiswa = {
    nama    : "Selly",
    nim     : "241091700728",
    kelas   : "05SISE004",
    prodi   : "Sistem Informasi",
    absen   : 21,
    nilaiTugas  : 80, //20%
    nilaiUts    : 70, //30%
    nilaiUas    : 80, //40%

    //convert absen
    convertAbsen : function (maxAbsen = 21){
        return (this.absen / maxAbsen) * 10;
    },

    //membuat method untuk menghitung nilai akhir
    hitungNilaiAkhir : function (){
        return this.convertAbsen() + this.nilaiTugas * 0.2 +  this.nilaiUts * 0.3 + this.nilaiUas * 0.4;
    },
    //membuat method untuk menampilkan data mahasiswa
    tampilkanData : function (){
        console.log("Nama   : " + this.nama);
        console.log("Nim    : " + this.nim);
        console.log("Kelas  : " + this.kelas);
        console.log("Program Studi  : " + this.prodi);
        console.log("Nilai Akhir    : " + this.hitungNilaiAkhir());
    },
};


//mmebuat function untuk menentukan grade
function tentukanGrade (nilai){
    if (nilai >= 85){
        return "A";
    } else if (nilai >=79){
        return "B";
    } else if (nilai >= 65){
        return "C";
    } else if (nilai >=59){
        return "D";
    }else {
        return "E";
    }
}


//panggil method object
mahasiswa.tampilkanData();
//panggil function grade
let nilaiAkhir = mahasiswa.hitungNilaiAkhir();
console.log("Grade  : " + tentukanGrade(nilaiAkhir));