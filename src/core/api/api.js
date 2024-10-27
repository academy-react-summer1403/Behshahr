import http from "../interceptor";
export const getApi = async ({ path, params }) => {
  try {
    const response = await http.get(`${path}`, params);
    return response;
  } catch (error) {
    return error;
  }
};

export const postApi = async ({ path, body }) => {
  try {
    const response = await http.post(`${path}`, body);
    return response;
  } catch (error) {
    return error;
  }
};
