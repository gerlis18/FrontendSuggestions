import { Component, OnInit } from '@angular/core';
import { SugerenceService } from '../../services/sugerence.service';
import { Sugerence } from '../../model/sugerence';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
	selector: 'app-mysuggestions',
	templateUrl: './mysuggestions.component.html',
	styleUrls: ['./mysuggestions.component.css']
})

export class MysuggestionsComponent implements OnInit {

	public title = "Titulo"
	public suggestionReceive = [];
	public suggestionSend = [];
	public saImg;
	public loading;
	public usernameE = [];
	public usernameR = [];

	constructor(
		private _sugerenceService: SugerenceService,
		private _authService: AuthService,
		private _flashMessages: FlashMessagesService
	) { }

	ngOnInit() {
		this.loading = 'show';
		this.saImg = 'hide';
		this.getSuggestionsSends();
		this.getSuggestionsReceive();
	}

	getSuggestionsSends() {
		this._sugerenceService.getSuggestionsRel(localStorage.getItem('id')).subscribe(
			data => {
				this.loading = 'hide'
				this.suggestionSend = data
				/*data.forEach(element => {
					//console.log(element.userRId);
					this._authService.getUserById(element.userRId).subscribe(
						data => {
							this.usernameE.push(data[0].username)
							console.log(this.usernameE);
						}
					);
					
				});*/
				
			},
			error => {
				this.loading = 'hide'
				this.saImg = 'show'
			},
			() => {
				this.saImg = 'hide'
			})
	}

	getSuggestionsReceive() {
		this._sugerenceService.getMySuggestionsRel(localStorage.getItem('id')).subscribe(
			data => {
				/*data.forEach(element => {
					this.getUsername(element.UserId);
				});*/
				console.log(data);
				this.suggestionReceive = data;
			},
			error => {

			}
		);
	}

	getUsername(id) {
		let datos;

		return datos;
	}

}
