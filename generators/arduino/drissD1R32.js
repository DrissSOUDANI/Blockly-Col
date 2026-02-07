
Blockly.Arduino._driss_memory = Blockly.Arduino._driss_memory || {};
//Blockly.Arduino._driss_memory.mode = ...  (à mettre dans le générateur du bloc pour mémoriser un de ses field );

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
  //alert(theBloc.name);
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
          //console.log(a.name+'\n'+theBloc.name); 
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

      if(a=theBloc.getSurroundParent().getInputTargetBlock("TASK_ACTIONS") ){
        while(a){ 
          //console.log(a.name+'\n'+theBloc.name+"\n------\n"); 
          
          if(a.id==theBloc.id) {zone='TASK'; break;};
          a=a.getNextBlock();
        }
      }
/*
      if(a=theBloc.getSurroundParent().getInputTargetBlock("LEDGROVE") ){
        while(a){ 
          //alert(a.name+'\n'+theBloc.name); 
          if(a.id==theBloc.id) {zone='LEDGROVE'; break;};
          a=a.getNextBlock();
        }
      }
      */
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
//driss_D1R32_ESP32_config_simple
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_D1R32_ESP32_config_simple = function() { 
  var dropdown_type = this.getFieldValue('TYPE');
  var value_ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
  //var value_fade = Blockly.Arduino.valueToCode(this, 'FADE', Blockly.Arduino.ORDER_UNARY_POSTFIXER_ATOMIC);
  var value_key = Blockly.Arduino.valueToCode(this, 'KEY', Blockly.Arduino.ORDER_ATOMIC);
  


  Blockly.Arduino.includes_['define_Duinoedu_Esp8266'] = "#include <Duinoedu_Esp8266.h>";
  Blockly.Arduino.variables_['var_MonEsp'] = "Duinoedu_Esp8266 MonEsp;";

  var code_Setup ='';
  switch (dropdown_type){
    case "STATION" : code_Setup = "//le mot de passe doit comporter 8 caractères ou plus\n"+
                                  "  MonEsp.connect_STA_smart("+value_ssid+","+value_key+");";
                                  //"  server.on ( "/", handleRoot );\n";
                                  
                                  break;
    case "ACCESSPOINT" : code_Setup = "//le mot de passe doit comporter 8 caractères ou plus\n"+
                                      "  MonEsp.connect_AP("+value_ssid+","+value_key+");\n";
                                      //"  server.on ( "/", handleRoot );\n";
                                      break;
  }
  Blockly.Arduino.setups_['setup_D1R32_config'] = code_Setup;

  code='';         

  return code;
};

//------------------------------------------------------------------------------------------------------------------------------
//driss_D1R32_ESP_config_complet
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_D1R32_ESP32_config_complet = function() { 
  var dropdown_type = this.getFieldValue('TYPE');
  var value_ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
  //var value_fade = Blockly.Arduino.valueToCode(this, 'FADE', Blockly.Arduino.ORDER_UNARY_POSTFIXER_ATOMIC);
  var value_key = Blockly.Arduino.valueToCode(this, 'KEY', Blockly.Arduino.ORDER_ATOMIC);
  var value_ip = Blockly.Arduino.valueToCode(this, 'IP', Blockly.Arduino.ORDER_ATOMIC);
  var value_masque = Blockly.Arduino.valueToCode(this, 'MASQUE', Blockly.Arduino.ORDER_ATOMIC);
  var value_gateway = Blockly.Arduino.valueToCode(this, 'GATEWAY', Blockly.Arduino.ORDER_ATOMIC);



  value_ip = value_ip.substr(1, value_ip.length-2);
  value_masque = value_masque.substr(1, value_masque.length-2);
  value_gateway = value_gateway.substr(1, value_gateway.length-2);

  for(var k=0;k<4;k++){
   value_ip = value_ip.replace('.', ',');
   value_masque = value_masque.replace('.', ',');
   value_gateway = value_gateway.replace('.', ',');
 }

  Blockly.Arduino.includes_['define_Duinoedu_Esp8266'] = "#include <Duinoedu_Esp8266.h>";
  
 
  Blockly.Arduino.variables_['var_MonEsp'] = "Duinoedu_Esp8266 MonEsp;";

  var code_Setup ='';
  switch (dropdown_type){
    case "STATION_IP" : code_Setup = "//le mot de passe doit comporter 8 caractères ou plus\n"+
                                  "  MonEsp.connect_STA_SetIP_smart("+value_ssid+","+value_key+",IPAddress ("+value_ip+"),IPAddress ("+value_masque+"),IPAddress ("+value_gateway+"));\n";
                                  
                                  break;
    case "ACCESSPOINT_IP" : code_Setup = "//le mot de passe doit comporter 8 caractères ou plus\n"+
                                      "  MonEsp.connect_AP_SetIP("+value_ssid+","+value_key+",IPAddress ("+value_ip+"),IPAddress ("+value_masque+"),IPAddress ("+value_gateway+"));\n";
                          
                                       break;
  }
  Blockly.Arduino.setups_['setup_D1R32_config'] = code_Setup;

 
  code = "";
  return code;
};








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
//driss_D1R32_2_taches
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_D1R32_2_taches = function() {
  var initialisations = Blockly.Arduino.statementToCode(this, 'INITIALISATIONS');
  var statements_task_1 = Blockly.Arduino.statementToCode(this, 'TASK_1');
  var statements_task_2 = Blockly.Arduino.statementToCode(this, 'TASK_2');
  //alert(initialisations);
  var code =  "vTaskDelay(portMAX_DELAY);\n";
  return code;

};


