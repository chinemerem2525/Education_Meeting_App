import { AfterViewInit, Component, ElementRef, QueryList,Renderer2, ViewChild, ViewChildren } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  // Carousel headings and descriptions
  headings: string[] = [
    'Hello Innovators!',
    'Hello Visionaries!',
    'Hello Creators!',
    'Hello Dreamers!'
  ];

  descriptions: string[] = [
    `Empowering businesses and individuals with cutting-edge web development, mobile apps, tech skills training, and consulting services. <br> Let’s build your future together.`,
    `From custom software and mobile apps to tech training and consulting, we deliver solutions tailored to your needs. Discover the technology that transforms.`,
    `We build websites, apps, and custom solutions while training tomorrow's tech leaders. Let’s innovate, learn, and grow together!`,
    `Your partner in web development, tech training, and IT consulting. Transforming ideas into impactful digital solutions—let’s make it happen!`
  ];

  currentHeading: string = this.headings[0];
  currentDescription: string = this.descriptions[0];
  currentIndex: number = 0;
  intervalId!: any;

  // Template references
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  @ViewChildren('body') accordionBodies!: QueryList<ElementRef>;

  activeIndex: number | null = null; // For active accordion item
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

  openIndex: number | null = null; // Open accordion index

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.startAnimation();
  }

  ngAfterViewInit(): void {
    // Initialize carousels
    $('.owl-courses-item').owlCarousel({
      autoplay: true,
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

    // Play the background video
    const video = this.bgVideo.nativeElement;
    video.play().catch((error) => {
      console.error('Autoplay failed. Attempting to resolve:', error);

      // Add a click listener to play video on user interaction
      this.renderer.listen('document', 'click', () => {
        video.play().then(() => {
          console.log('Video started playing after user interaction');
        }).catch(err => {
          console.error('Error playing the video after user interaction:', err);
        });
      });
    });
  }

  ngOnDestroy(): void {
    // Clear interval for heading animation
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAnimation(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.headings.length;
      this.currentHeading = this.headings[this.currentIndex];
      this.currentDescription = this.descriptions[this.currentIndex];
    }, 4000); // Change every 4 seconds
  }

  toggleAccordion(index: number): void {
    // Toggle accordion open state
    this.openIndex = this.openIndex === index ? null : index;
  }
}
