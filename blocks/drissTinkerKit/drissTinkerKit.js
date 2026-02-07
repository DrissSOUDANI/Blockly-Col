// define blocks
'use strict';
goog.provide('Blockly.Blocks.drissTinkerKit');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');



//-Capteurs ----------------------------------------------------------------------------------------------------------------------------------------


//TinkerKit Button poussoir
Blockly.Blocks.driss_tinkerKit_boutonPoussoir = {
  category: 'driss_tinkerkit : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Le bouton poussoir relié à l'entrée") 
        .appendTitle(new Blockly.FieldDropdown([["I0", "I0"], ["I1", "I1"], ["I2", "I2"], ["I3", "I3"], ["I4", "I4"], ["I5", "I5"], ["I6", "I6"], ["I7", "I7"], ["I8", "I8"], ["I9", "I9"], ["D2", "D2"], ["D4", "D4"], ["D7", "D7"], ["D8", "D8"], ["D12", "D12"], ["D13", "D13"]]), "PIN") ;
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissTinkerKit/boutonPoussoir.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("est appuyé");
        
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissTinkerKit.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};

//TinkerKit - Rotary Potentiometre 
Blockly.Blocks.driss_tinkerKit_rotaryPot = {
  category: 'driss_tinkerKit : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("La valeur numérique envoyée");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissTinkerKit/RotaryPot.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("par le potentiometre rotatif à l'entrée ")
        .appendTitle(new Blockly.FieldDropdown([["I0", "I0"], ["I1", "I1"], ["I2", "I2"], ["I3", "I3"], ["I4", "I4"], ["I5", "I5"], ["I6", "I6"], ["I7", "I7"], ["I8", "I8"], ["I9", "I9"], ["D2", "D2"], ["D4", "D4"], ["D7", "D7"], ["D8", "D8"], ["D12", "D12"], ["D13", "D13"]]), "PIN") ;
    this.appendDummyInput()
        .appendField("(La valeur numérique envoyée est comprise entre 0 et 1023)");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissTinkerKit.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};

//TinkerKit - Light Sensor
Blockly.Blocks.driss_tinkerKit_lightSensor = {
  category: 'driss_tinkerKit : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("La valeur de luminosité mesurée par le capteur");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissTinkerKit/LightSensor.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("relié à l'entrée ")
        .appendTitle(new Blockly.FieldDropdown([["I0", "I0"], ["I1", "I1"], ["I2", "I2"], ["I3", "I3"], ["I4", "I4"], ["I5", "I5"], ["I6", "I6"], ["I7", "I7"], ["I8", "I8"], ["I9", "I9"], ["D2", "D2"], ["D4", "D4"], ["D7", "D7"], ["D8", "D8"], ["D12", "D12"], ["D13", "D13"]]), "PIN") ;
    this.appendDummyInput()
        .appendField("(La valeur numérique renvoyée est comprise entre 0 et 1023)");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissTinkerKit.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};

//TinkerKit - Touch Sensor
Blockly.Blocks.driss_tinkerKit_touchSensor = {
  category: 'driss_tinkerKit : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Le capteur tactile relié à l'entrée ")
        .appendTitle(new Blockly.FieldDropdown([["I0", "I0"], ["I1", "I1"], ["I2", "I2"], ["I3", "I3"], ["I4", "I4"], ["I5", "I5"], ["I6", "I6"], ["I7", "I7"], ["I8", "I8"], ["I9", "I9"], ["D2", "D2"], ["D4", "D4"], ["D7", "D7"], ["D8", "D8"], ["D12", "D12"], ["D13", "D13"]]), "PIN") ;
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissTinkerKit/TouchSensor.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("est touché");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissTinkerKit.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};

