import { Client, GatewayIntentBits, REST, Routes } from "discord.js";
import "dotenv/config";
import askUrianger from "./commands/askUrianger";
import config from "./config";
import dotenv from "dotenv";
dotenv.config();

const rest = new REST({ version: "10" }).setToken(config.discordBotToken);

const commands = [
  {
    name: "ask",
    description: "Ask Urianger a question!",
    options: [
      {
        name: "question",
        description: "The question you want to ask Urianger",
        type: 3,
        required: true,
      },
    ],
  },
];
(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(config.discordClientId), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand() || interaction.commandName !== "ask")
    return;

  const question = interaction.options.getString("question");

  if (!question) return;
  console.log("question asked: " + question);
  await interaction.deferReply();

  const response = await askUrianger(question);
  const output = "**Q: " + question + "**\n" + response;

  await interaction.followUp(output);
});

client.login(config.discordBotToken);
