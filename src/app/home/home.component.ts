import { Component, VERSION, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap, take } from 'rxjs/operators';
import { ListParams, CollectionType, PageType, MovieDetails, Media } from '../data-types';
import { ApiConnectService } from '../data-access/api-connect.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  template: `
    <div class="columns-4">
      <!-- @if (listStream$ | async; as list) { -->
        @for( item of listStream$ | async;  track item.id) {
          <app-card [movie]="item"></app-card>
        } @empty {
          <p>No items to show yet...</p>
        }
      <!-- } -->
    </div>
  `,
  standalone: true,
  imports: [CommonModule, CardComponent]
})
export class HomeComponent {
  version = VERSION.full;
  title = `Angular - ${this.version}`;
  private activatedRoute = inject(ActivatedRoute);
  private paramMap = this.activatedRoute.paramMap;
  private apiConnect = inject(ApiConnectService);

  private routeCollectionParams$: Observable<ListParams> = this.paramMap.pipe(
    map((params: ParamMap) => {
      console.table(params);
      const type = params.get('type') ?? 'movie';
      const collection = params.get('collection') ?? 'popular';
      if (!(Reflect.has(PageType, type))) {
        throw new Error(`Invalid type: ${type}`);
      }
      if (!(Reflect.has(CollectionType, collection))) {
        throw new Error(`Invalid collection: ${collection}`);
      }
      return { type, collection } as ListParams;
    })
  );

  listStream$: Observable<Media[]> = this.routeCollectionParams$.pipe(
    switchMap((params: ListParams) => {
      return this.apiConnect.getCollection(params);
    }),
    catchError(err => {
      console.error(err);
      return of([]);
    })
  );
}

