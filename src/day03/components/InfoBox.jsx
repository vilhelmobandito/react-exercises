function InfoBox({ title, children }) {
  return (
    <div className="info-box">
      <h4>{title}</h4>
      {children}
    </div>
  );
}

export default InfoBox;
