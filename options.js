/* THIS IS A BETA VERSION, NOT LINE-OPTIMIZED INTO THE SCRIPTS */
/* V2 under development, functions to reduce lines and dictionary improvements coming */

/* ------------------------ GET SESSION ------------------------ */

document.body.onload = function() {
    
    /* Separator */
    chrome.storage.sync.get("enabled0", function (data) {
        
        if(data.enabled0 === undefined){
            chrome.storage.sync.set({ "enabled0" : 1 }, function() {
                document.getElementById("0").className = "text-decoration text-success";
                document.getElementById("a").checked = true;
            });
        }else if(data.enabled0 === 1){
            document.getElementById("0").className = "text-decoration text-success";
            document.getElementById("a").checked = true;
        }else{
            document.getElementById("0").className = "text-decoration text-muted";
            document.getElementById("a").checked = false;
        }
    });

    /* Separator */
    chrome.storage.sync.get("enabled11", function (data) {
        if(data.enabled11 === undefined){
            chrome.storage.sync.set({ "enabled11" : 1 }, function() {
                document.getElementById("11").className = "text-decoration text-success";
                document.getElementById("b").checked = true;
            });
        }else if(data.enabled11 === 1){
            document.getElementById("11").className = "text-decoration text-success";
            document.getElementById("b").checked = true;
        }else{
            document.getElementById("11").className = "text-decoration text-muted";
            document.getElementById("b").checked = false;
        }
    });

    /* Separator */
    chrome.storage.sync.get("enabled2", function (data) {
        if(data.enabled2 === undefined){
            chrome.storage.sync.set({ "enabled2" : 1 }, function() {
                document.getElementById("2").className = "text-decoration text-success";
                document.getElementById("c").checked = true;
            });
        }else if(data.enabled2 === 1){
            document.getElementById("2").className = "text-decoration text-success";
            document.getElementById("c").checked = true;
        }else{
            document.getElementById("2").className = "text-decoration text-muted";
            document.getElementById("c").checked = false;
        }
    });

    /* Separator */
    chrome.storage.sync.get("enabled3", function (data) {
        if(data.enabled3 === undefined){
            chrome.storage.sync.set({ "enabled3" : 1 }, function() {
                document.getElementById("3").className = "text-decoration text-success";
                document.getElementById("d").checked = true;
            });
        }else if(data.enabled3 === 1){
            document.getElementById("3").className = "text-decoration text-success";
            document.getElementById("d").checked = true;
        }else{
            document.getElementById("3").className = "text-decoration text-muted";
            document.getElementById("d").checked = false;
        }
    });

}
/* ------------------------ SET SESSION ------------------------ */

document.getElementById("Save").addEventListener('click', function () {
    
    /* Separator */
    if(document.getElementById("a").checked){
        chrome.storage.sync.set({ "enabled0" : 1 }, function() {
            document.getElementById("0").className = "text-decoration text-success";
            document.getElementById("a").checked = true;
        });
    }else{
        chrome.storage.sync.set({ "enabled0" : 0 }, function() {
            document.getElementById("0").className = "text-decoration text-muted";
            document.getElementById("a").checked = false;
        });
    }
    
    /* Separator */
    if(document.getElementById("b").checked){
        chrome.storage.sync.set({ "enabled11" : 1 }, function() {
            document.getElementById("11").className = "text-decoration text-success";
            document.getElementById("b").checked = true;
        });
    }else{
        chrome.storage.sync.set({ "enabled11" : 0 }, function() {
            document.getElementById("11").className = "text-decoration text-muted";
            document.getElementById("b").checked = false;
        });
    }

    /* Separator */
    if(document.getElementById("c").checked){
        chrome.storage.sync.set({ "enabled2" : 1 }, function() {
            document.getElementById("2").className = "text-decoration text-success";
            document.getElementById("c").checked = true;
        });
    }else{
        chrome.storage.sync.set({ "enabled2" : 0 }, function() {
            document.getElementById("2").className = "text-decoration text-muted";
            document.getElementById("c").checked = false;
        });
    }

    /* Separator */
    if(document.getElementById("d").checked){
        chrome.storage.sync.set({ "enabled3" : 1 }, function() {
            document.getElementById("3").className = "text-decoration text-success";
            document.getElementById("d").checked = true;
        });
    }else{
        chrome.storage.sync.set({ "enabled3" : 0 }, function() {
            document.getElementById("3").className = "text-decoration text-muted";
            document.getElementById("d").checked = false;
        });
    }
    
});

/* ------------------------ CLEAR SESSION ------------------------ */

document.getElementById("Clear").onclick = function(){
    chrome.storage.local.clear(function() {
        var error = chrome.runtime.lastError;
        if (error) {
            console.error(error);
        }
        alert('Settings cleared!');
    });
    chrome.storage.sync.clear();
}