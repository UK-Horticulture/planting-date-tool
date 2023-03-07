var cropObject = {
    "Spinach": {
        "Space": ["Spring", "Fall"],
        "Cultivar2": ["Fall Only"]
    },
    "Kale": {
        "Dinosaur": ["Spring", "Fall"],
    }
}
window.onload = function () {
    var cropSel = document.getElementById("cropSel"),
        cultivarSel = document.getElementById("cultivarSel"),
        seasonSel = document.getElementById("seasonSel");
    for (var crop in cropObject) {
        cropSel.options[cropSel.options.length] = new Option(crop, crop);
    }
    cropSel.onchange = function () {
        cultivarSel.length = 1; // remove all options bar first
        seasonSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) {
          cultivarSel.options[0].text = "Please select crop first"
          seasonSel.options[0].text = "Please select cultivar first"
          return; // done
        }
        cultivarSel.options[0].text = "Please select cultivar"
        for (var cultivar in cropObject[this.value]) {
            cultivarSel.options[cultivarSel.options.length] = new Option(cultivar, cultivar);
        }
        if (cultivarSel.options.length==2) {
          cultivarSel.selectedIndex=1;
          cultivarSel.onchange();
        }

    }
    cropSel.onchange(); // reset in case page is reloaded
    cultivarSel.onchange = function () {
        seasonSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) {
          seasonSel.options[0].text = "Please select cultivar first"
          return; // done
        }
        seasonSel.options[0].text = "Please select season"

        var cities = cropObject[cropSel.value][this.value];
        for (var i = 0; i < cities.length; i++) {
            seasonSel.options[seasonSel.options.length] = new Option(cities[i], cities[i]);
        }
        if (seasonSel.options.length==2) {
          seasonSel.selectedIndex=1;
          seasonSel.onchange();
        }

    }
}
