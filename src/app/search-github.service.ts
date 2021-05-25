import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http';
import{ User} from './user';
import{ Repository} from './repository';
import { AotCompilerOptions } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {
 user!: User;
 repository!: Repository;
 repoData =[ ];
 newUserData : any = [];
  constructor(private http: HttpClient) {
    this.user = new User("",0,"","",new Date());
    this.repository= new Repository( "","",new Date(),"","");
   }

   getUserData(usernames:string){
     interface ApiResponse {
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
        this.user.avator_url = response.avator_url;
        this.user.created_at = response.created_at;

        resolve()
      },
      error=>{

        reject(error)
      })
      this.http.get<any> ("https://api.github.com/users/" + usernames +"/repos").toPromise().then(response =>{
        for(let i=0; i<response.length; i++){
          this.newUserData = new Repository( response[i].name,response[1].description , response[i].update_at, response[i].clone_url, response[i].language)
          this.repoData.push;{this.newUserData};
        }

        resolve()
      
      },(error: any) =>{
        reject(error);
      })

     
    })
    return promise
  }
}