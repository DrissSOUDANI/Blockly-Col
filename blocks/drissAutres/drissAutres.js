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

