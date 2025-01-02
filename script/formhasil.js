export function Hasil(hasilWaris) {
    const hasil = `
        <div class="mb-3">
            <h5>Bagian 1 Anak Laki-Laki ${hasilWaris.bagiananaklaki}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian 1 Anak Perempuan ${hasilWaris.bagiananakpr}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian ${pasangan} ${hasilWaris.bagianpasangan}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Bapak ${hasilWaris.bagianbapak}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Ibu ${hasilWaris.bagianibu}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Kakek ${hasilWaris.bagiankakek}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Nenek ${hasilWaris.bagiannenek}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Cucu Laki-Laki dar Anak Laki-Laki ${hasilWaris.bagiancuculk}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Cucu Perempuan dari Anak Laki-Laki ${hasilWaris.bagiancucupr}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Saudara Laki-Laki Sekandung ${hasilWaris.bagiansaudarak}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Saudara Laki-Laki Sebapak ${hasilWaris.bagiansaudarab}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Anak Saudara Laki-Laki Sekandung ${hasilWaris.bagiananaksaudarak}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Anak Saudara Laki-Laki Sebapak ${hasilWaris.bagiananaksaudarab}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Saudari Sekandung ${hasilWaris.bagiansaudarik}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Saudari Sebapak ${hasilWaris.bagiansaudarib}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Paman Sekandung ${hasilWaris.bagianpamank}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Paman Sebapak ${hasilWaris.bagianpamanb}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Anak Paman Sekandung ${hasilWaris.bagiananakpamank}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Anak Paman Sebapak ${hasilWaris.bagiananakpamanb}</h5>
        </div>
        `;

    return hasil;
}
