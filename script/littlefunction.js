function parseBoolean(value) {
    if (typeof value === "boolean") {
        return value;
    }
}

export function Pasangan(kelamin) {
    return kelamin == "laki" ? "Istri" : "Suami";
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
    return parseBoolean(document.getElementById(id).value);
};

export const element = (id) => {
    return document.getElementById(id);
};

export function JumlahSaudara(saudarak, saudarab, saudarai, saudarik, saudarib, saudarii) {
    return saudarak + saudarab + saudarai + saudarik + saudarib + saudarii;
}
