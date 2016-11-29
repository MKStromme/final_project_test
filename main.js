function scrollup(x) {
    var test = document.querySelectorAll('#readmore1')[x];
    var result = getComputedStyle(test, ':before').content;
    if (result.length < 7) {
        document.getElementById("target").scrollIntoView();
    }
}
