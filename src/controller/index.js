import { ActivityModel } from "../model";

export const getData = async () => {
  try {
    const res = await fetch('https://www.boredapi.com/api/activity/');
    const data = await res.json();

    const activity = new ActivityModel(data);
    
    return activity.getData();
  } catch (error) {
    return ({
      error: 'Unable to get activity.'
    })
  }
}