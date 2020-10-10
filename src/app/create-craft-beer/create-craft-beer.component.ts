import { Component, OnInit } from '@angular/core';
import { CraftBeerService } from "../services/craft-beer.service";
import { CraftBeer } from "../models/craft-beer.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-craft-beer',
  templateUrl: './create-craft-beer.component.html',
  styleUrls: ['./create-craft-beer.component.scss']
})
export class CreateCraftBeerComponent implements OnInit {

  craftBeer: CraftBeer = new CraftBeer();
  submitted = false;

  constructor(private craftBeerService: CraftBeerService,
    private router: Router) { }

  ngOnInit() {
  }

  newCraftBeer(): void {
    this.submitted = false;
    this.craftBeer = new CraftBeer();
  }

  save() {
    this.craftBeerService
    .createCraftBeer(this.craftBeer).subscribe(data => {
      console.log(data)
      this.craftBeer = new CraftBeer();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/craft-beers']);
  }

  list(){
    this.router.navigate(['craft-beers']);
  }
}