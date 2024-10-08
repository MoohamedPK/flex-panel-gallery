const elems = document.querySelectorAll(".panel")

function toggleActive() {
    this.classList.toggle('active');
}

function toggleOpen(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle("open");
    }
}

elems.forEach((ele) => ele.addEventListener("click", toggleActive));
elems.forEach(ele => ele.addEventListener("transitionend",toggleOpen ))