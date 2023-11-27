<script setup>


</script>

<template>
    <div class="container">
        <div class="container-horizontal" style="height: 100%;">
            <LeftSidebar />
            <div class="container-vertical" style="width: 100%;">
                <div class="container-horizontal">
                    <Explorer />
                    <CodeBlock />
                </div>
                <Terminal />
            </div>
        </div>
        <Footer />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap');

:root {
    --color-1: rgb(214, 208, 208);
    --color-2: rgb(162, 121, 121);
    --color-3: rgb(109, 109, 109);
    --color-4: rgb(109, 83, 83);
    --background-color-1: rgb(50, 50, 50);
    --background-color-2: rgb(45, 45, 45);
    --background-color-3: rgb(40, 40, 40);
    --background-color-4: rgb(35, 35, 35);
    --background-color-10: rgb(35, 35, 45);
    --font-size-1: 14px;
    --font-size-2: 18px;
    --font-size-3: 22px;
    --font-size-4: 24px;
    --font-size-5: 26px;
    --scrollbar-width: 10px;
}

* {
    border: 0;
    margin: 0;
    padding: 0;
    font-family: 'Anonymous Pro', monospace;
    font-weight: 300;
    box-sizing: border-box;
}

body {
    background-color: var(--background-color-1);
    color: var(--color-1);
    overflow-x: hidden;
    overflow-y: hidden;

}

a {
    cursor: pointer;
    text-decoration: underline;
    color: var(--color-2);
}

a:hover {
    color: var(--color-4);
}

.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    /* max-height: calc(100vh - 2px); */
    width: 100vw;
}

.container-horizontal {
    display: flex;
    flex-direction: row;
}

.container-vertical {
    display: flex;
    flex-direction: column;
}

::-webkit-scrollbar {
    width: var(--scrollbar-width);
}

::-webkit-scrollbar-thumb {
    background-color: var(--color-2);
}

@media only screen and (max-width: 992px) {}

@media only screen and (max-width: 600px) {}
</style>