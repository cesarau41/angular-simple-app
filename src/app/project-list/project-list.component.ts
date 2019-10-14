import { Component, OnInit } from '@angular/core';
import { projects } from '../products'

import { ProjectFavoritesManagerService } from '../project-favorites-manager.service'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [];
  constructor(
    public favService: ProjectFavoritesManagerService
  ) 
  {
    this.projects = projects
  }

  ngOnInit() {
  }

}
