// 3. Write a class using a constructor, which will describe an email message.
// A method for displaying the entire message on the screen should be
// implemented in it (via alert).
// Each message has From, To, Subject and Message.
// Then instantiate an object based on the previous one, in which these
// parameters will be entered through prompts.
// Design a page, with fields for email .With the help of the object, display
// all the information from the object in the appropriate fields in the form
// for sending an email.


// I think this is what the solution from the task request should look like !
// Very unclearly explained, especially about the last (3) task. So, I made 2 solutions.
// I hope you will understand me. :)

class Email {
    constructor (from, to, subject, textarea) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.textarea = textarea;

    }
    sendAlert() {
        alert (`From: ${this.from}, 
        To: ${this.to},
        Subject: ${this.subject},
        Message: ${this.textarea}`);
    }
}

const email1 = new Email(prompt("From:"), prompt("To:"), prompt("Subject:"), prompt("Message:"));
email1.sendAlert();
console.log(email1);