// BUG 1: nama variabel tidak konsisten
const nama = "Raka";
console.log("Nama mahasiswa:", nama);

// BUG 2: nilai masih berbentuk string, perlu dikonversi jika dihitung sebagai angka
const nilaiTugas = 80;
const nilaiUts = 75;
const total = nilaiTugas + nilaiUts;
console.log("Total nilai:", total);

// BUG 3: function dipanggil dengan nama yang salah
function hitungRataRata(nilaiTugas, nilaiUts) {
    return (nilaiTugas + nilaiUts) / 2;
}

console.log(hitungRataRata(nilaiTugas, nilaiUts));