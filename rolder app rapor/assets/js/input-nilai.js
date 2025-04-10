document.addEventListener("DOMContentLoaded", function () {
    const formNilai = document.getElementById("formNilai");
    const tabelNilai = document.getElementById("tabelNilai").getElementsByTagName("tbody")[0];
    const dataNilaiContainer = document.getElementById("dataNilaiContainer");

    formNilai.addEventListener("submit", function (e) {
        e.preventDefault();

        // Ambil nilai dari inputan
        const nama = document.getElementById("nama").value;
        const mataPelajaran = document.getElementById("mataPelajaran").value;
        const nilai = document.getElementById("nilai").value;

        // Buat baris baru untuk tabel
        const newRow = tabelNilai.insertRow();
        newRow.innerHTML = `<td>${nama}</td><td>${mataPelajaran}</td><td>${nilai}</td>`;

        // Tampilkan tabel hasil input
        dataNilaiContainer.style.display = "block";

        // Reset form setelah submit
        formNilai.reset();
    });
});
