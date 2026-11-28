// let Nama ="Budi"         //string
// let Umur = 25;           //number
// let TinggiBadan = 167.3  //float
// let BeratBadan;          //undefined
// let Pacar = null;        //null

// BeratBadan = 55;

// //if (Pacar == null) {
// //    Pacar = "Jomblo";
// //} else {
// //    Pacar = "sudah Punya pacar"
// //}

// //switch case
// switch (Pacar) {
//     case 1:
//         Pacar = "Sudah Punya Pacar";
//         break;
//     case 2:
//         Pacar = "Sudah Punya Pacar";
//         break;
//     case 3:
//         Pacar = "Sudah Punya Banyak Pacar";
//         break;
//         default:
//             Pacar = "Jomblo" ;
//             break;
// }

// //alert(`Hallo nama saya ${Nama}, umur saya saat ini ${Umur}, tinggi badan saya sekitar ${TinggiBadan}cm, dengan berat badan saya saat ini ${BeratBadan}kg dan untuk status hubungan saya saat ini ${Pacar}`);


// console.log(`Hallo nama saya ${Nama}, umur saya saat ini ${Umur}, tinggi badan saya sekitar ${TinggiBadan}cm, dengan berat badan saya saat ini ${BeratBadan}kg dan untuk status hubungan saya saat ini ${Pacar}`);


// let saldoAwal = 1100000;
// let saldoTambahan = 3000000;
// let hutang = 700000;
// let saldoAkhir = saldoAwal + saldoTambahan - hutang;

// console.log(`saldo awal saya sebesar ${saldoAwal} dengan tambahan saldo ${saldoTambahan}, akan tetapi saya mempunyai hutang paylatter sebesar ${hutang}, jadi sisa saldo saya saat ini sebesar ${saldoAkhir}`);

// //array
// let NamaMhs = ["Budi","Joko","Ahmad"];
// NamaMhs.push("Ghina","Devi");
// console.log(NamaMhs);

// //for
// for (i=0; i<=20; i++){
//     console.log("Hey Bro!!");
// }

// for (let i = 0; i < NamaMhs.length; i++) {
//     console.log(NamaMhs[i]);
// }

function HitungNilai () {
    //ambil datainputan
    let Nama = document.getElementById ("Nama").value;
    let Nilai = Number(document.getElementById("Nilai"). value);

    let Hasil = "";

    //validasi input
    if (Nama == "" || Nilai === "") {
        Hasil = "Nama dan Nilai harus di isi";
    }

    //cek rentang nilai
    else if (Nilai <0 || Nilai > 100) {
        Hasil = "Nilai harus diisi 0-100";
    }

    //cek kelulusan
    else if ( Nilai >=75) {
        Hasil = Nama + " dinyatakan lulus";
    } else {
        Hasil    = Nama + " dinyatakan tidak lulus";
    }

    //menampilkan Hasil ke halaman web
    document.getElementById ("Hasil").innerHTML = Hasil;
}