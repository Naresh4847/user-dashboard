import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class activeduration {
  @JsonProperty('cardTitle', String, true)
  public cardTitle: string = undefined;

  @JsonProperty('cardSubTitle', String, true)
  public cardSubTitle: string = undefined;

  @JsonProperty('cardContent', String, true)
  public cardContent: string = undefined;

}