<template>
    <div class="home">
        <div id="home-content" class="fade-in">
            <div class="signature">
                <div class="container-vertical">
                    <a href="https://github.com/Blockfluit/">
                        <font-awesome-icon icon="fa-brands fa-github" size="2xl" style="color:var(--color-2)" />
                    </a>
                    <a href="mailto:nwbvanbruggen@outlook.com">
                        <font-awesome-icon icon="fa-regular fa-envelope" size="2xl" style="color:var(--color-2)" />
                    </a>
                    <div class="copyright">
                        <i><font-awesome-icon icon="fa-regular fa-copyright" size="l"
                                style="color:var(--color-2); rotate: 90deg" /></i>
                        <h3 style="writing-mode: vertical-rl;">2023</h3>
                    </div>
                </div>
                <h2 class="tracking-in-expand">Niels Van Bruggen</h2>
                <div class="container-vertical">
                    <h1>N</h1>
                    <h1>V</h1>
                    <h1>B</h1>
                </div>
                <h3 class="tracking-in-expand">&ltDeveloper /&gt</h3>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home {
    z-index: 1;
    color: var(--color-2);
    overflow: hidden;
    box-shadow: inset 0px 0px 100px -30px rgb(0, 0, 0);
    background: var(--gradient-1)
}

.signature {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-family: 'Major Mono Display', monospace;
    height: 100vh;
}

h1,
h2 {

    padding: 20px;
}

h1 {
    font-size: 150px;
}

h2 {
    font-size: 50px;
    writing-mode: vertical-rl;
    white-space: nowrap;
}

h3 {
    font-size: 25px;
    white-space: nowrap;
}

.signature svg {
    padding: 10px 20px;
}

.signature a svg:hover {
    transition-duration: 0.5s;
    color: var(--color-3) !important;
}

.copyright {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: default;
}

.fade-in {
    -webkit-animation: fade-in 4s both;
    animation: fade-in 4s both;
}

.tracking-in-expand {
    -webkit-animation: tracking-in-expand 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    animation: tracking-in-expand 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

@-webkit-keyframes tracking-in-expand {
    0% {
        letter-spacing: -0.5em;
    }
}

@keyframes tracking-in-expand {
    0% {
        letter-spacing: -0.5em;
    }
}

@media only screen and (max-width: 480px) {

    /* h1,
    h2 {

        padding: 6px;
    } */

    /* .signature svg {
        padding: 8px 16px;
    } */

    /* .signature h1 {
        font-size: 150px;
    }

    .signature h2 {
        font-size: 30px;
    }

    .signature h3 {
        font-size: 18px;
    } */
}
</style>