import { notion } from "../api/notion";

const PROJECTS_DB = import.meta.env.VITE_NOTION_PROJECTS_DB;

export const GetProjects = async({filterByCity} = {}) => {
    const query = { database_id: PROJECTS_DB };

    if (filterByCity) {
        query.filter = {
            property: 'City',
            select: {
                equals: filterByCity
            }
        };
    }
    
    const { results } = await notion.databases.query(query);
    console.log(results);
    return;
}