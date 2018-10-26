<html>
<head>
<div id="header" style="font-family:Verdana; font-size:50pt; font-weight: bold;">
	House of Representatives Elections
</div>

<table id="power_graph" style="font-family:Verdana; font-size:25pt;border-spacing: 3px;border-collapse: separate;">
	<tr>
	<td style="color:#FF0000;opacity:80%"><span id="power_graph_solid_rep" style="font-weight: bold;">0</span>&nbsp;Solid Rep.</td>
	<td><span style="color:#FFFFFF">Filler</span></td>
	<td style="color:#0000FF;opacity:80%"><span id="power_graph_solid_dem" style="font-weight: bold;">0</span>&nbsp;Solid Dem.</td>
	</tr><tr>
	<td style="color:#FF0000;opacity:50%"><span id="power_graph_likely_rep" style="font-weight: bold;">0</span>&nbsp;Likely Rep.</td>
	<td style="color:#CFB53B;opacity:100%"><span id="power_graph_tossup" style="font-weight: bold;">0</span>&nbsp;Tossup</td>
	<td style="color:#0000FF;opacity:50%"><span id="power_graph_likely_dem" style="font-weight: bold;">0</span>&nbsp;Likely Dem.</td>
	</tr><tr>
	<td style="color:#FF0000;opacity:30%"><span id="power_graph_lean_rep" style="font-weight: bold;">0</span>&nbsp;Lean Rep.</td>
	<td><span style="color:#FFFFFF">Filler</span></td>
	<td style="color:#0000FF;opacity:30%"><span id="power_graph_lean_dem" style="font-weight: bold;">0</span>&nbsp;Lean Dem.</td>
</table>

<br>

<div id="hover_box" style="visibility: hidden; position: fixed; pointer-events: none;">
	<svg width="120" height="70">
		<g>
			<rect width="120" height="70" style="fill:rgb(255,255,255);stroke-width:10;stroke:rgb(0,0,0)"></rect>
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
	window.onmousemove = function(e) {
		x = e.clientX,
		y = e.clientY;
		elem = document.getElementById("hover_box")
		elem.style.top = (y + 20) + 'px';
		elem.style.left = (x + 20) + 'px';
	};
			
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
							document.getElementById("hover_box_text_rating").style.stroke = "#CFB53B";
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
		t.style.fill = "#CFB53B";
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
		
		document.getElementById("power_graph_solid_rep").innerHTML  = solidR.length;
		document.getElementById("power_graph_likely_rep").innerHTML = likelyR.length;
		document.getElementById("power_graph_lean_rep").innerHTML   = leanR.length;
		document.getElementById("power_graph_tossup").innerHTML = tossup.length;
		document.getElementById("power_graph_lean_dem").innerHTML   = leanD.length;
		document.getElementById("power_graph_likely_dem").innerHTML = likelyD.length;
		document.getElementById("power_graph_solid_dem").innerHTML  = solidD.length;
	}
</script>
</head>
<body onload = "run();">
<object width="50vw" data="/house_of_reps.svg"></object>
</body>
</html>
