import moment from 'moment'

import { createStore, combineReducers } from 'redux'
import { append, merge } from 'ramda'

const PREVIOUS = "PREVIOUS"
const NEXT = "NEXT"
const ADD = "ADD"
const RESET_GAME = "RESET_GAME"
const RESET = "RESET"

const SET_GAME_SPORT="SET_GAME_SPORT"
const SET_GAME_LOCATION="SET_GAME_LOCATION"
const SET_GAME_MIN_PLAYERS="SET_GAME_MIN_PLAYERS"
const SET_GAME_MAX_PLAYERS="SET_GAME_MAX_PLAYERS"
const SET_GAME_PREFERRED_SKILL_LEVELS="SET_GAME_PREFERRED_SKILL_LEVELS"
const MIN_PLAYERS_INCREMENT="MIN_PLAYERS_INCREMENT"
const MIN_PLAYERS_DECREMENT="MIN_PLAYERS_DECREMENT"
const MAX_PLAYERS_INCREMENT="MAX_PLAYERS_INCREMENT"
const MAX_PLAYERS_DECREMENT="MAX_PLAYERS_DECREMENT"
const SET_GAME_EQUIPMENT_INFO="SET_GAME_EQUIPMENT_INFO"
const SET_GAME_MORE_INFO="SET_GAME_MORE_INFO"

const SET_GAME_DATE="SET_GAME_DATE"
const SET_GAME_TIME="SET_GAME_TIME"
const SET_GAME_CANCELLATION_DEADLINE="SET_GAME_CANCELLATION_DEADLINE"

const SET_PLAYER_FIRST_NAME="SET_PLAYER_FIRST_NAME"
const SET_PLAYER_LAST_NAME="SET_PLAYER_LAST_NAME"
const SET_PLAYER_EMAIL="SET_PLAYER_EMAIL"
const SET_PLAYER_PHONE="SET_PLAYER_PHONE"
const SET_PLAYER_STREET_ADDRESS="SET_PLAYER_STREET_ADDRESS"
const SET_PLAYER_CITY="SET_PLAYER_CITY"
const SET_PLAYER_STATE="SET_PLAYER_STATE"
const SET_PLAYER_ZIPCODE="SET_PLAYER_ZIPCODE"
const SET_PLAYER_GENDER="SET_PLAYER_GENDER"
const SET_PLAYER_AGE="SET_PLAYER_AGE"
const SET_PLAYER_BIO="SET_PLAYER_BIO"

