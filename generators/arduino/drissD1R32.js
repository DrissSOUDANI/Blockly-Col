
//// petit code pour remplacer les caractères accentués
  var rules = {
      a:"àáâãäå",
      A:"ÀÁÂ",
      e:"èéêë",
      E:"ÈÉÊË",
      i:"ìíîï",
      I:"ÌÍÎÏ",
      o:"òóôõöø",
      O:"ÒÓÔÕÖØ",
      u:"ùúûü",
      U:"ÙÚÛÜ",
      y:"ÿ",
      c: "ç",
      C:"Ç",
      n:"ñ",
      N:"Ñ"
      }; 
 
   function  getJSONKey(key){
     for (acc in rules){ if (rules[acc].indexOf(key)>-1){return acc} }
   }
   
  function replaceSpec(Texte){
    regstring=""
    for (acc in rules) { regstring+=rules[acc] }
    reg=new RegExp("["+regstring+"]","g" )
      return Texte.replace(reg,function(t){ return getJSONKey(t) });
    }
// fin de code


function getEmplacement(theBloc)  {
  //alert(theBloc.getSurroundParent().getSurroundParent().type);
  var zone='';
    if(theBloc.getSurroundParent()){
      if(a=theBloc.getSurroundParent().getInputTargetBlock("HEAD") ){
        while(a){ 
          //alert(a.name+'\n'+theBloc.name); 
          if(a.id==theBloc.id) {zone='HEAD'; break;};
          a=a.getNextBlock();
        }
      }

      if(a=theBloc.getSurroundParent().getInputTargetBlock("BODY") ){
        while(a){ 
          //alert(a.name+'\n'+theBloc.name); 
          if(a.id==theBloc.id) {zone='BODY'; break;};
          a=a.getNextBlock();
        }
      }

      if(a=theBloc.getSurroundParent().getInputTargetBlock("CADRE") ){
        while(a){ 
          //alert(a.name+'\n'+theBloc.name); 
          if(a.id==theBloc.id) {zone='CADRE'; break;};
          a=a.getNextBlock();
        }
      }


      if(a=theBloc.getSurroundParent().getInputTargetBlock("LEDGROVE") ){
        while(a){ 
          //alert(a.name+'\n'+theBloc.name); 
          if(a.id==theBloc.id) {zone='LEDGROVE'; break;};
          a=a.getNextBlock();
        }
      }
/*
      if(a=theBloc.getSurroundParent().getInputTargetBlock("SENDTOWEB") ){
        while(a){ 
          //alert(a.name+'\n'+theBloc.name); 
          if(a.id==theBloc.id) {zone='TASK'; break;};
          a=a.getNextBlock();
        }
      }
*/
    }
    return(zone);
  }


//***************************************************************************************************************************************
//------------------------------------------------------------------------------------------------------------------------------
//driss_D1R32_executer_taches_paralleles
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_D1R32_executer_taches_paralleles = function() {
  var statements_task_1 = Blockly.Arduino.statementToCode(this, 'TASK_1');
  var statements_task_2 = Blockly.Arduino.statementToCode(this, 'TASK_2');
  //alert(statements_tasks);
  var code =  "vTaskDelay(portMAX_DELAY);\n";
  return code;

};

