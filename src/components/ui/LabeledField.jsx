export const LabeledField = ({ label, children }) => (
  <label className="field">
    <span>{label}</span>
    {children}
  </label>
);