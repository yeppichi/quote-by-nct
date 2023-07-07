const container = document.querySelector(".container");
const tombol = document.querySelector("#tombol");
let img;
let card;

function gambar() {
  const gambarAcak = Math.floor(Math.random() * 6 + 1);
  let namaGambar;

  if (gambarAcak === 1) namaGambar = "1.png";
  if (gambarAcak === 2) namaGambar = "2.png";
  if (gambarAcak === 3) namaGambar = "3.png";
  if (gambarAcak === 4) namaGambar = "4.jpg";
  if (gambarAcak === 5) namaGambar = "5.jpg";
  if (gambarAcak === 6) namaGambar = "6.jpg";

  return namaGambar;
}

function kutipanMark() {
  const quote = Math.floor(Math.random() * 2 + 1);
  let isiQuote;
  if (quote === 1) isiQuote = "It's not that God doesn't know your sadness, but God knows you're strong.";
  if (quote === 2) isiQuote = "It's not always easy, but there's life. Be strong because there are better days ahead.";
  if (quote === 3) isiQuote = "Makes everything look easy. Heather loves that.";
  return isiQuote;
}

function kutipanChenle() {
  const quote = Math.floor(Math.random() * 2 + 1);
  let isiQuote;
  if (quote === 1) isiQuote = "Don't be too hard on yourself, because it's okay to do something wrong.";
  if (quote === 2) isiQuote = "Jangan terlalu banyak berpikir, hiduplah dengan bahagia. Ini adalah hidupmu sendiri, jika kamu senang itu cukup.";
  if (quote === 3) isiQuote = "You did your best! It's good to have that kind of heart.";
  return isiQuote;
}

function kutipanHaechan() {
  const quote = Math.floor(Math.random() * 3 + 1);
  let isiQuote;
  if (quote === 1) isiQuote = "Don't be afraid to fail, be afraid not to try.";
  if (quote === 2) isiQuote = "Tak perlu mimpi indah, cukup tidur nyenyak.";
  if (quote === 3) isiQuote = "If you can't avoid it, enjoy it.";
  return isiQuote;
}

function kutipanTen() {
  const quote = Math.floor(Math.random() * 3 + 1);
  let isiQuote;
  if (quote === 1) isiQuote = "Be you, be unique, be crazy. You're beautiful.";
  if (quote === 2) isiQuote = "Turn my mess into messages, learn from the lessons and keep on.";
  if (quote === 3) isiQuote = "It's your own story, so just play with it.";
  return isiQuote;
}

function quote() {
  const acakQuote = Math.floor(Math.random() * 4 + 1);
  const isiQuote = Math.floor(Math.random() * 3 + 1);
  let isi;
  const footer = document.createElement("footer");
  footer.classList.add("blockquote-footer");
  const blockquote = document.createElement("blockquote");
  blockquote.classList.add("blockquote", "mb-0");
  const p = document.createElement("p");
  blockquote.appendChild(p);
  
  if (acakQuote === 1) {
    footer.innerHTML = "Mark Lee";
    if (isiQuote === 1) isi = kutipanMark();
    if (isiQuote === 2) isi = kutipanMark();
    if (isiQuote === 3) isi = kutipanMark();
  }
  else if (acakQuote === 2) {
    footer.innerHTML = "Chenle Zhong";
    if (isiQuote === 1) isi = kutipanChenle();
    if (isiQuote === 2) isi = kutipanChenle();
    if (isiQuote === 3) isi = kutipanChenle();
  }
  else if (acakQuote === 3) {
    footer.innerHTML = "Haechan Lee";
    if (isiQuote === 1) isi = kutipanHaechan();
    if (isiQuote === 2) isi = kutipanHaechan();
    if (isiQuote === 3) isi = kutipanHaechan();
  }
  else if (acakQuote === 4) {
    footer.innerHTML = "Ten Lee";
    if (isiQuote === 1) isi = kutipanTen();
    if (isiQuote === 2) isi = kutipanTen();
    if (isiQuote === 3) isi = kutipanTen();
  }
  
  p.innerHTML = `"${isi}"`;

  if (card) {
    container.removeChild(card);
  }

  card = document.createElement("div");
  card.classList.add("card", "mx-auto");
  container.appendChild(card);

  img = document.createElement("img");
  img.setAttribute("src", `assets/${gambar()}`);
  img.classList.add("card-img-top");
  card.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  cardBody.appendChild(blockquote);
  blockquote.appendChild(footer);
}

tombol.addEventListener("click", quote);