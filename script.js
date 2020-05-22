// TODO: add code here
function GetSortOrder(prop) {    
    return function(a, b) {    
        if (b[prop] > a[prop]) {    
            return 1;    
        } else if (b[prop] < a[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}   

function init (){

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            console.log(json);
            let div = document.getElementById("container");
            let header = document.getElementById("header");
            header.innerHTML += `: ${json.length}`;
            json.sort(GetSortOrder("hoursInSpace"));
            for (let i = 0; i < json.length; i++){
                astronaut = json[i];
                div.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                <li>Active: ${astronaut.active ? '<span style="color: green">true</span>' : '<span style="color: red">false</span>'}</li>
                                <li>Skills: ${astronaut.skills.join(', ')}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="images/${astronaut.picture}>"
                    </div>
                `;
            }
        })
    });



}
window.onload = init;