//export type Weather = 'sunny' |'rainy'| 'cloudy'| 'stormy' |'windy'
//export type Visivility = 'great'| 'good'| 'ok'|'poor'

import {Visibility, Weather} from "./enums";

export interface DiaryEntry {
    id: number,
    date:string,
    weather: Weather,
    visibility : Visibility
    comment : string
}

export type NonSensitiveDiaryEntry =Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry =Omit<DiaryEntry, 'id'>
interface SpecialDiariesEntry  extends DiaryEntry{
    flightNumber : number
}