`import Ember from 'ember'`

Router = Ember.Router.extend({
  location: DashboardENV.locationType
})

Router.map ->
  @route 'dashboard'
  @route 'map'
  @route 'ask-a-tutor'
  @route 'tutor-sessions'
  @route 'test-n-essays'
  @route 'test'
  @route 'plans'
  @route 'blog'
  @route 'support'

`export default Router`
