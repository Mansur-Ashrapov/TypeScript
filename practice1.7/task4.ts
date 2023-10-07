function reverseString(s: string): string {
    let res: string = '';
    for (let i: number = 0; i < s.length; i++) {
        res += s[s.length - i - 1];
    }
    return res;
}