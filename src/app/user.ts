export class User {
    constructor(public bio:string, 
        public public_repos: number,
        public login: string, 
        public avator_url :string,
        public created_at:Date){}
}
