const express = require("express");
const bodyParser = require("body-parser");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors()); 


mailchimp.setConfig({
  apiKey: "3750986d37ea1fc594a903486b0ba8f8-us22",
  server: "us22" 
});

const listId = "97c5fd0b7d";

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
    });

    console.log("Successfully added to Mailchimp:", response);
    res.status(200).json({ message: "Successfully subscribed!" });
  } catch (error) {
    console.error("Error subscribing to Mailchimp:", error.response ? error.response.body : error);
    res.status(500).json({
      error: "Failed to subscribe. Please try again."
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

