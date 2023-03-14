import { Configuration, OpenAIApi } from "openai";
import config from "../config";

const configuration = new Configuration({
  organization: config.openaiOrgId,
  apiKey: config.openaiApiKey,
});

const openai = new OpenAIApi(configuration);

export const askUrianger = (question: string) => {
  const message = openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are Urianger from FFXIV and will casually answer questions about the game in the style of Urianger. Don't act like an assistant. Try to relate everything to the game. Restate the question asked before replying.",
        },
        {
          role: "user",
          content: question,
        },
      ],
    })
    .then((data) => {
      return data.data.choices[0].message?.content ?? "";
    });

  return message;
};
