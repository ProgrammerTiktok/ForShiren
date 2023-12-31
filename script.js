const myImage = document.querySelector("#myImage");
const textTitle = document.querySelector(".text");
const boxBtnPlay = document.querySelector(".box-btn");
const textPesan = document.querySelector(".form-group")


textPesan.style.display = "none";
textTitle.innerHTML = '"Hai.. MyGirl..!"';

const btnPlay = () => {
    boxBtnPlay.style.display = "none";

    var audio = new Audio("bersamamu.mp3");

    audio.play();
    
    

    setTimeout(() => {
        textTitle.innerHTML = '"Btw... Terima kasih ya... selama ini sudah  mau bersamaku😆😆"'
        setTimeout(() => {
            myImage.src = "weee.gif";
            textTitle.innerHTML = '"Maaf, selama ini belum bisa jadi yang terbaik🙏🙏"'
        }, 5000);
        setTimeout(() => {
            myImage.src = "emawh.gif"
            textTitle.innerHTML = '"Tapi lucu tau kalau kamu marah-marah😂😂"'
        }, 10000);
        setTimeout(() => {
            myImage.src = "mikir.gif"
            textTitle.innerHTML = '"Semoga tahun depan kita bisa terus bersama🫶🫶"'
        }, 15000);
        setTimeout(() => {
            myImage.src = "pandahiya.gif"
            textTitle.innerHTML = '"I Love You Sherin❤❤"'
        }, 20000);
        setTimeout(() => {
            myImage.src = "pandahiya.gif"
            textTitle.innerHTML = '"Selamat Tahun Baru 2024🎉🎉"'
        }, 25000);
        setTimeout(() => {
            textPesan.style.display = "flex";
            textPesan.style.opacity = 1;
            textPesan.style.tra
            textTitle.style.display = "none";
        }, 30000);
    }, 3000);
}

function kirim() {
    // Ambil isi dari textarea
    var pesan = document.getElementById('comment').value;

    // Ganti nomor berikut dengan nomor tujuan di format internasional tanpa tanda '+' atau '00'
    var nomorTujuan = '+6285871342853';

    // Membuka aplikasi WhatsApp dengan URL khusus
    var whatsappURL = 'https://wa.me/' + nomorTujuan + '?text=' + encodeURIComponent(pesan);
    window.location.href = whatsappURL;
}