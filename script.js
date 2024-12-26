document.getElementById("formwaris").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const harta = parseFloat(document.getElementById("harta").value);
    const wasiat = parseInt(document.getElementById("wasiat").value);
    const hutang = parseInt(document.getElementById("hutang").value);
    const kelaminRaw = document.querySelector('input[name="kelamin"]:checked');
    const kelamin = kelaminRaw.value;
    // const iswanita = (kelamin) => {
    //     if (kelamin == cewe) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // };

    if (!harta || !kelaminRaw) {
        alert("Mohon lengkapi data dengan benar.");
        return;
    }

    // Form Ahli Waris

    const hadua = document.getElementById("hadua");
    hadua.innerHTML = "Masukkan Data Ahli Waris";
    const formwaris = document.getElementById("formwaris");
    formwaris.innerHTML = `
            <div class="mb-3">
                <label for="ahli" class="form-label">Jumlah Ahli Waris</label>
                <input type="number" class="form-control" id="harta" placeholder="Masukkan jumlah ahli waris" />
            </div>

            <div class="mb-3">
                <label for="ahli" class="form-label">Ahli Waris Yang Ada :</label>
            </div>

            <div class="mb-3">
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                    <input type="checkbox" class="btn-check" id="bapak" autocomplete="off">
                    <label class="btn btn-outline-primary" for="bapak">Bapak</label>

                    <input type="checkbox" class="btn-check" id="ibu" autocomplete="off">
                    <label class="btn btn-outline-primary" for="ibu">Ibu</label>

                    <input type="checkbox" class="btn-check" id="suami" autocomplete="off">
                    <label class="btn btn-outline-primary" for="suami">Suami</label>
                </div>
            </div>

            <div class="mb-3">
                <select class="form-select" aria-label="Istri" id="istri" required>
                    <option selected>Jumlah Istri</option>
                    <option value="0">Zero</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                </select>
            </div>

            <div class="mb-3">
                <select class="form-select" aria-label="Kakek" id="kakek" required>
                    <option selected>Jumlah Kakek</option>
                    <option value="0">Zero</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                </select>
            </div>

            <div class="mb-3">
                <select class="form-select" aria-label="Nenek" id="nenek" required>
                    <option selected>Jumlah Nenek</option>
                    <option value="0">Zero</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="anaklk" placeholder="Masukkan jumlah Anak Laki-Laki" />
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="anakpr" placeholder="Masukkan jumlah Anak Perempuan" />
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="cuculklk" placeholder="Masukkan jumlah Cucu Laki-Laki dari Anak Laki-Laki" />
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="cuculkpr" placeholder="Masukkan jumlah Cucu Laki-Laki dari Anak Perempuan" />
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="saudarak" placeholder="Masukkan jumlah Saudara Sekandung" />
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="saudarab" placeholder="Masukkan jumlah Saudara Sebapak" />
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="saudarai" placeholder="Masukkan jumlah Saudara Seibu" />
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="saudarik" placeholder="Masukkan jumlah Saudari Sekandung" />
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="saudarib" placeholder="Masukkan jumlah Saudari Sebapak" />
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="saudarii" placeholder="Masukkan jumlah Saudari Seibu" />
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="anaksaudarak" placeholder="Masukkan jumlah Anak Laki-Laki Saudara Sekandung" />
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="anaksaudarab" placeholder="Masukkan jumlah Anak Laki-Laki Saudara Sebapak" />
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="pamank" placeholder="Masukkan jumlah Paman Sekandung" />
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="pamanb" placeholder="Masukkan jumlah Paman Sebapak" />
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="anakpamank" placeholder="Masukkan jumlah Anak Paman Sekandung" />
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="anakpamanb" placeholder="Masukkan jumlah Anak Paman Sebapak" />
            </div>

        <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">Kirim</button>
        </div>`;
    // const pasangan = document.getElementsByClassName("pasangan");

    // Ketika Di Kirim
    formwaris.addEventListener("submit", function (event) {
        // Function Mengembil Element Dengan id
        const value = (id) => {
            const selectedElement = document.getElementById(id);
            const selectedValue = selectedElement.value;
            return selectedValue;
        };

        // Mengambil Nilai-Nilai Ahli Waris Yang Dibutuhkan
        const anaklk = value("anaklk");
        const anakpr = value("anakpr");
        const bapak = value("bapak");
        const ibu = value("ibu");
        const suami = value("suami");
        const istri = value("istri");
        const kakek = value("kakek");
        const nenek = value("nenek");
        const cuculkpr = value("cuculkpr");
        const cuculklk = value("cuculklk");
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
        function hartaBersih(harta, wasiat, hutang) {
            if (hutang > 0) {
                const clean = harta - hutang;
            } else {
                const clean = harta;
            }
            if (wasiat != 0) {
                if (wasiat > clean / 3) {
                    return clean - clean / 3;
                } else {
                    return clean - wasiat;
                }
            }
        }

        // Function pembagian waris
        function bagianAnakLk(anaklk, anakpr) {
            if ((anakpr = 0)) {
                return "sisa";
            } else {
                return "sisa bareng";
            }
        }

        function bagianAnakPr(anakpr, anaklk) {
            if ((anakpr) => 0) {
                if (anaklk <= 0) {
                    if ((anakpr = 1)) {
                        return 1 / 2;
                    } else {
                        return 2 / 3 / anakpr;
                    }
                } else {
                    return "sisa bareng";
                }
            } else {
                return 0;
            }
        }

        function bagianCucuPrLk(anakpr, anaklk, cuculklk, cucuprlk) {
            if ((cucuprlk) => 1 && anaklk == 0 && anakpr <= 1) {
                if (cuculklk <= 0) {
                    if (anakpr == 1) {
                        return 1 / 6 / cucuprlk;
                    }
                    elseif(anakpr == 0);
                    {
                        if ((cucuprlk = 1)) {
                            return 1 / 2;
                        } else {
                            return 2 / 3 / cucuprlk;
                        }
                    }
                } else {
                    return "sisa bareng";
                }
            } else {
                return 0;
            }
        }

        // End Function pembagian waris

        // Function Perhitungan Akhir

        // Eksekusi Function
        const bersih = hartaBersih(harta, wasiat, hutang);

        // function result(
        //     hartaBersih,
        //     anaklk,
        //     anakpr,
        //     bapak,
        //     ibu,
        //     suami,
        //     istri,
        //     kakek,
        //     nenek,
        //     cuculklk,
        //     cuculkpr,
        //     saudarak,
        //     saudarab,
        //     saudarai,
        //     saudarik,
        //     saudarib,
        //     saudarii,
        //     anaksaudarak,
        //     anaksaudarab,
        //     pamank,
        //     pamanb,
        //     anakpamank,
        //     anakpamanb
        // ) {}

        // const result = result(
        //     bersih,
        //     anaklk,
        //     anakpr,
        //     bapak,
        //     ibu,
        //     suami,
        //     istri,
        //     kakek,
        //     nenek,
        //     cuculklk,
        //     cuculkpr,
        //     saudarak,
        //     saudarab,
        //     saudarai,
        //     saudarik,
        //     saudarib,
        //     saudarii,
        //     pamank,
        //     pamanb,
        //     anakpamank,
        //     anakpamanb
        // );

        hadua.innerHTML = "Bagian Waris";
        formwaris.innerHTML = ``;
    });

    // Example calculation (simplified)
    // const bagianPerWaris = harta / jumlahAhliWaris;
    // alert(`Setiap ahli waris akan mendapatkan bagian sebesar: Rp${bagianPerWaris.toFixed(2)}`);
});
