// 2. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве. 
// Задачи:
// Организовать такой массив для хранения товаров в корзине;
// Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

'use strict'


// let a = { name: 'PS', cost: 47000 }
// let b = { name: 'Xbox', cost: 46000 }

let basket = [{ name: 'PS', cost: 47000 }, { name: 'Xbox', cost: 46000 }];

function countBasketPrice(basket) {
    const sum = []
    let a = 0
    let res = 0
    for (let i = 0; i < basket.length; i++) {
        for (let key in basket[i]) {
            // document.writeln(key)
            if (key === "cost") {
                sum.push(basket[i][key]);
            }
        }
    }
    for (let i = 0; i < sum.length; i++) {
        a = sum[i]
        res = res + a
    }

    document.writeln(res);
}

countBasketPrice(basket)

// alert(basket[0]["name"])