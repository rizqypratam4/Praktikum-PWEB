function tentukanKategori(usia) {
    if (usia <= 5) {
        return "Balita";
    } else if (usia <= 12) {
        return "Anak-anak";
    } else if (usia <= 17) {
        return "Remaja";
    } else if (usia <= 59) {
        return "Dewasa";
    } else {
        return "Lansia";
    }
}

function tentukanUsia() {
    const inputUsia = document.getElementById("usia");
    const hasil = document.getElementById("hasil");

    const usia = Number(inputUsia.value);

    if (usia < 0 || inputUsia.value === "") {
        hasil.textContent = "Masukkan usia yang valid!";
        console.log("Input tidak valid");
        return;
    }

    const kategori = tentukanKategori(usia);

    hasil.textContent = `Usia ${usia} tahun termasuk kategori ${kategori}.`;

    console.log("Usia:", usia);
    console.log("Kategori:", kategori);
    console.log("Program berhasil dijalankan");
}