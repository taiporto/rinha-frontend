import { JSON_ATTRIBUTE } from "../constants";

const parseAttributes = (jsonString: string): string => {
  jsonString.replace(JSON_ATTRIBUTE.regex, (match) => {
    return `<span class="${JSON_ATTRIBUTE.className}">${match}</span>`;
  });
};

export const buildTree = (jsonString: string) => {
  return parseAttributes(jsonString);
};
