// function that removes empty values from an object
export function removeEmptyFields<T>(obj: any): T {
    for (var prop in obj) {
        if (obj[prop] === null || obj[prop] === undefined || obj[prop] === '') {
            delete obj[prop];
        }
    }

    return { ...obj };
}