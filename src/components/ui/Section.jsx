export const Section = ({ title, children }) => (
  <section className="section">
    {title && <h2>{title}</h2>}
    {children}
  </section>
);