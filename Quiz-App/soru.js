function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Soru(
    "1-Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "2-Hangisi css paket yönetim uygulasıdır?",
    { a: "sql", b: "Angular", c: "scss" },
    "c"
  ),
  new Soru(
    "3-Hangisi c# paket yönetim uygulasıdır?",
    { a: "bdb", b: "Html", c: "sass" },
    "c"
  ),
  new Soru(
    "4-Hangisi mongo.db paket yönetim uygulasıdır?",
    { a: ".net", b: "Entity Framework", c: "null" },
    "c"
  ),
];
