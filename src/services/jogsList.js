const getJogs = async (token) => {
    const response = await fetch('https://jogtracker.herokuapp.com/api/v1/data/sync', {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    const responseJSON = await response.json();
    if (!response.ok || !responseJSON.response.jogs) {
        return [];
    }
    return  responseJSON.response.jogs.map(jog => {
        jog.date = new Date(jog.date);
        return jog;
    })
}

const filterJogs = async (token, filter) => {
    const jogs = await getJogs(token);
    if (!jogs.length) {
        return [];
    }
    return jogs.filter(jog => jog.date >= Date.parse(filter.dateFrom) && jog.date <= Date.parse(filter.dateTo));
}

const addJog = async (body, token) => {
    const formData = new FormData();
    console.log(body);
    for (let key in body) {
        formData.append(key, body[key]);
    }
    await fetch('https://jogtracker.herokuapp.com/api/v1/data/jog', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: formData
    })
}

const updateJog = async (body, token) => {
    const formData = new FormData();
    for (let key in body) {
        if (key === "id") {
            formData.append("jog_id", body[key]);
        } else {
            formData.append(key, body[key]);
        }
    }
    await fetch('https://jogtracker.herokuapp.com/api/v1/data/jog', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: formData
    })
}

const jogsListService = {
    getJogs,
    addJog,
    filterJogs,
    updateJog,
}

export default jogsListService;