const buttons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".project-card");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        cards.forEach(card => {
            if(filter === "all"){
                card.classList.remove("hide");
            }else{
                card.classList.toggle("hide", !card.classList.contains(filter));
            }
        });
    });
});