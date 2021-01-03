export function isEmptyString(str: string): boolean {
    if (!str) { return true; }
    return !str.trim();
}

export function isEmptyArray(arr: any[] = []) {
    return arr.length === 0;
}

export function isEmptyObject(obj: object = {}) {
    return Object.keys(obj).length === 0;
}

export function getDefault(obj: any, defObj: any): any {
    if (!obj) { return defObj; }

    if (obj instanceof String) { return isEmptyString(`${obj}`) ? defObj : obj; }

    if (obj instanceof Array) { return isEmptyArray(obj) ? defObj : obj; }

    if (obj instanceof Object) { return isEmptyObject(obj) ? defObj : obj; }

    return obj;
}
