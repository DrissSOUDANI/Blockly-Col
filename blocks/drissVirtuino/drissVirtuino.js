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
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "RX")
        //.appendField(new Blockly.FieldTextInput("default"), "RX")
        .appendField("TX")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "TX")
        //.appendField(new Blockly.FieldTextInput("default"), "TX");
    this.appendDummyInput()
        .appendField(" ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DEBUG")
        .appendField("Afficher les informations sur le port série")
        .appendField("Vitesse")
        .appendField(new Blockly.FieldDropdown([['9600', '9600'],['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], 
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']]), "VITESSE");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("blocks/drissVirtuino/virtuino.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize), "IMA");
    this.appendDummyInput()
        .appendField("    Capteurs et Actionneurs ")
        .appendField("situés sur la maquette ");
    this.appendDummyInput()
        .appendField("    avec lesquels va interagir")
        .appendField("l'application Virtuino ");
    this.appendStatementInput("ELEMENTS_VIRTUINO")
        .setCheck(null);
    this.setColour(35);
 this.setTooltip("");
 this.setHelpUrl("");
  }/*,

        onchange: function(ev) {
         this.getField("VITESSE").setValue("9600");
         this.getField("RX").setValue("8");
         this.getField("TX").setValue("9");
         }
         */
};


Blockly.Blocks.driss_Virtuino_bloc_principal_complet = {
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
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DEBUG")
        .appendField("Afficher les informations sur le port série")
        .appendField("Vitesse")
        .appendField(new Blockly.FieldDropdown([['9600', '9600'],['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], 
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']]), "VITESSE");
    this.appendDummyInput()
                .appendField(new Blockly.FieldCheckbox("TRUE"), "MODE_MANUEL")
                .appendField("Mode manuel (Contrôle par l'application Virtuino)");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("blocks/drissVirtuino/virtuino.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize), "IMA");
    this.appendDummyInput()
        .appendField("    Capteurs et Actionneurs réliés à la carte");
    this.appendDummyInput()
        .appendField("    avec lesquels va interagir \"Virtuino\"");
    this.appendStatementInput("ELEMENTS_VIRTUINO")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("    Comportement attendu indépendamment ");
    this.appendDummyInput()
        .appendField("    de l'application Virtuino");
    this.appendStatementInput("CODE_LOUPE")
        .setCheck(null);
    this.setColour(35);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



/*
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
    this.setColour(Blockly.Blocks.drissVirtuino.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
*/

//driss_Virtuino_led
Blockly.Blocks.driss_Virtuino_led = {
  category: 'Virtuino', 
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("La LED")
        .appendField(new Blockly.FieldDropdown([["blanche","WHITE"], ["rouge","RED"], ["verte","GREEN"], ["bleue","BLUE"], ["violette","PURPLE"]]), "COLOR")
        .appendTitle(new Blockly.FieldImage("blocks/drissVirtuino/Grove_LED_white.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize), "IMA")
        .appendField("sur la broche")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    //this.appendDummyInput()
       // .setAlign(Blockly.ALIGN_CENTRE)
        //.appendTitle(new Blockly.FieldImage("blocks/drissVirtuino/Grove_LED_white.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize), "IMA");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVirtuino.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  },
    onchange: function(ev) {
      var color = this.getFieldValue('COLOR');
      var image = "";
      switch(color) {
        case "WHITE"  : image = "blocks/drissVirtuino/Grove_LED_white.png"; break;
        case "RED"    : image = "blocks/drissVirtuino/Grove_LED_red.png"; break;
        case "GREEN"  : image = "blocks/drissVirtuino/Grove_LED_green.png"; break;
        case "BLUE"   : image = "blocks/drissVirtuino/Grove_LED_blue.png"; break;
        case "PURPLE" : image = "blocks/drissVirtuino/Grove_LED_purple.png"; break;
      }
      
      this.getField("IMA").setValue(image);
    }
};


//driss_Virtuino_actuator
Blockly.Blocks.driss_Virtuino_actuator = {
  category: 'Virtuino', 
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField(" ")
        .appendField(new Blockly.FieldDropdown([    ["L'actionneur","ANY_ACTUATOR"], 
                                                    ["Le mini ventilateur","MINIVENTILATEUR"]]), 
                                                "ACTUATOR")
        .appendTitle(new Blockly.FieldImage("blocks/drissVirtuino/output.png", Blockly.Arduino.imageSize*2,  Blockly.Arduino.imageSize), "IMA")
        .appendField("sur la broche")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    //this.appendDummyInput()
       // .setAlign(Blockly.ALIGN_CENTRE)
        //.appendTitle(new Blockly.FieldImage("blocks/drissVirtuino/Grove_LED_white.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize), "IMA");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVirtuino.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  },
    onchange: function(ev) {
      var actuator = this.getFieldValue('ACTUATOR');
      var image = "";
      switch(actuator) {
        case "ANY_ACTUATOR"  : image = "blocks/drissVirtuino/output.png"; break;
        case "MINIVENTILATEUR"    : image = "blocks/drissVirtuino/Grove_mini_ventilateur.png"; break;
        
      }
      
      this.getField("IMA").setValue(image);
    }
};


//driss_Virtuino_input
Blockly.Blocks.driss_Virtuino_input = {
  category: 'Virtuino',
  helpUrl: '',
   init: function() {
    this.appendDummyInput()
        .appendField(" ")
        .appendField(new Blockly.FieldDropdown( [["Le capteur","ANY_SENSOR"], 
                                                  ["Le bouton poussoir","BUTTON"], 
                                                  ["L'interrupteur","SWITCH"], 
                                                  ["Le fin de course","MICROSWITCH"], 
                                                  ["Le détecteur de présence","PIR"], 
                                                  ["Le détecteur de lumière","LIGHT_SENSOR"], 
                                                  ["Le capteur ultrason","ULTRASONS"], 
                                                  ["Le capteur de température","TEMPERATURE_V12"], 
                                                  ["Le potentiomètre","ROTARY"],
                                                  ["Le recepteur IR","IRRECEIVER"],
                                                  ["Le contact tactile","TOUCH"]
                                                ]), "SENSOR_1")
        //.appendField(new Blockly.FieldImage("blocks/drissVirtuino/input.png", Blockly.Arduino.imageSize*2,  Blockly.Arduino.imageSize), "IMA")
        .appendField("sur la broche")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("blocks/drissVirtuino/input.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize), "IMA");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVirtuino.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  },
    onchange: function(ev) {
      var color = this.getFieldValue('SENSOR_1');
      var image = "";
      switch(color) {
        case "ANY_SENSOR"  : image = "blocks/drissVirtuino/input.png"; break;
        case "BUTTON"    : image = "blocks/drissVirtuino/Grove_sensor_1_button.png"; break;
        case "SWITCH"  : image = "blocks/drissVirtuino/Grove_sensor_1_switch.png"; break;
        case "MICROSWITCH"   : image = "blocks/drissVirtuino/Grove_sensor_1_MicroSwitch.png"; break;
        case "PIR" : image = "blocks/drissVirtuino/Grove_sensor_1_PIR.png"; break;
        case "LIGHT_SENSOR" : image = "blocks/drissVirtuino/Grove_sensor_1_light_sensor.png"; break;
        case "ULTRASONS" : image = "blocks/drissVirtuino/Grove_sensor_1_ultrasonic.png"; break;
        case "TEMPERATURE_V12" : image = "blocks/drissVirtuino/Grove_temperature_sensor_v1_2.png"; break;
        case "ROTARY" : image = "blocks/drissVirtuino/Grove_sensor_1_rotary.png"; break;
        case "IRRECEIVER" : image = "blocks/drissVirtuino/Grove_sensor_1_Infrared_Receiver.png"; break;
        case "TOUCH" : image = "blocks/drissVirtuino/Grove_sensor_1_touch.png"; break;
      }
      
      this.getField("IMA").setValue(image);
    }
};
