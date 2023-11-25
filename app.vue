<script setup>
const terminalInput = ref("")
const showInput = ref(true)
const terminalContainer = ref()
const terminalLinesDefault = [
    `${new Date().toLocaleTimeString()} [DatabaseConnection] DEBUG nl.nielsvanbruggen.portfolio - Succesfully fetched user from database!`,
    "Name: <span style='color: var(--color-2)'>Niels van Bruggen</span>",
    "Role: <span style='color: var(--color-2)'>Software Engineer</span>",
    "Nationality: <span style='color: var(--color-2)'>Netherlands</span>",
    "Email: <a href='mailto:nwbvanbruggen@outlook.com'>nwbvanbruggen@outlook.com</a>",
    "GitHub: <a href='https://github.com/Blockfluit'>Blockfluit</a>",
    "&nbsp;",
    "Process finished with exit code 0"
]
const terminalLines = ref([...terminalLinesDefault])
let terminalHistory = []
let terminalHistoryIndex

const resetTerminalLines = async () => {
    terminalHistory = []
    showInput.value = false
    terminalLines.value = ["Compiling..."]

    let count = 1
    let intervalId
    intervalId = setInterval(() => {
        if (count === 1) terminalLines.value.push("Testing...")

        if (count <= 3) {
            terminalLines.value.push(`Test (${count}/3)`)
            count++
            return
        }
        clearInterval(intervalId)

        terminalLines.value.push(`Test complete!`)
        terminalLines.value.push(`Running program...`)

        setTimeout(() => {
            terminalLines.value = [...terminalLinesDefault]
            showInput.value = true
        }, 300)
    }, 1000)
}

const addTerminalLine = () => {
    if (terminalInput.value.trim() !== "") terminalHistory.push(terminalInput.value)

    if (terminalInput.value.trim().startsWith("echo")) {
        const input = terminalInput.value.split(" ")[1] ?? ""
        terminalLines.value.push(input === "" ? "&nbsp;" : input)
        terminalInput.value = ""
        return
    }

    if (terminalInput.value.trim().startsWith("cd")) {
        terminalLines.value.push("permission denied")
        terminalInput.value = ""
        return
    }

    switch (terminalInput.value) {
        case "help":
            terminalLines.value.push("help - shows this menu")
            terminalLines.value.push("clear - clears terminal")
            terminalLines.value.push("echo - echoes provided text in terminal")
            break
        case "clear":
            terminalLines.value = []
            break
        default:
            terminalLines.value.push("command not recognised. enter 'help' for help")
            break
    }
    terminalInput.value = ""
    terminalContainer.value.scrollTo({ top: terminalContainer.value.scrollHeight, behavior: 'smooth' })
}

const getTerminalHistory = (order) => {
    if (terminalHistoryIndex === undefined) {
        terminalHistoryIndex = terminalHistory.length
    }

    terminalHistoryIndex += order

    if (terminalHistoryIndex > terminalHistory.length - 1) {
        terminalHistoryIndex = terminalHistory.length - 1
    }
    if (terminalHistoryIndex < 0) {
        terminalHistoryIndex = 0
    }

    terminalInput.value = terminalHistory[terminalHistoryIndex]
}

//initial execution
resetTerminalLines()
</script>

<template>
    <div class="container">
        <div class="code-container">
            <pre class="code-block-left">
18
19 <button @click="resetTerminalLines" class="reset-button">▶</button>
20  
21  
22  
23  
24  
25  
26  
27  
28  
29  
30</pre>
            <pre class="code-block">

<span style="color: rgb(219, 116, 19)">public</span> void <span style="color: rgb(245, 195, 59)">printInfo</span>(User user)
{
    System.out.println(
        "Name: " + user.getName() +
        "\nRole: " + user.getRole() +
        "\nRole: " + user.getRole() +
        "\nNationality: " + user.getNationality() +
        "\nEmail: " + user.getEmail() +
        "\nGitHub: " + user.getGitHub() +
    );
}

</pre>
        </div>
        <div class="terminal-select">
            <h3>Terminal:</h3>
            <h3 style="text-decoration: underline;">Local</h3>
        </div>
        <div ref="terminalContainer" class="terminal-container">
            <h3 v-for="line in terminalLines" v-html="line"></h3>
            <h3 v-if="showInput" class="terminal-input">~/home/niels/portfolio><input @keyup.enter="addTerminalLine"
                    @keydown.up="getTerminalHistory(-1)" @keydown.down="getTerminalHistory(1)" v-model="terminalInput"
                    type="text">
            </h3>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap');

:root {
    --color-1: rgb(214, 208, 208);
    --color-2: rgb(162, 121, 121);
    --color-3: rgb(109, 109, 109);
    --color-4: rgb(109, 83, 83);
    --gradient-1: linear-gradient(140deg, rgba(20, 20, 20, 1) 0%, rgba(30, 30, 60, 1) 100%);
    --background-color-1: rgb(40, 40, 40);
    --background-color-2: rgb(50, 50, 50);
    --background-color-3: rgb(19, 19, 19);
    --background-color-4: rgb(29, 29, 54);
}

* {
    border: 0;
    margin: 0;
    padding: 0;
    font-family: 'Anonymous Pro', monospace;
    font-weight: 300;
}

a {
    text-decoration: underline;
    color: var(--color-2);
}

a:hover {
    color: var(--color-4);
}

h3 {
    color: var(--color-1);
    padding: 0 0 6px 0;
}

input {
    font-size: 1.5vw;
    color: var(--color-2);
    background: transparent;
    outline: none;
}

.container {
    height: 100vh;
    color: var(--color-1);
    display: flex;
    flex-direction: column;
}

.code-container {
    font-size: 1.3vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.code-block {
    background-color: var(--background-color-1);
    flex-grow: 1;
    padding: 0 0 20px 40px;
}

.code-block-left {
    color: var(--color-3);
    background-color: var(--background-color-2);
    padding: 0 30px 20px 20px;
}

.terminal-select {
    font-size: 1.3vw;
    background-color: var(--background-color-4);
    display: flex;
}

.terminal-select h3 {
    border-right: 1px;
    border-style: solid;
    border-color: var(--color-3);
    padding: 5px 10px;
}

.terminal-container {
    overflow-y: scroll;
    font-size: 1.5vw;
    background-color: var(--background-color-1);
    padding: 20px;
    flex-grow: 1;
}

.terminal-input {
    padding-bottom: 20px;
}

.reset-button {
    background-color: transparent;
    color: rgb(42, 126, 42);
    font-size: 1em;
    cursor: pointer;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background-color: var(--background-color-3);
}

::-webkit-scrollbar-thumb {
    background-color: var(--color-1);
}

@media only screen and (max-width: 992px) {
    input {
        font-size: 1.5vw;
    }

    .code-container {
        font-size: 2vw;
    }

    .terminal-select {
        font-size: 1.8vw;
    }

    .terminal-container {
        font-size: 2vw;
    }
}

@media only screen and (max-width: 600px) {
    .code-block {
        padding-left: 10px;
    }

    .code-block-left {
        padding: 0 10px 10px 10px;
    }

    .code-container {
        font-size: 2.8vw;
    }

    .terminal-select {
        font-size: 2.4vw;
    }

    .terminal-container {
        font-size: 2.8vw;
        padding: 10px;
    }
}
</style>