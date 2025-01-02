export function bagianAnakPr(anaklk, anakpr, hartaBersih) {
    if (anakpr > 0) {
        if (anaklk <= 0) {
            if (anakpr == 1) {
                return hartaBersih / 2;
            } else {
                return ((hartaBersih / 3) * 2) / anakpr;
            }
        } else {
            return "sisa bareng";
        }
    } else {
        return 0;
    }
}

export function bagianCucuPrLk(anaklk, cuculklk, anakpr, cucuprlk, hartaBersih) {
    if (cucuprlk >= 1 && anaklk == 0 && anakpr <= 1) {
        if (cuculklk < 0) {
            if (anakpr == 1) {
                return hartaBersih / 6 / cucuprlk;
            } else if (anakpr == 0) {
                if (cucuprlk == 1) {
                    return hartaBersih / 2;
                } else {
                    return ((hartaBersih / 3) * 2) / cucuprlk;
                }
            }
        } else {
            return "sisa bareng";
        }
    } else {
        return 0;
    }
}

export function bagianIbu(ibu, anaklk, cuculklk, anakpr, cucuprlk, jumlahsaudara, hartaBersih) {
    if (ibu) {
        if (anaklk == 0 && anakpr == 0 && cuculklk == 0 && cucuprlk == 0 && jumlahsaudara <= 1) {
            if (!suami && (istri <= 0 || !istri)) {
                return hartaBersih / 3;
            } else {
                return "1/3 dari sisa";
            }
        } else {
            return hartaBersih / 6;
        }
    } else {
        return 0;
    }
}

export function bagianNenek(ibu, nenek, hartaBersih) {
    if (nenek > 0) {
        if (ibu == 0) {
            return hartaBersih / 6 / nenek;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

export function bagianBapakKakek(bapak, kakek, anaklk, cuculklk, anakpr, cucuprlk, hartaBersih) {
    if (!bapak && (!kakek || kakek == 0)) {
        return 0;
    } else {
        if (anaklk == 0 && cuculklk == 0) {
            if (anakpr == 0 && cucuprlk == 0) {
                return "sisa";
            } else {
                return "1/6 + sisa";
            }
        } else {
            return hartaBersih / 6;
        }
    }
}

export function bagianPasangan(pasangan, anaklk, cuculklk, anakpr, cucuprlk, hartaBersih) {
    if (pasangan == "Suami") {
        if (anaklk == 0 && anakpr == 0 && cuculklk == 0 && cucuprlk == 0) {
            return hartaBersih / 2;
        } else {
            return hartaBersih / 4;
        }
    } else {
        if (anaklk == 0 && anakpr == 0 && cuculklk == 0 && cucuprlk == 0) {
            return hartaBersih / 4 / istri;
        } else {
            return hartaBersih / 8 / istri;
        }
    }
}
