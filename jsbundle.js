/*function setTooltip() {
	try {
		window.parent.window.parent.window.document.house_elections.contentDocument.houseSVG.contentDocument.onmousemove = function(e) {
			x = e.clientX;
			y = e.clientY;
			elem = window.parent.window.parent.document.getElementById("hover_box");
			elem.style.top = (y + 100) + 'px';
			elem.style.left = (x + 30) + 'px';
		}
	} catch(err) {
		setTimeout(setTooltip,1000);
	}
}*/

setHoverColorHouse = function() {
	try {
		for(i = 0;i < houseSolidR.length;i++) {
			t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('path')[houseSolidR[i]];
			eval('t.onmouseenter = function() { \
				tb = window.parent.window.parent.document.getElementById("hover_box_text_rating"); \
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible"; \
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + houseSolidR[i] + '"; \
				tb.innerHTML = "Solid Rep."; \
				tb.setAttribute("class","Solid Rep"); \
			}')
			t.onmouseleave = function() {
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
			}
			t.setAttribute("class","Solid Rep"); 
		}
		for(i = 0;i < houseLikelyR.length;i++) {
			t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('path')[houseLikelyR[i]];
			eval('t.onmouseenter = function() { \
				tb = window.parent.window.parent.document.getElementById("hover_box_text_rating"); \
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible"; \
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + houseLikelyR[i] + '"; \
				tb.innerHTML = "Likely Rep."; \
				tb.setAttribute("class","Likely Rep"); \
			}')
			t.onmouseleave = function() {
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
			}
			t.setAttribute("class","Likely Rep");
		}
		for(i = 0;i < houseLeanR.length;i++) {
			t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('path')[houseLeanR[i]];
			eval('t.onmouseenter = function() { \
				tb = window.parent.window.parent.document.getElementById("hover_box_text_rating"); \
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible"; \
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + houseLeanR[i] + '"; \
				tb.innerHTML = "Lean Rep."; \
				tb.setAttribute("class","Lean Rep"); \
			}')
			t.onmouseleave = function() {
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
			}
			t.setAttribute("class","Lean Rep");
		}
		for(i = 0;i < houseTossup.length;i++) {
			t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('path')[houseTossup[i]];
			eval('t.onmouseenter = function() { \
				tb = window.parent.window.parent.document.getElementById("hover_box_text_rating"); \
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible"; \
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + houseTossup[i] + '"; \
				tb.innerHTML = "Tossup"; \
				tb.setAttribute("class","Tossup"); \
			}')
			t.onmouseleave = function() {
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
			}
			t.setAttribute("class","Tossup");
		}
		for(i = 0;i < houseLeanD.length;i++) {
			t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('path')[houseLeanD[i]];
			eval('t.onmouseenter = function() { \
				tb = window.parent.window.parent.document.getElementById("hover_box_text_rating"); \
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible"; \
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + houseLeanD[i] + '"; \
				tb.innerHTML = "Lean Dem."; \
				tb.setAttribute("class","Lean Dem"); \
			}')
			t.onmouseleave = function() {
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
			}
			t.setAttribute("class","Lean Dem");
		}
		for(i = 0;i < houseLikelyD.length;i++) {
			t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('path')[houseLikelyD[i]];
			eval('t.onmouseenter = function() { \
				tb = window.parent.window.parent.document.getElementById("hover_box_text_rating"); \
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible"; \
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + houseLikelyD[i] + '"; \
				tb.innerHTML = "Likely Dem."; \
				tb.setAttribute("class","Likely Dem"); \
			}')
			t.onmouseleave = function() {
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
			}
			t.setAttribute("class","Likely Dem");
		}
		for(i = 0;i < houseSolidD.length;i++) {
			t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('path')[houseSolidD[i]];
			eval('t.onmouseenter = function() { \
				tb = window.parent.window.parent.document.getElementById("hover_box_text_rating"); \
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible"; \
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + houseSolidD[i] + '"; \
				tb.innerHTML = "Solid Dem."; \
				tb.setAttribute("class","Solid Dem"); \
			}')
			t.onmouseleave = function() {
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
			}
			t.setAttribute("class","Solid Dem");
		}

		window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_solid_rep_house").innerHTML  = houseSolidR.length;
		window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_likely_rep_house").innerHTML = houseLikelyR.length;
		window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_lean_rep_house").innerHTML   = houseLeanR.length;
		window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_tossup_house").innerHTML     = houseTossup.length;
		window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_lean_dem_house").innerHTML   = houseLeanD.length;
		window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_likely_dem_house").innerHTML = houseLikelyD.length;
		window.parent.window.parent.document.getElementById("house_elections").contentDocument.getElementById("power_graph_solid_dem_house").innerHTML  = houseSolidD.length;

	} catch(err) {
		setTimeout(setHoverColorHouse,1000);
	}
}

setHoverColorSenate = function() {
	try {
		for(i = 0;i < senateSolidR.length;i++) {
			t = window.parent.window.parent.document.getElementsByTagName('object').senate_elections.contentDocument.getElementById('senateSVG').contentDocument.getElementsByTagName('path')[senateSolidR[i]];
			eval('t.onmouseenter = function() { \
				tb = window.parent.window.parent.document.getElementById("hover_box_text_rating"); \
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible"; \
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + senateSolidR[i] + '"; \
				tb.innerHTML = "Solid Rep."; \
				tb.setAttribute("class","Solid Rep"); \
			}')
			t.onmouseleave = function() {
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
			}
			t.setAttribute("class","Solid Rep"); 
		}
		for(i = 0;i < senateLikelyR.length;i++) {
			t = window.parent.window.parent.document.getElementsByTagName('object').senate_elections.contentDocument.getElementById('senateSVG').contentDocument.getElementsByTagName('path')[senateLikelyR[i]];
			eval('t.onmouseenter = function() { \
				tb = window.parent.window.parent.document.getElementById("hover_box_text_rating"); \
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible"; \
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + senateLikelyR[i] + '"; \
				tb.innerHTML = "Likely Rep."; \
				tb.setAttribute("class","Likely Rep"); \
			}')
			t.onmouseleave = function() {
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
			}
			t.setAttribute("class","Likely Rep");
		}
		for(i = 0;i < senateLeanR.length;i++) {
			t = window.parent.window.parent.document.getElementsByTagName('object').senate_elections.contentDocument.getElementById('senateSVG').contentDocument.getElementsByTagName('path')[senateLeanR[i]];
			eval('t.onmouseenter = function() { \
				tb = window.parent.window.parent.document.getElementById("hover_box_text_rating"); \
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible"; \
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + senateLeanR[i] + '"; \
				tb.innerHTML = "Lean Rep."; \
				tb.setAttribute("class","Lean Rep"); \
			}')
			t.onmouseleave = function() {
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
			}
			t.setAttribute("class","Lean Rep");
		}
		for(i = 0;i < senateTossup.length;i++) {
			t = window.parent.window.parent.document.getElementsByTagName('object').senate_elections.contentDocument.getElementById('senateSVG').contentDocument.getElementsByTagName('path')[senateTossup[i]];
			eval('t.onmouseenter = function() { \
				tb = window.parent.window.parent.document.getElementById("hover_box_text_rating"); \
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible"; \
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + senateTossup[i] + '"; \
				tb.innerHTML = "Tossup"; \
				tb.setAttribute("class","Tossup"); \
			}')
			t.onmouseleave = function() {
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
			}
			t.setAttribute("class","Tossup");
		}
		for(i = 0;i < senateLeanD.length;i++) {
			t = window.parent.window.parent.document.getElementsByTagName('object').senate_elections.contentDocument.getElementById('senateSVG').contentDocument.getElementsByTagName('path')[senateLeanD[i]];
			eval('t.onmouseenter = function() { \
				tb = window.parent.window.parent.document.getElementById("hover_box_text_rating"); \
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible"; \
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + senateLeanD[i] + '"; \
				tb.innerHTML = "Lean Dem."; \
				tb.setAttribute("class","Lean Dem"); \
			}')
			t.onmouseleave = function() {
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
			}
			t.setAttribute("class","Lean Dem");
		}
		for(i = 0;i < senateLikelyD.length;i++) {
			t = window.parent.window.parent.document.getElementsByTagName('object').senate_elections.contentDocument.getElementById('senateSVG').contentDocument.getElementsByTagName('path')[senateLikelyD[i]];
			eval('t.onmouseenter = function() { \
				tb = window.parent.window.parent.document.getElementById("hover_box_text_rating"); \
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible"; \
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + senateLikelyD[i] + '"; \
				tb.innerHTML = "Likely Dem."; \
				tb.setAttribute("class","Likely Dem"); \
			}')
			t.onmouseleave = function() {
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
			}
			t.setAttribute("class","Likely Dem");
		}
		for(i = 0;i < senateSolidD.length;i++) {
			t = window.parent.window.parent.document.getElementsByTagName('object').senate_elections.contentDocument.getElementById('senateSVG').contentDocument.getElementsByTagName('path')[senateSolidD[i]];
			eval('t.onmouseenter = function() { \
				tb = window.parent.window.parent.document.getElementById("hover_box_text_rating"); \
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible"; \
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + senateSolidD[i] + '"; \
				tb.innerHTML = "Solid Dem."; \
				tb.setAttribute("class","Solid Dem"); \
			}')
			t.onmouseleave = function() {
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "hidden";
			}
			t.setAttribute("class","Solid Dem");
		}

		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_solid_rep_senate").innerHTML  = senateSolidR.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_likely_rep_senate").innerHTML = senateLikelyR.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_lean_rep_senate").innerHTML   = senateLeanR.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_tossup_senate").innerHTML     = senateTossup.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_lean_dem_senate").innerHTML   = senateLeanD.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_likely_dem_senate").innerHTML = senateLikelyD.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_solid_dem_senate").innerHTML  = senateSolidD.length;
	} catch(err) {
		setTimeout(setHoverColorHouse,1000);
	}
}

window.onload = function() {
	if(document.getElementsByTagName("table")[0].id == "power_graph_house") {
		setHoverColorHouse();
	} else if(document.getElementsByTagName("table")[0].id == "power_graph_senate") {
		setHoverColorSenate();
	}
}
