function toggleLanguage () {
    var path = location.pathname;
    console.log(path);
    if (path.indexOf('/zh') !== -1) {
        path = path.replace(/\/zh[\/$\s]/i, '/en/');
    }
    if (path.indexOf('/en') !== -1) {
        path = path.replace(/\/en[\/$\s]/i, '/zh/');
    }
    console.log('after: ' + path);    
}