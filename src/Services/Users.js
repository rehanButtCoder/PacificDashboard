import BaseUrl from "../component/BaseUrl";

export const get = async () => {
    try {
        const response = await BaseUrl.get("/api/Account/GetAllInHouseUsers");
        return response;
    } catch (err) {
        return err.response
    }
}
