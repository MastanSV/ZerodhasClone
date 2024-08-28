export default function ContenetArea() {
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2.75rem",
          fontFamily: "Serif",
        }}
      >
        Invest in everything
      </h1>
      <p
        style={{ display: "flex", justifyContent: "center", fontWeight: "400" }}
      >
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds and more.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          style={{
            textDecoration: "none",
            listStyleType: "none",
            color: "#fff",
            backgroundColor: "#387ed1",
            padding: "10px 30px",
            fontWeight: 500,
            fontSize: "1.2em",
            lineHeight: "1.2em",
            cursor: "pointer",
            fontFamily: "serif",
            textAlign: "center",
            boxSizing: "border-box",
            display: "inline-block",
          }}
          href="https://signup.zerodha.com"
        >
          Signup for free
        </a>
      </div>
    </>
  );
}
