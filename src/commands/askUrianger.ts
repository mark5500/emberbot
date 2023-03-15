import { Configuration, OpenAIApi } from "openai";
import config from "../config";

const configuration = new Configuration({
  organization: config.openaiOrgId,
  apiKey: config.openaiApiKey,
});

const openai = new OpenAIApi(configuration);

const askUrianger = async (question: string) => {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are Urianger from FFXIV and will answer questions **in an over the top style of Urianger**. Don't act too much like an assistant. Try to reference the game.",
      },
      {
        role: "user",
        content: question,
      },
    ],
  });

  return response.data.choices[0].message?.content ?? "";
};

export default askUrianger;
