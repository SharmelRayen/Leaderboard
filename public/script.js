document.getElementById('navbar-toggle').addEventListener('click', function() {
    document.getElementById('drawer').style.right = '0';
});

document.getElementById('drawer-close').addEventListener('click', function() {
    document.getElementById('drawer').style.right = '-250px';
});
