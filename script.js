function generateQRCode() {
  const text = document.getElementById("text").value;
  const color = document.getElementById("color").value;
  const size = parseInt(document.getElementById("size").value);

  const qrCodeContainer = document.getElementById("qrCode");
  qrCodeContainer.innerHTML = ""; // clear previous QR

  if (!text) {
    alert("Please enter a valid text or URL");
    return;
  }

  const qr = new QRCode(qrCodeContainer, {
    text: text,
    width: size,
    height: size,
    colorDark: color,
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Delay download button to ensure QR is rendered
  setTimeout(() => {
    const img = qrCodeContainer.querySelector("img");
    if (img) {
      const downloadBtn = document.getElementById("downloadBtn");
      downloadBtn.href = img.src;
      downloadBtn.style.display = "inline-block";
    }
  }, 500);
}
