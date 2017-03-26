'use strict';

let populateImages = ((i) => {
    const images = [
        'andres-prieto-molina-139462.jpg',
        'low-poly-texture-90-spotlight.png'
    ];
    let count = 0;
    $('.project-container').find('.project').each(function(){
        $(this).css('background-image', 'url(images/project-images/' + images[count++] + ')');
        if(count == images.length) count = 0;
    });
})();

let populateTech = ((i) => {
    const images = [
        'asp.net_.png',
        'c-sharp-tutors-online.png',
        'cpp.png',
        'css3_unofficial_shaped.png',
        'gulp-2x.png',
        'HTML5_Logo_512.png',
        'Java_programming_language_logo.svg.png',
        'js.png',
        'MSSQL-eazycorner.png',
        'opengraph-icon-200x200.png'
    ];
    let count = 0;
    $('.tech-container').find('.tech').each(function(){
        $(this).css('background-image', 'url(images/tech-images/' + images[count++] + ')');
        if(count == images.length) count = 0;
    });
})();

$('.tech').on('click', function flipEm(){
    if($(this).attr('class').indexOf('flip') === -1){
        const imageUrl = $(this).css('background-image');
        const imageRegex = /\W+$/;
        const that = this;

        $(this).addClass('flip text-hv_centered');
        $(this).prop('name',imageUrl.substring(imageUrl.lastIndexOf('/') + 1, imageUrl.length).replace(imageRegex, ''));
        $(this).css('background-image', '');
        setTimeout(function (){$(that).text('test');}, 1000);
    }

    else{
        const that = this;
        const dir = 'images/tech-images/' + $(this).prop('name');

        $(this).addClass('flip-back');
        $(this).removeClass('flip');
        $(this).text('');

        setTimeout(function (){
            $(that).removeClass('flip-back flip');
            $(that).css('background-image', 'url(' + dir + ')');
        }, 800)
    }
});  