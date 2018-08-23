import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class userimprovements {
  @JsonProperty('cardSubTitle', String, true)
  public cardSubTitle: string = undefined;

  @JsonProperty('cardIcon', String, true)
  public cardIcon: string = undefined;

  @JsonProperty('cardDesc', String, true)
  public cardDesc: string = undefined;

}