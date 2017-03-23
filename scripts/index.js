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