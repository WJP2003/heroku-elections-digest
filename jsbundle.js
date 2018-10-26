<div id="header" style="font-family:Verdana; size:50pt; font-weight: bold;">
	House of Representatives Elections
</div>

<div id="power_graph" style="font-family:Verdana; size:25pt;">
	<span><div id="power_graph_solid_rep">0</div>&nbsp;Solid Rep.</span><br>
	<span><div id="power_graph_likely_rep">0</div>&nbsp;Likely Rep.</span><br>
	<span><div id="power_graph_lean_rep">0</div>&nbsp;Lean Rep.</span><br>
	<span><div id="power_graph_tossup">0</div>&nbsp;Tossup</span><br>
	<span><div id="power_graph_lean_dem">0</div>&nbsp;Lean Dem.</span><br>
	<span><div id="power_graph_likely_dem">0</div>&nbsp;Likely Dem.</span><br>
	<span><div id="power_graph_solid_dem">0</div>&nbsp;Solid Dem.</span><br>
</div>

<div id="hover_box" style="left: 965px; top: 272px; visibility: hidden; position: fixed; pointer-events: none;">
	<svg width="100" height="75">
		<g>
			<rect width="100" height="75" style="fill:rgb(255,255,255);stroke-width:10;stroke:rgb(0,0,0)"></rect>
			<text id="hover_box_text" x="50%" y="20%" text-anchor="middle" stroke-opacity="90%" stroke-width="1px" style="font-family:Verdana;">
				<tspan x="50%" dy="1.2em" id="hover_box_text_district" style="font-weight:bold;">
					OH-12
				</tspan><tspan x="50%" text-anchor="middle" dy="1.2em" id="hover_box_text_rating">
					Solid Rep.</tspan>
			</text>
		</g>
	</svg>
</div>

