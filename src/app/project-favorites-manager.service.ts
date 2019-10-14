import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectFavoritesManagerService {
  favorites = [];
  
  constructor() { }

  addFavoriteProject(product) {
    this.favorites.push(product);
  }

  getFavoriteProjects() {
    return this.favorites;
  }

  clearFavorites() {
    this.favorites = [];
    return this.favorites
  };

  projecIsFavorite(project){
    for (let el of this.favorites){
      if(el.name === project.name){
        return true
      }
    } 
    return false
  }

  getProjectNames(){
    if (this.favorites.length>0){
      let names = "";
      this.favorites.forEach((el)=> 
        names = names + "\n- " + el.name
        )
      console.log(names)
      return names
    }
    else
      return ""
  }
}
