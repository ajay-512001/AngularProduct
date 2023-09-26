import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-second-routing-page',
  templateUrl: './second-routing-page.component.html',
  styleUrls: ['./second-routing-page.component.scss']
})
export class SecondRoutingPageComponent implements OnInit {
  name:any;
  qunt:any;
  price:any;
  file:any;
  id:any;
  isView = "false";
  isUpdate = "false";
  isAdd = "False";
  
  constructor(private _router: Router, private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("Id");
    this.isAdd = localStorage.getItem("AddData");
    this.isUpdate = localStorage.getItem("updateData");
    this.isView = localStorage.getItem("onlyView");
    //console.log(this.id)
    if(this.id != null && this.id != undefined && this.id != ""){
      this.findData(this.id);
    }
  }

  
  findData(fId){
    this._httpClient.get('https://productlistapi.onrender.com/api/products/'+(fId).toString()).subscribe((res) => {
      //console.log(JSON.stringify(res));
      this.name = res["name"]
      this.qunt = res["quantity"]
      this.price = res["price"]
      //this.file = res["image"]
    });
  }
  // this._commonUtil.messageBox("", this._translate.instant("ErrorMessage.msgEnterValidAmnt"));
  // private _commonUtil: CommonnUtil
  addData(){

    if(this.name == undefined || this.name == null || this.name == ""){
        alert("Please add a Name");
        return;
    }
    if(this.qunt == undefined || this.qunt == null || this.qunt == ""){
      alert("Please add a Quantity");
      return;
    }
    if(this.price == undefined || this.price == null || this.price == ""){
      alert("Please add a Price");
      return;
    }

    let obj = {
      "name": this.name,
      "quantity": this.qunt,
      "price": this.price,
      "image": this.file
    }
    this._httpClient.post('https://productlistapi.onrender.com/api/products',obj).subscribe((res) => {
      //console.log(JSON.stringify(res));
      this.backToFirst();
    });
  }

  updateData(){

   
    if(this.name == undefined || this.name == null || this.name.trim(' ') == ""){
      alert("Please add a Name");
      return;
    }
    if(this.qunt == undefined || this.qunt == null || this.qunt.trim(' ') == ""){
      alert("Please add a Quantity");
      return;
    }
    if(this.price == undefined || this.price == null || this.price.trim(' ') == ""){
      alert("Please add a Price");
      return;
    }

    let obj = {
      "name": this.name,
      "quantity": this.qunt,
      "price": this.price,
      "image": this.file
    }
    this._httpClient.put('https://productlistapi.onrender.com/api/products/' + (this.id).toString(), obj).subscribe((res) => {
      //console.log(JSON.stringify(res));
      this.backToFirst();
    });

  }


  backToFirst(){
    localStorage.removeItem("Id");
    localStorage.removeItem("AddData");
    localStorage.removeItem("updateData");
    localStorage.removeItem("onlyView");
    this._router.navigateByUrl("/prodFirst");
  }

}
