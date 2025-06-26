import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideHttpClient } from '@angular/common/http'; // <-- Importe esta linha
import { provideServerRouting } from '@angular/ssr';

import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes),
    provideHttpClient() // <-- Adicione esta linha para fornecer HttpClient no servidor
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
