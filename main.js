function scrollup(x) {
    var test = document.querySelectorAll('#readmore-label')[x];
    var result = getComputedStyle(test, ':after').content;
    if (result.length < 7) {
        console.log(result.length);
        document.getElementById("target").scrollIntoView();
    }
}
