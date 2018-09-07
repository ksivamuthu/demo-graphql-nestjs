import { Component, OnInit } from '@angular/core';
import { Session } from './sessions.model';
import { Apollo, Query } from 'apollo-angular';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  sessions: Observable<Session[]>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.sessions = this.apollo.watchQuery<Query>({
      query: gql`
        query allSessions {
          sessions {
            id
            title
            abstract
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(result => (result.data as any).sessions)
      );
  }
}
