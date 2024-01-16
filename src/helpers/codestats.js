import axios from "../../node_modules/axios/index"

const base_url = 'https://codestats.net/api';
const username = 'Rodieche';

const LEVEL_FACTOR = 0.025;

export const getDataFromCodeStats = async () => {
    const { data } = await axios.get(`${base_url}/users/${username}`);
    let { languages } = data;
    let lang = [];
    let exp = 0;
    Object.entries(languages).forEach(([key, value]) => {
        lang = [...lang, { key, ...value, level: get_level(value.xps) }];
        exp += value.xps;
    });
    lang = lang.sort((a,b) => b.xps - a.xps);
    return {languages: lang, total_experience: exp};
}

const get_level = (xp) => {
    return Math.round(LEVEL_FACTOR * Math.sqrt(xp));
  }