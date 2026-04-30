function joinNow() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function selectPlan(plan) {
    alert("You selected " + plan + " plan");
}

function submitForm() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    let message = `Hello my name ${name}, I want to join your gym. Send me your plans`;

    let phone = "918109944185"; // 🔥 replace this

    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

function openWhatsApp() {
    window.open("https://wa.me/91XXXXXXXXXX", "_blank");
}