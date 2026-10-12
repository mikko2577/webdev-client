import "./index.css";
import ForegroundColors from "./ForegroundColors.tsx";
import BackgroundColors from "./BackgroundColors.tsx";
import Borders from "./Borders.tsx";
import Padding from "./Padding.tsx";
import Margins from "./Margins.tsx";
import BoxModel from "./BoxModel.tsx";
import Corners from "./Corners.tsx";
import Dimensions from "./Dimensions.tsx";
import Display from "./Display.tsx";
import Positions from "./Positions.tsx";
import Zindex from "./Zindex.tsx";
import Float from "./Float.tsx";
import GridLayout from "./GridLayout.tsx";
import Flex from "./Flex.tsx";
import MediaQueriesDemo from "./MediaQueriesDemo.tsx";
import ReactIconsSampler from "./ReactIconsSampler.tsx";

export default function Lab2(){
	return(

		<div>
			{/*can only accept one div*/}
			<div id="wd-lab2">
				<h2>Lab 2 - Casacading Style Sheets</h2>
				<h3>Styling with the STYLE arrtibute</h3>
				<p>
					 Style attribute allows configuring look and feel right on the
	        		 element. Although it&apos;s very convenient it is considered bad
	        		 practice and you should avoid using the style attribute
				</p>
				<p id="wd-ai-style-attr" style={{ backgroundColor: "#4B0082", color: "white" }}>
					 The same style attribute can set any colors you like, such as this
					 purple background with white text.
				</p>
				<h3>My STYLE arrtibute</h3>
				{/* inline priority */}
				<p style={{ backgroundColor: "green", color: "yellow" }}>
					 Style attribute allows configuring look and feel right on the
	        		 element. Although it&apos;s very convenient it is considered bad
	        		 practice and you should avoid using the style attribute
				</p>
				{/* tag level priority*/}
				<p>hellocss</p>
				<p id="wd-id-selector-1">
				    Instead of changing the look and feel of all the
				    elements of the same name, e.g., P, we can refer to a
				    specific element by its ID
				</p>
				<p id="wd-id-selector-2">
				    Here&apos;s another paragraph using a different ID and a
				    different look and feel
				</p>
				<p id="wd-ai-id-selector">
				    Here&apos;s a sample paragraph added with its own ID and a
				    different look and feel
				</p>
				<p id="wd-id-selector-3">
				    Here&apos;s another paragraph using a different ID and a
				    different look and feel
				</p>
			</div>

			<div id="wd-css-class-selectors">
			  <h3>Class selectors</h3>
			  <p className="wd-class-selector" id="wd-ai-id-selector">
			    Instead of using IDs to refer to elements, you can use an
			    element&apos;s CLASS attribute
			  </p>
			  <h4 className="wd-class-selector">
			    This heading has same style as paragraph above
			  </h4>
			  <p className="wd-ai-class-selector">
			    Here&apos;s a sample class selector paragraph with its own
			    distinct look and feel
			  </p>
			  <h4 className="wd-ai-class-selector">
			    This heading has same style as the sample paragraph above
			  </h4>
			</div>

			<div>
				<h4 className="wd-your-class">What am I doing right now?</h4>
				<p className="wd-your-class">
					I am drinking Olipop.
				</p>
			</div>

			<p className="wd-selector-3">what about outside parent</p>

			<div id="wd-css-document-structure">
			  <div className="wd-selector-1">
			    <h3>Document structure selectors</h3>
			    <div className="wd-selector-2">
			      Selectors can be combined to refer elements in particular
			      places in the document
			      <p className="wd-selector-3">
			        This paragraph&apos;s red background is referenced as
			        <br />
			        .selector-2 .selector3
			        <br />
			        meaning the descendant of some ancestor.
			        <br />
			        <span className="wd-selector-4">
			          Whereas this span is a direct child of its parent
			        </span>
			        <br />
			        You can combine these relationships to create specific
			        styles depending on the document structure
			        <br />
			        <span className="wd-ai-selector-5">
			          This span is a sample descendant selector nested here
			        </span>
			      </p>

			      <p className="wd-your-selector">
			      	My child selector.
			      </p>
			      <ol className="wd-your-rule">
			      	{/*direct child of ol*/}
			      	<li className="wd-your-rule-outer">
			      		Hot dog
			      	</li>
			      	<ul>
			      		{/*direct child of ul*/}
			      		<li className="wd-your-rule-outer" id="wd-your-rule-inner">	
			      			sausage
			      		</li>
			      	</ul>
			      </ol>
			      <p id="wd-ai-cascade" className="wd-ai-cascade">
			        This paragraph tests cascade order: tag, class, and ID
			        rules all set a different background color here
			      </p>
			    </div>
			    <ForegroundColors></ForegroundColors>
			    <BackgroundColors></BackgroundColors>
			    <Borders/>
			    <Padding/>
			    <Margins/>
			    <BoxModel/>
			    <Corners/>
			    <Dimensions/>
			    <Display/>
			    <Positions/>
			    <Zindex/>
			    <Float/>
			    <GridLayout/>
			    <Flex/>
			    <MediaQueriesDemo/>
			    <ReactIconsSampler/>
			  </div>
			</div>
			<p>
			  <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
			</p>
		</div>
	);
}
/*
JsX Javascript netscape
TsX Typescript microsoft

padding inner distant 
border middle distant
margin outside distant
*/