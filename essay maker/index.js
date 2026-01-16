const express = require("express");
const app = express();

app.get("/:id", async (req, res) => {
  try {
    const params = req.params.id;
    const myHeaders = new Headers();
    myHeaders.append(
      "X-goog-api-key",
      "AIzaSyCZjvqQ29FgxKqhi5vucAhi-ZqhyloRTHQ"
    );
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `write a essay on ${params} 100 lines`,
            },
          ],
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      requestOptions
    );

    const data = await response.json();
    console.log(data);
    res.json({ essay:data});
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => {
  console.log("server is runig at 5000");
});
