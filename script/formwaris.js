export const form = `
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
