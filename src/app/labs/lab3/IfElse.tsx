export default function IfElse(){
	let true1 = true,
		false1 = false;

	return (
		<div id="wd-if-else">
			<h4>If Else</h4>
			{true1 && <p>true1</p>}
			{!false1 ? <p>!false1</p> : <p>false</p>}
			{!false1 && <p>not false1</p>}
			{false1 && <p>false1</p>}
			<hr />
		</div>	
	);
}

/*

a && element, if a true, element appeared
a || element, if a true, a appeared, if a false, element appeared

*/