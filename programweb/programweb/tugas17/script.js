//DOM Selection

//deklarasi
const judul = document.getElementById("judul");

judul.innerHTML = "INI DIUBAH DENGAN JAVA SCRIPT";
judul.style.backgroundColor = "blue";
judul.style.color = "white";
judul.style.fontFamily = "times new roman";
judul.style.fontStyle = "italic";

//deklarasi by tag name
const p = document.getElementsByTagName("p");

p[0].style.backgroundColor = "yellow";
p[1].style.backgroundColor = "pink";
p[2].style.backgroundColor = "lime";
p[3].style.backgroundColor = "orange";

for (i = 0; i< p.length; i++){
    p[i].style.color = "dark brown";
    p[i].innerHTML = "paragraft diubah ke " + (i + 1);
    p[i].style.fontStyle = "italic";
    p[i].style.fontSize = "25px";
}

//deklarasi by class name
const l1=document.getElementsByClassName ("l1") [0];
l1.style.backgroundColor = "grey";
l1.innerHTML = "urutan ke -1 ";

const l2=document.getElementsByClassName ("l2") [0];
l2.style.backgroundColor = "lightblue";

const l3=document.getElementsByClassName ("l3") [0];
l3.style.backgroundColor = "lightgreen";


//deklarasi query selector
const sectionA = document.querySelector ("Section#a");
sectionA.style.backgroundColor = "lightgrey";

const sectionB = document.querySelector ("Section#b");
sectionB.style.backgroundColor = "lightyellow";

//link
const a = document.querySelector("a");

  a.textContent = "instagram";
  a.style.backgroundColor = "orange";
  a.style.color = "white";
  a.style.textAlign = "center";