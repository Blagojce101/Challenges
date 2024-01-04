// 3. Write a class using a constructor, which will describe an email message.
// A method for displaying the entire message on the screen should be
// implemented in it (via alert).
// Each message has From, To, Subject and Message.
// Then instantiate an object based on the previous one, in which these
// parameters will be entered through prompts.
// Design a page, with fields for email .With the help of the object, display
// all the information from the object in the appropriate fields in the form
// for sending an email.


const from = document.querySelector("#fromId");
const to = document.querySelector("#toId");
const subject = document.querySelector("#subjectId");
const textarea = document.querySelector("#textareaId");
const sendBtn = document.querySelector("#sendBtn");


class Email {
    constructor (value) {
        this.from = from.value;
        this.to = to.value;
        this.subject = subject.value;
        this.textarea = textarea.value;

    }
    sendAlert() {
        alert (`This email is from ${this.from}, 
        To ${this.to},
        The subject is ${this.subject},
        and the message is ${this.textarea}`);
    }
}


sendBtn.addEventListener("click", function () {
    const email = new Email();
    console.log(email);
    email.sendAlert();

    from.value = "";
    to.value = "";
    subject.value = "";
    textarea.value = "";
});