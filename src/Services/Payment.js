import BaseUrl from "../component/BaseUrl";

export const getPayments = async () => {
    try {
        const response = await BaseUrl.get("/api/Users/GetUserPaymentList");
        return response;
    } catch (err) {
        return err.response
    }
}