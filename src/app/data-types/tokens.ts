import { API_IMGS_PATH } from "./media.type";
import { InjectionToken } from "@angular/core";

export const TMDB_IMAGES_PATH = new InjectionToken<API_IMGS_PATH>('images.path');
export const API_PROXY_URL = new InjectionToken<string>('api.proxy.url');

