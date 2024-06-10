module.exports = {
    API_URL:
      process.env.NODE_ENV === "production"
        ? "https://skailama_assignment.netlify.app"
        : "http://localhost:8080",
  };
   
