export function getToken() {
    let token = localStorage.getItem('tokenAccess');
    if (token === '' | token === undefined | token === null) {
        return null
    }
    return token;
}

export function checkToken()
{
    let token = getToken();
    if (token === null ) {
        return false;
    }
    return true;
}

export function cleanToken(token_name) {
    if (token_name === '' | token_name === undefined | token_name === null) {
        localStorage.removeItem('tokenAccess');
        localStorage.removeItem('tokenRefresh');
    }
    else
    {
        localStorage.removeItem(token_name);
    }
}


