const form = document.getElementById("survey-form");
const submitButton = document.getElementById("submit-button");
const thankYouMessage = document.getElementById("thank-you-message");

submitButton.onclick = function(event) {
    if (form.checkValidity()) {
        event.preventDefault();

        form.style.display = "none";

        thankYouMessage.style.display = "block";
    } else {
        form.reportValidity();
    }
};
