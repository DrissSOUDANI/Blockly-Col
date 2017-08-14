

//Capteurs ---------------------------------------------------------------------------------------------------------------------------

//TinkerKit Button poussoir
Blockly.Arduino.driss_tinkerKit_boutonPoussoir = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  
  var button = 'button_'+dropdown_pin;
  Blockly.Arduino.definitions_['define_TinkerKit'] = '#include <TinkerKit.h>'; 
  Blockly.Arduino.definitions_['define_button_'+dropdown_pin ] = 'TKButton '+button+'('+dropdown_pin+');\n';

  code = button+'.readSwitch()==HIGH';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//TinkerKit - Rotary Angle Sensor
Blockly.Arduino.driss_tinkerKit_rotaryPot = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  
  var rotaryPot = 'rotaryPot_'+dropdown_pin;
  Blockly.Arduino.definitions_['define_TinkerKit'] = '#include <TinkerKit.h>'; 
  Blockly.Arduino.definitions_['define_rotaryPot_'+dropdown_pin ] = 'TKPotentiometer '+rotaryPot+'('+dropdown_pin+');\n';

  code = rotaryPot+'.read()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//TinkerKit - Light Sensor
Blockly.Arduino.driss_tinkerKit_lightSensor = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  
  var ldr = 'ldr_'+dropdown_pin;
  Blockly.Arduino.definitions_['define_TinkerKit'] = '#include <TinkerKit.h>'; 
  Blockly.Arduino.definitions_['define_ldr_'+dropdown_pin ] = 'TKLightSensor '+ldr+'('+dropdown_pin+');\n';

  code = ldr+'.read()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//TinkerKit - Touch Sensor
Blockly.Arduino.driss_tinkerKit_touchSensor = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  
  var touch = 'touch_'+dropdown_pin;
  Blockly.Arduino.definitions_['define_TinkerKit'] = '#include <TinkerKit.h>'; 
  Blockly.Arduino.definitions_['define_touch_'+dropdown_pin ] = 'TKTouchSensor '+touch+'('+dropdown_pin+');\n';

   code = touch+'.readSwitch()==HIGH';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//TinkerKit - Hall Sensor 
Blockly.Arduino.driss_tinkerKit_hallSensor = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_pole = this.getTitleValue('POLE');
  
  var hs = 'hs_'+dropdown_pin;
  Blockly.Arduino.definitions_['define_TinkerKit'] = '#include <TinkerKit.h>'; 
  Blockly.Arduino.definitions_['define_hs_'+dropdown_pin ] = 'TKHallSensor '+hs+'('+dropdown_pin+');\n';

  code = hs+'.polarity()=='+dropdown_pole;
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//TinkerKit - Hall Sensor  val
Blockly.Arduino.driss_tinkerKit_hallSensor_val = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  
  var hs = 'hs_'+dropdown_pin;
  Blockly.Arduino.definitions_['define_TinkerKit'] = '#include <TinkerKit.h>'; 
  Blockly.Arduino.definitions_['define_hs_'+dropdown_pin ] = 'TKHallSensor '+hs+'('+dropdown_pin+');\n';

  code = hs+'.read()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//TinkerKit - Tilt Sensor
Blockly.Arduino.driss_tinkerKit_tiltSensor = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  
  var tilt = 'tilt_'+dropdown_pin;
  Blockly.Arduino.definitions_['define_TinkerKit'] = '#include <TinkerKit.h>'; 
  Blockly.Arduino.definitions_['define_tilt_'+dropdown_pin ] = 'TKTiltSensor '+tilt+'('+dropdown_pin+');\n';

   code = tilt+'.read()==HIGH';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//TinkerKit - Thermistor
Blockly.Arduino.driss_tinkerKit_thermistor = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_unite = this.getTitleValue('UNITE');
  
  var therm = 'therm_'+dropdown_pin;
  Blockly.Arduino.definitions_['define_TinkerKit'] = '#include <TinkerKit.h>'; 
  Blockly.Arduino.definitions_['define_therm_'+dropdown_pin ] = 'TKThermistor '+therm+'('+dropdown_pin+');\n';

  switch(dropdown_unite){
    case "C" : code = therm+'.readCelsius()'; break;
    case "F" : code = therm+'.readFahrenheit()'; break;
    case "NUM" : code = therm+'.read()'; break;
  }
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



//Actionneurs ---------------------------------------------------------------------------------------------------------------------------

//TinkerKit red LED OK
Blockly.Arduino.driss_tinkerKit_red_led = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');

  var led = 'led_'+dropdown_pin;
  Blockly.Arduino.definitions_['define_TinkerKit'] = '#include <TinkerKit.h>'; 
  Blockly.Arduino.definitions_['define_led_'+dropdown_pin ] = 'TKLed '+led+'('+dropdown_pin+');\n';

  code = '';
  switch(dropdown_stat){
    case "HIGH" : code  = led+'.on();\n';
                 break;
    case "LOW" : code  = led+'.off();\n';
                 break;
  }
  return code;
};

//TinkerKit green LED OK
Blockly.Arduino.driss_tinkerKit_green_led = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');

  var led = 'led_'+dropdown_pin;
  Blockly.Arduino.definitions_['define_TinkerKit'] = '#include <TinkerKit.h>'; 
  Blockly.Arduino.definitions_['define_led_'+dropdown_pin ] = 'TKLed '+led+'('+dropdown_pin+');\n';

  code = '';
  switch(dropdown_stat){
    case "HIGH" : code  = led+'.on();\n';
                 break;
    case "LOW" : code  = led+'.off();\n';
                 break;
  }
  return code;
};

//TinkerKit yellow LED OK
Blockly.Arduino.driss_tinkerKit_yellow_led = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');

  var led = 'led_'+dropdown_pin;
  Blockly.Arduino.definitions_['define_TinkerKit'] = '#include <TinkerKit.h>'; 
  Blockly.Arduino.definitions_['define_led_'+dropdown_pin ] = 'TKLed '+led+'('+dropdown_pin+');\n';

  code = '';
  switch(dropdown_stat){
    case "HIGH" : code  = led+'.on();\n';
                 break;
    case "LOW" : code  = led+'.off();\n';
                 break;
  }
  return code;
};

//TinkerKit blue LED OK
Blockly.Arduino.driss_tinkerKit_blue_led = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');

  var led = 'led_'+dropdown_pin;
  Blockly.Arduino.definitions_['define_TinkerKit'] = '#include <TinkerKit.h>'; 
  Blockly.Arduino.definitions_['define_led_'+dropdown_pin ] = 'TKLed '+led+'('+dropdown_pin+');\n';

  code = '';
  switch(dropdown_stat){
    case "HIGH" : code  = led+'.on();\n';
                 break;
    case "LOW" : code  = led+'.off();\n';
                 break;
  }
  return code;
};


//TinkerKit Power LEDs OK
Blockly.Arduino.driss_tinkerKit_powerLEDs = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');

  var leds = 'leds_'+dropdown_pin;
  Blockly.Arduino.definitions_['define_TinkerKit'] = '#include <TinkerKit.h>'; 
  Blockly.Arduino.definitions_['define_leds_'+dropdown_pin ] = 'TKLed '+leds+'('+dropdown_pin+');\n';

  code = '';
  switch(dropdown_stat){
    case "HIGH" : code  = leds+'.on();\n';
                 break;
    case "LOW" : code  = leds+'.off();\n';
                 break;
  }
  return code;
};