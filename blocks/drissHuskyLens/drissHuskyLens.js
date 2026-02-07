// define blocks
'use strict';
goog.provide('Blockly.Blocks.drissHuskyLens');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types'); 


//driss_huskylens_init
Blockly.Blocks['driss_huskylens_init'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ne plus utilisé !!! sera retiré bientôt")
          .appendField("Initialiser le module Huskylens");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("en mode ")
          .appendField(new Blockly.FieldDropdown([["I2C","I2C"], ["SPI","SPI"]]), "MODE")
          .appendField(new Blockly.FieldImage("blocks/drissHuskyLens/huskylens.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize), "IMA");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['driss_huskylens_init_complet'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Initialiser le module Huskylens")
          .appendField(new Blockly.FieldImage("blocks/drissHuskyLens/huskylens.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize), "IMA");
      this.appendDummyInput()
          .appendField("Branché en")
          .appendField(new Blockly.FieldDropdown([["I2C","I2C"], ["UART","UART"]]), "LINK");
      this.appendDummyInput()
          .appendField("Mode : ")
          .appendField(new Blockly.FieldDropdown([["Reconnaissance faciale","ALGORITHM_FACE_RECOGNITION"], ["Suivi d'objets","ALGORITHM_OBJECT_TRACKING"], ["Reconnaissance d'objets","ALGORITHM_OBJECT_RECOGNITION"], ["Suivi de ligne","ALGORITHM_LINE_TRACKING"], ["Reconnaissance de couleurs","ALGORITHM_COLOR_RECOGNITION"], ["Reconnaissance de TAG","ALGORITHM_TAG_RECOGNITION"]]), "MODE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

//Reconnaissance faciale -------------------------------------------------------------------------------------------


Blockly.Blocks['driss_huskylens_learning_done'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("L'apprentissage est fait");
    this.setOutput(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['driss_huskylens_faces_are_filmed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("des visages sont filmés par HuskyLens");
    this.setOutput(true, null);
    this.setColour(225);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


  Blockly.Blocks['driss_huskylens_request_data_ok'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("la demande de données à HuskyLens a réussi");
      this.setOutput(true, null);
      this.setColour(Blockly.Blocks.drissHuskyLens.HUE);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  

  Blockly.Blocks['driss_huskylens_is_learned'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("L'apprentissage de HuskyLens a été fait");
      this.setOutput(true, null);
      this.setColour(Blockly.Blocks.drissHuskyLens.HUE);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['driss_huskylens_available'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("des données en provenance de HuskyLens ")
          .appendField("sont disponibles ");
      this.setOutput(true, null);
      this.setColour(Blockly.Blocks.drissHuskyLens.HUE);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['driss_huskylens_count_learned'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Nombre de visage appris");
      this.setOutput(true, null);
      this.setColour(Blockly.Blocks.drissHuskyLens.HUE);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['driss_huskylens_get_all_blocks_width_this_learned_id'] = {
    init: function() {
      this.appendValueInput("BLOCK_ID")
          .setCheck(null)
          .appendField("Chercher tous les visages correspondant à ID =");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };



  Blockly.Blocks['driss_huskylens_read'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Lire les données en provenance")
          .appendField("de HuskyLens");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(Blockly.Blocks.drissHuskyLens.HUE);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['driss_huskylens_get_block_details'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["Coordonnée X du Centre","X_CENTER"], ["Coordonnée Y du Centre","Y_CENTER"], ["Largeur","WIDTH"], ["Hauteur","HEIGHT"]]), "DETAILS_BLOCK")
          .appendField("du cadre");
      this.setOutput(true, null);
      this.setColour(Blockly.Blocks.drissHuskyLens.HUE);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['driss_huskylens_get_recognized_face_id'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("ID du visage reconnu");
      this.setOutput(true, null);
      this.setColour(Blockly.Blocks.drissHuskyLens.HUE);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['driss_huskylens_face_id_is_present'] = {
    init: function() {
      this.appendValueInput("FACE_ID")
          .setCheck(null)
          .appendField("le visage dont ID = ");
      this.appendDummyInput()
          .appendField("est présent à l'écran");
      this.setOutput(true, null);
      this.setColour(Blockly.Blocks.drissHuskyLens.HUE);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['driss_huskylens_face_id_to_name'] = {
    init: function() {
      this.appendValueInput("NAME_OF_FACE_ID")
          .setCheck(null)
          .appendField("Attribuer au visage dont ID = ")
          .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "FACE_ID")
          .appendField("le nom");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(Blockly.Blocks.drissHuskyLens.HUE);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['driss_huskylens_set_custom_text'] = {
    init: function() {
      this.appendValueInput("CUSTOM_TEXT")
          .setCheck("String")
          .appendField("Ecrire sur l'écran de HuskyLens     ")
          .appendField("Texte");
      this.appendDummyInput()
          .appendField("à la position   X = ")
          .appendField(new Blockly.FieldNumber(80, 0, 320), "POS_X")
          .appendField("  et   Y = ")
          .appendField(new Blockly.FieldNumber(2, 0, 240), "POS_Y");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['driss_huskylens_delete_all_custom_text'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Effacer tous les textes sur l'écran de HuskyLens");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['driss_huskylens_save_picture_in_sd_card'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Prendre une photo avec HuskyLens et l'enregistrer");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("sur la carte micro SD");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['driss_huskylens_save_screenshot_in_sd_card'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Enregistrer une capture d'écran de HuskyLens ");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("sur la carte micro SD");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };