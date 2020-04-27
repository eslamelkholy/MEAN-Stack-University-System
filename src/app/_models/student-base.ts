export class StudentBase {
    constructor(
        public _id?: number, 
        public Name?: string, 
        public Email?: string,
        public Department?:number,
        public Courses?:number,
    ){}
}
