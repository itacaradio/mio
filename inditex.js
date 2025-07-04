const mainLogo = document.getElementById('main-logo');
const logoImg = document.getElementById('logo-img');
const uploadLogo = document.getElementById('upload-logo');

// Clic sul logo per caricare una nuova immagine
mainLogo.addEventListener('click', () => {
  uploadLogo.click();
});

uploadLogo.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      logoImg.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});
