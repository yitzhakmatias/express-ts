import {Visibility, Weather} from "./enums";
import {NewDiaryEntry} from "./types";


const parseDate = (dateRequest: any) => {
    if (!Date.parse(dateRequest)) {
        throw new Error('date is incorrect format or invalid')
    }
    return dateRequest;
}

const  parseWeather =(weather : any):Weather=>{

    if (!isWeather(weather)) throw new Error('error in weather')
    return weather;
}
const isWeather =(weather:any):boolean=>{
    return Object.values(Weather).includes(weather)

}

const parseVisibility =(visibility:any):Visibility=>{
    if (!isVisibility(visibility)) throw new Error('error in visibility')
    return visibility
}
const  isVisibility = (visibility:any):boolean=>{
    return Object.values(Visibility).includes(visibility);
}
const toNewDiaryEntry = (object: any): NewDiaryEntry => {

    const newEntry: NewDiaryEntry = {
        visibility:parseVisibility(object.visibility),
        weather: parseWeather(object.weather),
        date: parseDate(object.date),
        comment: object.comment
    }
    return newEntry;
}
export default toNewDiaryEntry;