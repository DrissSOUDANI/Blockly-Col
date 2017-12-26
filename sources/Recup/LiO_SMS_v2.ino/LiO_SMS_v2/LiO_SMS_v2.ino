#include <LTask.h>
#include <LGSM.h>

boolean MessageRecu;
String Numero;
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

void setup()
{
  pinMode(3, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(5, OUTPUT);
  while(!LSMS.ready()) {
    delay(1000);
  }
LSMS.flush();

}


void loop()
{
  MessageRecu = false;
  Numero = "";
  Message = "";
  digitalWrite(3,LOW);
  digitalWrite(6,LOW);
  digitalWrite(5,LOW);
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
      if (Message == "ON") {
        digitalWrite(3,HIGH);

      }
      if (Message == "OFF") {
        digitalWrite(3,LOW);

      }
      char* num = new char[Numero.length()+1];
      strcpy(num, Numero.c_str());
      String buf = (String("Message recu : ") + String(Message));
      char* msg = new char[buf.length()+1];
      strcpy(msg, buf.c_str());
      sendSMS(num, msg);
      
    }
  }
  
}

