import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Conference } from './conference.model';
import gql from 'graphql-tag';
import { Apollo, QueryRef, Query } from 'apollo-angular';
import * as _ from 'lodash';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {
  conferenceQuery: QueryRef<any>;
  conference: Observable<Conference>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.conferenceQuery = this.apollo.watchQuery({
      query: gql`
        query conference {
          conference(id: 1) {
            name
            year
            location
            sessions {
              id
              title
              abstract
              stars
              speaker {
                name
                imageUrl
              }
            }
          }
        }
      `
    });

    this.conference = this.conferenceQuery.valueChanges.pipe(
      map(result => (result.data as any).conference)
    );

    this.conferenceQuery.subscribeToMore({
      document: gql`
        subscription {
          sessionStarred {
            id
            stars
          }
        }
      `
    });
  }

  starSession(id: number) {
    this.apollo
      .mutate({
        mutation: gql`
          mutation starSession($id: Int!) {
            starSession(id: $id) {
              id
              stars
            }
          }
        `,
        variables: {
          id: id
        }
      })
      .subscribe();
  }
}
