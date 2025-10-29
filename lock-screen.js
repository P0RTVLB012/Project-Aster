<body style="overflow:hidden;padding:0;margin:0;">
    <!-- Lock screen overlay -->
    <div id="lock-screen">
        <h1>Enter Access Code</h1>
        <input type="password" id="access-code" placeholder="Access Code" autofocus>
        <button id="unlock-btn">Unlock</button>
        <p id="error" style="color:red;margin-top:10px;display:none;">Wrong code!</p>
    </div>

    <!-- Game container -->
    <div id="gameContainer" style="width:960px;height:600px;margin:auto;"></div>

    <!-- Only your lock-screen.js -->
    <script src="lock-screen.js"></script>
</body>
