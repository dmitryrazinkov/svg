(function () {
    'use strict';

    var draw = SVG('drawing').size('100%', '100%');
    //circle
    var circle = draw.circle(400);
    circle.move(250, 250)

    var rect = draw.rect(20,20).radius(8);
    rect.fill('#f03').move(100,100);
    rect.move(200, 0);
    var drawNested = draw.nested();
    var rectNested = drawNested.rect(20, 20).radius(8).fill('#f03');

    var group = draw.group();
    group.add(rect);
    group.add(rectNested);

    group.move(400, 400);
    group.animate().move(300, 400);
    group.animate().move(400, 400);
    group.animate().move(350, 400);

    rect.linkTo(function (link) {
        link.to('https://google.com').target('_blank');
    });

})();
