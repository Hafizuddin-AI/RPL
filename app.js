const db = {
    get: (key) => JSON.parse(localStorage.getItem(key) || "[]"),
    save: (key, data) => localStorage.setItem(key, JSON.stringify(data))
};

// LOGIN KHUSUS ADMIN
function loginAdmin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // USERNAME: admin | PASSWORD: admin123
    if (user === "admin" && pass === "admin123") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", "Admin");
        window.location = "dashboard.html";
    } else {
        alert("Login Gagal! Hanya Admin yang diizinkan masuk.");
    }
}

// PROTEKSI AKSES
function checkAuth() {
    if (localStorage.getItem("isLoggedIn") !== "true" || localStorage.getItem("role") !== "Admin") {
        window.location = "index.html";
    } else {
        injectMenu();
    }
}

function injectMenu() {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.innerHTML = `
            <h2>Sidomulyo Farm Banjarnegara</h2>
            <a href="dashboard.html">Dashboard</a>
            <a href="master-data.html">Master Data</a>
            <a href="breeding.html">Breeding</a>
            <a href="kesehatan.html">Kesehatan</a>
            <a href="katalog.html">Katalog</a>
            <a href="transaksi.html">Transaksi</a>
            <a href="laporan.html">Laporan</a>
            <a href="index.html" onclick="localStorage.clear()" style="margin-top:auto; color:red; font-weight:bold;">Logout</a>
        `;
    }
}