document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("text");
    const generateBtn = document.getElementById("generate-btn");
    const resetBtn = document.getElementById("reset-btn");
    const qrcodeDiv = document.getElementById("qrcode");

    function generateQRCode() {
        const text = textInput.value.trim(); 

        qrcodeDiv.innerHTML = ""; 

        if (!text) {
            showErrorMessage("Veuillez entrer un texte ou une URL.");
            return;
        }

        try {
            new QRCode(qrcodeDiv, {
                text: text,
                width: 250,
                height: 250,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H // H = 30% de correction d'erreur possible // L = 7% de correction d'erreur possible // M = 15% de correction d'erreur possible // Q = 25% de correction d'erreur possible
            });

        } catch (error) {
            console.log(error);
            
            showErrorMessage("Une erreur est survenue lors de la génération.");
        }
    }

    function resetQRCode() {
        textInput.value = "";
        qrcodeDiv.innerHTML = "";
    }

    function showErrorMessage(message) {
        qrcodeDiv.innerHTML = `<p class="error">${message}</p>`;
    }

    generateBtn.addEventListener("click", generateQRCode);
    resetBtn.addEventListener("click", resetQRCode);

    textInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            generateQRCode();
        }
    });
});
