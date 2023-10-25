const filterTtl = document.querySelector(".select-btn");
const items = document.querySelectorAll(".item");

filterTtl.addEventListener("click", () => {
    filterTtl.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () => {
        // Menghapus kelas "checked" dari semua item sebelumnya
        items.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove("checked");
            }
        });
        item.classList.toggle("checked");
    });
});


// FILTERMAP



const filterLok = document.querySelectorAll(".card");
const selectedLok = document.querySelectorAll(".cardimg");

const filterLokasi = (e) => {

    document.querySelectorAll(".btnaktif").forEach(btn => {
        btn.classList.remove("btnaktif");
    });

    e.target.classList.add("btnaktif");

    selectedLok.forEach(cardimg => {
        cardimg.classList.add("hide");

        if (e.target.dataset.name === "all" || cardimg.getAttribute("data-name2") === e.target.dataset.name) {
            cardimg.classList.remove("hide");
        }
    });
};

filterLok.forEach((card) => {
    card.addEventListener("click", filterLokasi);
});







// FILTERIMG

const filterImg  = document.querySelectorAll(".item");
const selectedImg = document.querySelectorAll(".cardimg");

const filterImages = (e) => {
    document.querySelector(".itemaktif").classList.remove("itemaktif");
    e.target.classList.add("itemaktif")
    
    selectedImg.forEach(cardimg => {
    cardimg.classList.add("hide");

    if (e.target.dataset.name === "all" || cardimg.getAttribute("data-name1") === e.target.dataset.name) {
        cardimg.classList.remove("hide");
    }
});
};

filterImg.forEach((item) => {
    item.addEventListener("click", filterImages);
});


