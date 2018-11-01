window.onmousemove = function(e) {
	x = e.clientX,
	y = e.clientY;
	elem = window.parent.window.parent.document.getElementById("hover_box")
	elem.style.top = (y + 20) + 'px';
	elem.style.left = (x + 20) + 'px';
}

setHoverHouse = function() {
	for(i = 0;i < houseSolidR.length;i++) {
		t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('svg')[houseSolidR[i]];
		t.onmouseenter = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible";
			window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = houseSolidR[i];
			tb = document.getElementById("hover_box_text_rating");
			tb.innerHTML = "Solid Rep.";
			tb.setAttribute("class","Solid Rep");
		}
		t.onmouseleave = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
		}
	}
	for(i = 0;i < houseLikelyR.length;i++) {
		t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('svg')[houseLikelyR[i]];
		t.onmouseenter = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible";
			window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = houseLikelyR[i];
			tb = document.getElementById("hover_box_text_rating");
			tb.innerHTML = "Likely Rep.";
			tb.setAttribute("class","Likely Rep");
		}
		t.onmouseleave = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
		}
	}
	for(i = 0;i < houseLeanR.length;i++) {
		t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('svg')[houseLeanR[i]];
		t.onmouseenter = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible";
			window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = houseLeanR[i];
			tb = document.getElementById("hover_box_text_rating");
			tb.innerHTML = "Lean Rep.";
			tb.setAttribute("class","Lean Rep");
		}
		t.onmouseleave = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
		}
	}
	for(i = 0;i < houseTossup.length;i++) {
		t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('svg')[houseTossup[i]];
		t.onmouseenter = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible";
			window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = houseTossup[i];
			tb = document.getElementById("hover_box_text_rating");
			tb.innerHTML = "Tossup";
			tb.setAttribute("class","Tossup");
		}
		t.onmouseleave = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
		}
	}
	for(i = 0;i < houseLeanD.length;i++) {
		t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('svg')[houseLeanD[i]];
		t.onmouseenter = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible";
			window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = houseLeanD[i];
			tb = document.getElementById("hover_box_text_rating");
			tb.innerHTML = "Lean Dem.";
			tb.setAttribute("class","Lean Dem");
		}
		t.onmouseleave = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
		}
	}
	for(i = 0;i < houseLikelyD.length;i++) {
		t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('svg')[houseLikelyD[i]];
		t.onmouseenter = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible";
			window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = houseLikelyD[i];
			tb = document.getElementById("hover_box_text_rating");
			tb.innerHTML = "Likely Dem.";
			tb.setAttribute("class","Likely Dem");
		}
		t.onmouseleave = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
		}
	}
	for(i = 0;i < houseSolidD.length;i++) {
		t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('svg')[houseSolidD[i]];
		t.onmouseenter = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible";
			window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = houseSolidD[i];
			tb = document.getElementById("hover_box_text_rating");
			tb.innerHTML = "Solid Dem.";
			tb.setAttribute("class","Solid Dem");
		}
		t.onmouseleave = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
		}
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
		houseSVGDoc = window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("houseSVG")[0].contentDocument;
		senateSVGDoc = window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("senateSVG")[0].contentDocument;

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

		window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_solid_rep_house").innerHTML  = houseSolidR.length;
		window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_likely_rep_house").innerHTML = houseLikelyR.length;
		window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_lean_rep_house").innerHTML   = houseLeanR.length;
		window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_tossup_house").innerHTML     = houseTossup.length;
		window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_lean_dem_house").innerHTML   = houseLeanD.length;
		window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_likely_dem_house").innerHTML = houseLikelyD.length;
		window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_solid_dem_house").innerHTML  = houseSolidD.length;

		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_solid_rep_senate").innerHTML  = senateSolidR.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_likely_rep_senate").innerHTML = senateLikelyR.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_lean_rep_senate").innerHTML   = senateLeanR.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_tossup_senate").innerHTML     = senateTossup.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_lean_dem_senate").innerHTML   = senateLeanD.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_likely_dem_senate").innerHTML = senateLikelyD.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_solid_dem_senate").innerHTML  = senateSolidD.length;
		
		window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("houseSVG")[0].contentDocument = houseSVGDoc;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("senateSVG")[0].contentDocument = senateSVGDoc;
	} else {
		setTimeout(runColoration,1000);
	}
}

window.parent.window.parent.window.addEventListener('load', function() {
	setHover();
	runColoration();
});
