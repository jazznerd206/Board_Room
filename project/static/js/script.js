function initate(style) {
    var theme = document.getElementsByTagName('link')[0];
    console.log(theme.href)
    if (theme.href === 'http://localhost:8000/static/css/bootstrap.' + style + '.min.css') { 
        console.log(true, style)
    } else { 
        theme.setAttribute('href', 'http://localhost:8000/static/css/bootstrap.' + style + '.min.css'); 
        console.log(style)
    } 
}