import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { theme } from '../../constants';

const MyCalendars = () =>{

    const [selected, setSelected] = useState('')

    const marked = {
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: theme.colors.primary},
        '2023-01-01':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-02-20':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-02-21':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-03-24':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-04-02':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-04-07':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-05-01':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-05-25':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-05-26':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-06-17':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-06-19':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-06-20':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-07-09':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-08-21':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-10-10':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-10-16':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-11-20':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-12-08':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'},
        '2023-12-25':{ marked: true, selected: true, selectedColor:'grey', dotColor:'grey'}
    };

    return(
        <Calendar
        onDayPress={day => {
            setSelected(day.dateString);
        }}
        markedDates={
            marked
        }
        theme={{
            backgroundColor: theme.colors.primary,
            calendarBackground: '#ffffff',
            textSectionTitleColor: theme.colors.primary,
            selectedDayBackgroundColor: theme.colors.primary,
            selectedDayTextColor: '#ffffff',
            todayTextColor: theme.colors.primary,
            dayTextColor: 'black',
            dotColor:'white',
            textDisabledColor: theme.colors.secundary}}
    />
    )

}

export default MyCalendars