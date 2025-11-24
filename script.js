const buttons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".project-card");
const extraProjects = document.querySelector('.extra-projects');
const showMoreBtn = document.getElementById('show-more-btn');

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

        //hide extra projects when filter changes
         extraProjects.classList.add('hide');
        showMoreBtn.textContent = "Show More";
    });
});

showMoreBtn.addEventListener('click', () => {
    if(extraProjects.classList.contains('hide')){
        extraProjects.classList.remove('hide');
        showMoreBtn.textContent = "Show Less";
    } else {
        extraProjects.classList.add('hide');
        showMoreBtn.textContent = "Show More";
    }
});

