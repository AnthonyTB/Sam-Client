export const Helpers = {
  GenericAPICall(APIEndpoint: string, Method: string) {
    return fetch(`${APIEndpoint}`, {
      method: Method,
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
      !res.ok ? res.json().then((error) => Promise.reject(error)) : res.json()
    );
  },
};
