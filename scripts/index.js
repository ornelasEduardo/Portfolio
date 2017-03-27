'use strict';

const descObj = [
    {
        'name': 'asp.jpg',
        'summary': 'ASP.NET is an open source web framework for building modern web apps and services with .NET. ASP.NET creates websites based on HTML5, CSS, and JavaScript that are simple, fast, and can scale to millions of users.',
        'years': '1 year'
    },
    {
        'name': 'c-sharp-tutors-online.jpg',
        'summary': 'A programming language that is designed for building a variety of applications that run on the .NET Framework. C# is simple, powerful, type-safe, and object-oriented.',
        'years': '1 year'
    },
    {
        'name': 'cpp.jpg',
        'summary': 'Is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.',
        'years': '2 year'
    },
    {
        'name': 'css3_unofficial_shaped.jpg',
        'summary': 'Is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document',
        'years': '1 year'
    },
    {
        'name': 'gulp-2x.jpg',
        'summary': 'Gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.',
        'years': '1 year'
    },
    {
        'name': 'HTML5_Logo_512.jpg',
        'summary': 'Is a markup language used for structuring and presenting content on the World Wide Web.',
        'years': '1 year'
    },
    {
        'name': 'Java_programming_language_logo.jpg',
        'summary': 'Is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.',
        'years': '4 years'
    },
    {
        'name': 'js.jpg',
        'summary': 'Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production; the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins.',
        'years': '1 year'
    },
    {
        'name': 'MSSQL-eazycorner.jpg',
        'summary': 'Is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS).',
        'years': '1 year'
    },
    {
        'name': 'opengraph-icon-200x200.jpg',
        'summary': 'Is a widely used high-level programming language for general-purpose programming, created by Guido van Rossum and first released in 1991.',
        'years': '1 year'
    }
]

let populateImages = ((i) => {
    const images = [
        'andres-prieto-molina-139462.jpg',
        'low-poly-texture-90-spotlight.jpg'
    ];
    let count = 0;
    $('.project-container').find('.project').each(function(){
        $(this).css('background-image', 'url(images/project-images/' + images[count++] + ')');
        if(count == images.length) count = 0;
    });
})();

let populateTech = ((i) => {
    const images = [
        'asp.jpg',
        'c-sharp-tutors-online.jpg',
        'cpp.jpg',
        'css3_unofficial_shaped.jpg',
        'gulp-2x.jpg',
        'HTML5_Logo_512.jpg',
        'Java_programming_language_logo.jpg',
        'js.jpg',
        'MSSQL-eazycorner.jpg',
        'opengraph-icon-200x200.jpg'
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
        
        setTimeout(function (){$(that).css('background-image', '');}, 500);
        setTimeout(function (){  
            for(let i = 0; i < descObj.length; i++){
                if(descObj[i].name === $(that).prop('name')){
                    $(that).text(descObj[i].summary);
                }
            }
        }, 1000);
    }

    else{
        const that = this;
        const dir = 'images/tech-images/' + $(this).prop('name');

        $(this).addClass('flip-back');
        $(that).text('');

        setTimeout(function (){
            $(that).removeClass('flip-back flip text-hv_centered');
            $(that).css('background-image', 'url(' + dir + ')');
        }, 1000)
    }
});

$('.send-btn').on('click', function sendEmail(){
    const that = this;

    setTimeout(function(){$(that).parent('.card').addClass('send-email')}, 100);
    setTimeout(function (){
        $('.card').find('input, textarea').each(function (){
            $(this).val('');
        });
    }, 800);
    setTimeout(function(){
        $('.card').removeClass('send-email');
    }, 1800);

});