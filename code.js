  Init();
  Start();

function Init(){
    
    html="<h1>@JUDOKU - GAME</h1>";
    html+="<div id='main_div'>";
    var temp_num=0;
    for (var i =0;i<81;i++){        
        if(temp_num===9){temp_num=0;};
        temp_num=temp_num+1; 
        var id_cnt=i+1;
        html+="<button class='btn_1' id=cell_"+id_cnt+" type='button'>"+temp_num+"</button>";
        if (i%9===8 && i!==0){
            html+="<br>";
        }
    } 
html+="</div>";
document.write(html);
document.getElementById("main_div").style.display="none";

}

function Start(){
   
    do {
        MakeNewTable();
        
        res=MakeNewTable();
        //console.log(res);
        if(res===true){ 
            
            Arr_F=[];            
            Arr_J=[];
            for(var i=0;i<9;i++){ 
                
                for(var y=0;y<9;y++){
                    
                    rand_numb=Math.floor(Math.random()*100)+1;
                    
                    if (rand_numb<50){rand_numb="btn_0";}else{rand_numb="btn_1";}

                    Arr_F[i+9*y]={Nbr:eval("Arr_1"+(parseInt(y)+1))[i],Bln:rand_numb};
                    Arr_J[i+9*y]={Nbr:eval("Arr_1"+(parseInt(y)+1))[i]};

                    document.getElementById("main_div").style.display="block"; 
                }     
            }
            
            var JsonArr_F = JSON.stringify(Arr_F);
            var JsonArr_J = JSON.stringify(Arr_J);
           
           sendJSON(Arr_J);            
                      
            for(i in Arr_F){
                document.getElementById("cell_"+(parseInt(i)+1)).innerHTML=Arr_F[i]["Nbr"];
                document.getElementById("cell_"+(parseInt(i)+1)).className=Arr_F[i]["Bln"];
            }
            
           }
        
    } while (res===false)  
        
}

function sendJSON(Arr_J){
    var JsonArr_J = "json="+JSON.stringify(Arr_J);
   console.log(JsonArr_J);
      
    var req=createReq();
    
    url='Data/handler.php',
    req.open("POST",url,false);
    req.setRequestHeader("Content-type", "application/json");
    req.send(JsonArr_J);
      
}

