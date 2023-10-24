const filterTtl = document.querySelector(".select-btn");
const items = document.querySelectorAll(".item");

filterTtl.addEventListener("click", () => {
    filterTtl.classList.toggle("open");
}) 

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".filter-tittle")

        if(checked && checked.length > 0) {
            btnText.innerText = `${checked.length} Selected`;
        } else {
            btnText.innerText = `${checked.length} Selected`
        }
    })
})

