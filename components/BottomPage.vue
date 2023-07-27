<template>
    <footer>
        <div class="container-horizontal icons">
            <a href="https://github.com/Blockfluit/">
                <font-awesome-icon icon="fa-brands fa-github" size="2xl" style="color:var(--color-2)" />
            </a>
            <a href="mailto:nwbvanbruggen@outlook.com">
                <font-awesome-icon icon="fa-regular fa-envelope" size="2xl" style="color:var(--color-2)" />
            </a>
        </div>
        <!-- <div class="container-horizontal links">
            <a href="#home">
                <h1>home</h1>
            </a>
            <a href="#about">
                <h1>over mij</h1>
            </a>
            <a href="#skills">
                <h1>vaardigheden</h1>
            </a>
        </div> -->
        <div class="container-horizontal copyright">
            <i><font-awesome-icon icon="fa-regular fa-copyright" style="color:var(--color-2)" /></i>
            <h2>2023 - Niels van Bruggen</h2>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background: var(--gradient-1);
    color: var(--color-2);
    font-family: 'Major Mono Display', monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    width: 100vw;
}

footer a {
    color: var(--color-2);
    text-decoration: none;
}

footer h1 {
    font-size: 22px;
}

footer h2 {
    font-weight: 500;
    cursor: default;
    font-size: 16px;
}

i {
    margin-right: 5px;
}

a:hover,
.icons svg:hover {
    transition-duration: 0.5s;
    color: var(--color-3) !important;
}

.copyright {
    margin-top: 10px;
    align-items: center;
}

.copyright a h2 {
    font-weight: 50;
}

.icons a {
    margin: 0 7px 0 7px;
}

.links a {
    margin: 0 20px 0 20px;
}

.links {
    margin: 10px 0 25px 0;
}
</style>