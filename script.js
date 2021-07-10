//fungsi untuk menampilkan lebih banyak skill-set
function loadmore(){
    let titik = document.getElementById("titik");
    let tambah = document.getElementById("tambah");
    let btn = document.getElementById("btn");

    if(titik.style.display==="none"){
        titik.style.display = "inline";
        btn.innerText="muat lebih banyak";
        tambah.style.display="none";
    } else{
        titik.style.display="none";
        btn.innerText="muat lebih sedikit";
        tambah.style.display="inline";
    }
};
// fungsi untuk membuat dropdown navbar saat layar kecil
function loadDropDown(){
    let ddownlist = document.getElementById("dropdown-list");
    
    if(ddownlist.style.display==="none"){
        ddownlist.style.display="inline";
    }else{
        ddownlist.style.display="none";
    }
}