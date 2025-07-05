import React, {useState} from 'react';
import './styles/search.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@mui/icons-material/People';
import { Button } from '@mui/material';

//date picker component
export default function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

  return (
    <div>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}></DateRangePicker>
      <h2>Number of guests<PeopleIcon></PeopleIcon></h2>
      <input min={0} max={2} type='text'></input>
      <Button>Search AirBnB</Button>
    </div>
  )
}
