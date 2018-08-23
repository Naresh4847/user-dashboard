import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class userlist {
  @JsonProperty('name', String, true)
  public name: string = undefined;

  @JsonProperty('username', String, true)
  public username: string = undefined;

  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

}