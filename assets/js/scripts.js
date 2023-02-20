//Scroll Suave
let navBtn = $('.nav-item');

let bannerSection = $('#banner');
let aboutSection = $('#sobre');
let techSection = $('#tecnologias');
let projectSection = $('#projetos');

let scrollTo = '';

$(navBtn).click(function() {
    let btnId = $(this).attr('id');

    console.log(btnId);

    if(btnId == 'sobre-menu') {
        scrollTo = aboutSection;
    } else if(btnId == 'tecnologias-menu') {
        scrollTo = techSection;
    } else if(btnId == 'projetos-menu') {
        scrollTo = projectSection;
    } else {
        scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);

});

//Menu Mobile
function gfgMenu() {
    const GFG = document.querySelector('.links');

    if (GFG.style.display === "none") {
        GFG.style.display = "block";
    }
    else {
        GFG.style.display = "none";
    }
}