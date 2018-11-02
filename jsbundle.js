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
	if(typeof houseSolidR != "undefined") {
		for(i = 0;i < houseSolidR.length;i++) {
			t = window.parent.window.parent.document.getElementsByTagName('object').house_elections.contentDocument.getElementById('houseSVG').contentDocument.getElementsByTagName('path')[houseSolidR[i]];
			eval('t.onmouseenter = function() { \
				tb = window.parent.window.parent.document.getElementById("hover_box_text_rating"); \
				window.parent.window.parent.document.getElementById("hover_box").style.visibility = "visible"; \
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + t.id + '"; \
				tb.innerHTML = "Solid Rep."; \
				tb.setAttribute("class","Solid Rep"); \
				const bbox = el.getBoundingClientRect(); \
				window.parent.window.parent.document.getElementById("hover_box").style.top = bbox.left + bbox.width / 2; \
				window.parent.window.parent.document.getElementById("hover_box").style.left = bbox.top + bbox.height / 2; \
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
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + t.id + '"; \
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
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + t.id + '"; \
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
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + t.id + '"; \
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
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + t.id + '"; \
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
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + t.id + '"; \
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
				window.parent.window.parent.document.getElementById("hover_box_text_district").innerHTML = "' + t.id + '"; \
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

		/*
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_solid_rep_senate").innerHTML  = senateSolidR.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_likely_rep_senate").innerHTML = senateLikelyR.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_lean_rep_senate").innerHTML   = senateLeanR.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_tossup_senate").innerHTML     = senateTossup.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_lean_dem_senate").innerHTML   = senateLeanD.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_likely_dem_senate").innerHTML = senateLikelyD.length;
		window.parent.window.parent.document.getElementById("senate_elections").contentDocument.getElementById("power_graph_solid_dem_senate").innerHTML  = senateSolidD.length;
		*/
	} else {
		setTimeout(setHoverColorHouse,1000);
	}
}

window.onload = function() {
	//setTooltip();
	setHoverColorHouse();
}
