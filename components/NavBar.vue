<template>
    <div id="navbar">
        <nav class="fade-in">
            <a href="#about">over mij</a>
            <a href="#skills">vaardigheden</a>
        </nav>
    </div>
</template>

<style scoped>
#navbar {
    z-index: 9999;
    position: fixed;
    width: 100vw;
}

nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 30px;
}

a {
    background-color: transparent;
    font-size: 16px;
    color: var(--color-2);
    font-family: 'Major Mono Display', monospace;
    margin: 0 20px 0 20px;
    text-decoration: none;
    font-weight: bold;
}

a:hover {
    cursor: pointer;
    transition-duration: 0.5s;
    color: var(--color-3) !important;
}

.fade-in {
    -webkit-animation: fade-in 4s both;
    animation: fade-in 4s both;
}
</style>
