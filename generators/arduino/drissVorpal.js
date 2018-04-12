



//driss_vorpal_init_hexapod -------------------------------------------------------------------------------------
//Blockly.Arduino['driss_vorpal_init_hexapod'] = function(block) {
Blockly.Arduino.driss_vorpal_init_hexapod = function() {
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>'; 
  Blockly.Arduino.includes_['define_Adafruit_PWMServoDriver'] = '#include <Adafruit_PWMServoDriver.h>';
  Blockly.Arduino.includes_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
  Blockly.Arduino.includes_['define_SPI'] = '#include <SPI.h>';
  Blockly.Arduino.includes_['define_Pixy'] = '#include <Pixy.h>';

  
  Blockly.Arduino.definitions_['define_NUM_LEGS']     = "#define NUM_LEGS 6";


  Blockly.Arduino.definitions_['define_COMENT_01']     = "\n//Masque pour différentes combinaisons de jambes LowBit = Jambe 0";
  Blockly.Arduino.definitions_['define_ALL_LEGS']     = "#define ALL_LEGS      0b111111";
  //Blockly.Arduino.definitions_['define_LEFT_LEGS']    = "#define LEFT_LEGS     0b111000";
  //Blockly.Arduino.definitions_['define_RIGHT_LEGS']   = "#define RIGHT_LEGS    0b000111";
  //Blockly.Arduino.definitions_['define_TRIPOD1_LEGS'] = "#define TRIPOD1_LEGS  0b010101";
  //Blockly.Arduino.definitions_['define_TRIPOD2_LEGS'] = "#define TRIPOD2_LEGS  0b101010";
  //Blockly.Arduino.definitions_['define_FRONT_LEGS']   = "#define FRONT_LEGS    0b100001";
  //Blockly.Arduino.definitions_['define_MIDDLE_LEGS']  = "#define MIDDLE_LEGS   0b010010";
  //Blockly.Arduino.definitions_['define_BACK_LEGS']    = "#define BACK_LEGS     0b001100";
  //Blockly.Arduino.definitions_['define_NO_LEGS']      = "#define NO_LEGS       0b0";

  //Blockly.Arduino.definitions_['define_COMENT_02']     = "\n//Masques de bits individuels pour les jambes";
  //Blockly.Arduino.definitions_['define_LEG0'] = "#define LEG0 0b1";
  //Blockly.Arduino.definitions_['define_LEG1'] = "#define LEG1 0b10";
  //Blockly.Arduino.definitions_['define_LEG2'] = "#define LEG2 0b100";
  //Blockly.Arduino.definitions_['define_LEG3'] = "#define LEG3 0b1000";
  //Blockly.Arduino.definitions_['define_LEG4'] = "#define LEG4 0b10000";
  //Blockly.Arduino.definitions_['define_LEG5'] = "#define LEG5 0b100000";

  //Blockly.Arduino.definitions_['define_COMENT_03']     = "\n";
  //Blockly.Arduino.definitions_['define_LEG0BIT'] = "#define LEG0BIT 0b1";
  //Blockly.Arduino.definitions_['define_LEG1BIT'] = "#define LEG1BIT 0b10";
  //Blockly.Arduino.definitions_['define_LEG2BIT'] = "#define LEG2BIT 0b100";
  //Blockly.Arduino.definitions_['define_LEG3BIT'] = "#define LEG3BIT 0b1000";
  //Blockly.Arduino.definitions_['define_LEG4BIT'] = "#define LEG4BIT 0b10000";
  //Blockly.Arduino.definitions_['define_LEG5BIT'] = "#define LEG5BIT 0b100000";

  //Blockly.Arduino.definitions_['define_COMENT_04']     = "\n";
  //Blockly.Arduino.definitions_['define_ISFRONTLEG'] = "#define ISFRONTLEG(LEG) (LEG==0||LEG==5)";
  //Blockly.Arduino.definitions_['define_ISMIDLEG']   = "#define ISMIDLEG(LEG)   (LEG==1||LEG==4)";
  //Blockly.Arduino.definitions_['define_ISBACKLEG']  = "#define ISBACKLEG(LEG)  (LEG==2||LEG==3)";
  //Blockly.Arduino.definitions_['define_ISLEFTLEG']  = "#define ISLEFTLEG(LEG)  (LEG==0||LEG==1||LEG==2)";
  //Blockly.Arduino.definitions_['define_ISRIGHTLEG'] = "#define ISRIGHTLEG(LEG) (LEG==3||LEG==4||LEG==5)";

  Blockly.Arduino.definitions_['define_COMENT_05']     = "\n//jusqu'où balancer les hanches sur des positions comme le trépied ou le quadrupède";
  //Blockly.Arduino.definitions_['define_HIPSWING'] = "#define HIPSWING 25";
  //Blockly.Arduino.definitions_['define_HIPSMALLSWING'] = "#define HIPSMALLSWING 10";
  //Blockly.Arduino.definitions_['define_HIPSWING_RIPPLE'] = "#define HIPSWING_RIPPLE 20";
  //Blockly.Arduino.definitions_['define_HIP_FORWARD_MAX'] = "#define HIP_FORWARD_MAX 175";
  //Blockly.Arduino.definitions_['define_HIP_FORWARD'] = "#define HIP_FORWARD (HIP_NEUTRAL+HIPSWING)";
  //Blockly.Arduino.definitions_['define_HIP_FORWARD_SMALL'] = "#define HIP_FORWARD_SMALL (HIP_NEUTRAL+HIPSMALLSWING)";
  Blockly.Arduino.definitions_['define_HIP_NEUTRAL'] = "#define HIP_NEUTRAL 90";
  //Blockly.Arduino.definitions_['define_HIP_BACKWARD'] = "#define HIP_BACKWARD (HIP_NEUTRAL-HIPSWING)";
  //Blockly.Arduino.definitions_['define_HIP_BACKWARD_SMALL'] = "#define HIP_BACKWARD_SMALL (HIP_NEUTRAL-HIPSMALLSWING)";
  //Blockly.Arduino.definitions_['define_HIP_BACKWARD_MAX'] = "#define HIP_BACKWARD_MAX 0";
  //Blockly.Arduino.definitions_['define_HIP_FORWARD_RIPPLE'] = "#define HIP_FORWARD_RIPPLE (HIP_NEUTRAL+HIPSWING_RIPPLE)";
  //Blockly.Arduino.definitions_['define_HIP_BACKWARD_RIPPLE'] = "#define HIP_BACKWARD_RIPPLE (HIP_NEUTRAL-HIPSWING_RIPPLE)";
  //Blockly.Arduino.definitions_['define_HIP_FOLD 150'] = "#define HIP_FOLD 150";
  

  //Blockly.Arduino.definitions_['define_COMENT_06']     = "\n";
  //Blockly.Arduino.definitions_['define_NOMOVE'] = "#define NOMOVE (-1)";
  //Blockly.Arduino.definitions_['define_LEFT_START'] = "#define LEFT_START 3";
  //Blockly.Arduino.definitions_['define_RIGHT_START'] = "#define RIGHT_START 0";
  //Blockly.Arduino.definitions_['define_KNEE_OFFSET'] = "#define KNEE_OFFSET 6";

  //Blockly.Arduino.definitions_['define_COMENT_07']     = "\n";
  //Blockly.Arduino.definitions_['define_SERVO_IIC_ADDR'] = "#define SERVO_IIC_ADDR  (0x40)";

  //Blockly.Arduino.definitions_['define_COMENT_08'] = "\n//utilisés dans void turn(...)";
  //Blockly.Arduino.definitions_['define_NUM_TURN_PHASES'] = "#define NUM_TURN_PHASES 6";
  //Blockly.Arduino.definitions_['define_FBSHIFT_TURN'] = "#define FBSHIFT_TURN    40  //remonter les pattes avant, les pattes arrière vers l'avant";
  
  //Blockly.Arduino.definitions_['define_COMENT_09'] = "\n//utilisés dans void wave(...)";
  //Blockly.Arduino.definitions_['define_NUM_WAVE_PHASES'] = "#define NUM_WAVE_PHASES 12";
  //Blockly.Arduino.definitions_['define_WAVE_CYCLE_TIME'] = "#define WAVE_CYCLE_TIME 900";
  //Blockly.Arduino.definitions_['define_KNEE_WAVE'] = "#define KNEE_WAVE  60";

  //Blockly.Arduino.definitions_['define_COMENT_10'] = "\n//utilisés dans void gait_sidestep(...)";
  //Blockly.Arduino.definitions_['define_NUM_SIDESTEP_PHASES'] = "#define NUM_SIDESTEP_PHASES 6";
  //Blockly.Arduino.definitions_['define_FBSHIFT'] = "#define FBSHIFT    50 //décaler les pattes avant, les pattes arrière vers l'avant";
  
  //Blockly.Arduino.definitions_['define_COMENT_11']     = "\n";
  Blockly.Arduino.definitions_['define_BeeperPin'] = "#define BeeperPin 4";
  Blockly.Arduino.definitions_['define_ServoTypePin'] = "#define ServoTypePin 5 //is used to signal digital vs. analog servo mode";
  Blockly.Arduino.definitions_['define_ServoTypeGroundPin'] = "#define ServoTypeGroundPin 6  // 6 provides a ground to pull 5 low if digital servos are in use";
  //Blockly.Arduino.definitions_['define_BF_ERROR'] = "#define BF_ERROR  100       // deep beep for error situations";
  //Blockly.Arduino.definitions_['define_BD_MED'] = "#define BD_MED    50          // medium long beep duration";

  //Blockly.Arduino.definitions_['define_COMENT_12'] = "\n"+
  //"// En fonction des servos, les largeurs d'impulsion min et max peuvent varier, \n"+
  //"// on veut qu'elles soient aussi petites / grandes que possible sans atteindre l'arrêt dur pour une portée maximale\n"+ 
  //"// Les modifier au besoin pour correspondre aux servos ! Si vous entendez bourdonnement ou agitation, vous êtes allé trop loin\n"+
  //"// Ces valeurs sont bonnes pour les petits servos à engrenages en métal MG90S clone et Genuine Tower Pro MG90S.";
  Blockly.Arduino.definitions_['define_PWMFREQUENCY'] = "#define PWMFREQUENCY (60*FreqMult)";
  //Blockly.Arduino.definitions_['define_SERVOMIN'] = "#define SERVOMIN  (190*FreqMult) // this is the 'minimum' pulse length count (out of 4096)";
  //Blockly.Arduino.definitions_['define_SERVOMAX'] = "#define SERVOMAX  (540*FreqMult) // this is the 'maximum' pulse length count (out of 4096)";


  Blockly.Arduino.variables_['var_servoDriver'] = 'Adafruit_PWMServoDriver servoDriver = Adafruit_PWMServoDriver(SERVO_IIC_ADDR);';
  Blockly.Arduino.variables_['var_ServoPos'] = 'short ServoPos[2*NUM_LEGS];';
  
  //Blockly.Arduino.variables_['var_startedStanding'] = 'long startedStanding = 0;   // the last time we started standing, or reset to -1 if we didn\'t stand recently';
  //Blockly.Arduino.variables_['var_LastReceiveTime'] = 'long LastReceiveTime = 0;   // last time we got a bluetooth packet';
  //Blockly.Arduino.variables_['var_LastValidReceiveTime'] = 'long LastValidReceiveTime = 0;  // last time we got a completely valid packet including correct checksum';

  
  Blockly.Arduino.codeFunctions_['define_beep2'] = '\n//Beep \n'+
  'void beep(int f) {\n' +
  ' beep(f, 250);\n' +
  '}';
  
  
  Blockly.Arduino.codeFunctions_['define_beep'] = '\n//Beep à la fréquence f pendant t millisecondes \n'+
  'void beep(int f, int t) {\n' +
  ' if (f > 0 && t > 0) {\n' +
  '   tone(BeeperPin, f, t);\n' +
  ' } else {\n' +
  '   noTone(BeeperPin);\n' +
  ' }\n' +
  '}';


  Blockly.Arduino.codeFunctions_['define_resetServoDriver'] = '\n'+
  'void resetServoDriver() {\n' +
  ' servoDriver.begin();\n' +
  ' servoDriver.setPWMFreq(PWMFREQUENCY);  // Analog servos run at ~60 Hz updates\n' +
   '}';

  Blockly.Arduino.codeFunctions_['define_setServo'] = '\n'+
  'void setServo(int servonum, int position) {\n' +
  ' int origpos = position;\n' +
  ' int p = map(position,0,180,SERVOMIN,SERVOMAX);\n' +
  ' servoDriver.setPWM(servonum, 0, p);\n' +
  ' ServoPos[servonum] = origpos; //Laisse les servo dans la position de la dernière commande\n' +
  ' //Serial.print("SS:");Serial.print(servonum);Serial.print(":");Serial.println(position);\n' +
  '}';

  
  Blockly.Arduino.codeFunctions_['define_setHipRaw'] = '\n//Cette fonction ne distingue pas la droite de la gauche \n'+
  'void setHipRaw(int leg, int pos) { \n' +
  ' setServo(leg, pos);\n' +
  '}';

/*
  Blockly.Arduino.codeFunctions_['define_setHip2'] = '\n//ajuste l\'angle pour les jambes gauche et droite de sorte que 0 degrés se déplace "vers l\'avant" \n'+
  'void setHip(int leg, int pos) { \n' +
  ' //inverser le côté gauche pour un mouvement vers l\'avant\n' +
  ' if (leg >= LEFT_START) {\n' +
  '   pos = 180 - pos;\n' +
  ' }\n' +
  ' setHipRaw(leg, pos);\n' +
  '}';
*/
  Blockly.Arduino.codeFunctions_['define_setHip'] = '\n//cette version de setHip s\'ajuste non seulement pour la gauche et la droite,\n'+
  '//mais aussi pour décaler les pattes avant un peu en arrière et les pattes arrières vers l\'avant\n' +
  '//pour faire un meilleur équilibre pour certaines allures comme le trépied ou le quadrupède \n' +
  'void setHip(int leg, int pos, int adj) { \n' +
  ' if (ISFRONTLEG(leg)) {\n' +
  '   pos -= adj;\n' +
  ' } else if (ISBACKLEG(leg)) {\n' +
  '     pos += adj;\n' +
  '   }\n' +
  ' //inverser le côté gauche pour un mouvement vers l\'avant\n' +
  ' if (leg >= LEFT_START) {\n' +
  '   pos = 180 - pos;\n' +
  ' }\n' +
  ' setHipRaw(leg, pos);\n' +
  '}';
/*
  Blockly.Arduino.codeFunctions_['define_setLeg2'] = '\n'+
  '//Cette fonction définit les positions du genou et de la hanche en une seule commande\n'+
  '//Pour la hanche, le côté gauche est inversé, donc la direction avant est cohérente\n'+
  '//elle prend un masque de bits pour spécifier les jambes à déplacer,\n'+
  '//alors que les fonctions de base setHip et setKnee prennent des numéros de jambe et non pas des masques\n'+
  '//si une position vaut -1 alors rien ne change\n'+
  'void setLeg(int legmask, int hip_pos, int knee_pos, int adj) {\n' +
  ' setLeg(legmask, hip_pos, knee_pos, adj, 0);\n' +
  '}';
*/
  Blockly.Arduino.codeFunctions_['define_setLeg'] = '\n' +
  'void setLeg(int legmask, int hip_pos, int knee_pos, int adj, int raw) {\n' +
  ' for (int i = 0; i < NUM_LEGS; i++) {\n' +
  '   if (legmask & 0b1) {  // if the lowest bit is ON\n' +
  '     if (hip_pos != NOMOVE) {\n' +
  '       if (!raw) {\n' +
  '         setHip(i, hip_pos, adj);\n' +
  '       } else {\n' +
  '         setHipRaw(i, hip_pos);\n' +
  '       }\n' +
  '     }\n' +
  '     if (knee_pos != NOMOVE) {\n' +
  '       setKnee(i, knee_pos);\n' +
  '     }\n' +
  '   }\n' +
  '   legmask = (legmask>>1);  // shift down one bit position\n' +
  ' }\n' +
  '}';


/*  
  Blockly.Arduino.codeFunctions_['define_setKnee'] = '\n'+
  'void setKnee(int leg, int pos) {\n' +
  ' //trouver le genou associé à la jambe si ce n\'est pas déjà un genou\n' +
  ' if (leg < KNEE_OFFSET) {\n' +
  '   leg += KNEE_OFFSET;\n' +
  ' }\n' +
  ' setServo(leg, pos);\n' +
  '}';


  

  Blockly.Arduino.codeFunctions_['define_turn'] = '\n'+
  'void turn(int ccw, int hipforward, int hipbackward, int kneeup, int kneedown, long timeperiod) {\n' +
  ' //utiliser des groupes de trépied pour tourner en place\n' +
  ' if (ccw) {\n' +
  '   int tmp = hipforward;\n' +
  '   hipforward = hipbackward;\n' +
  '   hipbackward = tmp;\n' +
  ' }\n' +
  ' \n' +
  ' long t = millis()%timeperiod;\n' +
  ' long phase = (NUM_TURN_PHASES*t)/timeperiod;\n' +
  ' \n' +
  ' //Serial.print("PHASE: ");\n' +
  ' //Serial.println(phase);\n' +
  ' \n' +
  ' switch (phase) {\n' +
  '   case 0://les jambes du centre-gauche et du non-centre-droit se soulèvent au genou\n' +
  '         setLeg(TRIPOD1_LEGS, NOMOVE, kneeup, 0);\n' +
  '         break;\n' +
  ' \n' +
  '   case 1://les jambes du centre-gauche et du non-centre-droit se déplacent dans le sens des aiguilles d\'une montre au niveau des hanches, \n'+
  '          //tandis que le reste des jambes bouge dans le sens inverse des aiguilles d\'une montre au niveau de la hanche.\n' +
  '         setLeg(TRIPOD1_LEGS, hipforward, NOMOVE, FBSHIFT_TURN, 1);\n' +
  '         setLeg(TRIPOD2_LEGS, hipbackward, NOMOVE, FBSHIFT_TURN, 1);\n' +
  '         break;\n' +
  ' \n' +
  '   case 2://remettre les premières jambes sur le sol\n' +
  '         setLeg(TRIPOD1_LEGS, NOMOVE, kneedown, 0);\n' +
  '         break;\n' +
  ' \n' +
  '   case 3://soulevez l\'autre ensemble de jambes au genou\n' +
  '         setLeg(TRIPOD2_LEGS, NOMOVE, kneeup, 0);\n' +
  '         break;\n' +
  ' \n' +
  ' \n' +
  '   case 4://similaire à la phase 1, déplacer les jambes levées AIg.Montre et les jambes abaissées Inv. Aig. Montre \n'+
  '         setLeg(TRIPOD1_LEGS, hipbackward, NOMOVE, FBSHIFT_TURN, 1);\n' +
  '         setLeg(TRIPOD2_LEGS, hipforward, NOMOVE, FBSHIFT_TURN, 1);\n' +
  '         break;\n' +
  ' \n' +
  '   case 5://mettre le deuxième ensemble de jambes vers le bas, et le cycle se répète\n' +
  '         setLeg(TRIPOD2_LEGS, NOMOVE, kneedown, 0);\n' +
  '         break;\n' +

  ' }\n' +
  '}';
*/
  Blockly.Arduino.codeFunctions_['define_stand'] = '\n'+
  'void stand() {\n' +
  ' setLeg(ALL_LEGS, HIP_NEUTRAL, KNEE_STAND, 0);\n' +
  '}';

  Blockly.Arduino.codeFunctions_['define_stand_90_degrees'] = '\n'+
  'void stand_90_degrees() {\n' +
  ' setLeg(ALL_LEGS, 90, 90, 0);\n' +
  '}';
/*
  Blockly.Arduino.codeFunctions_['define_laydown'] = '\n'+
  'void laydown() {\n' +
  ' setLeg(ALL_LEGS, HIP_NEUTRAL, KNEE_UP, 0);\n' +
  '}';

  Blockly.Arduino.codeFunctions_['define_tiptoes'] = '\n'+
  'void tiptoes() {\n' +
  ' setLeg(ALL_LEGS, HIP_NEUTRAL, KNEE_TIPTOES, 0);\n' +
  '}';

  Blockly.Arduino.codeFunctions_['define_wave'] = '\n'+
  'void wave(int dpad) {\n' +
  ' long t = millis()%WAVE_CYCLE_TIME;\n' +
  ' long phase = (NUM_WAVE_PHASES*t)/WAVE_CYCLE_TIME;\n' +
  ' if (dpad == \'b\') {\n' +
  '   phase = 11-phase;  // Reculer\n' +
  ' }\n' +
  ' \n' +
  ' switch (dpad) {\n' +
  '   case "f" : \n' +
  '   case "b": //Tourbilloner\n' +
  '             setLeg(ALL_LEGS, HIP_NEUTRAL, NOMOVE, 0); // Positionner les hanches à 90 degrees en restant stable\n' +
  '             if (phase < NUM_LEGS) {\n' +
  '               setKnee(phase, KNEE_WAVE);\n' +
  '             } else {\n' +
  '               setKnee(phase-NUM_LEGS, KNEE_STAND);\n' +
  '             }\n' +
  '             break;\n' +
  '   case "l": //Basculer sur les jambes avant / arrière\n' +
  '             if (phase < NUM_WAVE_PHASES/2) {\n' +
  '               setKnee(0, KNEE_TIPTOES);\n' +
  '               setKnee(5, KNEE_STAND);\n' +
  '               setHipRaw(0, HIP_FORWARD);\n' +
  '               setHipRaw(5, HIP_BACKWARD-40);\n' +
  '               setKnee(2, KNEE_TIPTOES);\n' +
  '               setKnee(3, KNEE_STAND);\n' +
  '               setHipRaw(2, HIP_BACKWARD);\n' +
  '               setHipRaw(3, HIP_FORWARD+40);\n' +
  '               \n' +
  '               setLeg(LEG1, HIP_NEUTRAL, KNEE_TIPTOES, 0);\n' +
  '               setLeg(LEG4, HIP_NEUTRAL, KNEE_NEUTRAL, 0);\n' +
  '             } else {;\n' +
  '               setKnee(0, KNEE_STAND);;\n' +
  '               setKnee(5, KNEE_TIPTOES);\n' +
  '               setHipRaw(0, HIP_FORWARD+40);\n' +
  '               setHipRaw(5, HIP_BACKWARD);\n' +
  '               setKnee(2, KNEE_STAND);\n' +
  '               setKnee(3, KNEE_TIPTOES);\n' +
  '               setHipRaw(2, HIP_BACKWARD-40);\n' +
  '               setHipRaw(3, HIP_FORWARD);\n' +
  '               \n' +
  '               setLeg(LEG1, HIP_NEUTRAL, KNEE_NEUTRAL, 0);\n' +
  '               setLeg(LEG4, HIP_NEUTRAL, KNEE_TIPTOES, 0);\n' +
  '             }\n' +
  '             break;\n' +
  '   case "r": //Basculer autour des jambes du milieu\n' +
  '             setLeg(MIDDLE_LEGS, HIP_NEUTRAL, KNEE_STAND, 0);\n' +
  '             if (phase < NUM_LEGS) {\n' +
  '               setLeg(FRONT_LEGS, HIP_NEUTRAL, KNEE_NEUTRAL, 0);\n' +
  '               setLeg(BACK_LEGS, HIP_NEUTRAL, KNEE_TIPTOES, 0);\n' +
  '             } else {\n' +
  '               setLeg(FRONT_LEGS, HIP_NEUTRAL, KNEE_TIPTOES, 0);\n' +
  '               setLeg(BACK_LEGS, HIP_NEUTRAL, KNEE_NEUTRAL, 0);\n' +
  '             }\n' +
  '             break;\n' +
  '   case "w": //Se poser sur le sol et mettre les jambes en vagues\n' +
  '             setLeg(ALL_LEGS, HIP_NEUTRAL, NOMOVE, 0);\n' +
  '             int p = phase/2;\n' +
  '             for (int i = 0; i < NUM_LEGS; i++) {\n' +
  '               if (i == p) {\n' +
  '                 setKnee(i, KNEE_UP_MAX);\n' +
  '               } else {\n' +
  '                 setKnee(i, KNEE_NEUTRAL);\n' +
  '             }\n' +
  '             return;\n' +
  '             if (phase < NUM_LEGS) {\n' +
  '               setKnee(phase/2, KNEE_UP);\n' +
  '             } else {\n' +
  '               int p = phase-NUM_LEGS;\n' +
  '               if (p < 0) p+=NUM_LEGS;\n' +
  '               setKnee(p/2, KNEE_NEUTRAL+10);\n' +
  '             }\n' +
  '             break;\n' +
  '  }\n' +
  '}';


  Blockly.Arduino.codeFunctions_['define_gait_sidestep'] = '\n'+
  'void gait_sidestep(int left, long timeperiod) {\n' +
  ' // Ce mode se compose de 6 phases et utilise des définitions de trépied;\n' +
  ' long t = millis()%timeperiod;\n' +
  ' long phase = (NUM_SIDESTEP_PHASES*t)/timeperiod;\n' +
  ' int side1 = LEFT_LEGS;\n' +
  ' int side2 = RIGHT_LEGS;\n' +
  ' \n' +
  ' if (left == 0) {\n' +
  '   side1 = RIGHT_LEGS;\n' +
  '   side2 = LEFT_LEGS\n' +
  ' }\n' +
  ' \n' +
  ' //Serial.print("PHASE: ");\n' +
  ' //Serial.println(phase);\n' +
  ' \n' +
  ' switch (phase) {\n' +
  '   case 0 : //Soulevez le trépied groupe 1 pendant que le groupe 2 passe au réglage neutre\n' +
  '             setLeg(TRIPOD1_LEGS, HIP_NEUTRAL, KNEE_UP, FBSHIFT);\n' +
  '             setLeg(TRIPOD2_LEGS, HIP_NEUTRAL, KNEE_NEUTRAL, FBSHIFT);\n' +
  '             break;\n' +
  '   case 1 : //Glisser en enroulant un côté sous le corps tout en prolongeant l\'autre côté\n' +
  '             setLeg(TRIPOD2_LEGS&side1, HIP_NEUTRAL, KNEE_DOWN, FBSHIFT);\n' +
  '             setLeg(TRIPOD2_LEGS&side2, HIP_NEUTRAL, KNEE_RELAX, FBSHIFT);\n' +
  '             break;\n' +
  '   case 2 : //Reposez le premier jeu de jambes sur le sol et, en même temps, \n'+
  '            //Mettre les jambes recourbées en position neutre.\n' +
  '             setLeg(TRIPOD2_LEGS, HIP_NEUTRAL, KNEE_NEUTRAL, FBSHIFT);\n' +
  '             setLeg(TRIPOD1_LEGS, HIP_NEUTRAL, KNEE_NEUTRAL, FBSHIFT);\n' +
  '             break;\n' +
  '   case 3 : //Soulever le trépied groupe 2 pendant que le groupe 2 passe au réglage neutre \n'+
  '             setLeg(TRIPOD2_LEGS, HIP_NEUTRAL, KNEE_UP, FBSHIFT);\n' +
  '             setLeg(TRIPOD1_LEGS, HIP_NEUTRAL, KNEE_NEUTRAL, FBSHIFT);\n' +
  '             break;\n' +
  '   case 4 : //Glisser en enroulant un côté sous le corps tout en prolongeant l\'autre côté \n'+
  '             setLeg(TRIPOD1_LEGS&side1, HIP_NEUTRAL, KNEE_DOWN, FBSHIFT);\n' +
  '             setLeg(TRIPOD1_LEGS&side2, HIP_NEUTRAL, KNEE_RELAX, FBSHIFT);\n' +
  '             break;\n' +
  '   case 5 : //Reposer toutes les jambes sur le sol, puis répétez le cycle \n'+
  '             setLeg(TRIPOD1_LEGS, HIP_NEUTRAL, KNEE_NEUTRAL, FBSHIFT);\n' +
  '             setLeg(TRIPOD2_LEGS, HIP_NEUTRAL, KNEE_NEUTRAL, FBSHIFT);\n' +
  '             break;\n' +
  '  }\n'+
  '}\n';
*/
  
  Blockly.Arduino.setups_['setup_vorpal_init_hexapod'] = ''+
  ' //Serial.begin(9600);\n'+
  ' pinMode(BeeperPin, OUTPUT);\n'+
  ' beep(200);\n'+
  ' pinMode(ServoTypeGroundPin, OUTPUT);\n'+
  ' digitalWrite(ServoTypeGroundPin, LOW);\n'+
  ' pinMode(ServoTypePin, INPUT_PULLUP);\n'+
  ' delay(300);\n'+
  ' \n'+
  ' if (digitalRead(ServoTypePin) == LOW) { // Analog servo mode\n'+
  '   FreqMult = 1;  // Analog servos should be run at a slower speed (60 hertz).\n'+
  ' }\n'+
  ' \n'+
  ' for (int i = 0; i < FreqMult; i++) {\n'+
  '   beep(800, 50);\n'+
  '   delay(100);\n'+
  ' }\n'+
  ' \n'+
  ' resetServoDriver();\n'+
  ' delay(250);\n'+
  ' \n'+
  ' stand();\n'+
  ' delay(300);\n'+
  ' \n'+
  ' beep(400); // Signals end of startup sequence\n'+
  ' \n'+
  ' yield();\n'+
  '}\n';




  var code = '\n';
  return code;
};


