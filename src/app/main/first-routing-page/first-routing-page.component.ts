import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-first-routing-page',
  templateUrl: './first-routing-page.component.html',
  styleUrls: ['./first-routing-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FirstRoutingPageComponent implements OnInit {
  name:any;
  qunt:any;
  price:any;
  file:any;
  id:any;
  id_del:any;
  id_upd:any;
  productList = [];
  prodFindList =[];
  name_find:any;
  constructor(private _router: Router, private _httpClient: HttpClient) { }

  ngOnInit(): void {
      this.getData();
  }

  getData(){
    this._httpClient.get('https://productlistapi.onrender.com/api/products').subscribe((res:any[]) => {
      //console.log(JSON.stringify(res));
      this.prodFindList = res;
      this.productList = res.reverse();
      let indexofstatus = 1;
      this.productList.forEach(pdl =>{
        pdl["index"] = indexofstatus;
        indexofstatus++;
      });
    });
  }


  addData(){
    localStorage.setItem("AddData", "true");
    this._router.navigateByUrl("/prodSecond");
  }

  viewData(vId){
    localStorage.setItem("Id", vId);
    localStorage.setItem("onlyView", "true");
    this._router.navigateByUrl("/prodSecond");
  }


  deleteData(dId){
    this._httpClient.delete('https://productlistapi.onrender.com/api/products/'+(dId).toString()).subscribe((res) => {
      //console.log(JSON.stringify(res));
      this.getData();
    });
  }


  GetDtatUpdate(uId){
    localStorage.setItem("Id", uId);
    localStorage.setItem("updateData", "true");
    this._router.navigateByUrl("/prodSecond");
  }

  findData(name){
    this.productList = this.prodFindList.filter(fn=> fn.name.toLowerCase().includes(name.toLowerCase().trim(" ")));
    let indexofstatus = 1;
      this.productList.forEach(pdl =>{
        pdl["index"] = indexofstatus;
        indexofstatus++;
      });
  }
}
