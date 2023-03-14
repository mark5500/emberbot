import assert from "assert";

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_ORG_ID = process.env.OPENAI_ORG_ID;

assert.ok(DISCORD_BOT_TOKEN, "DISCORD_BOT_TOKEN is required");
assert.ok(DISCORD_CLIENT_ID, "DISCORD_CLIENT_ID is required");
assert.ok(OPENAI_API_KEY, "OPENAI_API_KEY is required");
assert.ok(OPENAI_ORG_ID, "OPENAI_ORG_ID is required");

const config = {
  discordBotToken: DISCORD_BOT_TOKEN,
  discordClientId: DISCORD_CLIENT_ID,
  openaiApiKey: OPENAI_API_KEY,
  openaiOrgId: OPENAI_ORG_ID,
};

export default config;
