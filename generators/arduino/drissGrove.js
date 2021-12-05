
//Grove Button OK 
Blockly.Arduino.driss_grove_button = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  //code += ';\ndelay(20)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Grove Button relâché OK
Blockly.Arduino.driss_grove_btn_relache = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'delay (100);\n'+'while (digitalRead('+dropdown_pin+')==1) {\n'+'}\n'+'delay (100);\n' ;
  return code;
};

//Grove Switch ON OK
Blockly.Arduino.driss_grove_switch_p_on = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_switch_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Grove Switch OFF OK
Blockly.Arduino.driss_grove_switch_p_off = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_switch_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//Grove MicroSwitch OK
Blockly.Arduino.driss_grove_microswitch = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Grove Light Sensor OK
Blockly.Arduino.driss_grove_light_sensor = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Grove  driss_grove_IR_Receiver  ok
Blockly.Arduino.driss_grove_IR_Receiver = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = '!digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//Grove  driss_grove_IR_Receiver_etat  ok
Blockly.Arduino.driss_grove_IR_Receiver_etat = function() {
  var dropdown_pin = this.getTitleValue('PIN');

//dans include fonction 
Blockly.Arduino.codeFunctions_['define_get_etat_recepteurIR'] = '\n/*lecture de l"état du recepteur IR */ \n' + 
'int get_etat_recepteurIR() {\n'+
' int etat = digitalRead('+dropdown_pin+');\n'+
' return (etat);\n'+
'}\n';

  var code = 'get_etat_recepteurIR()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Grove driss_grove_IR_Receiver_code
Blockly.Arduino.driss_grove_IR_Receiver_code = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var checkbox_option_delete = this.getFieldValue('OPTION_DELETE') == 'TRUE';
  var value_delete_after_time = Blockly.Arduino.valueToCode(this, 'DELETE_AFTER_TIME', Blockly.Arduino.ORDER_ATOMIC);

  //IRREMOTE_MEMORISER_TOUCHE = Memoriser la dernière touche -- IRREMOTE_NE_PAS_MEMORISER = Ne pas mémorise  -- "" (rien) pour lecture Live
  var option= "IRREMOTE_MEMORISER_TOUCHE";
  if(checkbox_option_delete) option = value_delete_after_time;
  
  var irrecv = 'recepteurIR_'+dropdown_pin;
  
  //dans include définition    
  Blockly.Arduino.includes_['define_IRremote'] = "#include <IRremote.h>"; 

  Blockly.Arduino.variables_['var_'+irrecv] = "IRrecv "+irrecv+"("+dropdown_pin+");";

  //Fonction qui retoure le code de la touche appuyée
  Blockly.Arduino.codeFunctions_['define_getCodeTouche'] = '//Fonction qui retoure le code de la touche appuyée\n'+
  'long int getCodeTouche( IRrecv &recepteurIR) {\n'+
  '  long int codeTouche;\n' +
  '  codeTouche = recepteurIR.codeIrReadLong('+option+');\n' +
  '  return(codeTouche);\n' +
  '}\n';

  Blockly.Arduino.setups_['setup_'+irrecv] = irrecv+'.brancher();'; 
  
  
  var code = 'getCodeTouche('+irrecv+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



//Grove Temperature & humidity sensor pro mesure OK
Blockly.Arduino.driss_temperature_and_humidity_sensor = function() {
  var dropdown_grandeur = this.getFieldValue('GRANDEUR');
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_ref = this.getFieldValue('REF');

  var var_dht = 'dht_'+dropdown_pin;

  Blockly.Arduino.includes_['define_DHT'] = '#include <DHT.h>\n'; 
  
  switch(dropdown_ref){
    case "DHT22" : //Blockly.Arduino.definitions_['define_DHTTYPE'] = '#define DHTTYPE DHT22 ; // DHT 22  (AM2302)';
                  Blockly.Arduino.variables_['define_'+var_dht] = 'DHT '+var_dht+'('+dropdown_pin+',DHT22);';
                  break;
    
    case "DHT21" : //Blockly.Arduino.definitions_['define_DHTTYPE'] = '#define DHTTYPE DHT21 ; // DHT 21 (AM2301)';
                  Blockly.Arduino.variables_['define_'+var_dht] = 'DHT '+var_dht+'('+dropdown_pin+',DHT21);';
                  break;
    case "DHT11" : //Blockly.Arduino.definitions_['define_DHTTYPE'] = '#define DHTTYPE DHT11 ; // DHT 11 ';
                  Blockly.Arduino.variables_['define_'+var_dht] = 'DHT '+var_dht+'('+dropdown_pin+',DHT11);';
                  break;
    
  }

  Blockly.Arduino.setups_['setup_get_temperature_and_humidity_sensor_'+dropdown_pin] = var_dht+'.begin();';
  
   switch(dropdown_grandeur) {
   case  "TEMPERATURE" : Blockly.Arduino.codeFunctions_['define_get_temperature'] = '\n/*lecture de la température */ \n' + 
                          'float get_temperature(DHT dht) {\n'+
                          '  float t = dht.readTemperature();\n'+ 
                          '  //Serial.println(t);\n'+       
                          '  return t;\n'+
                          '}\n';
                          break;
   case  "HUMIDITE" : Blockly.Arduino.codeFunctions_['define_get_humidity'] = '\n/*lecture de l"humidité*/ \n' + 
                          'float get_humidity(DHT dht) {\n'+
                          '  float h = dht.readHumidity();\n'+   
                          '  //Serial.println(h);\n'+      
                          '  return h;\n'+
                          '}\n';
                          break;
  }
  
 
  if (dropdown_grandeur == "TEMPERATURE") { code = 'get_temperature('+var_dht+');\n  delay(10)' ; }
  if (dropdown_grandeur == "HUMIDITE") { code = 'get_humidity('+var_dht+');\n  delay(10)' ; }
  //var zone = getEmplacement(this);
  //console.log("DTH zone : "+zone);
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/*
//Grove driss_Barometre_BMP180 OK
Blockly.Arduino.driss_Barometre_BMP180 = function() {
  var dropdown_grandeur = this.getFieldValue('GRANDEUR');


  var var_barometre = 'myBarometer';

  Blockly.Arduino.includes_['define_BMP085'] = '#include <BMP085.h>'; 
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>'; 
  Blockly.Arduino.variables_['define_'+var_barometre] = 'BMP085 '+var_barometre+';';
  


  Blockly.Arduino.setups_['setup_barometre_bmp1280_'] = var_barometre+'.init();';
  
   switch(dropdown_grandeur) {
   case  "TEMPERATURE" : Blockly.Arduino.codeFunctions_['define_get_bmp180_temperature'] = '\n//lecture de la température  \n' + 
                          'float get_bmp180_temperature(BMP085 myBarometer) {\n'+
                          'float t = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT());\n'+       
                          'return t;\n'+
                          '}\n';
                          break;
   case  "PRESSURE" : Blockly.Arduino.codeFunctions_['define_get_bmp180_pressure'] = '\n//lecture de la pression \n' + 
                          'float get_bmp180_pressure(BMP085 myBarometer) {\n'+
                          'float p = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());\n'+       
                          'return p;\n'+
                          '}\n';
                          break;
  case  "ALTITUDE" : Blockly.Arduino.codeFunctions_['define_get_bmp180_altitude'] = '\n//lecture de l"altitude \n' + 
                          'float get_bmp180_altitude(BMP085 myBarometer) {\n'+
                          '//float pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());\n'+  
                          'float a = myBarometer.calcAltitude(101900);\n'+      
                          'return a;\n'+
                          '}\n';
                          break;
  case  "ATM" : Blockly.Arduino.codeFunctions_['define_get_bmp180_atm'] = '\n//lecture de l"atm \n' + 
                          'float get_bmp180_atm(BMP085 myBarometer) {\n'+
                          'float pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());\n'+  
                          'float atm = pressure / 101325;\n'+      
                          'return atm;\n'+
                          '}\n';
                          break;
  }
  
 
  if (dropdown_grandeur == "TEMPERATURE") { code = 'get_bmp180_temperature('+var_barometre+')' ; }
  if (dropdown_grandeur == "PRESSURE") { code = 'get_bmp180_pressure('+var_barometre+')' ; }
  if (dropdown_grandeur == "ALTITUDE") { code = 'get_bmp180_altitude('+var_barometre+')' ; }
  if (dropdown_grandeur == "ATM") { code = 'get_bmp180_atm('+var_barometre+')' ; }
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};
*/

//Grove Gaz sensor MQ5 RATIO OK
Blockly.Arduino.driss_grove_gaz_sensor_mq5_ratio = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var value_r0  = Blockly.Arduino.valueToCode(this, 'R0', Blockly.Arduino.ORDER_ATOMIC);

  //dans include fonction 
  Blockly.Arduino.codeFunctions_['define_get_ratioRSRO'] = '\n/*lecture du ratio RS/R0 */ \n' + 
                          'float get_ratioRSRO() {\n'+
                          ' float sensor_volt;\n'+
                          ' float RS_gas; // Get value of RS in a GAS\n'+
                          ' float ratio; // Get ratio RS_GAS/RS_air\n'+
                          ' int sensorValue = analogRead('+dropdown_pin+');\n'+       
                          ' sensor_volt = (float)sensorValue/1024*5.0;\n'+
                          ' RS_gas = (5.0-sensor_volt)/sensor_volt; // omit *RL\n'+
                          ' ratio = RS_gas/'+value_r0+';  // ratio = RS/R0\n'+
                          ' return (ratio);\n'+
                          '}\n';

 
  
code ='get_ratioRSRO()' ;
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Grove Gaz sensor MQ5 RS OK
Blockly.Arduino.driss_grove_gaz_sensor_mq5_rs = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  
  //dans include fonction 
  Blockly.Arduino.codeFunctions_['define_get_RSMesure'] = '\n/*lecture de la resistance RS du capteur dans le gaz  */ \n' + 
                          'float get_RSMesure() {\n'+
                          ' float sensor_volt;\n'+
                          ' float RS_gas; // Get value of RS in a GAS\n'+
                          ' int sensorValue = analogRead('+dropdown_pin+');\n'+       
                          ' sensor_volt = (float)sensorValue/1024*5.0;\n'+
                          ' RS_gas = (5.0-sensor_volt)/sensor_volt; // omit *RL\n'+
                          ' return (RS_gas);\n'+
                          '}\n';

 
  
code ='get_RSMesure()' ;
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Grove Gaz sensor MQ5 R0 OK
Blockly.Arduino.driss_grove_gaz_sensor_mq5_r0 = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  
  Blockly.Arduino.setups_['setup_gaz_sensor_mq5_r0_'+dropdown_pin] = 'Serial.begin(9600);';
  //dans include fonction 
  Blockly.Arduino.codeFunctions_['define_show_R0Mesure'] = '\n/*lecture de la resistance R0 du capteur dans l air pur  */ \n' + 
                          'void show_R0Mesure() {\n'+
                          ' float sensor_volt;\n'+
                          ' float RS_air; // Get the value of RS via in a clear air\n'+
                          ' float R0;  // Get the value of R0 via in gaz\n'+
                          ' float sensorValue = 0;\n\n'+
                          ' /*--- Get a average data by testing 100 times ---*/\n'+
                          ' for(int x = 0 ; x < 100 ; x++) {\n'+
                          '   sensorValue = sensorValue + analogRead('+dropdown_pin+');\n'+ 
                          ' }\n'+
                          ' sensorValue = sensorValue/100.0;\n'+
                          ' sensor_volt = sensorValue/1024*5.0;\n'+
                          ' RS_air = (5.0-sensor_volt)/sensor_volt; // omit *RL\n'+
                          ' R0 = RS_air/6.5; // The ratio of RS/R0 is 6.5 in a clear air from Graph (Found using WebPlotDigitizer)\n'+
                          ' Serial.print("sensor_volt = ");\n'+
                          ' Serial.print(sensor_volt);\n'+
                          ' Serial.println("V");\n'+
                          ' Serial.print("R0 = ");\n'+
                          ' Serial.println(R0);\n'+
                          ' delay(1000);\n'+
                          '}\n';

 
  
code ='show_R0Mesure();' ;
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Grove moisture sensor  OK
Blockly.Arduino.driss_grove_moisture_sensor = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//Grove PIR Motion Sensor OK
Blockly.Arduino.driss_PIR_motion_sensor = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

    
//Grove Ultrasonic Ranger OK
Blockly.Arduino.driss_grove_ultrasonic_ranger = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_unite = this.getFieldValue('UNITE');
  //dans include définition    
  Blockly.Arduino.includes_['define_Ultrasonic'] = '#include "Ultrasonic.h"\n'; 
  Blockly.Arduino.variables_['var_ultrasonic_'+dropdown_pin ] = 'Ultrasonic ultrasonic_'+dropdown_pin+'('+dropdown_pin+');\n';

  var code = '';
  switch(dropdown_unite){
    case "CM" : code = 'ultrasonic_'+dropdown_pin+'.MeasureInCentimeters()';
                break;
    case "INCH" : code = 'ultrasonic_'+dropdown_pin+'.MeasureInInches()';
                  break;
  }
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Grove - Rotary Angle Sensor
Blockly.Arduino.driss_grove_rotary_angle_sensor = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//Grove - Sound Sensor
Blockly.Arduino.driss_grove_sound_sensor = function() {
  var dropdown_pin = this.getTitleValue('PIN');

 //dans fonctions
  Blockly.Arduino.codeFunctions_['define_getValeurBruit'] = "int getValeurBruit() {\n"+
   " int _bruit=0;\n"+
   "  _bruit = analogRead("+dropdown_pin+");\n"+
   " return (_bruit); \n"+
   "}\n";
  
  //var code = 'analogRead('+dropdown_pin+')';
  var code = 'getValeurBruit()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Grove driss_grove_joystick_clic
Blockly.Arduino.driss_grove_joystick_clic = function() {
  var pin_1 = this.getTitleValue('PIN');
  //Trouver la 2ème entrée analogique (A0 - A1  par exemple)
  var pin_2= parseInt((pin_1[1]).valueOf(), 10)+1;
  pin_2='A'+pin_2;
  
  Blockly.Arduino.variables_['var_joystick_'+pin_1+'_X0' ] = 'int joystick_'+pin_1+'_X0 ;';
  Blockly.Arduino.variables_['var_joystick_'+pin_2+'_Y0' ] = 'int joystick_'+pin_2+'_Y0 ;';

  Blockly.Arduino.setups_['setup_joystick_'+pin_1+'_X0' ] = 'joystick_'+pin_1+'_X0 = analogRead('+pin_1+');';
  Blockly.Arduino.setups_['setup_joystick_'+pin_2+'_Y0' ] = 'joystick_'+pin_2+'_Y0 = analogRead('+pin_2+');';

  var code="analogRead("+pin_1+")>2*joystick_"+pin_1+"_X0";
 return [code, Blockly.Arduino.ORDER_ATOMIC];
}

//Grove driss_grove_joystick_valeurs           
Blockly.Arduino.driss_grove_joystick_valeurs = function() {
  var pin_1 = this.getTitleValue('PIN');
  var dropdown_axe = this.getTitleValue('AXE');
  
  //Trouver la 2ème entrée analogique (A0 - A1  par exemple)
  var pin_2= parseInt((pin_1[1]).valueOf(), 10)+1;
  pin_2='A'+pin_2;
  
  Blockly.Arduino.variables_['var_joystick_'+pin_1+'_X0' ] = 'int joystick_'+pin_1+'_X0 ;';
  Blockly.Arduino.variables_['var_joystick_'+pin_2+'_Y0' ] = 'int joystick_'+pin_2+'_Y0 ;';

  Blockly.Arduino.setups_['setup_joystick_'+pin_1+'_X0' ] = 'joystick_'+pin_1+'_X0 = analogRead('+pin_1+');';
  Blockly.Arduino.setups_['setup_joystick_'+pin_2+'_Y0' ] = 'joystick_'+pin_2+'_Y0 = analogRead('+pin_2+');';

  var code="";
  switch(dropdown_axe){
    case "AXE_X" : code = 'analogRead('+pin_1+')'; break;
    case "AXE_Y" : code = 'analogRead('+pin_2+')'; break;
  }
  //code = 'analogRead('+dropdown_pin+')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
}         


// Grove driss_grove_joystick_direction
Blockly.Arduino.driss_grove_joystick_direction = function() {
  var pin_1 = this.getTitleValue('PIN');
  //var dropdown_dir = this.getTitleValue('DIRECTION');

  //Trouver la 2ème entrée analogique (A0 - A1  par exemple)
  var pin_2= parseInt((pin_1[1]).valueOf(), 10)+1;
  pin_2='A'+pin_2;

  Blockly.Arduino.variables_['var_joystick_'+pin_1+'_X0' ] = 'int joystick_'+pin_1+'_X0 ;';
  Blockly.Arduino.variables_['var_joystick_'+pin_2+'_Y0' ] = 'int joystick_'+pin_2+'_Y0 ;';

  Blockly.Arduino.setups_['setup_joystick_'+pin_1+'_X0' ] = 'joystick_'+pin_1+'_X0 = analogRead('+pin_1+');';
  Blockly.Arduino.setups_['setup_joystick_'+pin_2+'_Y0' ] = 'joystick_'+pin_2+'_Y0 = analogRead('+pin_2+');';
   
  Blockly.Arduino.codeFunctions_['define_getJoystickDirection'] = 'String getJoystickDirection() {\n'+
   ' int dx = analogRead('+pin_1+') - '+'joystick_'+pin_1+'_X0 ; \n'+
   ' int dy = analogRead('+pin_2+') - '+'joystick_'+pin_2+'_Y0 ; \n'+
   ' //lorsque le bouton du Joystick est cliqué la lecture sur x est > 2 *x0\n' +
   ' if((dx+'+'joystick_'+pin_1+'_X0'+')>=2*joystick_'+pin_1+'_X0 ) return(""); \n' +

   ' if(dy>=153) { \n'+
   '  if(dx>=167) {return("HAUT-DROITE");} \n'+
   '  if(dx<=-159) {return("HAUT-GAUCHE");} \n'+
   '  return("HAUT"); \n'+
   ' }; \n'+

   ' if(dy<=-137) { \n'+
   '  if(dx>=167) {return("BAS-DROITE");} \n'+
   '  if(dx<=-159) {return("BAS-GAUCHE");} \n'+
   '  return("BAS"); \n'+
   ' }; \n'+

   ' if(dx>=167) { return("DROITE"); } \n'+
   ' if(dx<=-159) { return("GAUCHE");} \n'+
  
   ' return("CENTRE");   \n'+
   '}\n';

var code ="getJoystickDirection()";

 return [code, Blockly.Arduino.ORDER_ATOMIC];
} 


    
//-Actionneurs ----------------------------------------------------------------------------------------------------------------------------------------

//Grove red LED OK
/*
Blockly.Arduino.driss_grove_led = function() { 
  var dropdown_pin = this.getTitleValue('PIN');
  var stat = Blockly.Arduino.valueToCode(this, 'INPUT', Blockly.Arduino.ORDER_ATOMIC);
  //alert(stat);
  Blockly.Arduino.setups_['setup_led'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+stat+');\n'  //code à insérer dans la loop Arduino


  return code;
};
*/

//Grove red LED OK
Blockly.Arduino.driss_grove_red_led = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_red_led'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};


//Grove white LED OK
Blockly.Arduino.driss_grove_white_led = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_white_led'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

//Grove green LED OK
Blockly.Arduino.driss_grove_green_led = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_green_led'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};


//Grove blue LED OK
Blockly.Arduino.driss_grove_blue_led = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_blue_led'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};


//Grove driss_grove_purple_led OK
Blockly.Arduino.driss_grove_purple_led = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_purple_led'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};


//Grove driss_grove_variable_color OK
Blockly.Arduino.driss_grove_variable_color = function() { 
  var dropdown_pin = this.getTitleValue('PIN');
  var value_fade = Blockly.Arduino.valueToCode(this, 'FADE', Blockly.Arduino.ORDER_UNARY_POSTFIXER_ATOMIC);
  var code = 'digitalWrite('+dropdown_pin+','+value_fade+');\n'  //code à insérer dans la loop Arduino
  return code;
};


//Grove Mini ventilateur OK
Blockly.Arduino.driss_grove_mini_ventilateur = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_mini_ventilateur'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};


//Grove driss_grove_piezo_buzzer ok
Blockly.Arduino.driss_grove_piezo_buzzer = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_piezo_buzzer'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

//Grove driss_grove_IR_emitter ok
Blockly.Arduino.driss_grove_IR_emitter = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var irFrequence = Blockly.Arduino.valueToCode(this, 'IR_FREQUENCE', Blockly.Arduino.ORDER_ATOMIC);
  
  var irsend = 'emetteurIR_'+dropdown_pin;

  //dans include définition    
  Blockly.Arduino.includes_['define_IRremote'] = "#include <IRremote.h>"; 

  Blockly.Arduino.variables_['var_'+irsend] = "IRsend "+irsend+";";

  //code à insérer dans le setup Arduino
  Blockly.Arduino.setups_['setup_enable_'+irsend] = irsend+'.enableIROut('+irFrequence+');'; 
  Blockly.Arduino.setups_['setup_mark'+irsend] = irsend+'.mark(0);'; 

  //code à insérer dans la loop Arduino
  var code = ''  
  return code;
};

//Grove driss_grove_IR_emitter_Code ok
Blockly.Arduino.driss_grove_IR_emitter_Code = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var irFrequence = Blockly.Arduino.valueToCode(this, 'IR_FREQUENCE', Blockly.Arduino.ORDER_ATOMIC);
  var code = Blockly.Arduino.valueToCode(this, 'IR_CODE', Blockly.Arduino.ORDER_ATOMIC);

  var irsend = 'emetteurIR_'+dropdown_pin;
  //dans include définition    
  Blockly.Arduino.includes_['define_IRremote'] = "#include <IRremote.h>";

  Blockly.Arduino.variables_['var_irsend'] = "IRsend "+irsend+";";

   //Fonction qui convertie un Decimal en Hexadécimal
   /*
   Blockly.Arduino.codeFunctions_['define_hexToDec'] = '//Fonction qui converti un HEX en DEC\n'+
   'unsigned int hexToDec(String hexString) {\n'+
   '  unsigned int decValue = 0; \n' +
   '  int nextInt;\n' +
   '  for (int i = 0; i < hexString.length(); i++) {\n' +
   '    nextInt = int(hexString.charAt(i));\n' +
   '    if (nextInt >= 48 && nextInt <= 57) nextInt = map(nextInt, 48, 57, 0, 9);\n' +
   '    if (nextInt >= 65 && nextInt <= 70) nextInt = map(nextInt, 65, 70, 10, 15);\n' +
   '    if (nextInt >= 97 && nextInt <= 102) nextInt = map(nextInt, 97, 102, 10, 15);\n' +
   '    nextInt = constrain(nextInt, 0, 15);\n' +
   '    decValue = (decValue * 16) + nextInt;\n' +
   '  }\n' +
   '  return decValue;\n' +
   '}\n'; 
  */
  var code = irsend+'.sendNEC('+code+', 4*(String('+code+', HEX)).length());\n'+
  'delay(40);\n';
 
  return code;

}


// Telecommandes --------------------------------------------------------------------
//Grove driss_grove_Telecommande_GM_IR38_init
Blockly.Arduino.driss_grove_Telecommande_GM_IR38_init = function() {
  var checkbox_option_delete = this.getFieldValue('OPTION_DELETE') == 'TRUE';
  var value_delete_after_time = Blockly.Arduino.valueToCode(this, 'DELETE_AFTER_TIME', Blockly.Arduino.ORDER_ATOMIC);

  //IRREMOTE_MEMORISER_TOUCHE = Memoriser la dernière touche -- IRREMOTE_NE_PAS_MEMORISER = Ne pas mémorise  -- "" (rien) pour lecture Live
  var option= "IRREMOTE_MEMORISER_TOUCHE";
  if(checkbox_option_delete) option = value_delete_after_time;

  //dans include définition    
  Blockly.Arduino.includes_['define_IRremote'] = "#include <IRremote.h>"; 

  // Dans la zone des définitions
  
  //Création des variables
  Blockly.Arduino.variables_['struct_IR_Code'] =  'typedef struct {\n'+
                                                  ' char* touche;\n'+
                                                  ' long int codeTouche;\n'+
                                                  '} IR_Code;\n';
                                             

  //dans la zone des fonctions globales
  //Fonction qui teste si une touche particulière a été appuyée
  Blockly.Arduino.codeFunctions_['define_testerSiLaToucheEstAppuyee'] = '//Fonction qui teste si une touche particulière a été appuyée\n'+
  'bool testerSiLaToucheEstAppuyee(IR_Code telecommande[], int nbreDeTouche, char* touche, IRrecv &recepteurIR) {\n'+
  '  for( int i=0; i < nbreDeTouche ; i++){\n' +
  '   if(strcmp(touche, telecommande[i].touche) == 0 && recepteurIR.codeIrReadLong('+option+')== telecommande[i].codeTouche  ){return true;}\n' +
  '  }\n' +
  '  return false;\n' +
  '}\n';

  //Fonction qui retoure le code de la touche appuyée
  Blockly.Arduino.codeFunctions_['define_getCodeTouche'] = '//Fonction qui retoure le code de la touche appuyée\n'+
  'long int getCodeTouche( IRrecv &recepteurIR) {\n'+
  '  long int codeTouche;\n' +
  '  codeTouche = recepteurIR.codeIrReadLong('+option+');\n' +
  '  return(codeTouche);\n' +
  '}\n';

  var code = ''  //code à insérer dans la loop Arduino
  return code;
}



//Grove driss_grove_Telecommande_GM_IR38_test_touche 
Blockly.Arduino.driss_grove_Telecommande_GM_IR38_test_touche = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_touche = this.getTitleValue('TOUCHES');
  
  var irrecv = 'recepteurIR_'+dropdown_pin;
  
  //dans include définition    
  Blockly.Arduino.includes_['define_IRremote'] = "#include <IRremote.h>"; 

  //dans la zone variables globales
  Blockly.Arduino.variables_['array_GM_IR38'] =  'IR_Code GM_IR38[21] = { \n'+
  '     { "POWER", 16753245 }, {"MENU",16769565}, {"TEST",16720605}, { "PLUS",16712445}, {"ANNULER",16761405},\n'+
  '     { "RETOUR_RAPIDE",16769055}, {"LECTURE",16754775}, {"AVANCE_RAPIDE",16748655}, {"MOINS",16750695},\n'+
  '     { "C",16756815}, {"0",16738455}, {"1",16724175}, {"2",16718055}, {"3",16743045}, {"4",16716015},\n'+
  '     { "5",16726215}, {"6",16734885}, {"7",16728765}, {"8",16730805}, {"9",16732845} };\n';
  
  Blockly.Arduino.variables_['var_'+irrecv] = "IRrecv "+irrecv+"("+dropdown_pin+");";

  //code à insérer dans le setup Arduino
  Blockly.Arduino.setups_['setup_'+irrecv] = irrecv+'.brancher();'; 

  var code = 'testerSiLaToucheEstAppuyee(GM_IR38, 21, "'+dropdown_touche+'", '+irrecv+')'
  //return code;
  return [code, Blockly.Arduino.ORDER_ATOMIC];

};

