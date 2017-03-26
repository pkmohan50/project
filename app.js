		// Initialize Firebase
	  	var config = {
   		apiKey: "AIzaSyC1fK5BUmDK66Im40vesmMHadcjLseFxvQ",
   		authDomain: "sih1-c04cf.firebaseapp.com",
   		databaseURL: "https://sih1-c04cf.firebaseio.com",
   		storageBucket: "sih1-c04cf.appspot.com",
	  	messagingSenderId: "657409475726"
		};
		firebase.initializeApp(config);

		var database = firebase.database();
		var FullURL = window.location.href;
		var param = FullURL.split('=');
		if (param[1] == 'Arrival')
			var flyRef = database.ref('Flights').orderByChild('Type').equalTo('Arrival');
		if (param[1] == 'Departure')
			var flyRef = database.ref('Flights').orderByChild('Type').equalTo('Departure');
		flyRef.on('value', gotData, errData);

		function gotData(data){
			//console.log(data.val());
			var Flights = data.val();
			var keys = Object.keys(Flights);
			//console.log(keys);
			for(var i = 0; i < keys.length; i++) {
				var k = keys[i];
				var Airlines = Flights[k].Airlines;
				var Type = Flights[k].Type;
				var Status=Flights[k].Status;
				console.log(Airlines, Type, Status);
				//document.getElementById("dlink").innerHTML = "<a href = 'flightindie.html?v=k'>";
				//var node = document.getElementById("dlink");
				//node.appendChild(document.createTextNode("<a href = 'flightindie.html?v=k'>"));
				document
					.querySelector("#flightlist")
					.innerHTML+='<li class="list-group-item Flights[k]" style="border-style:solid; text-align:center; border-color:Teal; text-decoration:none; border-radius:50px;  border-width:10px; font-size:30px; margin:20px; padding:10px 25px 10px 25px;  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); text-align:center; position:relative; top:20px"<div  class="lead"><img style="position:relative; display:block; top:90px; text-align:right;" src="https://s15.postimg.org/aq8a956t7/462084.jpg" width="150" height="150"><p style="position:relative; bottom:75px; ">'+Flights[k].Airlines+'</p></div> <p style="position:relative; bottom:75px;">'+Flights[k].Type+'</p><p style="position:relative; bottom:75px;">'+Flights[k].Status+'</p></li>';
			}
		}

		function errData(err){
			console.log("Error!");
			console.log(err);
		}
