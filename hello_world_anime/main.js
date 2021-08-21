$(function () {
    appInit();
    setTimeout(function () {
        $('.app').fadeIn(1000);
    }, 500);

    let i = 1500;
    $('.app').find('span').each(function () {
        i += 100;
        setTimeout(() => {
            $(this).animate({ opacity: 1 });
            $(this).animate({ opacity: 0 });
        }, i);
    });

    setTimeout(() => {
        $('.app').find('span').animate({ opacity: 1 });
    }, i + 1000);

});

function appInit() {

    const message = 'Hello World';
    const messageArray = message.split('');

    messageArray.forEach((e) => {
        $('.app').append('<span>' + e + '</span>');
    })

    const windowHeight = $(window).height() * 0.95;
    $('.app').height(windowHeight);
    $('.app').css('font-size', windowHeight / 6 + 'px');
    $('.app').css('line-height', windowHeight + 'px');

    $('.app>div').css('font-size', '100px');
    $('.app>div').css('line-height', '100px');

}



