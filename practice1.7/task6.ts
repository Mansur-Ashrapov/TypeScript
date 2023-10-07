function task6(num: number): number {
    if (num < 10) 
      return num;
    var s = 0;
    while(num) {
        s += num % 10;
        num = ~~(num / 10); // ~~ округление в меньшую сторону
    }
    return task6(s);
}