import { form } from "./formwaris.js";
import { bagianAnakPr, bagianCucuPrLk, bagianIbu, bagianNenek, bagianBapakKakek, bagianPasangan } from "./bagian.js";
import { Pasangan, hartaBersih, value, nilai, JumlahSaudara } from "./littlefunction.js";
import { Warisan } from "./end.js";
import { Hasil } from "./formhasil.js";

document.getElementById("formwaris").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const harta = parseInt(document.getElementById("harta").value);
    const wasiat = parseInt(document.getElementById("wasiat").value);
    const hutang = parseInt(document.getElementById("hutang").value);
    const kelaminRaw = document.querySelector('input[name="kelamin"]:checked');
    const kelamin = kelaminRaw.value;

    if (!harta || !kelaminRaw) {
        alert("Mohon lengkapi data dengan benar.");
        return;
    }

    // Form Ahli Waris

    const hadua = document.getElementById("hadua");
    hadua.innerHTML = "Masukkan Data Ahli Waris";
    const formwaris = document.getElementById("formwaris");
    formwaris.innerHTML = form;
    // const pasangan = document.getElementsByClassName("pasangan");

    // Ketika Di Kirim
    formwaris.addEventListener("submit", function (event) {
        // Mengambil Nilai-Nilai Ahli Waris Yang Dibutuhkan
        const anaklk = value("anaklk");
        const anakpr = value("anakpr");
        const bapak = nilai("bapak");
        const ibu = nilai("ibu");
        const kakek = value("kakek");
        const nenek = value("nenek");
        const cuculklk = value("cuculklk");
        const cucuprlk = value("cucuprlk");
        const saudarak = value("saudarak");
        const saudarab = value("saudarab");
        const saudarai = value("saudarai");
        const saudarik = value("saudarik");
        const saudarib = value("saudarib");
        const saudarii = value("saudarii");
        const anaksaudarak = value("anaksaudarak");
        const anaksaudarab = value("anaksaudarab");
        const pamank = value("pamank");
        const pamanb = value("pamanb");
        const anakpamank = value("anakpamank");
        const anakpamanb = value("anakpamanb");

        // Function Membersihkan Harta Waris ( Menunaikan Kewajiban sebelum membagikan harta waris )

        const pasangan = Pasangan(kelamin);
        const jumlahsaudara = JumlahSaudara(saudarak, saudarab, saudarai, saudarik, saudarib, saudarii);
        const bersih = hartaBersih(harta, wasiat, hutang);

        // End Function pembagian waris

        let bagiananaklaki; // Bagian Anak Laki-Laki
        let bagiananakpr = bagianAnakPr(anaklk, anakpr, bersih);
        let bagianpasangan = bagianPasangan(pasangan, anaklk, cuculklk, anakpr, cucuprlk, bersih);
        let bagianibu = bagianIbu(ibu, anaklk, cuculklk, anakpr, cucuprlk, jumlahsaudara, bersih);
        let bagianbapakkakek = bagianBapakKakek(bapak, kakek, anaklk, cuculklk, anakpr, cucuprlk, bersih);
        let bagianbapak = 0; // Bagian Bapak

        let bagiancuculk = 0; // Bagian Cucu Laki-Laki dari Anak Laki-Laki
        let bagiancucupr = bagianCucuPrLk(anaklk, cuculklk, anakpr, cucuprlk, bersih);
        let bagiannenek = bagianNenek(ibu, nenek, bersih);
        let bagiankakek = 0; // Bagian Kakek

        let bagiansaudarak = 0; // Bagian Saudara Kandung
        let bagiansaudarab = 0; // Bagian Saudara Sebapak
        let bagiansaudarik = 0; // Bagian Saudari Kandung
        let bagiansaudarib = 0; // Bagian Saudari Sebapak

        let bagiananaksaudarak = 0; // Bagian Anak Saudara Kandung
        let bagiananaksaudarab = 0; // Bagian Anak Saudara Sebapak

        let bagianpamank = 0; // Bagian Paman Kandung
        let bagianpamanb = 0; // Bagian Paman Sebapak

        let bagiananakpamank = 0; // Bagian Anak Paman Kandung
        let bagiananakpamanb = 0; // Bagian Anak Paman Sebapak

        // Function Perhitungan Akhir
        const hasilWaris = Warisan(
            bersih,
            bagianpasangan,
            bagiannenek,
            bagianbapakkakek,
            bagiananakpr,
            bagiancucupr,
            bagianibu,
            bagianbapak,
            bagiankakek,
            anaklk,
            anakpr,
            bagiananaklaki,
            cuculklk,
            cucuprlk,
            bagiancuculk,
            bagiancucupr,
            bapak,
            saudarak,
            saudarik,
            bagiansaudarak,
            bagiansaudarik,
            saudarab,
            saudarib,
            bagiansaudarab,
            bagiansaudarib,
            anaksaudarak,
            bagiananaksaudarak,
            anaksaudarab,
            bagiananaksaudarab,
            pamank,
            bagianpamank,
            pamanb,
            bagianpamanb,
            anakpamank,
            bagiananakpamank,
            anakpamanb,
            bagiananakpamanb
        );

        const hasil = Hasil(hasilWaris);
        hadua.innerHTML = "Bagian Waris";
        formwaris.innerHTML = hasil;
    });
});
