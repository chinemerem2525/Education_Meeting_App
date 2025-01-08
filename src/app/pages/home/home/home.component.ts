import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit() {
    $('.owl-courses-item').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });
    $('.owl-service-item').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });

    
  }


  @ViewChildren('body') accordionBodies!: QueryList<ElementRef>;

  activeIndex: number | null = null;

  accordions = [
    {
      title: 'About Edu Meeting HTML Template',
      content:
        'If you want to get the latest collection of HTML CSS templates for your websites, you may visit Too CSS website. If you need a working contact form script, please visit our contact page for more info.'
    },
    {
      title: 'HTML CSS Bootstrap Layout',
      content:
        'Etiam posuere metus orci, vel consectetur elit imperdiet eu. Cras ipsum magna, maximus at semper sit amet, eleifend eget neque. Nunc facilisis quam purus, sed vulputate augue interdum vitae.'
    },
    {
      title: 'Please tell your friends',
      content:
        'Ut vehicula mauris est, sed sodales justo rhoncus eu. Morbi porttitor quam velit, at ullamcorper justo suscipit sit amet.'
    },
    {
      title: 'Share this to your colleagues',
      content:
        'Maecenas suscipit enim libero, vel lobortis justo condimentum id. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
    }
  ];

  openIndex: number | null = null;

  toggleAccordion(index: number): void {
    // Toggle the accordion. If it's already open, close it; otherwise, open it.
    this.openIndex = this.openIndex === index ? null : index;
  }
}
