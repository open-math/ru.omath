@mermaid
    graph TD
        arrangement[Размещение]:::featured -->|Без повторений| awr["$$ A_n^k = \frac{n!}{(n-k)!} $$"]
        arrangement -->|С повторениями| ar["$$ \bar{A}_n^k = n^k $$"]

---

Многие задачи сводятся к тому, что есть $n$ видов элементов, из которых надо сформировать комбинации размером $k$, причем порядок следования элементов **имеет** значение.

Таким комбинациям решили дать общее название: "размещения из $n$ по $k$" -- из $n$ (элементов) по $k$ (вакантным местам).
В зависимости от того, допустимо ли повторение элементов, размещения разделяют на два типа:

<~ @article|d:arrangement-repeat

<~ article|example:arrangements-def

<~ @article|d:arrangement-unique

<~ article|example:arrangements-unique-def

---

Формулы для вычисления количества размещений с повторениями и без них очень похожи.
С повторениями это цепочка из $k$ умножений числа $n$ на само себя.
Без повторений это цепочка из $k$ умножений уменьшающихся на единицу множителей, начиная с числа $n$:

<~ @article|t:arrangement-repeat

<~ article|example:arrangements-theorem

{ #arrangement-unique }
@theorem
    title: Число размещений без повторений
    main: |
        $$ A_n^k = n \cdot (n-1) \cdot \ldots \cdot (n-k+1) $$

        $$ A_n^k = \frac{n!}{(n-k)!} $$
    proof: |
        Смотрите доказательства [верхнего](@article|t:arrangement-unique-full) и [нижнего](@article|t:arrangement-factorial) равенств в статье.

<~ article|example:arrangements-unique-theorem