document.getElementById("formwaris").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const harta = parseFloat(document.getElementById("harta").value);
    const jumlahAhliWaris = parseInt(document.getElementById("jumlahAhliWaris").value);

    if (!harta || !jumlahAhliWaris === "Pilih hubungan keluarga") {
        alert("Mohon lengkapi semua data dengan benar.");
        return;
    }

    // Example calculation (simplified)
    // const bagianPerWaris = harta / jumlahAhliWaris;
    // alert(`Setiap ahli waris akan mendapatkan bagian sebesar: Rp${bagianPerWaris.toFixed(2)}`);
});
