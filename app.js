const QRcontent = document.getElementById("QRcontent");
const linkForm = document.getElementById("linkForm");

const QR = new QRCode(QRcontent);

linkForm.addEventListener("submit", (e) => {
  e.preventDefault();
  QR.makeCode(linkForm.link.value);
});
