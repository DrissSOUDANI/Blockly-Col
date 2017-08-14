//www.technozone51fr

// define blocks
'use strict';
goog.provide('Blockly.Blocks.drissA4');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


//led_red OK
Blockly.Blocks.driss_A4_led_red = {
  category: 'diss_A4 : actionneurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissA4.HUE);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.DRISS_A4_TEXT33, "HIGH"], [Blockly.Msg.DRISS_A4_TEXT34, "LOW"]]), "STAT")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT32)
        .appendTitle(new Blockly.FieldImage("blocks/drissA4/led_red.png",  Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize/1.6))
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DRISS_A4_TEXT35);
  }
};


//éclairage OK
Blockly.Blocks.driss_A4_eclairage = {
  category: 'diss_A4 : actionneurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissA4.HUE);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.DRISS_A4_TEXT33, "HIGH"], [Blockly.Msg.DRISS_A4_TEXT34, "LOW"]]), "STAT")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT31)
        .appendTitle(new Blockly.FieldImage("blocks/drissA4/eclairage.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize/1.6))
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DRISS_A4_TEXT35);
  }
};


//Commande de  moteur CC OK
Blockly.Blocks.driss_A4_commande_moteur_CC = {
  category: 'diss_A4 : actionneurs',
  helpUrl: '',

  init: function() {
    this.appendDummyInput()
        .appendField("Faire tourner le moteur ");
    this.appendDummyInput()
        .appendField("relié aux pins")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN1")
        .appendField("et")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN2")
        .appendField(new Blockly.FieldImage("blocks/drissA4/cde_2_moteurs_cc.png",  Blockly.Arduino.imageSize*2.5,  Blockly.Arduino.imageSize*2, "*"));
    this.appendValueInput("SENS")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sens horaire");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissA4.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

//Arreter moteur CC OK
Blockly.Blocks.driss_A4_arreter_moteur_CC = {
  category: 'diss_A4 : actionneurs',
  helpUrl: '',

  init: function() {
    this.appendDummyInput()
        .appendField("Arrêter le moteur ");
    this.appendDummyInput()
        .appendField("relié aux pins")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN1")
        .appendField("et")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN2")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissA4.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};



//btn_white OK
Blockly.Blocks.driss_A4_btn_white = {
  category: 'diss_A4 : capteurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissA4.HUE);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT5)
        .appendTitle(new Blockly.FieldImage("blocks/drissA4/btn_white.png",  Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize/1.6))
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT6);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.DRISS_A4_TEXT7);
  }
};

//driss_A4_btn_relache OK
Blockly.Blocks.driss_A4_btn_relache1 = {
  category: 'diss_A4 : capteurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissA4.HUE);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT8)
        //.appendTitle(new Blockly.FieldImage("blocks/drissA4/btn_white.png", 64, 40))
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT9);
    //this.setOutput(true, 'Boolean');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DRISS_A4_TEXT7);
  }
};

Blockly.Blocks.driss_A4_btn_relache = {
  category: 'diss_A4 : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput("")
        .appendField("Attendre que le bouton sur la broche")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendField(" soit relâché");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissA4.HUE);
    
  }


};


//Switch1 OK
Blockly.Blocks.driss_A4_fdc = {
  category: 'diss_A4 : capteurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissA4.HUE);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT11)
        .appendTitle(new Blockly.FieldImage("blocks/drissA4/fdc.png",  Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize/1.6))
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT6);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.DRISS_A4_TEXT12);
  }
};



//ldr OK
Blockly.Blocks.driss_A4_ldr = {
  category: 'diss_A4 : capteurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissA4.HUE);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT26)
        .appendTitle(new Blockly.FieldImage("blocks/drissA4/ldr.png",  Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize/1.6))
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN")
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.DRISS_A4_TEXT27);
  }
};

//pir OK
Blockly.Blocks.driss_A4_pir = {
  category: 'diss_A4 : capteurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissA4.HUE);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT1)
        .appendTitle(new Blockly.FieldImage("blocks/drissA4/pir.png",  Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.DRISS_A4_TEXT20);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.DRISS_A4_TEXT21);
  }
};
