import diariesData from "./diaries.json";
import {DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry} from "../utilities/types";

const diaries: Array<DiaryEntry> = diariesData as Array<DiaryEntry>;
export const getEntries = () : DiaryEntry[] => diaries;
export const findById = (id: number) : DiaryEntry | undefined=> {

    const entry = diaries.find(d=>d.id===id)

    return entry;
};
export const getNonSensitiveEntries = () : NonSensitiveDiaryEntry[] => {
    return diaries.map(({id, date,weather,visibility})=>
    {
        return {
            id, date, weather, visibility
        }
    }
    )
};
export const addEntries = (newDiaryEntries:NewDiaryEntry)=>{//(date:string, weather:Weather, visibility:Visivility, comment: string) => {

    const newDiary= {
        id: Math.max(...diaries.map(d=>d.id))+1,
        ...newDiaryEntries
    };
    diaries.push(newDiary);
    return newDiary;
};