//------------------------------------------------------------------------------------------------------------------------------
//driss_D1R32_definir_tache
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_D1R32_definir_tache = function() {
  var name_task = this.getFieldValue('TASK_NAME');
  var num_task = Blockly.Arduino.valueToCode(this, 'NUM_TASK', Blockly.Arduino.ORDER_ATOMIC);
  var taille_pile = Blockly.Arduino.valueToCode(this, 'TAILLE_PILE', Blockly.Arduino.ORDER_ATOMIC);
  var coeur = Blockly.Arduino.valueToCode(this, 'COEUR', Blockly.Arduino.ORDER_ATOMIC);
  var priorite = Blockly.Arduino.valueToCode(this, 'PRIORITE', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.definitions_['define_PAGE_EXIST'] = '#define PAGE_EXIST';

  Blockly.Arduino.variables_['var_task_'+num_task] = 'TaskHandle_t task_'+num_task+';';
  
  Blockly.Arduino.tasks_['setup_task_'+num_task] ='// Tache °'+num_task+" = "+  name_task +'\n'+
    '  xTaskCreatePinnedToCore(Esp32_Multitask_task_'+num_task+',"task_'+num_task+'",'+taille_pile+',NULL,'+priorite+',&task_'+num_task+','+coeur+');\n'+
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
  }
  
  Blockly.Arduino.tasktab_[num_task]["actions"] = ''+statements_task_actions+'';
 
  //console.log (statements_task_actions);

  var code =  '';
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
              '#endif\n'+
              '//delay(10);\n';
              
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
                                                        '  #elif defined ESP8266\n'+
                                                        '  if (SPIFFS.begin()) {\n'+
                                                        '    listESP8266(server);\n'+
                                                        '  #endif\n'+
                                                        '    Serial.println("SPIFFS opened!");\n'+
                                                        '  }\n'+
                                                        '  server.begin();\n'+
                                                        '  Serial.println ("HTTP server started");\n'+
                                                        '';
                                                        //'  }'; 

  Blockly.Arduino.codeFunctions_['D1R32_spiffs_getPage'] = '  String getPage(){\n'+
                                                        '#define PAGE_EXIST \n'+
                                                        '    String  page = "<!DOCTYPE html><html><head><meta charset=\'utf-8\'>";\n'+
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


//--------------------------------------------------------------------------------------------------------------------
//driss_ESP_SPIFFS_Effacer_memoire
Blockly.Arduino.driss_ESP_SPIFFS_Effacer_fichier = function() { 
  var file = Blockly.Arduino.valueToCode(this, 'FILENAME', Blockly.Arduino.ORDER_ATOMIC);
  
  var fileName =  "\"/" ;
  for(i=1; i<file.length; i++){
    fileName = fileName+file[i];
  }

  var code =  //'#ifdef PAGE_EXIST\n'+
              //'  server.handleClient();\n'+
              //'  delay(10);\n'+
              //'#endif\n'+
              'deleteFile(SPIFFS, '+fileName+');\n';
              
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
                                                        '    String  page = "<!DOCTYPE html><html><head><meta charset=\'utf-8\'>";\n'+
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
  var file = Blockly.Arduino.valueToCode(this, 'FILENAME', Blockly.Arduino.ORDER_ATOMI);
  
  var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
  var space = this.getFieldValue('SPACE') == 'TRUE';
  var new_ligne = this.getFieldValue('NEW_LIGNE') == 'TRUE';

  filename =  "\"/" ;
  for(i=1; i<file.length; i++){
    filename = filename+file[i];
  }

  Blockly.Arduino.includes_['define_Duinoedu_Utility.conv'] = "#include <Duinoedu_Utility.conv.h>";
  
  var code =  'appendFile(SPIFFS, '+filename+', String('+data+').c_str());\n';
  if(space)  code += 'appendFile(SPIFFS, '+filename+', " ");\n';
  if(new_ligne)  code += 'appendFile(SPIFFS, '+filename+', "\\n");\n';
              
  return code;
}


//-------------------------------------------------------------------
//driss_ESP_SPIFFS_ajouter_lien_telechargement_sur_page_Web
Blockly.Arduino.driss_ESP_SPIFFS_ajouter_lien_telechargement_sur_page_Web = function() { 
  var file = Blockly.Arduino.valueToCode(this, 'FILENAME', Blockly.Arduino.ORDER_ATOMI);
  
  link=  "" ;
  filename =  "\"/" ;
  
  for(i=1; i<file.length; i++){
    filename = filename+file[i];
  }
  link = filename.substr(1);
  link = link.substr(0,link.length-1);
  //alert(filename+'       '+link);

  Blockly.Arduino.includes_['define_Duinoedu_Utility.conv'] = "#include <Duinoedu_Utility.conv.h>";
  
  Blockly.Arduino.codeFunctions_['D1R32_spiffs_getPage'] = '  String getPage(){\n'+
                                                        '#define PAGE_EXIST \n'+
                                                        '    String  page = "<!DOCTYPE html><html><head><meta charset=\'utf-8\'>";\n'+
                                                        '    page += "<title>Blockly@Col - ac-nancy-metz.fr</title></head>";\n'+
                                                        '    page += MonEsp.addPhoneStyle();\n'+
                                                        '    page += "<BODY onload=\'process()\'>";\n'+
                                                        '    page += "<a href=\''+link+'\'> '+link.substr(1)+'</a>";\n'+
                                                        '    page += "</body>";\n'+
                                                        '    page += "</html>";\n'+
                                                        '    return page;\n'+
                                                        '  }';
  
  code="";           
  return code;
}



//-------------------------------------------------------------------
//driss_ESP_SPIFFS_valider_les_ecritures
//Ce bloc est necessaire pour que le code soit dans la boucle repeter indifinement si elle existe dans le programme
Blockly.Arduino.driss_ESP_SPIFFS_valider_les_ecritures = function() { 
  var code =  '#ifdef PAGE_EXIST\n'+
              '  server.handleClient();\n'+
              '  delay(10);\n'+
              '#endif\n';      
  return code;
};


//-------------------------------------------------------------------
//driss_ESP_SPIFFS_show_informations
Blockly.Arduino.driss_ESP_SPIFFS_show_informations = function() { 
  
  Blockly.Arduino.codeFunctions_['D1R32_spiffs_printDirectory'] = '  void printDirectory(File dir, int numTabs=2) {\n'+
                                                        '  while (true) { \n'+
                                                        '    File entry =  dir.openNextFile();\n'+
                                                        '    if (! entry) { // no more files\n'+
                                                        '      break;;\n'+
                                                        '    }\n'+
                                                        '    for (uint8_t i = 0; i < numTabs; i++) {\n'+
                                                        '      Serial.print("\t");\n'+
                                                        '    }\n'+
                                                        '    Serial.print(entry.name());\n'+
                                                        '    if (entry.isDirectory()) {\n'+
                                                        '      Serial.println("/");\n'+
                                                        '      printDirectory(entry, numTabs + 1);\n'+
                                                        '    } else {\n'+
                                                        '      // files have sizes, directories do not\n'+
                                                        '      Serial.print("\t\t");\n'+
                                                        '      Serial.println(entry.size(), DEC);\n'+
                                                        '    }\n'+
                                                        '    entry.close();\n'+
                                                        '    Serial.println("-----------------------");\n'+
                                                        '  }\n'+
                                                        '}';
  
  Blockly.Arduino.setups_['setup_D1R32_spiffs_show_informations'] = 'unsigned int totalBytes = SPIFFS.totalBytes();\n'+
                                                        '  unsigned int usedBytes = SPIFFS.usedBytes();\n'+
                                                        '  Serial.println("Informations systeme");\n'+
                                                        '  Serial.println("-----------------------");\n'+
                                                        '  Serial.print("Espace Total : ");\n'+
                                                        '  Serial.print(totalBytes);\n'+
                                                        '  Serial.println("byte");\n'+
                                                        '  Serial.print("Espace utilise : ");\n'+
                                                        '  Serial.print(usedBytes);\n'+
                                                        '  Serial.println();\n'+
                                                        '  Serial.println("-----------------------");\n'+
                                                        '  // Lister le répertoire\n'+
                                                        '  File dir = SPIFFS.open("/");\n'+
                                                        '  printDirectory(dir);';
                                                        //'  }'; 
  
  var code =  '';      
  return code;
};




//------------------------------------------------------------------------------------------------------------------------------
//driss_D1R32_Creer_page_web
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_Creer_page_web = function() {
  var head_code = Blockly.Arduino.statementToCode(this, 'HEAD');
  var body_code = Blockly.Arduino.statementToCode(this, 'BODY');

  Blockly.Arduino.definitions_['define_PAGE_EXIST'] = '#define PAGE_EXIST';

  Blockly.Arduino.setups_['setup_page_web'] =  'server.on ( "/", handleRoot );\n'+
                                               '  server.begin();\n'+
                                               '  Serial.println ( "Le serveur HTTP est en fonctionnement" );\n';
  Blockly.Arduino.handleRoot_['existe']  = true;
  Blockly.Arduino.handleRoot_['page_web'] = '  server.send ( 200, "text/html", getPage() );\n'+
                                            '  delay(10);';
  
  Blockly.Arduino.pagetab_['existe'] = true;
  Blockly.Arduino.pagetab_['part1'] =  'String getPage(){\n'+
                                       '#define PAGE_EXIST\n'+
                                       '  String  page = "";\n'+
                                       '  page += "<!DOCTYPE html>";\n'+
                                       '  page += "<html>";\n'+
                                       '  page += "  <head>";\n'+
                                       '  page += "    <meta charset=\'utf-8\'>";';
                                       
  Blockly.Arduino.pagetab_['part2'] =  '  page += "  </head>";\n'+
                                       '  page +=    MonEsp.addPhoneStyle() ;\n'+
                                       '  page += "  <body onload=\'process()\'>";';
   
  Blockly.Arduino.pagetab_['part3'] =  '  page += "    <style>";\n'+
                                       '  page += "      .value {font-size:x-large; font-style:normal; color:#3388ff;font-weight:bold; }";\n'+
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
  //alert('0 - '+mybodycode[0]+'\n'+'1 - '+mybodycode[1] +'2 - '+mybodycode[2]);
  //console.log('0 - '+mybodycode[0]+'\n'+'1 - '+mybodycode[1] +'2 - '+mybodycode[2]);
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
      //console.log(mybodycode[k]);
    }
    code +=  '#ifdef PAGE_EXIST\n'+
              '  server.handleClient();\n'+
              '  delay(10);\n'+
              '#endif\n'+
              '//delay(10);\n';
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
  value_name = value_name.replace(/=/g, "");
  value_name = value_name.replace(/\+/g, "");
  value_name = value_name.replace(/-/g, "");
  value_name = value_name.replace(/\*/g, "");
  value_name = value_name.replace(/\\/g, "");
  value_name = value_name.replace(/\//g, "");
  value_name = "_"+value_name+"_";

  unite = unite.replace(/ /g, "");
  //unite = unite.replace(/°C/g, "deg.C");

  unite = unite.substr(1, unite.length-2);

  var value_name_sa = replaceSpec(value_name);
  
  var zone = getEmplacement(this);
  


  Blockly.Arduino.includes_['define_Duinoedu_Esp8266'] = "#include <Duinoedu_Esp8266.h>";

  Blockly.Arduino.handleXML_['existe']  = true;
  Blockly.Arduino.handleXML_['web_write_val'] = '  server.send(200,"text/xml",buildXML());';
 
  Blockly.Arduino.setups_['setup_web_write_val'] = "server.on ( \"/xml\", handleXML );";

  Blockly.Arduino.variables_['var_server'] = "ESP8266WebServer server ( 80 );";
  Blockly.Arduino.variables_['var_'+value_name_sa] = "String "+value_name_sa+"=\"\";";

  if((zone == "BODY") || (zone == "CADRE")){
    Blockly.Arduino.xmltab_['existe']  = true;
    Blockly.Arduino.xmltab_['web_write_val_'+value_name_sa] =  ''+
        '  XML += "<'+value_name_sa+'>"+'+value_name_sa+'+"</'+value_name_sa+'>";';
    
    Blockly.Arduino.javatab_['existe']  = true;
    Blockly.Arduino.javatab_['web_write_val_'+value_name_sa] =  ''+
        '  javaScript += "document.getElementById(\'v_'+value_name_sa+'\').innerHTML = this.responseXML.getElementsByTagName(\''+value_name_sa+'\')[0].childNodes[0].nodeValue;\\n";';
  }
  var code ='';
  //alert(zone);
  switch(zone){
    case "HEAD" :  code +=  '';
                  break;
    case "BODY" : code +=  '~' ;
                  code +=  'page +=      buildJavascript();\n';
                  code +=  'page += "   '+value_name.replace(/_/g, " ")+' = <a class=\'value\' id=\'v_'+value_name_sa+'\'></a> '+unite+'";\n';
                  code +=  '~'+value_name_sa+' = String('+value+');\n';
                  break;
   
    case "CADRE" : code +=  '~' ;
                   code +=  'page +=          buildJavascript();\n';
                   code +=  'page += "       '+value_name.replace(/_/g, " ")+' = <a class=\'value\' id=\'v_'+value_name_sa+'\'></a> '+unite+'";';
                   code +=  '~'+value_name_sa+' = String('+value+');\n';
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
  Blockly.Arduino.variables_['var_'+value_name_sa] = "String "+value_name_sa+"=\"\";";

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
                   code +=  '~'+value_name_sa+' = String('+value+');\n'
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
//ESP Basic
//------------------------------------------------------------------------------------------------------------------------------





/********* */
//MODE BASIC
/********* */

Blockly.Arduino.driss_D1R32_config_basic = function() { 
  var value_ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
  var value_key = Blockly.Arduino.valueToCode(this, 'KEY', Blockly.Arduino.ORDER_ATOMIC);
   

  Blockly.Arduino.includes_['define_Duinoedu_Esp8266'] = "#include <Duinoedu_Esp8266.h>";

  Blockly.Arduino.variables_['var_MonEsp'] = "Duinoedu_Esp8266 MonEsp;";
 // Blockly.Arduino.variables_['var_server'] = "ESP8266WebServer server ( 80 );";
/*
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
  
 */
  Blockly.Arduino.handleRoot_['existe']  = false;
  Blockly.Arduino.handleXML_['existe']  = false;

  Blockly.Arduino.setups_['setup_D1R32_config'] = 
                "//le mot de passe doit comporter 8 caractères ou plus\n"+
                "  MonEsp.connect_AP("+value_ssid+","+value_key+");\n";
                //"  server.on ( \"/xml\", handleXML );";

  var code =  '';
  /*
  code = '#ifdef PAGE_EXIST\n'+
         '  server.handleClient();\n'+
         '  delay(10);\n'+
         '#endif\n';
             
*/
  return code;
};


//------------------------------------------------------------------------------------------------------------------------------
//driss_page_web
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_page_web = function() {
  var body_code = Blockly.Arduino.statementToCode(this, 'BODY');
  Blockly.Arduino.variables_['var_server'] = "ESP8266WebServer server ( 80 );";

  Blockly.Arduino.setups_['setup_page_web'] =  'server.on ( "/", handleRoot );\n'+
                                               '  server.begin();\n'+
                                               '  Serial.println ( "Le serveur HTTP est en fonctionnement" );\n';

  Blockly.Arduino.definitions_['define_PAGE_EXIST'] = '#define PAGE_EXIST';
  Blockly.Arduino.handleRoot_['existe']  = true;
  Blockly.Arduino.handleRoot_['page_web'] = '  server.send ( 200, "text/html", getPage() );\n'+
                                            '  delay(10);';

  Blockly.Arduino.pagetab_['existe'] = true;
  Blockly.Arduino.pagetab_['part1'] =  'String getPage(){\n'+
                                       '#define PAGE_EXIST\n'+
                                       '  String  page = "";\n'+
                                       '  page += "<!DOCTYPE html>";\n'+
                                       '  page += "<html>";\n'+
                                       '  page += "  <head>";\n'+
                                       '  page += "    <meta charset=\'utf-8\'>";';

  Blockly.Arduino.pagetab_['part2'] =  '  page += "  </head>";\n'+
                                       '  page +=    MonEsp.addPhoneStyle() ;\n'+
                                       '  page += "  <body onload=\'process()\'>";';
   
  Blockly.Arduino.pagetab_['part3'] =  '  page += "    <style>";\n'+
                                       '  page += "      .value {font-size:x-large; font-style:normal; color:#3388ff;font-weight:bold; }";\n'+
                                       '  page += "    </style>";';  

  Blockly.Arduino.pagetab_['part4'] =  '  page += "  </body>";\n'+
                                       '  page += "  </html>";\n'+
                                       '  return page;\n'+
                                       ' }';

  Blockly.Arduino.styletab_['debut'] =  '  page += "    <style>";' ;
  Blockly.Arduino.styletab_['fin']   =  '  page += "    </style>";' ;

  const mybodycode = body_code.split('~');
  
  var code = '';

  var id=Blockly.Arduino.idstab_['id'];
  
  if(body_code !=''){ 
    
    Blockly.Arduino.pagetab_['web_page_codeBody_'+id] = '  ' ;
    for(var k=1;k<mybodycode.length;k+=2) { 
      Blockly.Arduino.pagetab_['web_page_codeBody_'+id] += ''+mybodycode[k]+'';
    }
    for(var k=2;k<mybodycode.length;k+=2) { 
      code += ''+mybodycode[k]+'';
    }
  } 

  if( body_code !='') id++;
  Blockly.Arduino.idstab_['id']=id;
  
  //alert(mybodycode[2] + "  /  " + mybodycode[2]);
  
  
  code += '\n'+
          '#ifdef PAGE_EXIST\n'+
          '  server.handleClient();\n'+
          '  delay(10);\n'+
          '#endif\n';
  
  return code;
};


//------------------------------------------------------------------------------------------------------------------------------
//driss_body_text
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_body_text = function() {
  
  var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
  
  text = text.substr(1, text.length-2);
  
  Blockly.Arduino.includes_['define_Duinoedu_Esp8266'] = "#include <Duinoedu_Esp8266.h>";

  Blockly.Arduino.variables_['var_server'] = "ESP8266WebServer server ( 80 );";

  var code ='';
  code +=  '~' ;
  code +=  'page += "    <p class=\'\'>'+text+'</p>";\n';
  code +=  '~ ';

  return code; 
};

//------------------------------------------------------------------------------------------------------------------------------
//driss_web_switch
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_web_switch = function() { 
  var switch_name = this.getFieldValue('SWITCH_NAME');
  switch_var = "$"+switch_name.replace(/ /g, "_");
  switch_var = replaceSpec(switch_var);
  
  Blockly.Arduino.variables_['var_switch_'+switch_var] = "int "+switch_var+" ;";

  Blockly.Arduino.handleRoot_['web_switch_'+switch_var] = '  MonEsp.updateStringint(&server, "'+switch_name+'", '+switch_var+');';
                                             
  code =  switch_var ; 
  code +=  '~' ;
  code += 'page +=      MonEsp.javaslider();\n';
  code += 'page +=      MonEsp.slider( 0 , 1, "'+switch_name+ '""") ;\n';
  code +=  '~' ;

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



//------------------------------------------------------------------------------------------------------------------------------
//driss_web_button
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_web_button = function() { 
  var btn_name = this.getFieldValue('BUTTON_NAME');
  //btn_name = btn_name.substr(1, btn_name.length-2);
  btn_var = btn_name.replace(/ /g, "_");
  btn_var = replaceSpec(btn_var);
  
  Blockly.Arduino.variables_['var_switch_'+btn_var] = "int "+btn_var+" ;";

  Blockly.Arduino.handleRoot_['web_switch_'+btn_var] = '  MonEsp.updateStringint(&server, "'+btn_name+'", '+btn_var+');';
                                             
  code =  btn_var ; 
  code +=  '~' ;
  code += 'page +=      MonEsp.javaslider();\n';
  code += 'page +=      MonEsp.slider( 0 , 0, "'+btn_name+ '""") ;\n';
  code +=  '~' ;

  return [code, Blockly.Arduino.ORDER_ATOMIC];
  
  //return code; 
};


//------------------------------------------------------------------------------------------------------------------------------
//driss_web_potentiometre
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_web_potentiometre = function() { 
  var rotary_name = this.getFieldValue('ROTARY_NAME');
  var minValue = Blockly.Arduino.valueToCode(this, 'ROTARY_MIN', Blockly.Arduino.ORDER_ATOMIC);
  var maxValue = Blockly.Arduino.valueToCode(this, 'ROTARY_MAX', Blockly.Arduino.ORDER_ATOMIC);
  
  //rotary_name = switch_name.substr(1, switch_name.length-2);
  rotary_var = "$"+rotary_name.replace(/ /g, "_");
  rotary_var = replaceSpec(rotary_var);
  
  
  Blockly.Arduino.variables_['var_rotary_'+rotary_var] = "int "+rotary_var+" ;";
  Blockly.Arduino.handleRoot_['web_potentiometre_'+rotary_var] = '  MonEsp.updateStringint(&server,"'+rotary_name+'", '+rotary_var+');';

  code =  rotary_var ; 
  code +=  '~' ;
  code += 'page +=      MonEsp.javaslider();\n';
  code += 'page +=      MonEsp.slider('+minValue+' , '+maxValue+' ,"'+rotary_name+ '""") ;\n';
  code +=  '~' ;

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//------------------------------------------------------------------------------------------------------------------------------
//driss_web_write_val
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_web_write_val = function() {
  var value_name = Blockly.Arduino.valueToCode(this, 'VAL_LABEL', Blockly.Arduino.ORDER_ATOMIC);
  var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);
  var unite = Blockly.Arduino.valueToCode(this, 'VAL_UNITE', Blockly.Arduino.ORDER_ATOMIC);

  value_name = value_name.substr(1, value_name.length-2);
  value_name = value_name.replace(/ /g, "_");
  value_name = "_"+value_name+"_";

  unite = unite.replace(/ /g, "");
  //unite = unite.replace(/°C/g, "deg.C");

  unite = unite.substr(1, unite.length-2);

  var value_name_sa = replaceSpec(value_name);
  
  //var zone = getEmplacement(this);
  
  Blockly.Arduino.includes_['define_Duinoedu_Esp8266'] = "#include <Duinoedu_Esp8266.h>";

  Blockly.Arduino.handleXML_['existe']  = true;
  Blockly.Arduino.handleXML_['web_write_val'] = '  server.send(200,"text/xml",buildXML());';
 
  
  Blockly.Arduino.setups_['setup_web_write_val'] = "server.on ( \"/xml\", handleXML );";

  Blockly.Arduino.variables_['var_server'] = "ESP8266WebServer server ( 80 );";
  Blockly.Arduino.variables_['var_'+value_name_sa] = "String "+value_name_sa+" = \"\";";

  
 // Blockly.Arduino.xmltab_['debut'] =  'String buildXML(){\n'+
  //                                    '  String XML="<?xml version=\'1.0\'?><inputs>";';
  Blockly.Arduino.xmltab_['existe']  = true;
  Blockly.Arduino.xmltab_['web_write_val_'+value_name_sa] =  '  XML += "<'+value_name_sa+'>"+'+value_name_sa+'+"</'+value_name_sa+'>";';
  
 //Blockly.Arduino.xmltab_['fin']   =  '  XML+="</inputs>";\n'+
  //                                    '  return XML;\n'+
  //                                   ' }';
  
  //Blockly.Arduino.javatab_['debut'] = 'String buildJavascript(){\n'+
  //                                    '  String javaScript=MonEsp.javaScript_start();';
  Blockly.Arduino.javatab_['existe']  = true;
  Blockly.Arduino.javatab_['web_write_val_'+value_name_sa] ='  javaScript += "document.getElementById(\'v_'+value_name_sa+'\').innerHTML = this.responseXML.getElementsByTagName(\''+value_name_sa+'\')[0].childNodes[0].nodeValue\\n";';
  
  //Blockly.Arduino.javatab_['fin']   = '  javaScript+=MonEsp.javaScript_end();\n'+
  //                                    '  return javaScript;\n'+
  //                                    ' }';


   
    
  

  var code ='';
  code +=  '~' ;
  code +=  'page +=      buildJavascript();\n';
  code +=  'page += "   '+value_name.replace(/_/g, " ")+' = <a class=\'value\' id=\'v_'+value_name_sa+'\'></a> '+unite+'";\n';
  code +=  '~';
  code +=  value_name_sa+' = String('+value+');\n';
  //alert(code);
  return code; 
};



//------------------------------------------------------------------------------------------------------------------------------
//driss_grove_red_led
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_grove_led = function() { 
  var dropdown_pin = this.getFieldValue('PIN');
  var stat = Blockly.Arduino.valueToCode(this, 'INPUT', Blockly.Arduino.ORDER_ATOMIC);
  //alert(stat);
  Blockly.Arduino.setups_['setup_led'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  
  
  code ='';
  var zone = getEmplacement(this);
  //console.log ("Zone : "+zone);
  switch(zone){
    case "BODY" : code  ='~';
                  code +='~';
                  code += 'digitalWrite('+dropdown_pin+','+stat+');\n'  //code à insérer dans la loop Arduino
                  break;
    
    default : //code  ='~';
                          //code +='~';
                          code = 'digitalWrite('+dropdown_pin+','+stat+');\n'  //code à insérer dans la loop Arduino
                          code += 'delay(10);\n'
                          break;
      
      }  

  return code;
};

//------------------------------------------------------------------------------------------------------------------------------
//driss_Web_led
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_Web_led = function() { 
  var del_name = this.getFieldValue('DEL_NAME');
  var del_color = this.getFieldValue('DEL_COLOR');
  var stat = Blockly.Arduino.valueToCode(this, 'INPUT_WEB_DEL_STAT', Blockly.Arduino.ORDER_ATOMIC);
  var checkbox_Show_label = this.getFieldValue('SHOW_LABEL') == 'TRUE';
 
  console.log(" checkbox_Show_label : "+checkbox_Show_label);
  
  //del_name = del_name.substr(1, del_name.length-2);
  del_name = del_name.replace(/ /g, "_");
  del_name = "_"+del_name+"_";

  var del_name_sa = replaceSpec(del_name);
  
  //var zone = getEmplacement(this);
  
  Blockly.Arduino.includes_['define_Duinoedu_Esp8266'] = "#include <Duinoedu_Esp8266.h>";

  Blockly.Arduino.handleXML_['existe']  = true;
  Blockly.Arduino.handleXML_['web_led'] = '  server.send(200,"text/xml",buildXML());';
 
  
  Blockly.Arduino.setups_['setup_web_led'] = "server.on ( \"/xml\", handleXML );";

  Blockly.Arduino.variables_['var_server'] = "ESP8266WebServer server ( 80 );";
  Blockly.Arduino.variables_['var_'+del_name_sa] = "String "+del_name_sa+" = \"\";";

  
  Blockly.Arduino.xmltab_['existe']  = true;
  Blockly.Arduino.xmltab_['web_write_val_'+del_name_sa] =  '  XML += "<'+del_name_sa+'>"+'+del_name_sa+'+"</'+del_name_sa+'>";';
 
  Blockly.Arduino.javatab_['existe']  = true;

  del_rouge = '<button style=\\"vertical-align:middle; background-color: #C70039; border: none; color: white; border-radius: 50%; padding: 30px; cursor: pointer;\\"></button>';
  del_verte = '<button style=\\"vertical-align:middle; background-color: #27AE60; border: none; color: white; border-radius: 50%; padding: 30px; cursor: pointer;\\"></button>';
  del_bleue = '<button style=\\"vertical-align:middle; background-color: #2980B9; border: none; color: white; border-radius: 50%; padding: 30px; cursor: pointer;\\"></button>';
  del_grise = '<button style=\\"vertical-align:middle; background-color: #E5E8E8; border: none; color: white; border-radius: 50%; padding: 30px; cursor: pointer;\\"></button>';
  
  switch (del_color){
    case "RED" : del_style = del_rouge; break;
    case "GREEN" : del_style = del_verte; break;
    case "BLUE" : del_style = del_bleue; break;
  }
  Blockly.Arduino.javatab_['web_write_val_'+del_name_sa] =
    '  javaScript += "if(this.responseXML.getElementsByTagName(\''+del_name_sa+'\')[0].childNodes[0].nodeValue == 1) {";\n' +
    '  javaScript += "document.getElementById(\'v_'+del_name_sa+'\').innerHTML = \''+del_style+'\'";\n' +
    '  javaScript += "}";\n'+
    '  javaScript += "else {";\n' +
    '  javaScript += "document.getElementById(\'v_'+del_name_sa+'\').innerHTML = \''+del_grise+'\'";\n' +
    '  javaScript += "}";\n';
  
  
 
  var code ='';
  code +=  '~' ;
  code +=  'page +=      buildJavascript();\n';
  if(checkbox_Show_label){
    code +=  'page += "   '+del_name_sa.replace(/_/g, " ") + ' <span  id=\'v_'+del_name_sa+'\'></span> ";\n';
  }
  else{
    code +=  'page += "    <span  id=\'v_'+del_name_sa+'\'></span> ";\n';
  }
  
  code +=  '~';
  code +=  del_name_sa+' = String('+stat+');\n';
  //alert(code);
  return code; 
};



//------------------------------------------------------------------------------------------------------------------------------
//driss_servo_standard
//------------------------------------------------------------------------------------------------------------------------------
Blockly.Arduino.driss_servo_standard = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var value_angle = Blockly.Arduino.valueToCode(this, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
  
  var servo = 'servomoteur_'+dropdown_pin;
  //dans include définition    
  
  Blockly.Arduino.includes_['define_Servo'] = "#include <Servo.h>";
  Blockly.Arduino.variables_['var_Servo_'+dropdown_pin] = "Servo "+servo+";";
  
  Blockly.Arduino.setups_['setup_'+servo] = servo+'.attach('+dropdown_pin+');'; //code à insérer dans le setup Arduino
  
  
  var code = servo+'.write('+value_angle+');\n'  //code à insérer dans la loop Arduino
  
  
  return code;
};


//driss_web_btn_download
Blockly.Arduino.driss_web_btn_download = function() {
  
  var url = Blockly.Arduino.valueToCode(this, 'URL', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.includes_['define_Duinoedu_Esp8266'] = "#include <Duinoedu_Esp8266.h>";

  /*
  Blockly.Arduino.handleXML_['existe']  = true;
  Blockly.Arduino.handleXML_['web_write_val'] = '  server.send(200,"text/xml",buildXML());';
 
  
  Blockly.Arduino.setups_['setup_web_write_val'] = "server.on ( \"/xml\", handleXML );";

  Blockly.Arduino.variables_['var_server'] = "ESP8266WebServer server ( 80 );";
  Blockly.Arduino.variables_['var_'+value_name_sa] = "String "+value_name_sa+" = \"\";";

  
  Blockly.Arduino.xmltab_['existe']  = true;
  Blockly.Arduino.xmltab_['web_write_val_'+value_name_sa] =  '  XML += "<'+value_name_sa+'>"+'+value_name_sa+'+"</'+value_name_sa+'>";';
  
 
  Blockly.Arduino.javatab_['existe']  = true;
  Blockly.Arduino.javatab_['web_write_val_'+value_name_sa] ='  javaScript += "document.getElementById(\'v_'+value_name_sa+'\').innerHTML = this.responseXML.getElementsByTagName(\''+value_name_sa+'\')[0].childNodes[0].nodeValue";';
  */
  

  var code ='';
  code +=  '~' ;
  //code +=  'page +=      \n';
  code +=  'page += "    <button class=\'favorite styled\'  type=\'button\'  onClick=\\'+url+'\\> Télécharger le fichier </button>";';
  code +=  '~';
  //code +=  value_name_sa+' = String('+value+');\n';
  //alert(code);
  return code; 
};

















//------------------------------------------------------------------------------------------------------------------------------
//Cybersécurité
//------------------------------------------------------------------------------------------------------------------------------


// une petite boîte à outils générique pour naviguer dans la hiérarchie de blocs Blockly
/**
 * Renvoie le premier ancêtre (surround parent) d’un type donné.
 * @param {Blockly.Block} block - Le bloc de départ.
 * @param {string} type - Le type du bloc recherché (ex: "base_loop").
 * @returns {Blockly.Block|null} - Le bloc ancêtre trouvé ou null.
 */
function findAncestor(block, type) {
  let cur = block;
  while (cur) {
    if (cur.type === type) return cur;
    cur = cur.getSurroundParent();
  }
  return null;
}

/**
 * Renvoie le premier ancêtre dont le type est dans la liste `types`.
 * @param {Blockly.Block} block
 * @param {string[]} types - Liste de types candidats.
 * @returns {{block: Blockly.Block|null, type: string|null}} - Le bloc trouvé et son type.
 */
function findAnyAncestorOf(block, types) {
  let cur = block;
  while (cur) {
    if (types.includes(cur.type)) {
      return { block: cur, type: cur.type };
    }
    cur = cur.getSurroundParent();
  }
  return { block: null, type: null };
}

/**
 * Indique si `block` est à l’intérieur (englobé par) d’un bloc du type `type`.
 * @param {Blockly.Block} block
 * @param {string} type
 * @returns {boolean}
 */
function isInside(block, type) {
  return !!findAncestor(block, type);
}

/**
 * Remonte jusqu’à la racine et renvoie le chemin des types (debug).
 * @param {Blockly.Block} block
 * @returns {string[]} - Liste des types du bloc → racine.
 */
function getAncestorTypes(block) {
  const path = [];
  let cur = block;
  while (cur) {
    path.push(cur.type);
    cur = cur.getSurroundParent();
  }
  return path;
}

//---------------------------------------------------------------




Blockly.Arduino.driss_d1r32_esp32_config_station = function() { 
  var type = this.getFieldValue('TYPE');
  var ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
  var ip = this.getFieldValue('IP');
  var mask = this.getFieldValue('MASK');
  //var gw = this.getFieldValue('GATEWAY');

  //Blockly.Arduino._driss_memory.mode = "NORMAL";
  
  Blockly.Arduino.includes_['define_WiFi'] = "#include <WiFi.h>";
  Blockly.Arduino.includes_['define_WiFiUdp'] = "#include <WiFiUdp.h>";
  Blockly.Arduino.includes_['define_esp_wifi'] = "#include <esp_wifi.h>";


  //======================== Options d’affichage ========================
  Blockly.Arduino.variables_['var_ViewMode'] = "enum ViewMode { WIRESHARK_VIEW = 0, SUMMARY_VIEW = 1 };";
  Blockly.Arduino.variables_['var_SHOW_STAT'] = "bool SHOW_STAT  = true; // true => imprimer les stats à la fin de l’espionnage";
  Blockly.Arduino.variables_['var_VIEW_MODE'] = "ViewMode VIEW_MODE = WIRESHARK_VIEW;";
  
  //======================== Réglages généraux ==========================
  Blockly.Arduino.variables_['var_MAX_TRAME_PAYLOAD'] = "";
  Blockly.Arduino.variables_['define_MAX_TRAME_PAYLOAD'] = "#define MAX_TRAME_PAYLOAD 128 // payload UDP max retenu pour affichage";
  Blockly.Arduino.variables_['define_MAX_CAPTURE'] = "#define MAX_CAPTURE 700 // taille max d’une trame 802.11 capturée";
  //Blockly.Arduino.variables_['define_SLOTS'] = "#define SLOTS  2 // double buffer pour ISR sniffer";
  //======================== Filtres pédagogiques (ESPION) =============
  // Blockly.Arduino.variables_['var_SHOW_ONLY_MY_BSSID'] = "bool SHOW_ONLY_MY_BSSID  = true;  // garder seulement les trames de mon AP";
  // Blockly.Arduino.variables_['var_ONLY_AP_TO_STA'] = "bool ONLY_AP_TO_STA = true;  // ne garder que AP -> STA (downlink)";
  // Blockly.Arduino.variables_['var_USE_FILTER_STA_DEST'] = "bool USE_FILTER_STA_DEST = false; // si true : ne garder que AP -> MAC_FILTER";
  //======================== Réseau / UDP ===============================
  // udpApp pour tes messages normaux et  udpDisc pour la découverte
  Blockly.Arduino.variables_['var_udpApp'] = "WiFiUDP   udpApp;";
  Blockly.Arduino.variables_['var_udpDisc'] = "WiFiUDP   udpDisc;";

  Blockly.Arduino.variables_['var_UDP_PORT'] = "const int UDP_PORT = 4210;";
  Blockly.Arduino.variables_['var_DISC_PORT'] = "const int DISC_PORT = 4211;";

  Blockly.Arduino.variables_['var_SSID'] = "const char* SSID = \"\";";
  Blockly.Arduino.variables_['var_PASSWORD'] = "const char* PASSWORD = \"\";";
  // Paramètres IP 
  Blockly.Arduino.variables_['var_ipFixe'] = "IPAddress ipFixe;";
  Blockly.Arduino.variables_['var_mask'] = "IPAddress mask;";
  Blockly.Arduino.variables_['var_gw'] = "IPAddress gw;";
  Blockly.Arduino.variables_['var_dns'] = "IPAddress dns;";

  Blockly.Arduino.variables_['var_isConnected'] = "boolean isConnected = false;";

  //======================== Structure de TRAME =========================
  // * TrameWiFi : structure unique utilisée pour stocker les infos
  // * d’une “dernière trame” traitée (que ce soit en NORMAL ou en ESPION).
  // * → les getters lisent dedans pour extraire les infos.
  Blockly.Arduino.variables_['var_TrameWiFi'] = ""+
  "struct TrameWiFi {\n"+
  "  // Valide signifie : au moins L2 (MAC) cohérent\n"+
  "  bool       valid;\n"+
  "  bool       isData;\n"+
  "  bool       isProtected;\n"+
  "  bool       isDown;  // AP -> STA (downlink)\n"+
  "  bool       isUp;  // STA -> AP (uplink)\n"+
  "  uint16_t   fc; // Frame Control brut\n"+
  "  uint8_t    mac_dst[6];\n"+
  "  uint8_t    mac_src[6];\n"+
  "  uint8_t    bssid[6];\n"+
  "  // L3/L4 si dispo (IPv4/UDP)\n"+
  "  bool       hasIPv4;\n"+
  "  unsigned long ts_ms;\n"+
  "  IPAddress  ip_src;\n"+
  "  IPAddress  ip_dst;\n"+
  "  bool       hasUDP;\n"+
  "  uint16_t   port_src;\n"+
  "  uint16_t   port_dst;\n"+
  "  uint16_t   udp_len;  // long. entête UDP incluse\n"+
  "  uint8_t    payload[MAX_TRAME_PAYLOAD];\n"+
  "  size_t     payload_len;\n"+
  "  String     payload_ascii; // message lisible (ASCII 32..126)\n"+
  "  // Informations radio (mode ESPION)\n"+
  "  int8_t     rssi;\n"+
  "  uint8_t    rateCode;\n"+
  "};\n";

  // La “dernière trame” pour le mode NORMAL :
  Blockly.Arduino.variables_['var_g_lastNormal'] = "TrameWiFi g_lastNormal= {0};; // mode NORMAL";
  // La “dernière trame” pour le mode ESPION :
  Blockly.Arduino.variables_['var_g_lastSniff'] = "TrameWiFi g_lastSniff= {0};;  // mode ESPION";
  
  /** Choix de la source des getters : NORMAL ou SNIFFER */
  //Blockly.Arduino.variables_['var_Source'] = "enum Source { NORMAL = 0, PROMISCUOUS = 1 };";

  // Canal + BSSID (récupérés à la connexion)
  Blockly.Arduino.variables_['var_apPrimaryChannel'] = "uint8_t  apPrimaryChannel = 1;";
  Blockly.Arduino.variables_['var_g_myBSSID'] = "uint8_t g_myBSSID[6] = {0};";

  //======================== MAC des 3 ESP (exemple) ====================
  // Blockly.Arduino.variables_['var_MAC_A'] = "uint8_t MAC_A[6]  = { 0x7C, 0x9E, 0xBD, 0x37, 0xE1, 0xDC }; // ESP A";
  // Blockly.Arduino.variables_['var_MAC_B'] = "uint8_t MAC_B[6]  = { 0xAC, 0x67, 0xB2, 0x36, 0x64, 0x20 }; // ESP B";
  // Blockly.Arduino.variables_['var_MAC_C_'] = "uint8_t MAC_C_[6] = { 0xAC, 0x67, 0xB2, 0x38, 0x82, 0x54 }; // ESP C";
  
  // BSSID (AP) connu (on le relit aussi dynamiquement)
  //Blockly.Arduino.variables_['var_BSSID_KNOWN'] = " uint8_t BSSID_KNOWN[6] = { 0x10, 0xFE, 0xED, 0xBB, 0x80, 0x0F };";
  
  
  // Filtre destination optionnel (par défaut = MAC de C)
  Blockly.Arduino.variables_['var_MAC_FILTER'] = "uint8_t MAC_FILTER[6] = { 0xAC, 0x67, 0xB2, 0x38, 0x82, 0x54 };";


  // variables globales pour mémoriser les trames Wifi reçues
  Blockly.Arduino.variables_['var_wirTame'] = "String wirTrame;";
  Blockly.Arduino.variables_['var_sumTame'] = "String sumTrame;";



  // ---- Mémoire de la dernière trame ENVOYÉE (côté IP/UDP/payload) ----
  Blockly.Arduino.variables_['var_g_lastTx'] = ''+
  'struct LastTx {\n'+
  '  bool valid = false;\n'+
  '  IPAddress ip_src, ip_dst;\n'+
  '  uint16_t  port_src = 0, port_dst = 0;\n'+
  '  String payload;\n'+
  '  size_t payload_len = 0;\n'+
  '} g_lastTx;\n';

  // Dernière trame 802.11 reconstruite à partir d’une réception "normale"
  Blockly.Arduino.variables_['var_g_lag_lastRx80211'] = 'static uint8_t g_lastRx80211[24 + 8 + 20 + 8 + MAX_TRAME_PAYLOAD + 4];';
  Blockly.Arduino.variables_['var_g_lastRxLen'] = 'static size_t  g_lastRxLen = 0;';
  


  // ---------- Mini cache ARP (application) ----------
  Blockly.Arduino.variables_['var_ArpEntry'] = 'struct ArpEntry { IPAddress ip; uint8_t mac[6]; unsigned long ts; };';
  Blockly.Arduino.variables_['var_ARP_MAX'] = 'const int ARP_MAX = 16;';
  Blockly.Arduino.variables_['var_g_arp'] = 'ArpEntry g_arp[ARP_MAX];';
 
  // Active/désactive la demande applicative si MAC inconnue
  //Blockly.Arduino.variables_['define_ALLOW_APP_PROBE'] = "#define ALLOW_APP_PROBE 1";
  


  // Si tu veux éviter d'utiliser une trame trop ancienne :
  Blockly.Arduino.variables_['define_FRAME_STALE_MS'] = "static const unsigned long FRAME_STALE_MS = 3000; // 3 s";


  // Sélection explicite de la source si besoin
   Blockly.Arduino.variables_['define_TrameSource'] = "enum TrameSource { AUTO_SRC, NORMAL_SRC, SNIFF_SRC };";


  //======================== OUTILS MAC / IP ============================

  
  

  
  Blockly.Arduino.codeFunctions_['cyber_macToStr6'] =''+
  'static String macToStr6(const uint8_t m[6]) {\n'+
  '  char s[24];\n'+
  '  snprintf(s, sizeof(s), "%02X:%02X:%02X:%02X:%02X:%02X", m[0],m[1],m[2],m[3],m[4],m[5]);\n'+
  '  return String(s);\n'+
  '}\n';

 

  // Blockly.Arduino.codeFunctions_['cyber_parseMac'] =''+
  // 'bool parseMac(const char* s, uint8_t out[6]) {\n'+
  // '  unsigned int b[6];\n'+
  // '  if (sscanf(s, "%02x:%02x:%02x:%02x:%02x:%02x",&b[0],&b[1],&b[2],&b[3],&b[4],&b[5]) != 6) return false;\n'+
  // '  for (int i=0;i<6;i++) out[i] = (uint8_t)b[i];\n'+
  // '  return true;\n'+
  // '}\n';



  // Helper: MAC -> "AA:BB:CC:DD:EE:FF"
  Blockly.Arduino.codeFunctions_['cyber_macToStr__'] = ''+
  'static String macToStr__(const uint8_t m[6]) {\n'+
  '  char s[18];\n'+
  '  sprintf(s, "%02X:%02X:%02X:%02X:%02X:%02X", m[0],m[1],m[2],m[3],m[4],m[5]);\n'+
  '  return String(s);\n'+
  '}\n';

  // Retourne dans 'out' la trame « courante » selon la source demandée.
  // - AUTO_SRC : choisit la trame valide la plus récente (ts_ms) entre g_lastSniff et g_lastNormal
  // - NORMAL_SRC : force g_lastNormal (si valide/récente)
  // - SNIFF_SRC  : force g_lastSniff  (si valide/récente)
  // Retourne true si 'out' est utilisable.
  Blockly.Arduino.codeFunctions_['cyber_getCurrentFields'] = ''+
  'static bool getCurrentFields(TrameWiFi& out, TrameSource src = AUTO_SRC) {\n'+
  '  unsigned long now = millis();\n'+

  '  auto usable = [&](const TrameWiFi& t)->bool {\n'+
  '    if (!t.valid) return false;                        // au moins L2 cohérent\n'+
  '    if (t.ts_ms == 0) return true;                     // pas de notion d\'âge -> OK\n'+
  '    return (now - t.ts_ms) <= FRAME_STALE_MS;          // pas trop vieux\n'+
  '  };\n'+

  '  if (src == NORMAL_SRC) {\n'+
  '    if (usable(g_lastNormal)) { out = g_lastNormal; return true; }\n'+
  '    return false;\n'+
  '  }\n'+
  '  if (src == SNIFF_SRC) {\n'+
  '    if (usable(g_lastSniff))  { out = g_lastSniff;  return true; }\n'+
  '    return false;\n'+
  '  }\n'+

  '  // AUTO : on prend le plus récent des deux (si valides)\n'+
  '  bool nOK = usable(g_lastNormal);\n'+
  '  bool sOK = usable(g_lastSniff);\n'+

  '  if (nOK && sOK) {\n'+
  '    // plus récent gagne ; à égalité on privilégie sniff (plus « brut »)\n'+
  '    if (g_lastSniff.ts_ms >= g_lastNormal.ts_ms) { out = g_lastSniff;  return true; }\n'+
  '    else                                         { out = g_lastNormal; return true; }\n'+
  '  }\n'+
  '  if (sOK) { out = g_lastSniff;  return true; }\n'+
  '  if (nOK) { out = g_lastNormal; return true; }\n'+

  '  return false;\n'+
  '}\n';



  

  // ------------------ Les getters demandés ------------------

  // IP source (retourne IPAddress() = 0.0.0.0 si indispo)
  Blockly.Arduino.codeFunctions_['cyber_getIPSource'] = ''+
  'IPAddress getIPSource(TrameSource src = AUTO_SRC) {\n'+
  '  TrameWiFi t;\n'+
  '  if (getCurrentFields(t, src) && t.hasIPv4) return t.ip_src;\n'+
  '  return IPAddress(); // 0.0.0.0\n'+
  '}\n';

  // IP destination
  Blockly.Arduino.codeFunctions_['cyber_getIPDestination'] = ''+
  'IPAddress getIPDestination(TrameSource src = AUTO_SRC) {\n'+
  '  TrameWiFi t;\n'+
  '  if (getCurrentFields(t, src) && t.hasIPv4) return t.ip_dst;\n'+
  '  return IPAddress();\n'+
 ' }\n';

  // MAC source (String "AA:BB:..."), vide si indispo
  Blockly.Arduino.codeFunctions_['cyber_getMACSource'] = ''+
  'String getMACSource(TrameSource src = AUTO_SRC) {\n'+
  '  TrameWiFi t;\n'+
  '  if (!getCurrentFields(t, src)) return String("");\n'+
  '  return macToStr__(t.mac_src);\n'+
  '}\n';

  // MAC destination (String), vide si indispo
  Blockly.Arduino.codeFunctions_['cyber_getMACDestination'] = ''+
  'String getMACDestination(TrameSource src = AUTO_SRC) {\n'+
  '  TrameWiFi t;\n'+
  '  if (!getCurrentFields(t, src)) return String("");\n'+
  '  return macToStr__(t.mac_dst);\n'+
  '}\n';

  // Port source (0 si indispo)
  Blockly.Arduino.codeFunctions_['cyber_getPortSource'] = ''+
  'uint16_t getPortSource(TrameSource src = AUTO_SRC) {\n'+
  '  TrameWiFi t;\n'+
  '  if (getCurrentFields(t, src) && t.hasUDP) return t.port_src;\n'+
  '  return 0;\n'+
  '}\n';

  // Port destination (0 si indispo)
  Blockly.Arduino.codeFunctions_['cyber_getPortDestination'] = ''+
  'uint16_t getPortDestination(TrameSource src = AUTO_SRC) {\n'+
  '  TrameWiFi t;\n'+
  '  if (getCurrentFields(t, src) && t.hasUDP) return t.port_dst;\n'+
  ' return 0;\n'+
  '}\n';

  // Longueur du payload (0 si indispo)
  Blockly.Arduino.codeFunctions_['cyber_getPayloadLength'] = ''+
  'size_t getPayloadLength(TrameSource src = AUTO_SRC) {\n'+
  '  TrameWiFi t;\n'+
  '  if (getCurrentFields(t, src)) return t.payload_len;\n'+
  '  return 0;\n'+
  '}\n';

  // Message (payload ASCII "lisible") ; remplace les non imprimables par '.'
  Blockly.Arduino.codeFunctions_['cyber_getMessage'] = ''+
  'String getMessage(TrameSource src = AUTO_SRC) {\n'+
  '  TrameWiFi t;\n'+
  '  if (!getCurrentFields(t, src) || t.payload_len == 0) return String("");\n'+
  '  if (t.payload_ascii.length()) return t.payload_ascii;\n'+
  '  String s; s.reserve(t.payload_len);\n'+
  '  for (size_t i = 0; i < t.payload_len; i++) {\n'+
  '    char c = (char)t.payload[i];\n'+
  '    s += (c >= 32 && c <= 126) ? c : \'.\';\n'+
  '  }\n'+
  '  return s;\n'+
  '}\n';



  //Emettre une requête ARP (broadcast) pour demander “qui a IP_X ?”, attendre la réponse ARP (unicast) et met à jour ma table ARP local.
  Blockly.Arduino.codeFunctions_['cyber_arpCachePut'] = ''+
  'void arpCachePut(IPAddress ip, const uint8_t mac[6]) {\n'+
  '  // remplace si existe\n'+
  '  for (int i=0;i<ARP_MAX;i++){\n'+
  '    if (g_arp[i].ts && g_arp[i].ip == ip){\n'+
  '      memcpy(g_arp[i].mac, mac, 6);\n'+
  '      g_arp[i].ts = millis();\n'+
  '      return;\n'+
  '    }\n'+
  '  }\n'+
  '  // sinon insère (1ère libre ou la plus vieille)\n'+
  '  int best = 0;\n'+
  '  unsigned long oldest = g_arp[0].ts;\n'+
  '  for (int i=0;i<ARP_MAX;i++){\n'+
  '    if (g_arp[i].ts == 0) { best = i; break; }\n'+
  '    if (g_arp[i].ts < oldest) { oldest = g_arp[i].ts; best = i; }\n'+
  '  }\n'+
  '  g_arp[best].ip = ip;\n'+
  '  memcpy(g_arp[best].mac, mac, 6);\n'+
  '  g_arp[best].ts = millis();\n'+
  '}\n';

  Blockly.Arduino.codeFunctions_['cyber_arpCacheGet'] = ''+
  'bool arpCacheGet(IPAddress ip, uint8_t outMac[6]) {\n'+
  '  for (int i=0;i<ARP_MAX;i++){\n'+
  '    if (g_arp[i].ts && g_arp[i].ip == ip){\n'+
  '      memcpy(outMac, g_arp[i].mac, 6);\n'+
  '      return true;\n'+
  '    }\n'+
  '  }\n'+
  '  return false;\n'+
  '}\n';

  //Protocole pour “apprendre” la MAC
  // Convertit "AA:BB:CC:DD:EE:FF" -> 6 octets
  Blockly.Arduino.codeFunctions_['cyber_parseMacString'] = ''+
  'bool parseMacString(const String& s, uint8_t out[6]) {\n'+
  '  int vals[6];\n'+
  '  if (sscanf(s.c_str(), "%x:%x:%x:%x:%x:%x",\n'+
  '            &vals[0],&vals[1],&vals[2],&vals[3],&vals[4],&vals[5]) == 6) {\n'+
  '    for (int i=0;i<6;i++) out[i] = (uint8_t)vals[i];\n'+
  '    return true;\n'+
  '  }\n'+
  '  return false;\n'+
  '}\n';

  // À appeler quand tu reçois un UDP (dans ta routine de réception existante)
  Blockly.Arduino.codeFunctions_['cyber_learnPeerMacFromAppMsg'] = ''+
  'void learnPeerMacFromAppMsg(const IPAddress& srcIP, const String& msg) {\n'+
  '  // Ex: "IAM;MAC=AC:67:B2:36:64:20"\n'+
  '  if (msg.startsWith("IAM;MAC=")) {\n'+
  '    String macStr = msg.substring(8); macStr.trim();\n'+
  '    uint8_t mac[6];\n'+
  '    if (parseMacString(macStr, mac)) {\n'+
  '      arpCachePut(srcIP, mac);\n'+
  '      //Serial.printf("[DEBUG LEARN] %s -> %02X:%02X:%02X:%02X:%02X:%02X\\n",\n'+
  '      //              srcIP.toString().c_str(),\n'+
  '      //              mac[0],mac[1],mac[2],mac[3],mac[4],mac[5]);\n'+
  '    }\n'+
  '  }\n'+
  '}\n';


  Blockly.Arduino.codeFunctions_['cyber_replyWhoAreYouIfNeeded'] = ''+
  'void replyWhoAreYouIfNeeded(const IPAddress& srcIP, uint16_t srcPort, const String& msg) {\n'+
  '  if (msg == "WHOAREYOU?") {\n'+
  '    uint8_t myMac[6];\n'+
  '    esp_wifi_get_mac(WIFI_IF_STA, myMac);\n'+
  '    char macBuf[24];\n'+
  '    sprintf(macBuf, "%02X:%02X:%02X:%02X:%02X:%02X",\n'+
  '            myMac[0],myMac[1],myMac[2],myMac[3],myMac[4],myMac[5]);\n'+
  '    String resp = String("IAM;MAC=") + macBuf;\n'+
  '    WiFiUDP u; u.begin(0);\n'+
  '    u.beginPacket(srcIP, srcPort);\n'+
  '    u.print(resp);\n'+
  '    u.endPacket();\n'+
  '  }\n'+
  '}\n';


  // Trouve l'adresse MAC associée à une IP
  // Active/désactive la demande applicative si MAC inconnue
  Blockly.Arduino.codeFunctions_['cyber_getMacDestinataireDepuisARP'] = ''+
  'bool getMacDestinataireDepuisARP(const IPAddress& ipDst, uint8_t outMac[6],\n'+
  '                                unsigned long timeoutMs = 500) {\n'+
  ' if (arpCacheGet(ipDst, outMac)) return true;  // cache appli\n'+

  ' // Envoie la sonde WHOAREYOU? sur DISC_PORT\n'+
  ' udpDisc.beginPacket(ipDst, DISC_PORT);\n'+
  ' udpDisc.print("WHOAREYOU?");\n'+
  ' udpDisc.endPacket();\n'+

  ' // Attente brève d’un IAM;MAC= venant de ipDst (sur DISC_PORT)\n'+
  ' unsigned long t0 = millis();\n'+
  ' while (millis() - t0 < timeoutMs) {\n'+
  '   int ps = udpDisc.parsePacket();\n'+
  '   if (ps > 0) {\n'+
  '     IPAddress rip = udpDisc.remoteIP();\n'+
  '     uint16_t rport = udpDisc.remotePort();\n'+
  '     char buf[256]; int n = udpDisc.read(buf, sizeof(buf)-1);\n'+
  '     if (n > 0) {\n'+
  '       buf[n] = 0;\n'+
  '       String msg = String(buf); msg.trim();\n'+

  '       // filtre strict : bonne IP + bon format\n'+
  '       if (rip == ipDst && msg.startsWith("IAM;MAC=")) {\n'+
  '         learnPeerMacFromAppMsg(rip, msg);\n'+
  '         if (arpCacheGet(ipDst, outMac)) return true;\n'+
  '       }\n'+
  '     }\n'+
  '   }\n'+
  '   // On laisse aussi le répondeur tourner (mais il a son propre socket)\n'+
  '   // Pas de delay(…) bloquant ici.\n'+
  ' }\n'+

  ' return arpCacheGet(ipDst, outMac);\n'+
  '}\n';






  //======================== Aides hexdump / Wireshark ==================
  // Blockly.Arduino.codeFunctions_['cyber_bytesToHex'] = ''+
  // 'static String bytesToHex(const uint8_t* p, size_t n) {\n'+
  // '  String out; out.reserve(n*3);\n'+
  // '  for (size_t i=0;i<n;i++){ char b[8]; snprintf(b, sizeof(b), "%02X ", p[i]); out += b; }\n'+
  // '  return out;\n'+
  // '}\n';

  Blockly.Arduino.codeFunctions_['cyber_appendHexAsciiLine'] = ''+
  'static void appendHexAsciiLine(String& out, const uint8_t* p, size_t offset, size_t len) {\n'+
  '  char hdr[16]; snprintf(hdr, sizeof(hdr), "%04X: ", (unsigned)offset); out += hdr;\n'+
  '  const size_t perLine = 16;\n'+
  '  for (size_t j = 0; j < perLine; j++) {\n'+
  '    char b[8];\n'+
  '    if (j < len) { snprintf(b, sizeof(b), "%02X ", p[j]); out += b; }\n'+
  '    else out += "   ";\n'+
  '  }\n'+
  '  out += " | ";\n'+
  '  for (size_t j = 0; j < perLine; j++) {\n'+
  '    if (j < len) { char c = (char)p[j]; out += (c >= 32 && c <= 126) ? c : \'.\'; }\n'+
  '  }\n'+
  '  out += "\\n";\n'+
  '}\n';

  // --- Checksum IPv4 header (20 octets) ---
  Blockly.Arduino.codeFunctions_['cyber_ipHeaderChecksum'] = ''+
  'static uint16_t ipHeaderChecksum(const uint8_t *hdr, size_t len) {\n'+
  '  uint32_t sum = 0;\n'+
  '  for (size_t i = 0; i < len; i += 2) {\n'+
  '    uint16_t w = ((uint16_t)hdr[i] << 8) | hdr[i+1];\n'+
  '    sum += w; if (sum & 0x10000) { sum = (sum & 0xFFFF) + 1; }\n'+
  '  }\n'+
  '  return ~((uint16_t)sum);\n'+
  '}\n';


  // À appeler juste avant/after udpApp.endPacket() quand j'envoie un message
  Blockly.Arduino.codeFunctions_['cyber_recordLastTx'] = ''+
  'void recordLastTx(const IPAddress& dst, uint16_t dstPort, const String& msg) {\n'+
  '  g_lastTx.valid = true;\n'+
  '  g_lastTx.ip_src = WiFi.localIP();   // source = IP locale\n'+
  '  g_lastTx.ip_dst = dst;              // dest passée en paramètre\n'+
  '  g_lastTx.port_src = UDP_PORT;         // on réutilise le même socket UDP\n'+
  '  g_lastTx.port_dst = dstPort;\n'+
  '  g_lastTx.payload = msg;\n'+
  '  g_lastTx.payload_len = msg.length();\n'+
  '}\n';



  // --- Construit LLC + IPv4 + UDP + payload dans out[] ---
  //  Retourne la taille écrite (0 si erreur). UDP checksum = 0 (ok en IPv4).
  Blockly.Arduino.codeFunctions_['cyber_buildLLC_IP_UDP'] = ''+
  'static size_t buildLLC_IP_UDP(const IPAddress& ip_src, const IPAddress& ip_dst,\n'+
  '                              uint16_t port_src, uint16_t port_dst,\n'+
  '                              const uint8_t* payload, size_t payload_len,\n'+
  '                              uint8_t* out, size_t outMax) {\n'+
  '  const uint8_t llc[8] = {0xAA,0xAA,0x03,0x00,0x00,0x00, 0x08,0x00}; // EtherType IPv4\n'+
  '  const uint16_t udpLen = 8 + (uint16_t)payload_len;\n'+
  '  const uint16_t ipTot  = 20 + udpLen;\n'+
  '  if (outMax < 8 + 20 + 8 + payload_len) return 0;\n'+

  '  size_t p = 0;\n'+
  '  // LLC\n'+
  '  memcpy(out+p, llc, 8); p += 8;\n'+

  '  // IPv4 header (IHL=5)\n'+
  '  uint8_t ip[20] = {0};\n'+
  '  ip[0] = 0x45;          // Version=4, IHL=5\n'+
  '  ip[1] = 0x00;          // DSCP/ECN\n'+
  '  ip[2] = (uint8_t)(ipTot >> 8);\n'+
  '  ip[3] = (uint8_t)(ipTot & 0xFF);\n'+
  '  ip[4] = 0x00; ip[5] = 0x00;       // Identification\n'+
  '  ip[6] = 0x00; ip[7] = 0x00;       // Flags/Fragment offset\n'+
  '  ip[8] = 64;                       // TTL\n'+
  '  ip[9] = 17;                       // Protocol = UDP\n'+
  '  // ip[10..11] checksum (à calculer après)\n'+
  '  ip[12] = ip_src[0]; ip[13] = ip_src[1]; ip[14] = ip_src[2]; ip[15] = ip_src[3];\n'+
  '  ip[16] = ip_dst[0]; ip[17] = ip_dst[1]; ip[18] = ip_dst[2]; ip[19] = ip_dst[3];\n'+
  '  uint16_t csum = ipHeaderChecksum(ip, 20);\n'+
  '  ip[10] = (uint8_t)(csum >> 8);\n'+
  '  ip[11] = (uint8_t)(csum & 0xFF);\n'+

  '  memcpy(out+p, ip, 20); p += 20;\n'+

  '  // UDP header\n'+
  '  uint8_t udp[8];\n'+
  '  udp[0] = (uint8_t)(port_src >> 8);\n'+
  '  udp[1] = (uint8_t)(port_src & 0xFF);\n'+
  '  udp[2] = (uint8_t)(port_dst >> 8);\n'+
  '  udp[3] = (uint8_t)(port_dst & 0xFF);\n'+
  '  udp[4] = (uint8_t)(udpLen >> 8);\n'+
  '  udp[5] = (uint8_t)(udpLen & 0xFF);\n'+
  '  udp[6] = 0x00; udp[7] = 0x00;     // checksum UDP = 0 (valide en IPv4)\n'+

  '  memcpy(out+p, udp, 8); p += 8;\n'+

  '  // Payload\n'+
  '  if (payload_len) {\n'+
  '    memcpy(out+p, payload, payload_len);\n'+
  '    p += payload_len;\n'+
  '  }\n'+
  '  return p; // = 8 + 20 + 8 + payload_len\n'+
  '}\n';


  // Construit une trame 802.11 DATA complète :
  // [ MAC 24o ] + [ LLC 8o | IPv4 20o | UDP 8o | payload ] + [ FCS 4o (0x00000000) ]
  // - uplink=true  : STA -> AP    (ToDS=1, FromDS=0)  A1=BSSID  A2=STA_src  A3=STA_dst
  // - uplink=false : AP  -> STA   (ToDS=0, FromDS=1)  A1=STA_dst A2=BSSID   A3=STA_src
  // Retourne la taille écrite (0 si erreur).
  Blockly.Arduino.codeFunctions_['cyber_build80211Frame'] = ''+
  'size_t build80211Frame(bool uplink,\n'+
  '                      const uint8_t mac_src[6],   // MAC de l’initiateur (STA source)\n'+
  '                      const uint8_t mac_dst[6],   // MAC du destinataire final (STA dest)\n'+
  '                      const uint8_t bssid[6],     // MAC de l’AP (BSSID)\n'+
  '                      const IPAddress& ip_src, const IPAddress& ip_dst,\n'+
  '                      uint16_t port_src, uint16_t port_dst,\n'+
  '                      const uint8_t* payload, size_t payload_len,\n'+
  '                      uint8_t* outBuf, size_t outMax) {\n'+
  '  if (!outBuf) return 0;\n'+

  '  // 1) Construire la partie logique LLC+IP+UDP+payload\n'+
  '  static uint8_t logical[8 + 20 + 8 + 1500]; // assez grand pour la démo\n'+
  '  size_t logicalLen = buildLLC_IP_UDP(ip_src, ip_dst, port_src, port_dst,\n'+
  '                                      payload, payload_len,\n'+
  '                                      logical, sizeof(logical));\n'+
  '  if (logicalLen == 0) return 0;\n'+

  '  // 2) Longueur en-tête MAC sans QoS/A4 = 24 octets\n'+
  '  const size_t macHdrLen = 24;\n'+
  '  // + FCS (4) à la fin\n'+
  '  const size_t need = macHdrLen + logicalLen + 4;\n'+
  '  if (outMax < need) return 0;\n'+

  '  size_t p = 0;\n'+

  '  // --- Frame Control (Data) ---\n'+
  '  // type=2 (Data) → bits 2..3 = 2\n'+
  '  // subtype=0 (Data) → bits 4..7 = 0\n'+
  '  // ToDS/FromDS selon sens\n'+
  '  uint16_t fc = 0;\n'+
  ' fc |= (2 << 2);\n'+
  '  if (uplink) fc |= (1 << 8);   // ToDS=1\n'+
  '  else        fc |= (1 << 9);   // FromDS=1\n'+
  '  // Pas de Protected, pas de QoS ici (pédago simple)\n'+

  '  // Duration/ID (fictif)\n'+
  '  uint16_t duration = 0x013A;   // exemple\n'+

  '  // A1/A2/A3\n'+
  '  const uint8_t* A1 = nullptr;\n'+
  '  const uint8_t* A2 = nullptr;\n'+
  '  const uint8_t* A3 = nullptr;\n'+
  '  if (uplink) {          // STA -> AP\n'+
  '    A1 = bssid;\n'+
  '    A2 = mac_src;\n'+
  '    A3 = mac_dst;\n'+
  '  } else {               // AP -> STA\n'+
  '    A1 = mac_dst;\n'+
  '    A2 = bssid;\n'+
  '    A3 = mac_src;\n'+
  '  }\n'+

  '  // Sequence Control (fictif)\n'+
  '  static uint16_t seq = 0x4F20; // valeur de départ\n'+
  '  uint16_t seq_ctrl = seq++;\n'+
    
  '  // --- Écrire l’en-tête MAC (24 o) ---\n'+
  '  outBuf[p++] = (uint8_t)(fc & 0xFF);\n'+
  '  outBuf[p++] = (uint8_t)((fc >> 8) & 0xFF);\n'+

  '  outBuf[p++] = (uint8_t)(duration & 0xFF);\n'+
  '  outBuf[p++] = (uint8_t)((duration >> 8) & 0xFF);\n'+

  '  memcpy(outBuf+p, A1, 6); p += 6;\n'+
  '  memcpy(outBuf+p, A2, 6); p += 6;\n'+
  '  memcpy(outBuf+p, A3, 6); p += 6;\n'+

  '  outBuf[p++] = (uint8_t)(seq_ctrl & 0xFF);\n'+
  '  outBuf[p++] = (uint8_t)((seq_ctrl >> 8) & 0xFF);\n'+

  '  // --- Concaténer le Frame Body ---\n'+
  '  memcpy(outBuf+p, logical, logicalLen);\n'+
  '  p += logicalLen;\n'+

  '  // --- FCS fictif (4 octets à 0) ---\n'+
  '  outBuf[p++] = 0x00;\n'+
  '  outBuf[p++] = 0x00;\n'+
  '  outBuf[p++] = 0x00;\n'+
  '  outBuf[p++] = 0x00;\n'+

  '  return p; // taille totale écrite\n'+
  '}\n';


  Blockly.Arduino.codeFunctions_['cyber_hexDumpToStr'] = ''+
  'String hexDumpToStr(const uint8_t* p, int len) {\n'+
  '  const int perLine = 16;\n'+
  '  String out;\n'+
  '  out.reserve(len * 4); // réserve de la mémoire pour limiter les reallocations\n'+

  '  for (int i = 0; i < len; i += perLine) {\n'+
  '    char buf[16];\n'+

  '    // Offset (ex: "0000: ")\n'+
  '    sprintf(buf, "%04X: ", i);\n'+
  '    out += buf;\n'+

  '    // Hexa\n'+
  '    for (int j = 0; j < perLine; j++) {\n'+
  '      if (i + j < len) {\n'+
  '        sprintf(buf, "%02X ", p[i + j]);\n'+
  '        out += buf;\n'+
  '      } else {\n'+
  '        out += "   ";\n'+
  '      }\n'+
  '    }\n'+

  '    out += " | ";\n'+

  '    // ASCII\n'+
  '    for (int j = 0; j < perLine; j++) {\n'+
  '      if (i + j < len) {\n'+
  '        char c = (char)p[i + j];\n'+
  '        out += (c >= 32 && c <= 126) ? c : \'.\';\n'+
  '      }\n'+
  '    }\n'+

  '    out += "\\n";\n'+
  '  }\n'+

  '  return out;\n'+
  '}\n';



  // Retourne la trame ENVOYÉE au format "wireshark" (par défaut) ou "hex"
  Blockly.Arduino.codeFunctions_['cyber_afficherTrameEnvoyee'] = ''+
  'void afficherTrameEnvoyee(IPAddress ipDst, const char* msg){\n'+
  '  // Adresses connues/apprises\n'+
  '  uint8_t macSrc[6]; // MAC de cette carte (STA)\n'+
  '  esp_wifi_get_mac(WIFI_IF_STA, macSrc);\n'+

  '  wifi_ap_record_t apinfo;\n'+
  '  uint8_t bssid[6] = {0};\n'+
  '  if (esp_wifi_sta_get_ap_info(&apinfo) == ESP_OK) memcpy(bssid, apinfo.bssid, 6);\n'+

  '  // IP/ports/payload\n'+
  //'  IPAddress ipDst; ipDst.fromString("192.168.139.125");\n'+
  '  IPAddress ipSrc = WiFi.localIP();\n'+
  '  uint16_t portSrc = UDP_PORT;\n'+
  '  uint16_t portDst = UDP_PORT;\n'+
  //'  const char* msg  = "CHIFFREMENT";\n'+
  '  const uint8_t* py = (const uint8_t*)msg;\n'+
  '  size_t pyLen = strlen(msg);\n'+

  '  // 1) Obtenir la MAC destinataire (depuis cache ARP appli, cf. fct déjà codée)\n'+
  '  uint8_t macDst[6];\n'+
  '  if (!getMacDestinataireDepuisARP(ipDst, macDst)) {\n'+
  '    // Serial.println("\\n[WARN] MAC destinataire (ESP B) inconnue. Impossible d’annoter A3.");\n'+
  '    // A3 sera macDst non rempli\n'+
  '  }\n'+

  '  // debug : afficher ce qui va être passé en A3\n'+
  '  // Serial.printf("[DBG] A3 (MAC_B) = %02X:%02X:%02X:%02X:%02X:%02X\\n", macDst[0], macDst[1], macDst[2], macDst[3], macDst[4], macDst[5]);\n'+
  '  \n'+

  '  // 2) Construire la trame 802.11 pédagogique (uplink STA->AP)\n'+
  '  static uint8_t fullFrame[24 + 8 + 20 + 8 + 1500 + 4];\n'+
  '  size_t fullLen = build80211Frame(/*uplink=*/true,\n'+
  '                                  macSrc, macDst, bssid,\n'+
  '                                  ipSrc, ipDst,\n'+
  '                                  portSrc, portDst,\n'+
  '                                  py, pyLen,\n'+
  '                                  fullFrame, sizeof(fullFrame));\n'+

  '  \n'+
  '  // Vérification post-construction : relire A1/A2/A3\n'+
  '  const uint8_t* hdr = fullFrame;          // début trame\n'+
  '  const uint8_t* A1  = hdr + 4;            // 2(F.Ctrl)+2(Duration) = 4\n'+
  '  const uint8_t* A2  = hdr + 10;           // 4 + 6\n'+
  '  const uint8_t* A3  = hdr + 16;           // 10 + 6\n'+

  '  auto macStr = [](const uint8_t m[6])->String{\n'+
  '  char s[18]; sprintf(s,"%02X:%02X:%02X:%02X:%02X:%02X",m[0],m[1],m[2],m[3],m[4],m[5]); return String(s);\n'+
  '};\n'+

  '//Serial.printf("[CHK] A1(BSSID)=%s\\n[CHK]  A2(src)=%s\\n[CHK]  A3(dst)=%s\\n",  macStr(A1).c_str(), macStr(A2).c_str(), macStr(A3).c_str());\n'+


  '  \n'+



  '  if (fullLen == 0) {\n'+
  '    Serial.println("[ERR] build80211Frame a échoué.");\n'+
  '  } else {\n'+
  '    Serial.println("[TRAME WiFi (802.11) ENVOYEE]");\n'+
  '    // Affichage style Wireshark (réutilise ta fonction existante)\n'+
  '    String pretty = hexDumpToStr(fullFrame, fullLen);\n'+
  '    Serial.println(pretty);\n'+
  '  }\n'+
  '}\n';


  


  //======================== Connexion Wi-Fi (mode NORMAL) =============
  Blockly.Arduino.codeFunctions_['cyber_scanAndPrint'] = '// Scan informatif (affiche SSID, RSSI, canal, sécurité)\n'+
  'void scanAndPrint() {\n'+
  '  Serial.println("[SCAN] Recherche des réseaux (y compris SSID masqués)...");\n'+
  '  int n = WiFi.scanNetworks(false, true);\n'+
  '  if (n <= 0) { Serial.println("[SCAN] Aucun réseau trouvé.\\n"); return; }\n'+
  '  for (int i = 0; i < n; ++i) {\n'+
  '    String ssid = WiFi.SSID(i);\n'+
  '    String bssid = WiFi.BSSIDstr(i); // BSSID en string (AA:BB:..)\n'+
  '    int ch = WiFi.channel(i);\n'+
  '    int rssi = WiFi.RSSI(i);\n'+
  '    Serial.printf("%2d) SSID=\'%s\' BSSID=%s ch=%d RSSI=%d\\n", i, ssid.c_str(), bssid.c_str(), ch, rssi, (WiFi.encryptionType(i) == WIFI_AUTH_OPEN) ? "OUVERT" : "PROTEGE");\n'+
  '  }\n'+
  '  Serial.println();\n'+
  '}\n';


  /**
   * connectAsStation(...)
   *  - Se connecte en STA (avec IP statique si fournie, sinon DHCP)
   *  - Récupère canal & BSSID
   *  - Ouvre l’UDP en écoute sur UDP_PORT
   */
  Blockly.Arduino.codeFunctions_['cyber_connectAsStation'] = ''+
  'bool connectAsStation(const char* ssid, const char* pwd, int udpPort, int discPort, int* primaryChannel,\n'+
  '                  const IPAddress* staticIP = nullptr,\n'+
  '                  const IPAddress* gateway  = nullptr,\n'+
  '                  const IPAddress* subnet   = nullptr,\n'+
  '                  const IPAddress* dns1     = nullptr) {\n'+
  '  Serial.println("[WiFi] Connexion en mode STATION...");\n'+
  '  WiFi.persistent(false);\n'+
  '  WiFi.mode(WIFI_STA);\n'+
  '  WiFi.setSleep(false);\n'+

  '  // IP statique ou DHCP\n'+
  '  if (staticIP) {\n'+
  '    IPAddress gw_ = gateway ? *gateway : IPAddress((*staticIP)[0], (*staticIP)[1], (*staticIP)[2], 1);\n'+
  '    IPAddress sn_ = subnet  ? *subnet  : IPAddress(255,255,255,0);\n'+
  '    IPAddress dn_ = dns1    ? *dns1    : gw_;\n'+
  '    if (!WiFi.config(*staticIP, gw_, sn_, dn_)) {\n'+
  '      Serial.println("[WiFi] ERREUR: WiFi.config (IP statique) a échoué.");\n'+
  '    } else {\n'+
  '      // Serial.printf("[WiFi] IP statique: %s  GW=%s  MASK=%s  DNS=%s\\n",\n'+
  '      //  staticIP->toString().c_str(), gw_.toString().c_str(),\n'+
  '      //  sn_.toString().c_str(), dn_.toString().c_str());\n'+
  '    }\n'+
  '  } else {\n'+
  '    // Serial.println("[WiFi] DHCP (IP automatique).");\n'+
  '  }\n'+

  '  // scanAndPrint();\n'+

  '  const int MAX_TRIES = 3;\n'+
  '  const unsigned long CONNECT_TIMEOUT_MS = 20000;\n'+
  '  bool ok = false;\n'+
  '  for (int attempt = 1; attempt <= MAX_TRIES && !ok; ++attempt) {\n'+
  '    Serial.printf("[WiFi] Tentative %d/%d vers SSID=\'%s\'\\n", attempt, MAX_TRIES, ssid);\n'+
  '    WiFi.disconnect(true);\n'+
  '    delay(200);\n'+
  '    WiFi.begin(ssid, pwd);\n'+
  '    unsigned long t0 = millis();\n'+
  '    while (WiFi.status() != WL_CONNECTED && (millis() - t0) < CONNECT_TIMEOUT_MS) {\n'+
  '      delay(300); Serial.print(".");\n'+
  '    }\n'+
  '    Serial.println();\n'+
  '    if (WiFi.status() == WL_CONNECTED) { ok = true; break; }\n'+
  '    else Serial.println("[WiFi] Timeout de connexion, nouvelle tentative...");\n'+
  '  }\n'+
  '  if (!ok) { Serial.println("[WiFi] Échec de connexion."); return false; }\n'+

  '  IPAddress ip = WiFi.localIP();\n'+

  '  // Serial.printf("[WiFi] Connecté. IP=%s  RSSI=%d dBm  ch=%d\\n",\n'+
  '  //              ip.toString().c_str(), WiFi.RSSI(), WiFi.channel());\n'+

  '  // Canal + BSSID AP\n'+
  '  if (primaryChannel) {\n'+
  '    wifi_ap_record_t apinfo;\n'+
  '    if (esp_wifi_sta_get_ap_info(&apinfo) == ESP_OK) {\n'+
  '      *primaryChannel = apinfo.primary;\n'+
  '      memcpy(g_myBSSID, apinfo.bssid, 6);\n'+
  '      // Serial.printf("[WiFi] Canal AP : %d  BSSID=%s\\n", *primaryChannel, macToStr6(g_myBSSID).c_str());\n'+
  '    }\n'+
  '  }\n'+

  '  Serial.printf("\\n[WiFi] Connect\xC3\xA9 au Point d\'acc\xC3\xA8s Wi-Fi (PAW) : \'%s\'\\n", ssid);\n'+
  '  Serial.printf("[WiFi] Adresse MAC du Point d\'acc\xC3\xA8s Wi-Fi : %s\\n", macToStr6(g_myBSSID).c_str());\n'+
  '  Serial.printf("[WiFi] Canal Wi-Fi utilis\xC3\xA9 : %d\\n\\n", WiFi.channel());\n'+

  '  // UDP écoute\n'+
  '  udpApp.stop();\n'+
  '  if (udpApp.begin(udpPort) && udpDisc.begin(discPort)) {\n'+
  '    // Serial.printf("[UDP APP] Ecoute sur port %d\\n", udpPort);\n'+
  '    // Serial.printf("[UDP DISC] Ecoute sur port %d\\n", discPort);\n'+
  '  }\n'+
  '  else Serial.println("[UDP] Echec ouverture port UDP !");\n'+

  '  return true;\n'+
  ' }\n';


  //======================== MODE NORMAL – construction & affichage =====
  /**
  * BUT : construire une “vue Wireshark” depuis les infos de g_lastNormal
  * On reconstruit LLC+IP+UDP+payload en binaire, puis on formate en hexdump.
  */ 
  // Blockly.Arduino.codeFunctions_['cyber_buildBytesFromLogical'] = ''+
  // 'static size_t buildBytesFromLogical(uint8_t* outBuf, size_t outMax, const TrameWiFi& f) {\n'+
  // '  if (!outBuf || outMax < (8+20+8)) return 0;\n'+

  // '  // LLC/SNAP (EtherType IPv4)\n'+
  // '  const uint8_t llc[8] = {0xAA,0xAA,0x03,0x00,0x00,0x00, 0x08,0x00};\n'+

  // '  // IP v4 (IHL=5 → 20 octets)\n'+
  // '  const uint16_t udpLen   = 8 + (uint16_t)f.payload_len;\n'+
  // '  const uint16_t ipTotLen = 20 + udpLen;\n'+

  // '  uint8_t ip[20] = {0};\n'+
  // '  ip[0] = 0x45; ip[1] = 0x00;\n'+
  // '  ip[2] = (uint8_t)(ipTotLen >> 8); ip[3] = (uint8_t)(ipTotLen & 0xFF);\n'+
  // '  ip[4] = 0x00; ip[5] = 0x00; ip[6] = 0x00; ip[7] = 0x00;\n'+
  // '  ip[8] = 64;   ip[9] = 17; // UDP\n'+
  // '  ip[12] = f.ip_src[0]; ip[13] = f.ip_src[1];\n'+
  // '  ip[14] = f.ip_src[2]; ip[15] = f.ip_src[3];\n'+
  // '  ip[16] = f.ip_dst[0]; ip[17] = f.ip_dst[1];\n'+
  // '  ip[18] = f.ip_dst[2]; ip[19] = f.ip_dst[3];\n'+
  // '  uint16_t csum = ipHeaderChecksum(ip, sizeof(ip));\n'+
  // '  ip[10] = (uint8_t)(csum >> 8); ip[11] = (uint8_t)(csum & 0xFF);\n'+

  // '  // UDP\n'+
  // '  uint8_t udpH[8];\n'+
  // '  udpH[0] = (uint8_t)(f.port_src >> 8);\n'+
  // '  udpH[1] = (uint8_t)(f.port_src & 0xFF);\n'+
  // '  udpH[2] = (uint8_t)(f.port_dst >> 8);\n'+
  // '  udpH[3] = (uint8_t)(f.port_dst & 0xFF);\n'+
  // '  udpH[4] = (uint8_t)(udpLen >> 8);\n'+
  // '  udpH[5] = (uint8_t)(udpLen & 0xFF);\n'+
  // '  udpH[6] = 0x00; udpH[7] = 0x00;\n'+

  // '  const size_t need = 8 + 20 + 8 + f.payload_len;\n'+
  // '  if (need > outMax) return 0;\n'+

  // '  size_t k = 0;\n'+
  // '  memcpy(outBuf + k, llc, sizeof(llc)); k += sizeof(llc);\n'+
  // '  memcpy(outBuf + k, ip,  sizeof(ip));  k += sizeof(ip);\n'+
  // '  memcpy(outBuf + k, udpH,sizeof(udpH)); k += sizeof(udpH);\n'+
  // '  if (f.payload_len > 0) {\n'+
  // '    memcpy(outBuf + k, f.payload_ascii.c_str(), f.payload_len);\n'+
  // '    k += f.payload_len;\n'+
  // '  }\n'+
  // '  return k;\n'+
  // '}\n';

  /** Construit *la chaîne* Wireshark-like pour le mode NORMAL */
  Blockly.Arduino.codeFunctions_['cyber_makeWirFromNormal'] = ''+
  'String makeWirFromNormal() {\n'+
  '  if (g_lastRxLen == 0) return String();\n'+
  '  wirTrame = hexDumpToStr(g_lastRx80211, (int)g_lastRxLen);\n'+
  '  return wirTrame;\n'+
  '}\n';

  

  /** Construit *la chaîne* Résumé pédagogique pour le mode NORMAL */
  Blockly.Arduino.codeFunctions_['cyber_makeSummaryFromNormal'] = ''+
  // '  // Petits helpers locaux\n'+
  // 'static String macToStr2(const uint8_t m[6]) {\n'+
  // '  char s[18];\n'+
  // '  sprintf(s, "%02X:%02X:%02X:%02X:%02X:%02X", m[0],m[1],m[2],m[3],m[4],m[5]);\n'+
  // '  return String(s);\n'+
  // '}\n';

  'String makeSummaryFromNormal() {\n'+
  '  if (g_lastRxLen < 24) return String();\n'+

  '  const uint8_t* f = g_lastRx80211;\n'+
  '  // En-tête 802.11 (24 octets sans QoS/A4)\n'+
  '  uint16_t fc        = (uint16_t)f[0] | ((uint16_t)f[1] << 8);\n'+
  '  const uint8_t* A1  = f + 4;   // dest imm (STA locale)\n'+
  '  const uint8_t* A2  = f + 10;  // source imm (BSSID)\n'+
  '  const uint8_t* A3  = f + 16;  // STA source initiale\n'+

  '  String out;\n'+
  '  out.reserve(256);\n'+

  '  // Ligne 1 : entête 802.11\n'+
  //'  out += "[SUM] 802.11 ";\n'+
  //'  out += "len=" + String((unsigned)g_lastRxLen);\n'+
  '  out += "FC=0x"; { char tmp[8]; sprintf(tmp,"%04X", fc); out += tmp; }\n'+
  '  out += "\\n";\n'+
  '  out += "A1(dest) = " + macToStr6(A1) + "\\n";\n'+
  '  out += "A2(src) = "  + macToStr6(A2) + "\\n";\n'+
  '  out += "A3(ctx) = "  + macToStr6(A3) + "\\n";\n'+

  '  // Indice ToDS/FromDS depuis FC\n'+
  '  bool toDS   = (fc & (1<<8)) != 0;\n'+
  '  bool fromDS = (fc & (1<<9)) != 0;\n'+
  '  if (!toDS && fromDS) out += "Direction: [AP] -> [STA]\\n";\n'+
  '  else if (toDS && !fromDS) out += "Direction: [STA] -> [AP]\\n";\n'+
  '  else out += "Direction: autre (ad-hoc/WDS)\\n";\n'+

  '  // On peut refaire un court résumé IP/UDP depuis g_lastNormal déjà remplie\n'+
  '  out += "IPv4 : ";\n'+
  '  out += g_lastNormal.ip_src.toString();\n'+
  '  out += " -> ";\n'+
  '  out += g_lastNormal.ip_dst.toString();\n'+
  '  out += "\\n";\n'+

  '  out += "Ports : ";\n'+
  '  out += String(g_lastNormal.port_src);\n'+
  '  out += " -> ";\n'+
  '  out += String(g_lastNormal.port_dst);\n'+
  '  out += "\\n";\n'+
  //'  out += "\\nTaille du message = " + String((unsigned)g_lastNormal.payload_len) + " octet(s)\\n";\n'+

  '  // Aperçu message ASCII (imprimables)\n'+
  '  out += "Message = \\"";\n'+
  
  '  for (size_t i=0;i<g_lastNormal.payload_len;i++){\n'+
  '    char c = (char)g_lastNormal.payload[i];\n'+
  '    out += (c>=32 && c<=126)? c : \'.\';\n'+
  '  }\n'+
  '  out += "\\"\\n";\n'+
  '  sumTrame = out;\n' +
  '  return out;\n'+
  '}\n';



  //======================== Affichage commun (les 2 modes) ============
  /** Affiche proprement selon VIEW_MODE (commune NORMAL/ESPION) */
  Blockly.Arduino.codeFunctions_['cyber_printNormalFrameString'] = ''+
  'void printNormalFrameString(const String& s) {\n'+
  '  if (s.length()==0) return;\n'+
  '  if (VIEW_MODE == WIRESHARK_VIEW) {\n'+
  '    Serial.println("[TRAME WiFi (802.11) RECUE]");\n'+
  '    Serial.print(s);\n'+
  '    Serial.println("============================================================================");\n'+
  '  } else {\n'+
  '    Serial.println("[EXTRAITS DE LA TRAME WiFi (802.11) RECUE]");\n'+
  '    Serial.print(s);\n'+
  '    Serial.println("============================================================================");\n'+
  '  }\n'+
  '}\n';

  Blockly.Arduino.codeFunctions_['cyber_printSnifferFrameString'] = ''+
  'void printSnifferFrameString(const String& s) {\n'+
  '  if (s.length()==0) return;\n'+
  '  if (VIEW_MODE == WIRESHARK_VIEW) {\n'+
  //'    Serial.println("[TRAME WiFi (802.11) ESPIONNEE]");\n'+
  '    Serial.print(s);\n'+
  //'    Serial.println("============================================================================");\n'+
  '  } else {\n'+
  //'    Serial.println("[EXTRAITS DE LA TRAME WiFi (802.11) ESPIONNEE]");\n'+
  '    Serial.print(s);\n'+
  //'    Serial.println("==================================================");\n'+
  '  }\n'+
  '}\n';



  //======================== MODE NORMAL – Réception UDP ================
  /**
   * readNormalAndBuild()
   *  1) Lit un paquet UDP
   *  2) Remplit g_lastNormal (MAC conceptuelles + IP/UDP/payload)
   *  3) Construit la chaîne d’affichage selon VIEW_MODE
   */
  Blockly.Arduino.codeFunctions_['cyber_udpPacketAvailable'] = ''+
  'int udpPacketAvailable() { return udpApp.parsePacket(); }\n';

  Blockly.Arduino.codeFunctions_['cyber_readNormalAndBuild'] = ''+
  'String readNormalAndBuild(const String& format) {\n'+
  '  char buf[512];\n'+
  '  int n = udpApp.read(buf, sizeof(buf)-1);\n'+
  '  if (n <= 0) return String();\n'+
  '  buf[n] = 0;\n'+
  '  String msg = String(buf);\n'+

  '  // --- L3+payload  ---\n'+
  '  memset(&g_lastNormal, 0, sizeof(g_lastNormal));\n'+
  '  g_lastNormal.valid       = true;\n'+
  '  g_lastNormal.ts_ms       = millis();\n'+
  '  g_lastNormal.hasIPv4     = true;\n'+
  '  g_lastNormal.hasUDP      = true;\n'+
  '  g_lastNormal.ip_src      = udpApp.remoteIP();\n'+
  '  g_lastNormal.port_src    = udpApp.remotePort();\n'+
  '  g_lastNormal.ip_dst      = ipFixe;               // IP locale\n'+
  '  g_lastNormal.port_dst    = UDP_PORT;\n'+
  '  g_lastNormal.udp_len     = (uint16_t)(8 + n);\n'+
  '  g_lastNormal.payload_len = (size_t)n;\n'+
  '  if (g_lastNormal.payload_len > MAX_TRAME_PAYLOAD) g_lastNormal.payload_len = MAX_TRAME_PAYLOAD;\n'+
  '  memcpy(g_lastNormal.payload, (const uint8_t*)buf, g_lastNormal.payload_len);\n'+
  '  // ASCII "lisible"\n'+
  '  g_lastNormal.payload_ascii.reserve(g_lastNormal.payload_len);\n'+
  '  g_lastNormal.payload_ascii = "";\n'+
  '  for (size_t i=0;i<g_lastNormal.payload_len;i++) {\n'+
  '    char c = (char)g_lastNormal.payload[i];\n'+
  '    g_lastNormal.payload_ascii += (c>=32 && c<=126)? c : \'.\';\n'+
  '  }\n'+

  '  // --- Apprentissage pairs et WHOAREYOU si besoin ---\n'+
  '  learnPeerMacFromAppMsg(g_lastNormal.ip_src, msg);\n'+
  '  replyWhoAreYouIfNeeded(g_lastNormal.ip_src, g_lastNormal.port_src, msg);\n'+

  '  // --- Préparation des MAC pour la reconstruction 802.11 DOWNLINK ---\n'+
  '  uint8_t myMac[6]; esp_wifi_get_mac(WIFI_IF_STA, myMac);\n'+
  '  wifi_ap_record_t ap; uint8_t myBssid[6] = {0};\n'+
  '  if (esp_wifi_sta_get_ap_info(&ap) == ESP_OK) memcpy(myBssid, ap.bssid, 6);\n'+

  '  uint8_t srcStaMac[6] = {0,0,0,0,0,0};\n'+
  '  if (!arpCacheGet(g_lastNormal.ip_src, srcStaMac)) {\n'+
  '    // Option : WHOAREYOU ciblé \n'+
  '    getMacDestinataireDepuisARP(g_lastNormal.ip_src, srcStaMac, 400);\n'+
  '  }\n'+

  '  // --- Renseigner L2 dans g_lastNormal pour les getters ---\n'+
  '  // DOWNLINK: A1 = moi (dest), A2 = BSSID (AP), A3 = STA source initiale\n'+
  '  memcpy(g_lastNormal.mac_dst, myMac,    6);      // A1\n'+
  '  memcpy(g_lastNormal.bssid,   myBssid,  6);      // BSSID\n'+
  '  // Pour donner une info de MAC source cohérente côté getters :\n'+
  '  if (srcStaMac[0]|srcStaMac[1]|srcStaMac[2]|srcStaMac[3]|srcStaMac[4]|srcStaMac[5]) {\n'+
  '    memcpy(g_lastNormal.mac_src, srcStaMac, 6);   // A3 si connue\n'+
  '  } else {\n'+
  '    memcpy(g_lastNormal.mac_src, myBssid, 6);     // à défaut, AP\n'+
  '  }\n'+
  '  g_lastNormal.isData      = true;\n'+
  '  g_lastNormal.isProtected = false;  // on reconstruit depuis IP/UDP clair\n'+
  '  g_lastNormal.isDown      = true;\n'+
  '  g_lastNormal.isUp        = false;\n'+

  '  // --- Construction 802.11 pour affichage (ton code existant) ---\n'+
  '  g_lastRxLen = build80211Frame(\n'+
  '                  /*uplink=*/false,\n'+
  '                  /*mac_src STA initiale*/ srcStaMac,\n'+
  '                  /*mac_dst STA locale*/   myMac,\n'+
  '                  /*BSSID*/                myBssid,\n'+
  '                  g_lastNormal.ip_src, g_lastNormal.ip_dst,\n'+
  '                  g_lastNormal.port_src, g_lastNormal.port_dst,\n'+
  '                  g_lastNormal.payload, g_lastNormal.payload_len,\n'+
  '                  g_lastRx80211, sizeof(g_lastRx80211)\n'+
  '              );\n'+
  '  if (g_lastRxLen == 0) return String();\n'+

  '  // --- Affichage au format demandé ---\n'+
  '  if (format == "WIRESHARK") return makeWirFromNormal();\n'+
  '  else return makeSummaryFromNormal();\n'+
  '}\n';


  //Service discovery “toujours actif”
  Blockly.Arduino.codeFunctions_['cyber_serviceDiscoveryAlwaysOn'] = ''+
  'void serviceDiscoveryAlwaysOn() {\n'+
   ' int ps = udpDisc.parsePacket();\n'+
  '  if (ps <= 0) return;\n'+

  '  IPAddress rip = udpDisc.remoteIP();\n'+
  '  uint16_t rport = udpDisc.remotePort();\n'+

  '  char buf[256];\n'+
  '  int n = udpDisc.read(buf, sizeof(buf)-1);\n'+
  '  if (n <= 0) return;\n'+
  '  buf[n] = 0;\n'+
  '  String msg = String(buf); msg.trim();\n'+

  '  // 1) Si on reçoit WHOAREYOU? → on répond TOUJOURS\n'+
  '  if (msg == "WHOAREYOU?") {\n'+
  '    uint8_t myMac[6]; esp_wifi_get_mac(WIFI_IF_STA, myMac);\n'+
  '    String resp = "IAM;MAC=" + macToStr6(myMac);\n'+
  '    udpDisc.beginPacket(rip, rport);\n'+
  '    udpDisc.print(resp);\n'+
  '    udpDisc.endPacket();\n'+
  '    // (optionnel) log\n'+
  '    // Serial.printf("[DISC] WHOAREYOU? de %s -> repond %s\\n", rip.toString().c_str(), resp.c_str());\n'+
  '    return;\n'+
  '  }\n'+

  '  // 2) Si on reçoit IAM;MAC=... → on apprend (facilite la reconstruction)\n'+
  '  if (msg.startsWith("IAM;MAC=")) {\n'+
  '    learnPeerMacFromAppMsg(rip, msg); // remplit ta cache IP->MAC\n'+
  '    return;\n'+
  '  }\n'+

  //'  // (autres messages sur DISC_PORT : ignorer)\n'+
  '}\n';



  var code_Setup;
  code_Setup =  '' +
      '// Ouverture de la console Série sur 115200 bauds \n'+
      '  Serial.begin(115200);\n'+
      '  delay(500);\n\n'+
      '// Connexion Wi-Fi (STA) \n'+
      '  int primaryCh = 1;\n'+


      // ===============================
      // Choisir UNE des 3 façons de se connecter :
      // ===============================

      // ---- Cas 1 : DHCP ----
      // int primaryCh = 1;
      // if (!connectAsStation(SSID, PASSWORD, UDP_PORT, &primaryCh)) return;
      // apPrimaryChannel = primaryCh;

      // ---- Cas 2 : IP statique (gateway= x.x.x.1, masque /24, DNS=gateway) ----
      // int primaryCh = 1;
      // IPAddress ipFixe(192,168,139,127);             // IP souhaitée pour CETTE carte
      // if (!connectAsStation(SSID, PASSWORD, UDP_PORT, &primaryCh, &ipFixe)) return;
      // apPrimaryChannel = primaryCh;

      // ---- Cas 3 : IP statique complète (IP / Masque / Gateway / DNS) ----



      '  ipFixe.fromString("'+ip+'");\n'+
      '  mask.fromString("'+mask+'");\n'+
      //'  gw.fromString("'+gw+'");\n'+
      '  dns.fromString("8.8.8.8");\n'+
      '  SSID = '+ssid+';\n'+
      '  PASSWORD = "";\n'+
  
      '// Connexion NORMAL (STA + UDP)\n'+
      
      'while (!connectAsStation(SSID, PASSWORD, UDP_PORT, DISC_PORT,  &primaryCh, &ipFixe, &gw, &mask, &dns)) {\n'+
      '  Serial.println("[WiFi] Nouvelle tentative dans 5 s."); delay(5000);\n'+
      '}\n'+
      'isConnected = true;\n'+
      'apPrimaryChannel = primaryCh;\n'+

      '// Infos utiles au démarrage\n'+

      '  uint8_t m[6]; esp_wifi_get_mac(WIFI_IF_STA, m);\n'+
      '  Serial.printf("[STATION] Adresse MAC de cette Station = %02X:%02X:%02X:%02X:%02X:%02X\\n\\n\\n", m[0],m[1],m[2],m[3],m[4],m[5]);\n'+

      //'printStaMacOnce("Cette carte ESP est une ");\n'+
      '// setFilterDestMacFromText("AC:67:B2:38:82:54"); // Filtre dest = MAC de C (si USE_FILTER_STA_DEST=true)\n';
      

  Blockly.Arduino.setups_['setup_esp32_config_station'] = code_Setup;


  var code_Loop;
  code_Loop =  'serviceDiscoveryAlwaysOn();  // <-- répond toujours pour la construction de ARP local, indépendamment du reste\n';
   Blockly.Arduino.setups_["put_this_line_in_loop"]['setup_esp32_config_station'] = code_Loop;
  
  var code =  '';
  return code;
};



Blockly.Arduino.driss_d1r32_esp32_is_connected = function() { 
  
  code = '';
  code += 'isConnected';
  return [code, Blockly.Arduino.ORDER_NONE];
};



Blockly.Arduino.driss_d1r32_esp32_set_promiscuous_mode_during_time = function() { 
  //Memoriser le mode
  //Blockly.Arduino._driss_memory.mode = "PROMISCUOUS";

  Blockly.Arduino.variables_['define_SLOTS'] = "#define SLOTS  2 // double buffer pour ISR sniffer";

  // Option : trier les flux par nombre décroissant
  Blockly.Arduino.variables_['define_FLOW_SORT_BY_COUNT'] = ''+
  '#ifndef FLOW_SORT_BY_COUNT\n'+
  '#define FLOW_SORT_BY_COUNT 1\n'+
  '#endif\n';


  
  //======================== Filtres pédagogiques (ESPION) =============
  Blockly.Arduino.variables_['var_SHOW_ONLY_MY_BSSID'] = "bool SHOW_ONLY_MY_BSSID  = true;  // garder seulement les trames de mon AP";
  Blockly.Arduino.variables_['var_ONLY_AP_TO_STA'] = "bool ONLY_AP_TO_STA = false;  // ne garder que AP -> STA (downlink)";
  Blockly.Arduino.variables_['var_USE_FILTER_STA_DEST'] = "bool USE_FILTER_STA_DEST = false; // si true : ne garder que AP -> MAC_FILTER";

  // Buffers ISR (volatile !)
  Blockly.Arduino.variables_['var_g_rawBufs'] = "volatile uint8_t g_rawBufs[SLOTS][MAX_CAPTURE];";
  Blockly.Arduino.variables_['var_g_rawLens'] = "volatile uint16_t g_rawLens[SLOTS];";
  Blockly.Arduino.variables_['var_g_slotFull'] = "volatile bool g_slotFull[SLOTS] = {false,false};";
  Blockly.Arduino.variables_['var_g_wr'] = "volatile uint8_t g_wr = 0;";
  Blockly.Arduino.variables_['var_g_rd'] = "volatile uint8_t g_rd = 0;";
  
  // métriques radio par slot
  Blockly.Arduino.variables_['var_g_slotRSSI'] = "volatile int8_t g_slotRSSI[SLOTS];";
  Blockly.Arduino.variables_['var_g_slotRate'] = "volatile uint8_t g_slotRate[SLOTS];";
  // Copie côté tâche
  Blockly.Arduino.variables_['var_s_lastRawCopy'] = "static uint8_t s_lastRawCopy[MAX_CAPTURE];";
  Blockly.Arduino.variables_['var_s_lastRawLen'] = "static int s_lastRawLen = 0;";
  Blockly.Arduino.variables_['var_s_lastRSSI'] = "static int8_t s_lastRSSI = 0;";
  Blockly.Arduino.variables_['var_s_lastRate'] = "static uint8_t s_lastRate = 0;";
  // Compteurs/Stats
  Blockly.Arduino.variables_['var_CNT_RX_TOTAL_CNT_DATA_CNT_UP_CNT_DOWN'] = "volatile uint32_t CNT_RX_TOTAL=0, CNT_DATA=0, CNT_UP=0, CNT_DOWN=0;";
  Blockly.Arduino.variables_['var_CNT_PROTECTED_CNT_NOT_MY_BSS_CNT_ONLY_AP2STA_DROP'] = "volatile uint32_t CNT_PROTECTED=0, CNT_NOT_MY_BSS=0, CNT_ONLY_AP2STA_DROP=0;";
  //Blockly.Arduino.variables_['var_CNT_DOWN_TO_A_CNT_DOWN_TO_B_CNT_DOWN_TO_C'] = "volatile uint32_t CNT_DOWN_TO_A=0, CNT_DOWN_TO_B=0, CNT_DOWN_TO_C=0;";
  Blockly.Arduino.variables_['var_CNT_DOWN_UNICAST_CNT_DOWN_BCAST'] = "volatile uint32_t CNT_DOWN_UNICAST=0, CNT_DOWN_BCAST=0;";
  Blockly.Arduino.variables_['var_DestCount'] = "struct DestCount { uint8_t mac[6]; uint32_t n; };";
  Blockly.Arduino.variables_['var_g_downDests'] = "DestCount g_downDests[16];";
  Blockly.Arduino.variables_['var_g_downUsed'] = "int g_downUsed = 0;";
  // Histogrammes radio
  Blockly.Arduino.variables_['var_H_rate'] = "uint32_t H_rate[256] = {0};";
  Blockly.Arduino.variables_['var_RSSI_min_RSSI_max'] = "int RSSI_min = 127, RSSI_max = -127;";

  Blockly.Arduino.variables_['define_HARD_FILTER_DATA_ONLY'] = "bool HARD_FILTER_DATA_ONLY = true; // à mettre true si tu veux vraiment DATA only";
  


  // ===== Affichage/tri des flux MAC→MAC =====

  

  // ================== Agrégateur de flux MAC→MAC ==================
  Blockly.Arduino.variables_['var_FlowCount'] = ''+
  'struct FlowCount {\n'+
  '  uint8_t   src[6];\n'+
  '  uint8_t   dst[6];\n'+
  '  uint32_t  n;\n'+
  '  // méta (optionnelles)\n'+
  '  bool      src_is_ap;\n'+
  '  bool      dst_is_ap;\n'+
  '  bool      has_ip_src;\n'+
  '  bool      has_ip_dst;\n'+
  '  IPAddress ip_src;   // si IPv4 connue (p.ex. dans les trames data non protégées)\n'+
  '  IPAddress ip_dst;\n'+
  '};\n';

  Blockly.Arduino.variables_['var_MAX_FLOWS'] = 'static const int MAX_FLOWS = 64; // suffisant a mon avis pour l\'utilisation en classe';
  Blockly.Arduino.variables_['var_g_flows'] = 'FlowCount g_flows[MAX_FLOWS];';
  Blockly.Arduino.variables_['var_g_flowUsed'] = 'int g_flowUsed = 0;';
  
  



  Blockly.Arduino.codeFunctions_['cyber_isGroup'] ='static inline bool isGroup(const uint8_t* mac){ return (mac && (mac[0] & 0x01)); }';
  
  Blockly.Arduino.codeFunctions_['cyber_resetDownDests'] ='void resetDownDests() { g_downUsed = 0; }';

   Blockly.Arduino.codeFunctions_['cyber_macEq'] =''+
  'static bool macEq(const uint8_t* a, const uint8_t* b) {\n'+
  '  for (int i=0;i<6;i++) if (a[i]!=b[i]) return false; return true;\n'+
  '}\n';
  //Helpers pour l’agrégateur
  // Compare 6 octets
  Blockly.Arduino.codeFunctions_['cyber_macEq6'] =''+
  'static bool macEq6(const uint8_t a[6], const uint8_t b[6]) {\n'+
  '  for (int i=0;i<6;i++) if (a[i]!=b[i]) return false;\n'+
  '  return true;\n'+
  '}\n';

  Blockly.Arduino.codeFunctions_['cyber_macCopy6'] =''+
  'static void macCopy6(uint8_t dst[6], const uint8_t src[6]) {\n'+
  '  for (int i=0;i<6;i++) dst[i]=src[i];\n'+
  '}\n';

  // Cherche un flux existant (src,dst). Retourne l’index ou -1.
  Blockly.Arduino.codeFunctions_['cyber_findFlow'] =''+
  'static int findFlow(const uint8_t src[6], const uint8_t dst[6]) {\n'+
  '  for (int i=0;i<g_flowUsed;i++) {\n'+
  '    if (macEq6(g_flows[i].src, src) && macEq6(g_flows[i].dst, dst)) return i;\n'+
  '  }\n'+
  '  return -1;\n'+
  '}\n';

  // Ajoute/incrémente un flux. Optionnellement, renseigne IP et “AP”.
  Blockly.Arduino.codeFunctions_['cyber_addFlowCount'] =''+
  'static void addFlowCount(const uint8_t src[6], const uint8_t dst[6],\n'+
  '                        bool src_is_ap, bool dst_is_ap,\n'+
  '                        bool has_ip_src, const IPAddress& ip_src,\n'+
  '                        bool has_ip_dst, const IPAddress& ip_dst) {\n'+
  '  int idx = findFlow(src, dst);\n'+
  '  if (idx < 0) {\n'+
  '    if (g_flowUsed >= MAX_FLOWS) return; // pas de place → on ignore\n'+
  '    idx = g_flowUsed++;\n'+
  '    memset(&g_flows[idx], 0, sizeof(FlowCount));\n'+
  '    macCopy6(g_flows[idx].src, src);\n'+
  '    macCopy6(g_flows[idx].dst, dst);\n'+
  '  }\n'+
  '  g_flows[idx].n++;\n'+

  '  // Marqueurs : si on sait que c’est l’AP, on conserve l’info\n'+
  '  g_flows[idx].src_is_ap = g_flows[idx].src_is_ap || src_is_ap;\n'+
  '  g_flows[idx].dst_is_ap = g_flows[idx].dst_is_ap || dst_is_ap;\n'+

  '  // Enregistre IP si on l’a (et si non renseignée auparavant)\n'+
  '  if (has_ip_src && !g_flows[idx].has_ip_src) {\n'+
  '    g_flows[idx].ip_src = ip_src; g_flows[idx].has_ip_src = true;\n'+
  '  }\n'+
  '  if (has_ip_dst && !g_flows[idx].has_ip_dst) {\n'+
  '    g_flows[idx].ip_dst = ip_dst; g_flows[idx].has_ip_dst = true;\n'+
  '  }\n'+
  '}\n';



  
  Blockly.Arduino.codeFunctions_['cyber_incDownDest'] =''+
  'void incDownDest(const uint8_t* mac) {\n'+
  '  if (!mac) return;\n'+
  '  for (int i=0;i<g_downUsed;i++){\n'+
  '    bool eq = true;\n'+
  '    for (int k=0;k<6;k++) if (g_downDests[i].mac[k]!=mac[k]) { eq=false; break; }\n'+
  '    if (eq) { g_downDests[i].n++; return; }\n'+
  '  }\n'+
  '  if (g_downUsed < 16) {\n'+
  '    memcpy(g_downDests[g_downUsed].mac, mac, 6);\n'+
  '    g_downDests[g_downUsed].n = 1;\n'+
  '    g_downUsed++;\n'+
  '  }\n'+
  '}\n';

  // ---------- ISR de capture (PROMISCUOUS) ----------
  Blockly.Arduino.codeFunctions_['cyber_sniffer_cb'] =''+
  'static void IRAM_ATTR sniffer_cb(void* buf, wifi_promiscuous_pkt_type_t type) {\n'+
  '  if (type != WIFI_PKT_DATA) return;\n'+
  '  const wifi_promiscuous_pkt_t* ppkt = (wifi_promiscuous_pkt_t*)buf;\n'+
  '  int len = ppkt->rx_ctrl.sig_len;\n'+
  '  if (len <= 0) return;\n'+
  '  if (len > MAX_CAPTURE) len = MAX_CAPTURE;\n'+

  '  uint8_t w = g_wr;\n'+
  '  if (g_slotFull[w]) { w = (w + 1) % SLOTS; g_wr = w; } // écrase la plus ancienne si pleine\n'+

  '  memcpy((void*)g_rawBufs[w], ppkt->payload, len);\n'+
  '  g_rawLens[w]  = len;\n'+
  '  g_slotRSSI[w] = ppkt->rx_ctrl.rssi; // RSSI dB\n'+
  '  g_slotRate[w] = ppkt->rx_ctrl.rate; // code PHY\n'+
  '  g_slotFull[w] = true;\n'+
  '  g_wr = (w + 1) % SLOTS;\n'+
  '}\n';

  Blockly.Arduino.codeFunctions_['cyber_sniffSlotReady'] ='bool sniffSlotReady() { uint8_t r = g_rd; return g_slotFull[r]; }';
  
  
  // version « orchestrateur » compacte.
  // - Compte RX total AVANT filtres
  // - Applique les filtres (BSSID, ONLY_AP_TO_STA, mgmt si tu veux)
  // - Compte DATA/UP/DOWN APRÈS filtres
  // - Met à jour l’agrégateur de flux APRÈS filtres
  
  Blockly.Arduino.codeFunctions_['cyber_readNextSniffSlot'] =''+
  'bool processNextSniffFrame() {\n'+
  '  // 1) sortir un slot du ring\n'+
  '  uint8_t r = g_rd;\n'+
  '  if (!g_slotFull[r]) return false;\n'+

  '  noInterrupts();\n'+
  '  int len = g_rawLens[r]; if (len > MAX_CAPTURE) len = MAX_CAPTURE;\n'+
  '  memcpy(s_lastRawCopy, (const void*)g_rawBufs[r], len);\n'+
  '  s_lastRawLen = len;\n'+
  '  s_lastRSSI = g_slotRSSI[r];\n'+
  '  s_lastRate = g_slotRate[r];\n'+
  '  g_slotFull[r] = false;\n'+
  '  g_rd = (r + 1) % SLOTS;\n'+
  '  interrupts();\n'+

    // 2) RX total : toujours incrémenté
  '  CNT_RX_TOTAL++;\n'+

  '  // 3) parse « brut » -> g_lastSniff (PAS de filtre, PAS de compte ici)\n'+
  '  if (!parseAndFillLastSniffFrom80211()) {\n'+
  '    return true; // trame trop courte/illisible, on l’a quand même "vue"\n'+
  '  }\n'+

  '  // 4) Filtres pédagogiques\n'+
  '  const uint8_t* A1 = g_lastSniff.mac_dst;   // dest immédiate\n'+
  '  const uint8_t* A2 = g_lastSniff.mac_src;   // source immédiate\n'+
  '  const uint8_t* A3 = g_lastSniff.bssid;     // contexte/BSSID\n'+

  '  // 4.a) Filtre "uniquement mon BSSID"\n'+
  '  if (SHOW_ONLY_MY_BSSID) {\n'+
  '    bool keep = false;\n'+
  '    if (A1 && macEq(A1, g_myBSSID)) keep = true;\n'+
  '    if (A2 && macEq(A2, g_myBSSID)) keep = true;\n'+
  '    if (A3 && macEq(A3, g_myBSSID)) keep = true;\n'+
  '    if (!keep) { CNT_NOT_MY_BSS++; return true; } // on jette mais RX total a été compté\n'+
  '  }\n'+

  '  // 4.b) Option : ne garder que AP -> STA\n'+
  '  if (ONLY_AP_TO_STA && !g_lastSniff.isDown) {\n'+
  '    CNT_ONLY_AP2STA_DROP++;\n'+
  '    return true;\n'+
  '  }\n'+

  '  // (optionnel) Filtre management (si tu veux vraiment les exclure)\n'+
  '  // if (!g_lastSniff.isData) { CNT_MGMT_DROP++; return true; }\n'+

  '  // 5) Compteurs « nets » (après filtre)\n'+
  '  if (g_lastSniff.isData) {\n'+
  '    CNT_DATA++;\n'+
  '    if (g_lastSniff.isUp)   CNT_UP++;\n'+
  '    if (g_lastSniff.isDown) {\n'+
  '      CNT_DOWN++;\n'+
  '      // unicast/broadcast\n'+
  '      if (A1 && (A1[0] & 0x01)) CNT_DOWN_BCAST++;\n'+
  '      else  CNT_DOWN_UNICAST++;\n'+
  '    }\n'+
  '  }\n'+

  '  // 6) Agrégateur de flux MAC→MAC (après filtre)\n'+
  '  bool src_is_ap = (A2 && macEq(A2, g_myBSSID));\n'+
  '  bool dst_is_ap = (A1 && macEq(A1, g_myBSSID));\n'+
  '  addFlowCount(\n'+
  '    A2, A1,\n'+
  '    src_is_ap, dst_is_ap,\n'+
  '    g_lastSniff.hasIPv4, g_lastSniff.ip_src,\n'+
  '    g_lastSniff.hasIPv4, g_lastSniff.ip_dst\n'+
  '  );\n'+

  // '  // 7) Chaîne d’affichage (selon VIEW_MODE)\n'+
  // '  if (VIEW_MODE == WIRESHARK_VIEW) {\n'+
  // '    // Titre + hexdump\n'+
  // '    String out;\n'+
  // '    out.reserve(64 + s_lastRawLen * 4);\n'+
  // '    out += "[ TRAME WiFi (802.11) ESPIONNEE ] : Direction = ";\n'+
  // '    if (g_lastSniff.isDown) out += "[AP] --> [STA]\\n\\n";\n'+
  // '    else if (g_lastSniff.isUp) out += "[STA] --> [AP]\\n\\n";\n'+
  // '    else out += "(autre)\\n\\n";\n'+
  // '    const size_t perLine = 16;\n'+
  // '    for (size_t off = 0; off < (size_t)s_lastRawLen; off += perLine) {\n'+
  // '      size_t chunk = ((size_t)s_lastRawLen - off > perLine) ? perLine : ((size_t)s_lastRawLen - off);\n'+
  // '      appendHexAsciiLine(out, s_lastRawCopy + off, off, chunk);\n'+
  // '    }\n'+
  // '    wirTrame = out;\n'+
  // '  } else {\n'+
  // '    // Résumé\n'+
  // '    sumTrame = makeSummaryFromSniffer(); // ta fonction renvoie et remplit sumTrame\n'+
  // '  }\n'+

  '  return true;\n'+
  '}\n';


  // ---------- Helpers 802.11 ----------
  Blockly.Arduino.codeFunctions_['cyber_fc_is_data'] ='static inline bool fc_is_data(uint16_t fc) { return ((fc >> 2) & 0x3) == 2; }';
  Blockly.Arduino.codeFunctions_['cyber_fc_tods'] ='static inline bool fc_tods(uint16_t fc) { return (fc & (1<<8)); }';
  Blockly.Arduino.codeFunctions_['cyber_fc_fromds'] ='static inline bool fc_fromds(uint16_t fc) { return (fc & (1<<9)); }';
  Blockly.Arduino.codeFunctions_['cyber_fc_protected'] ='static inline bool fc_protected(uint16_t fc) { return (fc & (1<<14)); }';
  Blockly.Arduino.codeFunctions_['cyber_fc_qos'] ='static inline bool fc_qos(uint16_t fc) { return (((fc >> 4) & 0xF) >= 8); }';
  
  Blockly.Arduino.codeFunctions_['cyber_macHeaderLenFromFC'] =''+
  'static int macHeaderLenFromFC(uint16_t fc) {\n'+
  '  int len = 24;\n'+
  '  if (fc_tods(fc) && fc_fromds(fc)) len += 6; // Addr4\n'+
  '  if (fc_is_data(fc) && fc_qos(fc)) len += 2; // QoS Ctrl\n'+
  '  return len;\n'+
  '}\n';



  Blockly.Arduino.codeFunctions_['cyber_setFilterDestMacFromText'] =''+
  'void setFilterDestMacFromText(const char* macText){\n'+
  '  if (parseMacString(macText, MAC_FILTER)) { //parseMac ici driss\n'+
  '    Serial.print("[FILTER] Dest = "); Serial.println(macToStr6(MAC_FILTER));\n'+
  '  } else {\n'+
  '    Serial.printf("[FILTER] MAC invalide: %s → filtre désactivé\\n", macText);\n'+
  '    USE_FILTER_STA_DEST = false;\n'+
  '  }\n'+
  '}\n';


  

  

  /** ESPION : retourne la chaîne à afficher selon VIEW_MODE */
  // Blockly.Arduino.codeFunctions_['cyber_makeDisplayFromSniffer'] =''+
  // 'String makeDisplayFromSniffer() {\n'+
  // '  if (VIEW_MODE == WIRESHARK_VIEW) return makeWirFromSniffer();\n'+
  // '  else return makeSummaryFromSniffer();\n'+
  // '}\n';


  //======================== Stats de fin d’espionnage ==================
  Blockly.Arduino.codeFunctions_['cyber_resetSniffStats'] =''+
  'void resetSniffStats() {\n'+
  '  CNT_RX_TOTAL = CNT_DATA = CNT_UP = CNT_DOWN = CNT_PROTECTED = CNT_NOT_MY_BSS = CNT_ONLY_AP2STA_DROP = 0;\n'+
  //'  CNT_DOWN_TO_A = CNT_DOWN_TO_B = CNT_DOWN_TO_C = 0;\n'+
  '  CNT_DOWN_UNICAST = CNT_DOWN_BCAST = 0;\n'+
  '  for (int i=0;i<256;i++) H_rate[i]=0;\n'+
  '  RSSI_min = 127; RSSI_max = -127;\n'+
  '  resetDownDests();\n'+


  '  // reset des flows\n'+
  '  for (int i=0;i<MAX_FLOWS;i++) memset(&g_flows[i], 0, sizeof(g_flows[i]));\n'+
  '  g_flowUsed = 0;\n'+
    
  '}\n';

  Blockly.Arduino.codeFunctions_['cyber_labelMacRole'] =''+
  // Construit un label joli : "AA:BB:... (AP)" ou "AA:BB:... (192.168.x.y)"
  'static String labelMacRole(const uint8_t mac[6], bool is_ap, bool has_ip, const IPAddress& ip) {\n'+
  '  String s = macToStr6(mac);\n'+
  '  if (is_ap) {\n'+
  '    s += " (AP)";\n'+
  '  } else if (has_ip) {\n'+
  '    s += " ("; s += ip.toString(); s += ")";\n'+
  '  }\n'+
  '  return s;\n'+
  '}\n';

  // Impression des stats + tableau des flux
  Blockly.Arduino.codeFunctions_['cyber_printSniffStats'] =''+
  'void printSniffStats() {\n'+
  '  Serial.println("[STATISTIQUES DE LA PHASE D\'ESPIONNAGE]");\n'+
  '  Serial.printf("RX total: %u\\n", CNT_RX_TOTAL);\n'+
  '  Serial.printf("DATA: %u  UP(Sta->AP): %u  DOWN(AP->Sta): %u\\n", CNT_DATA, CNT_UP, CNT_DOWN);\n'+
  '  Serial.printf("Protected: %u  NotMyBSS(filtered): %u  OnlyAP2STA(dropped): %u\\n",\n'+
  '                CNT_PROTECTED, CNT_NOT_MY_BSS, CNT_ONLY_AP2STA_DROP);\n'+
  '  Serial.printf("DOWN unicast: %u  DOWN bcast/mcast: %u\\n", CNT_DOWN_UNICAST, CNT_DOWN_BCAST);\n'+

  '  Serial.println();\n'+
  '  Serial.println("=== Flux observés (MAC src → MAC dst) ===");\n'+

  '  if (g_flowUsed == 0) {\n'+
  '    Serial.println("(aucun flux)");\n'+
  '    Serial.println("================================");\n'+
  '    return;\n'+
  '  }\n'+

  '  // On prépare un petit index pour trier sans bouger g_flows\n'+
  '  int idx[ MAX_FLOWS ];\n'+
  '  for (int i=0;i<g_flowUsed;i++) idx[i] = i;\n'+

  '#if FLOW_SORT_BY_COUNT\n'+
  '  // Tri à bulles (simple, lisible) par n décroissant\n'+
  '  bool swapped;\n'+
  '  do {\n'+
  '    swapped = false;\n'+
  '    for (int i=0;i<g_flowUsed-1;i++) {\n'+
  '      int a = idx[i], b = idx[i+1];\n'+
  '      if (g_flows[a].n < g_flows[b].n) {\n'+
  '        int tmp = idx[i]; idx[i] = idx[i+1]; idx[i+1] = tmp;\n'+
  '        swapped = true;\n'+
  '      }\n'+
  '    }\n'+
  '  } while (swapped);\n'+
  '#endif\n'+

  '  // Affichage\n'+
  '  for (int k=0; k<g_flowUsed; k++) {\n'+
  '    const FlowCount& f = g_flows[ idx[k] ];\n'+

  '    String Lsrc = labelMacRole(f.src, f.src_is_ap, f.has_ip_src, f.ip_src);\n'+
  '    String Ldst = labelMacRole(f.dst, f.dst_is_ap, f.has_ip_dst, f.ip_dst);\n'+

  '    Serial.print(Lsrc);\n'+
  '    Serial.print("  --->  ");\n'+
  '    Serial.print(Ldst);\n'+
  '    Serial.print(" : ");\n'+
  '    Serial.println(f.n);\n'+
  '  }\n'+

  '  Serial.println("================================");\n'+
  '}\n';



  Blockly.Arduino.codeFunctions_['cyber_printDownDests'] =''+
  'void printDownDests() {\n'+
  '  Serial.println("\\n=== Destinataires AP→STA observés ===");\n'+
  '  if (g_downUsed==0) { Serial.println("(aucun)"); return; }\n'+
  '  for (int i=0;i<g_downUsed;i++) {\n'+
  '    Serial.printf("  %s : %u trames\\n", macToStr6(g_downDests[i].mac).c_str(), g_downDests[i].n);\n'+
  '  }\n'+
  '}\n';

  Blockly.Arduino.codeFunctions_['cyber_printRadioStats'] =''+
  'void printRadioStats() {\n'+
  '  Serial.printf("\\nRadio: RSSI min/max = %ddB / %ddB\\n", RSSI_min, RSSI_max);\n'+
  '  Serial.println("Rate codes vus (non nuls) :");\n'+
  '  bool any=false;\n'+
  '  for (int i=0;i<256;i++) if (H_rate[i]) { any=true; Serial.printf("  code %d : %u trames\\n", i, H_rate[i]); }\n'+
  '  if (!any) Serial.println("(aucun)");\n'+
  '  Serial.println();\n'+
  '}\n';



  //======================== Contrôle du Sniffer ========================
  /** Lance l’ESPION en se calant sur le canal de l’AP courant */
  Blockly.Arduino.codeFunctions_['cyber_startSnifferAutoChannel'] =''+
  'void startSnifferAutoChannel() {\n'+
  '  // relire canal + BSSID juste avant d’espionner\n'+
  '  wifi_ap_record_t apinfo;\n'+
  '  if (esp_wifi_sta_get_ap_info(&apinfo) == ESP_OK) {\n'+
  '    apPrimaryChannel = apinfo.primary;\n'+
  '    memcpy(g_myBSSID, apinfo.bssid, 6);\n'+
  '  }\n'+
  '  resetSniffStats();\n'+


  'wifi_promiscuous_filter_t f = {\n'+
  '  .filter_mask = HARD_FILTER_DATA_ONLY\n'+
  '    ? WIFI_PROMIS_FILTER_MASK_DATA\n'+
  '    : WIFI_PROMIS_FILTER_MASK_ALL\n'+
  '};\n'+


  '  esp_wifi_set_promiscuous(false);\n'+
  '  esp_wifi_set_promiscuous_filter(&f);\n'+
  '  esp_wifi_set_promiscuous_rx_cb(&sniffer_cb);\n'+
  '  esp_wifi_set_promiscuous(true);\n'+

  '  esp_wifi_set_channel(apPrimaryChannel, WIFI_SECOND_CHAN_NONE);\n'+
  '  uint8_t ch; wifi_second_chan_t sc; esp_wifi_get_channel(&ch, &sc);\n'+
  '  Serial.println("============================================================================") ;\n'+
  '  Serial.println(">>> [ESPIONNAGE] >>>") ;\n'+
  '  //Serial.printf(">>> [ESPIONNAGE] - canal espion\xC3\xA9=%d, canal actuel=%d\\n", apPrimaryChannel, ch);\n'+
  '  Serial.println("============================================================================") ;\n'+
  
  '}\n';

  /** Arrête l’ESPION et relance simplement l’UDP d’écoute (on reste associé) */
  Blockly.Arduino.codeFunctions_['cyber_stopSnifferAndResume'] =''+
  'void stopSnifferAndResume() {\n'+
  '  esp_wifi_set_promiscuous(false);\n'+
  '  //Serial.println(">>> ESPION OFF — Bascule en mode NORMAL");\n'+
  '  udpApp.stop();\n'+
  '  if (udpApp.begin(UDP_PORT)) {\n'+
  '    // Serial.printf("[UDP] Écoute sur port %d\\n", UDP_PORT);\n'+
  '  }\n'+
  '}\n';

  //======================== Utilitaires divers ========================
  Blockly.Arduino.codeFunctions_['cyber_serialReadString'] ='String serialReadString() { String s = Serial.readStringUntil(\'\\n\'); s.trim(); return s; }';


  // Cherche LLC/SNAP dans les ~1ères dizaines d’octets (gère Data/QoS/Addr4)
  Blockly.Arduino.codeFunctions_['cyber_findLLC'] =''+
  'static int findLLC(const uint8_t* buf, int len, int start=24, int maxProbe=40) {\n'+
  '  int end = (start + maxProbe < len) ? (start + maxProbe) : len;\n'+
  '  for (int off = start; off + 8 <= end; ++off) {\n'+
  '    if (buf[off+0]==0xAA && buf[off+1]==0xAA && buf[off+2]==0x03 &&\n'+
  '        buf[off+3]==0x00 && buf[off+4]==0x00 && buf[off+5]==0x00) {\n'+
  '      return off;\n'+
  '    }\n'+
  '  }\n'+
  '  return -1;\n'+
  '}\n';

  // Parse la trame brute s_lastRawCopy/s_lastRawLen -> remplit g_lastSniff.
  // Ne filtre PAS, ne compte PAS. Retourne true si au moins l’en-tête 802.11 est cohérent.
  Blockly.Arduino.codeFunctions_['cyber_parseAndFillLastSniffFrom80211'] =''+
  
  'bool parseAndFillLastSniffFrom80211() {\n'+
  '  const uint8_t* buf = s_lastRawCopy;\n'+
  '  int len = s_lastRawLen;\n'+

  '  memset(&g_lastSniff, 0, sizeof(g_lastSniff));\n'+
  '  if (len < 24) return false;\n'+

  '  // FC (little-endian)\n'+
  '  uint16_t fc = (uint16_t)buf[0] | ((uint16_t)buf[1] << 8);\n'+
  '  g_lastSniff.fc = fc;\n'+

  '  // A1/A2/A3 (sans QoS/A4 ici)\n'+
  '  const uint8_t* A1 = buf + 4;    // dest\n'+
  '  const uint8_t* A2 = buf + 10;   // src immédiate\n'+
  '  const uint8_t* A3 = buf + 16;   // BSSID/contexte\n'+
  '  memcpy(g_lastSniff.mac_dst, A1, 6);\n'+
  '  memcpy(g_lastSniff.mac_src, A2, 6);\n'+
  '  memcpy(g_lastSniff.bssid,   A3, 6);\n'+

  '  // Direction / type / flags\n'+
  '  bool toDS   = (fc & (1<<8))  != 0;\n'+
  '  bool fromDS = (fc & (1<<9))  != 0;\n'+
  '  g_lastSniff.isData      = (((fc >> 2) & 0x3) == 2);\n'+
  '  g_lastSniff.isProtected = (fc & (1<<14)) != 0;\n'+
  '  g_lastSniff.isDown      = (fromDS && !toDS); // AP -> STA\n'+
  '  g_lastSniff.isUp        = (!fromDS && toDS); // STA -> AP\n'+

  '  // Remonte les méta radio issues de l’ISR\n'+
  '  g_lastSniff.rssi     = s_lastRSSI;\n'+
  '  g_lastSniff.rateCode = s_lastRate;\n'+

  '  // Tente de trouver un LLC/SNAP puis IPv4/UDP\n'+
  '  auto findLLC = [](const uint8_t* p, int n, int start, int span)->int {\n'+
  '    int end = (start + span < n) ? (start + span) : n;\n'+
  '    for (int off = start; off + 8 <= end; ++off) {\n'+
  '      if (p[off+0]==0xAA && p[off+1]==0xAA && p[off+2]==0x03 &&\n'+
  '          p[off+3]==0x00 && p[off+4]==0x00 && p[off+5]==0x00) {\n'+
  '        return off;\n'+
  '      }\n'+
  '    }\n'+
  '    return -1;\n'+
  '  };\n'+

  '  int offLLC = findLLC(buf, len, /*start*/24, /*span*/40);\n'+
  '  if (offLLC < 0 || offLLC + 8 > len) {\n'+
  '    // mgmt/ctrl ou data protégée ou autre L3 → on s’arrête là\n'+
  '    g_lastSniff.valid   = true;\n'+
  '    g_lastSniff.ts_ms   = millis();\n'+
  '    g_lastSniff.hasIPv4 = false;\n'+
  '    g_lastSniff.hasUDP  = false;\n'+
  '    g_lastSniff.payload_len = 0;\n'+
  '    g_lastSniff.payload_ascii = "";\n'+
  '    return true;\n'+
  '  }\n'+

  '  uint16_t etherType = ((uint16_t)buf[offLLC+6] << 8) | buf[offLLC+7];\n'+
  '  if (etherType != 0x0800) {\n'+
  '    // IPv6/ARP/etc : marquer valide mais sans IPv4/UDP\n'+
  '    g_lastSniff.valid   = true;\n'+
  '    g_lastSniff.ts_ms   = millis();\n'+
  '    g_lastSniff.hasIPv4 = false;\n'+
  '    g_lastSniff.hasUDP  = false;\n'+
  '    g_lastSniff.payload_len = 0;\n'+
  '    g_lastSniff.payload_ascii = "";\n'+
  '    return true;\n'+
  '  }\n'+

  '  // IPv4\n'+
  '  int offIP = offLLC + 8;\n'+
  '  if (offIP + 20 > len) return false;\n'+
  '  const uint8_t* ip = buf + offIP;\n'+
  '  int ihl = (ip[0] & 0x0F) * 4;\n'+
  '  if (ihl < 20 || offIP + ihl > len) return false;\n'+

  '  g_lastSniff.hasIPv4 = true;\n'+
  '  g_lastSniff.ip_src  = IPAddress(ip[12], ip[13], ip[14], ip[15]);\n'+
  '  g_lastSniff.ip_dst  = IPAddress(ip[16], ip[17], ip[18], ip[19]);\n'+

  '  uint8_t proto = ip[9];\n'+
  '  if (proto == 17 /* UDP */) {\n'+
  '    int offUDP = offIP + ihl;\n'+
  '    if (offUDP + 8 > len) return false;\n'+
  '    const uint8_t* udp = buf + offUDP;\n'+
  '    g_lastSniff.hasUDP   = true;\n'+
  '    g_lastSniff.port_src = (udp[0] << 8) | udp[1];\n'+
  '    g_lastSniff.port_dst = (udp[2] << 8) | udp[3];\n'+
  '    g_lastSniff.udp_len  = (udp[4] << 8) | udp[5];\n'+

  '    int payLen = g_lastSniff.udp_len > 8 ? g_lastSniff.udp_len - 8 : 0;\n'+
  '    int maxLen = len - (offUDP + 8);\n'+
  '    if (payLen < 0) payLen = 0;\n'+
  '    if (payLen > maxLen) payLen = maxLen;\n'+
  '    if (payLen > (int)MAX_TRAME_PAYLOAD) payLen = MAX_TRAME_PAYLOAD;\n'+

  '    g_lastSniff.payload_len = (size_t)payLen;\n'+
  '    if (payLen > 0) memcpy(g_lastSniff.payload, udp + 8, payLen);\n'+

  '    g_lastSniff.payload_ascii = "";\n'+
  '    g_lastSniff.payload_ascii.reserve(g_lastSniff.payload_len);\n'+
  '    for (int i=0;i<payLen;i++) {\n'+
  '      char c = (char)g_lastSniff.payload[i];\n'+
  '      g_lastSniff.payload_ascii += (c>=32 && c<=126)? c : \'.\';\n'+
  '    }\n'+
  '  } else {\n'+
  '    // Pas UDP → on conserve IPv4 mais sans L4/payload\n'+
  '    g_lastSniff.hasUDP      = false;\n'+
  '    g_lastSniff.udp_len     = 0;\n'+
  '    g_lastSniff.payload_len = 0;\n'+
  '    g_lastSniff.payload_ascii = "";\n'+
  '  }\n'+

  '  g_lastSniff.valid = true;\n'+
  '  g_lastSniff.ts_ms = millis();\n'+
  '  return true;\n'+
  '}\n';


    
  // ---------- ESPION : construire Résumé (et remplir g_lastSniff) ----
  Blockly.Arduino.codeFunctions_['cyber_makeSummaryFromSniffer'] =''+
  'String makeSummaryFromSniffer() {\n'+
  '  if (s_lastRawLen <= 0) return String();\n'+

  '  // Compteurs généraux & radio\n'+
  '  CNT_RX_TOTAL++;\n'+
  '  if (s_lastRate < 256) H_rate[s_lastRate]++;\n'+
  '  if (s_lastRSSI < RSSI_min) RSSI_min = s_lastRSSI;\n'+
  '  if (s_lastRSSI > RSSI_max) RSSI_max = s_lastRSSI;\n'+

  '  const uint8_t* buf = s_lastRawCopy;\n'+
  '  const int len = s_lastRawLen;\n'+
  '  String out;\n'+

  '  if (len < 24) { out += "[SUM] trame trop courte\\n-------------------\\n"; return out; }\n'+

  '  // ---- Parse en-tête 802.11 (FC, A1/A2/A3) ----\n'+
  '  memset(&g_lastSniff, 0, sizeof(g_lastSniff));\n'+
  '  g_lastSniff.valid    = true;\n'+
  '  g_lastSniff.ts_ms    = millis();\n'+
  '  g_lastSniff.rssi     = s_lastRSSI;\n'+
  '  g_lastSniff.rateCode = s_lastRate;\n'+

  '  uint16_t fc = (uint16_t)buf[0] | ((uint16_t)buf[1] << 8);\n'+
  '  g_lastSniff.fc = fc;\n'+

  '  const uint8_t* A1 = buf + 4;   // Dest immédiate\n'+
  '  const uint8_t* A2 = buf + 10;  // Src immédiate\n'+
  '  const uint8_t* A3 = buf + 16;  // BSSID (contexte)\n'+

  '  memcpy(g_lastSniff.mac_dst, A1, 6);\n'+
  '  memcpy(g_lastSniff.mac_src, A2, 6);\n'+
  '  memcpy(g_lastSniff.bssid,   A3, 6);\n'+

  '  bool toDS   = (fc & (1<<8)) != 0;\n'+
  '  bool fromDS = (fc & (1<<9)) != 0;\n'+

  '  g_lastSniff.isData      = (((fc >> 2) & 0x3) == 2);\n'+
  '  g_lastSniff.isProtected = (fc & (1<<14)) != 0;\n'+
  '  g_lastSniff.isDown      = (!toDS && fromDS); // AP -> STA\n'+
  '  g_lastSniff.isUp        = (toDS && !fromDS); // STA -> AP\n'+

  '  // ---- Filtres pédagogiques ----\n'+
  '  if (SHOW_ONLY_MY_BSSID) {\n'+
  '    bool keep = macEq(A1, g_myBSSID) || macEq(A2, g_myBSSID) || macEq(A3, g_myBSSID);\n'+
  '    if (!keep) { CNT_NOT_MY_BSS++; return String(); }\n'+
  '  }\n'+
  '  if (ONLY_AP_TO_STA && !g_lastSniff.isDown) { CNT_ONLY_AP2STA_DROP++; return String(); }\n'+
  '  if (g_lastSniff.isDown && USE_FILTER_STA_DEST && !macEq(A1, MAC_FILTER)) {\n'+
  '    // On ne compte/affiche que les downlink vers MAC_FILTER\n'+
  '    return String();\n'+
  '  }\n'+

  '  // ---- En-tête demandé ----\n'+
  
  '  out += "[EXTRAITS DE LA TRAME WiFi (802.11) ESPIONNEE]\\n";\n'+
  //'  out += "[SUM] 802.11 len=" + String(len);\n'+
  //'  { char tmp[16]; snprintf(tmp, sizeof(tmp), " FC=0x%04X", fc); out += tmp; }\n'+

  
  '  { char tmp[16]; snprintf(tmp, sizeof(tmp), "FC=0x%04X", fc); out += tmp; }\n'+
  //'  out += tmp;\n'+

  
  '  out += "\\n";\n'+
  '  out += "A1(dest)=" + macToStr6(A1) + "\\n";\n'+
  '  out += "A2(src)="  + macToStr6(A2) + "\\n";\n'+
  '  out += "A3(ctx)="  + macToStr6(A3) + "\\n";\n'+

  '  if (g_lastSniff.isDown) out += "Direction: [AP] -> [STA]\\n";\n'+
  '  else if (g_lastSniff.isUp) out += "Direction: [STA] -> [AP]\\n";\n'+
  '  else out += "Direction: autre (ad-hoc/WDS)\\n";\n'+

  '  // ---- Comptage directions & destinataires ----\n'+
  '  if (g_lastSniff.isUp)   CNT_UP++;\n'+
  '  if (g_lastSniff.isDown) {\n'+
  '    CNT_DOWN++;\n'+
  '    if (isGroup(A1)) CNT_DOWN_BCAST++; else CNT_DOWN_UNICAST++;\n'+
  '    incDownDest(A1);\n'+
  //'    if (macEq(A1, MAC_A))  CNT_DOWN_TO_A++;\n'+
  //'    if (macEq(A1, MAC_B))  CNT_DOWN_TO_B++;\n'+
  //'    if (macEq(A1, MAC_C_)) CNT_DOWN_TO_C++;\n'+
  '  }\n'+

  '  // Flux pour l’agrégateur (source → destination)\n'+
  '  bool src_is_ap = false, dst_is_ap = false;\n'+
  '  uint8_t mac_src_flow[6], mac_dst_flow[6];\n'+
  '  memcpy(mac_src_flow, A2, 6); memcpy(mac_dst_flow, A1, 6);\n'+
  '  // On marque (AP) si égal au BSSID courant\n'+
  '  src_is_ap = macEq(A2, g_myBSSID);\n'+
  '  dst_is_ap = macEq(A1, g_myBSSID);\n'+

  '  // ---- Non-DATA ? On s’arrête ici après avoir compté ----\n'+
  '  if (!g_lastSniff.isData) {\n'+
  '    out += "-------------------\\n";\n'+
  '    sumTrame = out;\n'+
  '    // Ajout du flux même si non-DATA (optionnel, ici on compte tout)\n'+
  '    addFlowCount(mac_src_flow, mac_dst_flow, src_is_ap, dst_is_ap, false, IPAddress(), false, IPAddress());\n'+
  '    return out;\n'+
  '  }\n'+

  '  // ---- DATA protégée ? On ne peut pas décoder L3/L4 ----\n'+
  '  if (g_lastSniff.isProtected) {\n'+
  '    CNT_PROTECTED++;\n'+
  '    out += "  DATA(protected) : contenu chiffré (WPA/OWE/PMF)\\n";\n'+
  '    out += "-------------------\\n";\n'+
  '    sumTrame = out;\n'+
  '    // On enregistre quand même le flux MAC→MAC\n'+
  '    addFlowCount(mac_src_flow, mac_dst_flow, src_is_ap, dst_is_ap, false, IPAddress(), false, IPAddress());\n'+
  '    return out;\n'+
  '  }\n'+

  '  // ---- Chercher LLC/SNAP ----\n'+
  '  // (on tolère QoS/A4 → on part de 24 et on balaie ~40 octets)\n'+
  '  auto findLLC = [](const uint8_t* b, int L)->int{\n'+
  '    int start=24, end = (start+40 < L)? (start+40) : L;\n'+
  '    for (int off=start; off+8<=end; ++off) {\n'+
  '      if (b[off+0]==0xAA && b[off+1]==0xAA && b[off+2]==0x03 &&\n'+
  '          b[off+3]==0x00 && b[off+4]==0x00 && b[off+5]==0x00) return off;\n'+
  '    }\n'+
  '    return -1;\n'+
  '  };\n'+

  '  int offLLC = findLLC(buf, len);\n'+
  '  if (offLLC < 0 || offLLC + 8 > len) {\n'+
  '    out += "  LLC:n/a\\n-------------------\\n";\n'+
  '    sumTrame = out;\n'+
  '    addFlowCount(mac_src_flow, mac_dst_flow, src_is_ap, dst_is_ap, false, IPAddress(), false, IPAddress());\n'+
  '    return out;\n'+
  '  }\n'+

  '  uint16_t etherType = ((uint16_t)buf[offLLC+6] << 8) | buf[offLLC+7];\n'+
  '  if (etherType != 0x0800) {\n'+
  '    out += "  LLC:ok EthType=0x"; { char et[8]; snprintf(et,sizeof(et),"%04X", etherType); out += et; } out += "\\n";\n'+
  '    out += "-------------------\\n";\n'+
  '    sumTrame = out;\n'+
  '    addFlowCount(mac_src_flow, mac_dst_flow, src_is_ap, dst_is_ap, false, IPAddress(), false, IPAddress());\n'+
  '    return out;\n'+
  '  }\n'+

  '  // ---- IPv4 ----\n'+
  '  int offIP = offLLC + 8;\n'+
  '  if (offIP + 20 > len) { out += "  (IP tronquée)\\n-------------------\\n"; sumTrame=out; return out; }\n'+
  '  const uint8_t* ip = buf + offIP;\n'+
  '  int ihl = (ip[0] & 0x0F) * 4;\n'+
  '  if (ihl < 20 || offIP + ihl > len) { out += "  (IP IHL tronquée)\\n-------------------\\n"; sumTrame=out; return out; }\n'+

  '  g_lastSniff.hasIPv4 = true;\n'+
  '  g_lastSniff.ip_src  = IPAddress(ip[12], ip[13], ip[14], ip[15]);\n'+
  '  g_lastSniff.ip_dst  = IPAddress(ip[16], ip[17], ip[18], ip[19]);\n'+
  '  out += "IPv4 " + g_lastSniff.ip_src.toString() + " -> " + g_lastSniff.ip_dst.toString() + "\\n";\n'+

  '  // ---- UDP ? ----\n'+
  '  uint8_t proto = ip[9];\n'+
  '  if (proto == 17) {\n'+
  '    int offUDP = offIP + ihl;\n'+
  '    if (offUDP + 8 <= len) {\n'+
  '      const uint8_t* udpH = buf + offUDP;\n'+
  '      g_lastSniff.hasUDP   = true;\n'+
  '      g_lastSniff.port_src = (udpH[0] << 8) | udpH[1];\n'+
  '      g_lastSniff.port_dst = (udpH[2] << 8) | udpH[3];\n'+
  '      g_lastSniff.udp_len  = (udpH[4] << 8) | udpH[5];\n'+

  '      int pl = (g_lastSniff.udp_len >= 8) ? (g_lastSniff.udp_len - 8) : 0;\n'+
  '      int maxpl = len - (offUDP + 8);\n'+
  '      if (pl < 0) pl = 0; if (pl > maxpl) pl = maxpl;\n'+
  '      if (pl > (int)MAX_TRAME_PAYLOAD) pl = MAX_TRAME_PAYLOAD;\n'+

  '      g_lastSniff.payload_len = pl;\n'+
  '      if (pl > 0) memcpy(g_lastSniff.payload, udpH + 8, pl);\n'+

  '      // ASCII\n'+
  '      g_lastSniff.payload_ascii = "";\n'+
  '      for (int i=0;i<pl;i++) {\n'+
  '        char c = (char)g_lastSniff.payload[i];\n'+
  '        g_lastSniff.payload_ascii += (c>=32 && c<=126)? c : \'.\';\n'+
  '      }\n'+

  '      char up[64];\n'+
  // '      snprintf(up, sizeof(up), "UDP %u -> %u  \\nTaille du message = = %zo octet(s)\\n",\n'+
  // '              g_lastSniff.port_src, g_lastSniff.port_dst, (size_t)g_lastSniff.payload_len);\n'+

  '      snprintf(up, sizeof(up), "Ports :  %u -> %u \\n", g_lastSniff.port_src, g_lastSniff.port_dst);\n'+


  '      out += up;\n'+
  '      if (pl > 0) out += "Message = \\"" + g_lastSniff.payload_ascii + "\\"\\n";\n'+
  '    }\n'+
  '  }\n'+

  '  // On a bien une DATA décodée\n'+
  '  CNT_DATA++;\n'+

  '  // Renseigner IP (si on les a) pour l’agrégateur de flux\n'+
  '  bool has_ip_src = g_lastSniff.hasIPv4;\n'+
  '  bool has_ip_dst = g_lastSniff.hasIPv4;\n'+
  '  addFlowCount(mac_src_flow, mac_dst_flow,\n'+
  '              src_is_ap, dst_is_ap,\n'+
  '              has_ip_src, g_lastSniff.ip_src,\n'+
  '              has_ip_dst, g_lastSniff.ip_dst);\n'+

  '  out += "\\n";\n'+
  '  out += "============================================================================\\n";\n'+
  '  sumTrame = out;\n'+
  '  return out;\n'+
  '}\n';

  // - Construit la chaîne d’affichage (summary/wireshark)
  Blockly.Arduino.codeFunctions_['cyber_readSniffedTrame'] =''+
  'String readSniffedTrame(const String& format) {\n'+
  '  // 7) Chaîne d’affichage (selon VIEW_MODE)\n'+
  '  if (format == "WIRESHARK") {\n'+
  '    // Titre + hexdump\n'+
  '    String out;\n'+
  '    out.reserve(64 + s_lastRawLen * 4);\n'+
  '    out += "[TRAME WiFi (802.11) ESPIONNEE] : Direction = ";\n'+
  '    if (g_lastSniff.isDown) out += "[AP] --> [STA]\\n\\n";\n'+
  '    else if (g_lastSniff.isUp) out += "[STA] --> [AP]\\n\\n";\n'+
  '    else out += "(autre)\\n\\n";\n'+
  '    const size_t perLine = 16;\n'+
  '    for (size_t off = 0; off < (size_t)s_lastRawLen; off += perLine) {\n'+
  '      size_t chunk = ((size_t)s_lastRawLen - off > perLine) ? perLine : ((size_t)s_lastRawLen - off);\n'+
  '      appendHexAsciiLine(out, s_lastRawCopy + off, off, chunk);\n'+
  '    }\n'+
  '    out += "============================================================================\\n";\n'+
  '    wirTrame = out;\n'+
  '    return wirTrame;\n'+
  '  } else {\n'+
  '    // Résumé\n'+
  '    sumTrame = makeSummaryFromSniffer(); // ta fonction renvoie et remplit sumTrame\n'+
  '    return sumTrame;\n'+
  '  }\n'+
  '}\n';



  var time = this.getFieldValue('TIME');
  var promescuousActions = Blockly.Arduino.statementToCode(this, 'PROMISCUOUS_ACTIONS');

  var code  = '// démarrer le sniffer sur le canal de l’AP\n';
  code += 'startSnifferAutoChannel();\n';
  code += 'uint32_t driss_t0 = millis();\n';
  code += 'while (millis() - driss_t0  < '+time*1000+') {\n';
  code += '  '+promescuousActions ; 
  code += '  delay(1);\n';
  code += '}\n';
  code += 'stopSnifferAndResume();\n';
  
  code += 'printSniffStats();\n';
  code += 'resetSniffStats();\n';

  code += 'Serial.println(">>> [FIN DE L\'ESPIONNAGE] >>>") ;\n';
  code += 'Serial.println("============================================================================") ;\n';
  code += 'Serial.println("[FONCTIONNEMENT EN MODE NORMAL] >>>") ;\n';
  code += 'Serial.println("============================================================================") ;\n';
 
  return code;
};





Blockly.Arduino.driss_d1r32_esp32_sent_message = function() { 
  
  var msg = Blockly.Arduino.valueToCode(this, 'MSG_STRING', Blockly.Arduino.ORDER_ATOMIC);
  var IP_dest = Blockly.Arduino.valueToCode(this, 'IP_DEST', Blockly.Arduino.ORDER_ATOMIC);

  code = '';
  code += 'IPAddress ipB; ipB.fromString('+IP_dest+'); \n';
  code += 'const char* payload = '+msg+';\n';


  //code += 'afficherTrameEnvoyee(ipB, payload);\n';

  code += 'udpApp.beginPacket(ipB, UDP_PORT);\n';
  code += 'udpApp.print(payload);\n';
  // ---> mémoriser ce qu’on envoie (pour l’affichage ensuite)
  code += 'recordLastTx(ipB, UDP_PORT, payload);\n';

  code += 'bool ok = udpApp.endPacket();\n';
  //code += 'Serial.printf("[ENVOI] de \\"%s\\"  vers %s -> %s\\n", payload, ipB.toString().c_str(),  ok ? "OK" : "ERR");\n';
  code += 'Serial.printf("[ENVOI] du message \\"%s\\"  vers %s  [REUSSI]\\n\\n", payload, ipB.toString().c_str());\n';
  code += 'afficherTrameEnvoyee(ipB, payload);\n';

  code += '//String txWireshark = afficherTrameEnvoyee("wireshark");\n';
  //code += 'Serial.println("[ENVOI] Le message a \xC3\xA9t\xC3\xA9 envoy\xC3\xA9 dans cette Trame");\n';
  code += '//Serial.println("[TRAME ENVOYEE]");\n';
  code += '//Serial.print(txWireshark);\n';
  code += '//Serial.println("========================================================================");\n';
  // code += 'String txHex = afficherTrameEnvoyee("hex");\n';
  // code += 'Serial.println("HEX de la trame envoyée:");\n';
  // code += 'Serial.println(txHex);\n';
  
  return code;
};




Blockly.Arduino.driss_d1r32_esp32_message_available = function() { 
  //Je cherche le mode dans lequel se trouve le bloc : NORMAL ou à l'interieur du bloc d'espionnage
  let mode = "NORMAL";
  if (isInside(this, "driss_d1r32_esp32_set_promiscuous_mode_during_time")) {
    mode = "PROMISCUOUS";
  }

  code = '';
  switch (mode){
    case "NORMAL" :
      code += 'udpPacketAvailable()';
      break;
    case "PROMISCUOUS" :
      code += 'processNextSniffFrame()'; 
      break;
  }
  return [code, Blockly.Arduino.ORDER_NONE];
};


Blockly.Arduino.driss_d1r32_esp32_read_wifi_trame = function() { 
  //mode =Blockly.Arduino._driss_memory.mode ;

  //Je cherche le mode dans lequel se trouve le bloc : NORMAL ou à l'interieur du bloc d'espionnage
  let mode = "NORMAL";
  if (isInside(this, "driss_d1r32_esp32_set_promiscuous_mode_during_time")) {
    mode = "PROMISCUOUS";
  }

  code = '';
  switch (mode){
    case "NORMAL" :
      code += 'readNormalAndBuild(VIEW_MODE == WIRESHARK_VIEW ? "WIRESHARK" : "SUMMARY");\n';
      break;
    case "PROMISCUOUS" :
      code += 'readSniffedTrame(VIEW_MODE == WIRESHARK_VIEW ? "WIRESHARK" : "SUMMARY");\n'; 
      break;
  }
  return code;
};





Blockly.Arduino.driss_d1r32_esp32_show_wifi_trame_in_console = function() { 
  //mode =Blockly.Arduino._driss_memory.mode ;
  //Je cherche le mode dans lequel se trouve le bloc : NORMAL ou à l'interieur du bloc d'espionnage
  let mode = "NORMAL";
  if (isInside(this, "driss_d1r32_esp32_set_promiscuous_mode_during_time")) {
    mode = "PROMISCUOUS";
  }

  code = '';
  switch (mode){
    case "NORMAL" :

      code += 'if (VIEW_MODE == WIRESHARK_VIEW){\n';
      code += '  printNormalFrameString(wirTrame);\n';
      code += '} else {\n';
      code += '    printNormalFrameString(sumTrame);\n';
      code += '  }\n';
      break;
    case "PROMISCUOUS" :
      code += 'if (VIEW_MODE == WIRESHARK_VIEW){\n';
      code += '  printSnifferFrameString(wirTrame);\n';
      code += '} else {\n';
      code += '    printSnifferFrameString(sumTrame);\n';
      code += '  }\n';
      break;
  }


  
  return code;
};


Blockly.Arduino.driss_d1r32_esp32_get_d1r32_mac = function() { 
  //Je cherche le mode dans lequel se trouve le bloc : NORMAL ou à l'interieur du bloc d'espionnage
  
  // ---------- Accès MAC ----------
  Blockly.Arduino.codeFunctions_['cyber_getMACOfThisStation'] =''+
  'String getMACOfThisStation() {\n'+
  '  uint8_t m[6]; esp_wifi_get_mac(WIFI_IF_STA, m);\n'+
  //'  String mac = macToStr6(m);\n'+
  '  return macToStr6(m);;\n'+
  '}\n';
  

  code = '';

  code += 'getMACOfThisStation()';

  return [code, Blockly.Arduino.ORDER_NONE];
}

Blockly.Arduino.driss_d1r32_esp32_get_d1r32_ip = function() { 
  //Je cherche le mode dans lequel se trouve le bloc : NORMAL ou à l'interieur du bloc d'espionnage
  let mode = "NORMAL";
  if (isInside(this, "driss_d1r32_esp32_set_promiscuous_mode_during_time")) {
    mode = "PROMISCUOUS";
  }
  // ---------- Accès IP ----------
  // Blockly.Arduino.codeFunctions_['cyber_getIPOfThisStation'] =''+
  // 'IPAddress getIPOfThisStation() {\n'+
  // '  return ipFixe.toString();\n'+
  // '}\n';

  code = '';

  code += 'ipFixe.toString()';
  
  return [code, Blockly.Arduino.ORDER_NONE];
}

Blockly.Arduino.driss_d1r32_esp32_get_d1r32_bssid = function() {
  //Je cherche le mode dans lequel se trouve le bloc : NORMAL ou à l'interieur du bloc d'espionnage
  let mode = "NORMAL";
  if (isInside(this, "driss_d1r32_esp32_set_promiscuous_mode_during_time")) {
    mode = "PROMISCUOUS";
  }

  // ======================================================
  // Normalisation d’une adresse MAC vers différents formats
  // ======================================================
  // format = "colon"   -> "AA:BB:CC:DD:EE:FF"
  // format = "dash"    -> "AA-BB-CC-DD-EE-FF"
  // format = "plain"   -> "AABBCCDDEEFF"
  // format = "cisco"   -> "AABB.CCDD.EEFF"
  Blockly.Arduino.codeFunctions_['cyber_normalizeMac'] =''+
  'String normalizeMac(String mac, String format = "colon") {\n'+
  '  // 1. Nettoyer : enlever séparateurs éventuels (\':\' \'-\' \'.\')\n'+
  '  String clean = "";\n'+
  '  for (int i = 0; i < mac.length(); i++) {\n'+
  '    char c = mac.charAt(i);\n'+
  '    if (isxdigit(c)) {  // garder que [0-9A-Fa-f]\n'+
  '      clean += (char)toupper(c);\n'+
  '    }\n'+
  '  }\n'+

  '  // Vérif longueur\n'+
  '  if (clean.length() != 12) {\n'+
  '    return "[ERR] MAC invalide : " + mac;\n'+
  '  }\n'+

  '  // 2. Reformater selon le format demandé\n'+
  '  if (format == "colon") {\n'+
  '    // AA:BB:CC:DD:EE:FF\n'+
  '    return clean.substring(0,2) + ":" + clean.substring(2,4) + ":" +\n'+
  '          clean.substring(4,6) + ":" + clean.substring(6,8) + ":" +\n'+
  '          clean.substring(8,10) + ":" + clean.substring(10,12);\n'+

  '  } else if (format == "dash") {\n'+
  //'    // AA-BB-CC-DD-EE-FF\n'+
  '    return clean.substring(0,2) + "-" + clean.substring(2,4) + "-" +\n'+
  '          clean.substring(4,6) + "-" + clean.substring(6,8) + "-" +\n'+
  '          clean.substring(8,10) + "-" + clean.substring(10,12);\n'+

  '  } else if (format == "plain") {\n'+
  //'    // AABBCCDDEEFF\n'+
  '    return clean;\n'+

  '  } else if (format == "cisco") {\n'+
  //'    // AABB.CCDD.EEFF\n'+
  '    return clean.substring(0,4) + "." + clean.substring(4,8) + "." + clean.substring(8,12);\n'+

  '  } else {\n'+
  '    return "[ERR] format inconnu: " + format;\n'+
  '  }\n'+
  '}\n';
  
  Blockly.Arduino.codeFunctions_['cyber_getBSSID'] =''+
  'String getBSSID() {\n'+
  '  String bssid = normalizeMac(macToStr6(g_myBSSID).c_str(), "cisco").c_str();\n'+
  '  return bssid;\n'+
  '}\n';

  code = '';

  code += 'getBSSID()';

  return [code, Blockly.Arduino.ORDER_NONE];
}


Blockly.Arduino.driss_d1r32_esp32_get_data_from_trame = function() { 
  var data = this.getFieldValue('DATA');

  //Je cherche le mode dans lequel se trouve le bloc : NORMAL ou à l'interieur du bloc d'espionnage
  let mode = "NORMAL";
  if (isInside(this, "driss_d1r32_esp32_set_promiscuous_mode_during_time")) {
    mode = "PROMISCUOUS";
  }


  code = '';

  switch(data){
    case "MSG" : code += 'getMessage().c_str()';
    break;

    case "IP_SRC" : code += 'getIPSource().toString().c_str()';
    break;

    case "IP_DEST" : code += 'getIPDestination().toString().c_str()';
    break;

    case "MAC_SRC" : code += 'getMACSource().c_str()';
    break;

    case "MAC_DEST" : code += 'getMACDestination().c_str()';
    break;

    case "BSSID" : code += 'getLastBSSID('+mode+');';
    break;

    case "PORT_SRC" : code += 'getPortSource()';
    break;

    case "PORT_DEST" : code += 'getPortDestination()';
    break;

    case "LEN_MSG" : code += '(unsigned)getPayloadLength()';
    break;
    
  }

  return [code, Blockly.Arduino.ORDER_NONE];
}
