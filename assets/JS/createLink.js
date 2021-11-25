const Link = function () {
    this.element = 'a';
    this.classe = 'square';

    this.getNewElement = function (imgLink, title) {
        let creaDiv = document.createElement(this.element);
        creaDiv.setAttribute('class', this.classe);
        creaDiv.setAttribute('href', "#");
        creaDiv.setAttribute('title', title);
        creaDiv.style.backgroundImage = "url('"+ imgLink +"')";

        creaDiv.addEventListener('mouseenter', function () {
            this.style.transform = 'scale('+ 1.5 +')';
            this.style.margin = '2rem';

            this.previousElementSibling.style.transform = 'scale('+ 1.25 +')';
            this.previousElementSibling.style.margin = "1.25rem";

            this.nextElementSibling.style.transform = 'scale('+ 1.25 +')';
            this.nextElementSibling.style.margin = "1.25rem";
        })

        creaDiv.addEventListener('mouseleave', function () {
            this.style.transform = 'scale('+ 1 +')';
            this.style.margin = '0.5rem';

            this.previousElementSibling.style.transform = 'scale('+ 1 +')';
            this.previousElementSibling.style.margin = '0.5rem';

            this.nextElementSibling.style.transform = 'scale('+ 1 +')';
            this.nextElementSibling.style.margin = '0.5rem';
        })

        return creaDiv;
    }
}

export {Link};