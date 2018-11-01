window.onmousemove = function(e) {
	x = e.clientX,
	y = e.clientY;
	elem = window.parent.window.parent.document.getElementById("hover_box")
	elem.style.top = (y + 20) + 'px';
	elem.style.left = (x + 20) + 'px';
}

setHoverColorHouse = function() {
	tb = window.parent.window.parent.document.getElementById("hover_box_text_rating");
	for(i = 0;i < houseSolidR.length;i++) {
		t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('path')[houseSolidR[i]];
		t.onmouseenter = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible";
			window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = houseSolidR[i];
			tb.innerHTML = "Solid Rep.";
			tb.setAttribute("class","Solid Rep");
			t.setAttribute("class","Solid Rep");
		}
		t.onmouseleave = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
		}
	}
	for(i = 0;i < houseLikelyR.length;i++) {
		t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('path')[houseLikelyR[i]];
		t.onmouseenter = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible";
			window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = houseLikelyR[i];
			tb = document.getElementById("hover_box_text_rating");
			tb.innerHTML = "Likely Rep.";
			tb.setAttribute("class","Likely Rep");
			t.setAttribute("class","Likely Rep");
		}
		t.onmouseleave = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
		}
	}
	for(i = 0;i < houseLeanR.length;i++) {
		t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('path')[houseLeanR[i]];
		t.onmouseenter = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible";
			window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = houseLeanR[i];
			tb = document.getElementById("hover_box_text_rating");
			tb.innerHTML = "Lean Rep.";
			tb.setAttribute("class","Lean Rep");
			t.setAttribute("class","Lean Rep");
		}
		t.onmouseleave = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
		}
	}
	for(i = 0;i < houseTossup.length;i++) {
		t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('path')[houseTossup[i]];
		t.onmouseenter = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible";
			window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = houseTossup[i];
			tb = document.getElementById("hover_box_text_rating");
			tb.innerHTML = "Tossup";
			tb.setAttribute("class","Tossup");
			t.setAttribute("class","Tossup");
		}
		t.onmouseleave = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
		}
	}
	for(i = 0;i < houseLeanD.length;i++) {
		t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('path')[houseLeanD[i]];
		t.onmouseenter = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible";
			window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = houseLeanD[i];
			tb = document.getElementById("hover_box_text_rating");
			tb.innerHTML = "Lean Dem.";
			tb.setAttribute("class","Lean Dem");
			t.setAttribute("class","Lean Dem");
		}
		t.onmouseleave = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
		}
	}
	for(i = 0;i < houseLikelyD.length;i++) {
		t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('path')[houseLikelyD[i]];
		t.onmouseenter = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible";
			window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = houseLikelyD[i];
			tb = document.getElementById("hover_box_text_rating");
			tb.innerHTML = "Likely Dem.";
			tb.setAttribute("class","Likely Dem");
			t.setAttribute("class","Lean Dem");
		}
		t.onmouseleave = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
		}
	}
	for(i = 0;i < houseSolidD.length;i++) {
		t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('path')[houseSolidD[i]];
		t.onmouseenter = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible";
			window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = houseSolidD[i];
			tb = document.getElementById("hover_box_text_rating");
			tb.innerHTML = "Solid Dem.";
			tb.setAttribute("class","Solid Dem");
			t.setAttribute("class","Lean Dem");
		}
		t.onmouseleave = function() {
			window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
		}
	}
	
	window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_solid_rep_house").innerHTML  = houseSolidR.length;
	window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_likely_rep_house").innerHTML = houseLikelyR.length;
	window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_lean_rep_house").innerHTML   = houseLeanR.length;
	window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_tossup_house").innerHTML     = houseTossup.length;
	window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_lean_dem_house").innerHTML   = houseLeanD.length;
	window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_likely_dem_house").innerHTML = houseLikelyD.length;
	window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_solid_dem_house").innerHTML  = houseSolidD.length;

	/*
	window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_solid_rep_senate").innerHTML  = senateSolidR.length;
	window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_likely_rep_senate").innerHTML = senateLikelyR.length;
	window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_lean_rep_senate").innerHTML   = senateLeanR.length;
	window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_tossup_senate").innerHTML     = senateTossup.length;
	window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_lean_dem_senate").innerHTML   = senateLeanD.length;
	window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_likely_dem_senate").innerHTML = senateLikelyD.length;
	window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_solid_dem_senate").innerHTML  = senateSolidD.length;
	*/
}

window.parent.window.parent.window.addEventListener('load', function() {
	setHoverColorHouse();
});
