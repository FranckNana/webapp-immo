import { Users } from './Users.model';


export class Email {
    constructor(public nom: String, 
                public emailDst: String, 
                public emailFrom: String, 
                public message: String){}
}

export class RespEmail{
    constructor(public nom: String, 
        public emailDst: String, 
        public emailFrom: String, 
        public message: String,
        public user: Users){}
}
