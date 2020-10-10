import { Component, OnInit } from "@angular/core";
import { CraftBeerDetailsComponent } from '../craft-beer-details/craft-beer-details.component';
import { Observable } from "rxjs";
import { CraftBeerService } from "../services/craft-beer.service";
import { CraftBeer } from "../models/craft-beer.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-craft-beer-list',
  templateUrl: './craft-beer-list.component.html',
  styleUrls: ['./craft-beer-list.component.scss']
})
export class CraftBeerListComponent implements OnInit {

  craftBeers: Observable<CraftBeer[]>;

  constructor(
    private craftBeerService: CraftBeerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.craftBeers = this.craftBeerService.getCraftBeersList();
  }

  deleteCraftBeer(id: number) {
    this.craftBeerService.deleteCraftBeer(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  craftBeerDetails(id: number){
    this.router.navigate(['details', id]);
  }
  craftBeerEdit(id: number){
    this.router.navigate(['update', id]);
  }
}
