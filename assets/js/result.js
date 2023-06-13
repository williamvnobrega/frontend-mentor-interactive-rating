function getRatingFromURL(){
    const urlParams = new URLSearchParams(window.location.search);
    const rating = urlParams.get('rating');
    return rating ? parseInt(rating) : 0;
}

function displayRating(){
    const ratingValueElement = document.getElementById("rating-result");
    const rating = getRatingFromURL();
    ratingValueElement.textContent = `You selected ${rating} out of 5`;
}

displayRating();