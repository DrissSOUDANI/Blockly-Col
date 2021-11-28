// define blocks
'use strict';
goog.provide('Blockly.Blocks.drissD1R32');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


//- ----------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------
//driss_D1R32_ESP32_config_simple
Blockly.Blocks.driss_D1R32_ESP32_config_simple = {
  category: 'diss_D1R32',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Configurer la carte D1R32 en ")
        .appendField(new Blockly.FieldDropdown([["Station Wifi","STATION"], ["Point  d'accès Wifi","ACCESSPOINT"]]), "TYPE");
    this.appendDummyInput()   
        .appendField("Elle sera reliée au réseau Wifi ci-dessous et aura", "MSG1");
    this.appendDummyInput()
        .appendField("l'adresse IP 192.168.1.41", "MSG2"); 
    this.appendValueInput("SSID")  
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Nom du réseau WiFi(SSID)");
    this.appendValueInput("KEY")
        .appendField(new Blockly.FieldImage("blocks/drissD1R32/D1R32.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Clé d'authentification (mot de passe)");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(36);
 this.setTooltip("");
 this.setHelpUrl("");
  },

      onchange: function(ev) {
        var type_conn = this.getFieldValue('TYPE');
        switch(type_conn){
          case "STATION" :  this.getField("MSG1").setValue("Elle SERA RELIEE au réseau Wifi ci-dessous et aura");
                            this.getField("MSG2").setValue("l'adresse IP 192.168.1.41");
                            break;
          case "ACCESSPOINT" :  this.getField("MSG1").setValue("Elle DIFFUSERA le réseau wifi indiqué");
                            this.getField("MSG2").setValue("et aura l'adresse IP : 192.168.4.1");
                            break;
        }
       }
};


//driss_D1R32_ESP32_config_complet
Blockly.Blocks.driss_D1R32_ESP32_config_complet = {
  category: 'diss_D1R32',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Configurer la carte D1R32 en")
        .appendField(new Blockly.FieldDropdown([["Station Wifi","STATION_IP"], ["Point  d'accès Wifi","ACCESSPOINT_IP"]]), "TYPE");
    this.appendDummyInput()   
        .appendField("Elle sera reliée au réseau Wifi indiqué ", "MSG1");
    this.appendDummyInput()
        .appendField("et aura l'adresse IP indiquée", "MSG2"); 
    //this.appendDummyInput()
        //.appendField(new Blockly.FieldImage("blocks/drissD1R32/D1R32.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize));
    this.appendValueInput("SSID")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Nom du réseau WiFi(SSID)");
    this.appendValueInput("KEY")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Clé d'authentification (mot de passe)");
    this.appendValueInput("IP")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Adresse IP  (V4)");
    this.appendValueInput("MASQUE")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Masque de sous réseau");
    this.appendValueInput("GATEWAY")
    .appendField(new Blockly.FieldImage("blocks/drissD1R32/D1R32.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Passerelle");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(36);
 this.setTooltip("");
 this.setHelpUrl("");
  } ,

      onchange: function(ev) {
        var type_conn = this.getFieldValue('TYPE');
        switch(type_conn){
          case "STATION_IP" :  this.getField("MSG1").setValue("Elle SERA RELIEE au réseau Wifi indiqué");
                            this.getField("MSG2").setValue("et aura l'adresse IP indiquée");
                            break;
          case "ACCESSPOINT_IP" :  this.getField("MSG1").setValue("Elle DIFFUSERA le réseau Wifi indiqué");
                            this.getField("MSG2").setValue("et aura l'adresse IP indiquée");
                            break;
        }
       }
};


