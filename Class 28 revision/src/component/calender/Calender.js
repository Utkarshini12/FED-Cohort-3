import { connect } from "react-redux";
import { daysInMonth, selectedMonth } from "../../utils/dateUtil";

// change month funcionality 




function Calender(props) {
    function ChangeMonth(arrow) {
        if action = "LEFT" ==> -1
        if action = "RIGHT" ===> +1
    }
   
    return (
        <div>
            <div className="left" onClick={()=> changeMonth("LEFT")}>{"<"}</div>
            <div className="right"></div>

            <div className="calender">
                sun, mon
                {days.map}
            </div>
        </div>
    )


    //mapstatetoprops
    startDay: state.startDay
    endDay,
    selectedYear, 
    selectedMonth,
    days: state.days

}
// (ui component -> state values)(all the reducer functions)

export default connect(Calender)(mapStatetoProps)
