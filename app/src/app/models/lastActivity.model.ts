import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class lastActivity {
  @JsonProperty('cardSubTitle', String, true)
  public cardSubTitle: string = undefined;

  @JsonProperty('cardIcon', String, true)
  public cardIcon: string = undefined;

}