export default {
  async getPlaces(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/gallery", {
          ...params,
        });

        return res.data.results;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};