//driss_D1R32_executer_taches_paralleles
Blockly.Blocks.driss_D1R32_executer_taches_paralleles = {
  category: 'diss_D1R32',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Exécuter ces tâches en même temps");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("blocks/drissD1R32/processeur.png", Blockly.Arduino.imageSize*2,  Blockly.Arduino.imageSize));
    this.appendStatementInput("TASK_1")
        .setCheck(null);
    this.appendStatementInput("TASK_2")
        .setCheck(null);
    this.setColour(Blockly.Blocks.drissD1R32.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_D1R32_executer_taches_paralleles
Blockly.Blocks.driss_D1R32_2_taches = {
init: function() {
    this.appendDummyInput()
        .appendField("Exécuter ces 2 tâches en même temps");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("blocks/drissD1R32/processeur.png", Blockly.Arduino.imageSize*2,  Blockly.Arduino.imageSize));
    this.appendDummyInput()
        .appendField("Déclaration et initialisations communes ");
    this.appendStatementInput("INITIALISATIONS")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Tâche 1");
    this.appendStatementInput("TASK_1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Tâche 2");
    this.appendStatementInput("TASK_2")
        .setCheck(null);
    this.setColour(Blockly.Blocks.drissD1R32.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_D1R32_definir_tache
Blockly.Blocks.driss_D1R32_definir_tache = {
  category: 'diss_D1R32',
  helpUrl: '',
  init: function() {
    this.appendDummyInput() 
        .appendField("Déclarer une tâche : ")
        .appendField(new Blockly.FieldTextInput("nom de la tâche"), "TASK_NAME");
    this.appendValueInput("NUM_TASK")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Tache n° ");
    this.appendValueInput("TAILLE_PILE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Taille de la pile ");
    this.appendValueInput("COEUR")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Cœur à utiliser ");
    this.appendValueInput("PRIORITE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("   Priorité");
    this.setPreviousStatement(true, null);
    this.setColour(Blockly.Blocks.drissD1R32.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_D1R32_définir_les_actions_de_la_tache
Blockly.Blocks.driss_D1R32_définir_les_actions_de_la_tache = {
  category: 'diss_D1R32',
  helpUrl: '',
  name:"TASK",
   init: function() {
    this.appendDummyInput()
        .appendField("Définir les actions de la tâche n°")
        .appendField(new Blockly.FieldNumber(0, 1, 3), "NUN_TASK");
    this.appendStatementInput("TASK_ACTIONS")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(Blockly.Blocks.drissD1R32.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};









//---------------------------------------
//driss_D1R32_transmettre_au_serveur_Web
Blockly.Blocks.driss_D1R32_transmettre_au_serveur_Web = {
  category: 'diss_D1R32',
  helpUrl: '',
  init: function() {
    this.appendDummyInput("SENDTOWEB")
        .appendField("Transmettre les données au serveur Web");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(11);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



//---------------------------------------
//driss_ESP_SPIFFS_Initialiser_memoire
Blockly.Blocks.driss_ESP_SPIFFS_Initialiser_memoire = {
  category: 'diss_D1R32',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("SPIFFS");
    this.appendDummyInput()
        .appendField(" Initialiser la mémoire Spiffs");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(36);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//---------------------------------------
//driss_ESP_SPIFFS_Effacer_fichier
Blockly.Blocks.driss_ESP_SPIFFS_Effacer_fichier = {
  category: 'diss_D1R32',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("SPIFFS");
    this.appendValueInput("FILENAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("  Effacer le fichier de la mémoire Spiffs         ")
        .appendField("Nom du fichier");
    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(36);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



//---------------------------------------
//driss_ESP_SPIFFS_Initialiser_memoire_et_ftp
Blockly.Blocks.driss_ESP_SPIFFS_Initialiser_memoire_et_ftp = {
  category: 'diss_D1R32',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("SPIFFS");
    this.appendValueInput("USERNAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("  Initialiser la mémoire Spiffs         ")
        .appendField("Nom d'utilisateur");
    this.appendValueInput("PASSWORD")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("et activer le FTP                               ")
        .appendField("Mot de passe");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(36);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



//---------------------------------------
//driss_ESP_SPIFFS_creer_ajouter_au_fichier
Blockly.Blocks.driss_ESP_SPIFFS_creer_ajouter_au_fichier = {
  category: 'diss_D1R32',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("SPIFFS");
    this.appendValueInput("FILENAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ajouter la donnée au fichier                      ")
        .appendField("Nom du fichier");
    this.appendValueInput("DATA")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("(le fichier sera créé s'il n'existe pas)      ")
        .appendField("Donnée à ajouter");
    this.appendDummyInput()
        .appendField(" ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "SPACE")
        .appendField("Ajouter un espace")
        .appendField("     ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "NEW_LIGNE")
        .appendField("ajouter sur une nouvelle ligne");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(11);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};













//driss_D1R32_Creer_page_web
Blockly.Blocks.driss_Creer_page_web = {
  category: 'diss_WEB',
  helpUrl: '',
  name:"PageWeb",
  init: function() {
    this.appendDummyInput()
        .appendField("Créer une page Web");
    this.appendDummyInput()
        .appendField("<HTML>");
    this.appendDummyInput()
        .appendField("    <head>");
    this.appendStatementInput("HEAD")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField("    </head>");
    this.appendDummyInput()
        .appendField("    <Body>");
    this.appendStatementInput("BODY")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField("    </Body>");
    this.appendDummyInput()
        .appendField("</HTML>");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_D1R32_cadre
Blockly.Blocks.driss_D1R32_cadre = {
  category: 'diss_D1R32',
  helpUrl: '',
  name:"CADRE",
  init: function() {
    this.appendDummyInput()
        .appendField("Dessiner un cadre");
    this.appendDummyInput()
        .appendField("  Flottant :")
        .appendField(new Blockly.FieldDropdown([["non","none"], ["à gauche","left"], ["à droite","right"]]), "FLOAT")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "BORDER")
        .appendField("avec bordure")
        .appendField("  Hauteur :")
        .appendField(new Blockly.FieldNumber(200, 0, 1500), "HEIGHT")
        .appendField("px")
        .appendField(" Largeur :")
        .appendField(new Blockly.FieldNumber(200, 0, 1500), "WIDTH")
        .appendField("px    ");
    this.appendDummyInput()
        .appendField("  alig. texte :")
        .appendField(new Blockly.FieldDropdown([["à gache","left"], ["au centre","center"], ["à droite","droite"]]), "TXT_ALIGN")
        .appendField("  Position :")
        .appendField(new Blockly.FieldDropdown([["relative","relative"], ["absolue","absolute"], ["fixe","fixed"]]), "POSITION")
        .appendField("  -  gauche :", "gauche")
        .appendField(new Blockly.FieldNumber(0, 0, 1500), "LEFT")
        .appendField("px", "Lpx")
        .appendField(" -  haut :", "haut")
        .appendField(new Blockly.FieldNumber(0, 0, 1500), "TOP")
        .appendField("px", "Tpx");
    this.appendStatementInput("CADRE")
        .setCheck(null)
        .appendField("  Coul. fond :")
        .appendField(new Blockly.FieldColour("#ccffff"), "BG_COLOR");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }/*,
  
  onchange: function(ev) {
        var position = this.getFieldValue('POSITION');
        
        if(position == "relative") {
          this.getField("gauche").setVisible(false);
          this.getField("haut").setVisible(false);
          this.getField("LEFT").setVisible(false);
          this.getField("TOP").setVisible(false);
          this.getField("Lpx").setVisible(false);
          this.getField("Tpx").setVisible(false);
        } else {
          this.getField("gauche").setVisible(true); 
          this.getField("haut").setVisible(true); 
          this.getField("LEFT").setVisible(true); 
          this.getField("TOP").setVisible(true); 
          this.getField("Lpx").setVisible(true); 
          this.getField("Tpx").setVisible(true);
          this.setInputsInline(false);
        }
       }*/

};


//driss_page_web_title
Blockly.Blocks.driss_page_web_title = {
  category: 'diss_WEB',
  helpUrl: '',
  name:"",
  init: function() {
    this.appendDummyInput()
        .appendField("Titre de la page Web")
        .appendField(new Blockly.FieldTextInput("Collège "), "TITLE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(11);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_page_web_definir_style
Blockly.Blocks.driss_page_web_definir_style = {
  category: 'diss_WEB',
  helpUrl: '',
  name:'toto',
  init: function() {
    this.appendValueInput("CLASS_NAME")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Coul. texte :")
        .appendField(new Blockly.FieldColour("#000066"), "TXT_COLOR")
        .appendField("       Coul. fond :")
        .appendField(new Blockly.FieldColour("#ffff99"), "BG_COLOR")
        .appendField("                        Définir le style ");
    this.appendDummyInput()
        .appendField("Taille :")
        .appendField(new Blockly.FieldDropdown([["medium","medium"], ["small","small"], ["x-small","x-small"], ["xx-small","xx-small"], ["large","large"], ["x-large","x-large"]]), "FONT_SIZE")
        .appendField("  Style :")
        .appendField(new Blockly.FieldDropdown([["normal","normal"], ["italic","italic"]]), "FONT_STYLE")
        .appendField("   Alig. texte :")
        .appendField(new Blockly.FieldDropdown([["à gauche","left"], ["au centre","center"], ["à droite","right"]]), "TEXT_ALIGN");
    this.appendDummyInput()
        .appendField("Décoration :")
        .appendField(new Blockly.FieldDropdown([["aucune","NONE"], ["souligé","underline"], ["Barré","line-through"]]), "TEXT_DECORATION")
        .appendField("  ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "GRAS")
        .appendField("Gras   ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "BORDER")
        .appendField("Bordure");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(11);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_D1R32_page_web_write_texte
Blockly.Blocks.driss_D1R32_page_web_write_texte = {
  category: 'diss_D1R32',
  helpUrl: '',
  init: function() {
    this.appendValueInput("WEB_PAGE_TEXT")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ecrire dans la page Web le texte");
    this.appendValueInput("WEB_PAGE_STYLE")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("en utilisant le style");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(11);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_D1R32_web_write_data
Blockly.Blocks.driss_D1R32_web_write_data = {
  category: 'diss_D1R32',
  helpUrl: '',

  init: function() {
    this.appendValueInput("WEB_PAGE_DATA_LABEL")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ecrire dans la page Web la donnée ")
        .appendField("nom");
    this.appendValueInput("WEB_PAGE_DATA_VALUE")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Valeur");
    this.appendValueInput("WEB_PAGE_DATA_UNITE")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Unité");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(11);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_D1R32_afficher_jauge_dans_page_web
Blockly.Blocks.driss_D1R32_afficher_jauge_dans_page_web = {
  category: 'diss_D1R32',
  helpUrl: '',

  init: function() {
  this.appendValueInput("WEB_PAGE_JAUGE_LABEL")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Dessiner dans la page web la jauge de")
        .appendField("la donnée");
    this.appendValueInput("WEB_PAGE_JAUGE_VALUE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Valeur à indiquer par la jauge");
    this.appendValueInput("WEB_PAGE_JAUGE_MIN")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Min");
    this.appendValueInput("WEB_PAGE_JAUGE_MAX")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Max");
    this.appendValueInput("WEB_PAGE_JAUGE_UNITE")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Unité");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(11);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_D1R32_balise_HR
Blockly.Blocks.driss_D1R32_balise_HR = {
  category: 'diss_D1R32',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Dessiner une ligne (séparateur) : <HR>");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(11);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//driss_D1R32_InsertHTMLCodeInBody
Blockly.Blocks.driss_D1R32_InsertHTMLCodeInBody = {
  category: 'diss_D1R32',
  helpUrl: '',

  init: function() {
     this.appendValueInput("HTMLCode")
        .setCheck("String")
        .appendField("Insérer le code html dans la partie <body>...</body>");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(11);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//*******************************************************************************************************



//------------------------------------------------------------------------------------------------------------------------------
//ESP Basic
//------------------------------------------------------------------------------------------------------------------------------

//driss_D1R32_config_basic
Blockly.Blocks.driss_D1R32_config_basic = {
  category: 'diss_D1R32',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("MODE BASIC - Point d'accès et IP")
        
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissD1R32/D1R32.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
        .appendField("Adresse IP : 192.168.4.1");
    this.appendValueInput("SSID")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Nom du réseau WiFi(SSID)");
    this.appendValueInput("KEY")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Clé d'authentification (mot de passe)");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(36);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};




  //*******************************************************************************************************


Blockly.Blocks.driss_page_web = {
  category: 'diss_D1R32',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Dans une page Web");
    this.appendStatementInput("BODY")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_body_text
Blockly.Blocks.driss_body_text = {
  category: 'diss_D1R32',
  helpUrl: '',
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ecrire dans la page Web le texte");
    
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_web_switch
Blockly.Blocks.driss_web_switch = {
  category: 'diss_D1R32',
  helpUrl: '',

  init: function() {
    this.appendDummyInput()
        .appendField("Etat de l'interrupteur ")
        .appendField(new Blockly.FieldTextInput("Inter1"), "SWITCH_NAME")
        .appendField("dessiné dans la page Web");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("blocks/drissD1R32/switch_web.png", Blockly.Arduino.imageSize*2,  Blockly.Arduino.imageSize/2));
        //.appendField("Dessiné dans la page Web");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_web_button
Blockly.Blocks.driss_web_button = {
  category: 'diss_D1R32',
  helpUrl: '',

  init: function() {
    this.appendDummyInput()
        .appendField("Etat du bouton poussoir ")
        .appendField(new Blockly.FieldTextInput("bouton 1"), "BUTTON_NAME")
        .appendField("dessiné dans la page Web");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("blocks/drissD1R32/pushBtn_web.png", Blockly.Arduino.imageSize*2,  Blockly.Arduino.imageSize/2));
        //.appendField("Dessiné dans la page Web");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_web_potentiometre
Blockly.Blocks.driss_web_potentiometre = {
  category: 'diss_D1R32',
  helpUrl: '',

  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Valeur lue sur le potentiomètre")
        .appendField(new Blockly.FieldTextInput("potar1"), "ROTARY_NAME")
        .appendField("dessiné sur la page Web");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("blocks/drissD1R32/rotary_web.png", Blockly.Arduino.imageSize*2,  Blockly.Arduino.imageSize/2));
    this.appendValueInput("ROTARY_MIN")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("valeur minimale du potentiomètre");
    this.appendValueInput("ROTARY_MAX")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("valeur maximale du potentiomètre");
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



//driss_web_write_val
Blockly.Blocks.driss_web_write_val = {
  category: 'diss_D1R32',
  helpUrl: '',

  init: function() {
    this.appendValueInput("VAL_LABEL")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ecrire dans la page Web la donnée ")
        .appendField("nom");
    this.appendValueInput("VALUE")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Valeur");
    this.appendValueInput("VAL_UNITE")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Unité");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//driss_grove_led
Blockly.Blocks.driss_grove_led = { 
  category: 'driss_grove : actionneurs',
 helpUrl: '',
 name:"DRISS_GROVE_LED",
 init: function() {
   this.appendDummyInput()
       .appendField("Mettre la DEL reliée à l'entrée")
       .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
   this.appendValueInput("INPUT")
       .setCheck(null)
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendTitle(new Blockly.FieldImage("blocks/drissGrove/Grove_red_LED.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
       .appendField("à l'état logique envoyé par");
   this.setInputsInline(false);
   this.setPreviousStatement(true, null);
   this.setNextStatement(true, null);
   this.setColour(Blockly.Blocks.drissGrove.HUE);
this.setTooltip("");
this.setHelpUrl("");
 }
};

//driss_servo_standard
Blockly.Blocks.driss_servo_standard = {
  category: 'driss_grove : actionneurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Positionner le servomoteur");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_servo.png", Blockly.Arduino.imageSize*1.1,  Blockly.Arduino.imageSize, "*"))
        .appendField("relié à la sortie ")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.appendValueInput("ANGLE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sur l'angle ");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("(l'angle doit être compris entre 0° et 180°)");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
