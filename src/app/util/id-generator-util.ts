export function getSimpleUniqueId(parts: number = 2): string {
    const stringArr = [];
    for (let i = 0; i < parts; i++) {
        // tslint:disable-next-line: no-bitwise
        const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        stringArr.push(S4);
    }
    return stringArr.join('-');
}
