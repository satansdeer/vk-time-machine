# API documentation

The application will be done using [Ember.js](http://emberjs.com/) and [Ember Data](https://github.com/emberjs/data) as a persistence/backend-connector library.

It's mostly based on [Json API](http://jsonapi.org/) standard and uses REST.

## Helpful links

There is some links to follow up before starting implementing API:

[**Discussion**: Setting up a Django API to use with Ember.js](http://discuss.emberjs.com/t/setting-up-a-django-api-to-use-with-ember-js/163)

[**StackOverflow**: Conventions required of RESTful JSON API to be usable with Ember](http://stackoverflow.com/questions/21964664/conventions-required-of-restful-json-api-to-be-usable-with-ember)

[Ember.js models: introduction](http://emberjs.com/guides/models/)

[**Video**: Building an Ember.js Application](http://emberjs.com/guides/models/)

## Authentication

API authentication will be handled separately. The dashboard will request user using API and if request will fail, it will redirect back to log-in/sign-in form provided separately.

So it's on API/backend development side to make such a authentication page, that will create an HTTP session that will allow app to use API and then redirect to this app.

## API Requests

### GET /user

**Example response**:
```json
{
  "user": [
    {
      "id": 203345,
      "email": "bugaga@domain.com",
      "first_name": "Andrey",
      "last_name": "Bobkov",
      "time_zone_id": 700,
      "phone_number": "+79321230011",
      "avatar_url": "http://some.domain.com/avatars/avatar.jpg",
      "current_plan": "free",
      "ask_a_tutor_total": 50,
      "ask_a_tutor_used": 3,
      "tutor_sessions_total": 10,
      "tutor_sessions_used": 5,
      "simtests_total": 5,
      "simtests_used": 2,
      "essays_total": 10,
      "essays_used": 3,
      "gmat_test_date", "2015-9-30",
      "gmat_target_score": 100500,
      "hours_studied": 46,
      "initial_test_completed": true
    }
  ]
}
```