function MakeNewTable(){

    SQR_1 = [1,2,3,10,11,12,19,20,21];
    SQR_2 = [4,5,6,13,14,15,22,23,24];
    SQR_3 = [7,8,9,16,17,18,25,26,27];
    SQR_4 = [28,29,30,37,38,39,46,47,48];
    SQR_5 = [31,32,33,40,41,42,49,50,51];
    SQR_6 = [34,35,36,43,44,45,52,53,54];
    SQR_7 = [55,56,57,64,65,66,73,74,75];
    SQR_8 = [58,59,60,67,68,69,76,77,78];
    SQR_9 = [61,62,63,70,71,72,79,80,81];    
               
    Arr_1 = [];
    Arr_2 = [];
    Arr_3 = [];
    Arr_4 = [];
    Arr_5 = [];
    Arr_6 = [];
    Arr_7 = [];
    Arr_8 = [];
    Arr_9 = [];
    Arr_11 = [];
    Arr_12 = [];
    Arr_13 = [];
    Arr_14 = [];
    Arr_15 = [];
    Arr_16 = [];
    Arr_17 = [];
    Arr_18 = [];
    Arr_19 = [];
    Arr_21 = [];
    Arr_22 = [];
    Arr_23 = [];
    Arr_24 = [];
    Arr_25 = [];
    Arr_26 = [];
    Arr_27 = [];
    Arr_28 = [];
    Arr_29 = [];    
    
    
    SQR=[SQR_1,SQR_2,SQR_3,SQR_4,SQR_5,SQR_6,SQR_7,SQR_8,SQR_9]; 
    
    Arr_0 = [1,2,3,4,5,6,7,8,9]; 
    
    //    wiersze 1, col 1-9, square 1,2,3 ------------------------------
    
    for (var i in Arr_0){
    var x=false;
        
        do {
            rand_numb=Math.floor(Math.random()*(Arr_0.length))+1;            
            //console.log(rand_numb);
            if(Arr_11.indexOf(rand_numb)===-1){x=true;
            
            }else{x=false;};
        
        } while (x===false);        
        
            Arr_11.push(rand_numb);                  
    }        
    
    
    Arr_1.push(Arr_11[0]);
    Arr_1.push(Arr_11[1]);
    Arr_1.push(Arr_11[2]);
    Arr_2.push(Arr_11[3]);
    Arr_2.push(Arr_11[4]);
    Arr_2.push(Arr_11[5]);
    Arr_3.push(Arr_11[6]);
    Arr_3.push(Arr_11[7]);
    Arr_3.push(Arr_11[8]);
    Arr_21.push(Arr_11[0]);
    Arr_22.push(Arr_11[1]);
    Arr_23.push(Arr_11[2]);
    Arr_24.push(Arr_11[3]);
    Arr_25.push(Arr_11[4]);
    Arr_26.push(Arr_11[5]);
    Arr_27.push(Arr_11[6]);
    Arr_28.push(Arr_11[7]);
    Arr_29.push(Arr_11[8]);

    
    //    wiersze 2-9, col 1-3, square 1,4,7 -----------------------
    
    Arr_supp=[
        {row:"Arr_12",sq:"Arr_1"},
        {row:"Arr_13",sq:"Arr_1"},
        {row:"Arr_14",sq:"Arr_4"},
        {row:"Arr_15",sq:"Arr_4"},
        {row:"Arr_16",sq:"Arr_4"},
        {row:"Arr_17",sq:"Arr_7"},
        {row:"Arr_18",sq:"Arr_7"},
        {row:"Arr_19",sq:"Arr_7"}
    ];
 
    for(y in Arr_supp){           
        
            for(var i=0;i<3;i++){
        
            var col_arr = eval("Arr_2"+(i+1));
            var x=false;
            var cnt=0;
            A_row=eval(Arr_supp[y]["row"]);
            A_sq=eval(Arr_supp[y]["sq"]);
            
            //console.log(A_row);
            
             do {
            rand_numb=Math.floor(Math.random()*Arr_0.length)+1; 
            cnt++;        
            if (cnt==10000){return false;break;};
            
            if(A_row.indexOf(rand_numb)===-1
                    && A_sq.indexOf(rand_numb)===-1
                    && col_arr.indexOf(rand_numb)===-1)            
                    {x=true;
            
            }else{x=false;};
        
            } while (x===false);        
        
            A_row.push(rand_numb);
            A_sq.push(rand_numb);
            col_arr.push(rand_numb); 
        }
        
    }

  //    wiersze 2-9, col 4-6, square 2,5,8 -----------------------
    
    Arr_supp=[
        {row:"Arr_12",sq:"Arr_2"},
        {row:"Arr_13",sq:"Arr_2"},
        {row:"Arr_14",sq:"Arr_5"},
        {row:"Arr_15",sq:"Arr_5"},
        {row:"Arr_16",sq:"Arr_5"},
        {row:"Arr_17",sq:"Arr_8"},
        {row:"Arr_18",sq:"Arr_8"},
        {row:"Arr_19",sq:"Arr_8"}
    ];
    
   // console.log(Arr_supp);
 
    for(y in Arr_supp){           
        
            for(var i=3;i<6;i++){
        
            var col_arr = eval("Arr_2"+(i+1));
            var x=false;
            var cnt=0;
            A_row=eval(Arr_supp[y]["row"]);
            A_sq=eval(Arr_supp[y]["sq"]);
            
            //console.log(A_row);
            
             do {
            rand_numb=Math.floor(Math.random()*Arr_0.length)+1; 
            cnt++;        
            if (cnt==10000){return false;break;};
            
            if(A_row.indexOf(rand_numb)===-1
                    && A_sq.indexOf(rand_numb)===-1
                    && col_arr.indexOf(rand_numb)===-1)            
                    {x=true;
            
            }else{x=false;};
        
            } while (x===false);        
        
            A_row.push(rand_numb);
            A_sq.push(rand_numb);
            col_arr.push(rand_numb); 
        }
        
    }

    //    wiersze 2-9, col 7-9, square 3,6,9 -----------------------
    
    Arr_supp=[
        {row:"Arr_12",sq:"Arr_3"},
        {row:"Arr_13",sq:"Arr_3"},
        {row:"Arr_14",sq:"Arr_6"},
        {row:"Arr_15",sq:"Arr_6"},
        {row:"Arr_16",sq:"Arr_6"},
        {row:"Arr_17",sq:"Arr_9"},
        {row:"Arr_18",sq:"Arr_9"},
        {row:"Arr_19",sq:"Arr_9"}
    ];
    
  //console.log(Arr_supp);
 
    for(y in Arr_supp){           
        
            for(var i=6;i<9;i++){
        
            var col_arr = eval("Arr_2"+(i+1));
            var x=false;
            var cnt=0;
            A_row=eval(Arr_supp[y]["row"]);
            A_sq=eval(Arr_supp[y]["sq"]);
            
            //console.log(A_row);
            
             do {
            rand_numb=Math.floor(Math.random()*Arr_0.length)+1; 
            cnt++;        
            if (cnt==10000){return false;break;};
            
            if(A_row.indexOf(rand_numb)===-1
                    && A_sq.indexOf(rand_numb)===-1
                    && col_arr.indexOf(rand_numb)===-1)            
                    {x=true;
            
            }else{x=false;};
        
            } while (x===false);        
        
            A_row.push(rand_numb);
            A_sq.push(rand_numb);
            col_arr.push(rand_numb); 
        }
        
    }
    
//    console.log(Arr_11);
//    console.log(Arr_12);
//    console.log(Arr_13);
//    console.log(Arr_14);
//    console.log(Arr_15);
//    console.log(Arr_16);
//    console.log(Arr_17);
//    console.log(Arr_18);
//   console.log(Arr_19);
    return true;
    
   
    }

