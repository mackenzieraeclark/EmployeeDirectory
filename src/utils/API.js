import axios from "axios";

export default {
  // Grabbing users from random user API
  randomUsers: function () {
    return axios.get("https://randomuser.me/api/?results=50&nat=us");
  },
};