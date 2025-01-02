export function Pasangan(kelamin) {
    if (kelamin == "laki") {
        const pasangan = "Istri";
        return pasangan;
    } else {
        const pasangan = "Suami";
        return pasangan;
    }
}

export function hartaBersih(harta, wasiat, hutang) {
    const maxWasiat = harta / 3;
    wasiat = wasiat > maxWasiat ? maxWasiat : wasiat;
    return harta - (hutang || 0) - (wasiat || 0);
}

export const value = (id) => {
    return parseInt(document.getElementById(id).value);
};
export const nilai = (id) => {
    return document.getElementById(id).value;
};

function JumlahSaudara(saudarak, saudarab, saudarai, saudarik, saudarib, saudarii) {
    return saudarak + saudarab + saudarai + saudarik + saudarib + saudarii;
}
