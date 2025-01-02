export function Warisan(
    hartaBersih,
    bagianpasangan,
    bagiannenek,
    bagianbapakkakek,
    bagiananakpr,
    bagiancucupr,
    bagianibu,
    bagianbapak,
    bagiankakek,
    anaklk,
    anakpr,
    bagiananaklaki,
    cuculklk,
    cucuprlk,
    bagiancuculk,
    bapak,
    saudarak,
    saudarik,
    bagiansaudarak,
    bagiansaudarik,
    saudarab,
    saudarib,
    bagiansaudarab,
    bagiansaudarib,
    anaksaudarak,
    bagiananaksaudarak,
    anaksaudarab,
    bagiananaksaudarab,
    pamank,
    bagianpamank,
    pamanb,
    bagianpamanb,
    anakpamank,
    bagiananakpamank,
    anakpamanb,
    bagiananakpamanb
) {
    let sisa = hartaBersih;
    sisa -= bagianpasangan;
    sisa -= bagiannenek;
    sisa -= bagianbapakkakek !== "sisa" ? bagianbapakkakek : 0;
    sisa -= bagiananakpr !== "sisa bareng" ? bagiananakpr : 0;
    sisa -= bagiancucupr !== "sisa bareng" ? bagiancucupr : 0;
    bagianibu = bagianibu != "1/3 dari sisa" ? bagianibu : sisa / 3;
    sisa -= bagianibu;

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

    const hasilWaris = {
        hartaBersih,
        bagianpasangan,
        bagiannenek,
        bagianbapakkakek,
        bagiananakpr,
        bagiancucupr,
        bagianibu,
        bagianbapak,
        bagiankakek,
        bagiananaklaki,
        bagiancuculk,
        bagiancucupr,
        bagiansaudarak,
        bagiansaudarik,
        bagiansaudarab,
        bagiansaudarib,
        bagiananaksaudarak,
        bagiananaksaudarab,
        bagianpamank,
        bagianpamanb,
        bagiananakpamank,
        bagiananakpamanb,
    };
    return hasilWaris;
}
