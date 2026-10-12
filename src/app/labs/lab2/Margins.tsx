export default function Margins() {
  return (
    <div id="wd-css-margins">
      <h2>Margins</h2>
      <div className="wd-margin-bottom wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        Margin bottom
      </div>
      <div className="wd-margin-right-left wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
        Margin left right
      </div>
      <div className="wd-margin-all-around wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
        Margin all around
      </div>
      <div className="wd-bg-color-gray wd-padding-fat wd-border-solid wd-margin-all-around">
        <h1 className="wd-bg-color-blue">
          my test box</h1>
      </div>

      <div className="wd-bg-color-gray wd-padding-fat wd-border-solid">
        <h1 className="wd-bg-color-blue">
          my 2nd test box</h1>
      </div>

      <div className="wd-bg-color-gray wd-padding-fat wd-border-solid">
        <h1 className="wd-bg-color-blue">
          my 3rd test box</h1>
      </div>

      <div className="wd-box-newstyle-box">
        <h1 className="wd-bg-color-yellow">
          one more box</h1>
      </div>
    </div>
  );
}