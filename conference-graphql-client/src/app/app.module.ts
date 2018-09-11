import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConferenceComponent } from './conference/conference.component';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';

@NgModule({
  declarations: [AppComponent, ConferenceComponent],
  imports: [
    BrowserModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo,
    httpLink: HttpLink) {
    const http = httpLink.create({
      uri: '/api/graphql'
    });
    const ws = new WebSocketLink({
      uri: `ws://localhost:3000/graphql`,
      options: {
        reconnect: true
      }
    });

    const link = split(
      // split based on operation type
      ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
      },
      ws,
      http,
    );

    apollo.create({link: link, cache: new InMemoryCache()});
  }
}
