

// define blocks
'use strict';
goog.provide('Blockly.Blocks.drissAdafruit'); 

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');





//-Moteurs ----------------------------------------------------------------------------------------------------------------------------------------


//driss_adafruit_motor_control
Blockly.Blocks.driss_adafruit_motor_control = {
  category: 'driss_adafruit',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        //.appendField(new Blockly.FieldImage("blocks/drissAdafruit/motor_control.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
        .appendField("Faire tourner le moteur ")
        .appendField(new Blockly.FieldDropdown([["M1","1"], ["M2","2"], ["M3","3"], ["M4","4"]]), "MOTOR");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        //.appendField(new Blockly.FieldImage("blocks/drissAdafruit/motor_control.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
        .appendField("Dans le sens")
        .appendField(new Blockly.FieldDropdown([["Horaire","HORAIRE"], ["Anti horaire","ANTIHORAIRE"]]), "SENS");
    this.appendValueInput("VITESSE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("à la vitesse (0 à 255)");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissAdafruit/motor_control.png", Blockly.Arduino.imageSize*4,  Blockly.Arduino.imageSize))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissAdafruit.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_adafruit_motor_stop
Blockly.Blocks.driss_adafruit_motor_stop = {
  category: 'driss_adafruit',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Arrêter le moteur")
        .appendField(new Blockly.FieldDropdown([["M1","1"], ["M2","2"], ["M3","3"], ["M4","4"]]), "MOTOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissAdafruit.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};