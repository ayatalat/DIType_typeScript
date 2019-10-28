 
interface MessageService {
    sendMessage :(message: string) => void
}
 
class Email implements MessageService {
    sendMessage(message: string) {
        console.log('send Notification by Email'+message)
    }
}
 
class SMS implements MessageService {
    sendMessage(message: string) {
        console.log('send Notification by SMS'+ message)
    }
}
 
class DataBase implements MessageService {
    sendMessage(message: string) {
        console.log('save Notification DataBase'+ message)
    }
}
 
 
 
class Notifications {
    service : any;
 
    constructor(messageService: MessageService) {
        this.service = messageService;
    }
 
    sendNotifications(message: string) {
        this.service.sendMessage(message);
    }
}
 
 
function main () {
    const messageService = new SMS();
    const noifications = new Notifications(messageService);
    noifications.sendNotifications(" Hi");
}
 
main();

