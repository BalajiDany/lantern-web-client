export function isEmptyString(str: string): boolean {
    if (!str) { return true; }
    return !str.trim();
}

export function getDefault(obj: any, defObj: any): any {
    if (!obj) { return defObj; }

    if (obj instanceof String) { return isEmptyString(`${obj}`) ? defObj : obj; }

    if (obj instanceof Array) { return obj.length === 0 ? defObj : obj; }

    if (obj instanceof Object) { return Object.keys(obj).length === 0 ? defObj : obj; }

    return obj;
}