//Grove driss_grove_Telecommande_YK_001_test_touche 
Blockly.Arduino.driss_grove_Telecommande_YK_001_test_touche = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_touche = this.getTitleValue('TOUCHES');
  
  var irrecv = 'recepteurIR_'+dropdown_pin;
  
  //dans include définition    
  Blockly.Arduino.includes_['define_IRremote'] = "#include <IRremote.h>"; 

  //dans la zone variables globales
  Blockly.Arduino.variables_['array_YK_001'] =  'IR_Code YK_001[21] = { \n'+
  '     { "POWER", 16753245 }, {"MODE",16736925}, {"VOLUME_OFF",16769565}, { "PREV",16720605}, {"NEXT",16712445},\n'+
  '     { "PLAY-PAUSE",16761405}, {"VOL-",16769055}, {"VOL+",16754775}, {"EQ",16748655},\n'+
  '     { "0",16738455}, { "100+",16750695}, { "ANNULER",16756815}, {"1",16724175}, {"2",16718055}, {"3",16743045}, {"4",16716015},\n'+
  '     { "5",16726215}, {"6",16734885}, {"7",16728765}, {"8",16730805}, {"9",16732845} };\n';
  
  Blockly.Arduino.variables_['var_'+irrecv] = "IRrecv "+irrecv+"("+dropdown_pin+");";

  //code à insérer dans le setup Arduino
  Blockly.Arduino.setups_['setup_'+irrecv] = irrecv+'.brancher();'; 

  var code = 'testerSiLaToucheEstAppuyee(YK_001, 21, "'+dropdown_touche+'", '+irrecv+')'
  //return code;
  return [code, Blockly.Arduino.ORDER_ATOMIC];

};

