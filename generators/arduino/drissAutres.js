
//Grove Button OK
Blockly.Arduino.driss_autres_ShieldMotors = function() {
  var dropdown_motor = this.getTitleValue('MOTOR');
  var value_Sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['define_Arduino'] = '#include <Arduino.h>'; 
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>'; 
  Blockly.Arduino.includes_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
  Blockly.Arduino.includes_['define_motor'] = '#include <motor.h>';


  Blockly.Arduino.variables_['define_motor'] = 'MotorClass motor; \n ';
  
  var code = 'motor.motor_output('+dropdown_motor+',1,'+value_Sens+','+value_vitesse+');';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

