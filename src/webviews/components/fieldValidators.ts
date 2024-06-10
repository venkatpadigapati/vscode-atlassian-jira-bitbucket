// used to chain onChange function so we can provide custom functionality after internal state changes
export const chain = (...fns: any[]) => (...args: any[]) => fns.forEach((fn) => fn(...args));

export function validateSingleSelect(value: string, state?: any): string | undefined {
    return value !== undefined ? undefined : 'EMPTY';
}

export function validateMultiSelect(value: string, state: any): string | undefined {
    return undefined;
    //return (value !== undefined && value.length > 0) ? undefined : "EMPTY";
}

export function validateString(value: string, state?: any): string | undefined {
    return value === undefined || value.trim().length < 1 ? 'EMPTY' : undefined;
}

export function isValidString(value: string): boolean {
    return validateString(value) === undefined;
}

export function validateEmail(value: string, state?: any): string | undefined {
    return value === undefined || value.length < 1 || !/^\S+@\S+$/.test(value) ? 'EMPTY' : undefined;
}

export function validateNumber(value: any, state?: any): string | undefined {
    let err = undefined;

    if (value !== undefined && value.length > 0) {
        let numVal: number = NaN;

        if (typeof value === 'number') {
            numVal = value;
        } else {
            numVal = parseFloat(value);
        }

        err = isNaN(numVal) ? 'NOT_NUMBER' : undefined;
    }

    return err;
}

export function isValidNumber(value: string): boolean {
    return validateNumber(value) === undefined;
}

export function validateUrl(value: string, state?: any): string | undefined {
    let err = undefined;

    try {
        const url = new URL(value);
        if (url.hostname === '') {
            err = 'NOT_URL';
        }
    } catch (e) {
        err = 'NOT_URL';
    }

    return err;
}

export function isValidUrl(value: string): boolean {
    return validateUrl(value) === undefined;
}

export function validateRequiredNumber(value: any, state?: any): string | undefined {
    let err = validateString(value, state);

    if (err === undefined) {
        err = validateNumber(value);
    }

    return err;
}

export function isValidRequiredNumber(value: string): boolean {
    return validateRequiredNumber(value) === undefined;
}

export function validateRequiredUrl(value: string, state?: any): string | undefined {
    let err = validateString(value, state);

    if (err === undefined) {
        err = validateUrl(value, state);
    }

    return err;
}

export function isValidRequiredUrl(value: string): boolean {
    return validateRequiredUrl(value) === undefined;
}
