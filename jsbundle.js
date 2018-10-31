window.onmousemove = function(e) {
	x = e.clientX,
	y = e.clientY;
	elem = document.getElementById("hover_box")
	elem.style.top = (y + 20) + 'px';
	elem.style.left = (x + 20) + 'px';
}

setHover = function(t) {
	t.onmouseenter = function() {
		document.getElementById("hover_box").style.visibility = "visible";
		document.getElementById("hover_box_text_district").innerHTML = event.srcElement.id;
		tb = document.getElementById("hover_box_text_rating");
		if(houseSolidR.includes(event.srcElement.id)) {
			tb.innerHTML = "Solid Rep.";
			tb.setAttribute("class","Solid Rep");
		} else {
			if(houseLikelyR.includes(event.srcElement.id)) {
				tb.innerHTML = "Likely Rep.";
				tb.setAttribute("class","Likely Rep");
			} else {
				if(houseLeanR.includes(event.srcElement.id)) {
					tb.innerHTML = "Lean Rep.";
					tb.setAttribute("class","Lean Rep");
				} else {
					if(houseTossup.includes(event.srcElement.id)) {
						tb.innerHTML = "Tossup";
						tb.setAttribute("class","Tossup");
					} else {
						if(houseLeanD.includes(event.srcElement.id)) {
							tb.innerHTML = "Lean Dem.";
							tb.setAttribute("class","Lean Dem");
						} else {
							if(houseLikelyD.includes(event.srcElement.id)) {
								tb.innerHTML = "Likely Dem.";
								tb.setAttribute("class","Likely Dem");
							} else {
								if(houseSolidD.includes(event.srcElement.id)) {
									tb.innerHTML = "Solid Dem.";
									tb.setAttribute("class","Solid Dem");
								}
							}
						}
					}
				}
			}
		}
	}
	t.onmouseleave = function() {
		document.getElementById("hover_box").style.visibility = "hidden";
	}
}

runColoration = function() {
	allPaths = document.getElementsByTagName("path");
	for(i = 0;i < allPaths.length;i++) {
		if(allPaths[i].id != "Dividing_line" && allPaths[i].id != "State_Lines" && allPaths[i].id != "frames") {
			setHover(allPaths[i]);
			allPaths[i].style = "";
		}
	}
	for(i = 0;i < houseSolidR.length;i++) {
		console.log("Set as Solid R: " + houseSolidR[i]);
		document.getElementById(houseSolidR[i]).setAttribute("class","Solid Rep");
	}
	for(i = 0;i < houseLikelyR.length;i++) {
		console.log("Set as Likely R: " + houseLikelyR[i]);
		document.getElementById(houseLikelyR[i]).setAttribute("class","Likely Rep");
	}
	for(i = 0;i < houseLeanR.length;i++) {
		console.log("Set as Lean R: " + houseLeanR[i]);
		document.getElementById(houseLeanR[i]).setAttribute("class","Lean Rep");
	}
	for(i = 0;i < houseTossup.length;i++) {
		console.log("Set as Tossup: " + houseTossup[i]);
		document.getElementById(houseTossup[i]).setAttribute("class","Tossup");
	}
	for(i = 0;i < houseLeanD.length;i++) {
		console.log("Set as Lean D: " + houseLeanD[i]);
		document.getElementById(houseLeanD[i]).setAttribute("class","Lean Dem");
	}
	for(i = 0;i < houseLikelyD.length;i++) {
		console.log("Set as Likely D: " + houseLikelyD[i]);
		document.getElementById(houseLikelyD[i]).setAttribute("class","Likely Dem");
	}
	for(i = 0;i < houseSolidD.length;i++) {
		console.log("Set as Solid D: " + houseSolidD[i]);
		document.getElementById(houseSolidD[i]).setAttribute("class","Solid Dem");
	}
	
	document.getElementById("power_graph_solid_rep_house").innerHTML  = houseSolidR.length;
	document.getElementById("power_graph_likely_rep_house").innerHTML = houseLikelyR.length;
	document.getElementById("power_graph_lean_rep_house").innerHTML   = houseLeanR.length;
	document.getElementById("power_graph_tossup_house").innerHTML     = houseTossup.length;
	document.getElementById("power_graph_lean_dem_house").innerHTML   = houseLeanD.length;
	document.getElementById("power_graph_likely_dem_house").innerHTML = houseLikelyD.length;
	document.getElementById("power_graph_solid_dem_house").innerHTML  = houseSolidD.length;
}

includeHTML = function() {
	var z, i, elmnt, file, xhttp;
	// loop through a collection of all HTML elements:
	z = document.getElementsByTagName("import");
	for(i = 0; i < z.length; i++) {
		elmnt = z[i];
		// search for elements with a certain atrribute:
		file = elmnt.getAttribute("href");
		if(file && !(elmnt.getAttribute("imported") == "true")) {
			// make an HTTP request using the attribute value as the file name:
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {elmnt.innerHTML = this.responseText;}
					if (this.status == 404) {elmnt.setAttribute("imported","notfound");}
					elmnt.setAttribute("imported","true");
					eval(elmnt.getAttribute("onload"));
					includeHTML();
				}
			} 
			xhttp.open("GET", file, true);
			xhttp.send();
			// exit the function:
			return;
		}
	}
}
