import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{

  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>; //Target the video element using a template variable
  @ViewChildren('body') accordionBodies!: QueryList<ElementRef>; //Targets the accordion using a template variable
  activeIndex: number | null = null; //Active index of the accordion

  constructor(private renderer: Renderer2) {}


  ngAfterViewInit() {
    $('.owl-courses-item').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 10,
      nav: true,
      height: 20,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });

    $('.owl-service-item').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      nav: false,
      dots: true,
      margin: 20,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });

    

    const video = this.bgVideo.nativeElement;

    // Ensure the video plays on initialization
    setTimeout(() => {
      video.play().catch((error) => {
        console.error('Autoplay failed. Attempting to resolve:', error);
        // Optional: handle error, e.g., show a play button for user interaction
      });
    }, 100); // Adding a slight delay to ensure the video element is initialized

  }

  // const video = this.bgVideo.nativeElement;

  //   // Attempt to play immediately if autoplay is allowed
  //   video.play().catch((error) => {
  //     console.error('Autoplay failed. Attempting to resolve:', error);

  //     // Add a click event listener to the document to resume playback on user interaction
  //     this.renderer.listen('document', 'click', () => {
  //       video.play().then(() => {
  //         console.log('Video started playing after user interaction');
  //       }).catch(err => {
  //         console.error('Error playing the video after user interaction:', err);
  //       });
  //     });
  //   });
 
// Array of objects that stores the content of the accordion
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
