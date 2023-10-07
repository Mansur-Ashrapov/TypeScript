/*

document.addEventListener('click', (e) => {
    const coords = [e.posX, e.posY];
    console.log(`Point is ${coords[0]}, ${coords[1]}`);
});


    Здесь ошибка в том, что мы явно не указываем тип приходящего event в функцию
    Решить это можно несколькими способами
        сказать что e имеет тип any
        импортировать необходимый тип event и явно его указать для e

*/

document.addEventListener('click', (e: any) => {
    const coords = [e.posX, e.posY];
    console.log(`Point is ${coords[0]}, ${coords[1]}`);
});

