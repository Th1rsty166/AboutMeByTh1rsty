
window.onload = function() {
    var bgMusic = document.getElementById('bg-music');
    bgMusic.play();
};

document.getElementById('hideButton').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebarid');
    sidebar.classList.toggle('hidden');
    var mainimg = document.getElementById('main-img');
    mainimg.classList.toggle('hidden');

});

document.getElementById('NextPage').addEventListener('click', function() {
    window.location.href = 'https://th1rsty166.github.io/portfolio/';
});