<script>
	mouseTrack = function() {
		document.onmousemove = handleMouseMove;
		function handleMouseMove(event) {
			var dot, eventDoc, doc, body, pageX, pageY;
			event = event || window.event; // IE-ism
			// If pageX/Y aren't available and clientX/Y are,
			// calculate pageX/Y - logic taken from jQuery.
			// (This is to support old IE)
			if (event.pageX == null && event.clientX != null) {
				eventDoc = (event.target && event.target.ownerDocument) || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
				event.pageY = event.clientY + (doc && doc.scrollTop  || body && body.scrollTop  || 0) - (doc && doc.clientTop  || body && body.clientTop  || 0);
        		}
			hoverBox = document.getElementById("hover_box");
			hoverBox.style.left = event.pageX + "px";
			hoverBox.style.top = event.pageY + "px";
		}
	}
	mouseTrack();
			
	setHover = function(t) {
		t.style.strokeColor = "#BBBBBB"
		t.style.strokeOpacity = 0.45
		t.style.zIndex = 0;
		t.onmouseenter = function() {
			this.style.strokeWidth = 2;
			this.style.strokeOpacity = 1;
			this.style.strokeColor = "#BBBBBB"
			this.style.zIndex = 1;
			document.getElementById("hover_box").style.visibility = "visible";
			console.log(event.srcElement.id);
			document.getElementById("hover_box_text_district").innerHTML = event.srcElement.id;
			if(solidR.includes(event.srcElement.id)) {
				document.getElementById("hover_box_text_rating").innerHTML = "Solid Rep.";
				document.getElementById("hover_box_text_rating").style.stroke = "#FF0000";
			} else {
				if(likelyR.includes(event.srcElement.id)) {
					document.getElementById("hover_box_text_rating").innerHTML = "Likely Rep.";
					document.getElementById("hover_box_text_rating").style.stroke = "#FF0000";
				} else {
					if(leanR.includes(event.srcElement.id)) {
						document.getElementById("hover_box_text_rating").innerHTML = "Lean Rep.";
						document.getElementById("hover_box_text_rating").style.stroke = "#FF0000";
					} else {
						if(tossup.includes(event.srcElement.id)) {
							document.getElementById("hover_box_text_rating").innerHTML = "Tossup";
							document.getElementById("hover_box_text_rating").style.stroke = "#FFFF00";
						} else {
							if(leanD.includes(event.srcElement.id)) {
								document.getElementById("hover_box_text_rating").innerHTML = "Lean Dem."
								document.getElementById("hover_box_text_rating").style.stroke = "#0000FF";
							} else {
								if(likelyD.includes(event.srcElement.id)) {
									document.getElementById("hover_box_text_rating").innerHTML = "Likely Dem."
									document.getElementById("hover_box_text_rating").style.stroke = "#0000FF";
								} else {
									if(solidD.includes(event.srcElement.id)) {
										document.getElementById("hover_box_text_rating").innerHTML = "Solid Dem."
										document.getElementById("hover_box_text_rating").style.stroke = "#0000FF";
									}
								}
							}
						}
					}
				}
			}
		}
		t.onmouseleave = function() {
			this.style.strokeWidth = 0.333334;
			this.style.strokeOpacity = 0.45;
			this.style.strokeColor = "#BBBBBB"
			this.style.zIndex = 0;
			document.getElementById("hover_box").style.visibility = "hidden";
		}
	}

	
	setSolidR = function(t) {
		t.style.fill = "#FF0000";
		t.style.fillOpacity = 0.8;
		
	}
	setLikelyR = function(t) {
		t.style.fill = "#FF0000";
		t.style.fillOpacity = 0.5;
	}
	setLeanR = function(t) {
		t.style.fill = "#FF0000";
		t.style.fillOpacity = 0.3;
	}
	setTossup = function(t) {
		t.style.fill = "#FFFF00";
		t.style.fillOpacity = 1;
	}
	setLeanD = function(t) {
		t.style.fill = "#0000FF";
		t.style.fillOpacity = 0.3;
	}
	setLikelyD = function(t) {
		t.style.fill = "#0000FF";
		t.style.fillOpacity = 0.5;
	}
	setSolidD = function(t) {
		t.style.fill = "#0000FF";
		t.style.fillOpacity = 0.8;
	}
	
	run = function() {
		allPaths = document.getElementsByTagName("path");
		for(i = 0;i < allPaths.length;i++) {
			if(allPaths[i].id != "Dividing_line") {
				setHover(allPaths[i]);
			}
		}
		for(i = 0;i < solidR.length;i++) {
			console.log("Set as Solid R: " + solidR[i]);
			setSolidR(document.getElementById(solidR[i]));
		}
		for(i = 0;i < likelyR.length;i++) {
			console.log("Set as Likely R: " + likelyR[i]);
			setLikelyR(document.getElementById(likelyR[i]));
		}
		for(i = 0;i < leanR.length;i++) {
			console.log("Set as Lean R: " + leanR[i]);
			setLeanR(document.getElementById(leanR[i]));
		}
		for(i = 0;i < tossup.length;i++) {
			console.log("Set as Tossup: " + tossup[i]);
			setTossup(document.getElementById(tossup[i]));
		}
		for(i = 0;i < leanD.length;i++) {
			console.log("Set as Lean D: " + leanD[i]);
			setLeanD(document.getElementById(leanD[i]));
		}
		for(i = 0;i < likelyD.length;i++) {
			console.log("Set as Likely D: " + likelyD[i]);
			setLikelyD(document.getElementById(likelyD[i]));
		}
		for(i = 0;i < solidD.length;i++) {
			console.log("Set as Solid D: " + solidD[i]);
			setSolidD(document.getElementById(solidD[i]));
		}
		
		document.getElementById("power_graph_solid_rep")  = solidR.length;
		document.getElementById("power_graph_likely_rep") = likelyR.length;
		document.getElementById("power_graph_lean_rep")   = leanR.length;
		document.getElementById("power_graph_tossup_rep") = tossup.length;
		document.getElementById("power_graph_lean_dem")   = leanD.length;
		document.getElementById("power_graph_likely_dem") = likelyD.length;
		document.getElementById("power_graph_solid_dem")  = solidD.length;
	}
</script>
<body onload = "run();">
