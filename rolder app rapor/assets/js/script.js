document.addEventListener("DOMContentLoaded", function () {
    let darkMode = localStorage.getItem("darkMode");

    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
    }

    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.checked = darkMode === "enabled";

        themeToggle.addEventListener("change", function () {
            if (this.checked) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("darkMode", "enabled");
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }

    // === Fungsi Login ===
    const loginForm = document.querySelector(".login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Hindari reload halaman

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const errorMsg = document.getElementById("error-msg");

            // Cek apakah user memilih login sebagai admin atau siswa
            const role = document.querySelector('input[name="role"]:checked');

            if (!role) {
                errorMsg.textContent = "Silakan pilih peran terlebih dahulu!";
                return;
            }

            const userRole = role.value;

            // Data akun sementara
            const users = {
                admin: { username: "admin", password: "admin123" },
                siswa: { username: "siswa", password: "siswa123" }
            };

            // Validasi login
            if (users[userRole] && username === users[userRole].username && password === users[userRole].password) {
                localStorage.setItem("userRole", userRole); // Simpan role

                if (userRole === "admin") {
                    window.location.href = "dashboard.html"; // Redirect ke Dashboard Admin
                } else {
                    window.location.href = "index.html"; // Redirect ke Halaman Siswa
                }
            } else {
                errorMsg.textContent = "Username atau password salah!";
            }
        });
    }

    // === Fungsi Logout ===
    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("darkMode");
            localStorage.removeItem("userRole");
            window.location.href = "login.html";
        });
    }
});