//driss_vorpal_faire_un_bip -------------------------------------------------------------------------------------
Blockly.Arduino.driss_vorpal_faire_un_bip = function() {
  var code = 'beep(800, 250);\n';
  return code;
};

//driss_vorpal_emettre_son_freq_duree -------------------------------------------------------------------------------------
Blockly.Arduino['driss_vorpal_emettre_son_freq_duree'] = function(block) {
  var value_frequence = Blockly.Arduino.valueToCode(block, 'FREQUENCE', Blockly.Arduino.ORDER_ATOMIC);
  var value_duree = Blockly.Arduino.valueToCode(block, 'DUREE', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'beep('+value_frequence+', '+value_duree+');\n';
  return code;
};


//driss_vorpal_position_repos -------------------------------------------------------------------------------------
Blockly.Arduino['driss_vorpal_position_repos'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'stand_90_degrees();\n';
  return code;
};

//driss_vorpal_position_debout -------------------------------------------------------------------------------------
Blockly.Arduino['driss_vorpal_position_debout'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'stand();\n';
  return code;
};


//driss_vorpal_set_hip_angle -------------------------------------------------------------------------------------
Blockly.Arduino.driss_vorpal_set_hip_angle = function() {
  var dropdown_hips = this.getFieldValue('HIP');
  var value_name = Blockly.Arduino.valueToCode(this, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};