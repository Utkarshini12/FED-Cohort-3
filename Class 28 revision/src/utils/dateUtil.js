export const selectedYear = new Date().getFullYear();
export const selectedMonth = new Date().getMonth();

// returns 31
export const daysInMonth = function (month, year) {
    return new Date(year, month+1, 0).getDate(); 

}

// return days for your date
export const monthDays = function (date) {
    return new Date(date).getDay();
}
