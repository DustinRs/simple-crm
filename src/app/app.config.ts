import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-3861c","appId":"1:42764182219:web:87f032b5e45691d9c5f14e","storageBucket":"simple-crm-3861c.appspot.com","apiKey":"AIzaSyCgSz9kRguzUm7lnUC35yNcgF_mmJ4L9OM","authDomain":"simple-crm-3861c.firebaseapp.com","messagingSenderId":"42764182219"}))), importProvidersFrom(provideFirestore(() => getFirestore())), provideAnimationsAsync()]
};
