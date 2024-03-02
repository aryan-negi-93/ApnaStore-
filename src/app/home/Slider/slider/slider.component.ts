import { Component } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  images: any[] = []

  constructor(private heroService: ServiceService) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    this.heroService.getHeroImages().subscribe({
      next: (res: any) => {
        this.images = res;
      }, error: (err) => {
        console.log(err);
      }
    })
  }
}
