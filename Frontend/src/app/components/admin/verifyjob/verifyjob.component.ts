import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminpageService } from 'src/app/services/adminpage.service';

@Component({
  selector: 'app-verifyjob',
  templateUrl: './verifyjob.component.html',
  styleUrls: ['./verifyjob.component.css']
})
export class VerifyjobComponent {

  token =localStorage.getItem('token');
  constructor(private router:Router, private api:AdminpageService){}

  datas: any[] = [];
  ngOnInit(): void{
    
    
    this.api.getAllData().subscribe(data => {
      this.datas = data;
    });

    

  }

  deleteapply(item:any){
    this.api.updatejobapply({_id:item}).subscribe((res:any)=>{
      alert('deleted successfully')
      this.ngOnInit()
    })
  }

  verifydata(item:any){
    this.api.verifyjobapply({_id:item}).subscribe((res:any)=>{
      alert('verify successfully')
      
      this.ngOnInit()
    })
  }

  // getdata(){
  //   this.api.getAllData()
  //     .subscribe((res: any) => {
  //       this.jobs = res.data;
  //       console.log(res);
        
  //     });
  // }
  


}
