function task5(num: number): number {
    if (num < 0) {
        return num;
    }
    let temp: string = String(num);
    let res: string = '';

    for (let i = 0; i < temp.length; i++) {
        res += String(Number(temp[i]) * Number(temp[i]));
    }

    return Number(res);
}