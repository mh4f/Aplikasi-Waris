import { form, formwarisan } from "./formwaris/formwaris.js";
import { bagianAnakPr, bagianCucuPrLk, bagianIbu, bagianNenek, bagianBapakKakek, bagianPasangan } from "./bagian.js";
import { Pasangan, hartaBersih, value, nilai, element, JumlahSaudara } from "./littlefunction.js";
import { Warisan } from "./end.js";
import { Hasil } from "./formhasil.js";

const formwaris = element("formwaris");

document.getElementById("formwaris").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default.
    const anaklk = value("anaklk");

    formwaris.innerHTML = formwarisan.anakpr;

    formwaris.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah pengiriman formulir secara default.
        const anakpr = nilai("anakpr");

        formwaris.innerHTML = formwarisan.ceklist;

        formwaris.addEventListener("submit", function (event) {
            event.preventDefault(); // Mencegah pengiriman formulir secara default.
            const bapak = nilai("bapak");
            const ibu = nilai("ibu");
            const suami = nilai("suami");

            if (!suami) {
                formwaris.innerHTML = formwarisan.istri;
                formwaris.addEventListener("submit", function (event) {
                    event.preventDefault(); // Mencegah pengiriman formulir secara default.
                });
            }
        });
    });
});
