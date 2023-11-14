import { RouterOutlet, ChildrenOutletContexts } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <main [@routeAnimations]="getRouteAnimationData()" class="bg-gray-800 min-h-[calc(100vh-128px)] mt-[136px] mx-auto max-w-full px-2 sm:px-6 lg:px-8">
      <router-outlet></router-outlet>
    </main>
  `,
  animations: [
    trigger('routeAnimations', [
      transition('Home <=> Landing', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [
            animate('1000ms ease-out', style({ left: '100%' }))
          ], { optional: true }),
          query(':enter', [
            animate('1000ms ease-out', style({ left: '0%' }))
          ], { optional: true }),
        ]),
      ]),
      transition('Landing <=> Home', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ right: '-100%' })
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [
            animate('900ms ease-out', style({ right: '100%', opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            animate('1000ms ease-out', style({ right: '0%' }))
          ], { optional: true }),
          query('@*', animateChild(), { optional: true })
        ]),
      ])
    ])
  ],
})
export class ShellComponent {
  outlet: RouterOutlet | undefined;

  constructor(private contexts: ChildrenOutletContexts) { }
  
  getRouteAnimationData() {
    const data = this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    console.log(data);
    return data
  }
}
