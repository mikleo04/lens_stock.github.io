const order = () => {
    
}

function validateForm() {
    if (document.forms["formOrder"]["nama"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formOrder"]["nama"].focus();
        return false;
    } else if (document.forms["formOrder"]["email"].value == "") {
        alert("Email Tidak Boleh Kosong");
        document.forms["formOrder"]["email"].focus();
        return false;
    } else if (document.forms["formOrder"]["jumlah"].value == "") {
        alert("Tentukan Jumalh Orderan");
        document.forms["formOrder"]["jumlah"].focus();
        return false;
    } else if (document.forms["formOrder"]["pilih"].selectedIndex < 1) {
        alert("Pilih Genre Wallpaper.");
        document.forms["formOrder"]["pilih"].focus();
        return false;
    } else { 
        const nama = document.forms["formOrder"]["nama"].value;
        const email = document.forms["formOrder"]["email"].value;
        const jumlah = document.forms["formOrder"]["jumlah"].value;
        const jenisKelamin = document.forms["formOrder"]["jenisKelamin"].value;
        const pilih = document.forms["formOrder"]["pilih"];
        const genre = pilih.options[pilih.selectedIndex].text;
        const pesan = document.forms["formOrder"]["pesan"].value;
        
        const hargaUnit = 10000;
        const hargaTotal = jumlah*hargaUnit;
        alert(`\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t~Data Lengkap Client~\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n
Nama : ${nama}
Email : ${email}
Jumlah Pesanan: ${jumlah}
Jenis Kelasmin : ${jenisKelamin}
Genre : ${genre}
Rincian: ${pesan}
Harga Per Unit : Rp.${hargaUnit}
Harga Total : Rp.${hargaTotal}
                \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t~Terimakasih Sudah Order~\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t`)
    }
}
