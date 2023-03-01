"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntries = exports.getNonSensitiveEntries = exports.findById = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const findById = (id) => {
    const entry = diaries.find(d => d.id === id);
    return entry;
};
exports.findById = findById;
const getNonSensitiveEntries = () => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id, date, weather, visibility
        };
    });
};
exports.getNonSensitiveEntries = getNonSensitiveEntries;
const addEntries = (newDiaryEntries) => {
    const newDiary = Object.assign({ id: Math.max(...diaries.map(d => d.id)) + 1 }, newDiaryEntries);
    diaries.push(newDiary);
    return newDiary;
};
exports.addEntries = addEntries;
