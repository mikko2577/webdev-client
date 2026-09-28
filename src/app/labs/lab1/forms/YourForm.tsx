//give out, main file,
export default function YourForm() {
	return (
		<form id="wd-your-form">
			<h4>my form</h4>
			{/*inside the <>, for computer*/}
			<label htmlFor="wd-yourform-first">first name</label>
			{/*outside the <>, for humen*/}
			<input id="wd-yourform-first" type="text" placeholder="Jane" />
			<br />
			<label htmlFor="wd-yourform-last">last name</label>
			<input id="wd-yourform-last" type="text" placeholder="Doe" />
			<br />
			<label htmlFor="wd-yourform-username">username</label>
			<input id="wd-yourform-username" type="text" placeholder="jane.doe" />
			<br />
			<label htmlFor="wd-yourform-password">password</label>
			<input id="wd-yourform-password" type="password" placeholder="sample password" />
			<br />
			{/* capital for my function, lowercase for build in*/}
			<label htmlFor="wd-yourform-bio">bio</label>
			<br />
			<textarea
				id="wd-yourform-bio"
				rows={5}
				cols={20}
				placeholder="Jane Doe, sample bio - replace me"
			></textarea>
			<br />

			<h4>class standing</h4>
			{/*one name = one exclusive group*/}
			<label htmlFor="wd-yourform-freshman">Freshman</label>
			<input id="wd-yourform-freshman" type="radio" name="wd-yourform-standing" />
			<br />
			<label htmlFor="wd-yourform-sophomore">Sophomore</label>
			<input id="wd-yourform-sophomore" type="radio" name="wd-yourform-standing" />
			<br />
			<label htmlFor="wd-yourform-junior">Junior</label>
			<input id="wd-yourform-junior" type="radio" name="wd-yourform-standing" />
			<br />
			<label htmlFor="wd-yourform-senior">Senior</label>
			<input id="wd-yourform-senior" type="radio" name="wd-yourform-standing" />
			<br />
			<label htmlFor="wd-yourform-graduate">Graduate</label>
			<input id="wd-yourform-graduate" type="radio" name="wd-yourform-standing" defaultChecked />
			<br />

			<h4>enrollment</h4>
			{/*second group, different name so it is exclusive on its own*/}
			<label htmlFor="wd-yourform-full-time">full-time</label>
			<input id="wd-yourform-full-time" type="radio" name="wd-yourform-enrollment" defaultChecked />
			<br />
			<label htmlFor="wd-yourform-part-time">part-time</label>
			<input id="wd-yourform-part-time" type="radio" name="wd-yourform-enrollment" />
			<br />
			<label htmlFor="wd-yourform-co-op">co-op</label>
			<input id="wd-yourform-co-op" type="radio" name="wd-yourform-enrollment" />
			<br />

			<h4>check boxes</h4>
			{/*checkboxes are independent, you can pick many*/}
			<label htmlFor="wd-yourform-html">html</label>
			<input id="wd-yourform-html" type="checkbox" name="wd-yourform-html" defaultChecked />
			<br />
			<label htmlFor="wd-yourform-css">css</label>
			<input id="wd-yourform-css" type="checkbox" name="wd-yourform-css" />
			<br />
			<label htmlFor="wd-yourform-javascript">javascript</label>
			<input id="wd-yourform-javascript" type="checkbox" name="wd-yourform-javascript" />
			<br />
			<label htmlFor="wd-yourform-react">react</label>
			<input id="wd-yourform-react" type="checkbox" name="wd-yourform-react" />
			<br />

			<h4>drop downs</h4>
			<label htmlFor="wd-yourform-major">major</label>
			<br />
			{/*between value use "-" instead of space*/}
			{/*defaultValue instead of selected*/}
			<select id="wd-yourform-major" defaultValue="CS">
				<option value="CS">CS</option>
				<option value="ITC">ITC</option>
				<option value="DS">DS</option>
			</select>
			<br />
			<br />
			<label htmlFor="wd-yourform-courses">courses (pick more than one)</label>
			<br />
			<select
				multiple
				id="wd-yourform-courses"
				defaultValue={["CS5610", "CS5008"]}
			>
				<option value="CS5610">CS5610</option>
				<option value="CS5008">CS5008</option>
				<option value="CS5520">CS5520</option>
				<option value="CS5004">CS5004</option>
			</select>
			<br />

			<h4>info</h4>
			<label htmlFor="wd-yourform-email">email</label>
			<input id="wd-yourform-email" type="email" placeholder="jane@university.edu" />
			<br />
			<label htmlFor="wd-yourform-grad-year">graduation year</label>
			<input
				id="wd-yourform-grad-year"
				type="number"
				min="2024"
				max="2030"
				placeholder="2026"
			/>
			<br />
			<label htmlFor="wd-yourform-start-date">start date</label>
			<input id="wd-yourform-start-date" type="date" defaultValue="2024-01-08" />
			<br />
			<label htmlFor="wd-yourform-rating">rating (0 to 10)</label>
			<input id="wd-yourform-rating" type="range" min="0" max="10" defaultValue="5" />
			<br />
			<br />

			<button id="wd-yourform-save" type="submit">Save</button>
			{/*0.5 &thinsp; one &nbsp; two &ensp; four &emsp;*/}
			&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
			<button id="wd-yourform-cancel" type="button">Cancel</button>
		</form>
	);
}
