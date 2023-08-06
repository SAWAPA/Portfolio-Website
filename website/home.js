window.addEventListener('load', function() {
    const spans = document.querySelectorAll('#home h1 span');
    let delay = 0;

    spans.forEach(span => {
        span.style.animationDelay = delay + 's';
        delay += 0.1;
    });
});
