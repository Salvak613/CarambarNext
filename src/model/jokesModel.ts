export class JokesModel {
  constructor(
    private _id: number,
    private _question: string,
    private _reponse: string
  ) {}

  get id(): number {
    return this._id;
  }

  get question(): string {
    return this._question;
  }

  set question(value: string) {
    this._question = value;
  }

  get reponse(): string {
    return this._reponse;
  }

  set reponse(value: string) {
    this._reponse = value;
  }
}
