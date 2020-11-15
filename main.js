"use strict";

var dropdown = document.getElementById('dropdownMenu');

var playlistSelectionDivs = document.getElementsByClassName('signName');

for (var i = 0; i < dropdown.options.length; i++) {

  var optionName = dropdown.options[i].value;
  playlistSelectionDivs[i].id = optionName;
  playlistSelectionDivs[i].innerHTML = playlistSelectionDivs[i].innerHTML;

}


dropdown.addEventListener('change', function() {
  var selectedSection = document.getElementById(dropdown.value);
  selectedSection.scrollIntoView({behavior: "smooth"});
});
