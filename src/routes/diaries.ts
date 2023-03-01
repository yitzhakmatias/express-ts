import express from "express";
import * as diaryServices from "../services/diaryService";
import toNewDiaryEntry from "../utilities/validator";

const router = express.Router();

router.get('/', (_req, res) => {

    res.send(diaryServices.getNonSensitiveEntries())
})
router.get('/:id', (req, res) => {

    const diary = diaryServices.findById(+req.params.id)
    res.send(diary)
})
router.post('/', (req, res) => {
  // const  {date, weather, visibility, comment} =  req.body;
   const newDiary = toNewDiaryEntry(req.body);
   //const newDiaryEntry = diaryServices.addEntries({date, weather, visibility, comment});
   const newDiaryEntry = diaryServices.addEntries(newDiary);
   res.json(newDiaryEntry);
})


export default router;