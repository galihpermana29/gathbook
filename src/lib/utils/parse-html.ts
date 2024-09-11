import { parseDocument } from "htmlparser2";

// Helper function to extract text content, preserving HTML structure
const getInnerHTML = (node: any): string => {
  if (node.type === "text") {
    return (node as Text).data.trim();
  } else if (node.type === "tag") {
    const element = node;
    const innerHTML = element.children.map(getInnerHTML).join("");
    return `<${element.name}>${innerHTML}</${element.name}>`;
  }
  return "";
};

export const parseHTML = (html: string) => {
  const document = parseDocument(html);
  const nodes = document.children;

  let currentTopic: any = { title: "", subTopics: [] };
  let currentSubTopic: any = { title: "", contents: [] };
  const topics: any[] = [];

  for (const node of nodes) {
    if (node.type === "tag") {
      const element = node;
      const tagName = element.name;

      if (tagName === "h1") {
        currentTopic = {
          title: getInnerHTML(element.children[0] || ""),
          subTopics: [],
        };
        topics.push(currentTopic);
        currentSubTopic = { title: "", contents: [] }; // Reset subtopic
      } else if (/h[2-6]/.test(tagName)) {
        currentSubTopic = {
          title: getInnerHTML(element.children[0] || ""),
          contents: [],
        };
        currentTopic.subTopics.push(currentSubTopic);
      } else if (tagName === "p") {
        const description = element.children.map(getInnerHTML).join(" ").trim();
        currentSubTopic.contents.push({ description });
      }
    }
  }

  return topics;
};
