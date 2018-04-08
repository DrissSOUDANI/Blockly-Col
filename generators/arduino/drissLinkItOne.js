Blockly.Arduino.drissLinkItOne_declare_var = function() {
  // Variable setter.
  var argument1 = this.getTitleValue('TYPE');
  //TODO: settype to variable
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  //Blockly.Arduino.setups_['setup_var' + varName] = varName + ' = ' + argument0 + ';\n';
  tableau_type[varName]=argument1;
  return '';
};

Blockly.Arduino.drissLinkItOne_variables_set = function() {
  // Variable setter.
  var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  //charge le type dans tableau_type 
  //tableau_type[Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),Blockly.Variables.NAME_TYPE)]=argument1;   
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);       
  return varName + ' = ' + argument0 + ';\n';
};

Blockly.Arduino.drissLinkItOne_variables_get = function() {
  // Variable getter.
  var code = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



//---- GSM -------------------------------------------------------------------------------------------------------------

//LinkIt One  GSM initialisation OK
Blockly.Arduino.driss_linkItOne_GSM_initialisation = function() {
  Blockly.Arduino.includes_['define_LTask'] = '#include <LTask.h>'; 
  Blockly.Arduino.includes_['define_LGSM'] = '#include <LGSM.h>'; 

  Blockly.Arduino.codeFunctions_['define_getNumSMS'] = '\nString getNumSMS() {\n'+
   ' char num[20] ;\n'+       
   ' LSMS.remoteNumber(num, 20);\n'+
   ' String numero(num);\n'+
   ' return  numero;\n'+
   '}';  

   Blockly.Arduino.codeFunctions_['define_getMessageSMS'] = '\nString getMessageSMS() {\n'+
   ' char msg[100]="" ;\n'+ 
   ' int len=0 ;\n'+  
   ' while(true) {\n'+ 
   '  int c = LSMS.read();\n'+ 
   '  if(c < 0) break ;\n'+      
   '  msg[len++] = (char)c;\n'+
   '  }\n'+
   ' String message(msg);\n'+
   ' return message;\n'+
   '}';    

  Blockly.Arduino.codeFunctions_['define_sendSMS'] = '\nvoid sendSMS(char num[], char msg[]) {\n'+
   ' LSMS.beginSMS(num);\n'+ 
   ' LSMS.print(msg);\n'+
   ' LSMS.endSMS();\n'+       
   ' delay(3000);\n'+ 
   '}';  

   Blockly.Arduino.codeFunctions_['define_deleteSMS'] = '\n/*Efface les SMS */\n'+
  'void deleteSMS() { \n' +
  ' while (LSMS.available()) {\n' +
  '   LSMS.flush();\n'+
  ' }\n'+ 
  '}';
   

  Blockly.Arduino.setups_['setup_LinkItOne_SMS'] = '//Serial.begin(9600);\n'+
  '  //Serial.print("Test si le module SMS est pret....");\n'+
  '  while(!LSMS.ready()) { delay(1000);}\n'+
  '  //Serial.println("Oui, il est pret");\n'+
  '  deleteSMS();';

  var code = '';
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code; 

};

//LinkIt One  SMS disponible OK
Blockly.Arduino.driss_linkItOne_SMS_disponible = function() {
   
  var code = 'LSMS.available()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//LinkIt One  SMS lire numéro OK
Blockly.Arduino.driss_linkItOne_SMS_lireNumero = function() {
  
  

  var code = 'getNumSMS()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//LinkIt One  SMS Lire message OK
Blockly.Arduino.driss_linkItOne_SMS_lireMessage = function() {
  
  var code = 'getMessageSMS()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//LinkIt One  SMS envoyer message OK
Blockly.Arduino.driss_linkItOne_SMS_envoyerMessage = function() {
  var value_contact_num = Blockly.Arduino.valueToCode(this, 'CONTACT_NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_message_to_send = Blockly.Arduino.valueToCode(this, 'MESSAGE_TO_SEND', Blockly.Arduino.ORDER_ATOMIC);
  
   

  var code = 'char* num = new char['+value_contact_num+'.length()+1];\n' +
             'strcpy(num, '+value_contact_num+'.c_str());\n'+
             'String buf = '+value_message_to_send+';\n'+
             'char* msg = new char[buf.length()+1];\n'+
             'strcpy(msg, buf.c_str());\n'+
             'sendSMS(num, msg);\n';
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;  
};

//LinkIt One  SMS effacer OK
Blockly.Arduino.driss_linkItOne_SMS_effacer = function() {
  var code = 'LSMS.flush();\n';
  return code;
};



//---- GPRS -------------------------------------------------------------------------------------------------------------

//LinkIt One  GSM initialisation OK
Blockly.Arduino.driss_linkItOne_GPRS_initialisation = function() {
  Blockly.Arduino.includes_['define_LGPRS'] = '#include <LGPRS.h>'; 
  Blockly.Arduino.includes_['define_LGPRSClient'] = '#include <LGPRSClient.h>'; 
  Blockly.Arduino.includes_['define_LGPRSServer'] = '#include <LGPRSServer.h>';

  Blockly.Arduino.variables_['define_gsmclient'] = 'LGPRSClient gsmclient;';
  Blockly.Arduino.variables_['define_gsmclientConnected'] = 'boolean gsmclientConnected  = false;';
  //Blockly.Arduino.variables_['define_server'] = 'char server[] = "" ;';
  //Blockly.Arduino.variables_['define_port'] = 'int port = 80 ;';
  //Blockly.Arduino.variables_['define_path'] = 'char path[] = "";';

  
  Blockly.Arduino.setups_['setup_GPRS'] = '//Serial.print("Tentative de joindre le réseau GPRS ...");\n'+
  '  while (!LGPRS.attachGPRS("wholesale", NULL, NULL)) delay(500);\n'+
  '  //Serial.println("..OK.. réussi");\n';

  var code = '';
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code; 

};


/*

//LinkIt One  GPRS : driss_linkItOne_GPRS_connect_to_server
Blockly.Arduino.driss_linkItOne_GPRS_connect_to_server = function() {
  var server = Blockly.Arduino.valueToCode(this, 'SERVER', Blockly.Arduino.ORDER_ATOMIC);
  var port = Blockly.Arduino.valueToCode(this, 'PORT', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.variables_['define_server'] = 'char server[] = '+server+';';
  Blockly.Arduino.variables_['define_port'] = 'int port = '+port+' ;';

  Blockly.Arduino.codeFunctions_['define_ConnectLinkItOneToServerByGPRS'] = '\n//Se connecter au serveur par GPRS  \n' +
   'void ConnectLinkItOneToServerByGPRS() {\n'+     
   '  if( gsmclient.connect(server, port) )\n'+
   '    gsmclientConnected = true;\n'+
   '  else gsmclientConnected = false;\n'+
   '}';  

  
  Blockly.Arduino.setups_['setup_GPRS'] = '//Serial.print("Tentative de joindre le réseau GPRS ...");\n'+
  '  while (!LGPRS.attachGPRS("wholesale", NULL, NULL)) delay(500);\n'+
  '  //Serial.println("..OK.. réussi");\n';

  var code = 'ConnectLinkItOneToServerByGPRS();\n';
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code; 

};

//LinkIt One  GPRS : driss_linkItOne_GPRS_connect_to_server
Blockly.Arduino.driss_linkItOne_GPRS_connected_to_server = function() {
  
  var code = 'gsmclientConnected == true';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
  //return code; 

};

//LinkIt One  GPRS : driss_linkItOne_GPRS_WriteData_On_Server
Blockly.Arduino.driss_linkItOne_GPRS_writeData_on_server = function() {
  var file_name = Blockly.Arduino.valueToCode(this, 'FILENAME', Blockly.Arduino.ORDER_ATOMIC);
  var data_to_write = Blockly.Arduino.valueToCode(this, 'DATAS', Blockly.Arduino.ORDER_ATOMIC);
  var path = Blockly.Arduino.valueToCode(this, 'PATH', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.variables_['define_path'] = 'char path[] = '+path+';';

  Blockly.Arduino.codeFunctions_['define_WiteDatasOnServerByGPRS'] = '\n//Ecriture des données sur le serveur  \n' +
   'void WiteDatasOnServerByGPRS() {\n'+     
   //'  String str = "GET /+'path'+/store_data.php?filename=file_name&datas='+data_to_write+'";\n'+
   '  String str = "GET /";\n'+
   '  str += path ;\n' +
   '  str += "/store_data.php?filename=";\n' +
   '  str += '+ file_name +';\n' +
   '  str += "&datas=";\n' +
   '  str += '+ data_to_write +';\n' +
   '  gsmclient.print(str);\n'+
   '  gsmclient.println(" HTTP/1.1");\n'+
   '  gsmclient.print("Host: ");\n'+
   '  gsmclient.println(server);\n'+
   '  gsmclient.println("Connection: close");\n'+
   '  gsmclient.println();\n'+
   '}';  
  var code = 'WiteDatasOnServerByGPRS();';
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code; 
};
*/
//LinkIt One  GPRS : driss_linkItOne_GPRS_WriteData_On_Server
Blockly.Arduino.driss_linkItOne_GPRS_writeData_on_server = function() {
  var file_name = Blockly.Arduino.valueToCode(this, 'FILENAME', Blockly.Arduino.ORDER_ATOMIC);
  var data_to_write = Blockly.Arduino.valueToCode(this, 'DATAS', Blockly.Arduino.ORDER_ATOMIC);
  var path = Blockly.Arduino.valueToCode(this, 'PATH', Blockly.Arduino.ORDER_ATOMIC);
  var server = Blockly.Arduino.valueToCode(this, 'SERVER', Blockly.Arduino.ORDER_ATOMIC);
  var port = Blockly.Arduino.valueToCode(this, 'PORT', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.variables_['define_path'] = 'char path[] = '+path+';';
  Blockly.Arduino.variables_['define_server'] = 'char server[] = '+server+';';
  Blockly.Arduino.variables_['define_port'] = 'int port = '+port+' ;';

  Blockly.Arduino.codeFunctions_['define_WiteDatasOnServerByGPRS'] = '\n/*Ecriture des données sur le serveur */ \n' +
   'void WiteDatasOnServerByGPRS() {\n'+ 
   '  String str = "GET /";\n'+    
   '  if( gsmclient.connect('+server+', '+port+') )\n'+
   '    str += '+path+' ;\n' +
   '    str += "/store_data.php?filename=";\n' +
   '    str += '+ file_name +';\n' +
   '    str += "&datas=";\n' +
   '    str += '+ data_to_write +';\n' +
   '    gsmclient.print(str);\n'+
   '    gsmclient.println(" HTTP/1.1");\n'+
   '    gsmclient.print("Host: ");\n'+
   '    gsmclient.println('+server+');\n'+
   '    gsmclient.println("Connection: close");\n'+
   '    gsmclient.println();\n'+
   '}';  
  var code = 'WiteDatasOnServerByGPRS();';
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code; 
};


//---- GPS -------------------------------------------------------------------------------------------------------------

//LinkIt One  GPS initialisation OK
Blockly.Arduino.driss_linkItOne_GPS_initialisation = function() {
  Blockly.Arduino.includes_['define_LinItOne_GPS'] = '#include <LGPS.h>'; 
  Blockly.Arduino.includes_['define_LinItOne_LGPRS'] = '#include <LGPRS.h>'; 

  Blockly.Arduino.codeFunctions_['define_setPauseGPS'] = '\n/*Pause pour que traiter les infos GPS */ \n' +
  'void setPauseGPS() {\n'+
  ' delay(3000);\n'+ 
  '}\n';
  Blockly.Arduino.setups_['setup_GPS'] = 'LGPS.powerOn(GPS_GLONASS);\n'+ 
  '  //Serial.println("Activation du recepteur GPS ...OK.");\n'+
  '  //Serial.print("Tentative de joindre le réseau GPRS ...");\n'+
  '  //while (!LGPRS.attachGPRS("wholesale", NULL, NULL)) delay(500);\n'+
  '  //Serial.println("..OK.. réussi");\n';
  
  var code = 'setPauseGPS();\n';
  return code;
};

//LinkIt One  GPS Lire les données OK
Blockly.Arduino.driss_linkItOne_GPS_lireDonnees = function() {

  Blockly.Arduino.variables_['define_gpsSentenceInfoStruct'] = '\n// Cette structure est nécessaire pour stocker les données qui arrivent des satellites\n'+
                                                                'gpsSentenceInfoStruct info;\n';
  Blockly.Arduino.variables_['define_latitude'] = 'double latitude = 0.00;';
  Blockly.Arduino.variables_['define_longitude'] = 'double longitude = 0.00;';
  Blockly.Arduino.variables_['define_lat_format'] = 'String lat_format = "0.00000";'; 
  Blockly.Arduino.variables_['define_lon_format'] = 'String lon_format = "0.00000";'; 
  Blockly.Arduino.variables_['define_altitude'] = 'float altitude = 0.00;'; 
  Blockly.Arduino.variables_['define_alt_format'] = 'String alt_format = "0.00000";'; 
  Blockly.Arduino.variables_['define_dop'] = 'float dop = 100.00; //dilution of precision'; 
  Blockly.Arduino.variables_['define_geoid'] = 'float geoid = 0.00;'; 
  Blockly.Arduino.variables_['define_k_speed'] = 'float k_speed = 0.00;  //speed in knots ';
  Blockly.Arduino.variables_['define_m_speed'] = 'float m_speed = 0.00; //speed in m/s';  
  Blockly.Arduino.variables_['define_m_speed_format'] = 'String m_speed_format = "0";'; 
  Blockly.Arduino.variables_['define_track_angle'] = 'float track_angle = 0.00;'; 
  Blockly.Arduino.variables_['define_fix'] = 'int fix = 0;'; 
  Blockly.Arduino.variables_['define_time'] = 'String time_format = "00:00:00";'; 
  Blockly.Arduino.variables_['define_date'] = 'String date_format = "00:00:00";'; 
  Blockly.Arduino.variables_['define_sat_num'] = 'int sat_num = 0; //number of visible satellites'; 
  

  Blockly.Arduino.codeFunctions_['define_convert_degrees'] = '\n/*Obtenir les degrés à partir de (d)ddmm.mmmm to (d)dd.mmmmmm*/ \n' + 
   'float convert_degrees(String str, boolean dir) {\n'+
   ' double mm, dd;\n'+       
   ' int point = str.indexOf(".");\n'+
   ' dd = str.substring(0, (point - 2)).toFloat();\n'+
   ' mm = str.substring(point - 2).toFloat() / 60.00;\n'+
   ' return (dir ? -1 : 1) * (dd + mm);\n'+
   '}\n';  

  Blockly.Arduino.codeFunctions_['define_doubleToStr'] = '\n/*Convertir un double en string */ \n' +
  'String doubleToStr(double val) {\n'+
   ' int buf = (int) (val *1000000);\n'+ 
   ' String str_Val = "";\n'+  
   ' String s = String(buf);\n'+ 
   ' if (abs(val) < 10) {\n'+ 
   '  str_Val = s.substring(0, 1);\n'+ 
   '  str_Val += ".";\n'+ 
   '  str_Val += s.substring(1);\n'+      
   ' }else if (abs(val) < 100) {\n'+
   '  str_Val = s.substring(0, 2);\n'+
   '  str_Val += ".";\n'+
   '  str_Val += s.substring(2);\n'+
   ' } else {\n'+
   '  str_Val = s.substring(0, 3);\n'+
   '  str_Val += ".";\n'+
   '  str_Val += s.substring(3);\n'+
   ' }\n'+
   ' return str_Val;\n'+
   '}\n';    
  
  Blockly.Arduino.codeFunctions_['define_getSatellitesDatas'] = '\n/*obtient les informations des satellites */ \n' +
   'void getSatellitesDatas(gpsSentenceInfoStruct* info) {\n'+
   ' LGPS.getData(info);\n'+ 
   ' if (info->GPGGA[0] == \'$\') {\n'+
   '  String str = (char*)(info->GPGGA);\n'+  
   '  str = str.substring(str.indexOf(",") + 1);\n'+ 
   '  time_format = str.substring(0, 2) + ":" + str.substring(2, 4) + ":" + str.substring(4, 6);\n'+ 
   '  str = str.substring(str.indexOf(",") + 1);\n'+ 
   '  latitude = convert_degrees(str.substring(0, str.indexOf(",")), str.charAt(str.indexOf(",") + 1) == \'S\');\n'+ 
   '  lat_format = doubleToStr( latitude);\n'+ 
   '  str = str.substring(str.indexOf(",") + 3);\n'+ 
   '  longitude = convert_degrees(str.substring(0, str.indexOf(",")), str.charAt(str.indexOf(",") + 1) == \'W\');\n'+      
   '  lon_format = doubleToStr( longitude);\n'+ 
   '  str = str.substring(str.indexOf(",") + 3);\n'+ 
   '  fix = str.charAt(0) - 48;\n'+ 
   '  str = str.substring(2);\n'+ 
   '  sat_num = str.substring(0, 2).toInt();\n'+ 
   '  str = str.substring(3);\n'+ 
   '  dop = str.substring(0, str.indexOf(",")).toFloat();\n'+ 
   '  str = str.substring(str.indexOf(",") + 1);\n'+ 
   '  altitude = str.substring(0, str.indexOf(",")).toFloat();\n'+ 
   '  alt_format = doubleToStr( altitude);\n'+ 
   '  alt_format = alt_format + str.substring(str.indexOf(",") + 1,1);\n'+
   '  str = str.substring(str.indexOf(",") + 3);\n'+ 
   '  geoid = str.substring(0, str.indexOf(",")).toFloat();\n'+ 
   ' \n'+ 
   '  if (info->GPRMC[0] == \'$\') {\n'+ 
   '    str = (char*)(info->GPRMC);\n'+ 
   '    int comma = 0;\n'+ 
   '    for (int i = 0; i < 60; ++i) {\n'+ 
   '      if (info->GPRMC[i] == \',\') {\n'+ 
   '       comma++;\n'+ 
   '       if (comma == 7) {\n'+ 
   '        comma = i + 1;\n'+ 
   '        break;\n'+ 
   '       }\n'+ 
   '      }\n'+ 
   '    }\n'+ 
   '    str = str.substring(comma);\n'+ 
   '    k_speed = str.substring(0, str.indexOf(",")).toFloat();\n'+ 
   '    m_speed = k_speed * 0.514;\n'+ 
   '    m_speed_format = doubleToStr( m_speed);\n'+ 
   '    str = str.substring(str.indexOf(",") + 1);\n'+ 
   '    track_angle = str.substring(0, str.indexOf(",")).toFloat();\n'+ 
   '    str = str.substring(str.indexOf(",") + 1);\n'+ 
   '    date_format = str.substring(0, 2) + "-" + str.substring(2, 4) + "-" + "20" + str.substring(4, 6);\n'+ 
   '    \n'+ 
   '    //return sat_num;\n'+ 
   '   }\n'+ 
   '  }\n'+ 
   ' else {\n'+ 
   '  //Serial.println("No GGA data");\n'+ 
   ' }\n'+ 
   ' //return 0;\n'+ 
   
   '}';   

  var code = 'getSatellitesDatas(&info);\n';
  return code ;
};

//LinkIt One  GPS : Nombre de satellites
Blockly.Arduino.driss_linkItOne_GPS_NbreSatellites = function() {
  Blockly.Arduino.codeFunctions_['define_GPSgetSatellitesNbre'] = '\n/*Renvoyer le nombre de satellites captés */ \n' +
  'int GPSgetSatellitesNbre() {\n'+
  ' return sat_num;\n'+ 
  '}\n';
  var code = 'GPSgetSatellitesNbre()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//LinkIt One  GPS : Date
Blockly.Arduino.driss_linkItOne_GPS_getDate = function() {
  Blockly.Arduino.codeFunctions_['define_GPSgetDate'] = '\n/*Renvoyer la date */ \n' +
  'String GPSgetDate() {\n'+
  ' return date_format;\n'+ 
  '}\n';
  var code = 'GPSgetDate()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//LinkIt One  GPS : Time
Blockly.Arduino.driss_linkItOne_GPS_getTime = function() {
  Blockly.Arduino.codeFunctions_['define_GPSgetTime'] = '\n/*Renvoyer l"heure */ \n' +
  'String GPSgetTime() {\n'+
  ' return time_format;\n'+ 
  '}\n';
  var code = 'GPSgetTime()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//LinkIt One  GPS : Lattitude
Blockly.Arduino.driss_linkItOne_GPS_getLatitude = function() {
  Blockly.Arduino.codeFunctions_['define_GPSgetLatitude'] = '\n/*Renvoyer la latitude */ \n' +
  'String GPSgetLatitude() {\n'+
  ' return lat_format;\n'+ 
  '}\n';
  var code = 'GPSgetLatitude()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//LinkIt One  GPS : Longitude
Blockly.Arduino.driss_linkItOne_GPS_getLongitude = function() {
  Blockly.Arduino.codeFunctions_['define_GPSgetLattitude'] = '\n/*Renvoyer la longitude */ \n' +
  'String GPSgetLongitude() {\n'+
  ' return lon_format;\n'+ 
  '}\n';
  var code = 'GPSgetLongitude()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//LinkIt One  GPS : Altitude
Blockly.Arduino.driss_linkItOne_GPS_getAltitude = function() {
  Blockly.Arduino.codeFunctions_['define_GPSgetLattitude'] = '\n/*Renvoyer l"altitude */ \n' +
  'String GPSgetAltitude() {\n'+
  ' return alt_format;\n'+ 
  '}\n';
  var code = 'GPSgetAltitude()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//LinkIt One  GPS : Vitesse
Blockly.Arduino.driss_linkItOne_GPS_getVitesse = function() {
  Blockly.Arduino.codeFunctions_['define_GPSgetVitesse'] = '\n/*Renvoyer la vitesse */ \n' +
  'String GPSgetVitesse() {\n'+
  ' return m_speed_format;\n'+ 
  '}\n';
  var code = 'GPSgetVitesse()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//LinkIt One  GPS : Vitesse
Blockly.Arduino.driss_linkItOne_GPS_get_GGA_GPRMC_Trame = function() {
  Blockly.Arduino.codeFunctions_['define_GPSget_GGA_GPRMC_Trame'] = '\n/*Renvoyer la trame : date, heure, latitude, longitude, altitude, vitesse, nbre de satellites */ \n' +
  'String GPSget_GGA_GPRMC_Trame() {\n'+
  ' String Trame_GGA_GPRMC= "" ;\n'+
  ' Trame_GGA_GPRMC = Trame_GGA_GPRMC + date_format + "," ; \n'+
  ' Trame_GGA_GPRMC = Trame_GGA_GPRMC + time_format + "," ; \n'+
  ' Trame_GGA_GPRMC = Trame_GGA_GPRMC + lat_format  + "," ; \n'+
  ' Trame_GGA_GPRMC = Trame_GGA_GPRMC + lon_format  + "," ; \n'+
  ' Trame_GGA_GPRMC = Trame_GGA_GPRMC + alt_format  + "," ; \n'+
  ' Trame_GGA_GPRMC = Trame_GGA_GPRMC + m_speed_format + ","   ; \n'+
  ' Trame_GGA_GPRMC = Trame_GGA_GPRMC + sat_num ; \n'+

  ' return Trame_GGA_GPRMC;\n'+ 
  '}\n';

  var code = 'GPSget_GGA_GPRMC_Trame()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};











//---- STOCKAGE -------------------------------------------------------------------------------------------------------------

//LinkIt One  SD Card initialisation OK
Blockly.Arduino.driss_linkItOne_SDCard_initialisation = function() {
  Blockly.Arduino.includes_['define_SD_CARD'] = '#include <LSD.h>'; 
  Blockly.Arduino.definitions_['define_Drv'] = '#define Drv LSD\n ';
  Blockly.Arduino.setups_['setup_SD_Card'] = 'pinMode(10, OUTPUT); //Nécessaire pour utiliser la carte SD\n'+ 
  '  //Serial.println("Initialisation du lecteur de la carte SD...");\n'+
  '  if(!Drv.begin()) {\n'+
  '    //Serial.println("Erreur lors de l\'initialisation de la carte SD!!.");\n'+
  '    //Serial.println("Verifiez la presence de la carte dans le lecteur !!");\n'+
  '    while(true);\n'+
  '  }\n'+
  '  //Serial.println("Lecteur de la carte SD initialisé");\n';
  var code = '';;
  return code;
};


//LinkIt One  Flash Mem initialisation OK
Blockly.Arduino.driss_linkItOne_FalshMem_initialisation = function() {
  Blockly.Arduino.includes_['define_FlashMem'] = '#include <LFlash.h>'; 
  Blockly.Arduino.definitions_['define_Drv'] = '#define Drv LFlash  ; // use Internal 10M Flash\n';
  Blockly.Arduino.setups_['setup_FlashMem'] = 'if(!Drv.begin()) {\n'+
  ' while(true);\n'+
  '}\n'
  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//LinkIt One  SD Card / Flash Mem Ecriture dans le fichier OK
Blockly.Arduino.driss_linkItOne_WriteDataOnSDCard = function() {
  //var dropdown_drive = this.getFieldValue('DRIVE');
  var value_file_name = Blockly.Arduino.valueToCode(this, 'FILE_NAME', Blockly.Arduino.ORDER_ATOMIC);
  var value_data_to_save = Blockly.Arduino.valueToCode(this, 'DATA_TO_SAVE', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.codeFunctions_['define_WriteGPSDatasOnSDCard'] = '\n/*Ecriture des données GPS sur la carte SD */ \n' +
  'void WriteGPSDatasOnSDCard(uint8_t mode, String data) {\n'+
  ' String strfilename = '+value_file_name+';\n'+
  ' char* filename = new char[strfilename.length()+1];\n'+
  //' char* filename = new char['+value_file_name+'.length()+1];\n'+
  //' strcpy(filename, '+value_file_name+'.c_str());\n'+
  ' strcpy(filename, strfilename.c_str());\n'+
  ' LFile dataFile = Drv.open(filename, mode);\n'+ 
  ' if (dataFile) {\n'+ 
  '   dataFile.println(data);\n'+ 
  '   dataFile.close();\n'+ 
  ' }\n'+
  '}\n';
  
  //var code = 'char* filename = new char['+value_file_name+'.length()+1];\n'+
  //'strcpy(filename, '+value_file_name+'.c_str());\n'+
  //'WriteGPSDatas(filename, FILE_WRITE, '+value_data_to_save+');' ;

  var code = 'WriteGPSDatasOnSDCard(FILE_WRITE, '+value_data_to_save+');\n' ;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};