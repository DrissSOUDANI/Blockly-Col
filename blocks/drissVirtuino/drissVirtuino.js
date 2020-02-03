//www.technozone51fr

// define blocks
'use strict';
goog.provide('Blockly.Blocks.drissVirtuino');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

 

//-Communication ----------------------------------------------------------------------------------------------------------------------------------------


//driss_Virtuino_initialiser_bluetooth
Blockly.Blocks.driss_Virtuino_initialiser_bluetooth = {
  category: 'Virtuino',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Virtuino : Initialiser le bluetooth");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissVirtuino/Virtuino.png", Blockly.Arduino.imageSize*1.1,  Blockly.Arduino.imageSize, "*"))
        .appendField("RX")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "RX")
        .appendField("    TX")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "TX");
    this.appendDummyInput()
        .appendField("  ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "INFOS")
        .appendField(" Afficher les informations sur le port série")
        .appendField("Vitesse")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownSerial), "VITESSE");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVirtuino.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  },
        onchange: function(ev) {
         this.getField("VITESSE").setValue("9600");
         this.getField("RX").setValue("D8");
         this.getField("TX").setValue("D9");
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


