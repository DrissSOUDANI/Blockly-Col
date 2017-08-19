
'use strict';

goog.provide('Blockly.Blocks.drissConsole');

goog.require('Blockly.Blocks');




Blockly.Blocks['driss_console_init_serial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initialiser la console serie à la vitesse")
        .appendField(new Blockly.FieldDropdown([["9600","9600"], ["19200","19200"], ["38400","38400"], ["57600","57600"], ["74880","74880"], ["115200","115200"], ["230400","230400"], ["250000","250000"]]), "VITESSE")
        .appendField("bauds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(36);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['driss_console_write'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck(null)
        .appendField("Ecrire sur la console  série")
        .appendField(new Blockly.FieldDropdown([["avec retour à la ligne","AVEC"], ["sans retour à la ligne","SANS"]]), "RL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissConsole.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};