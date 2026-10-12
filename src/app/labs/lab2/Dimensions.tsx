export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-dimension-ai">
          This box has a declared width of 120px and height of 60px, so this
          long sentence should visibly overflow or wrap within those fixed
          dimensions instead of resizing the box.
        </div>
      </div>
      <div className="wd-test-dimensions">
        My faviorate anime is Crayon Shin-chan.
      </div>
    </div>
  );
}
//width + height:fixed size