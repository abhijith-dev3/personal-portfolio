const buttons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".project-card");
const extraProjects = document.querySelector('.extra-projects');
const showMoreBtn = document.getElementById('show-more-btn');
const fills = document.querySelectorAll(".fill");

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

fills.forEach(fill => {
    const percent = fill.getAttribute("style").match(/width:\s*(\d+)%/)[1];
    fill.style.width="0%";
    setTimeout(() => {
        fill.style.transition = "width 2s ease-in-out";
        fill.style.width = percent + "%";
    },100);
});



