// Fungsi untuk memvalidasi rentang nilai (0 - 100)
function validasiNilai(nilai) {
    return nilai >= 0 && nilai <= 100;
}

// Fungsi menghitung nilai akhir berdasarkan bobot
function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
}

// Fungsi menentukan grade huruf berdasarkan nilai akhir
function tentukanGrade(nilaiAkhir) {
    if (nilaiAkhir >= 85) return "A";
    else if (nilaiAkhir >= 75) return "B";
    else if (nilaiAkhir >= 65) return "C";
    else if (nilaiAkhir >= 55) return "D";
    return "E";
}

// Menangkap event submit dari form
const formNilai = document.getElementById("formNilai");
formNilai.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah halaman reload otomatis

    // Mengambil nilai input dan mengonversinya ke tipe data number
    const nama = document.getElementById("nama").value;
    const tugas = Number(document.getElementById("tugas").value);
    const uts = Number(document.getElementById("uts").value);
    const uas = Number(document.getElementById("uas").value);

    // Validasi menggunakan Array dan Loop
    const daftarNilai = [tugas, uts, uas];
    let semuaValid = true;

    for (let i = 0; i < daftarNilai.length; i++) {
        if (!validasiNilai(daftarNilai[i])) {
            semuaValid = false;
        }
    }

    const hasilDiv = document.getElementById("hasil");

    if (!semuaValid) {
        hasilDiv.innerHTML = `<h2>Hasil Perhitungan</h2><p style="color: red;">Error: Nilai harus berada di antara 0 sampai 100!</p>`;
        return;
    }

    // Proses perhitungan
    const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
    const grade = tentukanGrade(nilaiAkhir);
    const status = nilaiAkhir >= 60 ? "Lulus" : "Tidak Lulus";
    const statusClass = nilaiAkhir >= 60 ? "text-success" : "text-danger";

    // Membentuk Objek Mahasiswa
    const mahasiswa = {
        nama: nama,
        tugas: tugas,
        uts: uts,
        uas: uas,
        nilaiAkhir: nilaiAkhir,
        grade: grade,
        status: status
    };

    // Output ke Console untuk proses debugging
    console.log("Data hasil perhitungan:", mahasiswa);

    // Menampilkan hasil ke antarmuka HTML menggunakan Template Literal
    hasilDiv.innerHTML = `
        <h2>Hasil Perhitungan</h2>
        <p>Mahasiswa: <strong>${mahasiswa.nama}</strong></p>
        <p class="score">Nilai Akhir: <strong>${mahasiswa.nilaiAkhir.toFixed(1)}</strong> (Grade: <strong>${mahasiswa.grade}</strong>)</p>
        <p>Status: <span class="${statusClass}"><strong>${mahasiswa.status}</strong></span></p>
    `;
});