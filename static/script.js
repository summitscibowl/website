if (document.URL.substring(0, 35) === 'https://summitscibowl.herokuapp.com') {
    window.location.href = 'https://www.summitscibowl.com' + document.URL.substring(35);
}

if (document.URL.substring(0, 39) === 'https://www.summitscibowl.herokuapp.com') {
    window.location.href = 'https://www.summitscibowl.com' + document.URL.substring(39);
}

if (document.URL.substring(0, 7) === 'http://') {
    window.location.href = 'https://' + document.URL.substring(7);
}