* From Bit Bucket, pull from your terminal and use grunt to view, simply clone repo, 
	cd into directory "BackbaseWeatherApp" 
	run npm install
	run bower install
	"grunt serve" to view localhost:9000.

* I was having grunt build errors and project was not compiling correctly so I could not create version with index.html working, it only works when you run with grunt serve.  

* FYI: I am currently in yoga teacher training so Saturday and Sunday I was in class from 1pm-6pm and didn't have as much time as I'd have liked to add more functionality and formatting.

* To save on time I used the Angular Yeoman generator. If I set up the directory myself I'd probably group files by feature rather than type. Also I would have included a directory along with controllers for factories and services. To save on time I included the factory in the view's JS right after the controller JS. 

* I could run the project just fine with "grunt serve" but when I tried building the project (so you can view with just index.html), it was not working. I think due to some dependencies not found in the grunt task. To work around this I did not use ngRoute but just inserted the main.html into index.html. The end result is exactly the same but just wanted to let you know that's why there's functionality to use ngRoute and views but I did not end up utilizing it.

* I got OpenLayers map to show but it was in Russian and Google Maps API was not working so I did not include a map even though I really wanted to. My vision was to have the user click on one of the 5 cities on the map and have their data display. Instead, it is a drop down.

* I used a Factory to hold the functionality for calling API. This can be extended for any other calls I want to use to the API and keep things organized. 

* I 