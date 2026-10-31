
import BoxDemo from "./BoxDemo";

import BoxModelDemo from "./BoxModelDemo";
import CardDemo from "./CardDemo";
import NestingOrderDemo from "./NestingOrderDemo";



export default function children(){
	return (
		<div id="wd-children">
			<h2>Children</h2>
			
			<BoxDemo />
			
			<BoxModelDemo />
			<CardDemo />
			<NestingOrderDemo />
		</div>
	)
}