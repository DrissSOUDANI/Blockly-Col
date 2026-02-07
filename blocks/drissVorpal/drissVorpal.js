// define blocks 
'use strict';
goog.provide('Blockly.Blocks.drissVorpal');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


//driss_vorpal_init_hexapod -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_init_hexapod'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initialiser le robot Hexapode");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(36);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_vorpal_faire_un_bip -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_faire_un_bip'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Faire un Bip");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_vorpal_emettre_son_freq_duree -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_emettre_son_freq_duree'] = {
  init: function() {
    this.appendValueInput("FREQUENCE")
        .setCheck("Number")
        .appendField("Émettre un son à la fréquence");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("hertz");
    this.appendValueInput("DUREE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pendant");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("millisecondes");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_vorpal_position_repos -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_position_repos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Se mettre en position repos");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_vorpal_position_debout -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_position_debout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Se mettre en position debout");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



//driss_vorpal_poser_corps -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_poser_corps'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Poser le corps par terre");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_vorpal_se_mettre_sur_pointes -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_se_mettre_sur_pointes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Se mettre debout sur les pointes");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_vorpal_tourner_sur_place ------------------------------------------------------------
Blockly.Blocks['driss_vorpal_tourner_sur_place'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tourner sur place de")
        .appendField(new Blockly.FieldDropdown([["45","45"], ["90","90"], ["135","135"], ["180","180"], ["225","225"], ["270","270"], ["315","315"], ["360","360"]]), "ANGLE")
        .appendField("degrés");
    this.appendDummyInput()
        .appendField("das le sens")
        .appendField(new Blockly.FieldDropdown([["horaire","0"], ["anti-horaire","1"]]), "SENS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_vorpal_marcher -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_marcher'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Avancer","0"], ["Reculer","1"]]), "SENS")
        .appendField("de ");
    this.appendValueInput("STEP")
        .setCheck("Number");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pas");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_vorpal_faire_battement_sur_pointe -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_faire_battement_sur_pointe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Faire des battements sur la pointe des pattes")
        .appendField("durant");
    this.appendValueInput("TIME")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("seconde(s)");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_vorpal_lever_poser_patte -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_lever_poser_patte'] = {
  init: function() {
    this.appendValueInput("LEGNUM")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("  ")
        .appendField(new Blockly.FieldDropdown([["Lever","KNEE_UP"], ["Poser","KNEE_DOWN"]]), "MOUVEMENT")
        .appendField(" la patte numéro");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_vorpal_avancer_reculer_patte -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_avancer_reculer_patte'] = {
  init: function() {
    this.appendValueInput("LEGNUM")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("  ")
        .appendField(new Blockly.FieldDropdown([["Avancer","HIP_FORWARD"], ["Reculer","HIP_BACKWARD"]]), "MOUVEMENT")
        .appendField(" la patte numéro");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_vorpal_lire_distance_avec_ultrasonic -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_lire_distance_avec_ultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Distance mesurée avec le capteur à ultrasons (cm)");
    this.setOutput(true, "Number");
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_vorpal_set_legs_position -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_set_legs_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Positionner les servomoteurs")
        .appendField(new Blockly.FieldDropdown([["de toutes les pattes","ALL_LEGS"], ["des pattes avant (0,5)","FRONT_LEGS"], ["des pattes arrière (2,3)","BACK_LEGS"], ["des pattes gauche (3,4,5)","LEFT_LEGS"], ["des pattes droites (0,1,2)","RIGHT_LEGS"], ["des pattes du milieu (1,4)","MIDDLE_LEGS"], ["des pattes impaires (1,3,5)","TRIPOD1_LEGS"], ["des pattes paires (0,2,4)","TRIPOD2_LEGS"], ["d'aucune patte","NO_LEGS"]]), "LEGMASK");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("la hanche sur l'angle")
        .appendField(new Blockly.FieldNumber(90, 30, 150, 1), "HIP_ANGLE")
        .appendField("degrés");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("le genou sur l'angle")
        .appendField(new Blockly.FieldNumber(90, 30, 150, 1), "KNEE_ANGLE")
        .appendField("degrés");
    this.appendValueInput("ADJ")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ajustement (pour plus de stabilité)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
/*
Blockly.Blocks['driss_vorpal_set_legs_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Positionner les servomoteurs")
        .appendField(new Blockly.FieldDropdown([["de toutes les pattes","ALL_LEGS"], ["des pattes avant (0,5)","FRONT_LEGS"], ["des pattes arrière (2,3)","BACK_LEGS"], ["des pattes gauche (3,4,5)","LEFT_LEGS"], ["des pattes droites (0,1,2)","RIGHT_LEGS"], ["des pattes du milieu (1,4)","MIDDLE_LEGS"], ["des pattes impaires (1,3,5)","TRIPOD1_LEGS"], ["des pattes paires (0,2,4)","TRIPOD2_LEGS"], ["d'aucune patte","NO_LEGS"]]), "LEGMASK");
    this.appendValueInput("HIP_ANGLE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("la hanche sur l'angle (en degrés)");
    this.appendValueInput("KNEE_ANGLE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("le genou sur l'angle (en degrés)");
    this.appendValueInput("ADJ")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ajustement (pour plus de stabilité)");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  },
    
    
      onchange: function(ev) {
         if ( (ev.type == Blockly.Events.CHANGE) && (ev.element == 'field') ){
            alert(ev.oldValue+"     "+ev.newValue);
        }
        var hip_angle = Blockly.Arduino.valueToCode(this, 'HIP_ANGLE', Blockly.Arduino.ORDER_ATOMIC);
        var knee_angle = Blockly.Arduino.valueToCode(this, 'KNEE_ANGLE', Blockly.Arduino.ORDER_ATOMIC);
        
        if((hip_angle < 30) || (hip_angle >150) || (knee_angle < 30) || (knee_angle >150) ){
            this.getChildren()[0].dispose();
            //alert("la valeur de l'angle doit être comprise entre 30 et 150");
        }
       }
       
};
*/

//driss_vorpal_set_hip_angle -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_set_hip_angle'] = {
  init: function() {
    this.appendValueInput("LEGNUM")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Positionner la 'hanche' de la patte n°");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sur l'angle")
        .appendField(new Blockly.FieldNumber(90, 30, 150, 1), "HIP_ANGLE")
        .appendField("degrés");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_vorpal_set_knee_angle -------------------------------------------------------------------------------------
Blockly.Blocks['driss_vorpal_set_knee_angle'] = {
  init: function() {
    this.appendValueInput("LEGNUM")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Positionner le 'genou' de la patte n°");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sur l'angle")
        .appendField(new Blockly.FieldNumber(90, 30, 150, 1), "KNEE_ANGLE")
        .appendField("degrés");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissVorpal.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
