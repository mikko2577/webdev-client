export default function Destructing(){
	const person = {name: "John", age: 25};
	const {name , age } = person;
	const numbers = ["one", "twon", "three"];
	const [first, second, third] = numbers;
	const city = {cityName: "Boston", years: 396};
	const {cityName, years}:{cityName:string, years:number} = city;

	const foodie = {
		meat: "popeyes", 
		bread: "bagel factory", 
		tea: "matcha"
	};
	const {meat, bread, tea} = foodie;

	return (
		<div id="wd-destructing">
			<h2>Destructing</h2>
			<h3>Object Destructing</h3>
			const &#123; 
			name, age &#125; = &#123;
			name: "John", age: 25 &#125; 
			<br />
			const &#123; 
			meat, bread, tea &#125; = &#123;
			meat: "popeyes", bread: "bagel factory", tea: "matcha" &#125; 
			<br /><br />
			const &#123; 
			cityName, years &#125; = &#123;
			cityName: "Boston", years: 396 &#125; 

			<br /><br />
			name = {name}   <br />
			age = {age}
			<h3>Array Destructing</h3>
			const [first, second, third] = ["one","two","three"]
			<br /><br />
			first = {first} <br />
			second = {second} <br />
			third = {third}  
			
			<hr />
		</div>	
	);
}