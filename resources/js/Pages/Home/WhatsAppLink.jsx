
const WhatsAppLink = () => {
    const phoneNumber = "62818936487"; // Nomor WhatsApp tanpa karakter '+'
    const message = "hai"; // Pesan yang ingin dikirim

    // Membuat URL WhatsApp dengan nomor telepon dan pesan
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
        >
            WhatsApp Kami
        </a>
    );
};

export default WhatsAppLink;