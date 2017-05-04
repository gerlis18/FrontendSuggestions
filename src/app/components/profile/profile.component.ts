import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  protected profile;
  protected profileUsername;
  protected param;
  constructor(
    private _authService: AuthService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getParam();
    if (this.param > 0) {
      this.getProfileUser(this.param);
    }else{
      this.getProfileByUsername(this.param)
    }
    
  }

  getParam() {
    this._route.params.subscribe(
      param => {
        if (param['id'] > 0) {
          this.param = param['id'];
        }else if(param['id'] != ''){
          this.param = param['id'];
        }

      }
    );
  }

  getProfileUser(id) {
    this._authService.getUserById(id).subscribe(
      data => {
        this.profile = data
      }
    );
  }

  getProfileByUsername(username){
    this._authService.getUserByUsername(username).subscribe(
      data => {
        this.profile = data;
      }
    );
  }


}
