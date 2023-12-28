import { BACKEND_URL } from "../constants";

export const useFetch = async(url: any, setData: any) => {
    await fetch(`${BACKEND_URL}${url}`)
      .then((res) => res.json())
      .then((data) => setData(data.message));
}