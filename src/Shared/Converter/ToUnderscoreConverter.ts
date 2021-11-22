export const ConvertToUnderscore = (toConvert: string): string => {
    return toConvert.replace(/(?:^|\.?)([A-Z])/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, "");
};
