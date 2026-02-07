

//driss_Virtuino_bloc_principal 
/*
Blockly.Arduino.driss_Virtuino_bloc_principal = function() {
  var rx = this.getFieldValue('RX');
  var tx = this.getFieldValue('TX');
  var debug = this.getFieldValue('DEBUG') == 'TRUE';
  var vitesse = this.getFieldValue('VITESSE');
  var statements_elements_virtuino = Blockly.Arduino.statementToCode(this, 'ELEMENTS_VIRTUINO');

 //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>";
  Blockly.Arduino.includes_['define_VirtuinoBluetooth'] = "#include <VirtuinoCM.h>"; 
  
  Blockly.Arduino.definitions_['define_V_memory_count'] = "#define V_memory_count 32"; 
  Blockly.Arduino.definitions_['define_M_memory_count'] = "#define M_memory_count 255"; 

  Blockly.Arduino.variables_['define_Commentaire_01'] = "//arduino RX pin=2  arduino TX pin=3    connect the arduino RX pin to esp8266 module TX pin   -  connect the arduino TX pin to esp8266 module RX pin";
 
  Blockly.Arduino.variables_['define_var_espSerial'] = "SoftwareSerial espSerial("+rx+","+tx+"); // RX, TX"; 
  Blockly.Arduino.variables_['define_var_VirtuinoBluetooth'] = "VirtuinoCM virtuino;";
  Blockly.Arduino.variables_['define_var_Virtuino_V'] = "float V[V_memory_count];";
  Blockly.Arduino.variables_['define_var_Virtuino_M'] = "float M[M_memory_count];";
  Blockly.Arduino.variables_['define_var_Debug'] = "boolean debug = "+debug+";";

  Blockly.Arduino.codeFunctions_['define_ronReceived'] = "\nvoid onReceived(char variableType, uint8_t variableIndex, String valueAsText){\n"+
  "if (variableType=='V'){\n"+
  "  float value = valueAsText.toFloat();        // convert the value to float. The valueAsText have to be numerical\n"+
  "  if (variableIndex<V_memory_count) V[variableIndex]=value;              // copy the received value to arduino V memory array\n"+
  "  }\n"+
  "}\n"; 

 Blockly.Arduino.codeFunctions_['define_onRequested'] = "\nString onRequested(char variableType, uint8_t variableIndex){\n"+
  "if (variableType=='V') {\n"+
  "  if (variableIndex<V_memory_count) return  String(V[variableIndex]);   // return the value of the arduino V memory array\n"+
  "  }\n"+
  "return \"\";\n"+
  "}\n"; 

  Blockly.Arduino.codeFunctions_['define_virtuinoRun'] = "\nvoid virtuinoRun(){\n"+
  "  while (espSerial.available()) {\n"+
  "    char tempChar=espSerial.read();\n"+
  "    if (tempChar==CM_START_CHAR) {               // a new command is starting...\n"+
  "      virtuino.readBuffer=CM_START_CHAR;     // copy the new command to the virtuino readBuffer\n"+
  "      virtuino.readBuffer+=espSerial.readStringUntil(CM_END_CHAR);\n"+
  "      virtuino.readBuffer+=CM_END_CHAR;\n"+
  "      if (debug) Serial.println('Command= '+virtuino.readBuffer);\n"+
  "      String* response= virtuino.getResponse();\n"+
  "      if (debug) Serial.println('Response : '+*response);\n"+
  "      espSerial.print(*response);\n"+
  "      break;\n"+
  "    }\n"+
  "  }\n"+
  "}\n";

   Blockly.Arduino.codeFunctions_['define_vDelay'] = "\nvoid vDelay(int delayInMillis){\n"+
  "  long t=millis()+delayInMillis;while (millis()<t) virtuinoRun();\n"+
  "}\n";

 
  //alert(this.getSurroundParent().getInputTargetBlock("STAT"));
  //alert(this.getInputTargetBlock("STAT"));

  //dans setup  
  Blockly.Arduino.setups_['setup_mySerialVirtuino'] ='';
  if(debug)  Blockly.Arduino.setups_['setup_mySerialVirtuino'] ='Serial.begin(9600);\n  while (!Serial) continue;\n';
  Blockly.Arduino.setups_['setup_mySerialVirtuino'] += 
  '  espSerial.begin('+vitesse+');\n'+
  '  espSerial.setTimeout(50);\n'+
  '  virtuino.begin(onReceived,onRequested,256);\n';   
  


  var code = 'virtuinoRun();\n'+
  'vDelay(1000);';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//------------------------------------------------------------------------------


//driss_Virtuino_bloc_principal_complet2 
Blockly.Arduino.driss_Virtuino_bloc_principal_complet2 = function() {
  var rx = this.getFieldValue('RX');
  var tx = this.getFieldValue('TX');
  var debug = this.getFieldValue('DEBUG') == 'TRUE';
  var vitesse = this.getFieldValue('VITESSE');
  var mode = this.getFieldValue('MODE');
  var statements_elements_virtuino = Blockly.Arduino.statementToCode(this, 'ELEMENTS_VIRTUINO');
  var statements_elements_loop = Blockly.Arduino.statementToCode(this, 'CODE_LOUPE');

 //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>";
  Blockly.Arduino.includes_['define_VirtuinoBluetooth'] = "#include <VirtuinoCM.h>"; 
  
  Blockly.Arduino.definitions_['define_V_memory_count'] = "#define V_memory_count 32"; 
  Blockly.Arduino.definitions_['define_M_memory_count'] = "#define M_memory_count 255"; 

  Blockly.Arduino.variables_['define_Commentaire_01'] = "//arduino RX pin=2  arduino TX pin=3    connect the arduino RX pin to esp8266 module TX pin   -  connect the arduino TX pin to esp8266 module RX pin";
 
  Blockly.Arduino.variables_['define_var_espSerial'] = "SoftwareSerial espSerial("+rx+","+tx+"); // RX, TX"; 
  Blockly.Arduino.variables_['define_var_VirtuinoBluetooth'] = "VirtuinoCM virtuino;";
  Blockly.Arduino.variables_['define_var_Virtuino_V'] = "float V[V_memory_count];";
  Blockly.Arduino.variables_['define_var_Virtuino_M'] = "float M[M_memory_count];";
  Blockly.Arduino.variables_['define_var_Debug'] = "boolean debug = "+debug+";";

  Blockly.Arduino.codeFunctions_['define_ronReceived'] = "\nvoid onReceived(char variableType, uint8_t variableIndex, String valueAsText){\n"+
  "if (variableType=='V'){\n"+
  "  float value = valueAsText.toFloat();        // convert the value to float. The valueAsText have to be numerical\n"+
  "  if (variableIndex<V_memory_count) V[variableIndex]=value;              // copy the received value to arduino V memory array\n"+
  "  }\n"+
  "}\n"; 

 Blockly.Arduino.codeFunctions_['define_onRequested'] = "\nString onRequested(char variableType, uint8_t variableIndex){\n"+
  "if (variableType=='V') {\n"+
  "  if (variableIndex<V_memory_count) return  String(V[variableIndex]);   // return the value of the arduino V memory array\n"+
  "  }\n"+
  "return \"\";\n"+
  "}\n"; 

  Blockly.Arduino.codeFunctions_['define_virtuinoRun'] = "\nvoid virtuinoRun(){\n"+
  "  while (espSerial.available()) {\n"+
  "    char tempChar=espSerial.read();\n"+
  "    if (tempChar==CM_START_CHAR) {               // a new command is starting...\n"+
  "      virtuino.readBuffer=CM_START_CHAR;     // copy the new command to the virtuino readBuffer\n"+
  "      virtuino.readBuffer+=espSerial.readStringUntil(CM_END_CHAR);\n"+
  "      virtuino.readBuffer+=CM_END_CHAR;\n"+
  "      if (debug) Serial.println('Command= '+virtuino.readBuffer);\n"+
  "      String* response= virtuino.getResponse();\n"+
  "      if (debug) Serial.println('Response : '+*response);\n"+
  "      espSerial.print(*response);\n"+
  "      break;\n"+
  "    }\n"+
  "  }\n"+
  "}\n";

   Blockly.Arduino.codeFunctions_['define_vDelay'] = "\nvoid vDelay(int delayInMillis){\n"+
  "  long t=millis()+delayInMillis;while (millis()<t) virtuinoRun();\n"+
  "}\n";

 
  //alert(this.getSurroundParent().getInputTargetBlock("STAT"));
  //alert(this.getInputTargetBlock("STAT"));

  //dans setup  
  Blockly.Arduino.setups_['setup_mySerialVirtuino'] ='';
  if(debug)  Blockly.Arduino.setups_['setup_mySerialVirtuino'] ='Serial.begin(9600);\n  while (!Serial) continue;\n';
  Blockly.Arduino.setups_['setup_mySerialVirtuino'] += 
  '  espSerial.begin('+vitesse+');\n'+
  '  espSerial.setTimeout(50);\n'+
  '  virtuino.begin(onReceived,onRequested,256);\n';   
  
//alert (mode);
  var code = "";
  
  code += 'virtuinoRun();\n'+
          'vDelay(1000);\n'+
          statements_elements_virtuino +
          statements_elements_loop;

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
*/

