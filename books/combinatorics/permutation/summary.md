@mermaid
    graph TD
        permutation[Перестановка]:::featured -->|Без повторений| pwr["$$ P_n = n! $$"]
        permutation -.->|С повторениями$^*$| pr["$$ P_{n_1, \ \ldots, \ n_k} = \frac{n!}{n_1! \ \ldots \ n_k!} $$"]

---

В комбинаторике часто встречаются задачи, в которых нужно составлять комбинации из **всех** имеющихся элементов.
Такие комбинации называют перестановками.

<~ article|d:permutation

<~ article|example:permutations

<~ article|important:permutation-is-arrangement

---

<~ article|theorem:permutations

<~ article|example:science-conf

---

Если среди элементов есть дубликаты, то обычная формула для подсчета перестановок работать не будет.
Нужно использовать ее обобщенный вариант:

<~ article|theorem:permutations-repeat

<~ article|example:math-word

<~ article|important:different-repeat