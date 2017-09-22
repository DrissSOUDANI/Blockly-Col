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



// AFFICHEURS -------------------------------------------------------------------------------


//LCD axe033
Blockly.Blocks['cyril_A4_lcd_axe033_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initialiser l'afficheur LCD")
        .appendField(new Blockly.FieldImage("blocks/drissA4/lcd_axe033.png",Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize));
    this.appendValueInput("A4_Pin")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("branché sur le pin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(36);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//cyril_A4_LCD
Blockly.Blocks['cyril_A4_LCD'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drissA4.HUE);
    this.setHelpUrl('');
    this.appendDummyInput()
        .appendField("Afficher sur l'écran LCD")
        .appendField(new Blockly.FieldImage("blocks/drissA4/lcd_axe033.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("cyril_A4_Text1")
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sur la ligne 1 :")
    this.appendValueInput("cyril_A4_Text2")
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
  .appendField('et sur la ligne 2 :')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
  }
};

//cyril_A4_LCD_Horloge
Blockly.Blocks['cyril_A4_LCD_Horloge'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drissA4.HUE);
    this.setHelpUrl('');
    this.appendDummyInput()
        .appendField("Afficher l'heure sur l'écran LCD")
        .appendField(new Blockly.FieldImage("blocks/drissA4/lcd_axe033.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    //this.appendDummyInput()
    //    .appendField(Blockly.Msg.A4_TEXT9)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
  }
};

//cyril_A4_LCD_Message
Blockly.Blocks['cyril_A4_LCD_Message'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drissA4.HUE);
    this.setHelpUrl('');
    this.appendDummyInput()
        .appendField("Afficher le message numéro")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"]]), 'cyril_A4_Num_Message')
        .appendField(new Blockly.FieldImage("blocks/drissA4/lcd_axe033.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendDummyInput()
//    this.appendValueInput('A4_Num_Message')
      .setAlign(Blockly.ALIGN_LEFT)
        .appendField("sur l'écran LCD")
      //.appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"]]), 'cyril_A4_Num_Message')
//      .setCheck('Number')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
  }
};

//cyril_A4_LCD_Efface
Blockly.Blocks['cyril_A4_LCD_Efface'] = {
  init: function() {
    this.setColour(Blockly.Blocks.drissA4.HUE);
    this.setHelpUrl('');
    this.appendDummyInput()
        .appendField("Effacer l'écran LCD")
        .appendField(new Blockly.FieldImage("blocks/drissA4/lcd_axe033.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    /*
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg.A4_TEXT14);  
      */    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
  }
};


//driss_A4_Buzzer
Blockly.Blocks['driss_A4_Buzzer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Emettre un son sur le buzzer relié la broche")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissA4/buzzer.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("A4_BUZZER_FREQUENCE")

        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Fréquence (en Hertz)");
    this.appendValueInput("A4_BUZZER_DUREE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Durée (en secondes)");
    this.setColour(Blockly.Blocks.drissA4.HUE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_A4_Temp_DS18B20
Blockly.Blocks['driss_A4_Temp_DS18B20'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Température mesurée par le capteur de température");
    this.appendDummyInput()
        .appendField("DS18B20 relié à la broche")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissA4/temperature_ds18b20.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissA4.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

