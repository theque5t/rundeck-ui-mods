jQuery(function () {
var project = rundeckPage.project();

if(project){
	console.log(project);
}else{
	console.log('main sccreen');
}
var path = rundeckPage.path();
console.log(path);

var para = document.createElement("div");
para.style.backgroundColor = "white";
para.style.fontSize = "150%";
para.style.textAlign = "center";

//element only in Home
if(!project){
	var div = document.createElement("div");
	div.style.fontSize = "250%";
	div.id = "testuifield";
	var nodeHome = document.createTextNode("Hello Rundeck.");
	div.appendChild(nodeHome);
	para.appendChild(div);
}

var xkcd = document.createElement("div");
xkcd.id = "xkcdfield";
para.appendChild(xkcd);


var x = document.getElementsByClassName("navbar");
var i;
for (i = 0; i < x.length; i++) {
    x[i].appendChild(para);
} 
var pluginName = RDPLUGIN['test-ui'];


demo_init_plugin(pluginName, function () {
	if(rundeckPage.path() == "menu/home"){
		var salute = 'Hello';
		if(window.Messages){
			//loaded i18n
			//rundeck-ui-hello-world
			salute = window.Messages[pluginName+'.Salute'];
		}
		jQuery("#testuifield").text(salute);
	}
	
	if(rundeckPage.path() == "menu/jobs"){
		//on any project page
		jQuery.ajax({
			beforeSend: function(xhr){
			    if (xhr.overrideMimeType)
			    {
			      xhr.overrideMimeType("application/json");
			    }
			  },
			dataType: 'json',
	        url: url_path(rundeckPage.pluginBasei18nUrl(pluginName))+'/service/xkcdsource.json',
	        success: function (data) {
	            var imgCount = data.list.length;
	            var n = Math.floor(Math.random() * imgCount);
	            var image = data.list[n];
	            if(image.img){
	            	jQuery("#xkcdfield").prepend(jQuery('<img>',{id:'xcdImg',src:image.img}));
	            }
	        }
	    });
	}
	//dramatic failed job
	if(rundeckPage.path() == "execution/show"){
		console.log("job status");
		var status = (jQuery(".exec-status")[0].getAttribute("data-execstate"));
		if(status == 'failed'){
			//bs-example-navbar-collapse-1
			jQuery("#bs-example-navbar-collapse-1").css("backgroundColor", "red");
		}
	}
});

});