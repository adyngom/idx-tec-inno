import { Component, VERSION, inject } from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { ListParams, CollectionType, MovieDetails, Media } from './data-types';
import { ApiConnectService } from './data-access/api-connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, CardComponent]
})
export class AppComponent {
  version = VERSION.full;
  title = `Angular - ${this.version}`;
  private activatedRoute = inject(ActivatedRoute);
  private paramMap = this.activatedRoute.paramMap;
  private apiConnect = inject(ApiConnectService);


  private routeCollectionParams$: Observable<ListParams> = this.paramMap.pipe(
    map((params: ParamMap) => {
      const type = params.get('type') ?? 'movie';
      const collection = params.get('collection') ?? 'now_playing';
      if (!(Reflect.has(CollectionType, type))) {
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
