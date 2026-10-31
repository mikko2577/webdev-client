export default function ImpliedReturn(){
	const multiply = (a: number, b: number) => a * b;
	const fourTimsFive = multiply(4, 5);
	console.log(fourTimsFive);
	const divide = (a: number, b: number) => a / b;
	const square = (n: number) => n * n;
	const squareNine = square(9);

	return (
		<div id="wd-implied-return">
			<h4>Implied return</h4>
			fourTimsFive = {fourTimsFive} <br />
			multiply(4, 5) = {multiply(4, 5)}
			<br />
			divide(20, 4) = {divide(20, 4)}
			<br />
			squareNine = {squareNine} <br />
			square(9)  = {square(9)}
			<hr />
		</div>
	);
}