import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Media, TMDB_IMAGES_PATH } from '../data-types';


@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
<div class="mb-8">
    <div class='flex overflow-hidden w-full max-w-sm bg-transparent shadow-md'>
        <div class='w-2 bg-gray-800'></div>

<div class="overflow-hidden relative text-white shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl movie-item movie-card" data-movie-id="438631">
    <div class="absolute inset-0 z-10 bg-gradient-to-t from-black via-gray-900 to-transparent transition duration-300 ease-in-out"></div>
    <div class="relative z-10 px-10 pt-10 space-y-6 cursor-pointer group movie_info" data-lity="" href="https://www.youtube.com/embed/aSHs224Dge0">
        <div class="w-full poster__info align-self-end">
            <div class="h-32"></div>
            <div class="space-y-6 detail_info">
                <div class="flex flex-col space-y-2 inner">
                    
                    <h3 class="text-2xl font-bold text-white" data-unsp-sanitized="clean">{{movie.title ? movie.title : movie.name}}</h3>
                    <div class="mb-0 text-lg text-gray-400">{{movie.tagline ?? 'Beyond fear, destiny awaits.'}}</div>
                </div>
                <div class="flex flex-row justify-between datos">
                    <div class="flex flex-col datos_col">
                        <div class="popularity">{{movie.popularity}}</div>
                        <div class="text-sm text-gray-400">Popularity:</div>
                    </div>
                    @if( movie.release_date ) {
                    <div class="flex flex-col datos_col">
                        <div class="release">{{movie.release_date}}</div>
                        <div class="text-sm text-gray-400">Release date:</div>
                    </div>
                    } @else if (movie.first_air_date) {
                        <div class="flex flex-col datos_col">
                            <div class="release">{{movie.first_air_date}}</div>
                            <div class="text-sm text-gray-400">First air date:</div>
                        </div>
                    }
                    
                    <div class="flex flex-col datos_col">
                        <div class="release">{{movie.vote_average | number: '1.0-0'}} / 10</div>
                        <div class="text-sm text-gray-400">Ratings:</div>
                    </div>
                </div>
                <div class="flex flex-col overview">
                    <div class="flex flex-col"></div>
                    <div class="mb-2 text-xs text-gray-400">Overview:</div>
                    <p class="mb-6 text-xs text-gray-100">
                        {{movie.overview}}
                    </p>
                </div>
            </div>
        </div>
    </div>
    <img class="absolute inset-0 w-full transform -translate-y-4" [src]="api_url + movie.poster_path" alt="{{movie.title}}" style="filter: grayscale(0);" />
    <div class="flex relative z-10 flex-row pb-10 space-x-4 poster__footer">
        <a
            class="flex items-center px-4 py-2 mx-auto text-white bg-red-500 rounded-full hover:bg-red-700"
            href="http://www.google.com/calendar/event?action=TEMPLATE&amp;dates=20210915T010000Z%2F20210915T010000Z&amp;text=Dune%20%2D%20Movie%20Premiere&amp;location=http%3A%2F%2Fmoviedates.info&amp;details=This%20reminder%20was%20created%20through%20http%3A%2F%2Fmoviedates.info"
            target="_blank"
            data-unsp-sanitized="clean"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div class="ml-2 text-sm text-white">Set reminder</div>
        </a>
    </div>
</div>

    </div>
</div>
  `,
    styles: [
    ],
    providers: [
        { provide: TMDB_IMAGES_PATH, useValue: { poster_path: 'https://image.tmdb.org/t/p/w500' } },
    ]
})
export class CardComponent {
    private router = inject(Router);
    protected api_url = inject(TMDB_IMAGES_PATH).poster_path;
    @Input({ required: true }) movie: Media = {} as Media;
}
