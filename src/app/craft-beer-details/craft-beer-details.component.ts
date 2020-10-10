import { Component, OnInit, Input } from '@angular/core';
import { CraftBeerService } from "../services/craft-beer.service";
import { CraftBeer } from "../models/craft-beer.model";
import { CraftBeerListComponent } from '../craft-beer-list/craft-beer-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-craft-beer-details',
  templateUrl: './craft-beer-details.component.html',
  styleUrls: ['./craft-beer-details.component.scss']
})
export class CraftBeerDetailsComponent implements OnInit {

  id: number;
  craftBeer: CraftBeer;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private craftBeerService: CraftBeerService
  ) { }

  ngOnInit() {
    this.craftBeer = new CraftBeer();

    this.id = this.route.snapshot.params['id'];
    
    this.craftBeerService.getCraftBeer(this.id)
      .subscribe(data => {
        console.log(data)
        this.craftBeer = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['craft-beers']);
  }
}
