<script setup>
const showNav = ref(true)
const showTopPageButton = ref(false)

onBeforeMount(() => {
    if (process.client) {
        window.onscroll = handleScroll
    }
})

onMounted(() => {
    window.scrollTo(0, 0)
})

onBeforeUnmount(() => {
    if (process.client) {
        window.onscroll = {}
    }
})

const handleScroll = () => {
    if (process.client) {
        const home = document.getElementById("home-content")
        const navbar = document.getElementById("navbar")
        const backgroundText = document.getElementById("background-text")
        const about = document.getElementById("about-content")
        const skills = document.getElementById("skills-content")

        let height = window.innerHeight

        about.getBoundingClientRect().top - height < 0 ?
            about.style.animation = "" :
            about.style.animation = "none"

        skills.getBoundingClientRect().top - height < 0 ?
            skills.style.animation = "" :
            skills.style.animation = "none"

        home.style.rotate = `${360 * ((height - window.scrollY) / height / 4) - 90}deg`

        let opacity = 1 - window.scrollY / height * 1.5
        navbar.style.opacity = opacity

        let offset = window.scrollY / height * -400 + 500
        backgroundText.style.top = offset + "px"

        opacity < 0 ? showNav.value = false : showNav.value = true
        scrollY < 100 ? showTopPageButton.value = false : showTopPageButton.value = true
    }
}
</script>

<template>
    <div>
        <div id="background-text">NVB</div>
        <TopPageButton v-show="showTopPageButton" />
        <NavBar v-show="showNav" />
        <Home id="home" />
        <About id="about" />
        <Skills id="skills" />
        <BottomPage />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Space+Mono&display=swap');

:root {
    --color-1: rgb(20, 20, 20);
    --color-2: rgb(254, 250, 255);
    --color-3: rgb(162, 121, 121);
    --color-4: rgb(254, 240, 255);
    --color-5: rgb(250, 246, 251);
    --gradient-1: linear-gradient(140deg, rgba(20, 20, 20, 1) 0%, rgba(30, 30, 60, 1) 100%);
    --font-size-1: 30px;
    --font-size-2: 22px;
}

* {
    border: 0;
    margin: 0;
    padding: 0;
}

html {
    z-index: -10;
    scroll-behavior: smooth;
    overflow-x: hidden;
    background-color: var(--color-2);
}

h1,
h2,
h3,
p {
    cursor: default;
}

.container-horizontal {
    display: flex;
    flex-direction: row;
}

.container-vertical {
    display: flex;
    flex-direction: column;
}

.card {
    padding: 10px 14px;
    border-radius: 15px;
    box-shadow: 0px 0px 16px -14px var(--color-1);
}

.fade-in {
    -webkit-animation: fade-in 1s both;
    animation: fade-in 1s both;
}

.scale-in {
    -webkit-animation: scale-in 1s both;
    animation: scale-in 1s both;
}

#background-text {
    z-index: -1;
    position: fixed;
    font-family: 'Major Mono Display', monospace;
    color: var(--color-5);
    left: -6vw;
    font-size: 54vw;
    rotate: 30deg;
}

::-webkit-scrollbar {
    width: 7px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: var(--color-3);
}

@-webkit-keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@-webkit-keyframes scale-in {
    0% {
        scale: 0.9;
    }

    100% {
        scale: 1;
    }
}

@keyframes scale-in {
    0% {
        scale: 0.9;
    }

    100% {
        scale: 1;
    }
}
</style>