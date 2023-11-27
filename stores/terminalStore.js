export const useTerminalStore = defineStore("terminalStore", {
    state: () => ({
        lines: [],
        history: [],
        historyIndex: 0,
        showInput: true,
    }),
    actions: {
        addLine(message) {
            if (message.trim() !== "") this.history.push(message)

            if (message.trim().startsWith("echo")) {
                const input = message.split(" ")[1] ?? ""
                this.lines.push(input === "" ? "&nbsp;" : input)
                return
            }

            if (message.trim().startsWith("cd")) {
                this.lines.push("permission denied")
                return
            }

            switch (message) {
                case "help":
                    this.lines.push("help - shows this menu")
                    this.lines.push("clear - clears terminal")
                    this.lines.push("echo - echoes provided text in terminal")
                    break
                case "clear":
                    this.lines = []
                    break
                default:
                    this.lines.push("command not recognised. enter 'help' for help")
                    break
            }
        }
    }
})