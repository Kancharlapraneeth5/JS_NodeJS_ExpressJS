import https from "https";

const agent = new https.Agent({
  keepAlive: true,
});

for (let i = 0; i < 5; i++) {
  https.get(
    {
      hostname: "restful-booker.herokuapp.com",
      path: "/booking/2",
      agent: agent,
      headers: {
        Accept: "application/json",
      },
    },
    (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk.toString();
      });

      res.on("end", () => {
        console.log(`Response ${i + 1} received:`);
        console.log(data);
      });
    }
  );
}
