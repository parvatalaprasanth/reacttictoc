function SmartHeading(props) {
    if (props.displayedOn) {
        return (
            <div style={{ color: 'red' }}>
                { props.title ? props.title : "Default title" }
            </div>
        )
    }
    else {
        return (
            <div> Error! Display property not set </div> 
        )
    }
}

function DumbHeading() {
    return (
        <div> Dumb heading </div>
    );
}

export { SmartHeading, DumbHeading };