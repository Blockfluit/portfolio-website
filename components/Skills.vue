<template>
    <div class="skills">
        <div id="skills-content" class="fade-in scale-in">
            <h1 class="titel">Vaardigheden</h1>
            <div class="container-horizontal">
                <div class="card">
                    <h1>Programeer Talen</h1>
                    <dl>
                        <dt>
                            <i><font-awesome-icon icon="fa-brands fa-java" size="xl" /></i>
                            <h2>Java</h2>
                        </dt>
                        <dd>
                            <i><font-awesome-icon icon="fa-solid fa-turn-up" /></i>
                            <h2>Spring</h2>
                        </dd>
                        <dd>
                            <i><font-awesome-icon icon="fa-solid fa-turn-up" /></i>
                            <h2>Spigot</h2>
                        </dd>
                        <dt>
                            <i><font-awesome-icon icon="fa-brands fa-js" size="xl" /></i>
                            <h2>Javascript</h2>
                        </dt>
                        <dd>
                            <i><font-awesome-icon icon="fa-solid fa-turn-up" /></i>
                            <h2>Vue</h2>
                        </dd>
                        <dd>
                            <i><font-awesome-icon icon="fa-solid fa-turn-up" /></i>
                            <h2>Nuxt</h2>
                        </dd>
                        <dt>
                            <i><font-awesome-icon icon="fa-brands fa-html5" size="xl" /></i>
                            <h2>HTML</h2>
                        </dt>
                        <dt>
                            <i><font-awesome-icon icon="fa-brands fa-css3" size="xl" /></i>
                            <h2>CSS</h2>
                        </dt>
                        <dt>
                            <i><font-awesome-icon icon="fa-solid fa-database" size="xl" /></i>
                            <h2>MySQL</h2>
                        </dt>
                    </dl>
                </div>
                <div class="card">
                    <h1>Overig</h1>
                    <dl>
                        <dt>
                            <i><font-awesome-icon icon="fa-brands fa-github" size="xl" /></i>
                            <h2>GitHub</h2>
                        </dt>
                        <dt>

                            <i><font-awesome-icon icon="fa-brands fa-ubuntu" size="xl" /></i>
                            <h2>Ubuntu Server</h2>
                        </dt>
                        <dt>
                            <i><font-awesome-icon icon="fa-solid fa-server" size="xl" /></i>
                            <h2>Nginx</h2>
                        </dt>
                        <dt>
                            <i><font-awesome-icon icon="fa-solid fa-image" size="xl" /></i>
                            <h2>Photoshop</h2>
                        </dt>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.skills {
    background: var(--color-5);
    color: var(--color-1);
    font-family: 'Space Mono', monospace;
    box-shadow: inset 0px -25px 6px -24px var(--color-1);
    padding: 8vh 0;
    width: 100vw;
}

.container-horizontal {
    justify-content: space-evenly;
}

.titel {
    text-align: center;
    margin-bottom: 8vh;
}

h1 {
    font-size: var(--font-size-1);
}

h2 {
    font-size: var(--font-size-2);
    font-weight: 100;
}

dt,
dd {
    display: flex;
    flex-direction: row;
    align-items: center;
}

dl {
    margin-top: 10px;
}

dl i {
    margin-right: 10px;
}

dd i {
    rotate: 90deg;
}

dd {
    margin-left: 40px;
}

@media only screen and (max-width: 480px) {
    .container-horizontal {
        flex-direction: column;
    }

    .card {
        margin: 5vw;
    }
}
</style>