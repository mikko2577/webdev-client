export default function TernaryOperator(){
	let loggedIn = true;
	// loggedIn = false;
	const hour = 9;
	const premium = false;

	return (
		<div id="wd-ternary-operator">
			<h4>Logged In</h4>
			{loggedIn ? <p>Welcome</p> : <p>Please login</p>}
			{premium ? <p>Premium</p> : <p>Free</p>}
			{hour < 12 ?
			( <p>good morning</p> ) : (<p>Good afternoon</p>)}
			<hr />
		</div>
	);
}