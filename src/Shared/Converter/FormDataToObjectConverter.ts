export const ConvertFormDataToObject = (originalData: FormData): object => {
    const object = {};

    originalData.forEach((value: FormDataEntryValue, key: string) => {
        let convertedValue : string|number|File = Number(value);

        if (isNaN(convertedValue)) {
            convertedValue = value;
        }
        // Reflect.has in favor of: object.hasOwnProperty(key)
        if (!Reflect.has(object, key)) {
            object[key] = convertedValue;
            return;
        }
        if (!Array.isArray(object[key])) {
            object[key] = [object[key]];
        }
        object[key].push(convertedValue);
    });

    return object;
};
