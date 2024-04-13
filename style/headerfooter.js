class CustomHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <a href="index.html" class="name">DAVID TANG</a>
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
            <a href="../index.html" class="name">DAVID TANG</a>
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
                <p>Contents of this site are © Copyright 2023-2024 David Tang. All rights reserved.
                <br>
                <a href="https://github.com/davidtangint/davidtangint.github.io/tree/main" target="_blank">Source Code</a>
                 is available under the 
                 <a href="https://opensource.org/license/mit/" target="_blank">MIT License</a> |
                Last Updated 2024/01/01</p>
            </div>
        </div>
        `
    }
}

customElements.define('custom-header', CustomHeader)
customElements.define('custom-work-header', CustomWorkHeader)
customElements.define('custom-footer', CustomFooter)