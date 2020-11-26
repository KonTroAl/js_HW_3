//С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

const i = 100

function simple_num() {
    let val = 2;
    let z = [1];
    while (val < i) {
        t = 1;
        let simple = true;
        while (t <= val) {
            let res = val % t;
            if (res === 0 && t != val && t != 1) {
                simple = false;
                break
            }
            t++;
        }
        if (simple) {
            z.push(val)
        }
        val++;
    }
    return z
}

document.writeln(simple_num());
