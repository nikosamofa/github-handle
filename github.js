
'use strict';


//this function fetches three dog photos when called 
function watchForm() {
    $('.js-dog-form').submit(event => {
        event.preventDefault();

        //this is the user input
        let submissions = $('.number-of-dogs').val();
        if (submissions < 3 || submissions == '' || submissions == ' ') {
            submissions = 3;
        };

        //this make the image section visible        
        getTheDog(submissions)
    });
};


function getTheDog(submissions) {
    const url = `https://dog.ceo/api/breeds/image/random/${submissions}`;
    fetch(url)
        .then(response => response.json())
        .then(getDog => displayResults(getDog))

        .catch(error => alert('something went wrong, please try again'));
};


function displayResults(getDog) {
    $('.dog-images').html('');
    for (let i = 0; i < getDog.message.length; i++) {
        $('.dog-images').append(`<li><img src="${getDog.message[i]}" alt="picutre of a Dog" class="dogimages"/></li>`);
    };
    $('.hidden-div').removeAttr('hidden')
    console.log(getDog)
};


function all() {
    console.log("The page has loaded")
    watchForm();

};

$(all);