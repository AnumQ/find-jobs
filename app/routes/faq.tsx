import type { MetaFunction } from "@remix-run/node";
// import "@styles/faq.css";
import data from "./../data/job_seeker_faq.json";
import { Accordion, VStack } from "@navikt/ds-react";
import "@styles/faq.css";

export const meta: MetaFunction = () => {
  return [
    { title: "FAQ for Job Seeker | Find Your Next Job" },
    {
      name: "description",
      content:
        "Find you next job easily, search fast through jobs posted on linkedln, google etc.",
    },
  ];
};

export default function FAQ() {
  return (
    <div className="faq">
      <VStack gap="2">
        <Accordion>
          {data.map((faq, index) => (
            <Accordion.Item
              key={`$faq-item-${index}`}
              defaultOpen={index === 1}
            >
              <Accordion.Header>{faq.faq_title}</Accordion.Header>
              <Accordion.Content>{faq.faq_description}</Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </VStack>
    </div>
  );
}
