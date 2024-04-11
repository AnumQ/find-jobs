import type { MetaFunction } from "@remix-run/node";
// import "@styles/faq.css";
import data from "./../data/job_seeker_faq.json";
import {
  Accordion,
  BodyShort,
  Box,
  Heading,
  Page,
  VStack,
} from "@navikt/ds-react";
import { getMeta } from "~/utils/utils";

export const meta: MetaFunction = () => getMeta("FAQ for Job Seeker");

export default function FAQ() {
  return (
    <Page.Block as="main" className="faq" width="xl">
      <Box padding={{ xs: "4", sm: "8", md: "10", lg: "12" }}>
        <VStack gap="2">
          <Heading size="large" level="1">
            We are here to answer your questions!
          </Heading>
          <BodyShort>
            If you are wondering something related to your career, you might
            find our section about frequently asked questions useful. Check it
            out below.
          </BodyShort>
        </VStack>
        <Box padding="4"></Box>
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
      </Box>
    </Page.Block>
  );
}
