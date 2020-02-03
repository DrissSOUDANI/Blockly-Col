


//-Communication ----------------------------------------------------------------------------------------------------------------------------------------
//driss_Virtuino_initialiser_bluetooth

Blockly.Arduino.driss_Virtuino_initialiser_bluetooth = function() {

  var rx = this.getFieldValue('RX');
  var tx = this.getFieldValue('TX');
  var vitesse = this.getFieldValue('VITESSE');
  var infos = this.getFieldValue('INFOS') == 'TRUE';

  //dans include définition    
  Blockly.Arduino.includes_['define_VirtuinoBluetooth'] = "#include <VirtuinoBluetooth.h>"; 
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>"; 

  Blockly.Arduino.variables_['define_Commentaire_01'] = "//Si vous utilisez un module Grove : c'est RX=D8 / TX=D9";
 
  Blockly.Arduino.variables_['define_var_bt'] = "SoftwareSerial mySerialVirtuino("+rx+","+tx+"); // RX, TX"; 
  Blockly.Arduino.variables_['define_var_VirtuinoBluetooth'] = "virtuino(mySerialVirtuino,"+vitesse+");";
  
  //dans setup  
  Blockly.Arduino.setups_['setup_mySerialVirtuino'] ='';
  if(infos)  Blockly.Arduino.setups_['setup_mySerialVirtuino'] ='Serial.begin(9600);\n  ';
  Blockly.Arduino.setups_['setup_mySerialVirtuino'] += 
  'virtuino.DEBUG=false;\n'+
  '  mySerialVirtuino.begin('+vitesse+');\n';   
  

  var code = 'virtuino.run();';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//driss_Virtuino_recevoir_etath
Blockly.Arduino.driss_Virtuino_recevoir_etat = function() {

  var cv = Blockly.Arduino.valueToCode(this, 'CV', Blockly.Arduino.ORDER_ATOMIC);
  

  var code = 'virtuino.vDigitalMemoryRead('+cv+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


