import { Message } from "@/types/message";
import path from "node:path";
import fs from "node:fs";
import { PaginationModel } from "@/types/pagination";

export const getAllMessagesAsync = async (): Promise<{
  messages: Message[];
  pagination: PaginationModel;
}> => {
  const filePath = path.join(process.cwd(), "public", "data", "messages.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return { messages: data.messages as Message[], pagination: data.pagination };
};
