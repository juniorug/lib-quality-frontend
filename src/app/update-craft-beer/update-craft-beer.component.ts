import { Component, OnInit } from '@angular/core';
import { CraftBeerService } from "../services/craft-beer.service";
import { CraftBeer } from "../models/craft-beer.model";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-craft-beer',
  templateUrl: './update-craft-beer.component.html',
  styleUrls: ['./update-craft-beer.component.scss']
})
export class UpdateCraftBeerComponent implements OnInit {

  id: number;
  craftBeer: CraftBeer;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private craftBeerService: CraftBeerService
  ) { }

  ngOnInit() {
    this.craftBeer = new CraftBeer();
    this.submitted = false;
    this.id = this.route.snapshot.params['id'];
    
    this.craftBeerService.getCraftBeer(this.id)
      .subscribe(data => {
        console.log(data)
        this.craftBeer = data;
      }, error => console.log(error));
  }

  updateCraftBeer() {
    this.craftBeerService.updateCraftBeer(this.id, this.craftBeer)
      .subscribe(data => {
        console.log(data);
        this.craftBeer = new CraftBeer();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateCraftBeer();    
  }

  gotoList() {
    this.router.navigate(['/craftBeers']);
  }
  list(){
    this.router.navigate(['craft-beers']);
  }
}