const locationDocuments = [{
  name: "Haut Gap Recreation Complex",
  streetAddress: "1861 Bohicket Road",
  city: "Johns Island",
  state: "SC",
  zipcode: "29455",
  sports: ["basketball", "disc golf", "multi-purpose fields", "walking", "playground", "tennis", "volleyball"],
  contactPhone: "843-795-4386",
  contactEmail: "customerservice@ccprc.com",
  mapUrl: "",
  description: "The outdoor recreation complex located at Haut Gap Middle School serves as a hub of activity for local citizens. Developed through a cooperative effort with the Charleston County School District, this facility is able to offer a full range of recreation programs that benefit this school, local athletic leagues and the community at large. The Recreation Commission uses these facilities and others on Johns Island to provide recreation, sports, and leisure experiences the entire family will enjoy. Outdoor amenities include a basketball court, disc golf course, multi-purpose ball fields, paved walking trail, picnic shelter, playground, tennis courts, and a volleyball court.",
  indoor: false,
  outdoor: true,
  scheduleDays: "Everyday",
  scheduleHours: "Sunrise to Sunset"
  }, {
  name: "Freedom Park",
  streetAddress: "985 Barfield St.",
  city: "Charleston",
  state: "SC",
  zipcode: "29492",
  sports: ["tennis", "basketball", "running", "walking", "playground"],
  contactPhone: "843-795-4386",
  contactEmail: "customerservice@ccprc.com",
  mapUrl: "",
  description: "The outdoor recreation complex located at Haut Gap Middle School serves as a hub of activity for local citizens. Developed through a cooperative effort with the Charleston County School District, this facility is able to offer a full range of recreation programs that benefit this school, local athletic leagues and the community at large. The Recreation Commission uses these facilities and others on Johns Island to provide recreation, sports, and leisure experiences the entire family will enjoy. Outdoor amenities include a basketball court, disc golf course, multi-purpose ball fields, paved walking trail, picnic shelter, playground, tennis courts, and a volleyball court.",
  indoor: false,
  outdoor: true,
  scheduleDays: "Everyday",
  scheduleHours: "Sunrise to Sunset"
  }, {
  name: "Martin Park / MLK Jr. Pool",
  streetAddress: "155 Jackson St.",
  city: "Charleston",
  state: "SC",
  zipcode: "29403",
  sports: ["tennis", "basketball", "swimming", "walking", "playground"],
  contactPhone: "843-724-7346",
  contactEmail: "customerservice@ccprc.com",
  mapUrl: "",
  description: "Martin Park is next to the MLK Pool and has a playground and sports fields. gatesOpen recreation, homework help, arts and crafts and sports and games. For a complete schedule, call (843) 973-7222. The MLK Pool is one of two city pools gatesOpen year round and offers swim lessons for all ages. For information on classes or gatesOpen swim times call 843-724-7346 or check out the city's aquatics information online. The pool is conveniently located next to Martin Park which offers additional recreational opportunities.",
  indoor: false,
  outdoor: true,
  scheduleDays: "Monday through Saturday",
  scheduleHours: "Weekdays: 4:00 pm - 7:00 pm, Weekends: 12:00 pm - 5:00 pm"
  }, {
  name: "Family Circle Tennis Center",
  streetAddress: "161 Seven Farms Drive",
  city: "Charleston",
  state: "SC",
  zipcode: "29492",
  sports: ["tennis", "walking"],
  contactPhone: "843-849-5300",
  contactEmail: "",
  mapUrl: "",
  description: "The Family Circle Tennis Center is one of the top public tennis facilities in the Southeast, featuring 17 championship clay and hard court tennis courts and a 10,000 square foot clubhouse. The Family Circle Tennis Center is home to the Family Circle Cup, the United States' oldest all-women's professional tennis event. Throughout the year the facility hosts other special events including concerts, festivals and the Daniel Island Farmers Market.",
  indoor: false,
  outdoor: true,
  scheduleDays: "Everyday",
  scheduleHours: "Mon-Thurs: 8:00 am - 10:00 pm, Fri: 8:00 am - 7:00 pm, Sat: 8:00 am - 5:00 pm, Sun: 9:00 am - 5:00 pm"
  }, {
    name: "Hazel Parker Playground",
    streetAddress: "70 E. Bay St.",
    city: "Charleston",
    state: "SC",
    zipcode: "29401",
    sports: ["baseball", "tennis", "walking", "running", "playground", "basketball"],
    contactPhone: "",
    contactEmail: "",
    mapUrl: "",
    description: "Hazel Parker Playground is a neighborhood favorite along East Bay Street. The public space has an Education Center with regular programing plus tennis courts, baseball fields and a basketball court as well as picnic tables, benches and a playground. Also, restrooms are open during staffed hours. This park also has a small off-leash dog park at the northern end.",
    indoor: false,
    outdoor: true,
    scheduleDays: "Everyday",
    scheduleHours: "Sunrise to Sunset"
  }, {
    name: "Moultrie Playground",
    streetAddress: "41 Ashley Ave.",
    city: "Charleston",
    state: "SC",
    zipcode: "29401",
    sports: ["tennis", "baseball", "softball", "playground", "basketball"],
    contactPhone: "",
    contactEmail: "",
    mapUrl: "",
    description: "Situated next to Colonial Lake, this park has six lighted, hard tennis courts, a playground, ball field and basketball court. A recreational building and restrooms are open during certain hours.",
    indoor: false,
    outdoor: true,
    scheduleDays: "Everyday",
    scheduleHours: "Sunrise to Sunset"
  }, {
    name: "Corrine Jones Park",
    streetAddress: "36 Marlow Drive",
    city: "Charleston",
    state: "SC",
    zipcode: "29403",
    sports: ["playground", "basketball", "tennis", "baseball", "softball", "soccer"],
    contactPhone: "",
    contactEmail: "",
    mapUrl: "",
    description: "Formerly known as Hester Park, Corrine Jones is a neighborhood park in the heart of the Wagener Terrace neighborhood. This park has picnic tables, benches, a basketball court, tennis court and soccer field. A large new playground was added in 2011. The park has free Wi-Fi access, thanks to a partnership with the Conservancy, the Speedwell Foundation, and the Charleston Digital Corridor Foundation.",
    indoor: false,
    outdoor: true,
    scheduleDays: "Everyday",
    scheduleHours: "Sunrise to Sunset"
  }, {
    name: "Parkshore Park",
    streetAddress: "1 Windsor Drive",
    city: "Charleston",
    state: "SC",
    zipcode: "29407",
    sports: ["playground", "baseball", "softball", "tennis", "walking"],
    contactPhone: "",
    contactEmail: "",
    mapUrl: "",
    description: "Parkshore Park, located in West Ashley, is a community park situated on 10 acres of land. It boasts two half basketball courts, two tennis courts, a softball/baseball field and decent parking. This mostly wooded park has a walking trail through the woods connecting to areas in the surrounding neighborhoods. The playground is situated in a tree-covered area making summertime play for the kids enjoyable.",
    indoor: false,
    outdoor: true,
    scheduleDays: "Everyday",
    scheduleHours: "Sunrise to Sunset"
  }
]

