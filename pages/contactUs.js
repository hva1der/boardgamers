// Simple page with instruction on how to contact us and how to get to the venue

import styles from "@/styles/ContactUs.module.css";

export default function ContactUs() {
  return (
    <div className={styles.contactUsPage}>
      <h1>Where to find us</h1>
      {/* Container for map and address */}
      <div className={styles.mapAddress}>
        <img src="/IvoryMap.png" alt="Map to location"></img>
        <h3>The Ivory Hotel</h3>
        <p>2-4 Camphill Ave, Shawlands, Glasgow G41 3AY</p>
        <p>Every Monday from 7pm</p>
      </div>
    </div>
  );
}
