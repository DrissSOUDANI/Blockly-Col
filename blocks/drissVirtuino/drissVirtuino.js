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
    //this.appendDummyInput()
                //.appendField(new Blockly.FieldDropdown([["Pilotage manuel par l'application Virtuino","MANU"], ["Pilotage automatique (sans Virtuino)","AUTO"]]), "MODE");
            
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



Blockly.Blocks.driss_Virtuino_bloc_principal_complet2 = {
  category: 'Virtuino',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("VIRTUINO");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("blocks/drissVirtuino/virtuino6.png", Blockly.Arduino.imageSize*6,  Blockly.Arduino.imageSize*1.5), "IMA");
    this.appendDummyInput()
        .appendField("1 - Initialiser le module Bluetooth de la maquette");
    this.appendStatementInput("VIRTUINO_BLUETOOTH")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("2 - Lister les Capteurs et Actionneurs de la ");
    this.appendDummyInput()
        .appendField("   maquette avec lesquels va intéragir Virtuino");
    this.appendStatementInput("ELEMENTS_VIRTUINO")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("3 - Décrire éventuellement le comportement");
    this.appendDummyInput()
        .appendField("   autonome de la maquette");
    this.appendStatementInput("CODE_LOUPE")
        .setCheck(null);
    this.setColour(35);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks.driss_virtuino_bluetooth = {
  category: 'Virtuino',
  helpUrl: '',
  init: function() {
    //this.appendDummyInput()
        //.appendField("Initialiser le module Bluetooth de la maquette");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("RX : ")
        .appendField(new Blockly.FieldTextInput("default"), "RX")
        .appendField(" - ")
        .appendField("TX : ")
        .appendField(new Blockly.FieldTextInput("default"), "TX")
        .appendField(" - ")
    /*
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DEBUG")
        .appendField("Afficher les informations dans la console : ")
        */
    //this.appendDummyInput()
        .appendField("Vitesse : ")
        //.setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([['9600', '9600'],['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], 
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']]), "VITESSE");
    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVirtuino.HUE);
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
                                                    ["Le mini ventilateur","MINIVENTILATEUR"], 
                                                    ["Le relais","RELAY"]
                                              ]),
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
        case "RELAY"    : image = "blocks/drissVirtuino/Grove _relais.png"; break;
        
      }
      
      this.getField("IMA").setValue(image);
    }
};


//driss_Virtuino_input_logique
Blockly.Blocks.driss_Virtuino_input_logique = {
  category: 'Virtuino',
  helpUrl: '',
   init: function() {
    this.appendDummyInput()
        .appendField(" ")
        .appendField(new Blockly.FieldDropdown( [["Le capteur logique","ANY_SENSOR"], 
                                                  ["Le bouton poussoir","BUTTON"], 
                                                  ["L'interrupteur","SWITCH"], 
                                                  ["Le fin de course","MICROSWITCH"], 
                                                  ["Le détecteur de présence","PIR"], 
                                                  ["Le contact tactile","TOUCH"]
                                                ]), "SENSOR_1")
        //.appendField(new Blockly.FieldImage("blocks/drissVirtuino/input.png", Blockly.Arduino.imageSize*2,  Blockly.Arduino.imageSize), "IMA")
        .appendField("sur la broche")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
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
        //case "LIGHT_SENSOR" : image = "blocks/drissVirtuino/Grove_sensor_1_light_sensor.png"; break;
        //case "ULTRASONS" : image = "blocks/drissVirtuino/Grove_sensor_1_ultrasonic.png"; break;
        
        //case "TEMPERATURE_DHT11" : image = "blocks/drissVirtuino/Grove_temperature_and_humidity_sensor.png"; break;
        //case "HUMIDITY_DHT11" : image = "blocks/drissVirtuino/Grove_temperature_and_humidity_sensor.png"; break;
        //case "TEMPERATURE_DHT22" : image = "blocks/drissVirtuino/Grove_temperature_and_humidity_sensor_pro.png"; break;

        //case "IRRECEIVER" : image = "blocks/drissVirtuino/Grove_sensor_1_Infrared_Receiver.png"; break;
        case "TOUCH" : image = "blocks/drissVirtuino/Grove_sensor_1_touch.png"; break;
      }
      
      this.getField("IMA").setValue(image);
    }
};


