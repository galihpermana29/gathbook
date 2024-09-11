import type { Book } from "../types/books";

export const unparseTopicsToHTML = (
  topics: Book["topics"] | undefined,
): string => {
  let htmlString = "";
  if (!topics) return htmlString;

  for (const topic of topics) {
    // Create the <h1> tag for the topic
    htmlString += `<h1>${topic.title}</h1>\n`;

    for (const subTopic of topic.subTopics) {
      // Create the <h2> tag for the subtopic
      htmlString += `<h2>${subTopic.title}</h2>\n`;

      for (const content of subTopic.contents) {
        // Create the <p> tag for each paragraph in the contents
        htmlString += `<p>${content.description}</p>\n`;
      }
    }
  }

  return htmlString.trim(); // Remove any trailing newline characters
};
