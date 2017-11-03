(function () {
    'use strict';

    var draw = SVG('drawing').size('100%', '100%');
    var rect = draw.rect(20,20).radius(8);
    rect.animate().fill('#f03').move(100,100);
    rect.animate().move(200, 0);
    var drawNested = draw.nested();
    var rectNested = drawNested.rect(20, 20).radius(8);

    var group = draw.group();
    group.add(rect);
    group.add(rectNested);

    group.animate().move(400, 400);

    rect.linkTo(function (link) {
        link.to('https://google.com').target('_blank');
    });
})()
