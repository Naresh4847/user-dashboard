import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class userActivity {
  @JsonProperty('cardTitle', String, true)
  public cardTitle: string = undefined;

  @JsonProperty('cardSubTitle', String, true)
  public cardSubTitle: string = undefined;

  @JsonProperty('cardContent', String, true)
  public cardContent: string = undefined;

  @JsonProperty('cardDesc', String, true)
  public cardDesc: string = undefined;

  @JsonProperty('cardIcon', String, true)
  public cardIcon: string = undefined;

  @JsonProperty('cardbuffer', String, true)
  public cardbuffer: string = undefined;

  @JsonProperty('cardinfo', String, true)
  public cardinfo: string = undefined;

  @JsonProperty('cardinfo1', String, true)
  public cardinfo1: string = undefined;

  @JsonProperty('cardvalue', String, true)
  public cardvalue: string = undefined;

  @JsonProperty('cardvalue1', String, true)
  public cardvalue1: string = undefined;

}