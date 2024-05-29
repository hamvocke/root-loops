<footer>
  <div class="glow"></div>
  <div class="footer-content glass-box">
    <span>Made by <a href="https://hamvocke.com">Ham</a></span>
    <span><a href="https://github.com/hamvocke/root-loops">Source Code</a></span>
    <span
      ><a href="https://github.com/hamvocke/root-loops/issues">Issues & Feature Requests</a></span
    >
    <span><a href="/help">Help</a></span>
  </div>
</footer>

<style>
  footer {
    position: relative;
    margin-top: 3rem;
  }

  .footer-content {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    box-shadow: 0 -0.25rem 1rem #0002;
    padding: 1rem 2rem;
    margin: auto;
    width: min(calc(100% - 2rem), 1200px);
    display: flex;
    justify-content: space-evenly;
  }

  .glow {
    background: linear-gradient(
      to right,
      var(--root-loops-ansi-bright-red),
      var(--root-loops-ansi-bright-green),
      var(--root-loops-ansi-bright-yellow),
      var(--root-loops-ansi-bright-blue),
      var(--root-loops-ansi-bright-magenta),
      var(--root-loops-ansi-bright-cyan)
    );
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    filter: blur(36px);
    opacity: 0.6;
    z-index: -1;
  }
</style>
