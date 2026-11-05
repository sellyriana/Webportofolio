
function tampilkanPesan() {
    let nama = document.getElementById("nama").value;

    if (nama == "") {
        alert("Silakan masukkan nama terlebih dahulu!");
        return;
    }

    alert("Halo, " + nama + "!");

    console.log("Nama yang dimasukkan: " + nama);

    let pesan = prompt("Halo " + nama + ", apa pesan kamu hari ini?");

    document.getElementById("hasil").innerHTML =
        "Selamat belajar JavaScript, " + nama + "!";

    console.log("Pesan kamu: " + pesan);
}