//--------------------------------------------------------------------------------------------

//driss_Virtuino_bloc_principal_complet 
Blockly.Arduino.driss_Virtuino_bloc_principal_complet = function() {
  var statements_bluetooth = Blockly.Arduino.statementToCode(this, 'VIRTUINO_BLUETOOTH');
  var statements_elements_virtuino = Blockly.Arduino.statementToCode(this, 'ELEMENTS_VIRTUINO');
  var statements_elements_loop = Blockly.Arduino.statementToCode(this, 'CODE_LOUPE');

 //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>";
  Blockly.Arduino.includes_['define_VirtuinoBluetooth'] = "#include <VirtuinoCM.h>"; 
  
  Blockly.Arduino.definitions_['define_V_memory_count'] = "#define V_memory_count 32"; 
  Blockly.Arduino.definitions_['define_M_memory_count'] = "#define M_memory_count 255"; 
  
  //Blockly.Arduino.variables_['define_var_espSerial'] = "SoftwareSerial espSerial("+rx+","+tx+"); // RX, TX"; 
  Blockly.Arduino.variables_['define_var_VirtuinoBluetooth'] = "VirtuinoCM virtuino;";
  Blockly.Arduino.variables_['define_var_Virtuino_V'] = "float V[V_memory_count];";
  Blockly.Arduino.variables_['define_var_Virtuino_M'] = "float M[M_memory_count];";
  Blockly.Arduino.variables_['define_var_Debug'] = "boolean debug = true;";

  Blockly.Arduino.codeFunctions_['define_ronReceived'] = "\nvoid onReceived(char variableType, uint8_t variableIndex, String valueAsText){\n"+
  "if (variableType=='V'){\n"+
  "  float value = valueAsText.toFloat();        // convert the value to float. The valueAsText have to be numerical\n"+
  "  if (variableIndex<V_memory_count) V[variableIndex]=value;              // copy the received value to arduino V memory array\n"+
  "  }\n"+
  "}\n"; 

 Blockly.Arduino.codeFunctions_['define_onRequested'] = "\nString onRequested(char variableType, uint8_t variableIndex){\n"+
  "if (variableType=='V') {\n"+
  "  if (variableIndex<V_memory_count) return  String(V[variableIndex]);   // return the value of the arduino V memory array\n"+
  "  }\n"+
  "return \"\";\n"+
  "}\n"; 

  Blockly.Arduino.codeFunctions_['define_virtuinoRun'] = "\nvoid virtuinoRun(){\n"+
  "  while (espSerial.available()) {\n"+
  "    char tempChar=espSerial.read();\n"+
  "    if (tempChar==CM_START_CHAR) {               // a new command is starting...\n"+
  "      virtuino.readBuffer=CM_START_CHAR;     // copy the new command to the virtuino readBuffer\n"+
  "      virtuino.readBuffer+=espSerial.readStringUntil(CM_END_CHAR);\n"+
  "      virtuino.readBuffer+=CM_END_CHAR;\n"+
  "      if (debug) Serial.println('Command= '+virtuino.readBuffer);\n"+
  "      String* response= virtuino.getResponse();\n"+
  "      if (debug) Serial.println('Response : '+*response);\n"+
  "      espSerial.print(*response);\n"+
  "      break;\n"+
  "    }\n"+
  "  }\n"+
  "}\n";

   Blockly.Arduino.codeFunctions_['define_vDelay'] = "\nvoid vDelay(int delayInMillis){\n"+
  "  long t=millis()+delayInMillis;while (millis()<t) virtuinoRun();\n"+
  "}\n";

 
  //dans setup  
  Blockly.Arduino.setups_['setup_Virtuino'] ='';
  //if(debug)  
    //Blockly.Arduino.setups_['setup_Virtuino'] ='Serial.begin('+vitesse+');\n  while (!Serial) continue;\n';
  
  Blockly.Arduino.setups_['setup_Virtuino'] +=  '  virtuino.begin(onReceived,onRequested,256);\n';  
  
//alert (mode);
  var code = "";
  
  code += 'virtuinoRun();\n'+
          'vDelay(1000);\n'+
          statements_elements_virtuino +
          statements_elements_loop;

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//driss_virtuino_bluetooth 
Blockly.Arduino.driss_virtuino_bluetooth = function() {
  var rx = this.getFieldValue('RX');
  var tx = this.getFieldValue('TX');
  //var debug = this.getFieldValue('DEBUG') == 'TRUE';
  var vitesse = this.getFieldValue('VITESSE');

  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>";
  
  Blockly.Arduino.variables_['define_virtuino_bluetooth_Commentaire_01'] = "//arduino RX pin=2  arduino TX pin=3";
  Blockly.Arduino.variables_['define_virtuino_bluetooth_Commentaire_02'] = "//connect the arduino RX pin to esp8266 module TX pin";
  Blockly.Arduino.variables_['define_virtuino_bluetooth_Commentaire_03'] = "//connect the arduino TX pin to esp8266 module RX pin";
  Blockly.Arduino.variables_['define_var_espSerial'] = "SoftwareSerial espSerial("+rx+","+tx+");  // SoftwareSerial mySerial (rxPin, txPin);\n"; 
  
  Blockly.Arduino.variables_['define_var_Debug'] = "boolean debug = true;";

  Blockly.Arduino.setups_['setup_SoftwareSerial'] ='Serial.begin('+vitesse+');\n  while (!Serial) continue;\n';
  
  Blockly.Arduino.setups_['setup_SoftwareEspSerial'] = 
  '  espSerial.begin('+vitesse+');\n'+
  '  espSerial.setTimeout(50);\n';   

  var code = "";
  return code;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
}

//------------------------------------------------------------------------------
/*
//driss_Virtuino_read_capteur
Blockly.Arduino.driss_Virtuino_read_capteur = function() {

  var name = Blockly.Arduino.valueToCode(this, 'INPUT_IN', Blockly.Arduino.ORDER_ATOMIC);

  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
*/
//-----------------------------------------------------


//driss_Virtuino_led
Blockly.Arduino.driss_Virtuino_led = function() {
  var color = this.getFieldValue('COLOR');
  var pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_white_led'+pin] = 'pinMode('+pin+', OUTPUT);';
  var code = '';
  return code;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//-----------------------------------------------------
//driss_Virtuino_input_logique
Blockly.Arduino.driss_Virtuino_input_logique = function() {
  var sensor = this.getFieldValue('SENSOR_1');
  //alert (sensor);
  var color = this.getFieldValue('COLOR');
  var dropdown_pin = this.getFieldValue('PIN');

  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = '';

  return code;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
};



//driss_Virtuino_input_numerique
Blockly.Arduino.driss_Virtuino_input_numerique = function() {
  var sensor = this.getFieldValue('SENSOR_1');
  var virtuel_pin  = Blockly.Arduino.valueToCode(this, 'VIRTUEL_PIN', Blockly.Arduino.ORDER_ATOMIC);
  var color = this.getFieldValue('COLOR');
  var dropdown_pin = this.getFieldValue('PIN');

 //Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = '';
  
  switch (sensor){
    
      case "TEMPERATURE_DHT11" :  var var_dht = 'dht_'+dropdown_pin;
                                  Blockly.Arduino.includes_['define_DHT'] = '#include <DHT.h>\n';
                                  Blockly.Arduino.variables_['define_'+var_dht] = 'DHT '+var_dht+'('+dropdown_pin+',DHT11);';
                                  Blockly.Arduino.setups_['setup_get_temperature_and_humidity_sensor_'+dropdown_pin] = var_dht+'.begin();';
                                  Blockly.Arduino.codeFunctions_['define_get_temperature'] = '\n/*lecture de la température */ \n' + 
                                      'float get_temperature(DHT dht) {\n'+
                                      '  float t = dht.readTemperature();\n'+ 
                                      '  //Serial.println(t);\n'+       
                                      '  return t;\n'+
                                      '}\n';
                                  code += "V["+virtuel_pin+"] = get_temperature("+var_dht+");\ndelay(10);\n" ;
                              break;
      case "HUMIDITY_DHT11" :  var var_dht = 'dht_'+dropdown_pin;
                              Blockly.Arduino.includes_['define_DHT'] = '#include <DHT.h>\n';
                              Blockly.Arduino.variables_['define_'+var_dht] = 'DHT '+var_dht+'('+dropdown_pin+',DHT11);';
                             Blockly.Arduino.variables
                              Blockly.Arduino.setups_['setup_get_temperature_and_humidity_sensor_'+dropdown_pin] = var_dht+'.begin();';
                              Blockly.Arduino.codeFunctions_['define_get_humidity'] = '\n/*lecture de l"humidité*/ \n' + 
                                  'float get_humidity(DHT dht) {\n'+
                                  '  float h = dht.readHumidity()/100;\n'+   
                                  '  //Serial.println(h);\n'+      
                                  '  return h;\n'+
                                  '}\n';
                                  code += "V["+virtuel_pin+"] = get_humidity("+var_dht+");\ndelay(10);\n" ;
                          break;

      case "ULTRASONS" :  var var_ultrasonic = 'ultrasonic_'+dropdown_pin; 
                          Blockly.Arduino.includes_['define_Ultrasonic'] = '#include <Ultrasonic.h>\n';
                          Blockly.Arduino.variables_['var_'+var_ultrasonic] = 'Ultrasonic '+var_ultrasonic+'('+dropdown_pin+');';
                          
      
                          code += "V["+virtuel_pin+"] = "+var_ultrasonic+".MeasureInCentimeters();\n" ;
                      break;
  

  }

  return code;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//-----------------------------------------------------

//driss_Virtuino_input_analogique
Blockly.Arduino.driss_Virtuino_input_analogique = function() {
  var sensor = this.getFieldValue('SENSOR_1');
  var virtuel_pin  = Blockly.Arduino.valueToCode(this, 'VIRTUEL_PIN', Blockly.Arduino.ORDER_ATOMIC);
  var color = this.getFieldValue('COLOR');
  var dropdown_pin = this.getFieldValue('PIN');

  
  var code = '';

  switch (sensor){
    case "TEMPERATURE_V12" :  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
                              var var_pin = dropdown_pin;
                              //var value_r0 = 100000;
                              //var value_B = 4275;
                              Blockly.Arduino.includes_['define_Duinoedu_MathPlus'] = '#include <Duinoedu_MathPlus.h>\n';
                              
                              //Blockly.Arduino.codeFunctions_['define_get_temperature_Sensor_V1_2'] = '\n/*lecture de la température avrec le capteur Grove Température V1.2*/ \n' + 
                              //'float get_temperature_width_v1_2_sensor() {\n'+
                              //'  int a = analogRead('+var_pin+');\n'+ 
                              //'  float R0 = '+value_r0+';\n'+
                              //'  float B = '+value_B+';\n'+
                              //'  float R = 1023.0 / a - 1.0;\n'+ 
                              //'  R = R0 * R;\n'+
                              //'  //Conversion de la tempétrature en utilisant le datasheet\n'+
                              //'  float temperature = 1.0/(log(R/R0)/B+1/298.15)-273.15;\n'+
                              //'  //Serial.println(temperature);\n'+       
                              //'  return temperature;\n'+
                              //'}\n';
                             // code += "V["+virtuel_pin+"] = get_temperature_width_v1_2_sensor();\n";
                              
                              code += "V["+virtuel_pin+"] = convertirEnDegres(analogRead("+var_pin+"));\n";
                              break;

      case "LIGHT_SENSOR" : Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
                            code += "V["+virtuel_pin+"] = 0.1*analogRead("+dropdown_pin+");\n" ;
                            break;
      case "ROTARY" :  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
                      code += "V["+virtuel_pin+"] = analogRead("+dropdown_pin+");\n" ;
                        break;
      case "MOISTURE" :  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
                        code += "V["+virtuel_pin+"] = analogRead("+dropdown_pin+");\n" ;
                        break;

  }

  return code;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//-----------------------------------------------------


//driss_Virtuino_led
Blockly.Arduino.driss_Virtuino_led = function() {
  var color = this.getFieldValue('COLOR');
  var pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_white_led'+pin] = 'pinMode('+pin+', OUTPUT);';
  var code = '';
  return code;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//driss_Virtuino_actuator
Blockly.Arduino.driss_Virtuino_actuator = function() {
  var actuator = this.getFieldValue('ACTUATOR');
  var dropdown_pin = this.getFieldValue('PIN');
  
  
  switch (actuator){
    case "SERVO" :  var servo = 'servomoteur_'+dropdown_pin;
                    Blockly.Arduino.setups_['setup_'+servo] = servo+'.attach('+dropdown_pin+');';
                    break;
    default : Blockly.Arduino.setups_['setup_actuator'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  }

  var code = '';
  return code;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//driss_Virtuino_led
Blockly.Arduino.driss_Virtuino_led = function() {
  var color = this.getFieldValue('COLOR');
  var pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_white_led'+pin] = 'pinMode('+pin+', OUTPUT);';
  var code = '';
  return code;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//driss_Virtuino_Read_Virtuel_PIN
Blockly.Arduino.driss_Virtuino_Read_Virtuel_PIN = function() {
  var virtuel_pin  = Blockly.Arduino.valueToCode(this, 'VIRTUEL_PIN', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = "V["+virtuel_pin+"]";
  //return code;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//driss_Virtuino_Read_Memory_M
Blockly.Arduino.driss_Virtuino_Read_Memory_M = function() {
  var memory_M  = Blockly.Arduino.valueToCode(this, 'MEMORY_M', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = "M["+memory_M+"]";
  //return code;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



