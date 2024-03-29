export const terminalLinesDefault = [
    "Name: <span style='color: var(--color-2)'>Niels van Bruggen</span>",
    "Role: <span style='color: var(--color-2)'>Software Programmer</span>",
    "Nationality: <span style='color: var(--color-2)'>Netherlands</span>",
    "Email: <a href='mailto:nwbvanbruggen@outlook.com'>nwbvanbruggen@outlook.com</a>",
    "GitHub: <a href='https://github.com/Blockfluit'>Blockfluit</a>",
    "&nbsp;",
    "Process finished with exit code 0",
]

export const mainDefault = [
    "‎",
    "<span style='color: rgb(219, 116, 19)'>public class</span> Main",
    "{",
    "   <span style='color: rgb(219, 116, 19)'>public static void</span> <span style='color: rgb(235, 177, 52)'>main</span>(String[] args) ",
    "   {",
    "        User user = User.builder()",
    "            .name(\"Niels van Bruggen\")",
    "            .role(Role.<span style='font-style: italic;'>SOFTWARE_PROGRAMMER</span>)",
    "            .nationality(\"Netherlands\")",
    "            .email(\"nwbvanbruggen@outlook.com\")",
    "            .gitHub(\"https://github.com/Blockfluit\")",
    "            .build();",
    "‎",
    "        printInfo(user);",
    "   }",
    "‎",
    "   <span style='color: rgb(219, 116, 19)'>public void</span> <span style='color: rgb(235, 177, 52)'>printInfo</span>(User user)",
    "   {",
    "      System.out.println(",
    "          \"Name: \" + user.getName() +",
    "          \"\\nRole: \" + user.getRole() +",
    "          \"\\nRole: \" + user.getRole() +",
    "          \"\\nNationality: \" + user.getNationality() +",
    "          \"\\nEmail: \" + user.getEmail() +",
    "          \"\\nGitHub: \" + user.getGitHub() +",
    "      );",
    "   }",
    "}",
    "‎",
]

export const userDefault = [
    "<span style='color: rgb(219, 116, 19)'>import</span> lombok.*;",
    "‎",
    "<span style='color: rgb(173, 165, 64)'>@Data</span>",
    "<span style='color: rgb(173, 165, 64)'>@Builder</span>",
    "<span style='color: rgb(173, 165, 64)'>@NoArgsConstructor</span>",
    "<span style='color: rgb(173, 165, 64)'>@AllArgsConstructor</span>",
    "<span style='color: rgb(219, 116, 19)'>public class</span> User",
    "{",
    "    <span style='color: rgb(219, 116, 19)'>private</span> String <span style='color: rgb(156, 95, 207)'>name</span>;",
    "    <span style='color: rgb(219, 116, 19)'>private</span> Role <span style='color: rgb(156, 95, 207)'>role</span>;",
    "    <span style='color: rgb(219, 116, 19)'>private</span> String <span style='color: rgb(156, 95, 207)'>nationality</span>;",
    "    <span style='color: rgb(219, 116, 19)'>private</span> String <span style='color: rgb(156, 95, 207)'>email</span>;",
    "    <span style='color: rgb(219, 116, 19)'>private</span> String <span style='color: rgb(156, 95, 207)'>gitHub</span>;",
    "}",
    "‎",
]

export const roleDefault = [
    "‎",
    "<span style='color: rgb(219, 116, 19)'>public enum</span> Role",
    "{",
    "    <span style='color: rgb(156, 95, 207); font-style: italic;'>SOFTWARE_ENGINEER</span>;",
    "}",
    "‎",
]

export const readmeDefault = [
    "‎",
    "        ,-.       _,---._ __  / \\",
    "       /  )    .-'       `./ /   \\",
    "      (  (   ,'            `/    /|",
    "       \\  `-\"             \\'\\   / |",
    "        `.              ,  \\ \\ /  |",
    "         /`.          ,'-`----Y   |",
    "        (            ;        |   '",
    "        |  ,-.    ,-'         |  /",
    "        |  | (   |            | /",
    "        )  |  \\  `.___________|/",
    "        `--'   `--'",
    "‎",
    "Copyright 2023 Niels van Bruggen",
    "‎",
]