//------------------------------------------------------------------------------------------------------------------------------
//driss_D1R32_definir_tache
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_D1R32_definir_tache = function() {
  
  var name_task = Blockly.Arduino.valueToCode(this, 'TASK_NAME', Blockly.Arduino.ORDER_ATOMIC);
  var num_task = Blockly.Arduino.valueToCode(this, 'NUM_TASK', Blockly.Arduino.ORDER_ATOMIC);
  var taille_pile = Blockly.Arduino.valueToCode(this, 'TAILLE_PILE', Blockly.Arduino.ORDER_ATOMIC);
  var coeur = Blockly.Arduino.valueToCode(this, 'COEUR', Blockly.Arduino.ORDER_ATOMIC);
  var priorite = Blockly.Arduino.valueToCode(this, 'PRIORITE', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['define_PAGE_EXIST'] = '#define PAGE_EXIST';

  Blockly.Arduino.variables_['var_task_'+num_task] = 'TaskHandle_t task_'+num_task+';';
  
  Blockly.Arduino.tasks_['setup_task_'+num_task] =  'xTaskCreatePinnedToCore(Esp32_Multitask_task_'+num_task+',"task_'+num_task+'",'+taille_pile+',NULL,'+priorite+',&task_'+num_task+','+coeur+');\n'+
                                            '  delay(500);';
   
  var code =  "";
  return code;

};

//------------------------------------------------------------------------------------------------------------------------------
//driss_D1R32_définir_les_actions_de_la_tache
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_D1R32_définir_les_actions_de_la_tache = function() {
  var num_task = this.getFieldValue('NUN_TASK');
  var statements_task_actions = Blockly.Arduino.statementToCode(this, 'TASK_ACTIONS');
  
  var tache = 'task_'+num_task;
   
  if(!Blockly.Arduino.tasktab_[num_task]){
    Blockly.Arduino.tasktab_[num_task] = Object.create(null);
    //Blockly.Arduino.tasktab_[num_task][0] = 2

  }

  //var task_id = Blockly.Arduino.tasktab_[num_task][0];
  
  Blockly.Arduino.tasktab_[num_task]["debut"] = 'void Esp32_Multitask_'+tache+'(void *arg) {\n'+
                                                '  while(true) {\n';
  //Blockly.Arduino.tasktab_[num_task][task_id] = ''+statements_task_actions+'';
  Blockly.Arduino.tasktab_[num_task]["actions"] = ''+statements_task_actions+'';
  Blockly.Arduino.tasktab_[num_task]["fin"] = '  }\n'+
                                              ' }';
  //task_id++;
  //Blockly.Arduino.tasktab_[num_task][0] = task_id;;
  
   
  //alert(num_task+'\n'+statements_task_actions);
  var code =  '';//statements_task_actions;
  return code;

};

/*
Blockly.Arduino.driss_D1R32_initialisation = function() { 
  Blockly.Arduino.includes_['define_Duinoedu_Esp8266'] = "#include <Duinoedu_Esp8266.h>";

  Blockly.Arduino.variables_['var_MonEsp'] = "Duinoedu_Esp8266 MonEsp;";
  

  Blockly.Arduino.codeFunctions_['define_handleRoot'] = '\nvoid handleRoot(){\n'+
   '  server.send ( 200, "text/html", getPage() );\n'+ 
   '  delay(10);\n'+
   '}\n'; 

  Blockly.Arduino.xmltab_['debut'] =  'String buildXML(){\n'+
                                      '  String XML="<?xml version=\'1.0\'?><inputs>";';
  Blockly.Arduino.xmltab_['fin']   =  '  XML+="</inputs>";\n'+
                                      '  return XML;\n'+
                                      ' }';

  Blockly.Arduino.javatab_['debut'] =  'String buildJavascript(){\n'+
                                       '  String javaScript=MonEsp.javaScript_start();';
  Blockly.Arduino.javatab_['fin']   =  '  javaScript+=MonEsp.javaScript_end();\n'+
                                       '  return javaScript;\n'+
                                       ' }';

  Blockly.Arduino.codeFunctions_['define_startServer'] =  '\nvoid startServer(){\n'+
                                                '  server.on ( "/", handleRoot );\n'+
                                                '  server.on ( "/xml", handleXML );\n'+
                                                '  server.begin();\n'+
                                                '  Serial.println ( "HTTP server started" );\n'+
                                                '}'; 

  Blockly.Arduino.codeFunctions_['define_handleRoot'] = '\nvoid handleRoot(){\n'+
   '  server.send ( 200, "text/html", getPage() );\n'+ 
   '  delay(10);\n'+
   '}'; 

  Blockly.Arduino.codeFunctions_['define_handleXML'] = '\nvoid handleXML(){\n'+
   '  server.send(200,"text/xml",buildXML());\n'+ 
   '}'; 



   var code =  '';
   return code;
  }
*/

  //---------------------------------------------------------------------

/*
Blockly.Arduino.driss_D1R32_config2 = function() { 
  var dropdown_type = this.getTitleValue('TYPE');
  var value_ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
  //var value_fade = Blockly.Arduino.valueToCode(this, 'FADE', Blockly.Arduino.ORDER_UNARY_POSTFIXER_ATOMIC);
  var value_key = Blockly.Arduino.valueToCode(this, 'KEY', Blockly.Arduino.ORDER_ATOMIC);
  var value_ip = Blockly.Arduino.valueToCode(this, 'IP', Blockly.Arduino.ORDER_ATOMIC);
  var value_masque = Blockly.Arduino.valueToCode(this, 'MASQUE', Blockly.Arduino.ORDER_ATOMIC);
  var value_gateway = Blockly.Arduino.valueToCode(this, 'GATEWAY', Blockly.Arduino.ORDER_ATOMIC);



  value_ip = value_ip.substr(1, value_ip.length-2);
  value_masque = value_masque.substr(1, value_masque.length-2);
  value_gateway = value_gateway.substr(1, value_gateway.length-2);

  Blockly.Arduino.includes_['define_Duinoedu_Esp8266'] = "#include <Duinoedu_Esp8266.h>";

  Blockly.Arduino.variables_['var_MonEsp'] = "Duinoedu_Esp8266 MonEsp;";

  var code_Setup ='';
  switch (dropdown_type){
    case "STATION_IP" : code_Setup = "//le mot de passe doit comporter 8 caractères ou plus\n"+
                                  "  MonEsp.connect_STA_SetIP_smart("+value_ssid+","+value_key+",IPAddress ("+value_ip+"),IPAddress ("+value_masque+"),IPAddress ("+value_gateway+"));\n"+
                                  "  startServer();";
                                  break;
    case "ACCESSPOINT_IP" : code_Setup = "//le mot de passe doit comporter 8 caractères ou plus\n"+
                                      "  MonEsp.connect_AP_SetIP("+value_ssid+","+value_key+",IPAddress ("+value_ip+"),IPAddress ("+value_masque+"),IPAddress ("+value_gateway+"));\n"+
                                      "  startServer();";
                                       break;
  }
  Blockly.Arduino.setups_['setup_D1R32_config'] = code_Setup;

  // TODO: Assemble JavaScript into code variable.
  var code =  '//#ifdef PAGE_EXIST\n'+
              '  server.handleClient();\n'+
              '  delay(10);\n'+
              '//#endif\n';
              

  return code;
};
*/



//-----------------------------------------------------------------
//driss_D1R32_config
Blockly.Arduino.driss_D1R32_config = function() { 
  var dropdown_type = this.getTitleValue('TYPE');
  var value_ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
  //var value_fade = Blockly.Arduino.valueToCode(this, 'FADE', Blockly.Arduino.ORDER_UNARY_POSTFIXER_ATOMIC);
  var value_key = Blockly.Arduino.valueToCode(this, 'KEY', Blockly.Arduino.ORDER_ATOMIC);
  


  Blockly.Arduino.includes_['define_Duinoedu_Esp8266'] = "#include <Duinoedu_Esp8266.h>";
  Blockly.Arduino.variables_['var_MonEsp'] = "Duinoedu_Esp8266 MonEsp;";

//****************************************************
Blockly.Arduino.codeFunctions_['define_handleRoot'] = '\nvoid handleRoot(){\n'+
   '  server.send ( 200, "text/html", getPage() );\n'+ 
   '  delay(10);\n'+
   '}\n'; 

  Blockly.Arduino.xmltab_['debut'] =  'String buildXML(){\n'+
                                      '  String XML="<?xml version=\'1.0\'?><inputs>";';
  Blockly.Arduino.xmltab_['fin']   =  '  XML+="</inputs>";\n'+
                                      '  return XML;\n'+
                                      ' }';

  Blockly.Arduino.javatab_['debut'] =  'String buildJavascript(){\n'+
                                       '  String javaScript=MonEsp.javaScript_start();';
  Blockly.Arduino.javatab_['fin']   =  '  javaScript+=MonEsp.javaScript_end();\n'+
                                       '  return javaScript;\n'+
                                       ' }';

  Blockly.Arduino.codeFunctions_['define_startServer'] =  '\nvoid startServer(){\n'+
                                                '  server.on ( "/", handleRoot );\n'+
                                                '  server.on ( "/xml", handleXML );\n'+
                                                '  server.begin();\n'+
                                                '  Serial.println ( "HTTP server started" );\n'+
                                                '}'; 

  Blockly.Arduino.codeFunctions_['define_handleRoot'] = '\nvoid handleRoot(){\n'+
   '  server.send ( 200, "text/html", getPage() );\n'+ 
   '  delay(10);\n'+
   '}'; 

  Blockly.Arduino.codeFunctions_['define_handleXML'] = '\nvoid handleXML(){\n'+
   '  server.send(200,"text/xml",buildXML());\n'+ 
   '}'; 


   //*************************************************************************


  var code_Setup ='';
  switch (dropdown_type){
    case "STATION" : code_Setup = "//le mot de passe doit comporter 8 caractères ou plus\n"+
                                  "  MonEsp.connect_STA_smart("+value_ssid+","+value_key+");\n"+
                                  "  startServer();";
                                  break;
    case "ACCESSPOINT" : code_Setup = "//le mot de passe doit comporter 8 caractères ou plus\n"+
                                      "  MonEsp.connect_AP("+value_ssid+","+value_key+");\n"+
                                      "  startServer();";
                                      break;
  }
  Blockly.Arduino.setups_['setup_D1R32_config'] = code_Setup;


  // TODO: Assemble JavaScript into code variable.
 /*
  var code =  '//#ifdef PAGE_EXIST\n'+
              '  server.handleClient();\n'+
              '  delay(10);\n'+
              '//#endif\n';
     */
     
  code='';         

  return code;
};


//--------------------------------------------------------------------------------------------------------------------
//driss_D1R32_transmettre_au_serveur_Web
Blockly.Arduino.driss_D1R32_transmettre_au_serveur_Web = function() { 

  //var zone = getEmplacement(this).type;
   //  alert(zone);
  
  var code =  '#ifdef PAGE_EXIST\n'+
              '  server.handleClient();\n'+
              '  delay(10);\n'+
              '#endif\n';
              
  return code;
}




//--------------------------------------------------------------------------------------------------------------------
//driss_ESP_SPIFFS_Initialiser_memoire
Blockly.Arduino.driss_ESP_SPIFFS_Initialiser_memoire = function() { 

  Blockly.Arduino.includes_['define_Duinoedu_Spiffs'] = "#include <Duinoedu_Spiffs.h>";
  Blockly.Arduino.variables_['var_MonEsp'] = "Duinoedu_Esp8266 MonEsp;";

   Blockly.Arduino.variables_['var_server'] = "ESP8266WebServer server ( 80 );";

   Blockly.Arduino.setups_['setup_D1R32_init_spiffs'] = '#ifdef ESP32 \n'+
                                                        '  if (SPIFFS.begin(true)) {\n'+
                                                        '    listDir(SPIFFS, "/", 0,server);\n'+
                                                        '#elif defined ESP8266\n'+
                                                        '  if (SPIFFS.begin()) {\n'+
                                                        '    listESP8266(server);\n'+
                                                        '#endif\n'+
                                                        '    Serial.println("SPIFFS opened!");\n'+
                                                        '  }\n'+
                                                        '    server.begin();\n'+
                                                        '    Serial.println ("HTTP server started");\n'+
                                                        '  \n'+
                                                        '  String getPage(){\n'+
                                                        '#define PAGE_EXIST \n'+
                                                        '    String  page = "<!DOCTYPE html><html><head><meta charset=\'ISO-8859-15\'>";\n'+
                                                        '    page += "<title>Blockly@Col - ac-nancy-metz.fr</title></head>";\n'+
                                                        '    page += MonEsp.addPhoneStyle();\n'+
                                                        '    page += "<BODY onload=\'process()\'>";\n'+
                                                        '    page += "</body>";\n'+
                                                        '    page += "</html>";\n'+
                                                        '    return page;\n'+
                                                        '  }'; 
  
  var code =  '#ifdef PAGE_EXIST\n'+
              '  server.handleClient();\n'+
              '  delay(10);\n'+
              '#endif\n';
              
  return code;
}





//-------------------------------------------------------------------
//driss_ESP_SPIFFS_Initialiser_memoire_et_ftp
Blockly.Arduino.driss_ESP_SPIFFS_Initialiser_memoire_et_ftp = function() { 
  var username = Blockly.Arduino.valueToCode(this, 'USERNAME', Blockly.Arduino.ORDER_ATOMIC);
  var password = Blockly.Arduino.valueToCode(this, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['define_Duinoedu_Spiffs'] = "#include <Duinoedu_Spiffs.h>";
  Blockly.Arduino.includes_['define_ESP8266FtpServer'] = "#include <ESP8266FtpServer.h>";

  Blockly.Arduino.variables_['var_MonEsp'] = "Duinoedu_Esp8266 MonEsp;";
  Blockly.Arduino.variables_['var_ftpSrv'] = "FtpServer ftpSrv;";
  Blockly.Arduino.variables_['var_server'] = "ESP8266WebServer server ( 80 );";

  Blockly.Arduino.setups_['setup_D1R32_init_spiffs'] =  '#ifdef ESP32 \n'+
                                                        '  if (SPIFFS.begin(true)) {\n'+
                                                        '    listDir(SPIFFS, "/", 0,server);\n'+
                                                        '#elif defined ESP8266\n'+
                                                        '  if (SPIFFS.begin()) {\n'+
                                                        '    listESP8266(server);\n'+
                                                        '#endif\n'+
                                                        '    ftpSrv.begin('+username+','+password+');\n'+
                                                        '    Serial.println("SPIFFS opened!");\n'+
                                                        '  }\n'+
                                                        '    server.begin();\n'+
                                                        '    Serial.println ("HTTP server started");\n'+
                                                        '  \n'+
                                                        '  String getPage(){\n'+
                                                        '#define PAGE_EXIST \n'+
                                                        '    String  page = "<!DOCTYPE html><html><head><meta charset=\'ISO-8859-15\'>";\n'+
                                                        '    page += "<title>Blockly@Col - ac-nancy-metz.fr</title></head>";\n'+
                                                        '    page += MonEsp.addPhoneStyle();\n'+
                                                        '    page += "<BODY onload=\'process()\'>";\n'+
                                                        '    page += "</body>";\n'+
                                                        '    page += "</html>";\n'+
                                                        '    return page;\n'+
                                                        '  }'; 
  
  var code =  '#ifdef PAGE_EXIST\n'+
              '  server.handleClient();\n'+
              '  delay(10);\n'+
              '#endif\n';
              '  ftpSrv.handleFTP();\n';
              
  return code;
}


//-------------------------------------------------------------------
//driss_ESP_SPIFFS_creer_ajouter_au_fichier
Blockly.Arduino.driss_ESP_SPIFFS_creer_ajouter_au_fichier = function() { 
  var filename = Blockly.Arduino.valueToCode(this, 'FILENAME', Blockly.Arduino.ORDER_ATOMIC);
  var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
  var space = this.getFieldValue('SPACE') == 'TRUE';
  var new_ligne = this.getFieldValue('NEW_LIGNE') == 'TRUE';

  Blockly.Arduino.includes_['define_Duinoedu_Utility.conv'] = "#include <Duinoedu_Utility.conv.h>";
  
  var code =  'appendFile(SPIFFS, '+filename+', PCHAR2('+data+'));\n';
  if(space)  code += 'appendFile(SPIFFS, '+filename+', " ");\n';
  if(new_ligne)  code += 'appendFile(SPIFFS, '+filename+', "\\n");\n';
              
  return code;
}






//------------------------------------------------------------------------------------------------------------------------------
//driss_D1R32_Creer_page_web
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_Creer_page_web = function() {
  var head_code = Blockly.Arduino.statementToCode(this, 'HEAD');
  var body_code = Blockly.Arduino.statementToCode(this, 'BODY');
  
  Blockly.Arduino.pagetab_['part1'] =  'String getPage(){\n'+
                                       '#define PAGE_EXIST\n'+
                                       '  String  page = "";\n'+
                                       '  page += "<!DOCTYPE html>";\n'+
                                       '  page += "<html>";\n'+
                                       '  page += "  <head>";\n'+
                                       '  page += "    <meta charset=\'ISO-8859-15\'>";';
                                       
  

  
  Blockly.Arduino.pagetab_['part2'] =  '  page += "  </head>";\n'+
                                       '  page +=    MonEsp.addPhoneStyle() ;\n'+
                                       '  page += "  <body onload=\'process()\'>";';
   
  Blockly.Arduino.pagetab_['part3'] =  '  page += "    <style>";\n'+
                                       '  page += "      .value {font-size:large; font-style:normal; color:#3388ff;font-weight:bold; }";\n'+
                                       '  page += "    </style>";';  

  Blockly.Arduino.pagetab_['part4'] =  '  page += "  </body>";\n'+
                                       '  page += "  </html>";\n'+
                                       '  return page;\n'+
                                       ' }';


  Blockly.Arduino.styletab_['debut'] =  '  page += "    <style>";' ;
  Blockly.Arduino.styletab_['fin']   =  '  page += "    </style>";' ;

  const myheadcode = head_code.split('~');
  const mybodycode = body_code.split('~');
  //alert(myheadcode.length);
  //alert(mybodycode.length);
  //alert(myheadcode[0]+'\n'+myheadcode[1]);
  //alert('0'+mybodycode[0]+'\n'+'1'+mybodycode[1]);
  //alert(body_code);

  var code = '';

  if(!Blockly.Arduino.pagetab_['title'])
    Blockly.Arduino.pagetab_['title'] =  '  page += "    <title>Blockly@Col Nancy-Metz</title>";';

  var id=Blockly.Arduino.idstab_['id'];
  if(head_code !=''){ 
    Blockly.Arduino.styletab_['web_page_codeHead_'+id] = '' ;
    for(var j=1;j<myheadcode.length;j++) { 
      Blockly.Arduino.styletab_['web_page_codeHead_'+id] += '  page += "     '+myheadcode[j]+'";';
      if (j<myheadcode.length-1) Blockly.Arduino.styletab_['web_page_codeHead_'+id] +='\n';
    }
  } 
  if(body_code !=''){ 
    //Blockly.Arduino.pagetab_['web_page_codeBody_'+id] = '  page += "      <style>\n' ;
    Blockly.Arduino.pagetab_['web_page_codeBody_'+id] = '  ' ;
    for(var k=1;k<mybodycode.length;k+=2) { 
      Blockly.Arduino.pagetab_['web_page_codeBody_'+id] += ''+mybodycode[k]+'';
    }
    for(var k=2;k<mybodycode.length;k+=2) { 
      code += ''+mybodycode[k]+'';
    }
  } 


  if( (head_code !='') || (body_code !='')) id++;
  Blockly.Arduino.idstab_['id']=id;
  //alert(code);
  return code;

};

//------------------------------------------------------------------------------------------------------------------------------
//driss_D1R32_cadre
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_D1R32_cadre = function() {
  var position = this.getFieldValue('POSITION');
  var left = this.getFieldValue('LEFT');
  var top = this.getFieldValue('TOP');
  var float = this.getFieldValue('FLOAT');
  var width = this.getFieldValue('WIDTH');
  var height = this.getFieldValue('HEIGHT');
  var border = this.getFieldValue('BORDER') == 'TRUE';
  var bg_color = this.getFieldValue('BG_COLOR');
  var txt_align = this.getFieldValue('TXT_ALIGN');
  var bransh = Blockly.Arduino.statementToCode(this, 'CADRE');
  //alert(6);
  //alert(bransh);
  const code_bransh = bransh.split('~');
  //alert(code_bransh.length);
  //alert('b0\n'+code_bransh[0]);
  //alert('b1\n'+code_bransh[1]);
  //alert('b2\n'+code_bransh[2]);
  //alert('b3\n'+code_bransh[3]);
  //alert (bransh+'\n0'+code_bransh[0]+ '\n1'+code_bransh[1]+ '\n2'+code_bransh[2]);
  if(code_bransh.length==1) {code_bransh[0]=''; code_bransh[1]='';}
  
  var id = Blockly.Arduino.idstab_['id'];

  var classCode = '';
  classCode +=  '.'+'class_'+id+' {position:'+position+'; left:'+left+'px; top:'+top+'px; height:'+height+'px; width:'+width+'px; ';
  classCode +=  'float:'+float+'; background-color:'+bg_color+'; text-align:'+txt_align+'; ';
  classCode +=  'font-size:large; ';
  if(border) classCode += 'border:1px solid #000000;' ;
  classCode += 'padding:5px;}';

  var zone = getEmplacement(this);
 //alert(zone);
  var code ='';
  switch(zone){
    case "HEAD" : code +=  '';
                  break;
    case "BODY" : Blockly.Arduino.styletab_['web_page_codeStyle_'+id] =   '  page += "     '+classCode+'";';
                  var mycodebransh = '';
                  for(var j=1;j<code_bransh.length;j+=2) { 
                    mycodebransh += code_bransh[j]+'\n';
                    //alert(mycodebransh);
                  }
                  var mycodecode = '';
                  for(var j=2;j<code_bransh.length;j+=2) { 
                    mycodecode += code_bransh[j]+'\n';
                    //alert(mycodebransh);
                  }
                  //alert(mycodebransh);
                  code +=  '~' ;
                  code +=  'page += "    <div class=\'class_'+id+'\'>";\n';
                  code +=  mycodebransh ;
                  code +=  'page += "    </div>";\n';
                  code +=  '~';
                  code +=  mycodecode;
                  break;
      }  
  id++;
  Blockly.Arduino.idstab_['id']=id;
  return code; 

};


//------------------------------------------------------------------------------------------------------------------------------
//driss_page_web_definir_style
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_page_web_definir_style = function() {
  var class_name = Blockly.Arduino.valueToCode(this, 'CLASS_NAME', Blockly.Arduino.ORDER_ATOMIC);
  var font_size = this.getFieldValue('FONT_SIZE');
  var font_style = this.getFieldValue('FONT_STYLE');
  var gras = this.getFieldValue('GRAS') == 'TRUE';  
  var border = this.getFieldValue('BORDER') == 'TRUE';
  var txtcolor = this.getFieldValue('TXT_COLOR');
  var bgcolor = this.getFieldValue('BG_COLOR');
  var txtdecoration = this.getFieldValue('TEXT_DECORATION');
  var txtalign = this.getFieldValue('TEXT_ALIGN');

  class_name = class_name.substr(1, class_name.length-2);
  class_name = class_name.replace(/ /g, "_");
  //class_name = "_"+class_name+"_";
  var class_name_sa = replaceSpec(class_name);
  
  var classCode = '';
  classCode +=  '.'+class_name_sa+' {font-size:'+font_size+'; font-style:'+font_style+'; color:'+txtcolor+'; background-color:'+bgcolor+'; text-decoration:'+txtdecoration+'; text-align:'+txtalign+';'
  if(gras) classCode += 'font-weight:bold; ' ;
  if(border) classCode += 'border:1px solid #000000;' ;
  classCode += 'padding:5px;}'+'';
 
  var zone = getEmplacement(this);
 
  var code ='';
  switch(zone){
    case "HEAD" : code +=  '~';
                  code +=  classCode;
                  break;
    case "BODY" : code +=  '~' ;
                  code +=  'page += "    <style>";\n';
                  code +=  'page += "      '+classCode+'";\n';
                  code +=  'page += "    </style>";\n';
                  code +=  '~ ';
                  break;
    case "CADRE" : code +=  '~' ;
                  code +=  'page += "      <style>";\n';
                  code +=  'page += "        '+classCode+'";\n';
                  code +=  'page += "      </style>";\n';
                  code +=  '~ ';
                  break;
      }  
      
  return code; 
};



//------------------------------------------------------------------------------------------------------------------------------
//driss_page_web_title
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_page_web_title = function() {
  var text_title = this.getFieldValue('TITLE');
  Blockly.Arduino.pagetab_['title'] =  '  page += "    <title>'+text_title+'</title>";';
  //alert('2'+Blockly.Arduino.pagetab_['title']);
  var code =  '';
  return code;

};

//------------------------------------------------------------------------------------------------------------------------------
//driss_D1R32_page_web_write_texte
//---------------------------------------------------------------------------------------

Blockly.Arduino.driss_D1R32_page_web_write_texte = function() {
  var text = Blockly.Arduino.valueToCode(this, 'WEB_PAGE_TEXT', Blockly.Arduino.ORDER_ATOMIC);
  var style = Blockly.Arduino.valueToCode(this, 'WEB_PAGE_STYLE', Blockly.Arduino.ORDER_ATOMIC);

 
  style = style.substr(1, style.length-2);
  style = style.replace(/ /g, "_");
  //style = "_"+style+"_";
  var style_sa = replaceSpec(style);

  text = text.substr(1, text.length-2);
  

  Blockly.Arduino.includes_['define_Duinoedu_Esp8266'] = "#include <Duinoedu_Esp8266.h>";

  Blockly.Arduino.variables_['var_server'] = "ESP8266WebServer server ( 80 );";

  var code ='';
  var zone = getEmplacement(this);
  switch(zone){
    case "HEAD" :  code +=  '';
                  break;
    case "BODY" : code +=  '~' ;
                  code +=  'page += "    <p class=\''+style_sa+'\'>'+text+'</p>";\n';
                  code +=  '~ ';
                  break;
   
    case "CADRE" : code +=  '~' ;
                   code +=  'page += "      <p class=\''+style_sa+'\'>'+text+'</p>";';
                   code +=  '~ ';
                   break;
      
      }  
  
  return code; 

};





//driss_D1R32_web_write_data
//----------------------------------------------------------------------------------------------

Blockly.Arduino.driss_D1R32_web_write_data = function() {
  var value_name = Blockly.Arduino.valueToCode(this, 'WEB_PAGE_DATA_LABEL', Blockly.Arduino.ORDER_ATOMIC);
  var value = Blockly.Arduino.valueToCode(this, 'WEB_PAGE_DATA_VALUE', Blockly.Arduino.ORDER_ATOMIC);
  var unite = Blockly.Arduino.valueToCode(this, 'WEB_PAGE_DATA_UNITE', Blockly.Arduino.ORDER_ATOMIC);

  value_name = value_name.substr(1, value_name.length-2);
  value_name = value_name.replace(/ /g, "_");
  value_name = "_"+value_name+"_";

  unite = unite.replace(/ /g, "");
  //unite = unite.replace(/°C/g, "deg.C");

  unite = unite.substr(1, unite.length-2);

  var value_name_sa = replaceSpec(value_name);
  
  var zone = getEmplacement(this);

  
  Blockly.Arduino.includes_['define_Duinoedu_Esp8266'] = "#include <Duinoedu_Esp8266.h>";

  Blockly.Arduino.variables_['var_server'] = "ESP8266WebServer server ( 80 );";
  Blockly.Arduino.variables_['var_'+value_name_sa] = "String "+value_name_sa+"=\"\";";

  if((zone == "BODY") || (zone == "CADRE")){
    Blockly.Arduino.xmltab_['web_xml'+value_name_sa] =  ''+
        '  XML += "<'+value_name_sa+'>"+'+value_name_sa+'+"</'+value_name_sa+'>";';
    
    Blockly.Arduino.javatab_['web_java_val'+value_name_sa] =  ''+
        '  javaScript += "document.getElementById(\'v_'+value_name_sa+'\').innerHTML = this.responseXML.getElementsByTagName(\''+value_name_sa+'\')[0].childNodes[0].nodeValue;";';
  }
  var code ='';
  //alert(zone);
  switch(zone){
    case "HEAD" :  code +=  '';
                  break;
    case "BODY" : code +=  '~' ;
                  code +=  'page +=      buildJavascript();\n';
                  code +=  'page += "   '+value_name.replace(/_/g, " ")+' = <a class=value id=\'v_'+value_name_sa+'\'></a> '+unite+'";\n';
                  code +=  '~'+value_name_sa+'=String('+value+');';
                  break;
   
    case "CADRE" : code +=  '~' ;
                   code +=  'page +=          buildJavascript();\n';
                   code +=  'page += "       '+value_name.replace(/_/g, " ")+' = <a class=value id=\'v_'+value_name_sa+'\'></a> '+unite+'";';
                   code +=  '~'+value_name_sa+'=String('+value+');';
                   break;
      
      }  
  //alert(code);
  return code; 
};

//------------------------------------------------------------------------------------------------------------------------------
//driss_D1R32_afficher_jauge_dans_page_web
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_D1R32_afficher_jauge_dans_page_web = function() {
  var value_name = Blockly.Arduino.valueToCode(this, 'WEB_PAGE_JAUGE_LABEL', Blockly.Arduino.ORDER_ATOMIC);
  var value = Blockly.Arduino.valueToCode(this, 'WEB_PAGE_JAUGE_VALUE', Blockly.Arduino.ORDER_ATOMIC);
  var min = Blockly.Arduino.valueToCode(this, 'WEB_PAGE_JAUGE_MIN', Blockly.Arduino.ORDER_ATOMIC);
  var max = Blockly.Arduino.valueToCode(this, 'WEB_PAGE_JAUGE_MAX', Blockly.Arduino.ORDER_ATOMIC);
  var unite = Blockly.Arduino.valueToCode(this, 'WEB_PAGE_JAUGE_UNITE', Blockly.Arduino.ORDER_ATOMIC);

 
  value_name = value_name.substr(1, value_name.length-2);
  value_name = value_name.replace(/ /g, "_");
  value_name = "_"+value_name+"_";

  var value_name_sa = replaceSpec(value_name);

  unite = unite.replace(/ /g, "");
  unite = unite.replace(/°C/g, "deg.C");
  unite = unite.substr(1, unite.length-2);

  Blockly.Arduino.includes_['define_Duinoedu_Esp8266'] = "#include <Duinoedu_Esp8266.h>";

  Blockly.Arduino.variables_['var_server'] = "ESP8266WebServer server ( 80 );";

  var zone = getEmplacement(this);
  //alert(zone);
  if((zone == "BODY") || (zone == "CADRE")){
    Blockly.Arduino.xmltab_['web_xml'+value_name_sa] =  ''+
        '  XML += "<'+value_name_sa+'>"+'+value_name_sa+'+"</'+value_name_sa+'>";';
    
    Blockly.Arduino.javatab_['web_java_jauge'+value_name_sa] =  ''+
        '  javaScript += "gauge'+value_name_sa+'.value = this.responseXML.getElementsByTagName(\''+value_name_sa+'\')[0].childNodes[0].nodeValue;";';
  }
  
  var code ='';

  switch(zone){
    case "HEAD" :  code +=  '';
                  break;
    case "BODY" : code +=  '~' ;
                  code +=  'page +=      buildJavascript();\n';
                  code +=  'page +=      MonEsp.gauge('+min+','+max+',"'+value_name_sa+'");\n';
                  code +=  '~' ;
                  break;
   
    case "CADRE" : code +=  '~' ;
                   code +=  'page +=        buildJavascript();\n';
                   code +=  'page +=        MonEsp.gauge('+min+','+max+',"'+value_name_sa+'");';
                   code +=  '~' ;
                   break;
      
      }  

  return code; 
};



//------------------------------------------------------------------------------------------------------------------------------
//driss_D1R32_balise_HR
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_D1R32_balise_HR = function() {

  var zone = getEmplacement(this);
  var code ='';
  
  switch(zone){
    case "HEAD" :  code +=  '';
                  break;
    case "BODY" : code +=  '~' ;
                  code +=  'page += "    <hr>";\n'
                  code +=  '~' ;
                  break;
   
    case "CADRE" : code +=  '~' ;
                   code +=  'page += "      <hr>";\n'
                   code +=  '~' ;
                   break;
      
      }  
  return code; 
};


//------------------------------------------------------------------------------------------------------------------------------
//driss_D1R32_InsertHTMLCodeInBody
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_D1R32_InsertHTMLCodeInBody = function() {
  var value_HTMLCode = Blockly.Arduino.valueToCode(this, 'HTMLCode', Blockly.Arduino.ORDER_ATOMIC);
/*
  Blockly.Arduino.includes_['define_Duinoedu_Esp8266'] = "#include <Duinoedu_Esp8266.h>";

  Blockly.Arduino.variables_['var_server'] = "ESP8266WebServer server ( 80 );";

  value_HTMLCode = value_HTMLCode.substr(1, value_HTMLCode.length-2);
  
  var id = Blockly.Arduino.idstab_['id'];

  Blockly.Arduino.pagetab_['web_page_codeBody_'+id] =  '  page += "  '+value_HTMLCode+'";';
  id++;
  Blockly.Arduino.idstab_['id']=id;
  
  var code =  '';
  return code;
*/
  value_HTMLCode = value_HTMLCode.substr(1, value_HTMLCode.length-2);
  var zone = getEmplacement(this);
  var code ='';
  
  switch(zone){
    case "HEAD" :  code +=  '';
                  break;
    case "BODY" : code +=  '~' ;
                  code +=  'page += "    '+value_HTMLCode+'";\n';
                  code +=  '~' ;
                  break;
   
    case "CADRE" : code +=  '~' ;
                   code +=  'page += "    '+value_HTMLCode+'";\n';
                   code +=  '~' ;
                   break;
      
      }  
  return code; 

};


//------------------------------------------------------------------------------------------------------------------------------
//driss_D1R32_dessiner_interrupteur
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_D1R32_dessiner_interrupteur = function() { 
  var switch_name = this.getFieldValue('SWITCH_NAME');
  //switch_name = switch_name.substr(1, switch_name.length-2);
  switch_name = switch_name.replace(/ /g, "_");
  //switch_name = "_"+switch_name+"_";

  var switch_name_sa = replaceSpec(switch_name);
  //alert('5'+switch_name_sa);
  /*
  
  var classCode = '';
  classCode +=  '.'+class_name_sa+' {font-size:'+font_size+'; font-style:'+font_style+'; color:'+txtcolor+'; background-color:'+bgcolor+'; text-decoration:'+txtdecoration+'; text-align:'+txtalign+';'
  if(gras) classCode += 'font-weight:bold; ' ;
  if(border) classCode += 'border:1px solid #000000;' ;
  classCode += 'padding:5px;}'+'';
 */
 //alert(this.getInputTargetBlock('aze'));
  var zone = getEmplacement(this);

  code = switch_name_sa;
  /*
  switch(zone){
    case "LEDGROVE" : //code +=  '~' ;
                  //code +=  'page +=     MonEsp.javaslider();\n';
                  //code +=  'page +=     MonEsp.slider(0,1,"'+switch_name_sa+'");';
                  //code +=  '~ ';
                  code +=  switch_name_sa ;
                  break;
    case "HEAD" : code +=  '~';
                  break;
    case "BODY" : code +=  '~' ;
                  code +=  'page +=     MonEsp.javaslider();\n';
                  code +=  'page +=     MonEsp.slider(0,1,"'+switch_name_sa+'");';
                  code +=  '~ ';
                  code +=  switch_name_sa ;
                  break;
    case "CADRE" : code +=  '~' ;
                  code +=  'page +=     MonEsp.javaslider();\n';
                  code +=  'page +=     MonEsp.slider(0,1,'+switch_name_sa+');';
                  code +=  '~';
                  code +=  switch_name_sa ;
                  break;
      }  
    //alert(code);
  */
  //alert(code);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};