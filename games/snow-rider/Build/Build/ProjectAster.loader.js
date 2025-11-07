const CORRECT_CODE = "@ster"; // your access code

function checkCode() {
    const input = document.getElementById("access-code").value;
    if (input === CORRECT_CODE) {
        // Hide lock screen
        const lockScreen = document.getElementById("lock-screen");
        if (lockScreen) lockScreen.remove();

        // Dynamically load Unity loader
        const loaderScript = document.createElement("script");
        loaderScript.src = "Build/ProjectAster.loader.js";
        document.body.appendChild(loaderScript);
    } else {
        const error = document.getElementById("error");
        if (error) error.style.display = "block";
    }
}

window.addEventListener('DOMContentLoaded', function() {
    const unlockBtn = document.getElementById('unlock-btn');
    if (unlockBtn) unlockBtn.addEventListener('click', checkCode);

    const codeInput = document.getElementById("access-code");
    if (codeInput) {
        codeInput.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                checkCode();
            }
        });
    }
});
