
export function IsBanglaPreKar(char) {
    var preKars = ["ি", "ে", "ৈ"];
    for (var i = 0; i < preKars.length; i++) if (char == preKars[i]) return true;
    return false;
}
export function IsBanglaPostKar(char) {
    var postKars = ["া", "ী", "ো", "ৌ"];
    for (var i = 0; i < postKars.length; i++) if (char == postKars[i]) return true;
    return false;
}
export function IsBanglaKar(char) {
    var kars = ["া", "ি", "ী", "ু", "ূ", "ৃ", "ে", "ৈ", "ো", "ৌ"];
    for (var i = 0; i < kars.length; i++) if (char == kars[i]) return true;
    return false;
}
export function IsBanglaBanjonborno(char) {
    var banjonborno = ["ক", "খ", "গ", "ঘ", "ঙ", "চ", "ছ", "জ", "ঝ", "ঞ", "ট", "ঠ", "ড", "ঢ", "ণ", "ত", "থ", "দ", "ধ", "ন", "প", "ফ", "ব", "ভ", "ম", "য", "র", "ল", "শ", "ষ", "স", "হ", "ড়", "ঢ়", "য়", "ৎ"];
    for (var i = 0; i < banjonborno.length; i++) if (char == banjonborno[i]) return true;
    return false;
}
export function IsBanglaShoroborno(char) {
    var shoroborno = ["অ", "আ", "ই", "ঈ", "উ", "ঊ", "ঋ", "এ", "ঐ", "ও", "ঔ"];
    for (var i = 0; i < shoroborno.length; i++) if (char == shoroborno[i]) return true;
    return false;
}
export function IsBanglaNukta(char) {
    if (char == "়") return true;
    return false;
}
export function IsBanglaHalant(char) {
    if (char == "্") return true;
    return false;
}
export function IsSpace(char) {
    if (char == " " || char == "\t" || char == "\n" || char == "\r") return true;
    return false;
}
