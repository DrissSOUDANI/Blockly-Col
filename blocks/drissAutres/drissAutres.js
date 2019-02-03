//

// define blocks
'use strict';
goog.provide('Blockly.Blocks.drissLinkItOne');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');



//-AUTRES ----------------------------------------------------------------------------------------------------------------------------------------

//
Blockly.Blocks['driss_autres_ShieldMotors'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Faire tourner le moteur ")
          .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "MOTOR");
      this.appendValueInput("SENS")
          .setCheck("Boolean")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Sens horaire");
      this.appendValueInput("VITESSE")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Vitesse");
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };




Blockly.Blocks['driss_afficheur_LED_Matrix_8x8_MAX7219'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ecrire sur l'afficheur MAX 7219");
    this.appendValueInput("MSG")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Message");
    this.appendValueInput("DELAY")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pause (en ms)");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Défilement aucun","PA_NO_EFFECT"], ["Défilement à gauche","PA_SCROLL_LEFT"], ["Défilement à droite","PA_SCROLL_RIGHT"], ["Défilement en haut","PA_SCROLL_UP"], ["Défilement en bas","PA_SCROLL_DOWN"]]), "EFFECT");
    this.appendDummyInput()
        .appendField("Alignement")
        .appendField(new Blockly.FieldDropdown([["à gauche","PA_LEFT"], ["à droite","PA_RIGHT"], ["au centre","PA_CENTER"]]), "ALIGN");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

