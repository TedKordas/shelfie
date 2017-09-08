
import axios from 'axios';

export function getAllBins() {
    return axios.get('/api/getAllBins').then(res => {
        return res.data
    })
}

export function getAllShelves() {
    return axios.get('/api/getAllShelves').then(res => {
        return res.data
    })
}

export function getShelfA() {
    return axios.get('/api/getShelfA').then(res => {
        return res.data
    })
}