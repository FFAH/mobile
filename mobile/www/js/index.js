var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },



    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        //alert(device.cordova);//访问设备的版本
        //alert(device.model);//chrome/
        //alert(device.platform);//Android,browser
        // Here, we redirect to the web site.
        var targetUrl;
        if(device.platform.toLowerCase() =='browser'){
            targetUrl= "http://127.0.0.1:4567/?platform=browser";
        } else if(device.platform.toLowerCase() =='android'){
             targetUrl = "http://10.0.2.2:4567/?platform=android";
        }  else if(device.platform.toLowerCase() =='ios'){
            targetUrl = "http://10.0.2.2:4567/?platform=ios";
        }
        //if(device.platform.toLowerCase() =='browser'){
        //    targetUrl= "http://139.196.54.156:4567/?platform=browser";
        //} else if(device.platform.toLowerCase() =='android'){
        //    targetUrl ="http://139.196.54.156:4567/?platform=android";
        //}  else if(device.platform.toLowerCase() =='ios'){
        //    targetUrl = "http://139.196.54.156:4567/";
        //}

        //手机回退功能



        //var bkpLink = document.getElementById("bkpLink");
        //bkpLink.setAttribute("href", targetUrl);
        //bkpLink.text = targetUrl;
        window.location.replace(targetUrl);



    },
    // Note: This code is taken from the Cordova CLI template.
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
       // var listeningElement = parentElement.querySelector('.listening');
       // var receivedElement = parentElement.querySelector('.received');

       // listeningElement.setAttribute('style', 'display:none;');
       // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();