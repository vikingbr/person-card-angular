import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

declare var $: any;
console.log(`jQuery version: ${$.fn.jquery}`);


@Component({
    selector: 'card-person',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.scss',
                "../../../assets/css/pe-icon-7-stroke.css",
                "../../../assets/css/rotating-card.css"
    ]
})

export class CardComponent implements OnInit {
    title = 'Person Cards';
    users: any[] = [];  

    constructor(
      protected personService: PersonService
    ) {
    }

    ngOnInit() {

      $().ready(function(){

        $('a.scroll-down').click(function(e){
            e.preventDefault();
            var scroll_target = $(this).data('href');
             $('html, body').animate({
                 scrollTop: $(scroll_target).offset().top - 60
             }, 1000);
        });

    });

      this.personService.getUsers()
      .subscribe(
        (data) => { // Success
          this.users = data['results'];
        },
        (error) => {
          console.error(error);
        }
      );
    }

    
  }
  