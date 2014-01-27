function show(){
	// Listen for the content script to send a message to the background page.
	chrome.extension.onRequest.addListener(onRequest);
	//document.getElementById("birthday_reminders_link").click();
	var div = document.createElement("div");
	//var birthdayNames = document.getElementsByClassName('fbRemindersSubtitleActionList fsm fwn fcg');
	//for(var c = 0; c < birthdayNames.length; c++){
	for(var c = 0; c < 4; c++){
		//var nameTags = birthdayNames[c].getElementsByTagName('a');
		//var name = nameTags[0].innerHTML;
		var name = "Amith";
		//dynamically create elements
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.setAttribute("checked","checked");
		div.appendChild(checkbox);
		var span = document.createElement("span");
		span.innerHTML = name;
		div.appendChild(span);
		var textbox = document.createElement("input");
		textbox.type = "text";
		textbox.setAttribute("value","Happy Birthday...!!!");
		div.appendChild(textbox);
		var breakline = document.createElement("br");
		//add elements to body

		div.appendChild(breakline);
	}
	var btn=document.createElement("button");
	btn.innerHTML = "Send All";
	div.appendChild(btn);
	document.body.appendChild(div);
}
window.onload=show;