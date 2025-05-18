$(document).ready(function () {
    $('.js-add-slide').on('click', function () {
        const $clone = $(this).clone();
        $clone.removeClass('js-add-slide');
        $clone.find('p').text('New Photo');

        $('.thumbnail-upload').prepend($clone);
    });
});
