import axios from "axios";

export default {
  // Gets all books
  getClients: function() {
    return axios.get("/api/about");
  },
  // Gets the book with the given id
  getClient: function(id) {
    return axios.get("/api/about/" + id);
  },
  // Deletes the book with the given id
  deleteClient: function(id) {
    return axios.delete("/api/about/" + id);
  },
  // Saves a book to the database
  saveClient: function(clientData) {
    return axios.post("/api/about", clientData);
  }

  
};
