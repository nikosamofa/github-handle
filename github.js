
'use strict';



function watchForm() {
    $('#github-form').submit(event => {
        event.preventDefault();
        let candidate = $('#handle').val();
        getRepos(candidate);
        // console.log(candidate)
    });
    
};


function getRepos(candidate) {
    const url = `https://api.github.com/users/${candidate}/repos`;
    fetch(url)
        .then(response => {
            if(response.ok){
                return response.json()                
            }
            throw new Error(response.statusText)
        })
        .then(responseJson => showResults(responseJson))
        .catch(error => alert('Something went wrong, Please try again.'));
};


function showResults(responseJson) {
    $('#result-list').empty();

    for (let i = 0; i < responseJson.length; i++) {
          
        $('ul').html(
            `<li>
            <h3>Repo title: "${responseJson[i].name}"</h3>
            <p>url : "${responseJson[i].repos_url}"</p>
            </li>`)
    };
    $('#results').removeAttr('hidden');
    
};

function all() {
    console.log("The page has loaded");
    watchForm();

};

$(all);