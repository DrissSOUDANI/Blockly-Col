#include <LTask.h>
#include <LGSM.h>

boolean MessageRecu;
String Numero;
boolean DEL_Blanche_allumee;
boolean Allume_DEL_Blanche;
String Message;

String getNumSMS() {
 char num[20] ;
 LSMS.remoteNumber(num, 20);
 String numero(num);
 return  numero;
}

String getMessageSMS() {
 char msg[100]="" ;
 int len=0 ;
 while(true) {
  int c = LSMS.read();
  if(c < 0) break ;
  msg[len++] = (char)c;
  }
 String message(msg);
 return message;
}

void sendSMS(char num[], char msg[]) {
 LSMS.beginSMS(num);
 LSMS.print(msg);
 LSMS.endSMS();
}

/*Efface les SMS */
void deleteSMS() {
 while (LSMS.available()) {
   LSMS.flush();
 }
}

void setup()
{
  pinMode(3, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(4, OUTPUT);
  while(!LSMS.ready()) {
    delay(1000);
  }
LSMS.flush();

  pinMode(2, INPUT);
}


void loop()
{
  MessageRecu = false;
  Numero = "";
  Message = "";
  DEL_Blanche_allumee = false;
  Allume_DEL_Blanche = false;
  digitalWrite(3,LOW);
  digitalWrite(6,LOW);
  digitalWrite(5,LOW);
  digitalWrite(4,LOW);
  digitalWrite(6,HIGH);
  while (true) {
    if (LSMS.available()) {
      digitalWrite(5,HIGH);
      delay(1000);
      digitalWrite(5,LOW);
      MessageRecu = true;
      Numero = getNumSMS();
      Message = getMessageSMS();
       LSMS.flush();

    }
    if (MessageRecu) {
      MessageRecu = false;
      if (Message == "WON") {
        Allume_DEL_Blanche = true;

      }
      if (Message == "WOFF") {
        Allume_DEL_Blanche = false;

      }
      if (Message == "RON") {
        digitalWrite(4,HIGH);

      }
      if (Message == "ROFF") {
        digitalWrite(4,LOW);

      }
      char* num = new char[Numero.length()+1];
      strcpy(num, Numero.c_str());
      String buf = (String("Message recu : ") + String(Message));
      char* msg = new char[buf.length()+1];
      strcpy(msg, buf.c_str());
      sendSMS(num, msg);
      
    }
    if (Allume_DEL_Blanche) {
      
      if (!(DEL_Blanche_allumee)) {
        digitalWrite(3,HIGH);
        DEL_Blanche_allumee = true;

      }

    } else {
      if (DEL_Blanche_allumee) {
        digitalWrite(3,LOW);
        DEL_Blanche_allumee = false;

      }

    }
    //Allume_DEL_Blanche = false;
  }
  


}
