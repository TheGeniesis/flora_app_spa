export const ConvertIdsStringsToArray = (data: object): object => {
    for (let elem in data) {
        if (data.hasOwnProperty(elem) && elem.endsWith('_ids')) {
            if (Array.isArray(data[elem])) {
                continue;
            }
            data[elem] = [data[elem]];
        }
    }
    return data;
};
