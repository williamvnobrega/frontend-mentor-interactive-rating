$(".btn-score").on("click", function(){
    $(".btn-score").removeClass("active");
    $(this).addClass("active");
})

var ratingButtons = document.getElementsByClassName("btn-score");
for (var i = 0; i < ratingButtons.length; i++){
    ratingButtons[i].addEventListener("click", function(){
        for(var j = 0; j<ratingButtons.length;j++){
            ratingButtons[j].classList.remove("active");
        }
        this.classList.add("active");
    })
}

document.getElementById("submitButton").addEventListener("click", function(){
    let selectedRating = document.querySelector(".btn-score.active");
    if(selectedRating){
        let rating = selectedRating.value;
        window.location.assign(`thank-you.html?rating=${rating}`);
        
    }
})