const gameDocuments = [{
  sport: "Tennis",
  gameCreator: "Wilson R.",
  preferredContact: "324-134-8796",
  gameLocation: "Moultrie Playground",
  dateOfGame: "4/15/2017",
  startTime: "8:00 pm",
  endTime: "10:00 pm",
  cancellationDeadline: "6:00 pm",
  minPlayers: 2,
  maxPlayers: 4,
  preferredSkillLevels: ["beginner", "intermediate", "advanced"],
  equipmentProvided: ["Tennis balls"],
  equipmentNeeded: "",
  moreInfo: "Hoping for singles, but happy to play doubles if we have enough interest.  I usually find parking near Good Stuff.  Also, if anyone has fairly new tennis balls, it'd be great to have those.  Mine have played a few games...",
  currentPlayers: []
  },{
  sport: "Basketball",
  gameCreator: "Jill S.",
  preferredContact: "324-400-9836",
  gameLocation: "Milton Park",
  dateOfGame: "2/05/2017",
  startTime: "6:00 pm",
  endTime: "8:00 pm",
  cancellationDeadline: "2:00 pm",
  minPlayers: 4,
  maxPlayers: 10,
  preferredSkillLevels: ["beginner", "intermediate"],
  equipmentProvided: ["Basketball"],
  equipmentNeeded: "",
  moreInfo: "Happy to play with however many we have.  Half court or full is fine.  Just want to play.",
  currentPlayers: []
  },{
  sport: "Baseball",
  gameCreator: "Amira P.",
  preferredContact: "202-324-0036",
  gameLocation: "Moultrie Playground",
  dateOfGame: "4/08/2017",
  startTime: "2:00 pm",
  endTime: "5:00 pm",
  cancellationDeadline: "12:00 pm",
  minPlayers: 6,
  maxPlayers: 20,
  preferredSkillLevels: ["beginner", "intermediate", "advanced"],
  equipmentProvided: ["Baseballs", "Bat"],
  equipmentNeeded: "",
  moreInfo: "If we don't have many people we can run some drills or just play catch.  Maybe set up some batting practice with outfielders and a pitcher.",
  currentPlayers: []
  }]


