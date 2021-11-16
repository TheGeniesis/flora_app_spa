export const ConvertFormDataToObject = (originalData: FormData): object => {
    const object = {};
    originalData.forEach((value: FormDataEntryValue, key: string) => {
        // Reflect.has in favor of: object.hasOwnProperty(key)
        if (!Reflect.has(object, key)) {
            object[key] = value;
            return;
        }
        if (!Array.isArray(object[key])) {
            object[key] = [object[key]];
        }
        object[key].push(value);
    });

    return object;
};
