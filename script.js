document.getElementById("formwaris").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const harta = parseInt(document.getElementById("harta").value);
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
                <input type="number" class="form-control" id="cucuprlk" placeholder="Masukkan jumlah Cucu Perempuan dari Anak Laki-Laki" />
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
        // Ketika Di Kirim

        const value = (id) => {
            return parseInt(document.getElementById(id).value);
        };
        const nilai = (id) => {
            return document.getElementById(id).value;
        };

        // Mengambil Nilai-Nilai Ahli Waris Yang Dibutuhkan
        const anaklk = value("anaklk");
        const anakpr = value("anakpr");
        const bapak = nilai("bapak");
        const ibu = nilai("ibu");
        const suami = nilai("suami");
        const istri = value("istri");
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
        function hartaBersih(harta, wasiat, hutang) {
            const maxWasiat = harta / 3;
            wasiat = wasiat > maxWasiat ? maxWasiat : wasiat;
            return harta - (hutang || 0) - (wasiat || 0);
        }

        function Pasangan() {
            if (kelamin == "laki") {
                const pasangan = "Istri";
                return pasangan;
            } else {
                const pasangan = "Suami";
                return pasangan;
            }
        }

        function JumlahSaudara() {
            return saudarak + saudarab + saudarai + saudarik + saudarib + saudarii;
        }

        const pasangan = Pasangan();
        const jumlahsaudara = JumlahSaudara();
        const bersih = hartaBersih(harta, wasiat, hutang);

        // Function pembagian waris

        function bagianAnakPr() {
            if (anakpr > 0) {
                if (anaklk <= 0) {
                    if (anakpr == 1) {
                        return bersih / 2;
                    } else {
                        return ((bersih / 3) * 2) / anakpr;
                    }
                } else {
                    return "sisa bareng";
                }
            } else {
                return 0;
            }
        }

        function bagianCucuPrLk() {
            if (cucuprlk >= 1 && anaklk == 0 && anakpr <= 1) {
                if (cuculklk <= 0) {
                    if (anakpr == 1) {
                        return bersih / 6 / cucuprlk;
                    } else if (anakpr == 0) {
                        if (cucuprlk == 1) {
                            return bersih / 2;
                        } else {
                            return ((bersih / 3) * 2) / cucuprlk;
                        }
                    }
                } else {
                    return "sisa bareng";
                }
            } else {
                return 0;
            }
        }

        function bagianIbu() {
            if (ibu) {
                if (anaklk == 0 && anakpr == 0 && cuculklk == 0 && cucuprlk == 0 && jumlahsaudara <= 1) {
                    if (!suami && (istri <= 0 || !istri)) {
                        return bersih / 3;
                    } else {
                        return "1/3 dari sisa";
                    }
                } else {
                    return bersih / 6;
                }
            } else {
                return 0;
            }
        }

        function bagianNenek() {
            if (ibu == 0) {
                return bersih / 6 / nenek;
            } else {
                return 0;
            }
        }

        function bagianBapakKakek() {
            if (!bapak && !kakek) {
                return 0;
            } else {
                if (anaklk == 0 && cuculklk == 0) {
                    if (anakpr == 0 && cucuprlk == 0) {
                        return "sisa";
                    } else {
                        return "1/6 + sisa";
                    }
                } else {
                    return bersih / 6;
                }
            }
        }

        function bagianPasangan() {
            if (pasangan == "Suami") {
                if (anaklk == 0 && anakpr == 0 && cuculklk == 0 && cucuprlk == 0) {
                    return bersih / 2;
                } else {
                    return bersih / 4;
                }
            } else {
                if (anaklk == 0 && anakpr == 0 && cuculklk == 0 && cucuprlk == 0) {
                    return bersih / 4 / istri;
                } else {
                    return bersih / 8 / istri;
                }
            }
        }

        // End Function pembagian waris

        let bagiananaklaki; // Bagian Anak Laki-Laki
        let bagiananakpr = bagianAnakPr();
        let bagianpasangan = bagianPasangan();
        let bagianibu = bagianIbu();
        let bagianbapakkakek = bagianBapakKakek();
        let bagianbapak = 0; // Bagian Bapak

        let bagiancuculk = 0; // Bagian Cucu Laki-Laki dari Anak Laki-Laki
        let bagiancucupr = bagianCucuPrLk();
        let bagiannenek = bagianNenek();
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
        function Warisan() {
            let sisa = bersih;
            console.log(sisa);
            sisa -= bagianpasangan;
            console.log(sisa);
            sisa -= bagiannenek;
            console.log(sisa);
            sisa -= bagianbapakkakek !== "sisa" ? bagianbapakkakek : 0;
            console.log(sisa);
            sisa -= bagiananakpr !== "sisa bareng" ? bagiananakpr : 0;
            console.log(sisa);
            sisa -= bagiancucupr !== "sisa bareng" ? bagiancucupr : 0;
            console.log(sisa);
            bagianibu = bagianibu != "1/3 dari sisa" ? bagianibu : sisa / 3;
            sisa -= bagianibu;
            console.log(sisa);

            if (bapak) {
                bagianbapak = bagianbapakkakek;
                bagiankakek = 0;
            } else {
                bagiankakek = bagianbapakkakek;
                bagianbapak = 0;
            }

            if (anaklk > 0) {
                if (anakpr > 0) {
                    sisa /= anaklk * 2 + anakpr;
                    bagiananaklaki = sisa * 2;
                    bagiananakpr = sisa;
                } else {
                    bagiananaklaki = sisa / anaklk;
                }
            } else {
                if (cuculklk > 0) {
                    if (cucuprlk > 0) {
                        sisa /= anaklk * 2 + cucuprlk;
                        bagiancuculk = sisa * 2;
                        bagiancucupr = sisa;
                    } else {
                        bagiancuculk = sisa / cuculklk;
                    }
                } else {
                    if (bapak) {
                        bagianbapak = sisa;
                    } else if (kakek > 0) {
                        bagiankakek = sisa / kakek;
                    } else if (saudarak > 0) {
                        if (saudarik > 0) {
                            sisa = sisa / (saudarak * 2) + saudarik;
                            bagiansaudarak = sisa * 2;
                            bagiansaudarik = sisa;
                        } else {
                            sisa /= saudarak;
                        }
                    } else if (saudarab > 0) {
                        if (saudarib > 0) {
                            sisa = sisa / (saudarab * 2) + saudarib;
                            bagiansaudarab = sisa * 2;
                            bagiansaudarib = sisa;
                        } else {
                            sisa /= saudarab;
                        }
                    } else if (anaksaudarak) {
                        bagiananaksaudarak = sisa / anaksaudarak;
                    } else if (anaksaudarab) {
                        bagiananaksaudarab = sisa / anaksaudarab;
                    } else if (pamank) {
                        bagianpamank = sisa / pamank;
                    } else if (pamanb) {
                        bagianpamanb = sisa / pamanb;
                    } else if (anakpamank) {
                        bagiananakpamank = sisa / anakpamank;
                    } else if (anakpamanb) {
                        bagiananakpamanb = sisa / anakpamanb;
                    }
                }
            }
            console.log(sisa);
        }
        Warisan();

        hadua.innerHTML = "Bagian Waris";
        formwaris.innerHTML = `
            <div class="mb-3">
                <h5>Bagian 1 Anak Laki-Laki ${bagiananaklaki}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian 1 Anak Perempuan ${bagiananakpr}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian ${pasangan} ${bagianpasangan}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian Bapak ${bagianbapak}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian Ibu ${bagianibu}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian Kakek ${bagiankakek}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian Nenek ${bagiannenek}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian Cucu Laki-Laki dar Anak Laki-Laki ${bagiancuculk}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian Cucu Perempuan dari Anak Laki-Laki ${bagiancucupr}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian Saudara Laki-Laki Sekandung ${bagiansaudarak}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian Saudara Laki-Laki Sebapak ${bagiansaudarab}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian Anak Saudara Laki-Laki Sekandung ${bagiananaksaudarak}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian Anak Saudara Laki-Laki Sebapak ${bagiananaksaudarab}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian Saudari Sekandung ${bagiansaudarik}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian Saudari Sebapak ${bagiansaudarib}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian Paman Sekandung ${bagianpamank}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian Paman Sebapak ${bagianpamanb}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian Anak Paman Sekandung ${bagiananakpamank}</h5>
            </div>
            <div class="mb-3">
                <h5>Bagian Anak Paman Sebapak ${bagiananakpamanb}</h5>
            </div>
        `;
    });
});
