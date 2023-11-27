<script setup>
import { useMainStore } from '#imports';
import { useTerminalStore } from '#imports'
import { mainDefault, userDefault, terminalLinesDefault, roleDefault, readmeDefault } from 'assets/texts'

const mainStore = useMainStore()
const terminalStore = useTerminalStore()

const { currentFile } = storeToRefs(mainStore)
const { lines, history, historyIndex, showInput } = storeToRefs(terminalStore)

const currentText = ref(mainDefault)
const containerCodeElement = ref()

onMounted(() => {
    containerCodeElement.value.scrollTo(0, containerCodeElement.value.scrollHeight)
})

const resetTerminalLines = () => {
    history.value = []
    showInput.value = false
    lines.value = ["Compiling..."]

    let count = 1
    let intervalId
    intervalId = setInterval(() => {
        if (count === 1) lines.value.push("Testing...")

        if (count <= 3) {
            lines.value.push(`Test (${count}/3)`)
            count++
            return
        }
        clearInterval(intervalId)

        lines.value.push(`Test complete!`)
        lines.value.push(`Running program...`)

        setTimeout(() => {
            lines.value = [...terminalLinesDefault]
            showInput.value = true
        }, 300)
    }, 1000)
}

watch(currentFile, (n, o) => {
    switch (currentFile.value) {
        case "Main.java":
            currentText.value = mainDefault
            break
        case "User.java":
            currentText.value = userDefault
            break
        case "Role.java":
            currentText.value = roleDefault
            break
        case "README.txt":
            currentText.value = readmeDefault
            break
    }
})

resetTerminalLines()
</script>

<template>
    <div class="container-vertical" style="flex-grow: 1;">
        <div class="container-top">
            <h3 style="font-weight: bold;">portfolio</h3>
            <Icon name="bi:chevron-compact-right" />
            <div v-if="currentFile !== 'README.txt'" style="display: flex;">
                <h3>src</h3>
                <Icon name="bi:chevron-compact-right" />
                <h3>main</h3>
                <Icon name="bi:chevron-compact-right" />
                <h3>java</h3>
                <Icon name="bi:chevron-compact-right" />
                <h3>nl.nielsvanbruggen</h3>
                <Icon name="bi:chevron-compact-right" />
            </div>
            <h3>{{ currentFile }}</h3>
            <div style="flex-grow: 1;"></div>
            <button @click="resetTerminalLines" class="run-code-button">
                <h3>Main</h3>
                <Icon name="material-symbols:play-arrow" />
            </button>

        </div>
        <div ref="containerCodeElement" class="container-code">
            <div class="code-line-numbers">
                <pre class="line-number" v-for="line, index in currentText">{{ index + 1 }}</pre>
            </div>
            <div class="code-block">
                <pre v-for="line in currentText" v-html="line"></pre>
            </div>
        </div>
    </div>
</template>

<style scoped>
pre {
    padding: 4px 10px;
    font-size: var(--font-size-3);
}

.run-code-button {
    display: flex;
    align-items: center;
    background: transparent;
    margin-right: 40px;
    border: 1px solid var(--color-3);
    cursor: pointer;
}

.run-code-button h3 {
    font-size: var(--font-size-3);
    color: var(--color-1);
    padding: 2px 6px;
}

.run-code-button svg {
    height: var(--font-size-4);
    width: var(--font-size-4);
    color: green;

}

.container-top {
    display: flex;
    align-items: center;
    color: var(--color-3);
    border: 1px solid var(--background-color-3);
    padding: 4px 8px;
}

.container-code {
    display: flex;
    background-color: var(--background-color-3);
    width: 100%;
    height: 50vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
}

.code-block {
    display: flex;
    flex-direction: column;
}

.code-line-numbers {
    color: var(--color-3);
    background-color: var(--background-color-2);
}

.line-number {
    background-color: var(--background-color-2);
    min-width: 30px;
    padding-right: 40px;
    text-align: end;
}

.reset-button {
    background-color: transparent;
    color: rgb(42, 126, 42);
    font-size: 1em;
    cursor: pointer;
}
</style>