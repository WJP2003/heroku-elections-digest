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
		} else if(houseLikelyR.includes(event.srcElement.id)) {
			tb.innerHTML = "Likely Rep.";
			tb.setAttribute("class","Likely Rep");
		} else if(houseLeanR.includes(event.srcElement.id)) {
			tb.innerHTML = "Lean Rep.";
			tb.setAttribute("class","Lean Rep");
		} else if(houseTossup.includes(event.srcElement.id)) {
			tb.innerHTML = "Tossup";
			tb.setAttribute("class","Tossup");
		} else if(houseLeanD.includes(event.srcElement.id)) {
			tb.innerHTML = "Lean Dem.";
			tb.setAttribute("class","Lean Dem");
		} else if(houseLikelyD.includes(event.srcElement.id)) {
			tb.innerHTML = "Likely Dem.";
			tb.setAttribute("class","Likely Dem");
		} else if(houseSolidD.includes(event.srcElement.id)) {
			tb.innerHTML = "Solid Dem.";
			tb.setAttribute("class","Solid Dem");
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
	
	if(houseSolidR != undefined) {
		houseDoc = document.getElementById("houseSVG")[0].contentDocument;
		senateDoc = document.getElementById("senateSVG")[0].contentDocument;

		for(i = 0;i < houseSolidR.length;i++) {
			console.log("Set as Solid R: " + houseSolidR[i]);
			if(houseDoc.getElementById(houseSolidR[i]) != undefined) {
				houseDoc.getElementById(houseSolidR[i]).setAttribute("class","Solid Rep");
			}
		}
		for(i = 0;i < senateSolidR.length;i++) {
			console.log("Set as Solid R: " + senateSolidR[i]);
			if(senateDoc.getElementById(senateSolidR[i]) != undefined) {
				senateDoc.getElementById(senateSolidR[i]).setAttribute("class","Solid Rep");
			}
		}
		for(i = 0;i < houseLikelyR.length;i++) {
			console.log("Set as Likely R: " + houseLikelyR[i]);
			if(houseDoc.getElementById(houseLikelyR[i]) != undefined) {
				houseDoc.getElementById(houseLikelyR[i]).setAttribute("class","Likely Rep");
			}
		}
		for(i = 0;i < senateLikelyR.length;i++) {
			console.log("Set as Likely R: " + senateLikelyR[i]);
			if(senateDoc.getElementById(senateLikelyR[i]) != undefined) {
				senateDoc.getElementById(senateLikelyR[i]).setAttribute("class","Likely Rep");
			}
		}
		for(i = 0;i < houseLeanR.length;i++) {
			console.log("Set as Lean R: " + houseLeanR[i]);
			if(houseDoc.getElementById(houseLeanR[i]) != undefined) {
				houseDoc.getElementById(houseLeanR[i]).setAttribute("class","Lean Rep");
			}
		}
		for(i = 0;i < senateLeanR.length;i++) {
			console.log("Set as Lean R: " + senateLeanR[i]);
			if(senateDoc.getElementById(senateLeanR[i]) != undefined) {
				senateDoc.getElementById(senateLeanR[i]).setAttribute("class","Lean Rep");
			}
		}
		for(i = 0;i < houseTossup.length;i++) {
			console.log("Set as Tossup: " + houseTossup[i]);
			if(houseDoc.getElementById(houseTossup[i]) != undefined) { 
				houseDoc.getElementById(houseTossup[i]).setAttribute("class","Tossup");
			}
		}
		for(i = 0;i < senateTossup.length;i++) {
			console.log("Set as Tossup: " + senateTossup[i]);
			if(senateDoc.getElementById(senateTossup[i]) != undefined) {
				senateDoc.getElementById(senateTossup[i]).setAttribute("class","Tossup");
			}
		}
		for(i = 0;i < houseLeanD.length;i++) {
			console.log("Set as Lean D: " + houseLeanD[i]);
			if(houseDoc.getElementById(houseLeanD[i]) != undefined) {
				houseDoc.getElementById(houseLeanD[i]).setAttribute("class","Lean Dem");
			}
		}
		for(i = 0;i < senateLeanD.length;i++) {
			console.log("Set as Lean D: " + senateLeanD[i]);
			if(senateDoc.getElementById(senateLeanD[i]) != undefined) {
				senateDoc.getElementById(senateLeanD[i]).setAttribute("class","Lean Dem");
			}
		}
		for(i = 0;i < houseLikelyD.length;i++) {
			console.log("Set as Likely D: " + houseLikelyD[i]);
			if(houseDoc.getElementById(houseLikelyD[i]) != undefined) {
				houseDoc.getElementById(houseLikelyD[i]).setAttribute("class","Likely Dem");
			}
		}
		for(i = 0;i < senateLikelyD.length;i++) {
			console.log("Set as Likely D: " + senateLikelyD[i]);
			if(senateDoc.getElementById(senateLikelyD[i]) != undefined) {
				senateDoc.getElementById(senateLikelyD[i]).setAttribute("class","Likely Dem");
			}
		}
		for(i = 0;i < houseSolidD.length;i++) {
			console.log("Set as Solid D: " + houseSolidD[i]);
			if(houseDoc.getElementById(houseSolidD[i]) != undefined) {
				houseDoc.getElementById(houseSolidD[i]).setAttribute("class","Solid Dem");
			}
		}
		for(i = 0;i < senateSolidD.length;i++) {
			console.log("Set as Solid D: " + senateSolidD[i]);
			if(senateDoc.getElementById(senateSolidD[i]) != undefined) {
				senateDoc.getElementById(senateSolidD[i]).setAttribute("class","Solid Dem");
			}
		}

		document.getElementById("power_graph_solid_rep_house").innerHTML  = houseSolidR.length;
		document.getElementById("power_graph_likely_rep_house").innerHTML = houseLikelyR.length;
		document.getElementById("power_graph_lean_rep_house").innerHTML   = houseLeanR.length;
		document.getElementById("power_graph_tossup_house").innerHTML     = houseTossup.length;
		document.getElementById("power_graph_lean_dem_house").innerHTML   = houseLeanD.length;
		document.getElementById("power_graph_likely_dem_house").innerHTML = houseLikelyD.length;
		document.getElementById("power_graph_solid_dem_house").innerHTML  = houseSolidD.length;

		document.getElementById("power_graph_solid_rep_senate").innerHTML  = senateSolidR.length;
		document.getElementById("power_graph_likely_rep_senate").innerHTML = senateLikelyR.length;
		document.getElementById("power_graph_lean_rep_senate").innerHTML   = senateLeanR.length;
		document.getElementById("power_graph_tossup_senate").innerHTML     = senateTossup.length;
		document.getElementById("power_graph_lean_dem_senate").innerHTML   = senateLeanD.length;
		document.getElementById("power_graph_likely_dem_senate").innerHTML = senateLikelyD.length;
		document.getElementById("power_graph_solid_dem_senate").innerHTML  = senateSolidD.length;
		
		getElementById("houseSVG")[0].contentDocument = houseDoc;
		getElementById("senateSVG")[0].contentDocument = senateDoc;
	} else {
		setTimeout(runColoration,1000);
	}
}

window.onload = function() {
	setHover();
	runColoration();
}
