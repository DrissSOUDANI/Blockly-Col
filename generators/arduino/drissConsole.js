

Blockly.Arduino.driss_console_init_serial = function() {
  var vitesse = this.getTitleValue('VITESSE');
  
  Blockly.Arduino.setups_['setup_serial_console'] = 'Serial.begin('+vitesse+');';
  var code = '';  //code à insérer dans la loop Arduino
   //return [code, Blockly.Arduino.ORDER_ATOMIC];
   return code;
};



Blockly.Arduino.driss_console_write = function() {
  var texte = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
  var retour_ligne = this.getTitleValue('RL');

  var code = ''  ;

  switch (retour_ligne){
    case "SANS" : code = 'Serial.print('+texte+');\n' ; break;
    case "AVEC" : code = 'Serial.println('+texte+');\n' ; break;
  }
  
  return code;
};

