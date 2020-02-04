//www.technozone51fr

// define blocks
'use strict';
goog.provide('Blockly.Blocks.drissVirtuino');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');



Blockly.Blocks.driss_Virtuino_bloc_principal = {
  category: 'Virtuino',
  helpUrl: '',
   init: function() {
    this.appendDummyInput()
        .appendField("Virtuino : Initialiser le module bluetooth ")
        .appendField("RX")
        .appendField(new Blockly.FieldTextInput("default"), "RX")
        .appendField("TX")
        .appendField(new Blockly.FieldTextInput("default"), "TX");
    this.appendDummyInput()
        .appendField(" ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DEBUG")
        .appendField("Afficher les informations sur le port série")
        .appendField("Vitesse")
        .appendField(new Blockly.FieldTextInput("default"), "VITESSE");
    this.appendDummyInput()
        .appendField("  ");
    this.appendDummyInput()
        .appendField("Capteurs et actionneurs à piloter par Virtuino");
    this.appendStatementInput("ELEMENTS_VIRTUINO")
        .setCheck(null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  },
        onchange: function(ev) {
         this.getField("VITESSE").setValue("9600");
         this.getField("RX").setValue("8");
         this.getField("TX").setValue("9");
         }
};


//driss_Virtuino_read_capteur
Blockly.Blocks.driss_Virtuino_read_capteur = {
  category: 'Virtuino',
  helpUrl: '',
  init: function() {
    this.appendValueInput("INPUT_IN")
        .setCheck(null)
        .appendField(" ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_Virtuino_recevoir_etat
Blockly.Blocks.driss_Virtuino_recevoir_etat = {
  category: 'Virtuino',
  helpUrl: '',
  init: function() {
    this.appendValueInput("CV")
        .setCheck("Number")
        .appendField("Virtuino : Recevoir un état  du canal virtuel (DV)");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissVirtuino.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


