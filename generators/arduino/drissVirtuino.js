

//driss_Virtuino_bloc_principal 
Blockly.Arduino.driss_Virtuino_bloc_principal = function() {
  var rx = this.getFieldValue('RX');
  var tx = this.getFieldValue('TX');
  var debug = this.getFieldValue('DEBUG') == 'TRUE';
  var vitesse = this.getFieldValue('VITESSE');
  var statements_elements_virtuino = Blockly.Arduino.statementToCode(this, 'ELEMENTS_VIRTUINO');

 //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>";
  Blockly.Arduino.includes_['define_VirtuinoBluetooth'] = "#include <VirtuinoCM.h>"; 
  
  Blockly.Arduino.definitions_['define_V_memory_count_'+rx] = "#define V_memory_count 32"; 

  Blockly.Arduino.variables_['define_Commentaire_01'] = "//arduino RX pin=2  arduino TX pin=3    connect the arduino RX pin to esp8266 module TX pin   -  connect the arduino TX pin to esp8266 module RX pin";
 
  Blockly.Arduino.variables_['define_var_espSerial'] = "SoftwareSerial espSerial("+rx+","+tx+"); // RX, TX"; 
  Blockly.Arduino.variables_['define_var_VirtuinoBluetooth'] = "VirtuinoCM virtuino;";
  Blockly.Arduino.variables_['define_var_Virtuino_V'] = "float V[V_memory_count];";
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


//driss_Virtuino_bloc_principal_complet 
Blockly.Arduino.driss_Virtuino_bloc_principal_complet = function() {
  var rx = this.getFieldValue('RX');
  var tx = this.getFieldValue('TX');
  var debug = this.getFieldValue('DEBUG') == 'TRUE';
  var vitesse = this.getFieldValue('VITESSE');
  var statements_elements_virtuino = Blockly.Arduino.statementToCode(this, 'ELEMENTS_VIRTUINO');
  var statements_elements_loop = Blockly.Arduino.statementToCode(this, 'CODE_LOUPE');

 //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>";
  Blockly.Arduino.includes_['define_VirtuinoBluetooth'] = "#include <VirtuinoCM.h>"; 
  
  Blockly.Arduino.definitions_['define_V_memory_count_'+rx] = "#define V_memory_count 32"; 

  Blockly.Arduino.variables_['define_Commentaire_01'] = "//arduino RX pin=2  arduino TX pin=3    connect the arduino RX pin to esp8266 module TX pin   -  connect the arduino TX pin to esp8266 module RX pin";
 
  Blockly.Arduino.variables_['define_var_espSerial'] = "SoftwareSerial espSerial("+rx+","+tx+"); // RX, TX"; 
  Blockly.Arduino.variables_['define_var_VirtuinoBluetooth'] = "VirtuinoCM virtuino;";
  Blockly.Arduino.variables_['define_var_Virtuino_V'] = "float V[V_memory_count];";
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
             'vDelay(1000);\n' +
             statements_elements_loop ;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


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

//driss_Virtuino_input
Blockly.Arduino.driss_Virtuino_input = function() {
  var sensor = this.getFieldValue('SENSOR_1');
  //alert (sensor);
  var color = this.getFieldValue('COLOR');
  var pin = this.getFieldValue('PIN');

  Blockly.Arduino.setups_['setup_button_'+pin] = 'pinMode('+pin+', INPUT);';
  var code = '';
  if(sensor == "TEMPERATURE_V12") { 
    var var_pin = pin;
    var value_r0 = 100000;
    var value_B = 4275;
    Blockly.Arduino.variables_['define_V0'] = 'float V0;';
    Blockly.Arduino.codeFunctions_['define_get_temperature_Sensor_V1_2'] = '\n/*lecture de la température avrec le capteur Grove Température V1.2*/ \n' + 
    'float get_temperature_width_v1_2_sensor() {\n'+
    '  int a = analogRead('+var_pin+');\n'+ 
    '  float R0 = '+value_r0+';\n'+
    '  float B = '+value_B+';\n'+
    '  float R = 1023.0 / a - 1.0;\n'+ 
    '  R = R0 * R;\n'+
    '  //Conversion de la tempétrature en utilisant le datasheet\n'+
    '  float temperature = 1.0/(log(R/R0)/B+1/298.15)-273.15;\n'+
    '  //Serial.println(temperature);\n'+       
    '  return temperature;\n'+
    '}\n';
    code = "V0 = get_temperature_width_v1_2_sensor();\n "
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
  var pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_actuator'+pin] = 'pinMode('+pin+', OUTPUT);';
  var code = '';
  return code;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
};