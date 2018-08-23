import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class currentActivity {
  @JsonProperty('cardTitle', String, true)
  public cardTitle: string = undefined;

  @JsonProperty('cardSubTitle', String, true)
  public cardSubTitle: string = undefined;

  @JsonProperty('cardTitle1', String, true)
  public cardTitle1: string = undefined;

  @JsonProperty('cardDesc', String, true)
  public cardDesc: string = undefined;

  @JsonProperty('cardIcon', String, true)
  public cardIcon: string = undefined;

  @JsonProperty('cardinfo', String, true)
  public cardinfo: string = undefined;

  @JsonProperty('cardinfo1', String, true)
  public cardinfo1: string = undefined;

  @JsonProperty('cardvalue', String, true)
  public cardvalue: string = undefined;

  @JsonProperty('cardvalue1', String, true)
  public cardvalue1: string = undefined;

  @JsonProperty('cardinfo2', String, true)
  public cardinfo2: string = undefined;

  @JsonProperty('cardinfo3', String, true)
  public cardinfo3: string = undefined;

  @JsonProperty('cardvalue2', String, true)
  public cardvalue2: string = undefined;

  @JsonProperty('cardvalue3', String, true)
  public cardvalue3: string = undefined;

}