## Физические величины

@task
    title: Разделяй и властвуй!
    tags:
        - Физические величины 
        - Единицы измерения
        - Измерительные приборы

    statement: |
        Выберите из списка все физические величины, единицы измерения и измерительные приборы:

        1. амперметр
        2. ватт
        3. сила тока
        4. энергия
        5. дозиметр
        6. кулон
        7. микроскоп
        8. джоуль
        9. ускорение

    answer: |
        3, 4, 9 - физические величины

        2, 6, 8 - единицы измерения

        1, 5, 7 - измерительные приборы

    hint: |
        1. Вспомните [теорию](@article|definition:basic)
        2. Рассмотрите решение [подобной задачи](@article|example:ex1).

@task
    title: А был ли вектор?
    tags: 
        - Скалярные и векторные физические величины

    statement: |
        Выберите из списка все векторные физические величины:

        1. мощность
        2. сила
        3. скорость
        4. энергия
        5. работа
        6. температура
        7. перемещение
        8. путь
        9. угол

    answer: |
        Векторные величины: 2, 3, 7

    hint: |
        Вспомните [теорию](@article|definition:vectora).
    
@task
    title: Вращающийся вектор
    tags:
        - Проекция векторных величин на ось

    statement: |
        Выразите проекции $\vec r$ на оси Ox и Oy через модуль вектора $r$ и угол $\alpha$.

        @image
            src: assets/projtask.png
            invert: dark
    
    hint: |
        1. Вспомните [теорию](@article|list:typeproj).
        2. $\cos (90-\alpha) = sin(\alpha)$

    answer: |
        а) $r_x = r*\cos \alpha; \qquad r_y = r*\sin \alpha$

        б) $r_x = r; \qquad r_y = 0$
        
        в) $r_x = -r*\cos \alpha; \qquad r_y = -r*\sin \alpha$
        
        г) $r_x = 0; \qquad r_y = - r$

## Действия с векторами

@task
    title: Больше векторов богу векторов!
    tags: 
        - Координаты векторов
        - действия с векторами

    statement: |

        На рисунке изображено несколько векторов. 

        1. Найдите координаты всех векторов на рисунке
        2. Найдите координаты вектора $\vec g = \vec a + 2\vec b - 3\vec c$
 
        @image
            src: assets/vectors.jpg
            invert: dark
            width: 500px
    
    hint: |
        1. Вспомните [теорию](@article|definition:coords).
        2. При сложении векторов их координаты складываются, при вычитании вычитаются
        3. Рассмотрите решение [подобной задачи](@article|example:ex2)

    answer: |
        $\vec a = (7; 2) \qquad \vec b = (6; -1) \qquad \vec c = (0; 3) \qquad \vec e = (-2; -6) \qquad \vec f = (-4; 4) \qquad \vec g = (19; -9)$

@task
    title: Легким движением руки вектор превращается... в скаляр
    tags: 
        - Скалярное произведение

    statement: |

        На рисунке изображено несколько векторов. Найдите скалярное произведение векторов
        $\vec a \cdot \vec b$, 
        $\vec b \cdot \vec c$,
        $\vec e \cdot \vec f$
 
        @image
            src: assets/vectors.jpg
            invert: dark
            width: 500px
    
    hint: |
        1. Вспомните [теорию](@article|definition:scalarproizv).
        2. Кординаты векторов можете взять из предыдущей задачи
        3. Рассмотрите решение [подобной задачи](@article|example:ex3)

    answer: |
        $\vec a \cdot \vec b = 40; \qquad \vec b \cdot \vec c = -3; \qquad \vec e \cdot \vec f = -16$



## Упрощение выражений со скалярным произведением


@task
    title: Вектор из векторов
    tags: 
        - Скалярное произведение

    statement: |

        Найдите косинус угла между векторами $\vec a + 3 \vec b$ и $\vec a - \vec b$, 
        если угол между векторами $\vec a$ и $\vec b$ равен $30\degree$, 
        $|\vec a| = \sqrt 3$, $|\vec b| = 1$.
    
    hint: |
        1. Вспомните [теорию](@article|definition:scalarproizv) и [свойства](@article|important:prop2).
        2. Рассмотрите решение [подобной задачи](@article|example:ex4)
        3. Задачу удобно решать по частям: сперва найти длину каждого из векторов, а затем скалярное произведение.

    answer: |
        $\cos (\vec a; \vec b) = \frac{3}{\sqrt{21}}$


@task
    title: Вектора в физике
    tags: 
        - Скалярное произведение
        - Длина вектора

    statement: |

        Перемещение тела, брошенного под углом $\alpha$ к вектору $\vec g$, определяется уравнением 
        $\vec s = t(\vec v_0+\frac{\vec gt}{2})$. Найти дальность полета тела, то есть перемещение тела в момент, когда 
        $\vec s \perp \vec g$.
    
    hint: |
        1. Вспомните [теорию](@article|definition:scalarproizv) и [свойства](@article|important:prop2).
        2. Рассмотрите решение [подобной задачи](@article|example:ex5)

    solution: |
        Заметим, что $\vec v_0 \cdot \vec g = v_0g\cos\alpha$. 

        Тогда $\vec s \cdot \vec g = t(\vec v_0\vec g+\frac{g^2t}{2}) = 0$
        $ \Rightarrow t = \frac{-2\vec v_0 \vec g}{g^2} = \frac{-2v_0\cos\alpha}{g}$.

        Но $|\vec s|^2 = t^2(v_0^2 +\vec v_0 \vec g t + \frac{g^2t^2}{4}) $
        $= \frac{4v_0^2\cos^2\alpha}{g^2}(v_0^2+v_0g\cos\alpha\frac{-2v_0\cos\alpha}{g}+(v_0\cos\alpha)^2)$
        $ = \frac{4v_0^2\cos^2\alpha}{g^2}v_0^2(1-2\cos^2\alpha+\cos^2\alpha)=\frac{4v_0^2\cos^2\alpha}{g^2}v_0^2\sin^2\alpha$.

        Тогда $|\vec s| = \frac{2v_0^2|\cos\alpha\sin\alpha|}{g} = \frac{v_0^2|\sin2\alpha|}{g}$.  

    answer: |
        $|\vec s| = \frac{v_0^2|\sin2\alpha|}{g}$