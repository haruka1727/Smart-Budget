export class Profile {
  public name: string;
  public image: string;
  public backendUrl: string | undefined;

  constructor(name: string, image: string, backendUrl?: string) {
    this.name = name;
    this.image = image;
    this.backendUrl = backendUrl;
  }
}
