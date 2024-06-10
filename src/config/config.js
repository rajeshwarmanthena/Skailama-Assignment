module.exports = {
    API_URL:
      process.env.NODE_ENV === "production"
        ? "https://skailamaassignment1.netlify.app"
        : "http://localhost:8080",
  };
   
