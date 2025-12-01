import * as z from "zod";

const possibleTypes = ["Youtube", "Tweet", "Text", "PDF"] as const;

export const AddCard = z.object({
  title: z.string(),
  type: z.enum(possibleTypes),
  content: z.string(),
});
