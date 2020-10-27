navigator.getBattery().then(function (battery) {
    ischarging();
    batlevel();
    function ischarging() {
        const status = battery.charging ? "yes" : "no";
        document.getElementById("no").src = "src/images/charging.gif";
    }
    function batlevel() {
        const level = battery.level * 100 + "%";
        document.getElementById("level").innerHTML = level;
    }
});