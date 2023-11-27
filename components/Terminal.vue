<script setup>
import { useTerminalStore } from '#imports'

const terminalStore = useTerminalStore()

const { lines, history, historyIndex, showInput } = storeToRefs(terminalStore)

const input = ref("")

const getTerminalHistory = (order) => {
    if (historyIndex === undefined) {
        historyIndex = history.length
    }

    historyIndex += order

    if (historyIndex > history.length - 1) {
        historyIndex = history.length - 1
    }
    if (historyIndex < 0) {
        historyIndex = 0
    }

    terminalInput.value = history[historyIndex]
}

const enterInput = (value) => {
    terminalStore.addLine(value)
    input.value = ""
}

</script>

<template>
    <div class="terminal-select">
        <h3>Terminal:</h3>
        <h3 style="text-decoration: underline; cursor: pointer;">Local</h3>
    </div>
    <div class="container-terminal">
        <div ref="terminalContainer" class="container-lines">
            <h3 v-for="line in lines" v-html="line"></h3>
            <h3 v-if="showInput" class="terminal-input">~/home/niels/portfolio><input @keyup.enter="enterInput(input)"
                    @keydown.up="getTerminalHistory(-1)" @keydown.down="getTerminalHistory(1)" v-model="input" type="text">
            </h3>
        </div>
    </div>
</template>

<style scoped>
input {
    font-size: var(--font-size-4);
    color: var(--color-2);
    background: transparent;
    outline: none;
}

.container-terminal {
    overflow-y: scroll;
    scroll-behavior: smooth;
    height: 100%;
    background-color: var(--background-color-3);
    font-size: var(--font-size-3);
}

.terminal-select {
    width: 100%;
    background-color: var(--background-color-10);
    display: flex;
}

.terminal-select h3 {
    border-right: 1px;
    border-style: solid;
    border-color: var(--color-3);
    font-size: var(--font-size-4);
    padding: 8px 10px;
}

.container-lines {

    padding: 20px;
}

.terminal-input {
    padding-bottom: 20px;
}
</style>