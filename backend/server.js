const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors()); // Allow requests from your frontend

// OAuth2 URLs
const DISCORD_OAUTH_URL = 'https://discord.com/api/oauth2/token';
const DISCORD_API_URL = 'https://discord.com/api/users/@me/guilds';

// Redirect user to Discord login
app.get('/auth/discord', (req, res) => {
  const redirectUri = `https://discord.com/api/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
    process.env.DISCORD_REDIRECT_URI
  )}&response_type=code&scope=identify%20guilds`;
  res.redirect(redirectUri);
});

// Handle callback and verify membership
app.get('/callback', async (req, res) => {
  const { code } = req.query;

  try {
    // Exchange the code for an access token
    const tokenResponse = await axios.post(
      DISCORD_OAUTH_URL,
      new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.DISCORD_REDIRECT_URI,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const { access_token } = tokenResponse.data;

    // Fetch user's guilds
    const guildsResponse = await axios.get(DISCORD_API_URL, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const guilds = guildsResponse.data;

    // Check if user is in the specified guild
    const isMember = guilds.some(
      (guild) => guild.id === process.env.DISCORD_GUILD_ID
    );

    if (isMember) {
        res.redirect('http://localhost:5173/home'); // Redirect to your frontend home screen
      } else {
        res.redirect('http://localhost:5173/unauthorized'); // Redirect to an unauthorized page if you have one
      }
      
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong.');
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
