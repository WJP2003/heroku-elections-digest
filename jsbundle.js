window.onmousemove = function(e) {
	x = e.clientX,
	y = e.clientY;
	elem = document.getElementById("hover_box")
	elem.style.top = (y + 20) + 'px';
	elem.style.left = (x + 20) + 'px';
}

setHover = function(t) {
	t.onmouseenter = function() {
		this.setAttribute("selected","");
		document.getElementById("hover_box").style.visibility = "visible";
		document.getElementById("hover_box_text_district").innerHTML = event.srcElement.id;
		tb = document.getElementById("hover_box_text_rating");
		if(solidR.includes(event.srcElement.id)) {
			tb.innerHTML = "Solid Rep.";
			tb.setAttribute("class","Solid Rep");
		} else {
			if(likelyR.includes(event.srcElement.id)) {
				tb.innerHTML = "Likely Rep.";
				tb.setAttribute("class","Likely Rep");
			} else {
				if(leanR.includes(event.srcElement.id)) {
					tb.innerHTML = "Lean Rep.";
					tb.setAttribute("class","Lean Rep");
				} else {
					if(tossup.includes(event.srcElement.id)) {
						tb.innerHTML = "Tossup";
						tb.setAttribute("class","Tossup");
					} else {
						if(leanD.includes(event.srcElement.id)) {
							tb.innerHTML = "Lean Dem.";
							tb.setAttribute("class","Lean Dem");
						} else {
							if(likelyD.includes(event.srcElement.id)) {
								tb.innerHTML = "Likely Dem.";
								tb.setAttribute("class","Likely Dem");
							} else {
								if(solidD.includes(event.srcElement.id)) {
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
		this.removeAttribute("selected");
		document.getElementById("hover_box").style.visibility = "hidden";
	}
}

runHouseOfReps = function() {
	allPaths = document.getElementsByTagName("path");
	for(i = 0;i < allPaths.length;i++) {
		if(allPaths[i].id != "Dividing_line" && allPaths[i].id != "State_Lines") {
			setHover(allPaths[i]);
			allPaths[i].style = "";
		}
	}
	for(i = 0;i < solidR.length;i++) {
		console.log("Set as Solid R: " + solidR[i]);
		document.getElementById(solidR[i]).setAttribute("class","Solid Rep");
	}
	for(i = 0;i < likelyR.length;i++) {
		console.log("Set as Likely R: " + likelyR[i]);
		document.getElementById(likelyR[i]).setAttribute("class","Likely Rep");
	}
	for(i = 0;i < leanR.length;i++) {
		console.log("Set as Lean R: " + leanR[i]);
		document.getElementById(leanR[i]).setAttribute("class","Lean Rep");
	}
	for(i = 0;i < tossup.length;i++) {
		console.log("Set as Tossup: " + tossup[i]);
		document.getElementById(tossup[i]).setAttribute("class","Tossup");
	}
	for(i = 0;i < leanD.length;i++) {
		console.log("Set as Lean D: " + leanD[i]);
		document.getElementById(leanD[i]).setAttribute("class","Lean Dem");
	}
	for(i = 0;i < likelyD.length;i++) {
		console.log("Set as Likely D: " + likelyD[i]);
		document.getElementById(likelyD[i]).setAttribute("class","Likely Dem");
	}
	for(i = 0;i < solidD.length;i++) {
		console.log("Set as Solid D: " + solidD[i]);
		document.getElementById(solidD[i]).setAttribute("class","Solid Dem");
	}
	
	document.getElementById("power_graph_solid_rep_house").innerHTML  = solidR.length;
	document.getElementById("power_graph_likely_rep_house").innerHTML = likelyR.length;
	document.getElementById("power_graph_lean_rep_house").innerHTML   = leanR.length;
	document.getElementById("power_graph_tossup_house").innerHTML = tossup.length;
	document.getElementById("power_graph_lean_dem_house").innerHTML   = leanD.length;
	document.getElementById("power_graph_likely_dem_house").innerHTML = likelyD.length;
	document.getElementById("power_graph_solid_dem_house").innerHTML  = solidD.length;
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
