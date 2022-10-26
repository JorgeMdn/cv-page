const IMAGE_URL = "./cv.pdf";
const FILE_NAME = "Jorge-Medina-CV-Web-Developer";

async function downloadCV() {
  const image = await fetch(IMAGE_URL);
  const blob = await image.blob();
  const imageURL = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = imageURL;
  anchor.download = FILE_NAME;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  URL.revokeObjectURL(imageURL);
}
