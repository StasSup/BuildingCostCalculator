import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://data.techart.ru/lab/json/',
})

const getRequest = (building, height, material, sizex, sizey) => {
    return instance.get(`?building=${building}&height=${height}&material=${material}&sizex=${sizex}&sizey=${sizey}`).then(response => {
        return response.data
    })
}

export default getRequest
