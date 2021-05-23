import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{ User} from './user';
import{ Repository} from './repository';

@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {
 user!: User;
 repository!: Repository;
 repoData =[]
  constructor(private http: HttpClient) {
    this.user = new User("",0,"","",new Date());
    this.repository= new Repository( "","",new Date(),"","");
   }

   getUserData(usernames:string){
     interface ApiResonse {
       bio : string,
       public_repos : number,
       login : string,
       avator_url : string,
       created_at :  Date,
     }
     
   
     let promise = new Promise <void>((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/" + usernames).toPromise().then (response=>{
        this.user.bio = response.bio;
        this.user.public_repos = response.public_repos;
        this.user.login = response.login;
        this.user.avator_url = response.avatar_url;
        this.user.created_at = response.created_at;
       })
      
       
       resolve()
       
     })
   }
}
