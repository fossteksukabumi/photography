import React from 'react';
import styles from './Footer.styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.topSection}>
          <div style={styles.brandSection}>
            <h2 style={styles.logo}>fotografi</h2>
            <p style={styles.tagline}>Capturing moments, preserving memories</p>
            <div style={styles.socialLinks}>
              <a href="https://instagram.com" style={styles.socialLink} aria-label="Instagram">
                <svg style={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://facebook.com" style={styles.socialLink} aria-label="Facebook">
                <svg style={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://twitter.com" style={styles.socialLink} aria-label="Twitter">
                <svg style={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="https://youtube.com" style={styles.socialLink} aria-label="YouTube">
                <svg style={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          <div style={styles.linksWrapper}>
            <div style={styles.linksColumn}>
              <h3 style={styles.columnTitle}>Quick Links</h3>
              <ul style={styles.linksList}>
                <li style={styles.linkItem}>
                  <a href="/" style={styles.link}>Home</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="/about" style={styles.link}>About Us</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="/photographers" style={styles.link}>Photographers</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="/gallery" style={styles.link}>Gallery</a>
                </li>
              </ul>
            </div>

            <div style={styles.linksColumn}>
              <h3 style={styles.columnTitle}>Photography</h3>
              <ul style={styles.linksList}>
                <li style={styles.linkItem}>
                  <a href="/portfolio" style={styles.link}>Portfolio</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="/workshops" style={styles.link}>Workshops</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="/equipment" style={styles.link}>Equipment</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="/techniques" style={styles.link}>Techniques</a>
                </li>
              </ul>
            </div>

            <div style={styles.linksColumn}>
              <h3 style={styles.columnTitle}>Contact</h3>
              <ul style={styles.linksList}>
                <li style={styles.contactItem}>
                  <svg style={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <span style={styles.contactText}>+62 812 3456 7890</span>
                </li>
                <li style={styles.contactItem}>
                  <svg style={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span style={styles.contactText}>info@fotografi.com</span>
                </li>
                <li style={styles.contactItem}>
                  <svg style={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span style={styles.contactText}>Sukabumi, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div style={styles.bottomSection}>
          <div style={styles.copyright}>
            &copy; {currentYear} Sukabumi Photography. All rights reserved.
          </div>
          <div style={styles.termsLinks}>
            <a href="/privacy" style={styles.termsLink}>Privacy Policy</a>
            <span style={styles.separator}>|</span>
            <a href="/terms" style={styles.termsLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;