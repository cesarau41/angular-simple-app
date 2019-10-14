import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../products'
import { Alert } from 'selenium-webdriver';
import { ProjectFavoritesManagerService } from '../project-favorites-manager.service'

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project;
  constructor(
    private route: ActivatedRoute,
    public favService: ProjectFavoritesManagerService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.project = projects[+params.get('projectId')];
    });
  }

  //mark as favorite
  markAsFavorite(project){
    this.favService.addFavoriteProject(project)
    //window.alert(project.name + " marked as Favorite")
  }

}
