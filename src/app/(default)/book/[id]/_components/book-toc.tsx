"use client";

import { useMemo } from "react";

import { Group, Tree, type RenderTreeNodePayload } from "@mantine/core";
import { FaChevronDown } from "react-icons/fa";

import type { Book } from "@/lib/types/books";

const renderTreeNode = ({
  node,
  expanded,
  hasChildren,
  elementProps,
  tree,
}: RenderTreeNodePayload) => {
  return (
    <Group
      gap="xs"
      {...elementProps}
    >
      <div className="size-2 rounded-full bg-mtn-primary-filled" />
      <Group
        gap={8}
        onClick={() => tree.toggleExpanded(node.value)}
      >
        <span
          className={
            node.value.startsWith("topic")
              ? "text-lg font-semibold"
              : "font-normal"
          }
        >
          {node.label}
        </span>
        {hasChildren && (
          <FaChevronDown
            size={10}
            className="transition-all ease-in-out"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        )}
      </Group>
    </Group>
  );
};

export const formatTopicsTree = (data: Book["topics"]) => {
  return data.map((topic) => ({
    label: topic.title,
    value: `topic-${topic.title}`,
    children: topic.subTopics.map((subTopic) => ({
      label: subTopic.title,
      value: `subtopic-${subTopic.title}`,
    })),
  }));
};

export const BookTOC = ({ topics }: { topics: Book["topics"] }) => {
  const tableOfContents = useMemo(() => formatTopicsTree(topics), [topics]);
  return (
    <Tree
      data={tableOfContents}
      renderNode={renderTreeNode}
      levelOffset={20}
      expandOnClick={false}
    />
  );
};
