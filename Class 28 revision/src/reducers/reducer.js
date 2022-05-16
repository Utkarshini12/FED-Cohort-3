import { CHANGE_MONTH } from '../actions/calenderAction';
import {selectedYear, selectedMonth, monthDays, daysInMonth} from '../utils/dateUtil';
import { getDays } from '../utils/calenderUtil';
// 1St of may2022
const startDay= monthDays(`${selectedMonth + 1}-01-${selectedYear}`);
const endDay = daysInMonth(selectedMonth, selectedYear)

const initialState = {
    startDay, 
    endDay,
    selectedYear, 
    selectedMonth,
    days: getDays(startDay, endDay)
    
}

export const reducers = (state=initialState, action) => {
    switch (action.type) {
        case CHANGE_MONTH :
            const {selectedYear, selectedMonth} = action.payload;
            const startDay= monthDays(`${selectedMonth + 1}-01-${selectedYear}`);
            const endDay = daysInMonth(selectedMonth, selectedYear);
            const days = getDays(startDay, endDay);
            return {...state, selectedMonth, selectedYear, days}
        default: 
        return state;
    }
}