let map = L.map('map').setView([34.65155479856008, 134.99156324241], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function showInfo(title, text, image) {
    document.getElementById('note').innerHTML =
        '<h1>' + title + '</h1>' +
        '<img src="' + image + '" class="spot-image">' +
        '<p>' + text + '</p>';
}

L.marker([34.648986495835466, 134.99237884077309]).addTo(map)
    .on('click', function() {
        showInfo('明石駅', 'JRと山陽電車が利用でき、周辺には買い物や食事ができる場所がある。',
        'images/akasieki.jpg'
        );
    });

L.marker([34.64706026861358, 134.9923317485189]).addTo(map)
    .on('click', function() {
        showInfo(
            '魚の棚商店街',
            '明石焼きや新鮮な魚など、明石の名物を楽しめる。',
            'images/uo-no-tana.jpg'
        );
    });

L.marker([34.64533743872339, 134.990224767897]).addTo(map)
    .on('click', function() {
        showInfo('明石港', '海の景色や船を楽しめる。' );
    });

L.marker([34.64950251138752, 135.00152261217067]).addTo(map)
    .on('click', function() {
        showInfo('明石市立天文科学館', 'プラネタリウムや宇宙について学べる。');
    });

L.marker([34.65194244101035, 134.99526866858957]).addTo(map)
    .on('click', function() {
        showInfo('明石市立文化博物館', '明石の歴史や文化を知ることができる。');
    });

L.marker([34.65262526995661, 134.99100936613553]).addTo(map)
    .on('click', function() {
        showInfo('明石城跡', '歴史を感じながら散策できる。');
    });
L.marker([34.64332164039006, 135.00505878148024]).addTo(map)
    .on('click', function(){
        showInfo('大蔵海岸公園。海や明石海峡大橋の景色を楽しめる。');
    });