function setParams(config) {
  const params = config.params || {};
  config.params = Object.assign(params, {
    apikey: process.env.VUE_APP_API_KEY,
    plot: "full",
  });
  return config;
}

function getResponse(resp) {
  return resp.data;
}

export default function (axios) {
  axios.interceptors.request.use(setParams);

  axios.interceptors.response.use(getResponse);
}
