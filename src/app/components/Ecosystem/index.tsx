export default function Ecosystem() {
  return (
    <div className="ecosystem-container">
      <div className="ecosystem-container" style={{ display: "flex" }}>
        <div style={{ display: "block" }}>
          <h1>Trust with confidence</h1>
          <div className="firstRow">
            <h2>Customer-first always</h2>
            <p>
              That's why 1.5+ crore customers trust Zerodha with <br /> ₹4.5+
              lakh crores of equity investments and contribute to <br /> 15% of
              daily retail exchange volumes in India.
            </p>
          </div>
          <div className="second-row">
            <h2>No spam or gimmicks</h2>
            <p>
              No gimmicks, spam, "gamification", or annoying push <br />
              notifications. High quality apps that you use at your <br /> pace,
              the way you like.
            </p>
          </div>
          <div className="third-row">
            <h2>The Zerodha universe</h2>
            <p>
              Not just an app, but a whole ecosystem. Our investments <br /> in
              30+ fintech startups offer you tailored services <br /> specific
              to your needs.
            </p>
          </div>
          <div className="fourth-row">
            <h2>Do better with money</h2>
            <p>
              With initiatives like Nudge and Kill Switch, we don't just <br />
              facilitate transactions, but actively help you do better <br />
              with your money.
            </p>
          </div>
        </div>

        <div>
          <img
            style={{
              maxWidth: "75%",
              maxHeight: "100%",
              margin: "30px 0 0 0 ",
            }}
            src="https://zerodha.com/static/images/ecosystem.png"
            alt="Ecosystem image."
          />
        </div>
      </div>
    </div>
  );
}
