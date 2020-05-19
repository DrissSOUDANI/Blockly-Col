
//driss_adafruit_motor_control
Blockly.Arduino.driss_adafruit_motor_control = function() {
  var motor = this.getFieldValue('MOTOR');
  var sens = this.getFieldValue('SENS');
  var vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);

  
  Blockly.Arduino.includes_['define_AFMotor'] = '#include <AFMotor.h>'; 
 


  Blockly.Arduino.variables_['define_motor_dc_'+motor] = 'AF_DCMotor motor_dc_'+motor+'('+motor+'); ';
  
  var code ='motor_dc_'+motor+'.setSpeed('+vitesse+');\n';
  switch(sens){
    case "HORAIRE" : code += 'motor_dc_'+motor+'.run(FORWARD);\n'; break;
    case "ANTIHORAIRE" :  code += 'motor_dc_'+motor+'.run(BACKWARD);\n'; break;
    
   
  }

  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};


//driss_adafruit_motor_stop
Blockly.Arduino.driss_adafruit_motor_stop = function() {
  var motor = this.getFieldValue('MOTOR');
  
  Blockly.Arduino.includes_['define_AFMotor'] = '#include <AFMotor.h>'; 
 


  Blockly.Arduino.variables_['define_motor_dc_'+motor] = 'AF_DCMotor motor_dc_'+motor+'('+motor+'); \n ';
  
  var code ='motor_dc_'+motor+'.run(RELEASE);\n';
  
  
  return code;
};

