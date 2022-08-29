        function clickme(ida) {
           /* var data = ev.dataTransfer.getData("text");
           */
          var dat=ida;
          meme=dat.startsWith("_",0);
         /*const check = confirm("Are you sure you want to delete this item ? on event ="+meme+" ["+dat+"]");
         */ 
         /* window.location.href = "https://stackoverflow.com"; */
        //  check = confirm("item already approved. on event ="+dat); 
          
   
         //check = confirm("item already approved. on event ="+x); //+"@"+x); 

           if (meme) {
               window.open('/getRel/'+dat,'name','width=800,height=600'); 
           }
           else {
               window.open('/getRelAct_info/'+dat,'name','width=800,height=600')
           }
        }
        
        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }

        function allowDrop(ev) {

            ev.preventDefault();
        }

        function drop(ev) {
            ev.preventDefault();
            var dat = ev.dataTransfer.getData("text");
            var x = document.getElementById(dat).parentElement.id;
            ev.currentTarget.appendChild(document.getElementById(dat));
            tgtState=ev.target.id;
            srcState=x;        
            /*
            check = confirm(srcState+" --> "+tgtState); 
                to determine the workflow
            */
           // check = confirm("item already approved. on event ="+data); 
            if (srcState == "todo") {
                if (tgtState == "wip"){
                    window.open('/getRel/'+dat,'name','width=800,height=600'); 
                }
                else
                {
                  check=confirm("Permissiable state from Open: [WIP] but trying:"+tgtState);
                  location.reload();
                }
            }
            if (srcState == "wip") {
                if (tgtState == "review"){
                 window.open('/getRelAct/'+dat,'name','width=800,height=600');
                }
                else
                {
                  check=confirm("Permissiable state from WIP: [Review] but trying:"+tgtState);
                  location.reload();
                }
            }
            if (srcState == "review") {
                if (tgtState == "test" || tgtState =="wip" || tgtState=="kiv"){
                    window.open('/getRelAct4review/'+dat,'name','width=800,height=600');
                }
                else
                {
                  check=confirm("Permissiable states from Review: [Test, WIP, KIV] but trying:"+tgtState);
                  location.reload();
                }
            }
            if (srcState == "test") {
                if (tgtState == "uat" || tgtState =="wip" || tgtState=="review"){
                    window.open('/getRelAct4review/'+dat,'name','width=800,height=600');
                }
                else
                {
                  check=confirm("Permissiable states from Review: [UAT, WIP, Review] but trying:"+tgtState);
                  location.reload();
                }
            }
            if (srcState == "uat") {
                if (tgtState == "deliver" || tgtState =="wip" || tgtState=="test" || tgtState=="kiv"){
                    window.open('/getRelAct4review/'+dat,'name','width=800,height=600');
                }
                else
                {
                  check=confirm("Permissiable states from Review: [Deliver, WIP, Test] but trying:"+tgtState);
                  location.reload();
                }
            }
            if (srcState == "deliver") {
                if (tgtState == "close" || tgtState =="wip" || tgtState=="uat"){
                    window.open('/getRelAct4review/'+dat,'name','width=800,height=600');
                }
                else
                {
                  check=confirm("Permissiable states from Review: [Close, WIP] but trying:"+tgtState);
                  location.reload();
                }
            }
            if (srcState == "kiv") {
                if (tgtState == "wip"){
                    window.open('/getRelAct4review/'+dat,'name','width=800,height=600');
                }
                else
                {
                  check=confirm("Permissiable state from Review: [WIP]but trying:"+tgtState);
                  location.reload();
                }
            }
            if (srcState == "close") {
                  check=confirm("You cannot work on a closed request.");
                  location.reload();
            }
            /*
                refresh screen after drop
                location.reload();
            */
        }
        function refreshTask(){
            location.reload();
        }
        function createTask(){
            
            window.open('/list_App_4rel','name','width=800,height=350');
        }