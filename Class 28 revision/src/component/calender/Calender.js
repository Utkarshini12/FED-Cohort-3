import { connect } from "react-redux";
import { MONTH_LIST } from '../../constants/calender';
import { CHANGE_MONTH } from "../../actions/calenderAction";
// change month funcionality 




function Calender(props) {
    const changeMonth = (arrow) => {
        let selectedMonth;
        let selectedYear;
        if (arrow === "LEFT") {
            if (props.selectedMonth === 0) {
                selectedMonth = 11
                selectedYear = props.selectedYear - 1;
            } else {
                selectedMonth = props.selectedMonth - 1;
                selectedYear = props.selectedYear;
            }
        } else if (arrow === "RIGHT") {
            if (props.selectedMonth === 11) {
                selectedMonth = 0
                selectedYear = props.selectedYear + 1;
            } else {
                selectedMonth = props.selectedMonth + 1;
                selectedYear = props.selectedYear;
            }
        } else {
            selectedMonth = props.selectedMonth + 1;
            selectedYear = props.selectedYear;
        }

        props.dispatch({
            type: CHANGE_MONTH,
            payload: {
                selectedYear,
                selectedMonth

            }
        })



    }
    return (
        <div className="calender-container">
            <div className="calender-inner-container">
                <h2>Calender</h2>
                <div id="calender-display">
                    <div className="month-header">
                        <div className="left-arrow" onClick={() => changeMonth("LEFT")}>{"<"}</div>
                        <div id="month">{MONTH_LIST[props.selectedMonth]}, {props.selectedYear}</div>
                        <div className="right-arrow" onClick={() => changeMonth("RIGHT")}>{">"}</div>


                    </div>
                    <div className="calender-container-child">
                        <div>Sunday</div>
                        <div>Monday</div>
                        <div>Tuesday</div>
                        <div>Wednesday</div>
                        <div>Thursday</div>
                        <div>Friday</div>
                        <div>Saturday</div>
                        

                    </div>
                    <div className="calender-container-child">
                        {props.days.map((item, index) => (
                <div key={item + index}>{item}</div>
              ))}
                        </div>
                </div>
            </div>
        </div>
    )



}

const mapStatetoProps = (state) => {
    return {
        startDay: state.startDay,
        endDay: state.endDay,
        selectedMonth: state.selectedMonth,
        selectedYear: state.selectedYear,
        days: state.days
    }
}


// (ui component -> state values)(all the reducer functions)

export default connect(mapStatetoProps)(Calender)
