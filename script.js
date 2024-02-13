


function Onclick(buttonId) {
    var clickedButton = document.getElementById(buttonId);
    var otherButtonId = buttonId === 'btnjobfeed' ? 'btnrecntsearches' : 'btnjobfeed';
    var otherButton = document.getElementById(otherButtonId);
    
   
    clickedButton.style.fontWeight = 'bold';

    clickedButton.style.borderBottom ='2px solid blue';

  
    
    
    otherButton.style.fontWeight = 'normal';
    otherButton.style.borderBottom =0;

    if(buttonId== "btnrecntsearches"){
        document.getElementById("recentsearch").style.display='flex';
        document.getElementById("job-tab").style.display='none';
    }
    else{
         document.getElementById("recentsearch").style.display='none';
         document.getElementById("job-tab").style.display='flex';
    }

}

window.addEventListener('DOMContentLoaded', function() {
    var employersLink = document.getElementById('employersLink');
    if (window.innerWidth <= 1000) {
        employersLink.innerText = 'Employeers';
    }
});

function borderClick(element) {
    element.style.border = "1px solid blue";
}

function inputCheck(){
    var jobsearch=document.getElementById("btnjob").value;
    var jobloc=document.getElementById("btnloc").value;

    if(jobsearch === "" & jobloc === "")
    {
        document.getElementById("errlabel").style.display="block";
    }else{
        document.getElementById("errlabel").style.display="none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var searchbox = document.getElementById("searchbox");
    
    var input = searchbox.querySelector("input");

    input.addEventListener("focus", function() {
        searchbox.classList.add("focused");
    });

    input.addEventListener("blur", function() {
        searchbox.classList.remove("focused");
    });

    var locbox = document.getElementById("locationbox");
    
    var inputloc = locbox.querySelector("input");

    inputloc.addEventListener("focus", function() {
        locbox.classList.add("focused");
    });

    inputloc.addEventListener("blur", function() {
        locbox.classList.remove("focused");
    }); 
});


   
