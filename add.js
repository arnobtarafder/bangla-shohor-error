<div class="accordion" id="accordionExample">
<div class="accordion-item">
  <h2 class="accordion-header" id="headingOne">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        1. How does javascript work?
    </button>
  </h2>
  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="headingTwo">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        2. What does javascript event loop do?
    </button>
  </h2>
  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="headingThree">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        3. What is the differences between Local storage vs Session storage?                    </button>
  </h2>
  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
</div>
</div>




/* body {
	width: 100%;
	height: 100%;
	margin:0;
	perspective: 900;
	overflow-y: scroll;
	background-color: #f6483b;
	font-family: "Titillium Web", sans-serif;
	color: rgba(48, 69, 92, 0.8);
}
.accordion-menu {
	display: inline-block;
    position: relative;
	left: 50%;
	margin: 150px 0;
	transform: translate(-50%, 0);
	max-width: 300px;
    padding: 10px 20px 20px;
	border-radius: 5px;
}
h2 {
	font-size: 18px;
	line-height: 34px;
	font-weight: 500;
	letter-spacing: 1px;
	display: block;
	margin: 0;
    cursor: pointer;
    color: #6c6c6a;
}
p {
	color: rgba(48, 69, 92, 0.8);
	font-size: 15px;
	line-height: 26px;
	letter-spacing: 1px;
	position: relative;
	overflow: hidden;
	max-height: 800px;
	opacity: 1;
	transform: translate(0, 0);
	margin-top: 14px;
	z-index: 2;
}
ul {
	list-style: none;
	perspective: 900;
	padding: 0 20px 10px;
    margin: 0;
    background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 
	0 2px 2px 0 rgba(255, 255, 255, 0.19);
}
ul li {
	position: relative;
	padding: 0;
	margin: 0;
	padding-bottom: 4px;
	padding-top: 18px;
    border-top: 1px dotted #dce7eb;
}

ul li:nth-child(1){ border:none; }
ul li:nth-of-type(1) { animation-delay: 0.5s; }
ul li:nth-of-type(2) { animation-delay: 0.75s; }
ul li:nth-of-type(3) { animation-delay: 1.0s; }
ul li:last-of-type { padding-bottom: 0; }

ul li .arrow {
	position: absolute;
	transform: translate(-6px, 0);
	margin-top: 16px;
	right: 0;
}
ul li .fas{
	color:#f6483b;
	font-size: 15px;
	margin-right: 10px;
}
ul li .arrow:before, ul li .arrow:after {
	content: "";
	position: absolute;
	background-color: #f6483b;
	width: 3px;
	height: 9px;
}
ul li .arrow:before {
	transform: translate(-2px, 0) rotate(45deg);
}
ul li .arrow:after {
	transform: translate(2px, 0) rotate(-45deg);
}
ul li input[type=checkbox] {
	position: absolute;
	cursor: pointer;
	width: 100%;
	height: 100%;
    z-index: 1;    
    opacity: 0;
}
ul li input[type=checkbox]:checked ~ p {
	margin-top: 0;
	max-height: 0;
	opacity: 0;
	transform: translate(0, 50%);
}
ul li input[type=checkbox]:checked ~ .arrow:before {
	transform: translate(2px, 0) rotate(45deg);
}
ul li input[type=checkbox]:checked ~ .arrow:after {
	transform: translate(-2px, 0) rotate(-45deg);
}
.transition, p, ul li .arrow:before, ul li .arrow:after {
	transition: all 0.25s ease-in-out;
}

.flipIn, h1, ul li {
	animation: flipdown 0.5s ease both;
}
.no-select, h2 {
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	user-select: none;
}
@keyframes flipdown {
	0% {
		opacity: 0;
		transform-origin: top center;
		transform: rotateX(-90deg);
	}

	5% { opacity: 1; }

	80% { transform: rotateX(8deg); }

	83% { transform: rotateX(6deg); }

	92% { transform: rotateX(-3deg); }

	100% {
		transform-origin: top center;
		transform: rotateX(0deg);
	}
} */









// <!-- <div class="container">
// <div class="row">
//   <div class="col-md-12">
//     <div class="section-title text-center wow zoomIn">
//       <h1>Frequently Asked Questions</h1>
//       <span></span>
//       <p>Our Frequently Asked Questions here.</p>
//     </div>
//   </div>
// </div>
// <div class="row">				
//   <div class="col-md-12">
//     <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
//       <div class="panel panel-default">
//         <div class="panel-heading" role="tab" id="headingOne">
//           <h4 class="panel-title">
//             <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//               Why you choose Titanic? 
//             </a>
//           </h4>
//         </div>
//         <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
//           <div class="panel-body">
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
//           </div>
//         </div>
//       </div>
//       <div class="panel panel-default">
//         <div class="panel-heading" role="tab" id="headingTwo">
//           <h4 class="panel-title">
//             <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//               Why Titanic best? 
//             </a>
//           </h4>
//         </div>
//         <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
//           <div class="panel-body">
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
//           </div>
//         </div>
//       </div>
//       <div class="panel panel-default">
//         <div class="panel-heading" role="tab" id="headingThree">
//           <h4 class="panel-title">
//             <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//               How to apply Titanic jobs? 
//             </a>
//           </h4>
//         </div>
//         <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
//           <div class="panel-body">
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div><!--- END COL -->		
// </div><!--- END ROW -->			
// </div>