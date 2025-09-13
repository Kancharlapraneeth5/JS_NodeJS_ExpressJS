import https from "https";

const PORT = 3500;

https
  .get("https://restful-booker.herokuapp.com/booking/1", (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk.toString(); // Convert Buffer to string
    });

    res.on("end", () => {
      console.log("Response received:");
      console.log(data);
    });
  })
  .on("error", (err) => {
    console.error("Error fetching data:", err.message);
  });
