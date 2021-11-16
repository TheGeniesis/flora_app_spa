import {ConvertFormDataToObject} from "./FormDataToObjectConverter";

export const ConvertObjectToJson = (originalData: {}): string => {

    if (originalData instanceof FormData) {
        return JSON.stringify(ConvertFormDataToObject(originalData));
    }

    return JSON.stringify(originalData);
};
