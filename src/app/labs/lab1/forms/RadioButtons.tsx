export default function RadioButtons() {
  return (
    <>
      <h5 id="wd-radio-buttons">Radio buttons</h5>
      <label>Favorite movie genre:</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-comedy" />
      <label htmlFor="wd-radio-comedy">Comedy</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-drama" />
      <label htmlFor="wd-radio-drama">Drama</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-scifi" />
      <label htmlFor="wd-radio-scifi">Science Fiction</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
      <label htmlFor="wd-radio-fantasy">Fantasy</label>
      <br />
      <label>How often do you watch movies?</label>
      <br />
      <input type="radio" name="radio-frequency" id="wd-radio-daily" />
      <label htmlFor="wd-radio-daily">Daily</label>
      <br />
      <input type="radio" name="radio-frequency" id="wd-radio-weekly" />
      <label htmlFor="wd-radio-weekly">Weekly</label>
      <br />
      <input type="radio" name="radio-frequency" id="wd-radio-rarely" />
      <label htmlFor="wd-radio-rarely">Rarely</label>
      {/* Sibling label + htmlFor */}
      <h5> Label next to the input (uses htmlFor) </h5>
      <input type="radio" name="radio-beside" id="wd-radio-beside-yes" />
      <label htmlFor="wd-radio-beside-yes">Yes</label>
      <br />
      <input type="radio" name="radio-beside" id="wd-radio-beside-no" />
      <label htmlFor="wd-radio-beside-no">No</label>
      {/* Wrapping label — no htmlFor needed */}
      <h5> Label wrapping the input (no htmlFor needed) </h5>
     <label>
        <input type="radio" name="radio-wrap" /> Yes
      <br />
        <input type="radio" name="radio-wrap" /> No
      </label>

      {/* Separate placement still works with htmlFor */}
      <h5> Separate label and input (not side by side) </h5>
      <p>With htmlFor, the caption and control do not have to sit next to each other:</p>
      <label htmlFor="wd-radio-distant-a">Option A&emsp;</label>
       <input type="radio" name="radio-distant" id="wd-radio-distant-a" />
      <br />
      <label htmlFor="wd-radio-distant-a">Option B&emsp;</label>
      <input type="radio" name="radio-distant" id="wd-radio-distant-a" />
      {/* ... elsewhere in the layout ... */}
     
    </>
  );
}