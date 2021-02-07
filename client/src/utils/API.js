import axios from "axios";

export default {
  // Gets all posts
  getSms: function() {
    return axios.get("/api/sms");
  },
  // Gets the post with the given id
  // getPost: function(id) {
  //   return axios.get("/api/sms/" + id);
  // },
  // Deletes the post with the given id
  deleteSms: function(id) {
    return axios.delete("/api/sms/" + id);
  },
  // Saves a post to the database
  saveSms: function(smsData) {
    console.log(smsData)
    return axios.post("/api/sms", smsData);
  },
  // Saves a book to the database
  saveArticle: function (articleData) {
    console.log(articleData)
    return axios.post("/api/article", articleData);
  },
  // Get the saved a books from the database
  savedArticle: function () {
    return axios.get("/api/article").then(result => result.data);
  }
};
