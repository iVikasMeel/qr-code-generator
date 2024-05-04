const QrInput = document.getElementById('qrInput');
const QrImage = document.getElementById('qrImg');
const QrButton = document.getElementById('qrButton');

// console.log(QrInput, QrImage, QrButton);

QrButton.addEventListener('click' , ()=>{
    const inputValue = QrInput.value;
    // console.log(inputValue);
    if (!inputValue) {
        alert("Please enter a Valid URL!")
    } else{
        QrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        QrImage.alt = `QR image for ${inputValue}`
    }
})


QrInput.addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("qrButton").click();
    }
  });