//TinkerKit - Hall Sensor 
Blockly.Blocks.driss_tinkerKit_hallSensor = {
  category: 'driss_tinkerKit : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Le pôle ")
        .appendField(new Blockly.FieldDropdown([["NORD","NORTH"], ["SUD","SOUTH"]]), "POLE")
        .appendField("d'un aimant est détecté  ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissTinkerKit/HallSensor.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("par le capteur relié à l'entrée")
        .appendTitle(new Blockly.FieldDropdown([["I0", "I0"], ["I1", "I1"], ["I2", "I2"], ["I3", "I3"], ["I4", "I4"], ["I5", "I5"], ["I6", "I6"], ["I7", "I7"], ["I8", "I8"], ["I9", "I9"], ["D2", "D2"], ["D4", "D4"], ["D7", "D7"], ["D8", "D8"], ["D12", "D12"], ["D13", "D13"]]), "PIN") ;
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissTinkerKit.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};

//TinkerKit - Hall Sensor VAL
Blockly.Blocks.driss_tinkerKit_hallSensor_val = {
  category: 'driss_tinkerKit : capteurs',
  helpUrl: '',
 init: function() {
    this.appendDummyInput()
        .appendField("La valeur numérique envoyée par le capteur ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissTinkerKit/HallSensor.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("de champ magnétique relié à l'entrée")
        .appendTitle(new Blockly.FieldDropdown([["I0", "I0"], ["I1", "I1"], ["I2", "I2"], ["I3", "I3"], ["I4", "I4"], ["I5", "I5"], ["I6", "I6"], ["I7", "I7"], ["I8", "I8"], ["I9", "I9"], ["D2", "D2"], ["D4", "D4"], ["D7", "D7"], ["D8", "D8"], ["D12", "D12"], ["D13", "D13"]]), "PIN") ;
    this.appendDummyInput()
        .appendField("(La valeur numérique envoyée est comprise entre 0 et 1023)");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissTinkerKit.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};

//TinkerKit - Tilt Sensor 
Blockly.Blocks.driss_tinkerKit_tiltSensor = {
  category: 'driss_tinkerKit : capteurs',
  helpUrl: '',
 init: function() {
    this.appendDummyInput()
        .appendField("La capteur d'inclinaison relié à l'entrée ")
        .appendTitle(new Blockly.FieldDropdown([["I0", "I0"], ["I1", "I1"], ["I2", "I2"], ["I3", "I3"], ["I4", "I4"], ["I5", "I5"], ["I6", "I6"], ["I7", "I7"], ["I8", "I8"], ["I9", "I9"], ["D2", "D2"], ["D4", "D4"], ["D7", "D7"], ["D8", "D8"], ["D12", "D12"], ["D13", "D13"]]), "PIN") ;
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissTinkerKit/TiltSensor.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("est incliné");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissTinkerKit.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};

//TinkerKit - Thermistor 
Blockly.Blocks.driss_tinkerKit_thermistor = {
  category: 'driss_tinkerKit : capteurs',
  helpUrl: '',
 init: function() {
    this.appendDummyInput()
        .appendField("La  température en")
        .appendField(new Blockly.FieldDropdown([["°C","C"], ["°F","F"], ["Valeur numérique","NUM"]]), "UNITE")
        .appendField("mesurée par le capteur");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissTinkerKit/Thermistor.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("de température relié à l'entrée")
        .appendTitle(new Blockly.FieldDropdown([["I0", "I0"], ["I1", "I1"], ["I2", "I2"], ["I3", "I3"], ["I4", "I4"], ["I5", "I5"], ["I6", "I6"], ["I7", "I7"], ["I8", "I8"], ["I9", "I9"], ["D2", "D2"], ["D4", "D4"], ["D7", "D7"], ["D8", "D8"], ["D12", "D12"], ["D13", "D13"]]), "PIN") ;
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissTinkerKit.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};




//-Actionneurs ----------------------------------------------------------------------------------------------------------------------------------------

//TinkerKit red LED OK
Blockly.Blocks.driss_tinkerKit_red_led = {
   category: 'driss_tinkerkit : actionneurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Allumer","HIGH"], ["Eteindre","LOW"]]), "STAT")
        .appendField("La LED  rouge ")
        .appendField(new Blockly.FieldImage("blocks/drissTinkerKit/Led_R.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("reliée à la sortie ")
        .appendTitle(new Blockly.FieldDropdown([["O0", "O0"], ["O1", "O1"], ["O2", "O2"], ["O3", "O3"], ["O4", "O4"], ["O5", "O5"], ["D2", "D2"], ["D4", "D4"], ["D7", "D7"], ["D8", "D8"], ["D12", "D12"], ["D13", "D13"]]), "PIN") ;
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissTinkerKit.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};

//TinkerKit green LED OK
Blockly.Blocks.driss_tinkerKit_green_led = {
   category: 'driss_tinkerkit : actionneurs',
  helpUrl: '',
 init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Allumer","HIGH"], ["Eteindre","LOW"]]), "STAT")
        .appendField("La LED  verte ")
        .appendField(new Blockly.FieldImage("blocks/drissTinkerKit/Led_V.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("reliée à la sortie ")
        .appendTitle(new Blockly.FieldDropdown([["O0", "O0"], ["O1", "O1"], ["O2", "O2"], ["O3", "O3"], ["O4", "O4"], ["O5", "O5"], ["D2", "D2"], ["D4", "D4"], ["D7", "D7"], ["D8", "D8"], ["D12", "D12"], ["D13", "D13"]]), "PIN") ;
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissTinkerKit.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

//TinkerKit yellow LED OK
Blockly.Blocks.driss_tinkerKit_yellow_led = {
   category: 'driss_tinkerkit : actionneurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Allumer","HIGH"], ["Eteindre","LOW"]]), "STAT")
        .appendField("La LED  jaune ")
        .appendField(new Blockly.FieldImage("blocks/drissTinkerKit/Led_J.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("reliée à la sortie ")
        .appendTitle(new Blockly.FieldDropdown([["O0", "O0"], ["O1", "O1"], ["O2", "O2"], ["O3", "O3"], ["O4", "O4"], ["O5", "O5"], ["D2", "D2"], ["D4", "D4"], ["D7", "D7"], ["D8", "D8"], ["D12", "D12"], ["D13", "D13"]]), "PIN") ;
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissTinkerKit.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

//TinkerKit blue LED OK
Blockly.Blocks.driss_tinkerKit_blue_led = {
   category: 'driss_tinkerkit : actionneurs',
  helpUrl: '',
   init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Allumer","HIGH"], ["Eteindre","LOW"]]), "STAT")
        .appendField("La LED  bleue ")
        .appendField(new Blockly.FieldImage("blocks/drissTinkerKit/Led_B.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("reliée à la sortie ")
        .appendTitle(new Blockly.FieldDropdown([["O0", "O0"], ["O1", "O1"], ["O2", "O2"], ["O3", "O3"], ["O4", "O4"], ["O5", "O5"], ["D2", "D2"], ["D4", "D4"], ["D7", "D7"], ["D8", "D8"], ["D12", "D12"], ["D13", "D13"]]), "PIN") ;
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissTinkerKit.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

//TinkerKit Power LEDs OK
Blockly.Blocks.driss_tinkerKit_powerLEDs = {
   category: 'driss_tinkerkit : actionneurs',
  helpUrl: '',
   init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Allumer","HIGH"], ["Eteindre","LOW"]]), "STAT")
        .appendField("les LEDs de puissance ")
        .appendField(new Blockly.FieldImage("blocks/drissTinkerKit/PowerLEDs.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("reliées à la sortie ")
        .appendTitle(new Blockly.FieldDropdown([["O0", "O0"], ["O1", "O1"], ["O2", "O2"], ["O3", "O3"], ["O4", "O4"], ["O5", "O5"], ["D2", "D2"], ["D4", "D4"], ["D7", "D7"], ["D8", "D8"], ["D12", "D12"], ["D13", "D13"]]), "PIN") ;
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissTinkerKit.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};