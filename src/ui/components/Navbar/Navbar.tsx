export default function Navbar() {
  return (
    <nav
      className="mynavbar"
      style={{
        border: "1px solid #ccc",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "stretch",
          backgroundColor: "grey",
        }}
      >
        <div
          className="appname"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px",
            paddingLeft: "100px",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "25px",
            }}
            href="https://zerodha.com/"
          >
            Demo Application
          </a>
        </div>

        <div
          className="appoptions"
          style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "flex-end",
            paddingRight: "100px",
            fontSize: "25px",
          }}
        >
          <ul
            className="appnavbaroptions"
            style={{
              listStyleType: "none",
              display: "flex",
              gap: "25px",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <li>
              <a
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  padding: "20px",
                }}
                href="https://signup.zerodha.com"
              >
                Signup
              </a>
            </li>
            <li>
              <a
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  padding: "15px",
                }}
                href="https://zerodha.com/about/"
              >
                About
              </a>
            </li>
            <li>
              <a
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  padding: "15px",
                }}
                href="https://zerodha.com/products/"
              >
                Products
              </a>
            </li>
            <li>
              <a
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  padding: "15px",
                }}
                href="https://zerodha.com/pricing/"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  padding: "15px",
                }}
                href="https://support.zerodha.com"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