//Grove driss_grove_Telecommande_Makeblock_test_touche 
Blockly.Arduino.driss_grove_Telecommande_Makeblock_test_touche = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_touche = this.getTitleValue('TOUCHES');
  
  var irrecv = 'recepteurIR_'+dropdown_pin;
  
  //dans include définition    
  Blockly.Arduino.includes_['define_IRremote'] = "#include <IRremote.h>"; 

  //dans la zone variables globales
  Blockly.Arduino.variables_['array_Makeblock'] =  'IR_Code Makeblock[21] = { \n'+
  '     { "A", 16753245 }, {"B",16736925}, {"C",16769565}, { "D",16720605}, {"E",16761405},\n'+
  '     { "F",16756815}, {"HAUT",16712445}, {"BAS",16750695}, {"GAUCHE",16769055},\n'+
  '     { "DROITE",16748655}, { "ROUE_DENTEE",16754775}, { "0",16738455}, {"1",16724175}, {"2",16718055}, {"3",16743045}, {"4",16716015},\n'+
  '     { "5",16726215}, {"6",16734885}, {"7",16728765}, {"8",16730805}, {"9",16732845} };\n';
  
  Blockly.Arduino.variables_['var_'+irrecv] = "IRrecv "+irrecv+"("+dropdown_pin+");";

  //code à insérer dans le setup Arduino
  Blockly.Arduino.setups_['setup_'+irrecv] = irrecv+'.brancher();'; 

  var code = 'testerSiLaToucheEstAppuyee(Makeblock, 21, "'+dropdown_touche+'", '+irrecv+')'
  //return code;
  return [code, Blockly.Arduino.ORDER_ATOMIC];

};

//Grove driss_grove_Infrared_Receiver_read_code
Blockly.Arduino.driss_grove_Infrared_Receiver_read_code = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  
  var irrecv = 'recepteurIR_'+dropdown_pin;
  
  //dans include définition    
  Blockly.Arduino.includes_['define_IRremote'] = "#include <IRremote.h>"; 

  Blockly.Arduino.variables_['var_'+irrecv] = "IRrecv "+irrecv+"("+dropdown_pin+");";

  Blockly.Arduino.setups_['setup_'+irrecv] = irrecv+'.brancher();'; 
  
  
  var code = 'getCodeTouche('+irrecv+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// Moteurs et servomoteurs 


//Grove Servo setPosition OK
Blockly.Arduino.driss_grove_servo_setPosition = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var value_angle = Blockly.Arduino.valueToCode(this, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
  
  var servo = 'servomoteur_'+dropdown_pin;
  //dans include définition    
  //Blockly.Arduino.includes_['define_Servo'] = "#include <Servo.h>"; 
  Blockly.Arduino.includes_['define_ServoTimer2'] = "#include <ServoTimer2.h>";
  //Blockly.Arduino.variables_['var_Servo_'+dropdown_pin] = "Servo "+servo+";";
  Blockly.Arduino.variables_['var_ServoTimer2_'+dropdown_pin] = "ServoTimer2 "+servo+";";

  Blockly.Arduino.codeFunctions_['define_writeServoTimer2'] = '//Envoi d"une largeur d"impulsion au servo\n'+
  'void writeServoTimer2(ServoTimer2 servo, int angle) {\n'+
  '  //pour utiliseer les valeurs de la librairie Servo : \n'+
  '  //remplacer : MIN_PULSE_WIDTH par 544 et MAX_PULSE_WIDTH par 2400\n'+
  '  int puls_width= map(angle, 0, 180, MAX_PULSE_WIDTH, MIN_PULSE_WIDTH); \n' +
  '  servo.write(puls_width);\n' +
  '}\n';


  Blockly.Arduino.setups_['setup_'+servo] = servo+'.attach('+dropdown_pin+');'; //code à insérer dans le setup Arduino
  //var code = servo+'.write('+value_angle+');\n'  //code à insérer dans la loop Arduino
  var code = 'writeServoTimer2('+servo+','+value_angle+');\n'  //code à insérer dans la loop Arduino
  return code;
};

/*
//Grove I2C Motor OK
Blockly.Arduino.driss_grove_I2C_Motor_run = function() {
  var dropdown_motor = this.getTitleValue('MOTOR');
  var i2c_adress = this.getFieldValue('I2C_ADRESS');
  var value_sens_horaire = Blockly.Arduino.valueToCode(this, 'SENS_HORAIRE', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);

 
  var Motor = 'Motor_'+i2c_adress;
  //dans include définition    
  Blockly.Arduino.includes_['define_Grove_I2C_Motor_Driver'] = "#include <Grove_I2C_Motor_Driver.h>"; 
  Blockly.Arduino.definitions_['define_I2C_ADRESS_'+i2c_adress] = "#define I2C_ADRESS_"+i2c_adress+" "+i2c_adress+";";

  Blockly.Arduino.setups_['setup_'+Motor] = Motor+'.begin(I2C_ADDRESS_'+i2c_adress+');'; //code à insérer dans le setup Arduino
  if(value_sens_horaire==true)
    var code = Motor+'.speed(MOTOR'+dropdown_motor+', '+value_vitesse+');';
  else
    var code = Motor+'.speed(MOTOR'+dropdown_motor+', -'+value_vitesse+');';
  return code;
};

*/


