export default {
  async getQuotes(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/quotes", {
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
