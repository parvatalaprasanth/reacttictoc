function SmartLogin() {
    if (isUserLoggedIn()) {
        return <div> You are logged in as Pratik </div>
    }
    else {
        return (
            <input type="button" />
        )
    }
}

function isUserLoggedIn() {
    return false;
}

export default SmartLogin;