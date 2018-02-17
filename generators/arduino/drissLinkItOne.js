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



//---- GSm/GPRS -------------------------------------------------------------------------------------------------------------

//LinkIt One  GSM initialisation OK
Blockly.Arduino.driss_linkItOne_GSM_initialisation = function() {
  //Blockly.Arduino.definitions_['define_var_numero_sms'] = "char p_num[20];\n";  
  Blockly.Arduino.definitions_['define_LinItOne_SMS'] = '#include <LTask.h>\n#include <LGSM.h>\n'; 

  Blockly.Arduino.definitions_['define_getNumSMS'] = '\nString getNumSMS() {\n'+
   ' char num[20] ;\n'+       
   ' LSMS.remoteNumber(num, 20);\n'+
   ' String numero(num);\n'+
   ' return  numero;\n'+
   '}\n';  

   Blockly.Arduino.definitions_['define_getMessageSMS'] = '\nString getMessageSMS() {\n'+
   ' char msg[100]="" ;\n'+ 
   ' int len=0 ;\n'+  
   ' while(true) {\n'+ 
   '  int c = LSMS.read();\n'+ 
   '  if(c < 0) break ;\n'+      
   '  msg[len++] = (char)c;\n'+
   '  }\n'+
   ' String message(msg);\n'+
   ' return message;\n'+
   '}\n';    

  Blockly.Arduino.definitions_['define_sendSMS'] = '\nvoid sendSMS(char num[], char msg[]) {\n'+
   ' LSMS.beginSMS(num);\n'+ 
   ' LSMS.print(msg);\n'+
   ' LSMS.endSMS();\n'+       
   ' delay(3000);\n'+ 
   '}\n';  

   Blockly.Arduino.definitions_['define_deleteSMS'] = '\n/*Efface les SMS */\n'+
  'void deleteSMS() { \n' +
  ' while (LSMS.available()) {\n' +
  '   LSMS.flush();\n'+
  ' }\n'+ 
  '}\n';
   

  //Blockly.Arduino.setups_['setup_GSM_disponible'] = 'while(!LSMS.ready()) {\n'+'    delay(1000);\n'+'  }\n'+
  //'deleteSMS() ;\n';
  Blockly.Arduino.setups_['setup_GSM_disponible'] = 'while(!LSMS.ready()) {\n'+'    delay(1000);\n'+'  }\nLSMS.flush();\n';



   
  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//LinkIt One  SMS disponible OK
Blockly.Arduino.driss_linkItOne_SMS_disponible = function() {
   
  //Blockly.Arduino.definitions_['define_LinItOne_SMS'] = '#include <LTask.h>\n#include <LGSM.h>\n'; 
  //Blockly.Arduino.setups_['setup_disponible'] = 'while(!LSMS.ready()) {\n'+'    delay(1000);\n'+'  }\n'; 
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
  
   

  var code = 'char* num = new char[Numero.length()+1];\n' +
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
  var code = ' LSMS.flush();\n';
  return code;
};



//---- GPS -------------------------------------------------------------------------------------------------------------

//LinkIt One  GPS initialisation OK
Blockly.Arduino.driss_linkItOne_GPS_initialisation = function() {
  Blockly.Arduino.definitions_['define_LinItOne_GPS'] = '#include <LGPS.h>'; 

  Blockly.Arduino.definitions_['define_gpsSentenceInfoStruct'] = 'gpsSentenceInfoStruct info; //needed to get GPS data';
  Blockly.Arduino.definitions_['define_latitude'] = 'double latitude = 0.00;';
  Blockly.Arduino.definitions_['define_longitude'] = 'double longitude = 0.00;';
  Blockly.Arduino.definitions_['define_lat_format'] = 'String lat_format = "0.00000";'; 
  Blockly.Arduino.definitions_['define_lon_format'] = 'String lon_format = "0.00000";'; 
  Blockly.Arduino.definitions_['define_altitude'] = 'float altitude = 0.00;'; 
  Blockly.Arduino.definitions_['define_dop'] = 'float dop = 100.00; //dilution of precision'; 
  Blockly.Arduino.definitions_['define_geoid'] = 'float geoid = 0.00;'; 
  Blockly.Arduino.definitions_['define_k_speed'] = 'float k_speed = 0.00, m_speed = 0.00; //speed in knots and speed in m/s'; 
  Blockly.Arduino.definitions_['define_track_angle'] = 'float track_angle = 0.00;'; 
  Blockly.Arduino.definitions_['define_fix'] = 'int fix = 0;'; 
  Blockly.Arduino.definitions_['define_time'] = 'String time_format = "00:00:00";'; 
  Blockly.Arduino.definitions_['define_date'] = 'String date_format = "00:00:00";'; 
   Blockly.Arduino.definitions_['define_sat_num'] = 'int sat_num = 0; //number of visible satellites'; 
  

  

  Blockly.Arduino.definitions_['define_setPauseGPS'] = '\n/*Pause pour que traiter les infos GPS */ \n' +
  'void setPauseGPS() {\n'+
  ' delay(3000);\n'+ 
  '}\n';
  Blockly.Arduino.setups_['setup_GPS'] = 'LGPS.powerOn();\n'; 
  var code = 'setPauseGPS();\n';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//LinkIt One  GPS Lire les données OK
Blockly.Arduino.driss_linkItOne_GPS_lireDonnees = function() {

  Blockly.Arduino.definitions_['define_convert_degrees'] = '\n/*Converts degrees from (d)ddmm.mmmm to (d)dd.mmmmmm*/ \n' + 
   'float convert_degrees(String str, boolean dir) {\n'+
   ' double mm, dd;\n'+       
   ' int point = str.indexOf(".");\n'+
   ' dd = str.substring(0, (point - 2)).toFloat();\n'+
   ' mm = str.substring(point - 2).toFloat() / 60.00;\n'+
   ' return (dir ? -1 : 1) * (dd + mm);\n'+
   '}\n';  

  Blockly.Arduino.definitions_['define_doubleToStr'] = '\n/*Converts double to string */ \n' +
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
  
  Blockly.Arduino.definitions_['define_getGPSData'] = '\n/*Gets gps informations */ \n' +
   'void getGPSData(gpsSentenceInfoStruct* info) {\n'+
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

  var code = 'getGPSData(&info);\n';
  return code;
};

//LinkIt One  GPS : Nombre de satellites
Blockly.Arduino.driss_linkItOne_GPS_NbreSatellites = function() {
  Blockly.Arduino.definitions_['define_getSatellitesNbre'] = '\n/*Renvoyer le nombre de satellites captés */ \n' +
  'int getSatellitesNbre() {\n'+
  ' return sat_num;\n'+ 
  '}\n';
  var code = 'getSatellitesNbre()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};













//---- STOCKAGE -------------------------------------------------------------------------------------------------------------

//LinkIt One  SD Card initialisation OK
Blockly.Arduino.driss_linkItOne_SDCard_initialisation = function() {
  Blockly.Arduino.definitions_['define_SD_CARD'] = '#include <LSD.h>'; 
  Blockly.Arduino.definitions_['define_Drv'] = '#define Drv LSD\n ';
  Blockly.Arduino.setups_['setup_SD_Card'] = 'pinMode(10, OUTPUT); //needed for SD card\n'+ 
  '   if(!Drv.begin()) {\n'+
  '     while(true);\n'+
  '   }\n'
  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//LinkIt One  Flash Mem initialisation OK
Blockly.Arduino.driss_linkItOne_FalshMem_initialisation = function() {
  Blockly.Arduino.definitions_['define_FlashMem'] = '#include <LFlash.h>'; 
  Blockly.Arduino.definitions_['define_Drv'] = '#define Drv LFlash  ; // use Internal 10M Flash\n';
  Blockly.Arduino.setups_['setup_FlashMem'] = 'if(!Drv.begin()) {\n'+
  ' while(true);\n'+
  '}\n'
  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//LinkIt One  SD Card / Flash Mem Ecriture dans le fichier OK
Blockly.Arduino.driss_linkItOne_WriteData = function() {
  //var dropdown_drive = this.getFieldValue('DRIVE');
  var value_file_name = Blockly.Arduino.valueToCode(this, 'FILE_NAME', Blockly.Arduino.ORDER_ATOMIC);
  var value_data_to_save = Blockly.Arduino.valueToCode(this, 'DATA_TO_SAVE', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['define_WriteGPSDatas'] = '\n/*Ecriture des données GPS dans le fichier */ \n' +
  'void WriteGPSDatas(const char * filename, uint8_t mode, String data) {\n'+
  ' LFile dataFile = Drv.open(filename, mode);\n'+ 
  ' if (dataFile) {\n'+ 
  '   dataFile.println(data);\n'+ 
  '   dataFile.close();\n'+ 
  ' }\n'+
  '}\n';
  
  var code = 'char* filename = new char['+value_file_name+'.length()+1];\n'+
  'strcpy(filename, '+value_file_name+'.c_str());\n'+
  'WriteGPSDatas(filename, FILE_WRITE, '+value_data_to_save+');\n' ;
  return code;
};