// Grove : driss_grove_dc_motor_turn
Blockly.Arduino.driss_grove_dc_motor_turn = function() {
  
  var i2c_adress = Blockly.Arduino.valueToCode(this, 'ADRESSE_I2C', Blockly.Arduino.ORDER_ATOMIC);
  var sens = this.getFieldValue('SENS');
  var vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  var moteur = this.getFieldValue('MOTEUR');

  var code = "";
  

  Blockly.Arduino.includes_['define_Grove_I2C_Motor_Driver'] = "#include <Grove_I2C_Motor_Driver.h>"; 
  Blockly.Arduino.definitions_['define_I2C_ADRESS_'+i2c_adress] = "#define I2C_ADRESS_"+i2c_adress+" "+i2c_adress;
  
  Blockly.Arduino.setups_['setup_I2C_ADRESS_'+i2c_adress] = "Motor.begin(I2C_ADRESS_"+i2c_adress+");" ;


  if(sens=="SENS_HORAIRE")
    var code = 'Motor.speed('+moteur+', '+vitesse+');\n';
  else
    var code = 'Motor.speed('+moteur+', -'+vitesse+');\n';
  return code;
}



// Grove : driss_grove_dc_motor_stop
Blockly.Arduino.driss_grove_dc_motor_stop = function() {
  var i2c_adress = Blockly.Arduino.valueToCode(this, 'ADRESSE_I2C', Blockly.Arduino.ORDER_ATOMIC);
  var moteur = this.getFieldValue('MOTEUR');
 
  Blockly.Arduino.includes_['define_Grove_I2C_Motor_Driver'] = "#include <Grove_I2C_Motor_Driver.h>"; 
  Blockly.Arduino.definitions_['define_I2C_ADRESS_'+i2c_adress] = "#define I2C_ADRESS_"+i2c_adress+" "+i2c_adress;
  
  Blockly.Arduino.setups_['setup_I2C_ADRESS_'+i2c_adress] = "Motor.begin(I2C_ADRESS_"+i2c_adress+");" ;


  var code = "Motor.stop("+moteur+");\n";
  return code;
}

// Grove : driss_grove_step_motor_turn
Blockly.Arduino.driss_grove_step_motor_turn = function() {
  var i2c_adress = Blockly.Arduino.valueToCode(this, 'ADRESSE_I2C', Blockly.Arduino.ORDER_ATOMIC);
  var nbre_pas = Blockly.Arduino.valueToCode(this, 'NBRE_PAS', Blockly.Arduino.ORDER_ATOMIC);
  
  var sens = this.getFieldValue('SENS');
 
  Blockly.Arduino.includes_['define_Grove_I2C_Motor_Driver'] = "#include <Grove_I2C_Motor_Driver.h>"; 
  Blockly.Arduino.definitions_['define_I2C_ADRESS_'+i2c_adress] = "#define I2C_ADRESS_"+i2c_adress+" "+i2c_adress;
  
  Blockly.Arduino.setups_['setup_I2C_ADRESS_'+i2c_adress] = "Motor.begin(I2C_ADRESS_"+i2c_adress+");" ;

 if(sens=="SENS_HORAIRE")
    var code = 'Motor.StepperRun('+nbre_pas+');\n';
  else
    var code = 'Motor.StepperRun(-'+nbre_pas+');\n';
  return code;
}



// Claviers  KeyPad ----------------------------------------------------------------------------------------------------------------------------
// Grove driss_grove_keypad_12_init
Blockly.Arduino.driss_grove_keypad_12_init = function() {
  var row0 = this.getTitleValue('ROW0');
  var row1 = this.getTitleValue('ROW1');
  var row2 = this.getTitleValue('ROW2');
  var row3 = this.getTitleValue('ROW3');
  var col0 = this.getTitleValue('COL0');
  var col1 = this.getTitleValue('COL1'); 
  var col2 = this.getTitleValue('COL2');


  Blockly.Arduino.includes_['define_Keypad'] = "#include <Keypad.h>"; 
  Blockly.Arduino.variables_['define_Keypad_rows'] = "const byte ROWS = 4; //4 lignes\n"; 
  Blockly.Arduino.variables_['define_Keypad_cols'] = "const byte COLS = 3; //3 colonnes\n"; 
  Blockly.Arduino.variables_['define_Keypad_keys'] = "char keys[ROWS][COLS] = {\n"+
                                                        " {'1','2','3'},\n" + 
                                                        " {'4','5','6'},\n" + 
                                                        " {'7','8','9'},\n" + 
                                                        " {'*','0','#'}\n" + 
                                                        "};\n";
  Blockly.Arduino.variables_['define_Keypad_rowPins'] = "byte rowPins[ROWS] = {"+row0+", "+row1+", "+row2+", "+row3+"};\n"; 
  Blockly.Arduino.variables_['define_Keypad_colPins'] = "byte colPins[COLS] = {"+col0+", "+col1+", "+col2+"};\n"; 

  Blockly.Arduino.variables_['define_Keypad_keypad_12'] = "Keypad keypad_12 = Keypad( makeKeymap(keys), rowPins, colPins, ROWS, COLS );\n"; 

  
  
  var code = ''  //code à insérer dans la loop Arduino
  return code;
};


// Grove driss_grove_keypad_12_getkey
Blockly.Arduino.driss_grove_keypad_12_getkey = function() {
  var code = 'keypad_12.getKey()'  ;


  return [code, Blockly.Arduino.ORDER_ATOMIC];
}








//-Communication ----------------------------------------------------------------------------------------------------------------------------------------
//Grove Serial Bluetooth v3.0 OK

