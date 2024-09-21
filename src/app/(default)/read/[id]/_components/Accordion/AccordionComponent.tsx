"use client";

import { Accordion } from "@mantine/core";

import { AccordionComponentProps } from "../ReadPageContainer";
import classes from "./Accordion.module.css";
import AccordionContent from "./AccordionContent";
import AccordionLabel from "./AccordionLabel";

const AccordionComponent = ({ item }: AccordionComponentProps) => {
  return (
    <Accordion
      transitionDuration={400}
      variant="contained"
      classNames={{
        control: classes.control,
        item: classes.item,
      }}
    >
      {item.subTopics.map((subItem, idx) => (
        <Accordion.Item
          key={subItem.title}
          value={subItem.title}
        >
          <Accordion.Control>
            <AccordionLabel
              title={subItem.title}
              chapter={`${idx + 1}/${item.subTopics.length}`}
            />
          </Accordion.Control>
          <Accordion.Panel>
            <AccordionContent contents={subItem.contents} />
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
