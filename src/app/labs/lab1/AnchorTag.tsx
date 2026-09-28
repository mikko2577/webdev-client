export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      {/* Absolute — another site */}
      <h4>Absolute URL (another site)</h4>
      <a href="https://www.lipsum.com">lipsum.com</a>
      <br />
      <h4>Relative URL (same site)</h4>
      {/* Relative — same site */}
      <a href="/labs">Back to Labs</a>
      <br />
      <h4>Same-page fragment (hash)</h4>
      {/* Fragment — same page, scroll to id */}
      <a href="#wd-anchor-bottom">Jump to bottom</a>
      <br />
      <h4>Open in a new tab</h4>
      {/* New tab + safer external link */}
      <a
        href="https://github.com/jannunzi"
        target="_blank"
        rel="noreferrer"
      >
        GitHub (new tab)
      </a>
      <h4>my link</h4>
      <a id="wd-your-link" href="https://www.google.com/" target="_blank" rel="noreferrer">Hi Googler</a>
      <br />
      <h4>my GitHub</h4>
      <a id="wd-your-github" href="https://github.com/mikko2577/" target="_blank" rel="noreferrer">Hi Professor</a>
      <br />
      <h4>Absolute URL (reference docs)</h4>
      <a
        id="wd-ai-link"
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        target="_blank"
        rel="noreferrer"
      >
        MDN: table element
      </a>
      <br />
    </>
  );
}