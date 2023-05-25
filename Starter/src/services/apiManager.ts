import api from './api';

class ApiManager {
  private static instance: ApiManager;
  public api;

  private constructor() {
    this.api = api.create();
  }

  public static getInstance(): ApiManager {
    if (!ApiManager.instance) {
      ApiManager.instance = new ApiManager();
    }
    return ApiManager.instance;
  }
}

export default ApiManager;
