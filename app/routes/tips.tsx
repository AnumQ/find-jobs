import type { MetaFunction } from "@remix-run/node";
// import "@styles/faq.css";
import data from "../data/cv_improvement_tips.json";
import { Box, ExpansionCard, Page, VStack } from "@navikt/ds-react";
import "@styles/tips.css";
import { getMeta } from "~/utils/utils";

export const meta: MetaFunction = () => getMeta("Tips for Job Seeker");

export default function Tips() {
  return (
    <Page.Block as="main" width="xl" className="tips">
      <Box padding={{ xs: "2", sm: "8", md: "10", lg: "12" }}>
        <VStack gap="2">
          {data.map((tip, index) => (
            <ExpansionCard
              defaultOpen={index === 0}
              aria-label={tip.tip_title}
              key={`card-${index}`}
            >
              <ExpansionCard.Header>
                <ExpansionCard.Title>{tip.tip_title}</ExpansionCard.Title>
              </ExpansionCard.Header>
              <ExpansionCard.Content>
                {tip.tip_description}
              </ExpansionCard.Content>
            </ExpansionCard>
          ))}
        </VStack>
      </Box>
    </Page.Block>
  );
}
