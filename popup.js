/* THIS IS A BETA VERSION, NOT LINE-OPTIMIZED INTO THE SCRIPTS */
/* V2 under development, functions to reduce lines and dictionary improvements coming */

window.onload = function(){

    document.getElementById("Go").onclick = function(){

        /* Main search value */
        var srch = document.getElementById('search').value;

        /* StackOverflow Hyperlink */
            var so = document.getElementById('search').value;
            so = so.replace(/\s/g, '+');
            so = "<a href='https://stackoverflow.com/search?q="+so+"' target='_blank'>Stack Overflow</a>";
            chrome.storage.sync.get("enabled0", function (data) {
                if(data.enabled2 === 1){
                    document.getElementById('stack').innerHTML = so;
                }
            });

        /* Google Hyperlink */
            var goo = document.getElementById('search').value;
            goo = goo.replace(/\s/g, '+');
            goo = "<a href='https://www.google.com/search?q="+goo+"' target='_blank'>Google</a>";
            chrome.storage.sync.get("enabled11", function (data) {
                if(data.enabled4 === 1){
                    document.getElementById('google').innerHTML = goo;
                }
            });


        /* Youtube Hyperlink */
            var yt = document.getElementById('search').value;
            yt = yt.replace(/\s/g, '+');
            yt = "<a href='https://www.youtube.com/results?search_query="+yt+"' target='_blank'>Youtube</a>";
            chrome.storage.sync.get("enabled2", function (data) {
                if(data.enabled5 === 1){
                    document.getElementById('youtube').innerHTML = yt;
                }
            });
        

        /* Tutorials Hyperlink */
            var tt = document.getElementById('search').value;
            tt = tt.replace(/\s/g, '+');
            tt = "<a href='https://www.hostinger.com.br/tutoriais/?s="+tt+"' target='_blank'>Hostinger Tutorials</a>";
            chrome.storage.sync.get("enabled3", function (data) {
                if(data.enabled6 === 1){
                    document.getElementById('tutorials').innerHTML = tt;
                }
            });
        
        /* Options */

        /* Storage Set */
        chrome.storage.sync.set({'search': srch}, function(){
        });

        chrome.storage.sync.set({'stack': so}, function(){
        });

        chrome.storage.sync.set({'google': goo}, function(){
        });

        chrome.storage.sync.set({'youtube': yt}, function(){
        });

        chrome.storage.sync.set({'tutorials': tt}, function(){
        });
    }

    /* Storage Get */
    chrome.storage.sync.get("search", function(data){
        if(data.search != undefined){
            document.getElementById('search').placeholder = data.search;
        }else{
            document.getElementById('search').placeholder = "Do your first search!";
        }
    });

    chrome.storage.sync.get("enabled0", function (data) {
        if(data.enabled2 === 1){
            chrome.storage.sync.get("stack", function(data){
                if(data.stack != undefined){
                    document.getElementById('stack').innerHTML = data.stack;
                }
            });
        }
    });

    chrome.storage.sync.get("enabled11", function (data) {
        if(data.enabled4 === 1){
            chrome.storage.sync.get("google", function(data){
                if(data.google != undefined){
                    document.getElementById('google').innerHTML = data.google;
                }
            });
        }
    });

    chrome.storage.sync.get("enabled2", function (data) {
        if(data.enabled5 === 1){
            chrome.storage.sync.get("youtube", function(data){
                if(data.youtube != undefined){
                    document.getElementById('youtube').innerHTML = data.youtube;
                }
            });
        }
    });

    chrome.storage.sync.get("enabled3", function (data) {
        if(data.enabled6 === 1){
            chrome.storage.sync.get("tutorials", function(data){
                if(data.tutorials != undefined){
                    document.getElementById('tutorials').innerHTML = data.tutorials;
                }
            });
        }
    });
}