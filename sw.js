console.log("I am sw");
self.addEventListener('fetch', event=>{
//	debugger;
	console.log("inside fetch");
	//if(event.request.url.indexOf("batch") >= 0){
	event.respondWith("hello world");//}
});