//driss_Virtuino_input_numerique
Blockly.Blocks.driss_Virtuino_input_numerique = {
  category: 'Virtuino',
  helpUrl: '',
   init: function() {
    this.appendDummyInput()
        .appendField(" ")
        .appendField(new Blockly.FieldDropdown( [["Le capteur numérique","ANY_SENSOR"], 
                                                 // ["Le bouton poussoir","BUTTON"], 
                                                  //["L'interrupteur","SWITCH"], 
                                                 // ["Le fin de course","MICROSWITCH"], 
                                                 // ["Le détecteur de présence","PIR"], 
                                                  ["Le capteur de température (DHT11)","TEMPERATURE_DHT11"],
                                                  ["Le capteur d'humidité (DHT11)","HUMIDITY_DHT11"]
                                             
                                                  //["Le capteur de température (DHT11)","TEMPERATURE_DHT22"],
                                                  //["Le recepteur IR","IRRECEIVER"],
                                                 // ["Le contact tactile","TOUCH"]
                                                ]), "SENSOR_1")
        //.appendField(new Blockly.FieldImage("blocks/drissVirtuino/input.png", Blockly.Arduino.imageSize*2,  Blockly.Arduino.imageSize), "IMA")
        .appendField("sur la broche")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.appendValueInput("VIRTUEL_PIN")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField("Mettre la mesure dans V","UNITE");
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
      var texte = this.getFieldValue('UNITE');
      switch(color) {
        case "ANY_SENSOR"  : image = "blocks/drissVirtuino/input.png"; break;
        case "BUTTON"    : image = "blocks/drissVirtuino/Grove_sensor_1_button.png"; break;
        case "SWITCH"  : image = "blocks/drissVirtuino/Grove_sensor_1_switch.png"; break;
        case "MICROSWITCH"   : image = "blocks/drissVirtuino/Grove_sensor_1_MicroSwitch.png"; break;
        case "PIR" : image = "blocks/drissVirtuino/Grove_sensor_1_PIR.png"; break;

        case "TEMPERATURE_DHT11" : image = "blocks/drissVirtuino/Grove_temperature_and_humidity_sensor.png"; 
                                   texte = "Mettre la mesure en degrès dans V"  ;        
        break;
        
        case "HUMIDITY_DHT11" : image = "blocks/drissVirtuino/Grove_temperature_and_humidity_sensor.png"; 
                              texte = "Mettre la mesure en % dans V"  ;    
        break;
        

        case "IRRECEIVER" : image = "blocks/drissVirtuino/Grove_sensor_1_Infrared_Receiver.png"; break;
        case "TOUCH" : image = "blocks/drissVirtuino/Grove_sensor_1_touch.png"; break;
      }
      
      this.getField("IMA").setValue(image);
      this.getField("UNITE").setValue(texte);
    }
};



//driss_Virtuino_input_analogique
Blockly.Blocks.driss_Virtuino_input_analogique = {
  category: 'Virtuino',
  helpUrl: '',
   init: function() {
    this.appendDummyInput()
        .appendField(" ")
        .appendField(new Blockly.FieldDropdown( [["Le capteur analogique","ANY_SENSOR"], 
                                                  
                                                 
                                                  ["Le détecteur de lumière","LIGHT_SENSOR"], 
                                                  ["Le capteur de température V1.2","TEMPERATURE_V12"],
                                                  ["Le Capteur d'humidité","MOISTURE"],
                                                  
                                                  ["Le potentiomètre","ROTARY"]
                                                  
                                                 
                                                ]), "SENSOR_1")
        //.appendField(new Blockly.FieldImage("blocks/drissVirtuino/input.png", Blockly.Arduino.imageSize*2,  Blockly.Arduino.imageSize), "IMA")
        .appendField("sur la broche")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN");
    this.appendValueInput("VIRTUEL_PIN")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck("Number")
        .appendField("Mettre la mesure dans V","UNITE");
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
      var texte = this.getFieldValue('UNITE');;
      switch(color) {
        case "ANY_SENSOR"  : image = "blocks/drissVirtuino/input.png"; break;
        
        case "LIGHT_SENSOR" : image = "blocks/drissVirtuino/Grove_sensor_1_light_sensor.png"; break;
        
        case "TEMPERATURE_V12" :  image = "blocks/drissVirtuino/Grove_temperature_sensor_v1_2.png"; 
                                  texte = "Mettre la mesure en degrès dans V"  ;  
                                  break;
        case "MOISTURE" : image = "blocks/drissVirtuino/Grove_moisture_sensor.png"; break;
        
        case "ROTARY" : image = "blocks/drissVirtuino/Grove_sensor_1_rotary.png"; break;
       
      }
      
      this.getField("IMA").setValue(image);
      this.getField("UNITE").setValue(texte);
    }
};




//driss_Virtuino_Read_Virtuel_PIN
Blockly.Blocks.driss_Virtuino_Read_Virtuel_PIN = {
  category: 'Virtuino', 
  helpUrl: '',
  init: function() {
    this.appendValueInput("VIRTUEL_PIN")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("La valeur stockée dans V");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissVirtuino.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_Virtuino_Read_Memory_M
Blockly.Blocks.driss_Virtuino_Read_Memory_M = {
  category: 'Virtuino', 
  helpUrl: '',
  init: function() {
    this.appendValueInput("MEMORY_M")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("La valeur stockée dans M");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissVirtuino.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};