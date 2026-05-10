$('.menu-icon').on('click', scrollDisable);
$('.close-button').on('click', scrollEnable);

var $body = $('body'),
    scrollDisabled = false,
    scrollTop;

function scrollDisable() {
    if (scrollDisabled) {
        return;
    }

    scrollTop = $(window).scrollTop();

    $body.addClass('scrolDisabled')
        .css({
        top: -1 * scrollTop
    });

    scrollDisabled = true;
}

function scrollEnable() {
    if (!scrollDisabled) {
        return;
    }

    $body.removeClass('scrolDisabled');
    $(window).scrollTop(scrollTop);

    scrollDisabled = false;
}
