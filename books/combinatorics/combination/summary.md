@mermaid
    graph TD
        combination[Сочетание]:::featured -->|Без повторений| cwr["$$ C_n^k = \frac{n!}{(n-k)! \ k!} $$"]
        combination -->|С повторениями| cr["$$ \bar{C}_n^k = C_{n+k-1}^k $$"]

---

Часто в комбинаторных задачах нужно найти количество наборов элементов, причем порядок элементов в наборе значения не имеет.

Таким **неупорядоченным** комбинациям математики дали свое название: "сочетания из $n$ по $k$" -- из $n$ (элементов) по $k$ (вакантным местам).
В зависимости от того, допустимо ли повторение элементов, сочетания разделяют на два типа:

<~ article|definition:combination

<~ article|example:combinations

<~ article|definition:combination-repeat

<~ article|example:combinations-repeat

---

Количество сочетаний обозначается двумя способами:

$$ C_n^k \qquad или \qquad \binom{n}{k} $$

Обозначение слева читается как "сочетания из $n$ по $k$", а справа как "биноминальный коэффициент из $n$ по $k$".

<~ article|theorem:combinations

<~ article|example:combinations-theorem

<~ article|important:combinations-purpose

---

Число сочетаний с повторениями обозначается только одним способом -- $\bar{C}_n^k$.

<~ article|theorem:combinations-repeat

<~ article|example:combinations-repeat-theorem