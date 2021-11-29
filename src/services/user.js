const getUserToken = async () => {
    const formData = new FormData();
    formData.append('uuid', 'hello');
    const response = await fetch('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: formData,
    })
    if(!response.ok) {
        throw new Error('get token failed');
    }
    const responseJSON = await response.json();
    return responseJSON.response;
}

const userService = {
    getUserToken,
}

export default userService;