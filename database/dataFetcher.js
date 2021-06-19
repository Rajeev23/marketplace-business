import fetch from "isomorphic-fetch";
// import axios from "axios";



const awesomeFetch = async (url, ctx = {}) => {
    const { req } = ctx;
    const options = { credentials: "include" };
    req ? (options["headers"] = { cookie: req.headers["cookie"] }) : null;
    return fetch(createFullURL(url, ctx), options);
  };


  export default class {
    static createFullUrl(url, ctx) {
        return createFullURL(url, ctx);
    }


  static async getContactList(ctx = {}) {
    let data = {};
    try {
      const res = await awesomeFetch(`api/contactus/verify`, ctx);
      data = await res.json();
    } catch (e) {
      captureException(e, {});
    }
    return data;
  }
}