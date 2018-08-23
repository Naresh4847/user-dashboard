import {JsonProperty, JsonObject} from '../lib/tj.deserializer'
import { userviews } from './userviews.model';
import { activeduration } from './activeduration.model';
import { userActivity } from './userActivity.model';
import { currentActivity } from './currentActivity.model';
import { lastActivity } from './lastActivity.model';
import { userimprovements } from './userimprovements.model';

@JsonObject
export class user {
  @JsonProperty('user', userviews, true)
  public user: userviews = new userviews();

  @JsonProperty('activeduration', activeduration, true)
  public activeduration: activeduration = new activeduration();

  @JsonProperty('userActivity', [userActivity], true)
  public userActivity: userActivity[] = [];

  @JsonProperty('currentActivity', currentActivity, true)
  public currentActivity: currentActivity = new currentActivity();

  @JsonProperty('lastActivity', lastActivity, true)
  public lastActivity: lastActivity = new lastActivity();

  @JsonProperty('userimprovements', userimprovements, true)
  public userimprovements: userimprovements = new userimprovements();

}