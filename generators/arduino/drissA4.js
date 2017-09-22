

Blockly.Arduino.driss_A4_led_red = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_led_red_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.driss_A4_eclairage = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_eclairage_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.driss_A4_commande_moteur_CC = function() {
  var dropdown_pin1 = this.getTitleValue('PIN1');
  var dropdown_pin2 = this.getTitleValue('PIN2');
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.setups_['setup_cde_moteur_cc_'+dropdown_pin1+'_'+dropdown_pin2] = 'pinMode('+dropdown_pin1+', OUTPUT);\n pinMode('+dropdown_pin2+', OUTPUT);\n'; //code à insérer dans le setup Arduino
  
  var code = ""; 
  Blockly.Arduino.definitions_['define_cde_moteur_cc'] = "void cmd_mot_cc(byte pin1,byte pin2,boolean sens) {\n"+
    ' if(sens) {\n'+
    '   digitalWrite(pin1,0);\n'+
    '   digitalWrite(pin2,1);\n'+
    ' }\n'+
    ' else {\n'+
    '   digitalWrite(pin1,1);\n'+
    '   digitalWrite(pin2,0);\n'+
    ' }\n';
  code="cmd_mot_cc("+dropdown_pin1+","+dropdown_pin2+","+value_sens+");\n";
  return code;
};

Blockly.Arduino.driss_A4_arreter_moteur_CC = function() {
  var dropdown_pin1 = this.getTitleValue('PIN1');
  var dropdown_pin2 = this.getTitleValue('PIN2');
  
  var code = ""; 
  Blockly.Arduino.definitions_['define_arreter_moteur_cc'] = "void arreter_mot_cc(byte pin1,byte pin2) {\n"+
    ' digitalWrite(pin1,0);\n'+
    ' digitalWrite(pin2,0);\n'+
    '}\n';
  code="arreter_mot_cc("+dropdown_pin1+","+dropdown_pin2+");\n";
  return code;
};



Blockly.Arduino.driss_A4_btn_white = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_btn_white_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.driss_A4_btn_relache1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  //var code = 'digitalRead('+dropdown_pin+')==1';
  
  var code = 'while (digitalRead('+dropdown_pin+')==1) {\n'+
              '}\n' +
              'delay (100);\n';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.driss_A4_btn_relache = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'delay (100);\n'+'while (digitalRead('+dropdown_pin+')==1) {\n'+'}\n'+'delay (100);\n' ;
  return code;
};



Blockly.Arduino.driss_A4_fdc = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_fdc_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.driss_A4_ldr = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.driss_A4_pir = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_pir_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// AFFICHEURS -------------------------------------------------------------------------------


//LCD axe033

Blockly.Arduino.cyril_A4_lcd_axe033_init = function() {
  var A4_Pin = Blockly.Arduino.valueToCode(this, 'A4_lcd_axe033_Pin', Blockly.Arduino.ORDER_ATOMIC);; 
  Blockly.Arduino.includes_['define_AXE133Y'] = '#include <AXE133Y.h>';
  Blockly.Arduino.variables_['var_OLED'] = 'AXE133Y OLED = AXE133Y('+A4_Pin+');';
  Blockly.Arduino.setups_['Efface_LCD'] = 'OLED.clearScreen();';
  var code='';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//cyril_A4_LCD
Blockly.Arduino.cyril_A4_LCD = function() {
  var A4_Text1 = Blockly.Arduino.valueToCode(this, 'cyril_A4_Text1', Blockly.Arduino.ORDER_ATOMIC);;
  var A4_Text2 = Blockly.Arduino.valueToCode(this, 'cyril_A4_Text2', Blockly.Arduino.ORDER_ATOMIC);;
  var code='OLED.cursorHome(1);\n'+
  'OLED.print('+A4_Text1+');\n'+
  'OLED.cursorHome(2);\n'+
  'OLED.print('+A4_Text2+');\n'+
  'delay(800);';
  return code;
};

//cyril_A4_LCD_Horloge
Blockly.Arduino.cyril_A4_LCD_Horloge = function() { 
  var code='OLED.writeByte(0);\n'+
  'delay(800);';
  return code;
};

//cyril_A4_LCD_Message
Blockly.Arduino['cyril_A4_LCD_Message'] = function() {
  var dropdown_A4_Num_Message = this.getFieldValue('cyril_A4_Num_Message');
  code = 'delay(200);\n'+
  'OLED.writeByte('+dropdown_A4_Num_Message+');\n'+
  'delay(800);';
  return code;
};

//cyril_A4_LCD_Efface
Blockly.Arduino.cyril_A4_LCD_Efface = function() {
  var code='OLED.clearScreen();\n'+
  'delay(800);';
  return code;
};


//driss_A4_Buzzer
Blockly.Arduino.driss_A4_Buzzer = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var Freq = Blockly.Arduino.valueToCode(this, 'A4_BUZZER_FREQUENCE', Blockly.Arduino.ORDER_ATOMIC);;
  var Duree = Blockly.Arduino.valueToCode(this, 'A4_BUZZER_DUREE', Blockly.Arduino.ORDER_ATOMIC);;
  code = 'tone('+dropdown_pin+','+Freq+','+Duree+');\n';
  return code;
};


//driss_A4_Temp_DS18B20
Blockly.Arduino.driss_A4_Temp_DS18B20 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.includes_['define_OneWire'] = '#include <OneWire.h>';

  Blockly.Arduino.variables_['var_A4_DS18B20'] = 
  'const int broche_OneWire='+dropdown_pin+';\n'+
  'const int modeLecture=0xBE;\n'+
  'const int lancerMesure=0x44;\n'+
  'byte data[12];\n'+
  'byte adresse[8];\n'+
  'int tempet=0;\n'+
  'float tempetf=0.0; \n'+
  'OneWire  capteur(broche_OneWire);\n';

  Blockly.Arduino.definitions_['A4_DS18B20_mesurer_temperature'] = 
  'float mesurer_temperature(){ //--------- lancer une mesure --------\n'+
  '  capteur.reset(); \n'+
  '  capteur.select(adresse);\n'+
  '  capteur.write(lancerMesure,1);\n'+ 
  '  delay(1000);     // au moins 750 ms\n'+
  '  //---------- mode LECTURE -------------\n'+
  '  capteur.reset();\n'+ 
  '  capteur.select(adresse);\n'+ 
  '  capteur.write(modeLecture,1);\n'+
  '  for ( int i = 0; i < 9; i++) {\n'+
  '    data[i] = capteur.read();\n'+
  '  }\n'+
  '  //----- calcul de la température mesurée  ---------\n'+
  '  data[1]=data[1] & B10000111; // met à 0 les bits de signes inutiles\n'+
  '  tempet=data[1];\n'+
  '  tempet=tempet<<8;\n'+
  '  tempet=tempet+data[0]; // bits de poids faible\n'+
  '  tempetf=float(tempet)*6.25;\n'+
  '  tempetf=tempetf/100.0;\n'+
  'return tempetf;\n'+
  '}';
  Blockly.Arduino.setups_['cherche_addresse'] = 'capteur.search(adresse);';
  code = 'mesurer_temperature()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
