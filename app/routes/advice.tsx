import type { MetaFunction } from "@remix-run/node";
import "@styles/advice.css";

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
    <div className="advice">
      <h1>Advice for Job Seekers</h1>
      <p>
        Welcome to our Advice Section. Here you'll find tips and strategies to
        boost your job search, ace your interviews, and advance your career.
      </p>

      <article>
        <h2>Top Resume Tips to Stand Out</h2>
        <p>
          Your resume is your first impression on potential employers. Learn how
          to highlight your strengths, tailor your resume for different roles,
          and avoid common mistakes.
        </p>
        <p>
          Ensure your resume is clear, concise, and up to date. Use action verbs
          to describe your achievements and tailor your resume for each
          application to highlight the most relevant experience.
        </p>
      </article>

      <article>
        <h2>How to Prepare for an Interview</h2>
        <p>
          Preparation is key to interview success. Discover techniques to
          confidently answer common questions, make a lasting impression, and
          follow up effectively post-interview.
        </p>
        <p>
          Research the company and understand its culture, products, and the
          industry it operates in. Practice your responses to common interview
          questions with a friend or mentor.
        </p>
      </article>

      <article>
        <h2>Effective Networking Strategies</h2>
        <p>
          Building a professional network can open doors to opportunities.
          Uncover ways to network authentically, leverage social media, and
          create meaningful connections.
        </p>
        <p>
          Attend industry meetups, conferences, and seminars. Be proactive in
          your outreach on LinkedIn and other professional platforms. Offer
          value in your interactions, rather than seeking benefits only.
        </p>
      </article>

      <article>
        <h2>Negotiating Salaries: Do's and Don'ts</h2>
        <p>
          Negotiating your salary doesn't have to be daunting. Learn tactics to
          approach salary discussions with confidence and secure a compensation
          package that reflects your value.
        </p>
        <p>
          Do your research on industry standards, and approach the negotiation
          with a clear understanding of what you want and what you can
          realistically get. Be prepared to articulate your value and
          contributions.
        </p>
      </article>

      <article>
        <h2>Strategies for Career Advancement</h2>
        <p>
          Advancing in your career requires more than just hard work. Explore
          strategies for professional growth, seeking out mentorship, and
          embracing lifelong learning.
        </p>
        <p>
          Seek feedback regularly, take on new challenges, and be open to
          change. Consider additional certifications or courses that can enhance
          your skill set and make you a more valuable asset to your team.
        </p>
      </article>
    </div>
  );
}