const games = (state=gameDocuments, action) => {
  switch (action.type) {
    case 'LOAD_GAMES':
      return state
    default:
      return state
  }
}


const locations = (state=locationDocuments, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const game = (
  state = {
    sport: "",
    gameCreator: "",
    preferredContact: "",
    gameLocation: {},
    dateOfGame: "",
    startTime: "",
    endTime: "",
    cancellationDeadline: "",
    minPlayers: 2,
    maxPlayers: 2,
    preferredSkillLevels: [],
    equipmentInfo: "",
    moreInfo: "",
    currentPlayers: []
  },
  action
) => {
  switch (action.type) {
    case SET_GAME_SPORT:
      return merge(state, {sport: action.payload })
    case SET_GAME_LOCATION:
      return merge(state, {gameLocation: action.payload })

    case SET_GAME_DATE:
      return merge(state, {dateOfGame: moment(action.payload).format("dddd, MMMM Do YYYY") })
    case SET_GAME_TIME:
      return merge(state, {startTime: action.payload })
    case SET_GAME_CANCELLATION_DEADLINE:
      return merge(state, {cancellationDeadline: action.payload })

    case SET_GAME_MIN_PLAYERS:
      return merge(state, {minPlayers: action.payload})
    case SET_GAME_MAX_PLAYERS:
      return merge(state, {maxPlayers: action.payload })
    case MIN_PLAYERS_INCREMENT:
      return merge(state, {minPlayers: state.minPlayers + 1 })
    case MIN_PLAYERS_DECREMENT:
      return merge(state, {minPlayers: state.minPlayers - 1 })
    case MAX_PLAYERS_INCREMENT:
      return merge(state, {maxPlayers: state.maxPlayers + 1 })
    case MAX_PLAYERS_DECREMENT:
      return merge(state, {maxPlayers: state.maxPlayers - 1 })
    case SET_GAME_PREFERRED_SKILL_LEVELS:
      return merge(state, {preferredSkillLevels: action.payload })

    case SET_GAME_EQUIPMENT_INFO:
      return merge(state, {equipmentInfo: action.payload})
    case SET_GAME_MORE_INFO:
      return merge(state, {moreInfo: action.payload})
    case RESET_GAME:
      return state
    default:
      return state
  }
}

const player = (
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zipcode: "",
    gender: "",
    age: "",
    bio: "",
    gamesCreated: [],
    gamesJoined: [],
    previousGames: []
  },
  action
) => {
  switch (action.type) {
    case SET_PLAYER_FIRST_NAME:
      return merge(state, {firstName: action.payload })
    case SET_PLAYER_LAST_NAME:
      return merge(state, {lastName: action.payload })
    case SET_PLAYER_EMAIL:
      return merge(state, {email: action.payload })
    case SET_PLAYER_PHONE:
      return merge(state, {phone: action.payload })
    case SET_PLAYER_STREET_ADDRESS:
      return merge(state, {streetAddress: action.payload })
    case SET_PLAYER_CITY:
      return merge(state, {city: action.payload })
    case SET_PLAYER_STATE:
      return merge(state, {state: action.payload })
    case SET_PLAYER_ZIPCODE:
      return merge(state, {zipcode: action.payload })
    case SET_PLAYER_GENDER:
      return merge(state, {gender: action.payload })
    case SET_PLAYER_AGE:
      return merge(state, {age: action.payload })
    case SET_PLAYER_BIO:
      return merge(state, {bio: action.payload })
    default:
      return state
    }
}


const view = (
  state = "step1", action) => {
    switch (action.type) {
      case RESET:
        return 'step1'
      case PREVIOUS:
        return action.payload
      case NEXT:
        return action.payload
      default:
        return state
    }
  }


const store = createStore(combineReducers({
  view: view,
  game: game,
  games: games,
  locations: locations,
  player: player
}))

export default store
