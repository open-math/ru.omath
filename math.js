const MACRO =
{
    // Множество
    "\\set":    "\\left\\{#1\\right\\}",

    // И/ИЛИ скобки
    "\\andcases": "\\begin{cases}#1\\end{cases}",
    "\\orcases": "\\left[\\begin{array}{ll} #1 \\end{array}\\right."
}

module.exports = MACRO;