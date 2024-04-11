import {
  BodyShort,
  Box,
  HStack,
  Heading,
  Page,
  VStack,
} from "@navikt/ds-react";
import type { MetaFunction } from "@remix-run/node";
import {
  Chat2Icon,
  HandshakeIcon,
  LightBulbIcon,
  PencilIcon,
  TrendUpIcon,
} from "@navikt/aksel-icons";

export const meta: MetaFunction = () => {
  return [
    { title: "Advice for Job Seeker | Find Your Next Job" },
    {
      name: "description",
      content:
        "Find you next job easily, search fast through jobs posted on linkedln, google etc.",
    },
  ];
};

export default function Advice() {
  return (
    <Page.Block as="main" width="xl">
      <Box padding={{ xs: "4", sm: "8", md: "10", lg: "12" }}>
        <VStack as="main" className="advice" gap="8">
          <VStack gap="4">
            <HStack align="center" gap="1">
              <Heading size="large" level="1">
                Advice for Job Seekers
              </Heading>
            </HStack>
            <BodyShort>
              Welcome to our Advice Section. Here you'll find tips and
              strategies to boost your job search, ace your interviews, and
              advance your career.
            </BodyShort>
          </VStack>

          <VStack gap="4" as="article">
            <HStack align="center" gap="1">
              <LightBulbIcon
                aria-hidden
                title="Top Resume Tips to Stand Out"
                fontSize={"1.5rem"}
              />
              <Heading size="medium" level="2">
                Top Resume Tips to Stand Out
              </Heading>
            </HStack>
            <VStack>
              <BodyShort>
                Your resume is your first impression on potential employers.
                Learn how to highlight your strengths, tailor your resume for
                different roles, and avoid common mistakes.
              </BodyShort>
              <BodyShort>
                Ensure your resume is clear, concise, and up to date. Use action
                verbs to describe your achievements and tailor your resume for
                each application to highlight the most relevant experience.
              </BodyShort>
            </VStack>
          </VStack>

          <VStack as="article" gap="4">
            <HStack align="center" gap="1">
              <PencilIcon
                aria-hidden
                title="How to Prepare for an Interview"
                fontSize="1.5rem"
              />
              <Heading size="medium" level="2">
                How to Prepare for an Interview
              </Heading>
            </HStack>
            <BodyShort>
              Preparation is key to interview success. Discover techniques to
              confidently answer common questions, make a lasting impression,
              and follow up effectively post-interview.
            </BodyShort>
            <BodyShort>
              Research the company and understand its culture, products, and the
              industry it operates in. Practice your responses to common
              interview questions with a friend or mentor.
            </BodyShort>
          </VStack>

          <VStack as="article" gap="4">
            <HStack align="center" gap="1">
              <HandshakeIcon
                aria-hidden
                title="Effective Networking Strategies"
                fontSize="1.5rem"
              />
              <Heading size="medium" level="2">
                Effective Networking Strategies
              </Heading>
            </HStack>
            <BodyShort>
              Building a professional network can open doors to opportunities.
              Uncover ways to network authentically, leverage social media, and
              create meaningful connections.
            </BodyShort>
            <BodyShort>
              Attend industry meetups, conferences, and seminars. Be proactive
              in your outreach on LinkedIn and other professional platforms.
              Offer value in your interactions, rather than seeking benefits
              only.
            </BodyShort>
          </VStack>
          <VStack as="article" gap="4">
            <HStack align="center" gap="1">
              <Chat2Icon
                aria-hidden
                title="Negotiating Salaries: Do's and Don'ts"
                fontSize="1.5rem"
              />
              <Heading size="medium" level="2">
                Negotiating Salaries: Do's and Don'ts
              </Heading>
            </HStack>
            <BodyShort>
              Negotiating your salary doesn't have to be daunting. Learn tactics
              to approach salary discussions with confidence and secure a
              compensation package that reflects your value.
            </BodyShort>
            <BodyShort>
              Do your research on industry standards, and approach the
              negotiation with a clear understanding of what you want and what
              you can realistically get. Be prepared to articulate your value
              and contributions.
            </BodyShort>
          </VStack>

          <VStack as="article" gap="4">
            <HStack align="center" gap="1">
              <TrendUpIcon
                aria-hidden
                title="Strategies for Career Advancement"
                fontSize="1.5rem"
              />
              <Heading size="medium" level="2">
                Strategies for Career Advancement
              </Heading>
            </HStack>
            <BodyShort>
              Advancing in your career requires more than just hard work.
              Explore strategies for professional growth, seeking out
              mentorship, and embracing lifelong learning.
            </BodyShort>
            <BodyShort>
              Seek feedback regularly, take on new challenges, and be open to
              change. Consider additional certifications or courses that can
              enhance your skill set and make you a more valuable asset to your
              team.
            </BodyShort>
          </VStack>
        </VStack>
      </Box>
    </Page.Block>
  );
}
