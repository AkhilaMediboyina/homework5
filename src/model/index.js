export class ActivityModel {
  constructor(data) {
    this.accessibility = data.accessibility;
    this.activity = data.activity;
    this.key = data.key;
    this.link = data.link;
    this.participants = data.participants;
    this.price = data.price;
    this.type = data.type;
  }

  getData = () => ({
    accessibility: this.accessibility,
    activity: this.activity,
    key: this.key,
    link: this.link,
    participants: this.participants,
    price: this.price,
    type: this.type,
  })
}