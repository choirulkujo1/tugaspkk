document.getElementById("contact").addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil data dari form
    const name = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("help").value;

    // Format pesan untuk WhatsApp
    const whatsappMessage = `Halo, nama saya ${name}.%0AEmail: ${email}%0APesan: ${message}`;

    // Nomor WhatsApp tujuan
    const phoneNumber = "6285963072013"; // Ganti dengan nomor WhatsApp Anda

    // Redirect ke WhatsApp
    window.open(`https://wa.me/${6285963072013}?text=${whatsappMessage}`, "_blank");
});