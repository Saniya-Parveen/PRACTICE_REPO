function changeColorandSize() {
    var headingRef = document.querySelector("#title");
    var dropDown = document.querySelector("#colordropdown");
    var sizeRef = document.querySelector("#fontsize")
    headingRef.style.color = dropDown.value;
    headingRef.style.fontSize = sizeRef.value;
     

}