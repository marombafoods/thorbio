import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { ContatoService } from './contato.service';
import { HttpErrorHandler } from '../http-error-handler.service';
import { MessageService } from '../message.service';

describe('ContatoService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let contatoService: ContatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule ],
      // Provide the service-under-test and its dependencies
      providers: [
        ContatoService,
        HttpErrorHandler,
        MessageService
      ]
    });

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    contatoService = TestBed.inject(ContatoService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
});
