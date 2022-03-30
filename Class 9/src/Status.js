function Status(props) {
    let message;
    if (props.status === "loading") {
        message = "Loading...";
    } else if (props.status === "success") {
        message = "Data fetched successfully";
    } else if (props.status === "error") {
        message = "Error loading data";
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )

}

export default Status;