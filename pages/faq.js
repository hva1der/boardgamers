// This page is just a simple list of questions and answers about the group.

import styles from "@/styles/FAQ.module.css";

export default function FAQ() {
  return (
    // a list of questions and answers
    <div className={styles.faqPage}>
      <h1>Frequently asked questions</h1>
      <div className={styles.faqContainer}>
        <ul>
          <li>
            <h3>Why can't I access the nominate and sign up pages?</h3>
            <p>Before you can access member's areas you have to register.</p>
          </li>
          <li>
            <h3>How do I register</h3>
            <p>
              Clicking the 'register' link under the login button on the top
              right of all pages will take you to the registration page.{" "}
            </p>
          </li>
          <li>
            <h3>Where can I find the BGG ID to register a new game?</h3>
            <p>
              Simply go to the BGG page for your desired game - the BGG ID will
              be in the URL to the BGG page, just before the name of the game.
              For example for Scythe the BGG ID is 169786, as seen here:
              https://boardgamegeek.com/boardgame/<u>169786</u>/scythe
            </p>
          </li>
          <li>
            <h3>
              I registered or nominated the wrong game, how can I remove it?
            </h3>
            <p>
              Please ask an Admin in the WhatsApp group. In the future there
              will be a ticketing system on the website.
            </p>
          </li>
          <li>
            <h3>Can I access this website on my mobile?</h3>
            <p>
              Yes, but it doesn't look very pretty at the moment. A responsive
              version is in the works.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
