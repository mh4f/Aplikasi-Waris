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

        // function bagianBapak() {
        //     if (anaklk == 0 && cuculklk == 0) {
        //         if (anakpr == 0 && cucuprlk == 0) {
        //             return "sisa";
        //         } else {
        //             return harta / 6 + "sisa";
        //         }
        //     } else {
        //         return harta / 6;
        //     }
        // }

        // function bagianKakek() {
        //     if (bapak == 0) {
        //         if (anaklk == 0 && cuculklk == 0) {
        //             if (anakpr == 0 && cucuprlk == 0) {
        //                 return "sisa";
        //             } else {
        //                 return harta / 6 + "sisa";
        //             }
        //         } else {
        //             return harta / 6;
        //         }
        //     } else {
        //         return 0;
        //     }
        // }

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

        let bal = bagianAnakLk();
        let bap = bagianAnakPr();
        let bcl = bagianCucuLkLk();
        let bcp = bagianCucuPrLk();
        let bp = bagianPasangan();
        let bi = bagianIbu();
        let bbk = bagianBapakKakek();
        let bb;
        let bn = bagianNenek();
        let bk;

        // Function Perhitungan Akhir
        function Warisan() {
            let hartaReal = bersih;
            if (!bal) {
                if (!bp) {
                    if (!bap) {
                        hartaReal = hartaReal - bi - bn;
                        bbk = hartaReal;
                    } else {
                        hartaReal = hartaReal - bersih / 6 - bi - bap - bn;
                        bbk = hartaReal + bersih / 6;
                    }
                } else {
                    if (!bap) {
                        hartaReal = hartaReal - bp - bn;
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
            } else {
                hartaReal = hartaReal - bbk - bi;
                if (!bap) {
                    bal = hartaReal / anaklk;
                } else {
                    hartaReal = hartaReal / (anaklk * 2 + anakpr);
                    bal = (hartaReal * 2) / anaklk;
                    bap = hartaReal / anakpr;
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
        }
        Warisan();

        hadua.innerHTML = "Bagian Waris";
        formwaris.innerHTML = `
        <div class="mb-3">
            <h5>Bagian 1 Anak Laki-Laki ${bal}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian 1 Anak Perempuan ${bap}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Pasangan ${bp}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Bapak ${bb}</h5>
        </div>
        <div class="mb-3">
            <h5>Bagian Ibu ${bi}</h5>
        </div>
    `;
    });

    // Example calculation (simplified)
    // const bagianPerWaris = harta / jumlahAhliWaris;
    // alert(`Setiap ahli waris akan mendapatkan bagian sebesar: Rp${bagianPerWaris.toFixed(2)}`);
});
