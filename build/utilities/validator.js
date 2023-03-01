"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const parseDate = (dateRequest) => {
    if (!Date.parse(dateRequest)) {
        throw new Error('date is incorrect format or invalid');
    }
    return dateRequest;
};
const parseWeather = (weather) => {
    if (!isWeather(weather))
        throw new Error('error in weather');
    return weather;
};
const isWeather = (weather) => {
    return Object.values(enums_1.Weather).includes(weather);
};
const parseVisibility = (visibility) => {
    if (!isVisibility(visibility))
        throw new Error('error in visibility');
    return visibility;
};
const isVisibility = (visibility) => {
    return Object.values(enums_1.Visibility).includes(visibility);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        visibility: parseVisibility(object.visibility),
        weather: parseWeather(object.weather),
        date: parseDate(object.date),
        comment: object.comment
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
