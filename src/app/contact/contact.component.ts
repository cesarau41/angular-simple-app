import { Component, OnInit, Sanitizer } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProjectFavoritesManagerService } from '../project-favorites-manager.service';
import { send } from 'q';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  projects;
  messageForm;
  emailString = "mailto:cesarau41@gmail.com?subject=Quote&body=";

  constructor(
    private favService : ProjectFavoritesManagerService,
    private formBuilder: FormBuilder,
  ) 
  {
    this.projects = favService.getFavoriteProjects();

    this.messageForm = this.formBuilder.group({
      name: '',
      message: "Hello,\nI really liked your projects: " + String(favService.getProjectNames() + "\nCan we talk monday?"),
    });
  }

  ngOnInit() {
  }

  onSubmit(userData){
    this.projects = this.favService.clearFavorites();
    this.messageForm.reset();
    console.warn("Your message is being forwarded - " + userData.name + " " + userData.message);
    let tempMsg = userData.message.replace(/(\r\n|\n|\r)/gm, "%0D")
    window.open(this.emailString + tempMsg + "%0DSincerely,%0D" + userData.name);
  }

}
