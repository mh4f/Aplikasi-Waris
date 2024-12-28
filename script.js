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
        const cucuprlk = value("cucuprlk");
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
        function hartaBersih() {
            if (hutang == 0 || !hutang) {
                if (wasiat) {
                    if (wasiat > harta / 3) {
                        return harta - harta / 3;
                    } else {
                        return harta - wasiat;
                    }
                } else {
                    return harta;
                }
            } else {
                if (wasiat) {
                    if (wasiat > harta / 3) {
                        return harta - hutang - harta / 3;
                    } else {
                        return harta - hutang - wasiat;
                    }
                } else {
                    return harta - hutang;
                }
            }
        }

        // Function Jumlah Saudara & Pasangan
        function jumlahSaudara() {
            return saudarak + saudarab + saudarai + saudarik + saudarib + saudarii;
        }

        function Pasangan() {
            if (kelamin == "laki") {
                const pasangan = "istri";
                return pasangan;
            } else {
                const pasangan = "suami";
                return pasangan;
            }
        }

        const pasangan = Pasangan();
        const jumlahsaudara = jumlahSaudara();
        const bersih = hartaBersih();

        // Function pembagian waris
        function bagianAnakLk() {
            if (anakpr == 0) {
                return "sisa";
            } else {
                return "sisa bareng";
            }
        }

        function bagianCucuLkLk() {
            if (anaklk == 0) {
                if (cucuprlk == 0) {
                    return "sisa";
                } else {
                    return "sisa bareng";
                }
            } else {
                return 0;
            }
        }

        function bagianAnakPr() {
            if ((anakpr) => 0) {
                if (anaklk <= 0) {
                    if (anakpr == 1) {
                        return harta / 2;
                    } else {
                        return ((harta / 3) * 2) / anakpr;
                    }
                } else {
                    return "sisa bareng";
                }
            } else {
                return 0;
            }
        }

        function bagianCucuPrLk() {
            if ((cucuprlk) => 1 && anaklk == 0 && anakpr <= 1) {
                if (cuculklk <= 0) {
                    if (anakpr == 1) {
                        return harta / 6 / cucuprlk;
                    } else if (anakpr == 0);
                    {
                        if (cucuprlk == 1) {
                            return harta / 2;
                        } else {
                            return ((harta / 3) * 2) / cucuprlk;
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
            if (anaklk == 0 && anakpr == 0 && cuculklk == 0 && cucuprlk == 0 && jumlahsaudara > 1) {
                if (suami == 0 && istri == 0) {
                    return harta / 3;
                } else {
                    return "1/3 dari sisa";
                }
            } else {
                return harta / 6;
            }
        }

        function bagianNenek() {
            if (ibu == 0) {
                return harta / 6 / nenek;
            } else {
                return 0;
            }
        }

        function bagianBapakKakek() {
            if (anaklk == 0 && cuculklk == 0) {
                if (anakpr == 0 && cucuprlk == 0) {
                    return "sisa";
                } else {
                    return "1/6 + sisa";
                }
            } else {
                return harta / 6;
            }
        }

        function bagianPasangan() {
            if (pasangan == "suami") {
                if (suami != 0) {
                    if (anaklk == 0 && anakpr == 0 && cuculklk == 0 && cucuprlk == 0) {
                        return harta / 2;
                    } else {
                        return harta / 4;
                    }
                } else {
                    return 0;
                }
            } else {
                if (istri != 0) {
                    if (anaklk == 0 && anakpr == 0 && cuculklk == 0 && cucuprlk == 0) {
                        return harta / 4 / istri;
                    } else {
                        return harta / 8 / istri;
                    }
                } else {
                    return 0;
                }
            }
        }

        // End Function pembagian waris

        let bal; // Bagian Anak Laki-Laki
        let bap = bagianAnakPr();
        let bp = bagianPasangan();
        let bi = bagianIbu();
        let bbk = bagianBapakKakek();
        let bb; // Bagian Bapak

        let bcl; // Bagian Cucu Laki-Laki dari Anak Laki-Laki
        let bcp = bagianCucuPrLk();
        let bn = bagianNenek();
        let bk = 0; // Bagian Kakek

        let bsik = 0; // Bagian Saudara Kandung
        let bsib = 0; // Bagian Saudara Sebapak
        let bsak = 0; // Bagian Saudari Kandung
        let bsab = 0; // Bagian Saudari Sebapak

        let bask = 0; // Bagian Anak Saudara Kandung
        let basb = 0; // Bagian Anak Saudara Sebapak

        let bpk = 0; // Bagian Paman Kandung
        let bpb = 0; // Bagian Paman Sebapak

        let bapk = 0; // Bagian Anak Paman Kandung
        let bapb = 0; // Bagian Anak Paman Sebapak

        // Function Perhitungan Akhir
        function Furudh() {
            let hartaReal = bersih;
            if (!bp) {
                if (!bap) {
                    hartaReal = hartaReal - bi - bn - bcp;
                    bbk = hartaReal;
                } else {
                    hartaReal = hartaReal - bersih / 6 - bi - bap - bn - bcp;
                    bbk = hartaReal + bersih / 6;
                }
            } else {
                if (!bap) {
                    hartaReal = hartaReal - bp - bn - bcp;
                    if (ibu) {
                        bi = hartaReal / 3;
                        hartaReal = hartaReal - bi;
                    }
                    bbk = hartaReal;
                } else {
                    hartaReal = hartaReal - bersih / 6 - bi - bap - bn;
                    bbk = hartaReal + bersih / 6;
                }
            }
            if (bapak) {
                bb = bbk;
                bk = 0;
            } else {
                bb = 0;
                bk = bbk / kakek;
            }
            if (bn) {
                bn = bn / nenek;
            }
            return hartaReal;
        }

        function Ashabah(sisa) {
            let bagiansisa;
            if (anaklk > 0) {
                if (anakpr > 0) {
                    bagiansisa = sisa / (anaklk * 2) + anakpr;
                    bal = bagiansisa * 2;
                    bap = bagiansisa;
                } else {
                    bagiansisa = sisa / anaklk;
                    bal = bagiansisa;
                }
            } else {
                if (cuculklk > 0) {
                    if (cucuprlk > 0) {
                        bagiansisa = sisa / (cuculklk * 2) + cucuprlk;
                        bcl = bagiansisa * 2;
                        bcp = bagiansisa;
                    } else {
                        bagiansisa = sisa / cuculklk;
                        bcl = bagiansisa;
                    }
                } else {
                    if (bapak) {
                        bagiansisa = sisa;
                        bp = bagiansisa;
                    } else {
                        if (kakek > 0) {
                            bagiansisa = sisa / kakek;
                            bk = bagiansisa;
                        } else {
                            if (saudarak > 0) {
                                if (saudarik > 0) {
                                    bagiansisa = sisa / (saudarak * 2) + saudarik;
                                    bsik = bagiansisa * 2;
                                    bsak = bagiansisa;
                                } else {
                                    bagiansisa = sisa / saudarak;
                                    bsik = bagiansisa;
                                }
                            } else {
                                if (saudarab) {
                                    if (saudarib > 0) {
                                        bagiansisa = sisa / (saudarab * 2) + saudarib;
                                        bsib = bagiansisa * 2;
                                        bsab = bagiansisa;
                                    } else {
                                        bagiansisa = sisa / saudarab;
                                        bsib = bagiansisa;
                                    }
                                } else {
                                    if (anaksaudarak) {
                                        bask = sisa / anaksaudarak;
                                    } else {
                                        if (anaksaudarab) {
                                            basb = sisa / anaksaudarab;
                                        } else {
                                            if (pamank) {
                                                bpk = sisa / pamank;
                                            } else {
                                                if (pamanb) {
                                                    bpb = sisa / pamanb;
                                                } else {
                                                    if (anakpamank) {
                                                        bapk = sisa / anakpamank;
                                                    } else {
                                                        if (anakpamanb) {
                                                            bapb = sisa / anakpamanb;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        const sisa = Furudh();
        Ashabah(sisa);

        hadua.innerHTML = "Bagian Waris";
        formwaris.innerHTML = `
        <div class="mb-3">
            <h5>Bagian 1 Anak Laki-Laki ${bal}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian 1 Anak Perempuan ${bap}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian ${pasangan} ${bp}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Bapak ${bb}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Ibu ${bi}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Kakek ${bk}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Nenek ${bn}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Cucu Laki-Laki dar Anak Laki-Laki ${bcl}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Cucu Perempuan dari Anak Laki-Laki ${bcp}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Saudara Laki-Laki Sekandung ${bsik}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Saudara Laki-Laki Sebapak ${bsib}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Anak Saudara Laki-Laki Sekandung ${bask}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Anak Saudara Laki-Laki Sebapak ${basb}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Paman Sekandung ${bpk}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Paman Sebapak ${bpb}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Anak Paman Sekandung ${bapk}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Anak Paman Sebapak ${bapb}</h5>
        </div>
    `;
    });
});