Blockly.Arduino.driss_grove_bluetooth_v30_bt_init = function() {
  var dropdown_RX_pin = Blockly.Arduino.valueToCode(this, 'PIN_RX', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_TX_pin = Blockly.Arduino.valueToCode(this, 'PIN_TX', Blockly.Arduino.ORDER_ATOMIC);
  var bt_name = this.getTitleValue('BT_NAME');
  var bt_pinCode = this.getTitleValue('BT_PINCODE');

  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n"; 

  Blockly.Arduino.variables_['define_Commentaire_01'] = "//PINs utilisables pour RX : \n"+
  "//Mega et Mega 2560 : 10, 11, 12, 13, 50, 51, 52, 53, 62, 63, 64, 65, 66, 67, 68, 69\n"+
  "//Leonardo et Micro : utiliser pour RX : 8, 9, 10, 11, 14 (MISO), 15 (SCK), 16 (MOSI)";

 
  Blockly.Arduino.variables_['define_var_bt'] = "SoftwareSerial bt("+dropdown_RX_pin+","+dropdown_TX_pin+"); // RX, TX\n"; 
  Blockly.Arduino.variables_['define_var_time_out'] = "boolean time_out;";
  Blockly.Arduino.variables_['define_var_stringOne'] = 'String stringOne = "";';
  Blockly.Arduino.variables_['define_var_baudrate'] = 'unsigned long baudrate[] = {9600,19200,38400,57600,115200,230400,460800,};';
  Blockly.Arduino.variables_['define_var_code_commande_baudrate'] = 'char code_commande_baudrate[6] ="456789A";';

  //dans fonctions
  Blockly.Arduino.codeFunctions_['define_reponse_bt'] = '\nboolean reponse_bt() {\n'+
  ' if (bt.find("OK")) {\n'+
  '   return true; //le mode répond bien, c"est donc le bon baudrate trouvé\n'+
  ' }\n'+
  ' else {\n'+
  '   return false; // on ne comprend pas la réponse, il faut modifier le baudrate\n'+
  ' }\n'+
  ' //bt.flush();\n'+
  ' //delay(1000);\n'+
  '}\n'; 


  Blockly.Arduino.codeFunctions_['define_setupBlueToothConnection'] = '\nvoid setupBlueToothConnection() {\n'+
   ' const String nom_bluetooth= "'+bt_name+'"; //nom du module Bluetooth\n'+ 
   ' const String code_pin= "'+bt_pinCode+'"; //code pin de sécurité Bluetooth de 4 chiffres\n'+  
   ' boolean baudrate_trouve = false;\n'+ 
   ' byte index_baudrate=0;\n'+ 
   ' while ((baudrate_trouve == false) && (index_baudrate<7 )) {\n'+ 
   '  bt.begin(baudrate[index_baudrate]);\n'+ 
   '  //Serial.println("Baudrate teste="+String(baudrate[index_baudrate]));\n'+ 
   '  bt.print("AT");\n'+ 
   '  if (reponse_bt()) {\n'+ 
   '    baudrate_trouve=true;\n'+ 
   '    //Serial.println("Baudrate trouve="+String(baudrate[index_baudrate]));\n'+ 
   '    //on parametre le module bluetooth en 9600 bauds\n'+ 
   '    bt.print("AT+DEFAULT");\n'+ 
   '    delay(1000);\n'+ 
   '    bt.begin(9600);\n'+ 
   '    delay(1000);\n'+ 
   '    bt.print("AT+NAME"+nom_bluetooth);\n'+
   '    delay(1000);\n'+
   '    bt.print("AT+PIN"+code_pin);\n'+
   '    delay(1000);\n'+
   '    bt.print("AT+ROLESM");\n'+
   '    delay(1000);\n'+
   '    //Serial.println("ModuleBluetooth programme en 9600bds");\n'+
   '  }\n'+
   '  else {\n'+
   '    index_baudrate+=1;\n'+
   '  }\n'+
   ' }\n'+
   ' if (baudrate_trouve == false) {\n'+
   '  //Serial.println("Impossible de dialoguer avec le module Bluetooth!");\n'+
   '  //Serial.println("Vérifier les connexion du module Bluetooth V3.0 sur port D2");\n'+
   ' }\n'+
   '}\n';  

  Blockly.Arduino.codeFunctions_['define_lire_octet'] = "int lire_octet() {\n"+
   " time_out=false;\n"+
   " byte counter=0;\n"+
   " while(bt.available()==0 && !time_out) {\n"+
   "  counter+=1;\n"+
   "  delayMicroseconds(1000); // wait 1 ms\n"+      
   "  if (counter>100) {time_out=true;} //time_out + watchdog !\n"+
   " }\n"+
   " if (!time_out) { return bt.read(); } else { return -1; }\n"+
   "}\n";
  
  Blockly.Arduino.codeFunctions_['define_bt_read'] = 'int bt_read() {\n'+
    ' stringOne = "";\n'+
    ' if (bt.available()>0) {\n'+  
    '   int carac;\n'+
    '   time_out=false;\n'+
    '   do {\n'+
    '      carac=lire_octet();\n'+
    '      if ((carac!=10)&(carac!=13)){stringOne+=char(carac);}\n'+
    '     }\n'+
    '   while ((carac!=10)&(!time_out));\n'+
    '   if (time_out) {\n'+ 
    '      stringOne="";\n'+
    '      return 0;\n'+
    '   }\n'+
    '   return 1;\n'+
    '  }\n'+
    ' return 0;\n'+  
    '}\n';   
  

  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = ''+
  'bt.begin(9600);\n'+
  'setupBlueToothConnection();\n';   
  

  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.driss_grove_bluetooth_v30_bt_available = function() {
  //dans include définition    
  //Rien déjà fait dans : driss_grove_bluetooth_v30_init
  
  //dans fonctions
  //Rien déjà fait dans : driss_grove_bluetooth_v30_init

  //dans setup    
  //Rien déjà fait dans : driss_grove_bluetooth_v30_init
  
  var code = 'bt_read()>0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.driss_grove_bluetooth_v30_bt_read = function() {
  //dans include définition    
  //Rien déjà fait dans : driss_grove_bluetooth_v30_init
  
  //dans setup     
  //Rien déjà fait dans : driss_grove_bluetooth_v30_init

  var code = 'stringOne';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.driss_grove_bluetooth_v30_bt_send = function() {
  var message_to_sent = Blockly.Arduino.valueToCode(this, 'BT_MESSAGE_TO_SEND',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\''; 
  
  var msg = message_to_sent;
  //message_to_sent = message_to_sent.substr(1);
  //message_to_sent = message_to_sent.substr(0,message_to_sent.length-1);
  //alert(message_to_sent);

  //message_to_sent = '"\\r\\n'+message_to_sent+'\\r\\n"';
      //\n= chr(10)  et  \r=chr(13) 
  //dans include définition    
  //Rien déjà fait dans : driss_grove_bluetooth_v30_init
  
  //dans setup     
  //Rien déjà fait dans : driss_grove_bluetooth_v30_init

  //var code = 'bt.println('+message_to_sent+');\n';
  var code = 'bt.println('+msg+');\n';
  return code;
};

/*
Blockly.Arduino.driss_grove_bluetooth_v30_bt_send_number = function() {
  var message_to_sent = Blockly.Arduino.valueToCode(this, 'BT_MESSAGE_TO_SEND',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\''; 
  
  var msg = message_to_sent;
  var code = 'bt.println('+msg+', DEC);\n';
  return code;
};
*/

//Grove RFID driss_grove_rfid_init
/*
Blockly.Arduino.driss_grove_rfid_init = function() {
  var Rx_pin = this.getTitleValue('PIN_RX');
  var Tx_pin = Number(Rx_pin) + 1;

  var rfid = 'rfid_'+Rx_pin+"_"+Tx_pin;
  
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>"; 
  Blockly.Arduino.includes_['define_RFID125'] = "#include <RFID125.h>"; 

  Blockly.Arduino.variables_['var_'+rfid] = "RFID125 "+rfid+";\n"; 
  
  //dans setup    
  Blockly.Arduino.setups_['setup_'+rfid] = rfid+'.brancher('+Rx_pin+', '+Tx_pin+');\n';   
  

  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
*/


//Grove RFID driss_grove_rfid_write_code
Blockly.Arduino.driss_grove_rfid_write_code = function() {
  var code = Blockly.Arduino.valueToCode(this, 'CODE', Blockly.Arduino.ORDER_ATOMIC);
  var Rx_pin = this.getTitleValue('PIN_RX');
  var Tx_pin = Number(Rx_pin) + 1;

  var rfid = 'rfid_'+Rx_pin+"_"+Tx_pin;
  
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>"; 
  Blockly.Arduino.includes_['define_RFID125'] = "#include <RFID125.h>"; 

  Blockly.Arduino.variables_['var_'+rfid] = "RFID125 "+rfid+";\n"; 

  //dans setup    
  Blockly.Arduino.setups_['setup_'+rfid] = rfid+'.brancher('+Rx_pin+', '+Tx_pin+');\n'; 

  var code = rfid+'.ecrireCode("'+code+'");\n';
  return code;
}

//Grove RFID driss_grove_rfid_write_list_of_codes
Blockly.Arduino.driss_grove_rfid_write_list_of_codes = function() {
  var Rx_pin = this.getTitleValue('PIN_RX');
  var Tx_pin = Number(Rx_pin) + 1;
  var code_array = Blockly.Arduino.valueToCode(this, 'CODES', Blockly.Arduino.ORDER_ATOMIC);

  var rfid = 'rfid_'+Rx_pin+"_"+Tx_pin;
  
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>"; 
  Blockly.Arduino.includes_['define_RFID125'] = "#include <RFID125.h>"; 

  Blockly.Arduino.variables_['var_'+rfid] = "RFID125 "+rfid+";\n"; 

  //dans setup    
  Blockly.Arduino.setups_['setup_'+rfid] = rfid+'.brancher('+Rx_pin+', '+Tx_pin+');\n'; 

  var liste_of_codes = '"';
  for(var i=0; i<code_array.length; i++){
    if(code_array[i] != '{' && code_array[i] != '}' && code_array[i] != ",") {
      liste_of_codes += code_array[i];
    }
  }
  liste_of_codes += '"';

  var code = rfid+'.ecrireCodes('+liste_of_codes+');\n';
 
  return code;
}

//Grove RFID driss_grove_rfid_read_tag
Blockly.Arduino.driss_grove_rfid_read_tag = function() {
  var Rx_pin = this.getTitleValue('PIN_RX');
  var Tx_pin = Number(Rx_pin) + 1;
  var rfid = 'rfid_'+Rx_pin+"_"+Tx_pin;

  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>"; 
  Blockly.Arduino.includes_['define_RFID125'] = "#include <RFID125.h>"; 

  Blockly.Arduino.variables_['var_'+rfid] = "RFID125 "+rfid+";\n"; 

  //dans setup    
  Blockly.Arduino.setups_['setup_'+rfid] = rfid+'.brancher('+Rx_pin+', '+Tx_pin+');\n'; 

  var code = rfid+'.lireCode()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}

//Grove RFID driss_grove_rfid_test_tag_code
Blockly.Arduino.driss_grove_rfid_test_tag_code = function() {
  var code = Blockly.Arduino.valueToCode(this, 'CODE', Blockly.Arduino.ORDER_ATOMIC);
  var Rx_pin = this.getTitleValue('PIN_RX');
  var Tx_pin = Number(Rx_pin) + 1;
  var rfid = 'rfid_'+Rx_pin+"_"+Tx_pin;

  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>"; 
  Blockly.Arduino.includes_['define_RFID125'] = "#include <RFID125.h>"; 

  Blockly.Arduino.variables_['var_'+rfid] = "RFID125 "+rfid+";\n"; 

  //dans setup    
  Blockly.Arduino.setups_['setup_'+rfid] = rfid+'.brancher('+Rx_pin+', '+Tx_pin+');\n'; 

  var code = rfid+'.testerCode('+code+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}


// Grove driss_grove_RF_433MHz_send_text
Blockly.Arduino.driss_grove_RF_433MHz_send_text = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var text  = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);

  //var RF_emetteur = 'rf_'+dropdown_pin;
  var RF_emetteur = 'rf_emetteur';

  //dans include définition    
  Blockly.Arduino.includes_['define_VirtualWire'] = "#include <VirtualWire.h>";  

  //dans setup    
  Blockly.Arduino.setups_['setup_'+RF_emetteur] = 'brancherEmetteur('+dropdown_pin+');\n'; 

  var code = 'emettreTexte('+text+');\n';
  return code;
}


// Grove driss_grove_RF_433MHz_receive_text
Blockly.Arduino.driss_grove_RF_433MHz_receive_text = function() {
  var dropdown_pin = this.getFieldValue('PIN');

  var RF_recepteur = 'rf_recepteur';

  //dans include définition    
  Blockly.Arduino.includes_['define_VirtualWire'] = "#include <VirtualWire.h>";  

  //dans setup    
  Blockly.Arduino.setups_['setup_'+RF_recepteur] = 'brancherRecepteur('+dropdown_pin+');\n'; 

  var code = 'recevoirTexte()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}

// Grove driss_grove_RF_433MHz_receive_number
Blockly.Arduino.driss_grove_RF_433MHz_receive_number = function() {
  var dropdown_pin = this.getFieldValue('PIN');

  var RF_recepteur = 'rf_recepteur';

  //dans include définition    
  Blockly.Arduino.includes_['define_VirtualWire'] = "#include <VirtualWire.h>";  

  //dans setup    
  Blockly.Arduino.setups_['setup_'+RF_recepteur] = 'brancherRecepteur('+dropdown_pin+');\n'; 

  var code = 'recevoirNombre()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}



// Grove driss_grove_RF_433MHz_send_number
Blockly.Arduino.driss_grove_RF_433MHz_send_number = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var number  = Blockly.Arduino.valueToCode(this, 'NUMBER', Blockly.Arduino.ORDER_ATOMIC);

  //var RF_emetteur = 'rf_'+dropdown_pin;
  var RF_emetteur = 'rf_emetteur';

  //dans include définition    
  Blockly.Arduino.includes_['define_VirtualWire'] = "#include <VirtualWire.h>";   

  //dans setup    
  Blockly.Arduino.setups_['setup_'+RF_emetteur] = 'brancherEmetteur('+dropdown_pin+');\n'; 

  var code = 'emettreNombre('+number+');\n';
  return code;
}



//NFC Tag
//Grove RFID driss_grove_nfc_init


//-Afficheur Grove - LCD ----------------------------------------------------------------------------------------------------------------------------------------

//Grove Grove - driss_grove_lcd_rgb_power
Blockly.Arduino.driss_grove_lcd_rgb_power = function() {
  var dropdown_stat = this.getFieldValue('STAT');

  Blockly.Arduino.includes_['define_rgb_lcd'] = '#include <rgb_lcd.h>';
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>';

  Blockly.Arduino.variables_['var_lcd_rgb'] = 'rgb_lcd lcd_rgb;';
  
  Blockly.Arduino.setups_['setup_lcd_rgb'] = 'lcd_rgb.begin(16, 2);\n';
  
  var code = 'lcd_rgb';
  if(dropdown_stat==="ON"){
    code += '.display();\n';
  } else {
    code += '.noDisplay();\n';
  }
  return code;
};

//Grove Grove - driss_grove_lcd_rgb_clean
Blockly.Arduino.driss_grove_lcd_rgb_clean = function() {
  var dropdown_stat = this.getFieldValue('STAT');

  Blockly.Arduino.includes_['define_rgb_lcd'] = '#include <rgb_lcd.h>';
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>';

  Blockly.Arduino.variables_['var_lcd_rgb'] = 'rgb_lcd lcd_rgb;';
  
  Blockly.Arduino.setups_['setup_lcd_rgb'] = 'lcd_rgb.begin(16, 2);\n';
  
  var code = 'lcd_rgb.clear();\n';
  
  return code;
};



//Grove Grove - driss_grove_lcd_rgb_go_cursor_to
Blockly.Arduino.driss_grove_lcd_rgb_go_cursor_to = function() {
 
  var value_ligne = Blockly.Arduino.valueToCode(this, 'LCD_LIG', Blockly.Arduino.ORDER_ATOMIC);
  var value_colonne = Blockly.Arduino.valueToCode(this, 'LCD_COL', Blockly.Arduino.ORDER_ATOMIC);

  //dans include définition    
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.includes_['define_rgb_lcd'] = '#include <rgb_lcd.h>';

  Blockly.Arduino.variables_['var_lcd_rgb'] = 'rgb_lcd lcd_rgb;\n';

  Blockly.Arduino.setups_['setup_lcd_rgb'] = ''+
  ' lcd_rgb.begin(16, 2);   // set up the LCD s number of columns and rows:\n';

  var code = 'lcd_rgb.setCursor('+value_colonne+', '+value_ligne+');\n';
  return code;
};

//Grove Grove - driss_grove_lcd_rgb_go_to_col_lig
Blockly.Arduino.driss_grove_lcd_rgb_go_to_col_lig = function() {
 
  var value_ligne = this.getTitleValue('LCD_LIG');
  var value_colonne = this.getTitleValue('LCD_COL');

  //dans include définition    
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.includes_['define_rgb_lcd'] = '#include <rgb_lcd.h>';

  Blockly.Arduino.variables_['var_lcd_rgb'] = 'rgb_lcd lcd_rgb;\n';

  Blockly.Arduino.setups_['setup_lcd_rgb'] = ''+
  ' lcd_rgb.begin(16, 2);   // set up the LCD s number of columns and rows:\n';

  var code = 'lcd_rgb.setCursor('+value_colonne+', '+value_ligne+');\n';
  return code;
};



//Grove Grove - driss_grove_lcd_rgb_write_row
Blockly.Arduino.driss_grove_lcd_rgb_write_row = function() {
  var value_ligne_0 = Blockly.Arduino.valueToCode(this, 'LCD_L1', Blockly.Arduino.ORDER_ATOMIC);
  var value_ligne_1 = Blockly.Arduino.valueToCode(this, 'LCD_L2', Blockly.Arduino.ORDER_ATOMIC);

  //dans include définition    
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.includes_['define_rgb_lcd'] = '#include <rgb_lcd.h>';

  
  Blockly.Arduino.variables_['var_lcd_rgb'] = 'rgb_lcd lcd_rgb;\n';

  Blockly.Arduino.setups_['setup_lcd_rgb'] = ''+
  ' lcd_rgb.begin(16, 2);   // Définir le nombre de lignes et de colonnes du LCD:\n';

  var code = 'lcd_rgb.setCursor(0, 0);\n' +
  'lcd_rgb.print('+value_ligne_0+');\n' +
  'lcd_rgb.setCursor(0, 1);\n' +
  'lcd_rgb.print('+value_ligne_1+');\n' ;
  return code;
};

//Grove Grove - driss_grove_lcd_rgb_scroll
Blockly.Arduino.driss_grove_lcd_rgb_scroll = function() {
  var dropdown_dir = this.getFieldValue('DIRECTION');
  var nbre = Blockly.Arduino.valueToCode(this, 'NBRE', Blockly.Arduino.ORDER_ATOMIC);
  var delay = Blockly.Arduino.valueToCode(this, 'DELAY', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['define_rgb_lcd'] = '#include <rgb_lcd.h>\n';
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>\n';

  Blockly.Arduino.variables_['var_lcd_rgb'] = 'rgb_lcd lcd_rgb;';
  
  Blockly.Arduino.setups_['setup_lcd_rgb'] = 'lcd_rgb.begin(16, 2);\n';
  
  var code = ''+
  'for (int i = 0; i < '+nbre+'; i++) {\n'+
  ' lcd_rgb';
  if(dropdown_dir==="LEFT"){
    code += '.scrollDisplayLeft();\n';
  } else if(dropdown_dir==="RIGHT"){
    code += '.scrollDisplayRight();\n';
  } else {
    code += '.autoscroll();\n';
  }
  code += ' delay('+delay+');\n';
  code += '}\n';
  return code;
};

//Grove Grove - driss_grove_lcd_rgb_color
Blockly.Arduino.driss_grove_lcd_rgb_color = function() {
  var coul_R = Blockly.Arduino.valueToCode(this, 'RED', Blockly.Arduino.ORDER_ATOMIC);
  var coul_V = Blockly.Arduino.valueToCode(this, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
  var coul_B = Blockly.Arduino.valueToCode(this, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['define_lcd_rgb'] = '#include <rgb_lcd.h>\n';
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>\n';

  Blockly.Arduino.variables_['var_lcd_rgb'] = 'rgb_lcd lcd_rgb;';
  
  Blockly.Arduino.setups_['setup_lcd_rgb'] = 'lcd_rgb.begin(16, 2);\n';
  
  var code = 'lcd_rgb.setRGB('+coul_R+','+coul_V+','+coul_B+');\n';
  return code;
};


//Grove Grove - driss_grove_lcd_rgb_set_retro_color
Blockly.Arduino.driss_grove_lcd_rgb_set_retro_color = function() {
  var retro_color = this.getTitleValue('LCD_RGB_COLOR'); 
  var code = "";
  switch (retro_color) {
    case "RED" : code = 'lcd_rgb.setRGB(255, 0, 0);\n'; break;
    case "GREEN" : code = 'lcd_rgb.setRGB(0, 255, 0);\n'; break;
    case "BLUE" : code = 'lcd_rgb.setRGB(0, 0, 255);\n'; break;
    case "WHITE" : code = 'lcd_rgb.setRGB(255, 255, 255);\n'; break;
    case "BLACK" : code = 'lcd_rgb.setRGB(0, 0, 0);\n'; break;

    default : code = 'lcd_rgb.setRGB(128, 128, 128);\n'; break;
  }

  Blockly.Arduino.includes_['define_rgb_lcd'] = '#include <rgb_lcd.h>\n';
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>\n';

  Blockly.Arduino.variables_['var_lcd_rgb'] = 'rgb_lcd lcd_rgb;';
  
  Blockly.Arduino.setups_['setup_lcd_rgb'] = 'lcd_rgb.begin(16, 2);\n';
  
  return code;
};



//-OLED 96x96 ----------------------------------------------------------------------------------------------------------------------------------------


//Grove Ecran OLED 96x96 init OK
Blockly.Arduino.driss_grove_oled_96x96_init = function() {

  var version = this.getFieldValue('VERSION');
    //dans include définition    
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.includes_['define_SeeedGrayOLED'] = '#include <SeeedGrayOLED.h>';
  Blockly.Arduino.includes_['define_avr_pgmspace'] = '#include <avr/pgmspace.h>';
  
  //dans fonctions
  Blockly.Arduino.codeFunctions_['define_oled_96x96_displayTexte'] = '\nvoid Oled96x96_DisplayTexte(int lig, int col, String texte, int grayLevel) {\n'+
   ' char* txt =  new char[texte.length()+1];\n'+
   ' strcpy(txt, texte.c_str());\n'+
   ' SeeedGrayOled.setTextXY(lig,col);  //position du curseur Lig - Col\n'+ 
   //' SeeedGrayOled.setGrayLevel(niveauDeGris); //niveau de gris 0-15.\n'+ 
   ' SeeedGrayOled.setGrayLevel(grayLevel);\n'+ 
   ' SeeedGrayOled.putString(txt);\n'+ 
   '}\n';    

   Blockly.Arduino.codeFunctions_['define_oled_96x96_setCursor'] = '\nvoid Oled96x96_SetCursorAt(int lig, int col) {\n'+
   ' SeeedGrayOled.setTextXY(lig,col);  //Positionner le curseur : Ligne - Colonne\n'+ 
   '}\n';    

   Blockly.Arduino.codeFunctions_['define_oled_96x96_putString'] = '\nvoid Oled96x96_putString(String texte, int grayLevel) {\n'+
   ' char* txt =  new char[texte.length()+1];\n'+
   ' strcpy(txt, texte.c_str());\n'+
   //' SeeedGrayOled.setContrastLevel(255); \n'+ 
   ' SeeedGrayOled.setGrayLevel(grayLevel);\n'+
   ' SeeedGrayOled.putString(txt);\n'+ 
   '}\n'; 

   Blockly.Arduino.codeFunctions_['define_oled_96x96_putNumber'] = '\nvoid Oled96x96_putNumber(long n, int grayLevel) {\n'+
   //' SeeedGrayOled.setContrastLevel(255); \n'+ 
   ' SeeedGrayOled.setGrayLevel(grayLevel);\n'+
   ' SeeedGrayOled.putNumber(n);\n'+ 
   '}\n'; 

   Blockly.Arduino.codeFunctions_['define_oled_96x96_drawLogo'] = '\nvoid Oled96x96_drawLogo(unsigned char logo[], int grayLevel) {\n'+
   //' SeeedGrayOled.setContrastLevel(255); //Reglage du contraste\n'+ 
   ' SeeedGrayOled.setGrayLevel(grayLevel);\n'+
   ' SeeedGrayOled.drawBitmap(logo,96*96/8);\n'+ 
   '}\n'; 

   Blockly.Arduino.codeFunctions_['define_oled_96x96_clearScreen'] = '\nvoid Oled96x96_clearScreen() {\n'+
   ' SeeedGrayOled.clearDisplay();     //Effacer l"affichage.\n'+ 
   '}\n'; 

  Blockly.Arduino.setups_['setup_oled_96x96'] = 'Wire.begin();\n'+
  ' SeeedGrayOled.init('+version+');  //initializer L"écran OLED 2 versions :SH1107G ou SSD1327 \n'+
  ' SeeedGrayOled.clearDisplay();     //Effacer l"affichage.\n'+
  ' SeeedGrayOled.setNormalDisplay(); //Mode normal\n'+
  ' SeeedGrayOled.setVerticalMode();  // Mode vertical pour afficher le texte\n';
  var code = '';

  return code;
};


//Grove Ecran OLED 96x96 show text at XY OK
Blockly.Arduino.driss_grove_oled_96x96_show_text_at_XY = function() {
  var value_oled_96x96_texte = Blockly.Arduino.valueToCode(this, 'OLED_96x96_TEXTE', Blockly.Arduino.ORDER_ATOMIC);
  var value_oled_96x96_lig = Blockly.Arduino.valueToCode(this, 'OLED_96x96_LIG', Blockly.Arduino.ORDER_ATOMIC);
  var value_oled_96x96_col = Blockly.Arduino.valueToCode(this, 'OLED_96x96_COL', Blockly.Arduino.ORDER_ATOMIC);


  var code = 'Oled96x96_DisplayTexte('+value_oled_96x96_lig+', '+value_oled_96x96_col+', '+value_oled_96x96_texte+', 15) ;\n';
  return code;
};

//Grove Ecran OLED 96x96 set cursor at xy OK
Blockly.Arduino.driss_grove_oled_96x96_set_cursot_at_XY = function() {
  var value_oled_96x96_lig = Blockly.Arduino.valueToCode(this, 'OLED_96x96_LIG', Blockly.Arduino.ORDER_ATOMIC);
  var value_oled_96x96_col = Blockly.Arduino.valueToCode(this, 'OLED_96x96_COL', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'Oled96x96_SetCursorAt('+value_oled_96x96_lig+', '+value_oled_96x96_col+') ;\n';
  return code;
};

//Grove Ecran OLED 96x96 show text OK
Blockly.Arduino.driss_grove_oled_96x96_show_text = function() {
  var value_oled_96x96_texte = Blockly.Arduino.valueToCode(this, 'OLED_96x96_TEXTE', Blockly.Arduino.ORDER_ATOMIC);
  var grayLevel = Blockly.Arduino.valueToCode(this, 'GRAY_LEVEL', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Oled96x96_putString('+value_oled_96x96_texte+', '+grayLevel+') ;\n';
  return code;
};

//Grove Ecran OLED 96x96 show text OK
Blockly.Arduino.driss_grove_oled_96x96_show_number = function() {
  var value_oled_96x96_number = Blockly.Arduino.valueToCode(this, 'OLED_96x96_NUMBER', Blockly.Arduino.ORDER_ATOMIC);
  var grayLevel = Blockly.Arduino.valueToCode(this, 'GRAY_LEVEL', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'Oled96x96_putNumber('+value_oled_96x96_number+', '+grayLevel+') ;\n';
  return code;
};

//Grove Ecran OLED 96x96 show logo OK
Blockly.Arduino.driss_grove_oled_96x96_show_logo = function() {
  var Oled96x96_drawLogo = Blockly.Arduino.valueToCode(this, 'OLED_96x96_LOGO', Blockly.Arduino.ORDER_ATOMIC);
  var grayLevel = Blockly.Arduino.valueToCode(this, 'GRAY_LEVEL', Blockly.Arduino.ORDER_ATOMIC);
  
  Oled96x96_drawLogo = Oled96x96_drawLogo.substr(1);
   Oled96x96_drawLogo = Oled96x96_drawLogo.substr(0,Oled96x96_drawLogo.length-1);
  var code = 'static const unsigned char logo[] PROGMEM = \n'+
             '{\n'+
             Oled96x96_drawLogo +'\n'+
             '};\n' +
             'Oled96x96_drawLogo(logo, '+grayLevel+') ;\n';
  return code;
};

//Grove Ecran OLED 96x96 clear screen OK
Blockly.Arduino.driss_grove_oled_96x96_clear_screen = function() {
  var code = 'Oled96x96_clearScreen() ;\n';
  return code;
};


//-Afficheur Grove - 4-Digit Display ----------------------------------------------------------------------------------------------------------------------------------------


//Grove Grove - 4-Digit Display
Blockly.Arduino.driss_grove_4_digit_display_displayDigits = function() {
  var dropdown_CLK_pin = this.getTitleValue('PIN_CLK');
  var dropdown_DIO_pin = this.getTitleValue('PIN_DIO');

  var value_digit_1 = Blockly.Arduino.valueToCode(this, 'DIGIT_1', Blockly.Arduino.ORDER_ATOMIC);
  var value_digit_2 = Blockly.Arduino.valueToCode(this, 'DIGIT_2', Blockly.Arduino.ORDER_ATOMIC);
  var value_digit_3 = Blockly.Arduino.valueToCode(this, 'DIGIT_3', Blockly.Arduino.ORDER_ATOMIC);
  var value_digit_4 = Blockly.Arduino.valueToCode(this, 'DIGIT_4', Blockly.Arduino.ORDER_ATOMIC);

  var display = 'display_'+dropdown_CLK_pin+'_'+dropdown_DIO_pin ;
  //var data = 'data_'+dropdown_CLK_pin+'_'+dropdown_DIO_pin ;
  
  //dans include définition    
  Blockly.Arduino.includes_['define_TM1637Display'] = '#include <TM1637Display.h>';
  
  Blockly.Arduino.variables_['var_'+display] = 'TM1637Display '+display+'('+dropdown_CLK_pin+', '+dropdown_DIO_pin+');';
  //Blockly.Arduino.variables_['var_'+data] = 'uint8_t '+data+'[] = { 0xff, 0xff, 0xff, 0xff };';
  
  //dans fonctions
  Blockly.Arduino.codeFunctions_['define_4_digits_displayDigits'] = '//Fonction qui affiche encode les nombres avant de les afficher \n'+
  'void displayDigits(TM1637Display _display, uint8_t digit_1, uint8_t digit_2, uint8_t digit_3, uint8_t digit_4) {\n'+
  ' uint8_t data[] = { 0xff, 0xff, 0xff, 0xff };\n'+
  ' data[0] = _display.encodeDigit(digit_1);\n'+
  ' data[1] = _display.encodeDigit(digit_2);\n'+
  ' data[2] = _display.encodeDigit(digit_3);\n'+
  ' data[3] = _display.encodeDigit(digit_4);\n'+
  ' _display.setSegments(data, 4, 0);\n'+
  '}\n';    

   
   var code = 'displayDigits('+display+', '+value_digit_1+', '+value_digit_2+', '+value_digit_3+', '+value_digit_4+');\n';

  return code;
};

//Grove Grove - 4-Digit Display  displayNumber
Blockly.Arduino.driss_grove_4_digit_display_displayNumberDec = function() {
  var dropdown_CLK_pin = this.getTitleValue('PIN_CLK');
  var dropdown_DIO_pin = this.getTitleValue('PIN_DIO');

  var value_number = Blockly.Arduino.valueToCode(this, 'NUMBER', Blockly.Arduino.ORDER_ATOMIC);
  var position = Blockly.Arduino.valueToCode(this, 'POSITION_DIGIT', Blockly.Arduino.ORDER_ATOMIC);
  var nbreDigits = Blockly.Arduino.valueToCode(this, 'NBRE_DIGITS', Blockly.Arduino.ORDER_ATOMIC);
  var checkbox_zeros = this.getFieldValue('ZEROS') == 'TRUE';


  var display = 'display_'+dropdown_CLK_pin+'_'+dropdown_DIO_pin ;
  var data = 'data_'+dropdown_CLK_pin+'_'+dropdown_DIO_pin ;
  
  //dans include définition    
  Blockly.Arduino.includes_['define_TM1637Display'] = '#include <TM1637Display.h>';
  Blockly.Arduino.variables_['var_'+display] = 'TM1637Display '+display+'('+dropdown_CLK_pin+', '+dropdown_DIO_pin+');';
  
  var code = display+'.showNumberDec('+value_number+', '+checkbox_zeros+', '+nbreDigits+', '+position+');\n';

  return code;
};


//Grove Grove - 4-Digit Display  digitOnOff
Blockly.Arduino.driss_grove_4_digit_display_digitsOnOff = function() {
  var dropdown_CLK_pin = this.getTitleValue('PIN_CLK');
  var dropdown_DIO_pin = this.getTitleValue('PIN_DIO');

  var checkbox_digit_1_a = this.getFieldValue('DIGIT_1_A') == 'TRUE';
  var checkbox_digit_1_b = this.getFieldValue('DIGIT_1_B') == 'TRUE';
  var checkbox_digit_1_c = this.getFieldValue('DIGIT_1_C') == 'TRUE';
  var checkbox_digit_1_d = this.getFieldValue('DIGIT_1_D') == 'TRUE';
  var checkbox_digit_1_e = this.getFieldValue('DIGIT_1_E') == 'TRUE';
  var checkbox_digit_1_f = this.getFieldValue('DIGIT_1_F') == 'TRUE';
  var checkbox_digit_1_g = this.getFieldValue('DIGIT_1_G') == 'TRUE';
  var checkbox_digit_2_a = this.getFieldValue('DIGIT_2_A') == 'TRUE';
  var checkbox_digit_2_b = this.getFieldValue('DIGIT_2_B') == 'TRUE';
  var checkbox_digit_2_c = this.getFieldValue('DIGIT_2_C') == 'TRUE';
  var checkbox_digit_2_d = this.getFieldValue('DIGIT_2_D') == 'TRUE';
  var checkbox_digit_2_e = this.getFieldValue('DIGIT_2_E') == 'TRUE';
  var checkbox_digit_2_f = this.getFieldValue('DIGIT_2_F') == 'TRUE';
  var checkbox_digit_2_g = this.getFieldValue('DIGIT_2_G') == 'TRUE';
  var checkbox_digit_3_a = this.getFieldValue('DIGIT_3_A') == 'TRUE';
  var checkbox_digit_3_b = this.getFieldValue('DIGIT_3_B') == 'TRUE';
  var checkbox_digit_3_c = this.getFieldValue('DIGIT_3_C') == 'TRUE';
  var checkbox_digit_3_d = this.getFieldValue('DIGIT_3_D') == 'TRUE';
  var checkbox_digit_3_e = this.getFieldValue('DIGIT_3_E') == 'TRUE';
  var checkbox_digit_3_f = this.getFieldValue('DIGIT_3_F') == 'TRUE';
  var checkbox_digit_3_g = this.getFieldValue('DIGIT_3_G') == 'TRUE';
  var checkbox_digit_4_a = this.getFieldValue('DIGIT_4_A') == 'TRUE';
  var checkbox_digit_4_b = this.getFieldValue('DIGIT_4_B') == 'TRUE';
  var checkbox_digit_4_c = this.getFieldValue('DIGIT_4_C') == 'TRUE';
  var checkbox_digit_4_d = this.getFieldValue('DIGIT_4_D') == 'TRUE';
  var checkbox_digit_4_e = this.getFieldValue('DIGIT_4_E') == 'TRUE';
  var checkbox_digit_4_f = this.getFieldValue('DIGIT_4_F') == 'TRUE';
  var checkbox_digit_4_g = this.getFieldValue('DIGIT_4_G') == 'TRUE';

  var digit_1b = "0b0";
  var id1=0;
  if (checkbox_digit_1_g) {digit_1b += "1"; id1+=64;} else digit_1b += "0";
  if (checkbox_digit_1_f) {digit_1b += "1"; id1+=32;} else digit_1b += "0";
  if (checkbox_digit_1_e) {digit_1b += "1"; id1+=16;} else digit_1b += "0";
  if (checkbox_digit_1_d) {digit_1b += "1"; id1+=08;} else digit_1b += "0";
  if (checkbox_digit_1_c) {digit_1b += "1"; id1+=04;} else digit_1b += "0";
  if (checkbox_digit_1_b) {digit_1b += "1"; id1+=02;} else digit_1b += "0";
  if (checkbox_digit_1_a) {digit_1b += "1"; id1+=01;} else digit_1b += "0";
  
  var id2=0;
  var digit_2b = "0b0";
  if (checkbox_digit_2_g) {digit_2b += "1"; id2+=64;} else digit_2b += "0";
  if (checkbox_digit_2_f) {digit_2b += "1"; id2+=32;} else digit_2b += "0";
  if (checkbox_digit_2_e) {digit_2b += "1"; id2+=16;} else digit_2b += "0";
  if (checkbox_digit_2_d) {digit_2b += "1"; id2+=8;} else digit_2b += "0";
  if (checkbox_digit_2_c) {digit_2b += "1"; id2+=4;} else digit_2b += "0";
  if (checkbox_digit_2_b) {digit_2b += "1"; id2+=2;} else digit_2b += "0";
  if (checkbox_digit_2_a) {digit_2b += "1"; id2+=1;} else digit_2b += "0";

  var id3=0;
  var digit_3b = "0b0";
  if (checkbox_digit_3_g) {digit_3b += "1"; id3+=64;} else digit_3b += "0";
  if (checkbox_digit_3_f) {digit_3b += "1"; id3+=32;} else digit_3b += "0";
  if (checkbox_digit_3_e) {digit_3b += "1"; id3+=16;} else digit_3b += "0";
  if (checkbox_digit_3_d) {digit_3b += "1"; id3+=8;} else digit_3b += "0";
  if (checkbox_digit_3_c) {digit_3b += "1"; id3+=4;} else digit_3b += "0";
  if (checkbox_digit_3_b) {digit_3b += "1"; id3+=2;} else digit_3b += "0";
  if (checkbox_digit_3_a) {digit_3b += "1"; id3+=1;} else digit_3b += "0";

  var id4=0;
  var digit_4b = "0b0";
  if (checkbox_digit_4_g) {digit_4b += "1"; id4+=64;} else digit_4b += "0";
  if (checkbox_digit_4_f) {digit_4b += "1"; id4+=32;} else digit_4b += "0";
  if (checkbox_digit_4_e) {digit_4b += "1"; id4+=16;} else digit_4b += "0";
  if (checkbox_digit_4_d) {digit_4b += "1"; id4+=8;} else digit_4b += "0";
  if (checkbox_digit_4_c) {digit_4b += "1"; id4+=4;} else digit_4b += "0";
  if (checkbox_digit_4_b) {digit_4b += "1"; id4+=2;} else digit_4b += "0";
  if (checkbox_digit_4_a) {digit_4b += "1"; id4+=1;} else digit_4b += "0";

  var digits = digit_1b+', '+digit_2b+', '+digit_3b+', '+digit_4b;
  var id=id1+'_'+id2+'_'+id3+'_'+id4;
  var segments = 'seg_'+dropdown_CLK_pin+'_'+dropdown_DIO_pin+'_'+id ;
  var display = 'display_'+dropdown_CLK_pin+'_'+dropdown_DIO_pin ;
  
  //dans include définition    
  Blockly.Arduino.includes_['define_TM1637Display'] = '#include <TM1637Display.h>';
  Blockly.Arduino.variables_['var_'+display] = 'TM1637Display '+display+'('+dropdown_CLK_pin+', '+dropdown_DIO_pin+');';
  
  Blockly.Arduino.variables_['var_'+segments] = 'const uint8_t '+segments+'[] = {'+digits+'};';
     
   var code = display+'.setSegments('+segments+');\n';

  return code;
};

//Grove  driss_grove_4_digit_display_setBrightness
Blockly.Arduino.driss_grove_4_digit_display_setBrightness = function() {
  var dropdown_CLK_pin = this.getTitleValue('PIN_CLK');
  var dropdown_DIO_pin = this.getTitleValue('PIN_DIO');
   var luminosite = Blockly.Arduino.valueToCode(this, 'LUMINOSITE', Blockly.Arduino.ORDER_ATOMIC);
   var display = 'display_'+dropdown_CLK_pin+'_'+dropdown_DIO_pin ;
   var code =  display+'.setBrightness('+luminosite+');\n';
  
  return code;
};


//  Biométrie ----------------------------------------------------------------------------------------------------------------------------------





//Grove : driss_grove_finger_clip_heart_begin
Blockly.Arduino.driss_grove_finger_clip_heart_begin = function() {
  var adresse_I2C = Blockly.Arduino.valueToCode(this, 'ADRESSE_I2C',Blockly.Arduino.ORDER_UNARY_POSTFIX);
  

  Blockly.Arduino.includes_['define_Wire'] = "#include <Wire.h>"; 
  Blockly.Arduino.setups_['setup_I2C_ADRESS_'+adresse_I2C] = "Wire.begin();" ;
  
  var code = "Wire.requestFrom("+adresse_I2C+", 1);\n";
  return code;
};



// Grove : driss_grove_finger_clip_heart_pouls_dispo
Blockly.Arduino.driss_grove_finger_clip_heart_pouls_dispo = function() {

  var code = "Wire.available()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Grove : driss_grove_finger_clip_heart_rate
Blockly.Arduino.driss_grove_finger_clip_heart_rate = function() {
  
  var code = 'Wire.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//Grove : driss_grove_gsr_read
Blockly.Arduino.driss_grove_gsr_read = function() {
  var pin = this.getTitleValue('PIN');
  
  Blockly.Arduino.includes_['define_Wire'] = "#include <Wire.h>"; 
  //Blockly.Arduino.setups_['setup_I2C_ADRESS_'+adresse_I2C] = "Wire.begin();" ;
  
  var code = 'analogRead('+pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Grove : driss_grove_gsr_read
Blockly.Arduino.driss_grove_anemometre = function() {
  var pin = this.getTitleValue('PIN');
  
  Blockly.Arduino.includes_['define_Wire'] = "#include <Wire.h>"; 
  //Blockly.Arduino.setups_['setup_I2C_ADRESS_'+adresse_I2C] = "Wire.begin();" ;
  
  var code = 'analogRead('+pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//Grove Button OK
Blockly.Arduino.driss_grove_anemometre = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_unite = this.getTitleValue('UNITE');
  


  Blockly.Arduino.includes_['define_PinChangeInt'] = "#include <PinChangeInt.h>"; 


 Blockly.Arduino.variables_['var_datedernierPassage'] = 'unsigned long datedernierPassage;';
 Blockly.Arduino.variables_['var_long derniereSeconde'] = 'long derniereSeconde;';
 Blockly.Arduino.variables_['var_secondes'] = 'byte secondes;';
 Blockly.Arduino.variables_['var_force'] = 'int force;';
 Blockly.Arduino.variables_['var_nombreTourSec'] = 'float nombreTourSec (0);';
 Blockly.Arduino.variables_['var_nombreTourMin'] = 'float nombreTourMin (0);';
 Blockly.Arduino.variables_['var_vitesseVentms'] = 'float vitesseVentms(0);';
 Blockly.Arduino.variables_['var_vitesseVentkmh'] = 'float vitesseVentkmh(0);';
 Blockly.Arduino.variables_['var_comptageILS'] = 'volatile unsigned int comptageILS = 0;';
 Blockly.Arduino.variables_['var_dureeAntiRebond'] = 'const unsigned long dureeAntiRebond = 1;';


 Blockly.Arduino.codeFunctions_['define_interruptionILS'] = '//comptage de l ILS \n'+
  'void interruptionILS() {\n'+
  ' static unsigned long dateDernierChangement = 0;\n'+
  ' unsigned long date = millis();\n'+
  ' if ((date - dateDernierChangement) > dureeAntiRebond) {\n'+
  '   comptageILS++;\n'+
  '   dateDernierChangement = date;\n'+
  ' }\n'+
  '}\n';   

  Blockly.Arduino.codeFunctions_['define_mesureventms'] = '// mesure de la vitesse du vent instantanée (m/s) \n'+
  'float mesureventms() {\n'+
  ' float deltaTime = millis() - datedernierPassage;\n'+
  ' deltaTime = deltaTime/1000.0; //Converti en secondes\n'+
  ' nombreTourSec = (float)comptageILS / deltaTime;\n'+
  ' nombreTourMin = nombreTourSec * 60;\n'+
  ' vitesseVentms = 3.1416 * 7 * nombreTourMin * 1 / 3000; // formule pour le calcul de la vitesse du vent\n'+
  ' comptageILS = 0; // Réinitialise et commence à incrémenter pour le nouveau comptage\n'+
  ' datedernierPassage = millis();\n'+
  ' return (vitesseVentms);\n'+
  '}\n';  

  Blockly.Arduino.codeFunctions_['define_incrementation_metre_par_seconde'] = ' \n'+
  'float incrementation_metre_par_seconde() {\n'+
  ' if(millis() - derniereSeconde >= 1000)\n'+
  '   {\n'+
  '     derniereSeconde += 1000;\n'+
  '     mesureventms();\n'+
  '   }\n'+
  '  delay(100);\n'+
  '  return(vitesseVentms);\n'+
  '}\n';  


  Blockly.Arduino.codeFunctions_['define_mesureventkmh'] = '// mesure de la vitesse du vent instantanée (km/h) \n'+
  'float mesureventkmh() {\n'+
  ' float deltaTime = millis() - datedernierPassage;\n'+
  ' deltaTime = deltaTime/1000.0; //Converti en secondes\n'+
  ' nombreTourSec = (float)comptageILS / deltaTime;\n'+
  ' nombreTourMin = nombreTourSec * 60;\n'+
  ' vitesseVentkmh = 3.1416 * 7 * nombreTourMin * 1 * 0.036 / 30; // formule pour le calcul de la vitesse du vent\n'+
  ' comptageILS = 0; // Réinitialise et commence à incrémenter pour le nouveau comptage\n'+
  ' datedernierPassage = millis();\n'+
  ' return (vitesseVentkmh);\n'+
  '}\n';  

  Blockly.Arduino.codeFunctions_['define_incrementation_kilometre_par_heure'] = ' \n'+
  'float incrementation_kilometre_par_heure() {\n'+
  ' if(millis() - derniereSeconde >= 1000)\n'+
  '   {\n'+
  '     derniereSeconde += 1000;\n'+
  '     mesureventkmh();\n'+
  '   }\n'+
  '  delay(100);\n'+
  '  return(vitesseVentkmh);\n'+
  '}\n';  


  Blockly.Arduino.setups_['setup_anemometre_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);\n'+
  'secondes = 0;\n'+
  'derniereSeconde = millis();\n'+
  'PCintPort::attachInterrupt(2, interruptionILS, FALLING);\n';

  var code = '';
  switch (dropdown_unite) {
    case "M_S" : code = 'incrementation_metre_par_seconde()'; break;
    case "KM_H" : code = 'incrementation_kilometre_par_heure()'; break;
  }


  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


// Grove : driss_grove_RTC_initialiser_et_memoriser_date
Blockly.Arduino.driss_grove_RTC_initialiser_et_memoriser_date = function() {
  var day = Blockly.Arduino.valueToCode(this, 'DAY', Blockly.Arduino.ORDER_ATOMIC);
  var mont = Blockly.Arduino.valueToCode(this, 'MONT', Blockly.Arduino.ORDER_ATOMIC);
  var year = Blockly.Arduino.valueToCode(this, 'YEAR', Blockly.Arduino.ORDER_ATOMIC);
  var hour = Blockly.Arduino.valueToCode(this, 'HOUR', Blockly.Arduino.ORDER_ATOMIC);
  var minute = Blockly.Arduino.valueToCode(this, 'MINUTE', Blockly.Arduino.ORDER_ATOMIC);
  var seconde = Blockly.Arduino.valueToCode(this, 'SECONDE', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['define_Wire'] = "#include <Wire.h>"; 
  Blockly.Arduino.includes_['define_DS1307'] = "#include <DS1307.h>"; 
  Blockly.Arduino.variables_['var_DS1307_clock'] = 'DS1307 clock;';

   Blockly.Arduino.setups_['setup_RTC'] = 'clock.brancher();\n'+
                                          '  clock.ecrireHeure('+hour+','+minute+','+seconde+');\n'+
                                          '  clock.ecrireDate('+day+','+mont+','+year+');\n';

  var code = "";
  return code;
};


// Grove : driss_grove_RTC_Definir_une_date
Blockly.Arduino.driss_grove_RTC_Definir_une_date = function() {
  var day = Blockly.Arduino.valueToCode(this, 'DAY', Blockly.Arduino.ORDER_ATOMIC);
  var mont = Blockly.Arduino.valueToCode(this, 'MONT', Blockly.Arduino.ORDER_ATOMIC);
  var year = Blockly.Arduino.valueToCode(this, 'YEAR', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'clock.ecrireDate('+day+','+mont+','+year+');\n';
   return code;
};

// Grove : driss_grove_RTC_Definir_une_heure
Blockly.Arduino.driss_grove_RTC_Definir_une_heure = function() {
  var hour = Blockly.Arduino.valueToCode(this, 'HOUR', Blockly.Arduino.ORDER_ATOMIC);
  var minute = Blockly.Arduino.valueToCode(this, 'MINUTE', Blockly.Arduino.ORDER_ATOMIC);
  var seconde = Blockly.Arduino.valueToCode(this, 'SECONDE', Blockly.Arduino.ORDER_ATOMIC);
 

  var code = 'clock.ecrireHeure('+hour+','+minute+','+seconde+');\n';
  return code;
};


// Grove : driss_grove_RTC_Lire_donnee
Blockly.Arduino.driss_grove_RTC_Lire_donnee = function() {
  var element = this.getFieldValue('ELEMENT');
 
  var code ='';
  switch (element){
    case 'DAY' : code = 'clock.lireJour()'; break;
    case 'MONT' : code = 'clock.lireMois()'; break;
    case 'YEAR' : code = 'clock.lireAnnee()'; break;
    case 'HOUR' : code = 'clock.lireHeures()'; break;
    case 'MINUTE' : code = 'clock.lireMinutes()'; break;
    case 'SECONDE' : code = 'clock.lireSecondes()'; break;
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

