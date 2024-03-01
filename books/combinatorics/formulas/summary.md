## Схема комбинаторики

Комбинаторика [изучает](article|combinatorics/preface|d:combinatorics) составление комбинаций.
Особенно часто возникает вопрос подсчета количества тех или иных комбинаций.

Для ответа на этот вопрос используют два основных подхода, иногда задействуя сразу оба: **базовые правила** (правила [суммы](article|combinatorics/rules/sum) и [произведения](article|combinatorics/rules/product)) и **комбинаторные конфигурации** ([размещения](article|combinatorics/arrangement), [перестановки](article|combinatorics/permutation), [сочетания](article|combinatorics/combination) и [другие](article|spoiler:composition)).

Схема основных правил и формул комбинаторики:

@mermaid
    flowchart TB
        root[[<b>Подсчет комбинаций</b>]]
        root -->|Использовать базовые правила| rules[Базовые правила]:::featured
        root -->|Свести к типовым комбинациям| configurations[Комбинаторные конфигруации]:::featured

        rules[Базовые правила]:::featured
        rules -->|Разбить на группы| sumRule[Правило суммы]
        rules -->|Поочередно выбирать элементы| productRule[Правило произведения]

        configurations[Комбинаторная конфигурация]:::featured --> question{{Порядок элементов важен?}}

        question -->|Да| arrangement[Размещение]:::featured
        question -->|Нет| combination[Сочетание]:::featured

        arrangement -->|Без повторений| awr["$$ A_n^k = \frac{n!}{(n-k)!} $$"]
        arrangement -->|С повторениями| ar["$$ \bar{A}_n^k = n^k $$"]

        combination -->|Без повторений| cwr["$$ C_n^k = \frac{n!}{(n-k)! \ k!} $$"]
        combination -->|С повторениями| cr["$$ \bar{C}_n^k = C_{n+k-1}^k $$"]

        awr -->|Используются все элементы| permutation[Перестановка]:::featured

        permutation -->|Без повторений| pwr["$$ P_n = n! $$"]
        permutation -.->|С повторениями$^*$| pr["$$ P_{n_1, \ \ldots, \ n_k} = \frac{n!}{n_1! \ \ldots \ n_k!} $$"]