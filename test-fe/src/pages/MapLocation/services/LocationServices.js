import { get } from "../untils/request"

export const getLocation = async () => {
    const result = await get('/locations');
    return result;
} 