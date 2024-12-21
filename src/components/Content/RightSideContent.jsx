function RightSideContent({ children }) {
  return (
    <>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">{children}</div>
        </div>
      </div>
    </>
  );
}

export default RightSideContent;
