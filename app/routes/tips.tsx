import type { MetaFunction } from "@remix-run/node";
// import "@styles/faq.css";
import data from "../data/cv_improvement_tips.json";
import { ExpansionCard, VStack } from "@navikt/ds-react";
import "@styles/tips.css";

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

export default function Tips() {
  return (
    <div className="tips">
      <VStack gap="2">
        {data.map((tip, index) => (
          <ExpansionCard
            defaultOpen={index === 1}
            aria-label={tip.tip_title}
            key={`card-${index}`}
          >
            <ExpansionCard.Header>
              <ExpansionCard.Title>{tip.tip_title}</ExpansionCard.Title>
            </ExpansionCard.Header>
            <ExpansionCard.Content>{tip.tip_description}</ExpansionCard.Content>
          </ExpansionCard>
        ))}
      </VStack>
    </div>
  );
}
