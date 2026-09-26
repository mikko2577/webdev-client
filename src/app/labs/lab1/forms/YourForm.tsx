//give out, main file, 
export default function YourForm(){
	return(
		<form id="wd-your-form">
			<h4>my form</h4>
			{/*inside the <>, for computer*/}
			<label htmlFor="wd-yourform-first">first name</label>
			{/*outside the <>, for humen*/}
			<input id="wd-yourform-first"></input>
			<br />
			<label htmlFor="wd-yourform-last">last name</label>
			<input id="wd-yourform-last"></input>
			<br />
			<label htmlFor="wd-yourform-password">password</label>
			<input id="wd-yourform-password" type="password"></input>
			<br />
			{/* capital for my function, lowercase for build in*/}
			<textarea defaultValue="best instructor ever"
				rows={5} cols={20}></textarea>
			<br />
			<h4>radio buttons</h4>
			<label htmlFor="wd-yourform-freshmant">Freshman</label>
			<input id="wd-yourform-freshman" type="radio" name="answer1"></input>
			<br />
			<label htmlFor="wd-yourform-Sophomore">Sophomore</label>
			<input id="wd-yourform-Sophomore" type="radio" name="answer1"></input>
			<br />
			<label htmlFor="wd-yourform-Junior">Junior</label>
			<input id="wd-yourform-Junior" type="radio" name="answer1"></input>
			<br />
			<label htmlFor="wd-yourform-Senior">Senior</label>
			<input id="wd-yourform-Senior" type="radio" name="answer1"></input>
			<br />
			<label htmlFor="wd-yourform-Graduate">Graduate</label>
			<input id="wd-yourform-Graduate" type="radio" name="answer1"></input>
			<br />
			<h4>choose one</h4>
			<label htmlFor="wd-yourform-full-time">full-time</label>
			<input id="wd-yourform-full-time" type="radio" name="answer2"></input>
			<br />
			<label htmlFor="wd-yourform-part-time or on-campus">part-time or on-campus</label>
			<input id="wd-yourform-part-time or on-campus" type="radio" name="answer2"></input>
			<br />
			<label htmlFor="wd-yourform-commuter">commuter</label>
			<input id="wd-yourform-commuter" type="radio" name="answer2"></input>
			<br />
			<h4>check boxes</h4>
			<label htmlFor="wd-yourform-html">html</label>
			<input id="wd-yourform-html" type="checkbox" name="answer3"></input>
			<br />
			<label htmlFor="wd-yourform-css">css</label>
			<input id="wd-yourform-css" type="checkbox" name="answer3"></input>
			<br />
			<label htmlFor="wd-yourform-javascript">javascript</label>
			<input id="wd-yourform-javascript" type="checkbox" name="answer3"></input>
			<br />
			<h4>drop downs</h4>
			<select id="wd-yourform-dropdowns">
				{/*between value use "-" instead of space*/}
				{/*selected*/}
				<option value="CS">CS</option>
				<option value="ITC">ITC</option>
				<option value="DS">DS</option>
			</select>
			<br />
			<br />
			<select multiple id="wd-yourform-dropdowns" defaultValue={["CS5610","CS5008"]}>
				<option value="CS5610">CS5610</option>
				<option value="CS5008">CS5008</option>
				<option value="CS5520">CS5520</option>
				<option value="CS5004">CS5004</option>
			</select>
			<h4>info</h4>
			<label htmlFor="wd-yourform-last">email</label>
			<input id="wd-yourform-last" type="email" placeholder="abc@gmail.com"></input>
			<br />
			<label htmlFor="wd-yourform-last">number</label>
			<input id="wd-yourform-last" type="number" placeholder="123456789"></input>
			<br />
			<label htmlFor="wd-yourform-last">date</label>
			<input id="wd-yourform-last" type="date" ></input>
			<br />
			<label htmlFor="wd-yourform-last">range</label>
			<input id="wd-yourform-last" type="range" min="0" max="10000"></input>
			<br />
			<br />
			<button id="wd-yourform-ok" type="submit">submit</button>
			{/*0.5 &thinsp; one &nbsp; two &ensp; four &emsp;*/}
			&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
			<button id="wd-yourform-ok" type="button">cancel</button>
		</form>
	);
}