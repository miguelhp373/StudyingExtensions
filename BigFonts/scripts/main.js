window.onload = function () {
  var elements = document.getElementsByTagName("h1")[0];

  var Getstyles = window.getComputedStyle(elements, null);
  var GetFontSize = Getstyles.getPropertyValue("font-size");
  GetFontSize = GetFontSize.replace(/[a-z]/gi, "");

  document.getElementById("value_font").innerHTML = GetFontSize;
};

document.getElementById("btn_sum").addEventListener("click", function () {
  var valueString = document.getElementById("value_font").innerHTML;

  if (parseInt(valueString) > 0) {
    newValue = parseInt(valueString);
    newValue = newValue + 1;
    document.getElementById("value_font").innerHTML = newValue;
  }
});

document.getElementById("btn_minus").addEventListener("click", function () {
  var valueString = document.getElementById("value_font").innerHTML;
  if (parseInt(valueString) > 0) {
    newValue = parseInt(valueString);
    newValue = newValue - 1;
    document.getElementById("value_font").innerHTML = newValue;
  }
});
