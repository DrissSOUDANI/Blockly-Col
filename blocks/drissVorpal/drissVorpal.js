// define blocks
'use strict';
goog.provide('Blockly.Blocks.drissVorpal');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


//driss_vorpal_init_hexapod -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_init_hexapod'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initialiser le robot Hexapode");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(36);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_vorpal_faire_un_bip -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_faire_un_bip'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Faire un Bip");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_vorpal_emettre_son_freq_duree -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_emettre_son_freq_duree'] = {
  init: function() {
    this.appendValueInput("FREQUENCE")
        .setCheck("Number")
        .appendField("Émettre un son à la fréquence");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("hertz");
    this.appendValueInput("DUREE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pendant");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("millisecondes");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_vorpal_position_repos -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_position_repos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Se mettre en position repos");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_vorpal_position_debout -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_position_debout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Se mettre en position debout");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_vorpal_set_hip_angle -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_set_hip_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Positionner le servomoteur de")
        .appendField(new Blockly.FieldDropdown([["la hanche 0","HIP_0"], ["la hanche 1","HIP_1"], ["la hanche 2","HIP_2"], ["la hanche 3","HIP_3"], ["la hanche 4","HIP_4"], ["la hanche 5","HIP_5"]]), "HIP")
        .appendField("");
    this.appendValueInput("ANGLE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sur l'angle (en degrés)");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};