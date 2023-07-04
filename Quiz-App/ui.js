function UI() {
  this.btn_start = document.querySelector(".btn_start");
  this.btn_replay = document.querySelector(".btn_replay");
  this.btn_quit = document.querySelector(".btn_quit");
  this.next_btn = document.querySelector(".next_btn");
  this.quiz_box = document.querySelector(".quiz_box");
  this.score_box = document.querySelector(".score_box");
  this.question_text = document.querySelector(".question_text");
  this.option_list = document.querySelector(".option_list");
  this.correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`;
  this.incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`;
  this.time_text = document.querySelector(".time_text");
  this.time_second = document.querySelector(".time_second");
  this.time_line = document.querySelector(".time_line");
}

UI.prototype.soruGoster = function (soru) {
  let question = `<span> ${soru.soruMetni} </span>`;
  let options = ``;

  for (let cevap in soru.cevapSecenekleri) {
    options += `<div class="option ">
      <span>
      <b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}
      </span>
      
    </div> `;
  }

  this.question_text.innerHTML = question;
  this.option_list.innerHTML = options;

  const option = this.option_list.querySelectorAll(".option");

  for (let opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
};

UI.prototype.soruSayisiniGoster = function (soruSirasi, toplamSoru) {
  let tag = `   <span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`;
  document.querySelector(".quiz_box .question-index").innerHTML = tag;
};
UI.prototype.skoruGoster = function (toplamSoru, dogruCevap) {
  let tag = `Toplam ${toplamSoru} Sorudan ${dogruCevap} Doğru Cevap Verdiniz.`;
  document.querySelector(".score_box .score_text").innerHTML = tag;
};
