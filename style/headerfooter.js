class CustomHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <a href="index.html" class="name">DAVID J TANG</a>
            <ul>
                <li><a href="index.html#portfolio">Portfolio</a></li>
                <li><a href="index.html#about">About</a></li>
                <li><a href="https://www.linkedin.com/in/davidtangint/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="mailto: davidtang.int@gmail.com"><i class="fa-regular fa-envelope"></i></a></li>
            </ul>
        </nav>
        `
    }
}

class CustomWorkHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <a href="../index.html" class="name">DAVID J TANG</a>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="../index.html#about">About</a></li>
                <li><a href="https://www.linkedin.com/in/davidtangint/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="mailto: davidtang.int@gmail.com"><i class="fa-regular fa-envelope"></i></a></li>
            </ul>
        </nav>
        `
    }
}

class CustomFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <div id="copyright">
            <div class="container">
                <p>© 2023 - 2024 | Developed by David J. Tang | Last Updated 2023/12/31</p>
            </div>
        </div>
        `
    }
}

customElements.define('custom-header', CustomHeader)
customElements.define('custom-work-header', CustomWorkHeader)
customElements.define('custom-footer', CustomFooter)