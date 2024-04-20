import { API_URL } from "@/constants/Api"
import { Sensor } from "./interfaces/sensor"

export const fetchData = async () => {
    const data = await fetch(`${API_URL}/`);
    return await data.json();
}