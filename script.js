

function changeImages(img1, img2, img3) {
    document.getElementById('image1').src = img1;
    document.getElementById('image2').src = img2;
    document.getElementById('image3').src = img3;
}

function highlightCard(card) {
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    card.style.backgroundColor = "#e9e9e9";
}

function resetCard(card) {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "none";
    card.style.backgroundColor = "#f9f9f9";
}
