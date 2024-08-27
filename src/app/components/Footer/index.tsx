export default function Footer() {
  const ulStyle = { listStyleType: "none", paddingLeft: 0 };
  const columnDivStyle = { marginRight: "-300px" };
  const listStyle = { padding: "5px" };
  return (
    <>
      <div
        className="footer_container"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <div className="column" style={columnDivStyle}>
          <h1 style={{ paddingBottom: "0px" }}>Zerodha</h1>
          <p>
            @ 2010 - 2024, Zerodha Broking Ltd. <br /> All rights reserved.
          </p>
          <ul style={ulStyle}>
            <li style={listStyle}>X</li>
            <li style={listStyle}>Facebook</li>
            <li style={listStyle}>Instagram</li>
            <li style={listStyle}>LinkedIn</li>
            <li style={listStyle}>Youtube</li>
            <li style={listStyle}>Whatsapp</li>
            <li style={listStyle}>Telegram</li>
          </ul>
        </div>
        <div className="column" style={columnDivStyle}>
          <h3>Company</h3>

          <ul style={ulStyle}>
            <li style={listStyle}>About</li>
            <li style={listStyle}>Products</li>
            <li style={listStyle}>Pricing</li>
            <li style={listStyle}>Referral programme</li>
            <li style={listStyle}>Carrers</li>
            <li style={listStyle}>Zerodha.tec</li>
            <li style={listStyle}>Press & media</li>
          </ul>
        </div>
        <div className="column" style={columnDivStyle}>
          <h3>Support</h3>
          <ul style={ulStyle}>
            <li style={listStyle}>Contact us</li>
            <li style={listStyle}>Support portal</li>
            <li style={listStyle}>Z-Connect blog</li>
            <li style={listStyle}>List of charges</li>
            <li style={listStyle}>Downloads & resources</li>
            <li style={listStyle}>Videos</li>
            <li style={listStyle}>Market overview</li>
          </ul>
        </div>
        <div className="column">
          <h3>Account</h3>

          <ul style={ulStyle}>
            <li style={listStyle}>Open an accont</li>
            <li style={listStyle}>Fund transfer</li>
          </ul>
        </div>
      </div>
    </>
  );
}
