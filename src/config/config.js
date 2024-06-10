module.exports = {
    API_URL:
      process.env.NODE_ENV === "production"
        ? "https://skilamassignment.netlify.app/"
        : "http://localhost:8080",
  };
   