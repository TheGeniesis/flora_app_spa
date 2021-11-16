export const Sprintf = (text: string, parameters: {}): string => {
    for (let paramName in parameters) {
        if (parameters.hasOwnProperty(paramName)) {
            text = text.replace("{" + paramName + "}", parameters[paramName])
        }
    }

    return text;
};
