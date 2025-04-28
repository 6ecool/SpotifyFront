import axios from "axios";

const baseUrl = 'http://localhost:3000/api';


export const spotifyProxy = (url: string) => {
    return axios.get(`${baseUrl}/spotify/proxy?query=${url}`);
}

export const spotifySearch = (searchQ: string) => {
    return axios.get(`${baseUrl}/spotify/search?query=${searchQ}`);
}

export const getLyrics = (artist: string, track: string) => {
    return axios.get(`http://localhost:3000/api/lyrics?artist=${artist || ''}&title=${encodeURIComponent(track || '')}`);
}


export const getNews = (page: number, pageSize: number) => {
    return axios.get('http://localhost:3000/api/music-news', {
        params: {
            page,
            pageSize,
        },
    });
}

