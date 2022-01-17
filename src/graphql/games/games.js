import {gql} from '@apollo/client';

export const GAMES_SUBSCRIPTION = gql`
subscription {
    games {
      id
      created_at
    }
  }
  `

  export const GET_GAME_STATUS = gql`
  query ($gameId: numeric) {
    games(where: {id: {_eq: $gameId}}) {
      is_closed
      is_started
    }
  }
    `
export const GAME_PIN_CHECK = gql`
query ($gameId: numeric) {
  games(where: {_and: {id: {_eq: $gameId}, is_closed: {_eq: false}}}) {
    id
  }
}
`